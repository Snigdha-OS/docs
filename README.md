# Development Guide: Basics

```
git clone https://github.com/Snigdha-OS/docs.git
cd docs
pnpm install
pnpm dev
```

## 🚀 Project Structure

Inside of docs folder, you'll see the following folders and files:

```
.
├── astro.config.mjs
├── node_modules
│   ├── astro -> .pnpm/astro@4.16.17_rollup@4.28.1_typescript@5.7.2/node_modules/astro
│   ├── @astrojs
│   │   └── starlight -> ../.pnpm/@astrojs+starlight@0.29.2_astro@4.16.17_rollup@4.28.1_typescript@5.7.2_/node_modules/@astrojs/starlight
│   └── sharp -> .pnpm/sharp@0.32.6/node_modules/sharp
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── push.sh
├── README.md
├── src
│   ├── assets
│   │   ├── snigdhaos-docs-dark.svg
│   │   └── snigdhaos-docs-light.svg
│   ├── content
│   │   ├── config.ts
│   │   ├── docs
│   │   │   ├── bn
│   │   │   │   ├── index.mdx
│   │   │   │   └── introduction
│   │   │   │       ├── overview.md
│   │   │   │       └── story.md
│   │   │   ├── en
│   │   │   │   ├── contributing.md
│   │   │   │   ├── index.mdx
│   │   │   │   └── introduction
│   │   │   │       ├── overview.md
│   │   │   │       └── story.md
│   │   │   ├── hi
│   │   │   │   ├── index.mdx
│   │   │   │   └── introduction
│   │   │   │       ├── overview.md
│   │   │   │       └── story.md
│   │   │   └── index.mdx
│   │   └── i18n
│   │       ├── bn.json
│   │       └── in.json
│   └── env.d.ts
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
