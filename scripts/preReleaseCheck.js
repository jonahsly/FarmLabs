const { spawnSync } = require('child_process');

// Build is the mandatory release gate for this repository.
const result = spawnSync('npm.cmd', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status || 0);
