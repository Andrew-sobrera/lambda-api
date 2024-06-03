import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: 'us-east-1' });

export const senderSqs = async (body) => {
    const params = {
        MessageBody: JSON.stringify({ body }),
        QueueUrl: "https://sqs.us-east-1.amazonaws.com/905418208901/sqs-worker",
        DelaySeconds: 0
    };

    try {
        const command = new SendMessageCommand(params);
        const data = await sqsClient.send(command);
        return "Mensagem enviada com sucesso";
    } catch (err) {
        console.error("Erro", err);
        throw err;
    }
};
