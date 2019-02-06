var os = require('os');

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
      
    case 'a':
      var system = os.platform().trim();
      var release = os.release().trim();
      var cpu = os.cpus()[0];
      var cpuModel = cpu.model.trim();
      var t = cpu.times;
      var uptime = (t.user + t.nice + t.sys + t.idle + t.irq) / 1000 / 60;

      process.stdout.write('\nSystem: ' + system);
      process.stdout.write('\nRelease: ' + release);
      process.stdout.write('\nCPU Model: ' + cpuModel);
      process.stdout.write('\nUptime: ~' + uptime + ' min');
      process.stdout.write('\n');
      break;

    case 'sayhello':
      process.stdout.write('\nHello!\n');
      break;

    default:
      process.stderr.write('\nWrong instruction!\n');
    }
  }
});
