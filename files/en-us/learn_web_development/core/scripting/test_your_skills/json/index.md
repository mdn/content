---
title: "Test your skills: JSON"
short-title: "Test: JSON"
slug: Learn_web_development/Core/Scripting/Test_your_skills/JSON
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [Working with JSON](/en-US/docs/Learn_web_development/Core/Scripting/JSON) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## JSON 1

The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in [sample.json](https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json). The JSON is loaded into the page as a text string and made available in the `catString` parameter of the `displayCatInfo()` function.

To complete the task, fill in the missing parts of the `displayCatInfo()` function to store:

- The names of the three mother cats, separated by commas, in the `motherInfo` variable.
- The total number of kittens, and how many are male and female, in the `kittenInfo` variable.

The values of these variables are then printed to the screen inside paragraphs.

Some hints/questions:

- The JSON data is provided as text inside the `displayCatInfo()` function. You'll need to parse it into JSON before you can get any data out of it.
- You'll probably want to use an outer loop to loop through the cats and add their names to the `motherInfo` variable string, and an inner loop to loop through all the kittens, add up the total of all/male/female kittens, and add those details to the `kittenInfo` variable string.
- The last mother cat name should have an "and" before it, and a full stop after it. How do you make sure this can work, no matter how many cats are in the JSON?
- Why are the `para1.textContent = motherInfo;` and `para2.textContent = kittenInfo;` lines inside the `displayCatInfo()` function, and not at the end of the script? This has something to do with async code.

```html hidden live-sample___json-1
<p class="one"></p>
<p class="two"></p>
```

```css hidden live-sample___json-1
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

```js live-sample___json-1
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

{{ EmbedLiveSample("json-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }

    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name}, `;
    } else {
      motherInfo += `and ${cats[i].name}.`;
    }
  }

  kittenInfo = `There are ${total} kittens in total, ${male} males and ${
    total - male
  } females.`;

  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
