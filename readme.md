CSV to JSON converter. Nodejs App - #1
js Files 
1.cli.js
2.fileHelper.js
3.csvToJson.js

Npm files:
package.config
package-lock.json

csv file:
customer-data.csv

json file:
customer-data.json


help: 
To get arguments details execute the following command
    node cli.js -h
To convert csv file to json
    node cli.js -f customer-data.csv,customer-data.json

here, customer-data.csv,customer-data.json both defines the file
to read and write and directory path respectively.
