function update(e) {
  const input = document.getElementById("input-btn");
  const valueStr = input.value;
  let valueNum = parseInt(valueStr);
  const tk = document.getElementById("tk");
  const tks = tk.innerText;
  const tkNum = parseInt(tks);

  if (e == true) {
    newValue = valueNum + 1;
  } else {
    if (newValue < 1) {
      return;
    } else {
      newValue = valueNum - 1;
    }
  }
  // const maltiplay = tkNum *
  // tk.innerText = maltiplay

  input.value = newValue;
  return newValue;
}
function add(anther) {
  const newPrice = anther * 1219;
  const total = document.getElementById("tk");
  total.innerText = newPrice;
}
document.getElementById("btn-plus").addEventListener("click", function () {
  const newValue = update(true);

  add(newValue);
});

document.getElementById("mynus").addEventListener("click", function () {
  const anther = update(false);
  add(anther);
});

document.getElementById("remove-item").addEventListener("click", function () {
  const input = document.getElementById("tk");
  const another = document.getElementById("input-btn");
  another.value = "0";

  input.innerText = "0";
});
