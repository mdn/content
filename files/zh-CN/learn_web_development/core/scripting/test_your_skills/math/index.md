# 测试你的技能：数学
title: "测试你的技能：数学"
short-title: "测试：数学"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Math
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

本页面的测试，旨在帮助你评估自己是否掌握了 [JavaScript 基础数学——数字与运算符](/zh-CN/docs/Learn_web_development/Core/Scripting/Math) 一文的内容。

> [!NOTE]
> 如需解题帮助，请阅读我们的 [测试你的技能](/zh-CN/docs/Learn_web_development#测试你的技能) 使用指南。你也可以通过我们的 [沟通渠道](/zh-CN/docs/MDN/Community/Communication_channels) 联系我们。

## 数学 1

首先，我们来测试你对**基础算数运算符**的掌握程度。
你需要创建四个数值变量，对其中两个执行加法运算、另外两个执行减法运算，再将这两个运算的结果相乘。
最后，编写判断逻辑，验证最终乘积是否为偶数。

### 任务要求
1. 创建四个存储数值的变量，并为其命名具备语义化的变量名。
2. 将前两个变量相加，把计算结果存入一个新变量。
3. 用第三个变量减去第四个变量，把计算结果存入另一个新变量。
4. 将步骤 2 和步骤 3 的结果相乘，把最终乘积存入一个名为 `finalResult` 的变量。
5. 使用 [基础算数运算符](/zh-CN/docs/Learn_web_development/Core/Scripting/Math#算术运算符) 校验 `finalResult` 是否为偶数，将校验结果（偶数为 `0`，奇数为 `1`）存入名为 `evenOddResult` 的变量。

通关条件：`finalResult` 的值必须等于 `48`，`evenOddResult` 的值必须等于 `0`。

```html hidden live-sample___math-1
<section></section>
<style>
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
</style>
<script>
let finalResult;
let evenOddResult;

// 不要编辑上面的代码！

// 请在此处编写你的代码

// 不要编辑下面的代码！

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck = finalResult === 48 ? `是的，做得很好！` : `不对，当前值为 ${finalResult}`;
para1.textContent = `finalResult 的值是否为 48？${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck = evenOddResult === 0 ? "最终结果为偶数！" : "最终结果为奇数。再检查一下吧。";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
</script>
```

{{ EmbedLiveSample("数学 1", "100%", 80) }}

### 解决方案
你完成后的代码应如下所示：

```js
// 不要编辑上面的代码！

const firstNum = 4;
const secondNum = 8;
const thirdNum = 12;
const fourthNum = 8;

const sumResult = firstNum + secondNum;
const diffResult = thirdNum - fourthNum;

finalResult = sumResult * diffResult;

evenOddResult = finalResult % 2;

// 不要编辑下面的代码！
```

---

## 数学 2

第二个任务中，已有两个计算式的结果分别存入 `result` 和 `result2` 变量。你需要将这两个值相乘，并把最终结果格式化为**保留两位小数**的形式，同时处理数据类型的转换。

### 任务要求
1. 将 `result` 与 `result2` 相乘，使用**复合赋值运算符**将计算结果重新赋值给 `result`。
2. 将更新后的 `result` 格式化为保留两位小数的形式，并存入名为 `finalResult` 的变量。
3. 使用 `typeof` 检测 `finalResult` 的数据类型；若其类型为 `string`，则将其转换为 `number` 数值类型，并存入名为 `finalNumber` 的变量。

通关条件：`finalNumber` 的值必须等于 `4633.33`。**提示**：你需要注意 JavaScript 的运算符优先级，可在表达式中增删括号以得到正确结果。

```html hidden live-sample___math-2
<section></section>
<style>
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
</style>
<script>
// 最终结果应为 4633.33
let result = (7 + 13 / 9) + 7;
let result2 = (100 / 2) * 6;

// 请在此处编写你的代码

// 不要编辑下面的代码！

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `你的 finalResult 值为 ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck = !isNaN(finalNumber) ? "finalNumber 是数字类型，做得好！" : `哎呀！finalNumber 不是数字类型。`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
</script>
```

{{ EmbedLiveSample("数学 2", "100%", 80) }}

### 解决方案
你完成后的代码应如下所示：

```js
// 最终结果应为 4633.33
let result = (7 + 13 / 9) + 7;
let result2 = 100 / 2 * 6;

// 复合赋值运算符 实现 相乘并重新赋值
result *= result2;

// 格式化保留两位小数
const finalResult = result.toFixed(2);

// 字符串转数字类型
const finalNumber = Number(finalResult);

// 不要编辑下面的代码！
```

---

## 数学 3

最后一个任务，需要你编写**布尔比较表达式**，验证三组陈述的「真」与「假」，核心考察**比较运算符**和**全等运算符**的使用。

### 任务要求
1. 共三组内容，每组包含一个陈述和两个变量。针对每组陈述，编写对应的布尔比较表达式，验证陈述是否成立。
2. 将三组比较的布尔结果（`true` / `false`），分别存入 `weightComparison`、`heightComparison` 和 `pwdMatch` 这三个变量中。

```html hidden live-sample___math-3
<section></section>
<style>
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
</style>
<script>
// 陈述 1：大象的体重比老鼠轻
const eleWeight = 1000;
const mouseWeight = 2;
// 陈述 2：鸵鸟的身高比鸭子高
const ostrichHeight = 2;
const duckHeight = 0.3;
// 陈述 3：两个密码完全匹配
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// 不要编辑上面的代码！

// 请在此处编写你的代码

// 不要编辑下面的代码！

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison ? "成立 — 大象居然比老鼠轻！？" : "不成立 — 大象当然比老鼠重！";
const heightTest = heightComparison ? "成立 — 鸵鸟确实比鸭子高！" : "不成立 — 鸭子不可能比鸵鸟高！？";
const pwdTest = pwdMatch ? "成立 — 两个密码匹配。" : "不成立 — 密码不匹配，请重新核对";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
</script>
```

{{ EmbedLiveSample("数学 3", "100%", 80) }}

### 解决方案
你完成后的代码应如下所示：

```js
// 不要编辑上面的代码！

// 验证陈述1的布尔表达式
const weightComparison = eleWeight < mouseWeight;
// 验证陈述2的布尔表达式
const heightComparison = ostrichHeight > duckHeight;
// 验证陈述3的全等匹配（区分大小写）
const pwdMatch = pwd1 === pwd2;

// 不要编辑下面的代码！
```

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Math", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}