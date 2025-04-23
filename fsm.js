import { readFileSync, writeFileSync } from "fs";
import {readFile, writeFile} from "fs";

// const first = readFileSync('./contends/firstfile.txt', 'utf8')
// const second = readFileSync('./contends/secondfile.txt', 'utf8')

// writeFileSync('./contends/firstfile.txt', 'HELLO AGAIN THIS IS SHABIR AHMAD EDITING THE FILE', {flag:'a'});

// console.log(first)
// console.log(second)

// Asynchronos way of reading and writing text into files.

readFile('./contends/firstfile.txt', 'utf8', (error, result) => {
    if (error){
        console.log(error)
        return;
    }
    const firstresult = result
    readFile('./contends/secondfile.txt', 'utf8', (error, result) => {
        if (error){
            console/log(error)
            return;
        }
        const secondresult = result
        writeFile('./contends/result-file.txt', `This is the result file: ${firstresult}, ${secondresult}`,
             (error, result) => {
            if (error){
                console.log(error)
                return;

            }
            console.log(result)
        })
    }) 
})
