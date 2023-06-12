var fs = require('fs');
var path = require('path');
let name = process.argv[2];
console.log(name)
var pugContent = `mixin ${name}`;
var scssContent = `@use '../../config/' as *;`;

const componetsFolderPath = '/src/pug/components/';
const stylesFolderPath = '/src/scss/components/';

try{
    fs.writeFileSync(path.join(__dirname, componetsFolderPath, `${name}.pug`), pugContent);

    fs.mkdirSync(path.join(__dirname, stylesFolderPath, `/${name}`));
    fs.writeFileSync(path.join(__dirname, stylesFolderPath, `/${name}`, `/_index.scss`), scssContent);

    const mainScssFile = path.join(__dirname, stylesFolderPath, '_index.scss');
    fs.readFile(mainScssFile, 'utf-8', function(err, data){
        if (err) throw err;
    
        var newValue = data + `\n@use '${name}';`;
    
        fs.writeFile(mainScssFile, newValue, 'utf-8', function (err) {
        if (err) throw err;
        console.log('filelistAsync complete');
        });
    });

}catch (e){
    console.log("Cannot write file ", e);
}