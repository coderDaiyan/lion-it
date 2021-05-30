import { render, screen } from "@testing-library/react"
import Review from "./Review"
import * as ReactDOM from 'react-dom'

// test('should render review component', () => {
//     render(<Review/>);
//     const reviewElement = screen.getByTestId('review-1');
//     // expect(reviewElement).toBeInTheDocument();
//     expect(reviewElement).toHaveTextContent('People');
    
// })

test ("renders the correct component", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Review />, root);

    expect(root.querySelector('h4').textContent).toBe("Look, What People Say");
})