/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Actions } from "./$types";
import transporter from "$lib/server/mail.server";
import { SENDER_EMAIL, EMAIL_RECEVER } from "$env/static/private";
import sanitizeHtml from "sanitize-html";
//commit
export const actions: Actions = {
  enviarEmail: async ({ request }) => {
    try {
      const formData = await request.formData();

      const nome: any = formData.get("nome");
      const telefone: any = formData.get("telefone");
      const mensagem: any = formData.get("mensagem");

      console.log(nome);
      console.log(telefone);
      console.log(mensagem);

      const nomeSanitized = sanitizeHtml(nome, {
        allowedTags: sanitizeHtml.defaults.allowedTags,
        allowedAttributes: {},
      });

      const telefoneSanitized = sanitizeHtml(telefone, {
        allowedTags: sanitizeHtml.defaults.allowedTags,
        allowedAttributes: {},
      });

      const sanitizedmensagem = sanitizeHtml(mensagem, {
        allowedTags: sanitizeHtml.defaults.allowedTags,
        allowedAttributes: {},
      });

      const html = `
			   <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; text-align: center;">
			     <div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: left;">
			       <h1 style="color: #333; text-align: center;">Contato via site</h1>
			       <hr style="border: 0.5px solid #EB4F27;">
			     <p style="font-size: 16px;"><strong>Nome:</strong> ${nomeSanitized}</p>
			     <p style="font-size: 16px;"><strong>Telefone:</strong> ${telefoneSanitized}</p>
			     <p style="font-size: 16px;"><strong>Mensagem:</strong> ${sanitizedmensagem}</p>
			     </div>
			   </div>
			 `;

      const send = async () => {
        const info = await transporter.sendMail({
          from: `${SENDER_EMAIL}`,
          to: `${EMAIL_RECEVER}`,
          subject: `Site Hanrry - Contato de ${nomeSanitized}`,
          html: html,
        });
        console.log("Mensagem Enviada:", info);
      };

      await send();

      return {
        status: 200,
        message: "Email enviado com sucesso",
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: {
          message: "Erro ao enviar email",
        },
      };
    }
  },
};
