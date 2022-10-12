import { readfromFile, updateSeatFile } from "../util/filestorage.js"

export const getAllSeats = (_,res) => {

    readfromFile('data.json')
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => {
        console.log('error im getAllSeats', err)
        res.status(500).end()
    })
}



export const updateSeatState = (req, res) => {

    const seated = req.body.seat
    
    console.log(seated)

    const seat = req.body.seat


    readfromFile('data.json')
        .then(data => JSON.parse(data))
        .then( data => {

            const sitzplatz = data.find(item => {
                return item.seat === seat
            })

            sitzplatz.booked = !sitzplatz.booked

            console.log(sitzplatz.booked)

            //console.log(JSON.stringify(data))
            return updateSeatFile('data.json', JSON.stringify(data))
        })
        .then(data => res.status(201).json(JSON.parse(data)))
        .catch(err => {
            console.log('error im updateSeatState', err)
            res.status(500).end()
        })
}