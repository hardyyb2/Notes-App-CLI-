
//Importing libraries and packages
const yargs = require(`yargs`)
const notes = require(`./notes`)
const chalk = require(`chalk`)

//add command
yargs.command({
    command: `add`,
    describe: `add a note`,
    builder: {
        title: {
            describe: `title of a note`,
            demandOption: true,
            type: `string`
        },
        body: {
            describe: `body of note`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv) {
        notes.add(argv.title, argv.body)
    }
})

//delete command
yargs.command({
    command: `delete`,
    describe: `Delete a note`,
    builder: {
        title: {
            describe: `title of a note`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv) {
        notes.delet(argv.title);
    }
})

//list all notes command
yargs.command({
    command: `list`,
    describe: `Show all notes`,
    handler(argv) {
        notes.list();
    }
})

//read a specific note command
yargs.command({
    command: `read`,
    describe: `Read a note`,
    builder: {
        title: {
            describe: `title of a note`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv) {
     notes.read(argv.title)
    }
})

//delete all notes
yargs.command({
    command:`empty`,
    describe:`delete all notes`,
    handler(argv){
        notes.empty();
    }
})

// to parse the cli command
yargs.parse();