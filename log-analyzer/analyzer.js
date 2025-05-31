const fs = require('fs');
const chalk = require('chalk');

function analyserLogs() {
  const data = fs.readFileSync('log.txt', 'utf-8');
  const lignes = data.split('\n');

  let errors = 0;
  let warnings = 0;
  let infos = 0;

  lignes.forEach((ligne) => {
    if (ligne.includes('ERROR')) {
      errors++;
    } else if (ligne.includes('WARNING')) {
      warnings++;
    } else if (ligne.includes('INFO')) {
      infos++;
    }
  });

  console.log(chalk.red(`ERROR: ${errors}`));
  console.log(chalk.yellow(`WARNING: ${warnings}`));
  console.log(chalk.green(`INFO: ${infos}`));
}

analyserLogs();
