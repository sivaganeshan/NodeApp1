
const fs = require('fs');
const path = require('path');
const csvToJsonFromFile = (filePath='', cb)=>
{
    try{
        let allLineContent = '';
        fs.readFile(path.join(__dirname,filePath),{encoding :'utf-8'},(error, data)=>
        {       
            if(error)
             {
                console.log(error);
             }
            allLineContent = data;

            csvToJson(allLineContent,cb);
        });
        
    }
    catch(error)
    {
        cb(error);
    }
}

const csvToJson = (allLineContent='', cb) => {

try{
    if(allLineContent.indexOf('\r\n')!= -1){
        //split by newline 
        allLineContent =  allLineContent.split('\r\n');
    }
    else{
        //split by newline 
        allLineContent =  allLineContent.split('\n');
    }


allLineContent.pop();
let contentLength = allLineContent.length;
let contentLengthForComma = contentLength-1;
//split header values
if(allLineContent.length >=2)
{
let keys = allLineContent[0].split(',');
let jsonstr = '[';
for(let i=1; i<contentLength; i++)
{
    jsonstr += '{';
    let rowVals = allLineContent[i].split(',');
    for(j=0; j<rowVals.length;j++)
    {
        jsonstr+='\"'+keys[j] +'\":\"'+rowVals[j] +'\"';
        if(rowVals.length-1 != j)
        {
            jsonstr+=',';
        }
    }
    jsonstr += '}';
    if(contentLengthForComma != i)
    {
        jsonstr+=',';
    }
}

jsonstr+=']';
cb(null,jsonstr);
}
else{
    cb('Not a validCsv');
}
} 
catch(error)
{
    cb(error);
}
}

exports.csvToJson = csvToJson;
exports.csvToJsonFromFile = csvToJsonFromFile;