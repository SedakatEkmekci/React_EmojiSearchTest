import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test('The emoji list should render successfully when the app is first opened', () => {
    render(<App />);
    const items = screen.getAllByText(/Click to copy emoji/i);
    const item = screen.getByText('Sad');
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
});