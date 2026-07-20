import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea, addToast } from '@heroui/react';
import { contactSchema, type ContactValues } from './contact.schema';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info('[contact] submitted', values);
    addToast({
      title: 'Message sent!',
      description: 'We will get back to you soon.',
      color: 'success',
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-4" noValidate>
      <Input
        label="Name"
        {...register('name')}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register('email')}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Textarea
        label="Message"
        minRows={4}
        {...register('message')}
        isInvalid={!!errors.message}
        errorMessage={errors.message?.message}
      />
      <Button type="submit" color="primary" isLoading={isSubmitting}>
        Send message
      </Button>
    </form>
  );
}
