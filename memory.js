
import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const memoryCon = async (req, res) => {
    console.log(req.body.text);
    const model = new OpenAI({
        openAIApiKey: process.env.CHATGPT_API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY

    })
    const memory = new BufferMemory();
    const chain = new ConversationChain({
        llm: model,
        memory: memory
    })
    const result = await chain.call({
        input: "hy, I'm Adarsh Mishra"
        // input: req.body.text
    })
    const result2 = await chain.call({
        input: req.body.text
        // input: "What is my name?",
    })

    console.log(result2);
    res.status(200).json({
        status: true,
        result2
    })
}

export default memoryCon;