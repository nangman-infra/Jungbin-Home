import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectDetailPage from "./page";
import { use } from "react";

// Mock React.use since we are testing a component that uses it
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    use: vi.fn((promise) => promise)
  };
});

describe("ProjectDetailPage", () => {
  it("renders the project detail page correctly for project 2", async () => {
    // The mocked `use` will unwrap the object synchronously
    render(<ProjectDetailPage params={{ id: "2" } as any} />);
    expect(await screen.findByText("Project Overview")).toBeInTheDocument();
  });
});
