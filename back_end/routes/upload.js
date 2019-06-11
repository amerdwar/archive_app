const IncomingForm = require('formidable').IncomingForm
var fs = require('fs');
module.exports = function upload(req, res) {
    var form = new IncomingForm()

    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
fs.writeFile(file.name,file.data,(err)=>{
    if (err) throw err;
    console.log('Saved!');
});
        // you can access it using file.path
    })
    form.on('end', () => {
        res.json()
    })
    form.parse(req)
}

