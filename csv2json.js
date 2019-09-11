
const csv=require('csvtojson')
const fs=require("fs")
const csvFilePath='/Users/sonya/readStream/source.csv'

csv()
.fromFile(csvFilePath)
.then((jsonData)=>{


    var jsonContent = JSON.stringify(jsonData);
    console.log(jsonContent);

    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
})

const jsonArray=csv().fromFile(csvFilePath);
