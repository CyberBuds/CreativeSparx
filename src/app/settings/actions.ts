'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const settingsSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email' }),
})

export type FormState = {
  message: string
  errors?: {
    name?: string[]
    email?: string[]
  }
}

export async function updateSettings(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = settingsSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // This is a placeholder for actual settings update
  console.log('Updating settings:', validatedFields.data)

  revalidatePath('/settings')
  return { message: 'Settings updated successfully' }
}
