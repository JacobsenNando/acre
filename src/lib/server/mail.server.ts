import nodemailer from 'nodemailer';
import { SENDER_EMAIL, SENDER_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	name: 'Site Hanrry!',
	host: 'smtp.gmail.com',
	port: 587,
	secure: true,
	auth: {
		user: `${SENDER_EMAIL}`,
		pass: `${SENDER_PASSWORD}`
	}
});

export default transporter;
