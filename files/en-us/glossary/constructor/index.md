---
title: Constructor
slug: Glossary/Constructor
tags:
  - CodingScripting
  - Glossary
---
A **constructor** belongs to a particular class {{glossary("object")}} that is instantiated. The constructor initializes this object and can provide access to its private information. The concept of a constructor can be applied to most {{glossary("OOP","object-oriented programming")}} languages. Essentially, a constructor in {{glossary("JavaScript")}} is usually declared at the instance of a {{glossary("class")}}.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ..., argN){
}
```

To call the constructor of the class in JavaScript, use a `new` operator to assign a new {{glossary("object reference")}} to a {{glossary("variable")}}.

```js
function Default() {
}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
```

## See also

- {{Interwiki("wikipedia", "Constructor_%28object-oriented_programming%29", "Constructor")}} on Wikipedia
- [The constructor in object oriented programming for JavaScript](/en-US/docs/Learn/JavaScript/Objects#the_constructor) on MDN
- [New operator in JavaScript](/en-US/docs/Web/JavaScript/Reference/Operators/new) on MDN
