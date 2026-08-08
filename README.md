# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🔧 Local setup (Node via nvm, activate-on-demand)

This project needs Node.js 22+. It's installed via [nvm](https://github.com/nvm-sh/nvm), which keeps Node entirely inside `~/.nvm` — no system packages, no `sudo`, nothing added to shell startup files. Node is only on `PATH` in a terminal after you explicitly load nvm in that session, the same way you'd `source venv/bin/activate` for a Python virtualenv.

```sh
# one-time, only if nvm itself isn't installed yet:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# every time you open a new terminal and want Node available here:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22   # first time on a machine: nvm install 22
```

Close the terminal (or just don't run those lines) and Node disappears from `PATH` again — `~/.nvm` sits untouched on disk either way, and `rm -rf ~/.nvm` removes it completely, with nothing left behind elsewhere on the system.

## 🧞 Commands

All commands are run from the root of the project, from a terminal (after activating Node as above):

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
