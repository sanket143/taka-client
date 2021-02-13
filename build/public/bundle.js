(function (event$1) {
  'use strict';

  const handleMouseMove = (eve) => {
    console.log(eve);

    event$1.emit("mouse-event",`M ${event.clientX} ${event.clientY}`); 
    document.getElementById("logs").innerHTML = `
    <p>Client: ${event.clientX} ${event.clientY}</p>
  `;
  };


  document.onmousemove = handleMouseMove;

}(event$1));
//# sourceMappingURL=bundle.js.map
