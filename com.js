var program = require('commander');

program
  .option('-d, --date', 'don\'t display current date')
  .parse(process.argv);
var dt = new Date();
if (program.date) {
  console.log(dt.getFullYear()
    + '-'
    + (dt.getMonth() + 1)
    + '-'
    + dt.getDate()
  );
  program.help();
}
program.on('--help', function () {
  console.log('  Custom Examples:')
  console.log('')
  console.log('	✍  fe -d')
  console.log('	✍  fe -l python')
  console.log('')
})
