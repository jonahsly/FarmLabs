const { spawnSync } = require('child_process');

// Validate basename routing explicitly against the GitHub Pages path.
const result = spawnSync(
  'npm.cmd',
  [
    'test',
    '--',
    '--watchAll=false',
    '--runInBand',
    '--runTestsByPath',
    'src/BasenameRouting.test.js',
  ],
  {
    stdio: 'inherit',
    shell: true,
  }
);

process.exit(result.status || 0);
