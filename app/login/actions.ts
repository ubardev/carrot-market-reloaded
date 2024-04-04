'use server';

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    errors: ['wrong password', 'password too short'],
  };
}
