const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../newFolder', 'newFile.txt')

// fs.mkdir(path.join(__dirname, '../', 'newFolder'), err => {
//     if(err){
//         console.log(err);
//         throw new Error(err)
//     } 
//     console.log('New folder was create', )
// })

// fs.writeFile(
//     filePath,
//     'New content',
//     err => {
//         if(err) throw new Error(err)

//         console.log('file was create');
//     }
// )

// const date = new Date().toDateString()
// fs.appendFile(
//     filePath,
//     date,
//     err => {
//         if(err) throw new Error(err)

//         console.log('file was changed');
//     }
// )

fs.readFile(
    filePath,
    'utf-8',
    (err, data) => {
        if(err) throw new Error(err)

        console.log(data);
    }
)