# Development Guide: Basics

Welcome to the **Snigdha OS Documentation** repository! This guide is designed to help you get started with contributing to our documentation. Whether you're new to Snigdha OS or an experienced contributor, you'll find everything you need here to contribute effectively.

## 📝 Introduction

Snigdha OS is a lightweight, customizable Linux distribution based on Arch Linux. It provides a minimal and highly flexible environment for users, with a particular focus on being user-centric and versatile. This documentation site serves as a guide for both new users and developers, offering tutorials, troubleshooting guides, and contributions on how to use Snigdha OS to its full potential.

We encourage developers to help us improve and expand the documentation so that more users can benefit from the powerful features of Snigdha OS. You can find more details about the project and contribute to our documentation right here on this repository.

To get started with contributing, follow the steps below to set up your local development environment and dive into the code.

### 🚧 Setup Development Environment

```bash
git clone https://github.com/Snigdha-OS/docs.git  # Clone the repository
cd docs  # Navigate to the project directory
pnpm install  # Install dependencies
pnpm dev  # Start the local development server
```

## 🚀 Project Structure

Inside the `docs` folder, you’ll find the following folders and files:

```
.
├── astro.config.mjs  # Astro configuration file
├── node_modules  # Installed dependencies
│   ├── astro -> .pnpm/astro@4.16.17_rollup@4.28.1_typescript@5.7.2/node_modules/astro
│   ├── @astrojs
│   │   └── starlight -> ../.pnpm/@astrojs+starlight@0.29.2_astro@4.16.17_rollup@4.28.1_typescript@5.7.2_/node_modules/@astrojs/starlight
│   └── sharp -> .pnpm/sharp@0.32.6/node_modules/sharp
├── package.json  # Project dependencies and scripts
├── pnpm-lock.yaml  # Lock file for pnpm
├── public  # Public assets, accessible directly via URL
│   └── favicon.svg  # Favicon for the site
├── push.sh  # Script to push changes to production
├── README.md  # This file
├── src  # Source code for documentation content
│   ├── assets  # Assets such as images and icons
│   │   ├── snigdhaos-docs-dark.svg
│   │   └── snigdhaos-docs-light.svg
│   ├── content  # Documentation content files
│   │   ├── config.ts  # Configuration file for content
│   │   ├── docs  # Language-specific documentation files
│   │   │   ├── bn  # Bengali content
│   │   │   │   ├── index.mdx  # Bengali index page
│   │   │   │   └── introduction  # Introduction to Bengali docs
│   │   │   │       ├── overview.md  # Bengali overview
│   │   │   │       └── story.md  # Bengali story
│   │   │   ├── en  # English content
│   │   │   │   ├── contributing.md  # Contributing guide in English
│   │   │   │   ├── index.mdx  # English index page
│   │   │   │   └── introduction  # Introduction to English docs
│   │   │   │       ├── overview.md  # English overview
│   │   │   │       └── story.md  # English story
│   │   │   ├── hi  # Hindi content
│   │   │   │   ├── index.mdx  # Hindi index page
│   │   │   │   └── introduction  # Introduction to Hindi docs
│   │   │   │       ├── overview.md  # Hindi overview
│   │   │   │       └── story.md  # Hindi story
│   │   │   └── index.mdx  # Default documentation index
│   │   └── i18n  # Internationalization JSON files
│   │       ├── bn.json  # Bengali translations
│   │       └── in.json  # Indian translations
│   └── env.d.ts  # TypeScript environment definitions
└── tsconfig.json  # TypeScript configuration file
```

### 📚 How it Works

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file will be exposed as a route based on its file name. This means the folder structure determines how the documentation is organized on the site.

- **Content**: All the documentation content (like `index.mdx`) goes inside the `src/content/docs/` directory. It’s organized by language and topic, making it easy to add new docs in various languages.
- **Assets**: Images or icons should be placed in the `src/assets/` folder and linked using relative links within your Markdown files. 🖼️
- **Public Assets**: Static files, like favicons, are stored in the `public/` directory. Anything here is directly accessible via its URL. 🔗

## 🧞 Commands

These commands can be run from the root of the project via your terminal. Here's a quick overview:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs the project dependencies               | 🛠️
| `pnpm dev`                 | Starts the local development server at `localhost:4321` | 🌍
| `pnpm run build`           | Builds the production site to `./dist/`          | 🏗️
| `pnpm run preview`         | Previews your build locally before deploying     | 👀
| `pnpm run astro ...`       | Run Astro CLI commands (e.g., `astro add`, `astro check`) | ⚡
| `pnpm run astro -- --help` | Get help using the Astro CLI                     | ❓

## 🌱 Want to Learn More?

Check out these resources to dive deeper into the tools we're using:

- [Starlight Docs](https://starlight.astro.build/) for detailed documentation about the Starlight framework used here. 📖
- [Astro Documentation](https://docs.astro.build) for learning how Astro works and how to build with it. 🚀
- [Astro Discord Server](https://astro.build/chat) to chat with the community and get help in real-time. 💬

## 🔄 Contribution

We welcome contributions! Please fork the repo and create a pull request for changes you’d like to suggest. Check out the contributing guidelines in the `docs/contributing.md` file to get started. 🤝

Now you're ready to dive into contributing to Snigdha OS Docs! 🎉 Let us know if you have any questions, and happy coding! 👨‍💻👩‍💻
