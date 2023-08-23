import { render, screen,fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Testing <Button/>',()=>{
    it('should be having id and text',()=>{
        render(<Button/>);
        const buttonElement = screen.getByTestId("btnOne");
        const labelElement = screen.getByTestId("count");
        expect(buttonElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        fireEvent.click(buttonElement);
        expect(labelElement).toHaveTextContent("1");
        fireEvent.click(buttonElement);
        expect(labelElement).toHaveTextContent("2");
    })
});