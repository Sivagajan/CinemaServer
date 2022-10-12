import fs from 'fs'

export const readfromFile = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, (err,data) => {
            if(err)
                reject(err)
            else
                resolve(data)
        })
    })
}

export const updateSeatFile = (path, data) => {
    return new Promise ((resolve, reject) => {
        
        fs.writeFile(path, data, (err) => {
            if(err){
            console.log('Fehler im writeFile')
            reject(err)
            }else{
                resolve(data)
            }
        })
    })
}