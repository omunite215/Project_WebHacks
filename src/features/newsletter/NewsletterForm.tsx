import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, addToast } from '@heroui/react';
import { newsletterSchema, type NewsletterValues } from './newsletter.schema';

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((r) => setTimeout(r, 400));
    console.info('[newsletter] subscribed', values);
    addToast({ title: 'Subscribed!', color: 'success' });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="flex items-start gap-2" noValidate>
      <Input
        aria-label="Email address"
        placeholder="you@example.com"
        type="email"
        {...register('email')}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Button type="submit" color="primary" isLoading={isSubmitting}>
        Subscribe
      </Button>
    </form>
  );
}
