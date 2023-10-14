import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools"; // search for detail from google
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import dotenv from "dotenv";
dotenv.config();


const agentCon = async (req, res) => {
    console.log("Agent data : ", req.body.text);
    const model = new OpenAI({
        temperature: 0,
        openAIApiKey: process.env.CHATGPT_API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY

    });
    const tools = [
        new SerpAPI(process.env.SERPAPI_API_KEY, {
            hl: "en",
            gl: "us"
            // location //optional    
        }),
        new Calculator(),

    ];
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "zero-shot-react-description",
        // verbose: true,
    })
    console.log("loaded the agent....");
    const result = await executor.call({
        // input: "what is the capital of  India",
        input: req.body.text
    })

    console.log(result);
    res.status(200).json({
        status: true,
        result
    })

}

export default agentCon;