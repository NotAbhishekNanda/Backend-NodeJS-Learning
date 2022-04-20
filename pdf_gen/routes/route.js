const express = require('express');
const fs = require('fs');
const pdfService = require('../service/pdf-service');
// const PDFDocument = require("./pdfkit-tables");

const patients = require('../patients.json');

const router = express.Router();
router.get('/invoice', (req, res, next) => {
//     const stream = res.writeHead(200, {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment;filename=invioce.pdf;'
//     })
// pdfService.buildPDF(
//     (chunk) => stream.write(chunk),
//     () => stream.end()
// );
const doc = new pdfService();

// Pipe the PDF into a patient's file
doc.pipe(fs.createWriteStream(`patients.pdf`));

// Add the header - https://pspdfkit.com/blog/2019/generate-invoices-pdfkit-node/
doc
    .image("logo.png", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Patient Information.", 110, 57)
    .fontSize(10)
    .text("725 Fowler Avenue", 200, 65, { align: "right" })
    .text("Chamblee, GA 30341", 200, 80, { align: "right" })
    .moveDown();

// Create the table - https://www.andronio.me/2017/09/02/pdfkit-tables/
const table = {
    headers: ["Name", "Address", "Phone", "Birthday", "Email Address", "Blood Type", "Height", "Weight"],
    rows: []
};

// Add the patients to the table
for (const patient of patients) {
    table.rows.push([patient.name, patient.address, patient.phone, patient.birthday, patient.emailAddress, patient.bloodType, patient.height, patient.weight])
}

// Draw the table
doc.moveDown().table(table, 10, 125, { width: 590 });

// Finalize the PDF and end the stream
doc.end();
});

module.exports = router;