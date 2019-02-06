var os = require('os');
var colors = require('colors');
var timeConverter = require('./timeConverter');

function getOSinfo() {
  var system = os.platform().trim();
  var release = os.release().trim();
  var cpu = os.cpus()[0];
  var cpuModel = cpu.model.trim();
  var uptime = timeConverter.toHMSstring(os.uptime());
  var userInfo = os.userInfo();
  var userName = userInfo.username;
  var homeDir = userInfo.homedir;

  process.stdout.write('\nSystem: '.grey + system);
  process.stdout.write('\nRelease: '.red + release);
  process.stdout.write('\nCPU Model: '.blue + cpuModel);
  process.stdout.write('\nUptime: '.green + uptime);
  process.stdout.write('\nUser name: '.yellow + userName);
  process.stdout.write('\nHome dir: '.white + homeDir);
  process.stdout.write('\n');
}

exports.print = getOSinfo;
