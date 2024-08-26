import nodemailer from "nodemailer";
import { SENDER_EMAIL, SENDER_PASSWORD } from "$env/static/private";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Porta para STARTTLS
  secure: true, // Use false para STARTTLS
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

export default transporter;
