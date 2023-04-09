document.getElementById("btn-plus").addEventListener("click", function () {
  const input = document.getElementById("input-btn");
  const valueStr = input.value;
  let valueNum = parseInt(valueStr);

  const newValue = valueNum + 1;

  input.value = newValue;
});

document.getElementById("mynus").addEventListener("click", function () {
  const input = document.getElementById("input-btn");
  const valueStr = input.value;
  console.log(valueStr);
  let valueNum = parseInt(valueStr);
  if (valueNum < 1) {
    return;
  }
  const newValue = valueNum - 1;

  input.value = newValue;
});
