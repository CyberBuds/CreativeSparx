'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string().min(1, { message: 'Please select a customer.' }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
})

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true })

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // In a real app, you would save the data to a database here.
  console.log('Creating invoice:', validatedFields.data);

  revalidatePath('/dashboard/invoices');
  return { message: 'Invoice created successfully.' };
}
