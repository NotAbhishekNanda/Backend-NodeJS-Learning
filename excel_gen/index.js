const express = require('express')
const app = express();
const mime = require('mime')
const path = require('path')
const xl = require('excel4node')

const router = express.Router()

const headerColumns = ['Name', 'Email', 'Phone']

const data = [
    { name: 'Abhishek', email: 'abhisheknanda1967@gmail.com', phone: '+919776002346' },
    { name: 'Ashutosh', email: 'ashutosh@gmail.com', phone: '+919398743515' },
    { name: 'Abhiram', email: 'abhiram@gmail.com', phone: '+919776002346' },
    { name: 'Abhijit', email: 'abhijit@gmail.com', phone: '+919398743515' },

]

const createExcelFile = () => {
    const wb = new xl.Workbook()
    const ws = wb.addWorksheet("userInfo")
    let colIndex = 1
    headerColumns.forEach((item) => {
        ws.cell(1, colIndex++).string(item)
    })
    let rowIndex = 2;
    data.forEach((item) => {
        let columnIndex = 1;
        Object.keys(item).forEach((colName) => {
            ws.cell(rowIndex, columnIndex++).string(item[colName])
        })
        rowIndex++;
    })
    wb.write('userInfo.xlsx')

}

router.get('/userInfoxls', (req, res, next) => {
    createExcelFile()
    const file = __dirname + '/userInfo.xlsx'
    const fileName = path.basename(file)
    const mimeType = mime.getType(file)
    res.setHeader("Content-Disposition", "attachment;filename=" + fileName)
    res.setHeader("Content-Type", mimeType)

    setTimeout(() => {
        res.download(file)
    }, 2000);
})

app.use('/', router)
app.listen(5000, () => {
   console.log('app is running')
})
