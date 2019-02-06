var osInfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.trim();
    switch (instruction) {
    case 'exit':
      process.stdout.write('\nExiting from app!\n');
      process.exit();
      break;
      
    case 'getOSinfo':
      osInfo.print();
      break;

    case 'sayhello':
      process.stdout.write('\nHello!\n');
      break;

    default:
      process.stderr.write('\nWrong instruction!\n');
    }
  }
});
