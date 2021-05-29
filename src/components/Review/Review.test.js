import { render, screen } from "@testing-library/react"
import Review from "./Review"

test('should render review component', () => {
    render(<Review/>);
    const reviewElement = screen.getByTestId('review-1');
    // expect(reviewElement).toBeInTheDocument();
    expect(reviewElement).toHaveTextContent('People');
    
})