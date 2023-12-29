const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    try{

        const fileExists = await fs.access(fileName)
            .then(() => true)
            .catch(() => false);

       if(fileExists){
        return;
       }
       else {
           await fs.writeFile(fileName,fileContent);
        
       }
    }
    catch(e){
        console.error(e);
    }
  
};
module.exports =  writeFile ;
