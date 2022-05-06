const myComponent = component();
document.querySelector("body").appendChild(myComponent);

function component() {
  const p = document.createElement("p");
  let toggled = false;
  p.textContent = `State is ${toggled ? "ON" : "OFF"}`;
  p.addEventListener("click", () => {
    toggled = !toggled;
    p.textContent = `State is ${toggled ? "ON" : "OFF"}`;
  });
  return p;
}
