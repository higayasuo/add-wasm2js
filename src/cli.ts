#!/usr/bin/env node
import { execSync } from 'child_process';

function executeCommand(command: string) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Command execution failed: ${command}`);
    throw error;
  }
}

function checkWasm2js() {
  try {
    execSync('which wasm2js', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('❌ wasm2js not found in PATH');
    console.log('\n📦 Please install binaryen first:');
    console.log('   brew install binaryen');
    console.log('\n🔄 Then run this tool again.\n');
    process.exit(1);
  }
}

// Export main function for testing
export async function main() {
  const originalDir = process.cwd();

  try {
    // Check if wasm2js is available
    checkWasm2js();

    console.log('🦀 Setting up Wasm2JS template...');

    // Clone template into wasm2js directory
    executeCommand('npx tiged higayasuo/wasm2js-template wasm2js --force');

    // Change to wasm2js directory
    process.chdir('wasm2js');

    // Install dependencies
    console.log('📦 Installing dependencies...');
    executeCommand('npm install');

    // Update Cargo dependencies
    console.log('🦀 Updating Rust dependencies...');
    executeCommand('npm run update:cargo-deps');

    // Build project
    console.log('🔨 Building project...');
    executeCommand('npm run build');

    console.log('✨ Setup completed!');
    console.log('\n🚀 To test your WASM2JS module, run:');
    console.log('   cd wasm2js');
    console.log('   npm run dev\n');
    console.log('📝 Note: The template includes a default "greet" function test.');
    console.log('   To test your own functions, modify frontend/src/main.ts\n');
  } finally {
    // Return to original directory
    process.chdir(originalDir);
  }
}

// Don't run in test environment
if (process.env.NODE_ENV !== 'test') {
  main().catch(error => {
    console.error('Error occurred:', error);
    process.exit(1);
  });
}
