---
title: return
slug: Web/JavaScript/Reference/Statements/return
tags:
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.return
---
{{jsSidebar("Statements")}}

The **`return`** statement ends function execution and
specifies a value to be returned to the function caller.

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## Syntax

```js
return [expression];
```

- `expression`
  - : The expression whose value is to be returned. If omitted, `undefined` is
    returned instead.

## Description

When a `return` statement is used in a function body, the execution of the
function is stopped. If specified, a given value is returned to the function caller. For
example, the following function returns the square of its argument, `x`,
where `x` is a number.

```js
function square(x) {
  return x * x;
}
const demo = square(3);
// demo will equal 9
```

If the value is omitted, `undefined` is returned instead.

The following return statements all break the function execution:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### Automatic Semicolon Insertion

The `return` statement is affected by
[automatic semicolon insertion (ASI)](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).
No line terminator is allowed between the `return` keyword and the expression.

```js example-bad
return
a + b;
```

is transformed by ASI into:

```js
return;
a + b;
```

The console will warn "unreachable code after return statement".

> **Note:** Starting with Firefox 40, a warning is shown in the console if
> unreachable code is found after a `return` statement.

To avoid this problem (to prevent ASI), you could use parentheses:

```js
return (
  a + b
);
```

## Examples

### Interrupt a function

A function immediately stops at the point where `return` is called.

```js
function counter() {
  for (let count = 1; ; count++) {  // infinite loop
    console.log(`${count}A`); // until 5
    if (count === 5) {
      return;
    }
    console.log(`${count}B`);  // until 4
  }
  console.log(`${count}C`);  // never appears
}

counter();

// Output:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Returning a function

See also the article about [Closures](/en-US/docs/Web/JavaScript/Closures).

```js
function magic() {
  return function calc(x) { return x * 42; };
}

const answer = magic();
answer(1337); // 56154
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [Closures](/en-US/docs/Web/JavaScript/Closures)
