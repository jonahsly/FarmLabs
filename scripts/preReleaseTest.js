const { spawnSync } = require('child_process');

// Run tests in non-interactive single-process mode for stable release checks.
const result = spawnSync(
  'npm.cmd',
  ['test', '--', '--watchAll=false', '--runInBand'],
  {
    stdio: 'inherit',
    shell: true,
  }
);

process.exit(result.status || 0);
