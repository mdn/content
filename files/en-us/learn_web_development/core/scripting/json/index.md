---
title: Working with JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa). You'll come across it quite often, so in this article, we give you all you need to work with JSON using JavaScript, including parsing JSON so you can access data within it, and creating JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>An understanding of <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> and the <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">fundamentals of CSS</a>, familiarity with JavaScript basics as covered in previous lessons.</td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>What JSON is — a very commonly used data format based on JavaScript object syntax.</li>
          <li>That JSON can also contain arrays.</li>
          <li>Retrieve JSON as a JavaScript object using mechanisms available in Web APIs (for example, <code>Response.json()</code> in the Fetch API).</li>
          <li>Access values inside JSON data using bracket and dot syntax.</li>
          <li>Converting between objects and text using <code>JSON.parse()</code> and <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## No, really, what is JSON?

{{glossary("JSON")}} is a text-based data format following JavaScript object syntax.
It represents structured data as a string, which is useful when you want to transmit data across a network.
Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript. Many programming environments feature the ability to read (parse) and generate JSON.
In JavaScript, the methods for parsing and generating JSON are provided by the [`JSON`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.

> [!NOTE]
> Converting a string to a native object is called _deserialization_, while converting a native object to a string so it can be transmitted across the network is called _serialization_.

A JSON string can be stored in its own file, which is basically just a text file with an extension of `.json`, and a {{glossary("MIME type")}} of `application/json`.

### JSON structure

As described above, JSON is a string whose format very much resembles JavaScript object literal format.
The following is a valid JSON string representing an object.
Note how it is also a valid JavaScript object literal — just with some more [syntax restrictions](#json_syntax_restrictions).

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

If you load this JSON in your JavaScript program as a string, you can parse it into a normal object and then access the data inside it using the same dot/bracket notation we looked at in the [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) article.
For example:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. First, we have the variable name — `superHeroes`.
2. Inside that, we want to access the `members` property, so we use `.members`.
3. `members` contains an array populated by objects. We want to access the second object inside the array, so we use `[1]`.
4. Inside this object, we want to access the `powers` property, so we use `.powers`.
5. Inside the `powers` property is an array containing the selected hero's superpowers. We want the third one, so we use `[2]`.

The key takeaway is that there's really nothing special about working with JSON; after you've parsed it into a JavaScript object, you work with it just like you would with an object declared using the same object literal syntax.

> [!NOTE]
> We've made the JSON seen above available inside a variable in our [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) example (see the [source code](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Try loading this up and then accessing data inside the variable via your browser's JavaScript console.

### Arrays as JSON

Above we mentioned that JSON text basically looks like a JavaScript object inside a string.
We can also convert arrays to/from JSON. The below example is perfectly valid JSON:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

You have to access array items (in its parsed version) by starting with an array index, for example `superHeroes[0].powers[0]`.

The JSON can also contain a single primitive. For example, `29`, `"Dan Jukes"`, or `true` are all valid JSON.

### JSON syntax restrictions

As mentioned earlier, any JSON is a valid JavaScript literal (object, array, number, etc.). The converse is not true, though—not all JavaScript object literals are valid JSON.

- JSON can only contain _serializable_ data types. This means:
  - For primitives, JSON can contain string literals, number literals, `true`, `false`, and `null`. Notably, it cannot contain `undefined`, `NaN`, or `Infinity`.
  - For non-primitives, JSON can contain object literals and arrays, but not functions or any other object types, such as `Date`, `Set`, and `Map`. The objects and arrays inside JSON need to further contain valid JSON data types.
- Strings must be enclosed in double quotes, not single quotes.
- Numbers must be written in decimal notation.
- Each property of an object must be in the form of `"key": value`. Property names must be string literals enclosed in double quotes. Special JavaScript syntax, such as methods, is not allowed because methods are functions, and functions are not valid JSON data types.
- Objects and arrays cannot contain [trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas).
- Comments are not allowed in JSON.

Even a single misplaced comma or colon can make a JSON file invalid and cause it to fail.
You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly).
You can validate JSON using an application like [JSONLint](https://jsonlint.com/) or [JSON-validate](https://www.json-validate.com/)

## Active learning: Working through a JSON example

So, let's work through an example to show how we could make use of some JSON formatted data on a website.

### Getting started

To begin with, make local copies of our [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) and [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) files.
The latter contains some simple CSS to style our page, while the former contains some very simple body HTML, plus a {{HTMLElement("script")}} element to contain the JavaScript code we will be writing in this exercise:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
...
</script>
```

We have made our JSON data available on our GitHub, at <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

We are going to load the JSON into our script, and use some nifty DOM manipulation to display it, like this:

![Image of a document titled "Super hero squad" (in a fancy font) and subtitled "Hometown: Metro City // Formed: 2016". Three columns below the heading are titled "Molecule Man", "Madame Uppercut", and "Eternal Flame", respectively. Each column lists the hero's secret identity name, age, and superpowers.](json-superheroes.png)

### Top-level function

The top-level function looks like this:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

To obtain the JSON, we use an API called [Fetch](/en-US/docs/Web/API/Fetch_API).
This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g., images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

In our function, the first four lines use the Fetch API to fetch the JSON from the server:

- we declare the `requestURL` variable to store the GitHub URL
- we use the URL to initialize a new {{domxref("Request")}} object.
- we make the network request using the {{domxref("Window/fetch", "fetch()")}} function, and this returns a {{domxref("Response")}} object
- we retrieve the response as JSON using the {{domxref("Response/json", "json()")}} function of the `Response` object.

> [!NOTE]
> The `fetch()` API is **asynchronous**. You can learn about asynchronous functions in detail in our [Asynchronous JavaScript module](/en-US/docs/Learn_web_development/Extensions/Async_JS), but for now, we'll just say that we need to add the keyword {{jsxref("Statements/async_function", "async")}} before the name of the function that uses the fetch API, and add the keyword {{jsxref("Operators/await", "await")}} before the calls to any asynchronous functions.

After all that, the `superHeroes` variable will contain the JavaScript object based on the JSON. We are then passing that object to two function calls — the first one fills the `<header>` with the correct data, while the second one creates an information card for each hero on the team, and inserts it into the `<section>`.

### Populating the header

Now that we've retrieved the JSON data and converted it into a JavaScript object, let's make use of it by writing the two functions we referenced above. First of all, add the following function definition below the previous code:

```js
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
```

Here we first create an {{HTMLElement("Heading_Elements", "h1")}} element with [`createElement()`](/en-US/docs/Web/API/Document/createElement), set its [`textContent`](/en-US/docs/Web/API/Node/textContent) to equal the `squadName` property of the object, then append it to the header using [`appendChild()`](/en-US/docs/Web/API/Node/appendChild). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. The only difference is that its text is set to a [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals) containing both the `homeTown` and `formed` properties of the object.

### Creating the hero information cards

Next, add the following function at the bottom of the code, which creates and displays the superhero cards:

```js
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

To start with, we store the `members` property of the JavaScript object in a new variable. This array contains multiple objects that contain the information for each hero.

Next, we use a [for...of loop](/en-US/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop) to loop through each object in the array. For each one, we:

1. Create several new elements: an `<article>`, an `<h2>`, three `<p>`s, and a `<ul>`.
2. Set the `<h2>` to contain the current hero's `name`.
3. Fill the three paragraphs with their `secretIdentity`, `age`, and a line saying "Superpowers:" to introduce the information in the list.
4. Store the `powers` property in another new constant called `superPowers` — this contains an array that lists the current hero's superpowers.
5. Use another `for...of` loop to loop through the current hero's superpowers — for each one we create an `<li>` element, put the superpower inside it, then put the `listItem` inside the `<ul>` element (`myList`) using `appendChild()`.
6. The very last thing we do is to append the `<h2>`, `<p>`s, and `<ul>` inside the `<article>` (`myArticle`), then append the `<article>` inside the `<section>`. The order in which things are appended is important, as this is the order they will be displayed inside the HTML.

> [!NOTE]
> If you are having trouble getting the example to work, try referring to our [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) source code (see it [running live](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) also.)

> [!NOTE]
> If you are having trouble following the dot/bracket notation we are using to access the JavaScript object, it can help to have the [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) file open in another tab or your text editor, and refer to it as you look at our JavaScript.
> You should also refer back to our [JavaScript object basics](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics) article for more information on dot and bracket notation.

### Calling the top-level function

Finally, we need to call our top-level `populate()` function:

```js
populate();
```

## Converting between objects and text

The above example was simple in terms of accessing the JavaScript object, because we converted the network response directly into a JavaScript object using `response.json()`.

But sometimes we aren't so lucky — sometimes we receive a raw JSON string, and we need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it. Luckily, these two problems are so common in web development that a built-in [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object is available in browsers, which contains the following two methods:

- [`parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
- [`stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Accepts an object as a parameter, and returns the equivalent JSON string.

You can see the first one in action in our [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) example (see the [source code](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — this does exactly the same thing as the example we built up earlier, except that:

- we retrieve the response as text rather than JSON, by calling the {{domxref("Response/text", "text()")}} method of the response
- we then use `parse()` to convert the text to a JavaScript object.

The key snippet of code is here:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

As you might guess, `stringify()` works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Here we're creating a JavaScript object, then checking what it contains, then converting it to a JSON string using `stringify()` — saving the return value in a new variable — then checking it again.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: JSON](/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Summary

In this lesson, we've introduced you to using JSON in your programs, including how to create and parse JSON, and how to access data locked inside it. In the next article, we'll look at practical techniques for debugging JavaScript and handling errors.

## See also

- [JSON reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API overview](/en-US/docs/Web/API/Fetch_API)
- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP request methods](/en-US/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
