function bigAdd(num1, num2) {
  if (!num1) {
    return num2;
  }
  if (!num2) {
    return num1;
  }
  var arr1 = num1.split("."),
    arr2 = num2.split("."),
    intArr1 = arr1[0].split(""),
    intArr2 = arr2[0].split(""),
    decimalsArr1 = arr1[1] || [],
    decimalsArr2 = arr2[1] || [],
    resualtIntArr = [],
    resualtDecimalsArr = [],
    carrayInt = 0,
    carrayDecimals = 0;
  var decimalsMinLength =
    decimalsArr1.length > decimalsArr2.length
      ? decimalsArr1.length
      : decimalsArr2.length;
  while (decimalsMinLength > 0) {
    decimalsMinLength--;
    var sumDecimals =
      carrayDecimals +
      parseInt(decimalsArr1[decimalsMinLength] || 0) +
      parseInt(decimalsArr2[decimalsMinLength] || 0);
    if (sumDecimals < 10) {
      resualtDecimalsArr.unshift(sumDecimals);
      carrayDecimals = 0;
    } else {
      resualtDecimalsArr.unshift(sumDecimals - 10);
      carrayDecimals = 1;
    }
  }
  if (carrayDecimals > 0) {
    carrayInt = carrayDecimals;
  }
  while (intArr1.length || intArr2.length) {
    var sumInt =
      carrayInt + parseInt(intArr1.pop() || 0) + parseInt(intArr2.pop() || 0);
    if (sumInt < 10) {
      resualtIntArr.unshift(sumInt);
      carrayInt = 0;
    } else {
      resualtIntArr.unshift(sumInt - 10);
      carrayInt = 1;
    }
  }
  if (carrayInt > 0) {
    resualtIntArr.unshift(carrayInt);
  }
  return resualtIntArr.join("") + "." + resualtDecimalsArr.join("");
}
// 34231674.654576891234
console.log(897353.222 + 33334321.432576891234);
console.log(bigAdd("897353.222", "33334321.432576891234"));
