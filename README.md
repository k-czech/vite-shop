# Vite Shop

Aplikacja sklepowa zbudowana przy użyciu Vite, React, TypeScript i Tailwind CSS.

## Funkcjonalności

- Lista sklepów z wirtualizacją (react-window)
- Lazy loading obrazów
- Tryb ciemny/jasny
- Responsywny design
- Optymalizacja wydajności

## Technologie

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Window (wirtualizacja)
- ESLint + Prettier
- Vitest + React Testing Library

## Wymagania

- Node.js >= 18
- pnpm >= 10

## Instalacja

```bash
# Instalacja zależności
pnpm install

# Uruchomienie w trybie deweloperskim
pnpm dev

# Build produkcyjny
pnpm build

# Uruchomienie testów
pnpm test
```

## Struktura projektu

```
/
├─ src/                # Kod aplikacji
│  ├─ app/            # Warstwa funkcjonalna (feature-slice)
│  │  ├─ components/  # Komponenty UI
│  │  ├─ hooks/       # Reużywalne hooki
│  │  ├─ utils/       # Logika biznesowa
│  │  ├─ types/       # Typy TypeScript
│  │  └─ pages/       # Strony
│  ├─ api/            # Klienty HTTP
│  ├─ assets/         # Statyczne zasoby
│  └─ styles/         # Style globalne
├─ public/            # Pliki statyczne
└─ tests/             # Testy
```

## Konwencje

- Feature-slice architecture
- Atomic Design dla komponentów
- Strict TypeScript
- Tailwind dla stylowania
- Conventional Commits

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/framework-boilerplates/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
