const text = document.querySelector("#colorText");
console.log(text);

const color = document.querySelector("colorPicker");
console.log(color);

const colorBg = () => {
color.log("colorBg関数発動！");
document.body.style.backgroundColor = color.Value;
text.textContent = `カラーコード：${color.value}`;
}

color.addEnentListener("input" , colorBg);

