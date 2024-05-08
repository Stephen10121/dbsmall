import type { Actions } from './$types';
import { Resend } from "resend";

async function sendForm(html: string) {
    const resend = new Resend(import.meta.env.VITE_RESEND_KEY);
    const { data, error } = await resend.emails.send({
        from: "contact@mail.thelocalfenceco.com",
        to: import.meta.env.VITE_EMAIL,
        subject: 'Website Contact Form',
        html
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email");
        const name = data.get("name");
        const desc = data.get("what");

        const html = `<h1>From: ${email}</h1><h2>Name: ${name}</h2><p>Description: ${desc}</p>`;

        await sendForm(html);
		// TODO log the user in

        return { success: true }
	},
} satisfies Actions;