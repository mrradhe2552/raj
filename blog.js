
// Nope
// ...except to show the animation on load
let b = document.querySelector('button');
setTimeout(()=>b.focus(), 100);
setTimeout(()=>b.blur(), 1000);