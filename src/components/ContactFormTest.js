import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('Form adds new data', () => {
    render (<ContactForm />)

    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);


    fireEvent.change(firstNameInput, {target: {value: 'Joe'}})
    fireEvent.change(lastNameInput, {target: {value: 'Idelson'}})
    fireEvent.change(emailInput, {target: {value: 'joeidelson@gmail.com'}})
    fireEvent.change(messageInput, {target: {value: 'testing messages'}})

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    const newFirstName = screen.getByText(/Joe/i);

    expect(newFirstName).toBeInTheDocument();
})