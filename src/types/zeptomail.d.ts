declare module "zeptomail" {
  interface EmailAddress {
    address: string;
    name?: string;
  }

  interface Recipient {
    email_address: EmailAddress;
  }

  interface SendMailOptions {
    from: EmailAddress;
    to: Recipient[];
    reply_to?: EmailAddress;
    subject: string;
    htmlbody?: string;
    textbody?: string;
  }

  interface SendMailClientConfig {
    url: string;
    token: string;
  }

  export class SendMailClient {
    constructor(config: SendMailClientConfig);
    sendMail(options: SendMailOptions): Promise<unknown>;
  }
}
