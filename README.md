# add-wasm2js

[![npm version](https://badge.fury.io/js/add-wasm2js.svg)](https://badge.fury.io/js/add-wasm2js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

CLI tool to add wasm2js template to your wasm-pack project.

## Prerequisites

- Node.js (v16 or later)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- [Binaryen](https://github.com/WebAssembly/binaryen) (for wasm2js)
  ```bash
  brew install binaryen
  ```

## Usage

1. First, create a new wasm-pack project:

   ```bash
   wasm-pack new my-wasm-project
   cd my-wasm-project
   ```

2. Then, add wasm2js support:
   ```bash
   npx add-wasm2js
   ```

This will create a `wasm2js` directory in your project with:

- Frontend development environment
- Build scripts for wasm2js
- Development server setup

For detailed information about the template and its features, please visit:
[wasm2js-template](https://github.com/higayasuo/wasm2js-template)

## Testing Your WASM Module

After setup, you can test your WASM module:

```bash
cd wasm2js
npm run dev
```

The template includes a default "greet" function test. To test your own functions, modify `frontend/src/main.ts`.

## Project Structure

After running `add-wasm2js`, your project will look like this:

```
my-wasm-project/               # Your wasm-pack project root
├── src/                       # Rust source code
├── Cargo.toml
└── wasm2js/                  # wasm2js specific files
    ├── frontend/             # Frontend code
    │   └── src/
    │       └── main.ts      # Test your functions here
    ├── scripts/              # Build and utility scripts
    │   ├── wasm2js.js
    │   ├── create-zip.js
    │   └── update-cargo-deps.js
    └── package.json          # Dependencies and build scripts
```

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

## Author

**Yasuo Higa**

- GitHub: [@higayasuo](https://github.com/higayasuo)
- X: [@yasuo_higa](https://x.com/yasuo_higa)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
