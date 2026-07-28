# Tasks: Next.js 14 → 16, Node 18 → 24, NextUI → HeroUI Migration

## Phase 1: Preparation

- [ ] **1.1** Crear git commit de backup del estado actual
- [ ] **1.2** Verificar Node.js 24.12.0 instalado (`nvm install 24 && nvm use 24`)
- [ ] **1.3** Limpiar `node_modules` y `pnpm-lock.yaml`

## Phase 2: Core Migration

### 2.1 React 19
- [ ] **2.1.1** Actualizar React: `pnpm add react@latest react-dom@latest @types/react@latest @types/react-dom@latest`

### 2.2 Next.js 16
- [ ] **2.2.1** Actualizar Next.js: `pnpm add next@latest eslint-config-next@latest`
- [ ] **2.2.2** Ejecutar codemod: `pnpm dlx @next/codemod@canary upgrade latest`
- [ ] **2.2.3** Verificar y ajustar `next.config.js` (experimental.turbopack → turbopack)

### 2.3 HeroUI Migration
- [ ] **2.3.1** Desinstalar NextUI: `pnpm remove @nextui-org/react @nextui-org/theme`
- [ ] **2.3.2** Instalar HeroUI: `pnpm add @heroui/react @heroui/theme`
- [ ] **2.3.3** Actualizar imports en `src/config/providers/NextUIProviderApp.tsx`
- [ ] **2.3.4** Actualizar imports en `src/components/Hero/Hero.tsx`
- [ ] **2.3.5** Actualizar imports en `src/components/NavBar/*.tsx` (5 archivos)
- [ ] **2.3.6** Actualizar imports en `src/components/Technologies/*.tsx` (2 archivos)
- [ ] **2.3.7** Actualizar `tailwind.config.ts`: `nextui()` → `heroui()`

## Phase 3: Verification

- [ ] **3.1** Ejecutar `pnpm install`
- [ ] **3.2** Ejecutar `pnpm build`
- [ ] **3.3** Ejecutar `pnpm dev` y verificar en localhost:3000
- [ ] **3.4** Ejecutar `pnpm lint`
- [ ] **3.5** Git commit de la migración completa

## Summary

| Phase | Tasks | Status |
|-------|-------|--------|
| 1. Preparation | 3 | Pending |
| 2. Core Migration | 7 | Pending |
| 3. Verification | 5 | Pending |
| **Total** | **15** | |

## Review Workload Forecast

- Changed files: ~12
- Estimated changed lines: ~100
- Chained PRs recommended: No
- 400-line budget risk: Low
- Decision needed before apply: No
