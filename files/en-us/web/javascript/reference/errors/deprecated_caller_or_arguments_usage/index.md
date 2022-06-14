---
title: 'ReferenceError: deprecated caller or arguments usage'
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - Warning
---
{{jsSidebar("Errors")}}

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception
"deprecated caller or arguments usage" occurs when the
deprecated {{jsxref("Function.caller")}} or {{jsxref("Function.arguments")}} properties
are used.

## Message

```js
TypeError: 'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context (Edge)
Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)
```

## Error type

A strict-mode-only warning that a {{jsxref("ReferenceError")}} occurred. JavaScript
execution won't be halted.

## What went wrong?

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), the
{{jsxref("Function.caller")}} or {{jsxref("Function.arguments")}} properties are used
and shouldn't be. They are deprecated, because they leak the function caller, are
non-standard, hard to optimize and potentially a performance-harmful feature.

## Examples

### Deprecated `function.caller` or `arguments.callee.caller`

{{jsxref("Function.caller")}} and
[`arguments.callee.caller`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
are deprecated (see the reference articles for more information).

```js example-bad
'use strict';

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"
```

### `Function.arguments`

{{jsxref("Function.arguments")}} is deprecated (see the reference article for more
information).

```js example-bad
'use strict';

function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
```

## See also

- [Deprecated and obsolete features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.arguments")}}
- {{jsxref("Function.caller")}} and
  [`arguments.callee.caller`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
