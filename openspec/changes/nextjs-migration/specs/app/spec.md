# Spec: Next.js 14 → 16, Node 18 → 24, NextUI → HeroUI Migration

## ADDED Requirements

### REQ-001: Node.js Runtime

**Requirement**: El proyecto debe correr en Node.js 24.x (Active LTS)

**Scenario 1: Verificación de versión**
- Given: El developer ejecuta `node --version`
- When: El comando retorna
- Then: La versión debe ser `v24.x.x`

**Scenario 2: Compatibilidad**
- Given: El proyecto corre en Node.js 24.12.0
- When: Se ejecuta `pnpm dev`
- Then: El servidor de desarrollo inicia sin errores de Node API

---

### REQ-002: React 19

**Requirement**: El proyecto debe usar React 19 como mínimo

**Scenario 1: Instalación**
- Given: Se ejecuta `pnpm add react@latest react-dom@latest @types/react@latest @types/react-dom@latest`
- When: La instalación termina exitosamente
- Then: `package.json` muestra `"react": "^19"` y `"react-dom": "^19"`

**Scenario 2: Renderizado**
- Given: React 19 está instalado
- When: Se ejecuta `pnpm dev`
- Then: La aplicación renderiza sin errores de React

---

### REQ-003: Next.js 16.x

**Requirement**: El proyecto debe usar Next.js 16.x

**Scenario 1: Instalación**
- Given: Se ejecuta `pnpm add next@latest eslint-config-next@latest`
- When: La instalación termina exitosamente
- Then: `package.json` muestra `"next": "^16"` y `"eslint-config-next": "^16"`

**Scenario 2: Turbopack por defecto**
- Given: Next.js 16.x está instalado
- When: Se ejecuta `pnpm build`
- Then: El build usa Turbopack (no requiere `--turbopack` flag)

**Scenario 3: Config migrate**
- Given: El proyecto tiene `next.config.js`
- When: Se ejecuta `pnpm dlx @next/codemod@canary upgrade latest`
- Then: `experimental.turbopack` se mueve a top-level `turbopack`

---

### REQ-004: HeroUI Migration

**Requirement**: El proyecto debe migrar de @nextui-org/react a @heroui/react

**Scenario 1: Desinstalación de NextUI**
- Given: El proyecto tiene `@nextui-org/react` y `@nextui-org/theme` instalados
- When: Se ejecuta `pnpm remove @nextui-org/react @nextui-org/theme`
- Then: Los paquetes son removidos de `package.json` y `node_modules`

**Scenario 2: Instalación de HeroUI**
- Given: NextUI fue desinstalado
- When: Se ejecuta `pnpm add @heroui/react @heroui/theme`
- Then: Los paquetes aparecen en `package.json`

**Scenario 3: Imports actualizados**
- Given: Archivos con `import { X } from "@nextui-org/react"`
- When: Se reemplazan por `import { X } from "@heroui/react"`
- Then: Todos los imports usan el nuevo paquete

**Scenario 4: Provider actualizado**
- Given: El archivo `src/config/providers/NextUIProviderApp.tsx`
- When: Se actualiza de `NextUIProvider` a `HeroUIProvider`
- Then: El provider usa `HeroUIProvider` con la misma API de navegación

**Scenario 5: Tailwind config**
- Given: `tailwind.config.ts` tiene `import { nextui } from "@nextui-org/react"`
- When: Se actualiza a `import { heroui } from "@heroui/react"`
- Then: El plugin usa `heroui()` en lugar de `nextui()`

---

### REQ-005: Verificación de Build

**Requirement**: El proyecto debe compilar y correr sin errores

**Scenario 1: Development build**
- Given: Todas las dependencias están actualizadas
- When: Se ejecuta `pnpm build`
- Then: El build termina con exit code 0

**Scenario 2: Development server**
- Given: El build es exitoso
- When: Se ejecuta `pnpm dev`
- Then: El servidor inicia en puerto 3000

**Scenario 3: Linting**
- Given: El código está actualizado
- When: Se ejecuta `pnpm lint`
- Then: No hay errores de lint
