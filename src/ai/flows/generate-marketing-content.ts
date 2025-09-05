'use server';

/**
 * @fileOverview AI-powered marketing content generator.
 *
 * - generateMarketingContent - A function that generates marketing content based on a product description and content type.
 * - GenerateMarketingContentInput - The input type for the generateMarketingContent function.
 * - GenerateMarketingContentOutput - The return type for the generateMarketingContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingContentInputSchema = z.object({
  productDescription: z
    .string()
    .describe('A detailed description of the product or service.'),
  contentType: z
    .string()
    .describe(
      'The type of marketing content to generate (e.g., ad copy, social media post, email subject line).' // Removed line break
    ),
  tone: z
    .string()
    .optional()
    .describe("The tone of the marketing content (e.g., professional, funny, serious)."),
});
export type GenerateMarketingContentInput = z.infer<
  typeof GenerateMarketingContentInputSchema
>;

const GenerateMarketingContentOutputSchema = z.object({
  content: z.string().describe('The generated marketing content.'),
});
export type GenerateMarketingContentOutput = z.infer<
  typeof GenerateMarketingContentOutputSchema
>;

export async function generateMarketingContent(
  input: GenerateMarketingContentInput
): Promise<GenerateMarketingContentOutput> {
  return generateMarketingContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingContentPrompt',
  input: {schema: GenerateMarketingContentInputSchema},
  output: {schema: GenerateMarketingContentOutputSchema},
  prompt: `You are an expert marketing copywriter.

  Generate marketing content for the following product or service:
  {{{productDescription}}}

  The content should be a {{contentType}}.

  The tone of the content should be {{tone}}, if tone is not empty.
  `, // Added line break
});

const generateMarketingContentFlow = ai.defineFlow(
  {
    name: 'generateMarketingContentFlow',
    inputSchema: GenerateMarketingContentInputSchema,
    outputSchema: GenerateMarketingContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
