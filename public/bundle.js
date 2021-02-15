const handleMouseMove = (eve) => {
  let width = (eve.clientX / 1366) * 1440
  let height = (eve.clientY / 768) * 900

  width = parseInt(width)
  height = parseInt(height)

  __TAURI__.event.emit("screen-event",`M ${width} ${height}`) 
}

const handleMouseWheel = (eve) => {
  __TAURI__.event.emit("screen-event", `W ${parseInt(eve.deltaY / 8)}`)
}

const handleMouseRightClick = (eve) => {
  eve.preventDefault()
  __TAURI__.event.emit("screen-event", "P") 
}

const handleMouseDown = (eve) => {
  eve.preventDefault()
  __TAURI__.event.emit("screen-event", "O 1") 
}

const handleMouseUp = (eve) => {
  eve.preventDefault()
  __TAURI__.event.emit("screen-event", "O 0") 
}

const handleDoubleClick = (eve) => {
  __TAURI__.event.emit("screen-event", "O 2")
}

const handleKeyDown = (eve) => {
  __TAURI__.event.emit("screen-event", `K ${eve.keyCode}`)
}

const handleKeyUp = (eve) => {
  __TAURI__.event.emit("screen-event", `L ${eve.keyCode}`)
}

window.onkeyup = handleKeyUp;
window.onmouseup = handleMouseUp;
window.onkeydown = handleKeyDown;
window.onwheel = handleMouseWheel;
window.onmousemove = handleMouseMove;
window.onmousedown = handleMouseDown;
window.ondblclick = handleDoubleClick;
window.oncontextmenu = handleMouseRightClick;
