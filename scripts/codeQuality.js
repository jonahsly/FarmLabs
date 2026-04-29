const { spawnSync } = require('child_process');
const path = require('path');

const mode = process.argv[2] || 'lint';
const eslintBin =
  process.platform === 'win32'
    ? path.join('node_modules', '.bin', 'eslint.cmd')
    : path.join('node_modules', '.bin', 'eslint');

const baseArgs = ['src/**/*.{js,jsx}'];
const argsByMode = {
  lint: baseArgs,
  'lint:fix': [...baseArgs, '--fix'],
  // Format is implemented as an ESLint autofix pass to keep tooling minimal.
  format: [...baseArgs, '--fix'],
};

const selectedArgs = argsByMode[mode];

if (!selectedArgs) {
  console.error(`Unknown mode: ${mode}`);
  process.exit(1);
}

// Use the local ESLint binary so behavior is consistent across environments.
const result = spawnSync(eslintBin, selectedArgs, {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status || 0);
