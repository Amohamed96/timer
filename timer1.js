let alarms = process.argv;
alarms.splice(0,2);
for (let i = 0; i < alarms.length; i++) {
if (alarms[i] > 0) {
  setTimeout(() =>{
  process.stdout.write('\x07');
  console.log(`Alarm: ${alarms[i]}s - complete`)
}, alarms[i]*1000)
}
}