import nodemailer from 'nodemailer'

export const sendMail = (req, res) => {
    
    const message = {
        from: process.env.MAILSENDER,
        to: req.body.receiver,          // im frontend muss das property auch receiver heißen
        subject: 'Danke für deine Reservierung',
        text: req.body.text, // wenn der text von einem kontaktformular kommt und der text ist das input feld
        html: `<p>${req.body.text}</p>`
    }

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "27a03f64f0ac3d",
            pass: "b0b84d8306934c"  // in die .env datei speichern
            
        }
    });

    transport.sendMail(message, (err,info) => {
        console.log(info)
        if(err)
            return res.status(500).json({message: err})
        return res.status(200).json({message: 'alles roger'})
    })
}