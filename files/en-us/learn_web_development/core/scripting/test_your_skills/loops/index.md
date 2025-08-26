---
title: "Test your skills: Loops"
short-title: "Test: Loops"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Loops
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [Looping code](/en-US/docs/Learn_web_development/Core/Scripting/Loops) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## DOM manipulation: considered useful

Some of the questions below require you to write some [DOM](/en-US/docs/Glossary/DOM) manipulation code to complete them — such as creating new HTML elements, setting their text contents to equal specific string values, and nesting them inside existing elements on the page — all via JavaScript.

We haven't explicitly taught this yet in the course, but you'll have seen some examples that make use of it, and we'd like you to do some research into what DOM APIs you need to successfully answer the questions. A good starting place is our [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) tutorial.

## Loops 1

In our first looping task we want you to write a basic loop that iterates through all the items in the provided `myArray` and prints them out on the screen inside list items ([`<li>`](/en-US/docs/Web/HTML/Reference/Elements/li) elements). They should be appended to the provided `list`.

<!-- Code shared across examples -->

```html hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
<section></section>
```

```css hidden live-sample___loops-1 live-sample___loops-2 live-sample___loops-3
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___loops-1
const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");
const section = document.querySelector("section");
section.appendChild(list);

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("loops-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

for (let item of myArray) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
}
```

</details>

## Loops 2

In this next task, we want you to write a simple program that, given a name, searches an array of [objects](/en-US/docs/Glossary/Object) containing names and phone numbers and, if it finds the name, outputs the name and phone number into a paragraph.

You are given three variables to begin with:

- `name`: Contains a name to search for.
- `para`: Contains a reference to a paragraph, which will be used to report the results.
- `phonebook`: Contains the phonebook entries to search.

> [!NOTE]
> If you haven't read about objects yet, don't worry! For now, all you need to know is how to access a member-value pair. You can read up on objects in the [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) tutorial.

To complete the task:

1. Write a loop that iterates through the (`phonebook`) array and searches for the provided `name`. You should use a type of loop that you've not used in the previous task.
2. If the `name` is found, write it and the associated `number` into the `textContent` of the provided paragraph (`para`), in the form "&lt;name>'s number is &lt;number>." After that, exit the loop before it has run its course.
3. If none of the objects contain the `name`, print "Name not found in the phonebook" into the `textContent` of the provided paragraph.

```js live-sample___loops-2
const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("loops-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

for (let i = 0; i < phonebook.length; i++) {
  if (phonebook[i].name === name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}.`;
    break;
  }

  if (i === phonebook.length - 1) {
    para.textContent = "Name not found in the phonebook";
  }
}
```

</details>

## Loops 3

In this final task, you will test every number from `500` down to `2` to see which ones are prime numbers, using the provided test function, printing out the primes.

You are provided with the following:

- `i`: Starts off with a value of `500`; intended to be used as an iterator.
- `para`: Contains a reference to a paragraph, which will be used to report the results.
- `isPrime()`: A function that, when passed a number, returns `true` if the number is a prime number, and `false` if not.

To complete the task:

1. Write a loop that iterates through every number from `500` down to `2` (1 is not counted as a prime number), and runs the provided `isPrime()` function on each one.
2. For each number that isn't a prime number, continue on to the next loop iteration. For each one that _is_ a prime number, add it to the paragraph's `textContent` along with some kind of separator.

You should use a type of loop that you've not used in the previous two tasks.

```js live-sample___loops-3
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

section.appendChild(para);
```

{{ EmbedLiveSample("loops-3", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
