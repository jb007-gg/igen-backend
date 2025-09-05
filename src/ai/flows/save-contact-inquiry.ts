'use server';
/**
 * @fileOverview Saves a contact inquiry to a Google Sheet.
 *
 * - saveContactInquiry - A function that saves the contact form data.
 * - SaveContactInquiryInput - The input type for the saveContactInquiry function.
 * - SaveContactInquiryOutput - The return type for the saveContactInquiry function.
 */

import { ai } from '@/ai/genkit';
import { appendToSheet } from '@/services/google-sheets';
import { z } from 'genkit';

const SaveContactInquiryInputSchema = z.object({
  name: z.string().describe('The name of the person making the inquiry.'),
  phone: z.string().optional().describe('The phone number of the person.'),
  message: z.string().describe('The content of the inquiry.'),
});
export type SaveContactInquiryInput = z.infer<
  typeof SaveContactInquiryInputSchema
>;

const SaveContactInquiryOutputSchema = z.object({
  success: z.boolean(),
});
export type SaveContactInquiryOutput = z.infer<
  typeof SaveContactInquiryOutputSchema
>;

export async function saveContactInquiry(
  input: SaveContactInquiryInput
): Promise<SaveContactInquiryOutput> {
  return saveContactInquiryFlow(input);
}

const saveContactInquiryFlow = ai.defineFlow(
  {
    name: 'saveContactInquiryFlow',
    inputSchema: SaveContactInquiryInputSchema,
    outputSchema: SaveContactInquiryOutputSchema,
  },
  async (input) => {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A:D'; // Adjust if your sheet has a different name or structure

    if (!spreadsheetId) {
      console.error('GOOGLE_SHEET_ID environment variable not set.');
      return { success: false };
    }

    try {
      const values = [
        [
          new Date().toISOString(),
          input.name,
          input.phone || '',
          input.message,
        ],
      ];

      await appendToSheet(spreadsheetId, range, values);

      return { success: true };
    } catch (error) {
      console.error('Error appending to Google Sheet:', error);
      return { success: false };
    }
  }
);
