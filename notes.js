const fs = require(`fs`)
const chalk = require(`chalk`)

//add function ( add a note)
const add = (title, body) => {
    let notes = load();
    console.log(chalk.bgYellow(`Adding a note..`))

    let sameNote = notes.find(note => note.title === title)
    if (!sameNote) {
        notes.push({
            title: title,
            body: body
        })
        save(notes);
        console.log(chalk.bgGreen(`Note added successfully.`))
    } else {
        console.log(chalk.inverse(`A note with this name already exits . Please change the name. `))
    }
}

//delete function(delete a note)
const delet = (title) => {
    const notes = load();
    console.log(chalk.bgYellow(`Deleting the note ...`))

    let saveNote = notes.filter(note => note.title !== title)
    if (saveNote.length === notes.length) {
        console.log(chalk.bgRed(`No such note found. Please check the title.`))
    } else {
        console.log(chalk.bgGreen(`Note deleted successfully.`))
        save(saveNote)
    }
}

//read function(read a specific note)
const read = (title) => {
    let notes = load();
    const reqNote = notes.find(note => note.title === title)
    if (!reqNote) console.log(chalk.bgRed(`No such note found..`))
    else {
        console.log(chalk.bgBlue(`Note is ...`))
        console.log(chalk.inverse(reqNote.title) + '\n' + reqNote.body)
    }
}

//list function(show all notes)
const list = () => {
    const notes = load();
    if (notes.length === 0) console.log(chalk.bgRed(`NOtes are empty..`))
    else
        console.log(chalk.bgMagenta(`Your notes are \n`), notes);
}

//empty function(deletes all notes)
const empty=()=>{
    console.log(`Deleting all notes ..`)
    const notes =[]
    save(notes)
    console.log(chalk.bgGreen(`Allnotes deleted successfully.`))
}

//save function(saves the notes)
const save = (notes) => {
    let data = JSON.stringify(notes)
    fs.writeFileSync(`notesData.json`, data)
}

//load function (loads all notes)
const load = () => {
    try {
        const data = fs.readFileSync(`notesData.json`);
        const dataJSON = data.toString();
        const reqData = JSON.parse(dataJSON)
        return reqData
    } catch (e) {
        return []
    }
}


module.exports = {
    add: add,
    delet: delet,
    list: list,
    read: read,
    empty:empty
}