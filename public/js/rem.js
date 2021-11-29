function rem() {
  let dw = document.documentElement.clientWidth || window.innerWidth
  if (dw >= 750) {
    dw = 750
  }
  if (dw <= 320) {
    dw = 320
  }
  console.log('dw', dw);
  // 1rem=100px
  document.documentElement.style.fontSize = (dw / 7.5) + 'px'
}
rem()
window.onresize = function () {
  rem()
}