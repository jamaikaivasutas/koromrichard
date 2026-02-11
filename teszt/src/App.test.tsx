// @vitest-environment happy-dom

import App from "./pages/App";
import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

describe("App (real API)", () => {
  it("igazi API--ból betölti és megjeleníti a Margharitát", async () => {
    render(<App />);

    const el = await screen.findByText("Margherita", {}, { timeout: 10000 });
    expect(el).toBeTruthy();
  });
});
