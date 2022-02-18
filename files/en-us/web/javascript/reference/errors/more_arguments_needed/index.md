---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "more arguments needed" occurs when there is an error with how
a function is called. More arguments need to be provided.

## Message

```js
TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create requires at least 1 argument, but only 0 were passed
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

There is an error with how a function is called. More arguments need to be provided.

## Examples

### Required arguments not provided

The {{jsxref("Object.create()")}} method requires at least one argument and the
{{jsxref("Object.setPrototypeOf()")}} method requires at least two arguments:

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

You can fix this by setting {{jsxref("null")}} as the prototype, for example:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
