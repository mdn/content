---
title: Array
slug: Glossary/Array
page-type: glossary-definition
---

{{GlossarySidebar}}

An **array** is an ordered collection of data (either {{Glossary("primitive")}} or {{Glossary("object")}} depending upon the language). Arrays are used to store multiple values under a single variable name. A regular variable, on the other hand, can store only one value.

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various {{Glossary("Method", "methods")}}.

Arrays in JavaScript look like this:

```js
// Arrays in JavaScript can hold different types of data
const myArray = [1, 2, 3, 4];
const barbieDollNamesArray = ["Barbie", "Ken", "Midge", "Allan", "Skipper"];

// Array indexes starts at 0.
console.log(myArray[0]); // output: 1
console.log(barbieDollNamesArray[2]); // output: "Midge"
```

## See also

- JavaScript {{jsxref("Array")}}
