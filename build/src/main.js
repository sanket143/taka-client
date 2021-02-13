import { emit } from "../_snowpack/pkg/tauri/api/event.js"

const handleMouseMove = (eve) => {
  console.log(eve)

  emit("mouse-event",`M ${event.clientX} ${event.clientY}`) 
  document.getElementById("logs").innerHTML = `
    <p>Client: ${event.clientX} ${event.clientY}</p>
  `
}

document.onmousemove = handleMouseMove;
