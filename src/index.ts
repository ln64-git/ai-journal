import { ChatPromptTemplate } from "@langchain/core/prompts";
import { Ollama } from "@langchain/ollama";

// Create an AI model instance
const chat = new Ollama({
    baseUrl: "http://localhost:11434",
    model: "deepseek-r1",
});

// Define a prompt template
const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful AI assistant."],
    ["user", "{question}"],
]);

async function runAgent(userInput: string) {
    const chain = prompt.pipe(chat);

    console.log("AI Response:");

    // Use streaming instead of invoke()
    const stream = await chain.stream({ question: userInput });

    for await (const chunk of stream) {
        process.stdout.write(chunk);
    }

    console.log("\n");
}

// Example: Get user input from CLI
const userInput = process.argv.slice(2).join(" ") || "Tell me a fun fact!";
runAgent(userInput);
