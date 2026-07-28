# Design: Next.js 14 → 16, Node 18 → 24, NextUI → HeroUI Migration

## Overview

Migration esqquema de 3 fases:
1. **Preparation** - Backup y Node.js update
2. **Core Migration** - Next.js, React, HeroUI
3. **Verification** - Build, dev, lint

## Migration Sequence

```
┌─────────────────────────────────────────────────────────────┐
│ 1. PREPARATION                                               │
├─────────────────────────────────────────────────────────────┤
│ • Git commit del estado actual (backup)                     │
│ • Verificar Node.js 24.x instalado                         │
│ • Limpiar node_modules y lock file                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. CORE MIGRATION                                            │
├─────────────────────────────────────────────────────────────┤
│ 2.1 React 19                                                 │
│     • pnpm add react@latest react-dom@latest               │
│       @types/react@latest @types/react-dom@latest           │
│                                                              │
│ 2.2 Next.js 16                                               │
│     • pnpm add next@latest eslint-config-next@latest       │
│     • pnpm dlx @next/codemod@canary upgrade latest         │
│     • Verificar next.config.js                              │
│                                                              │
│ 2.3 HeroUI Migration                                         │
│     • pnpm remove @nextui-org/react @nextui-org/theme       │
│     • pnpm add @heroui/react @heroui/theme                 │
│     • Actualizar imports en todos los archivos              │
│     • Renombrar NextUIProvider → HeroUIProvider             │
│     • Actualizar tailwind.config.ts                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. VERIFICATION                                              │
├─────────────────────────────────────────────────────────────┤
│ • pnpm install                                               │
│ • pnpm build                                                 │
│ • pnpm dev                                                   │
│ • pnpm lint                                                  │
└─────────────────────────────────────────────────────────────┘
```

## File Changes Map

| Archivo | Cambio |
|---------|--------|
| `package.json` | Dependencias actualizadas |
| `next.config.js` | turbopack top-level |
| `tailwind.config.ts` | nextui() → heroui() |
| `src/config/providers/NextUIProviderApp.tsx` | NextUIProvider → HeroUIProvider |
| `src/components/Hero/Hero.tsx` | @nextui-org/react → @heroui/react |
| `src/components/NavBar/NavBar.tsx` | @nextui-org/react → @heroui/react |
| `src/components/NavBar/NavBarActions.tsx` | @nextui-org/react → @heroui/react |
| `src/components/NavBar/NavBarItemList.tsx` | @nextui-org/react → @heroui/react |
| `src/components/NavBar/NavBarLogo.tsx` | @nextui-org/react → @heroui/react |
| `src/components/NavBar/NavBarMenuList.tsx` | @nextui-org/react → @heroui/react |
| `src/components/Technologies/CardTechnology.tsx` | @nextui-org/react → @heroui/react |
| `src/components/Technologies/projects.tsx` | @nextui-org/react → @heroui/react |

## Import Mapping

```ts
// ANTES (@nextui-org/react)
import { Button, Link, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from "@nextui-org/react";

// DESPUÉS (@heroui/react)
// Mismo API, solo cambia el package
import { Button, Link, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from "@heroui/react";
```

## Next.js 16 Config Changes

```js
// ANTES (next.config.js)
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  experimental: {
    turbopack: { /* options */ }
  }
}

// DESPUÉS (next.config.js)
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  turbopack: { /* options now at top level */ }
}
```

## Rollback

Si algo falla en la fase 2:

```bash
git checkout HEAD~1
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

## Migration / Rollout

Migración directa (no hay data persistida, es un portafolio static):
- No se requiere feature flag
- No se requiere data migration
- Deploy es atómico con rebuild completo

## Open Questions

1. **Swiper compatibility**: Verificar que `swiper` soporta React 19
2. **Tailwind version**: ¿3.4.1 es compatible con HeroUI 2.6.x?

## No migration required

- No hay API routes migrados
- No hay base de datos
- No hay cookies/headers usage
- No hay middleware
