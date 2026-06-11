//配列の宣言
let sampleArray = new Array();

console.log(sampleArray);

//配列の要素
let fruits = ["りんご" , "みかん" , "ぶどう"];

//配列全体を出力
console.log(fruits);

//配列の要素
console.log(fruits[0]);

//配列の要素の追加
fruits.push("バナナ");
console.log(fruits);

fruits.unshift("もも");
console.log(fruits);
console.log(fruits[0]);

//配列の要素の変更

fruits[4] = "なし";
console.log(fruits);
