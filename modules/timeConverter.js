// Convert time in secons to hr:min:sec format
function toHMS(time) {
  var sec = time % 60;
  time = (time - sec) / 60;
  var min = (time % 60);
  time = (time - min) / 60;
  var hr = (time % 60);

  return {
    hr: hr,
    min: min,
    sec: sec
  };
}

function toHMSstring(time) {
  var HMS = toHMS(time);
  var hrStr = HMS.hr > 0 ? HMS.hr + ' hr ' : '';
  var minStr = HMS.min > 0 ? HMS.min + ' min ' : '';
  var secStr = HMS.sec > 0 ? HMS.sec + ' sec' : '';
  return (hrStr + minStr + secStr).trim();
}

module.exports = {
  toHMS: toHMS,
  toHMSstring: toHMSstring
};
