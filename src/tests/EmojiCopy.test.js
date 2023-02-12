import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test('Emojis should be copied and rendered successfully', () => {

    render(<App />);
    const clicks = screen.getAllByAltTextId('row');
    expect(clicks[0]).toHaveAttribute('data-clipboard-text');

})