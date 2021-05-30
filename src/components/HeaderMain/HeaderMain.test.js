import { render, screen } from "@testing-library/react"
import HeaderMain from "./HeaderMain";


test('should render headerMain component', () => {
    render(<HeaderMain />);
    const headerMainElement = screen.getByTestId('headerMain-1');
    expect(headerMainElement).toBeInTheDocument();
    expect(headerMainElement).toHaveTextContent('experienced');
}) 