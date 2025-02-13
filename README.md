# add-wasm2js

[![npm version](https://badge.fury.io/js/add-wasm2js.svg)](https://badge.fury.io/js/add-wasm2js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tool to add wasm2js-template to your project

## Prerequisites

- Node.js (v16 or later)
- [Binaryen](https://github.com/WebAssembly/binaryen) (for wasm2js)
  ```bash
  brew install binaryen
  ```

## Installation

```bash
npm install -g add-wasm2js
# or
npx add-wasm2js
```

## Usage

Navigate to your project directory and run:

```bash
add-wasm2js
```

This will:

1. Clone the wasm2js template
2. Install dependencies
3. Update Cargo dependencies
4. Build the project

## Testing Your WASM Module

After installation, you can test your WASM module by running:

```bash
npm run dev
```

The template includes a default "greet" function test. To test your own functions, modify `frontend/src/main.ts`.

## Project Structure

The template sets up a project with the following structure:

```
your-project/
├── frontend/          # Frontend code
│   └── src/
│       └── main.ts   # Main entry point (modify this for your tests)
├── src/              # Rust source code
└── ...
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

## License

MIT

## Author

Yasuo Higa
