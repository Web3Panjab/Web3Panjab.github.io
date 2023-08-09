import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'web3panjab.community@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

    return NextResponse.json({
        status: 'ok',
    });
}
