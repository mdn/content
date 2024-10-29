---
title: TypeScript
slug: Glossary/TypeScript
page-type: glossary-definition
---

{{GlossarySidebar}}

TypeScript is a programming language that adds {{glossary("static_typing", "static type checking")}} to JavaScript.

TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical.

However, TypeScript adds compile time type checking, implementing rules about how different types can be used and combined. This catches a wide variety of programming errors that in JavaScript are only encountered at runtime.

Some typing rules are inferred from JavaScript. For example, in the code below, TypeScript infers that `myVariable` is a string, and will not allow it to be reassigned to a different type:

```js
let myVariable = "Hello World";
myVariable = 1;
// Error:
// Type 'number' is not assignable to type 'string'.
```

TypeScript also enables the programmer to annotate their code, to indicate, for example, the types of parameters to a function or the properties of an object:

```ts
function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.
```

After compilation, type annotations are removed, making the compiled output just JavaScript, meaning it can be executed in any JavaScript runtime.

## See also

- [TypeScript website](https://www.typescriptlang.org/)
