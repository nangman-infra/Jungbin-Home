import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { I18nProvider, useI18n } from "@/lib/i18n";

function Harness() {
  const { lang, setLang, t } = useI18n();

  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span>{t("hello", "안녕")}</span>
      <button type="button" onClick={() => setLang("ko")}>
        switch
      </button>
    </div>
  );
}

describe("i18n provider", () => {
  it("switches language and translated text", () => {
    render(
      <I18nProvider>
        <Harness />
      </I18nProvider>
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByText("hello")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "switch" }));

    expect(screen.getByTestId("lang")).toHaveTextContent("ko");
    expect(screen.getByText("안녕")).toBeInTheDocument();
  });
});
