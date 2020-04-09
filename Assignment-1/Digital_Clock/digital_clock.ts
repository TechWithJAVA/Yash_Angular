class Digital_Clock {
  Time() {
    let currentTime = new Date();

    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    let ampm = (h < 12 || h === 24) ? "AM" : "PM";
    console.log(h + ':' + m + ':' + s + ampm);
  }
}

let time = new Digital_Clock();
time.Time();