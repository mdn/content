---
title: "Test your skills: Object basics"
short-title: "Test: Objects"
slug: Learn_web_development/Core/Scripting/Test_your_skills/Object_basics
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}

The aim of this skill test is to help you assess whether you've understood our [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) article.

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Object basics 1

In this task you are provided with an object literal, and we want you to do some work on it.

To complete the task:

1. Store the value of the `name` property inside the `catName` variable, using bracket notation.
2. Run the `greeting()` method using dot notation (it will log the greeting to the console).
3. Update the `color` property value to `black`.

<!-- Code shared across examples -->

```html hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4
<section></section>
```

```css hidden live-sample___objects-1 live-sample___objects-2 live-sample___objects-3 live-sample___objects-4
* {
  box-sizing: border-box;
}

p {
  color: purple;
  margin: 0.5em 0;
}
```

<!-- Example-specific code -->

```js live-sample___objects-1
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;
section.appendChild(para1);
section.appendChild(para2);
```

{{ EmbedLiveSample("objects-1", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

const catName = cat["name"];
cat.greeting();
cat.color = "black";

// Don't edit the code below here!
// ...
```

</details>

## Object basics 2

In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands.

To complete the task:

1. Create an object literal called `band`, which contains the following properties:
   - `name`: A string representing the band name.
   - `nationality`: A string representing the country the band comes from.
   - `genre`: What type of music the band plays.
   - `members`: A number representing the number of members the band has.
   - `formed`: A number representing the year the band formed.
   - `split`: A number representing the year the band split up, or `false` if they are still together.
   - `albums`: An array representing the albums released by the band. Each array item should be an object containing the following members:
     - `name`: A string representing the name of the album.
     - `released`: A number representing the year the album was released.
       > [!NOTE]
       > Include at least two albums in the `albums` array.
2. Write a string to the variable `bandInfo`, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

```js live-sample___objects-2
let bandInfo;

// Don't edit the code above here!

// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
```

{{ EmbedLiveSample("objects-2", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

const band = {
  name: "Black Sabbath",
  nationality: "British",
  genre: "heavy metal",
  members: 4,
  formed: 1968,
  split: 2025,
  albums: [
    {
      name: "Black Sabbath",
      released: 1970,
    },
    {
      name: "Paranoid",
      released: 1970,
    },
    {
      name: "Master of Reality",
      released: 1971,
    },
    {
      name: "Vol. 4",
      released: 1972,
    },
  ],
};

bandInfo = `The ${band.nationality} ${band.genre} band ${band.name} were active between ${band.formed} and ${band.split}. Their first album, ${band.albums[0].name}, was released in ${band.albums[0].released}.`;

// Don't edit the code below here!
// ...
```

</details>

## Object basics 3

In this task, we want you to return to the `cat` object literal from Object basics 1.

To complete the task:

1. Rewrite the `greeting()` method so that it logs `"Hello, said Bertie the Cymric."` to the browser's console, but in a way that will work across _any_ cat object of the same structure, regardless of its name or breed.
2. Write your own object called `cat2`, which has the same structure and `greeting()` method, but a different `name`, `breed`, and `color`.
3. Call both `greeting()` methods to check that they log appropriate greetings to the console.

```js live-sample___objects-3
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Don't edit the code above here!

// Add your code here
```

{{ EmbedLiveSample("objects-3", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
// ...
// Don't edit the code above here!

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

cat.greeting();
cat2.greeting();
```

</details>

## Object basics 4

In the code you wrote for Task 3, the `greeting()` method and properties are defined twice, once for each cat. This isn't ideal: specifically, it violates a principle in programming called [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) or "Don't Repeat Yourself". In this task we want you to improve the code so the object members are only defined once.

To complete the task:

1. Create a JavaScript class that defines cat instances
2. Use your class along with the `new` keyword to create the `cat` and `cat2` instances.

```js live-sample___objects-4
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Elfie",
  breed: "Aphrodite Giant",
  color: "ginger",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

// Don't edit the code below here!

cat.greeting();
cat2.greeting();
```

{{ EmbedLiveSample("objects-4", "100%", 60) }}

<details>
<summary>Click here to show the solution</summary>

Your finished JavaScript should look something like this:

```js
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");

// Don't edit the code below here!
// ...
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/DOM_scripting", "Learn_web_development/Core/Scripting")}}
