---
title: "SyntaxError: missing } after function body"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "missing } after function body" occurs when there is a syntax
mistake when creating a function somewhere. Check if any closing curly brackets or
parenthesis are in the correct order.

## Message

```
SyntaxError: missing } after function body (Firefox)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is a syntax mistake when creating a function somewhere. Also check if any closing
curly brackets or parenthesis are in the correct order. Indenting or formatting the code
a bit nicer might also help you to see through the jungle.

## Examples

### Forgotten closing curly bracket

Oftentimes, there is a missing curly bracket in your function code:

```js example-bad
const charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

Correct would be:

```js example-good
const charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

It can be more obscure when using [IIFE](/en-US/docs/Glossary/IIFE), [Closures](/en-US/docs/Web/JavaScript/Closures), or other constructs that use
a lot of different parenthesis and curly brackets, for example.

```js example-bad
(function () { if (true) { return false; } );
```

Oftentimes, indenting differently or double checking indentation helps to spot these
errors.

```js example-good
(function () {
  if (true) {
    return false;
  }
});
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
