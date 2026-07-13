import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProjectDetailPage from "./page";

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
    render(<ProjectDetailPage params={Promise.resolve({ id: "2" })} />);
    expect(await screen.findByText("Project Overview")).toBeInTheDocument();
  });
});
