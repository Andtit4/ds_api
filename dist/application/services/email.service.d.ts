export declare class EmailService {
    private transporter;
    constructor();
    sendWelcomeEmail(to: string, name: string): Promise<void>;
}
