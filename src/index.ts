import { ChatPromptTemplate } from "@langchain/core/prompts";
import { Ollama } from "@langchain/ollama";

const chat = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "deepseek-r1",
});

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful AI assistant."],
    ["user", "{question}"],
]);

async function runAgent(userInput: string) {
    const chain = prompt.pipe(chat);
    console.log("AI Response:");
    const stream = await chain.stream({ question: userInput });
    for await (const chunk of stream) {
        process.stdout.write(chunk);
    }
    console.log("\n");
}

const userInput = process.argv.slice(2).join(" ") || "Tell me a fun fact!";
runAgent(userInput);
