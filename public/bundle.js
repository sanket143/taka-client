const handleMouseMove = (eve) => {
  __TAURI__.event.emit("screen-event",`M ${event.clientX} ${event.clientY}`) 
}

const handleMouseWheel = (eve) => {
  __TAURI__.event.emit("screen-event", `W ${event.deltaY}`)
}

const handleMouseClick = (eve) => {
  __TAURI__.event.emit("screen-event","O") 
}

const handleMouseRightClick = (eve) => {
  eve.preventDefault()
  __TAURI__.event.emit("screen-event","P") 
}

window.addEventListener("click", handleMouseClick);
window.addEventListener("wheel", handleMouseWheel);
window.addEventListener("mousemove", handleMouseMove);
window.oncontextmenu = handleMouseRightClick;
