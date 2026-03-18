const nodemailer=require('nodemailer');

let transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'radhikaratala10@gmail.com',
        pass:''
    }
})