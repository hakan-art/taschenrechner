function einfügen(zahl) {
  if (zahl === "." && document.getElementById("display").value.includes("."))
    return;
  if (zahl === "*" && document.getElementById("display").value.includes("*"))
    return;
  if (zahl === "/" && document.getElementById("display").value.includes("/"))
    return;
  if (zahl === "-" && document.getElementById("display").value.includes("-"))
    return;
  if (zahl === "+" && document.getElementById("display").value.includes("+"))
    return;
  document.getElementById("display").value =
    document.getElementById("display").value + zahl;
}
function gleich() {
  let gleich = document.getElementById("display").value;
  document.getElementById("display").value = eval(gleich);
}
function löschen() {
  document.getElementById("display").value = "";
}
