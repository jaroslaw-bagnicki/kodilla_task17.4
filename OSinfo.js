var os = require('os');
var math = require('mathjs');

function getOSinfo() {
  var system = os.platform().trim();
  var release = os.release().trim();
  var cpu = os.cpus()[0];
  var cpuModel = cpu.model.trim();
  var t = cpu.times;
  var uptime = math.round(((t.user + t.nice + t.sys + t.idle + t.irq) / 1000 / 60), 0);
  var userInfo = os.userInfo();
  var userName = userInfo.username;
  var homeDir = userInfo.homedir;

  process.stdout.write('\nSystem: ' + system);
  process.stdout.write('\nRelease: ' + release);
  process.stdout.write('\nCPU Model: ' + cpuModel);
  process.stdout.write('\nUptime: ~' + uptime + ' min');
  process.stdout.write('\nUser name: ' + userName);
  process.stdout.write('\nHome dir: ' + homeDir);
  process.stdout.write('\n');
}

exports.print = getOSinfo;
