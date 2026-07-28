# Proposal: Next.js 14 → 16, Node 18 → 24, NextUI → HeroUI Migration

## Context

**Current State:**
- Next.js: 14.2.3 (Mayo 2024)
- Node.js: 18.x
- React: 18.x
- NextUI: 2.4.1
- Tailwind: 3.4.1

**Target State:**
- Next.js: 16.x (Octubre 2025)
- Node.js: 24.12.0 (Active LTS, hasta Abril 2028)
- React: 19.x
- HeroUI: @heroui/react (rebrand de NextUI)

## Business Problem

El proyecto está desactualizado ~18 meses en runtime y framework. Node.js 18 llegó a end-of-life y Next.js 14 ya no recibe updates de seguridad. NextUI fue reblandado a HeroUI con peer dependencies actualizadas para React 19.

## Target Users

- Developer (owner) manteniendo el portafolio
- Visitantes del sitio (requieren navegador moderno: Chrome 111+, Edge 111+, Firefox 111+, Safari 16.4+)

## Requirements

### MUST

1. **Node.js 24.x**
   - Instalar Node.js 24.12.0 o superior
   - Verificar `node --version` retorna v24.x

2. **React 19**
   - Actualizar react y react-dom a ^19
   - Actualizar @types/react y @types/react-dom

3. **Next.js 16.x**
   - Actualizar next a ^16
   - Actualizar eslint-config-next a ^16
   - Usar codemod: `pnpm dlx @next/codemod@canary upgrade latest`

4. **HeroUI Migration (NextUI → @heroui/react)**
   - Desinstalar @nextui-org/react y @nextui-org/theme
   - Instalar @heroui/react y @heroui/theme
   - Actualizar imports en todos los archivos
   - Renombrar NextUIProvider → HeroUIProvider
   - Actualizar tailwind.config.ts plugin

5. **Next.js 16 Config**
   - Migrar experimental.turbopack → turbopack (top-level)
   - Build debe usar Turbopack por defecto

6. **Verificación**
   - `pnpm install` exitoso
   - `pnpm build` exitoso
   - `pnpm dev` exitoso
   - `pnpm lint` sin errores

### SHOULD

1. **Tests post-migración**
   - Verificar que componentes HeroUI renderizan correctamente
   - Verificar que navegación funciona
   - Verificar que Swiper/carousels funcionan

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| HeroUI tiene breaking changes no documentados | Medium | High | Instalar versión latest y revisar changelog |
| NextUI components no tienen equivalente en HeroUI | Low | Medium | Mapear componentes 1:1 antes de desinstalar |
| Turbopack genera errores de build | Low | High | Usar --webpack flag como fallback |
| Peer dependency conflicts | High | Medium | Limpiar node_modules y reinstall |

## Rollback Plan

Si la migración falla en algún paso:

1. **Git rollback**: `git checkout HEAD~1` para volver al estado anterior
2. **Limpiar**: `rm -rf node_modules pnpm-lock.yaml`
3. **Reinstalar**: `pnpm install` con versions originales
4. **Verificar**: `pnpm dev` funciona

## Edge Cases

1. **Si HeroUI peer dependency requiere React específico**: Instalar ese React específico
2. **Si algún componente NextUI no existe en HeroUI**: Crear wrapper custom
3. **Si Turbopack falla en producción**: Usar `--webpack` flag permanent

## Open Questions

1. ¿El洒 de Swiper es compatible con React 19?
2. ¿Hay que actualizar tailwindcss también?

## Scope Boundaries

**In Scope:**
- package.json updates
- Código y config de Next.js
- HeroUI migration
- Tailwind config

**Out of Scope:**
- Nuevas features
- Refactoring de componentes
- Actualización de contenido del portafolio
- Configuración de CI/CD
