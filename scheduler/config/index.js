module.exports = {
    hello: {
        frequency: "* * * * *",
        handler: "handlers/sayHello"
    },
    goodbye: {
        frequency: "* * * * *",
        handler: "handlers/saygoodbye"
    },
    tacos: {
        frequency: "* * * * *",
        handler: "handlers/tacos"
    }
}