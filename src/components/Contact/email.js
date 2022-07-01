const SparkPost= require("sparkpost");
async function emailHandler (req, res){
    const client = new SparkPost(process.env.SPARKPOST);
    const data= JSON.parse(req.body);
    const {email, message}=data;
    client.transmissions.send({
        content: {
            from: "nesar.uddin100@gmail.com",
            subject: "test email",
            html:`<html> <body><p>${message}</p><p> --Nesar</p> </body></html>`
        },
        recipients:[{address:email}]
    }).then(()=>{
        res.statusCode=200;
        res.setHeader("Content-Type","application-json");
        res.end(JSON.stringify({error:null}))
    }).catch(()=>{
        res.statusCode=500;
        res.setHeader("Content-Type","application-json");
        res.end(JSON.stringify({error:"error sening email"}))
    })

}
export default emailHandler;