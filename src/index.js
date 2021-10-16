/**
 * const
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数　上書き";

console.log(val1);

var val1 = "var変数　再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);
//letは上書きが可能

val2 = "let変数　上書き可能";
console.log(val2);

//let は再宣言ができない
//let val2 = "let変数　再宣言";

const val3 = "const変数";
console.log(val3);

//val3 = "const変数 上書き";
//const val3 = "const変数 再宣言";

//constで定義したオブジェクトは、プロパティの変更が可能
const val4 = {
  name: "sakaida",
  age: 36
};

val4.name = "kentaro";

console.log(val4);

//constで定義した配列は、プロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "sakaida";
const age = 36;

// 私の名前はsakaidaです。年齢は36歳です。
// 　従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2です"));

const func3 = (str) => str;

console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};

console.log(func4(10, 20));

const func5 = (num1, num2) => num1 + num2;

console.log(func5(20, 20));

/**
 * 分割代入
 */

const myProfile = {
  mname: "sakaida2",
  mage: 37
};

const message3 = `名前は${myProfile.mname}です。年齢は、${myProfile.mage}歳です。`;

console.log(message3);

const { mname, mage } = myProfile;

const message4 = `名前は${mname}です。年齢は、${mage}歳です。`;

console.log(message4);

const myProfile2 = ["sakaida3", 39];

const message5 = `名前は${myProfile2[0]}です。年齢は、${myProfile2[1]}歳です。`;

console.log(message5);

/**
 * デフォルト値
 */

const sayHello = (name = "ayako") => console.log(`こんにちは${name}さん`);

console.log(sayHello("kentaro"));

console.log(sayHello());

/**
 * スプレッド構文
 */
// 配列の展開

const arr1 = [1, 2];

console.log(arr1);

console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);

sumFunc(arr1[0], arr1[1]);

//配列を順番に処理する。
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

///配列のコピー、統合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];

console.log(arr6);

const arr7 = [...arr4, ...arr5];

console.log(arr7);

const arr8 = arr4;
console.log(arr8);

arr8[0] = 100;

console.log(arr8);
console.log(arr4);

/**
 * map やfilterを使った配列の処理
 */

const nameArr = ["tanaka", "yamada", "sakaida"];
for (let index = 0; index < nameArr.length; index++) {
  //template文字列
  console.log(`${index + 1}番目は、${nameArr[index]}です`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "tanaka") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件? 　条件がtrueのとき : 条件がfalseのとき
const vall = 1 < 0 ? "trueです。" : "falseです。";
console.log(vall);

const num = "1300";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);

const checksum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えている" : "許容範囲内です";
};

console.log(checksum(50, 40));
console.log(checksum(50, 80));

/**
 * 論理演算子の本当の意味をしろう
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か２はtrueになります");
}
if (flag1 && flag2) {
  console.log("1も２もtrueになります");
}

// || は左側がfalseであれば、右側を返す。
// || は左側がtureであれば、左側を返す。

// && は左側がfalseであれば、左側を返す。
// && は左側がtureであれば、右側を返す。
