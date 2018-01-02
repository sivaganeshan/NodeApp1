
const path = require('path');
const program = require('commander');
const csvToJsonlib = require(path.join(__dirname,'csvToJson.js'));
const pkg = require(path.join(__dirname,'package.json'));
const fileHelper = require(path.join(__dirname,'fileHelper'));
const uuid = require('uuid');



program
.version(pkg.version)
.option('-s, --string [string]', 'csv string to json file')
.option('-f, --file [filenamesArray]', 'csv file url to convert json')
.parse(process.argv);


if(program.string)
{  
    csvToJsonlib.csvToJson(program.string,(error,data)=>{
        if(error)
        {
         return console.error(error);
        }
        //console.log(data);
        let fileName = path.join(__dirname,uuid.v1()+'.json');
        fileHelper.writeFile(fileName,data,(error,created)=>{
            if(error)
            return console.error(error);
            console.log(`file created as : ${fileName}`);
        })
    });   
    
}
   
if(program.file)
{
    let content ='';
    let fileNames = program.file.split(',');
    fileHelper.readFile(path.join(__dirname,fileNames[0]),(error,data)=>{
        if(error)
        return console.error(error);
        content = data;
        csvToJsonlib.csvToJson(content,(error,data)=>{
        if(error)
        {
         return console.error(error);
        }
        //console.log(data);
        fileHelper.writeFile(path.join(__dirname,fileNames[1]),data,(error,created)=>{
            if(error)
            return console.error(error);
            console.log(`file created as : ${fileNames[1]}`);
        })

    });
    })
   
}
    

