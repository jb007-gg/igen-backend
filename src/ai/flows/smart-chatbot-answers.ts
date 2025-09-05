'use server';

/**
 * @fileOverview A smart chatbot answers customer inquiries and helps with lead conversion.
 *
 * - smartChatbotAnswers - A function that handles the chatbot answering process.
 * - SmartChatbotAnswersInput - The input type for the smartChatbotAnswers function.
 * - SmartChatbotAnswersOutput - The return type for the smartChatbotAnswers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartChatbotAnswersInputSchema = z.object({
  customerInquiry: z.string().describe('The customer inquiry to be answered.'),
  productInformation: z.string().optional().describe('Information about the product or service the customer is asking about.'),
  customerHistory: z.string().optional().describe('A history of previous interactions with the customer.'),
});
export type SmartChatbotAnswersInput = z.infer<typeof SmartChatbotAnswersInputSchema>;

const SmartChatbotAnswersOutputSchema = z.object({
  chatbotAnswer: z.string().describe('The chatbot answer to the customer inquiry.'),
  relevantInformation: z.string().optional().describe('Any relevant information that might be helpful to the customer.'),
  suggestedNextSteps: z.string().optional().describe('Suggested next steps for the customer.'),
});
export type SmartChatbotAnswersOutput = z.infer<typeof SmartChatbotAnswersOutputSchema>;

export async function smartChatbotAnswers(input: SmartChatbotAnswersInput): Promise<SmartChatbotAnswersOutput> {
  return smartChatbotAnswersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartChatbotAnswersPrompt',
  input: {schema: SmartChatbotAnswersInputSchema},
  output: {schema: SmartChatbotAnswersOutputSchema},
  prompt: `You are a smart chatbot designed to answer customer inquiries and help with lead conversion.

  You should provide helpful and informative answers to customer inquiries.
  You should use the product information and customer history to provide personalized and relevant answers.
  You should suggest next steps for the customer to help them with their inquiry or to convert them into a lead.

  Here is the customer inquiry:
  {{customerInquiry}}

  {{#if productInformation}}
  Here is the product information:
  {{productInformation}}
  {{/if}}

  {{#if customerHistory}}
  Here is the customer history:
  {{customerHistory}}
  {{/if}}
  `,
});

const smartChatbotAnswersFlow = ai.defineFlow(
  {
    name: 'smartChatbotAnswersFlow',
    inputSchema: SmartChatbotAnswersInputSchema,
    outputSchema: SmartChatbotAnswersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
