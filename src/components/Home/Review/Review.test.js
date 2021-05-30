import * as ReactDOM from "react-dom";
import Review from "./Review";

test("renders the correct component", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Review />, root);

  expect(root.querySelector("h4").textContent).toBe("Look, What People Say");
});
