import React from "react";
import { render, screen } from "@testing-library/react";
import { Landing } from "../pages/landing/landing";

test("renders img tag", () => {
  render(<Landing />);
  const img = screen.getByAltText(/delivery/i);
  expect(img).toBeInTheDocument();

  const header = screen.getByText(/Order from top & favourite restaurants/i);
  expect(header).toBeInTheDocument();

  const subheader = screen.getByText(/Ready to see top restaurants to order?/i);
  expect(subheader).toBeInTheDocument();

  const registerButton = screen.getByText(/REGISTER/i);
  expect(registerButton).toBeInTheDocument();

  const loginLink = screen.getByText(/Login/i);
  expect(loginLink).toBeInTheDocument();
});
