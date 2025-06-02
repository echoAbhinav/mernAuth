import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, 
  auth: {
    user: '8e8a29001@smtp-brevo.com',
    pass: 'jgc9HPK8W1nwSAdy',
  },
});


export default transporter;
