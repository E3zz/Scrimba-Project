import React from 'react'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has 
and suggests a recipe they could make with some or all of those ingredients.
Format your response in markdown with clear sections.
`;

export async function getRecipeFromAI(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `I have these ingredients: ${ingredientsString}. Suggest a detailed recipe.`;
    
    try {
        const response = await fetch("https://api.together.xyz/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: prompt }
                ],
                max_tokens: 1024,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Together AI API error:", error);
        throw new Error("Failed to generate recipe. Please try again later.");
    }
}