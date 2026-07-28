"use client";

import { I18nProvider } from "@heroui/react";

export function NextUI({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>;
}
