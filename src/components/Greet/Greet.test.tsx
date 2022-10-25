// import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);

//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

/***************************************************************************** */

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 *
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test.only("Greet renders with a name", () => {
//   render(<Greet name="Mohammed" />);

//   const textElement = screen.getByText("Hello Mohammed");
//   expect(textElement).toBeInTheDocument();
// });

// test.skip("Greet renders with a name", () => {
//   render(<Greet name="Mohammed" />);

//   const textElement = screen.getByText("Hello Mohammed");
//   expect(textElement).toBeInTheDocument();
// });

// describe("Greet", () => {
//   test("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   test("renders with a name", () => {
//     render(<Greet name="Mohammed" />);

//     const textElement = screen.getByText("Hello Mohammed");
//     expect(textElement).toBeInTheDocument();
//   });
// });
/**********************/

// describe("Greet", () => {
//   test("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   test("renders with a name", () => {
//     render(<Greet name="Mohammed" />);

//     const textElement = screen.getByText("Hello Mohammed");
//     expect(textElement).toBeInTheDocument();
//   });
// });

// describe("Greet", () => {
//   test("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   describe("Nested", () => {
//     test("renders with a name", () => {
//       render(<Greet name="Mohammed" />);

//       const textElement = screen.getByText("Hello Mohammed");
//       expect(textElement).toBeInTheDocument();
//     });
//   });
// });

// describe.only("Greet", () => {
//   test("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });
// });

// describe.skip("Nested", () => {
//   test("renders with a name", () => {
//     render(<Greet name="Mohammed" />);

//     const textElement = screen.getByText("Hello Mohammed");
//     expect(textElement).toBeInTheDocument();
//   });
// });

/************** */

// describe("Greet", () => {
//   it("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   fit("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });

//   xit("renders correctly", () => {
//     render(<Greet />);

//     const textElement = screen.getByText("Hello");
//     expect(textElement).toBeInTheDocument();
//   });
// });

/***************************/

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

// describe("Nested", () => {
//   test("renders with a name", () => {
//     render(<Greet name="Mohammed" />);

//     const textElement = screen.getByText("Hello Mohammed");
//     expect(textElement).toBeInTheDocument();
//   });
// });
