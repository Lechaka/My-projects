const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop
"
});

(async () => {
  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [{ role: "user", content: "Hello!" }]
  });
  console.log(response.choices[0].message.content);
})();