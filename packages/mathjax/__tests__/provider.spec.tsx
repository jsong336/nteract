import { shallow } from "enzyme";
import React from "react";

import MathJaxContext from "../src/context";
import MathJaxProvider from "../src/provider";

describe("MathJaxProvider", () : void => {
  it("renders without crashing", () :void => {
    const component = shallow(<MathJaxProvider>$x^2 + y = 3$</MathJaxProvider>);
    expect(component.find(MathJaxContext.Provider)).toHaveLength(1);
  });
});
