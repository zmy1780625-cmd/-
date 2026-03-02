import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { topic, style, length } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "你是一个专业的演讲稿写作专家，擅长激情鼓舞风格。",
        },
        {
          role: "user",
          content: `主题：${topic}，风格：${style}，字数：${length}`,
        },
      ],
    });

    res.status(200).json({
      text: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
