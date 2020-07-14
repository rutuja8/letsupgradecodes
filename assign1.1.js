document.write("Today is: "+Date());
document.write("<br>")
let obj = new Date();
let hour = obj.getHours();
let min = obj.getMinutes();
let sec = obj.getSeconds();
document.write(" Current time is: "+hour+"PM"+":"+min+":"+sec);
