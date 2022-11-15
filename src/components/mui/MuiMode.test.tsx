import { render, screen } from '../../test-utils'
// import { render, screen } from "@testing-library/react";
// import { AppProviders } from "../../providers/AppProviders";
import { MuiMode } from './MuiMode'

describe('MuiMode', () => {
  // test("renders text correctly", () => {
  //   render(<MuiMode />, {
  //     wrapper: AppProviders,
  //   });
  //   const headingElement = screen.getByRole("heading");
  //   expect(headingElement).toHaveTextContent("dark mode");
  // });

  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
