
const fs = require('fs');
const path = require('path');

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