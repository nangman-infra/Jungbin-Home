import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Home from "@/app/page";
import { I18nProvider } from "@/lib/i18n";

describe("jungbin home", () => {
  it("renders translated sections and skill cards", () => {
    vi.useFakeTimers();

    render(
      <I18nProvider>
        <Home />
      </I18nProvider>
    );

    act(() => {
      vi.advanceTimersByTime(12000);
    });

    expect(screen.getByText("Ryu Jungbin")).toBeInTheDocument();
    expect(screen.getByText("Skill Capacity")).toBeInTheDocument();
    expect(screen.getByText("AWS Architecture")).toBeInTheDocument();

    vi.useRealTimers();
  });
});
