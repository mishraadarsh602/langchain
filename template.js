import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const templateCon = async (req, res) => {
    console.log("Template : ", req.body.text);
    const template = "What would be a good company name a company that makes {product}? "
    const promptTemplate = new PromptTemplate({
        template: template,
        inputVariables: ['product'],
    })
    const formattedPrompt = await promptTemplate.format({
        product: "colorful socks",
    })
    const model = new OpenAI({
        temperature: 0.9,
        openAIApiKey: process.env.CHATGPT_API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY

    })
    const chain = new LLMChain({
        llm: model,
        prompt: promptTemplate,
    })
    const result = await chain.call({
        // product: "colorful socks",
        product: req.body.text
    })
    console.log("Res : ", result);
    res.status(200).json({
        status: true,
        result
    })


}

export default templateCon; 