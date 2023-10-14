
import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "langchain/llms/openai";

const streamCon = async (req, res) => {
    console.log("Stream : ", req.body.text);
    const model = new OpenAI({
        openAIApiKey: process.env.CHATGPT_API_KEY,
        streaming: true,
        callbacks: [{
            handleLLMNewToken(token) {
                process.stdout.write(token);
            },
        },
        ],
    })
    const result = await model.call(req.body.text);
    res.status(200).json({
        status: true,
        result
    })
    // console.log(res2);
}

export default streamCon;