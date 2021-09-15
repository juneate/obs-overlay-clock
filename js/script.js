const clock = document.getElementById(`clock`);

setInterval(()=>{
  const d = new Date()
  // const s = d.getSeconds().toString().padStart(2, '0')
  const m = d.getMinutes().toString().padStart(2, '0')
  const h = (d.getHours() % 12).toString().padStart(2, '0')
  clock.innerHTML = `${h}<span class="blink">:</span>${m}<small>${d.getHours() > 12 ? `pm` : `am`}</small>`
    //("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)
}, 1000)