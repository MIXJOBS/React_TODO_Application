/**
 * const,letのへんすう宣言
 */
var val1 = "var変数";
console.log(val1);

/**
 * テンプレート関数について
 */
const name = "ジャケ";
const age = 28;

// 従来の書き方
const message1 = "私の名前は" + name + "です。 年齢は" + age + "です。";
console.log(message1);

//  テンプレート文字列を使った場合
const message2 = `私の名前は${name}です。   年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数について
 */
// 従来の関数
function func(str) {
  return str;
}
const func1 = function (str) {
  return str;
};
console.log(func("funcです"));
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));
/**
 * 中身が一行であれば
 * const func2 = (str) => str;
 * でretrunを書かずに終わらすことができる
 */

const func3 = (num1, num2) => {
  return num1 + num2;
};
/**
 * または
 * const func3 = (num1, num2) => num1 + num2;
 */
console.log(func3(10, 20));

/**
 * 分割代入について {},[]
 */
//  オブジェクトの場合
const myProfile = {
  name: "ジャケ",
  age: 28,
};

//  従来の書き方
const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message3);

// 分割代入を使用した場合
const { name2, age2 } = myProfile;
const message4 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(message4);

// 配列の場合
const myCats = ["me", "you"];

// 従来の書き方
const message5 = `私の猫の名前ば${myCats[0]}と${myCats[1]}です。`;
console.log(message5);

// 分割代入を使用した場合
[me, you] = myCats;
const message6 = `私の猫の名前は${me}と${you}です`;
console.log(message6);
