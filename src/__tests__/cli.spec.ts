import { describe, it, expect, vi } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import readline from 'readline';

// Mock modules
vi.mock('child_process', () => ({
  execSync: vi.fn((command: string) => {
    if (command === 'which wasm2js') return true;
    return undefined;
  }),
}));

vi.mock('fs', () => ({
  existsSync: vi.fn(),
}));

vi.mock('readline', () => ({
  createInterface: vi.fn(() => ({
    question: vi.fn((_, callback) => callback('y')),
    close: vi.fn(),
  })),
}));

describe('CLI tool', () => {
  it('should execute all required commands in correct order', async () => {
    // Mock package.json does not exist
    vi.mocked(fs.existsSync).mockReturnValue(false);

    // Import main function
    const { main } = await import('../cli');

    // Execute main function
    await main();

    // Verify commands execution
    expect(execSync).toHaveBeenCalledTimes(5);
    expect(execSync).toHaveBeenCalledWith('which wasm2js', { stdio: 'ignore' });
    expect(execSync).toHaveBeenCalledWith('npx tiged higayasuo/wasm2js-template --force', {
      stdio: 'inherit',
    });
    expect(execSync).toHaveBeenCalledWith('npm install', { stdio: 'inherit' });
    expect(execSync).toHaveBeenCalledWith('npm run update:cargo-deps', { stdio: 'inherit' });
    expect(execSync).toHaveBeenCalledWith('npm run build', { stdio: 'inherit' });
  });

  it('should ask for confirmation when package.json exists', async () => {
    // Mock package.json exists
    vi.mocked(fs.existsSync).mockReturnValue(true);

    // Import main function
    const { main } = await import('../cli');

    // Execute main function
    await main();

    // Verify readline was used
    expect(readline.createInterface).toHaveBeenCalled();
  });
});
