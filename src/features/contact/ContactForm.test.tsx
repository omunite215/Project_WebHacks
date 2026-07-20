import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('shows validation errors on empty submit', async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/at least 2 characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
