import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header.js';

test('Header should be rendered successfully', () => {
    render(<Header />);

    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
})