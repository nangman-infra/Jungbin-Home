import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsPage from "./page";

describe("ProjectsPage", () => {
  it("renders the projects page correctly", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Infrastructure Blueprints.")).toBeInTheDocument();
  });
});
