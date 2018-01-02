CSV to JSON converter. Nodejs App - #1 

js Files :

cli.js, fileHelper.js, csvToJson.js 


Npm files:

package.config , package-lock.json 

csv file: 

customer-data.csv

json file:

customer-data.json 

help:

To get arguments details 

    node cli.js -h 
    
To convert csv file to json 

    node cli.js -f customer-data.csv,customer-data.json 

here, 
customer-data.csv,customer-data.json both defines the file name
to read and write from the current executing path respectively. 
