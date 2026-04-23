import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Sidebar } from "@/components/ui/Sidebar";

describe("sidebar", () => {
  it("renders navigation and social links", () => {
    render(<Sidebar />);

    expect(screen.getByText("Ryu Jeongbin")).toBeInTheDocument();
    expect(screen.getByText("Cloud Systems")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ryu jeongbin/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });
});
