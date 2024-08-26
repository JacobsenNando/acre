import nodemailer from 'nodemailer';
// import { SENDER_EMAIL, SENDER_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: true,
	auth: {
		user: `sitehanrry@gmail.com`,
		pass: `daib vups rpvq jfhx`
	}
});

export default transporter;
