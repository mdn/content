---
title: const
slug: Web/JavaScript/Reference/Statements/const
page-type: javascript-statement
browser-compat: javascript.statements.const
---

{{jsSidebar("Statements")}}

The **`const`** declaration creates block-scoped constants, much like variables declared using the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) keyword. The value of a constant can't be changed through reassignment (i.e. by using the [assignment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)), and it can't be redeclared (i.e. through a [variable declaration](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)). However, if a constant is an [object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) or [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) its properties or items can be updated or removed.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntax

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : The constant's name, which can be any legal {{Glossary("identifier")}}.
- `valueN`
  - : The constant's value. This can be any legal expression, including a function expression.

The [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax can also be used to declare variables.

```js
const { bar } = foo; // where foo = { bar: 10, baz: 12 };
// This creates a constant with the name 'bar', which has a value of 10
```

## Description

This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do _not_ become properties of the {{jsxref("globalThis")}} object, unlike {{jsxref("Statements/var", "var")}} variables.

An initializer for a constant is required. You must specify its value in the same declaration. (This makes sense, given that it can't be changed later.)

The `const` declaration creates a read-only reference to a value. It does _not_ mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

All the considerations about the [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) apply to both {{jsxref("Statements/let", "let")}} and `const`. For this reason, `const` declarations are commonly regarded as [non-hoisted](/en-US/docs/Glossary/Hoisting).

A constant cannot share its name with a function or a variable in the same scope.

If you're experimenting in a REPL, such as the Firefox web console (**Tools** > **Web Developer** > **Web Console**), and you run two `const` declarations with the same name in two separate inputs, you may get a syntax error due to re-declaration. See further discussion of this issue in [Firefox bug 1580891](https://bugzil.la/1580891). The Chrome console allows `const` re-declarations between different REPL inputs.

Unlike `var`, `const` begins [_declarations_, not _statements_](/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). That means you cannot use a lone `const` declaration as the body of a block (which makes sense, since there's no way to access the variable).

```js example-bad
if (true) const a = 1; // SyntaxError: Unexpected token 'const'
```

## Examples

### Basic const usage

Constants can be declared with uppercase or lowercase, but a common convention is to use all-uppercase letters.

```js
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this throws an error
// Uncaught TypeError: Assignment to constant variable
MY_FAV = 20;

// MY_FAV is 7
console.log("my favorite number is: " + MY_FAV);

// trying to redeclare a constant throws an error
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// this throws an error too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;
```

### Block scoping

It's important to note the nature of block scoping.

```js
if (MY_FAV === 7) {
  // this is fine and creates a block scoped MY_FAV variable
  // (works equally well with let to declare a block scoped non const variable)
  const MY_FAV = 20;

  // MY_FAV is now 20
  console.log("my favorite number is " + MY_FAV);

  // this gets hoisted into the global context and throws an error
  var MY_FAV = 20;
}

// MY_FAV is still 7
console.log("my favorite number is " + MY_FAV);
```

### const needs to be initialized

```js example-bad
// throws an error
// Uncaught SyntaxError: Missing initializer in const declaration

const FOO;
```

### const in objects and arrays

`const` also works on objects and arrays. Attempting to overwrite the object throws an error "Assignment to constant variable".

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

However, object keys are not protected, so the following statement is executed without problem.

```js
MY_OBJECT.key = "otherValue";
```

You would need to use [`Object.freeze()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to make an object immutable.

The same applies to arrays. Assigning a new array to the variable throws an error "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

Still, it's possible to push items into the array and thus mutate it.

```js
MY_ARRAY.push("A"); // ["A"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Constants in the JavaScript Guide](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
