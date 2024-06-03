import { senderSqs } from "../sqs/sender-sqs";

export const handler = async (event) => {

  const body = JSON.stringify(event.body)
  const sendMessage = await senderSqs(body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        sendMessage
      },
      null,
      2
    ),
  };
};
