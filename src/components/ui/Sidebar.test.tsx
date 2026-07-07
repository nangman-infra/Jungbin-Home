import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Sidebar } from "@/components/ui/Sidebar";

describe("sidebar", () => {
  it("renders navigation and social links", () => {
    render(<Sidebar />);

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });
});
