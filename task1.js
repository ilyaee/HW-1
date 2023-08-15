const yargs = require('yargs')

yargs.command({
    command: 'current',
    builder: {
        year: {
            describe: 'Current year',
            // demandOption: true,
            type: 'string',
            alias: 'y',
        },
        month: {
            describe: 'Current month',
            // demandOption: false,
            type: 'string',
            alias: 'm',
        },
        date: {
            describe: 'Current date',
            // demandOption: false,
            type: 'string',
            alias: 'd',
        }
    },
    handler: function (inp) {
        let arr = Object.keys(inp)
        let today = new Date()
        var isYear = new Boolean(false)
        var isMonth = new Boolean(false)
        var isDay = new Boolean(false)

        for (var i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case 'year':
                    console.log(`Current year is: ${today.getFullYear()}`)
                    isYear = true
                    break
                case 'month':
                    console.log(`Current month is: ${today.getMonth() + 1}`)
                    isMonth = true
                    break
                case 'date':
                    console.log(`Current day is: ${today.getDate()}`)
                    isDay = true
                    break
            }
        }
        if (isYear == false && isMonth == false && isDay == false) {
            console.log(today)
        }
    },
})

yargs.command({
    command: 'add',
    builder: {
        date: {
            describe: "Date shift",
            type: 'string',
            demandOption: true,
            alias: 'd',
        }
    },
    handler: function(inp_add) {
        let arr = Object.entries(inp_add)
        for (var i = 0; i < arr.length; i++) {
            let a = arr[i].toString().substring(0,5)
            if (a == 'date,' ) {
                let dt = new Date()
                dt.setUTCDate(dt.getDate() + +arr[i].toString().substring(+arr[i].toString().indexOf(",") + 1))
                console.log(dt)
                break
            }
        }
    }
})

yargs.command({
    command: 'sub',
    builder: {
        month: {
            describe: "Month shift",
            type: 'string',
            demandOption: true,
            alias: 'm',
        }
    },
    handler: function(inp_sub) {
        let arr = Object.entries(inp_sub)
        for (var i = 0; i < arr.length; i++) {
            let a = arr[i].toString().substring(0,6)
            if (a == 'month,' ) {
                let dt = new Date()
                dt.setMonth(dt.getMonth() - +arr[i].toString().substring(+arr[i].toString().indexOf(",") + 1))
                console.log(dt)
                break
            }
        }
    }
})

yargs.parse();