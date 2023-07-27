---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "`"use strict"` not allowed in function" occurs
when a `"use strict"` directive is used at the top of a function with
{{jsxref("Functions/Default_parameters", "default parameters", "", 1)}},
{{jsxref("Functions/rest_parameters", "rest parameters", "", 1)}}, or
{{jsxref("Operators/Destructuring_assignment", "destructuring parameters", "", 1)}}.

## Message

```plain
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list (V8-based)
SyntaxError: "use strict" not allowed in function with default parameter (Firefox)
SyntaxError: "use strict" not allowed in function with rest parameter (Firefox)
SyntaxError: "use strict" not allowed in function with destructuring parameter (Firefox)
SyntaxError: 'use strict' directive not allowed inside a function with a non-simple parameter list. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

A `"use strict"` directive is written at the top of a function that has one
of the following parameters:

- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}

A `"use strict"` directive is not allowed at the top of such functions per
the ECMAScript specification.

## Examples

### Function statement

In this case, the function `sum` has default parameters `a=1` and
`b=2`:

```js example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

If the function should be in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), and the
entire script or enclosing function is also okay to be in strict mode, you can move the
`"use strict"` directive outside of the function:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Function expression

A function expression can use yet another workaround:

```js example-bad
const sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

This can be converted to the following expression:

```js example-good
const sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Arrow function

If an arrow function needs to access the `this` variable, you can use the
arrow function as the enclosing function:

```js example-bad
const callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

This can be converted to the following expression:

```js example-good
const callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## See also

- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
