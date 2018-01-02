const fs = require('fs');
const path = require('path');

const readFile = (filePath, cb)=>{
    try{
        fs.readFile(filePath,{encoding :'utf-8'},(error, data)=>
        {       
            if(error)
             {
                cb(error); 
             }
            cb(null,data);
        });
        
    }
    catch(error)
    {
        cb(error);
    }
};

const writeFile = (filePath,content,cb)=>{
    try{

        fs.writeFile(filePath,content,(error)=>{
          if(error)
          {
              cb(error);
          }
          cb(null);
        })

    }
    catch(error)
    {
        cb(error);
    }
}

exports.readFile = readFile;
exports.writeFile = writeFile;