---
title: 'TypeError: variable "x" redeclares argument'
slug: Web/JavaScript/Reference/Errors/Var_hides_argument
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript [strict
mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "variable redeclares argument" occurs when the same variable
name occurs as a function parameter and is then redeclared using a
[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
assignment in a function body again.

## Message

```js
TypeError: variable "x" redeclares argument (Firefox)
```

## Error type

{{jsxref("TypeError")}} warning in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

The same variable name occurs as a function parameter and is then redeclared using a
[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
assignment in a function body again. This might be a naming conflict and thus JavaScript
warns about it.

This error occurs as a warning in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only. In
non-strict code, the redeclaration is silently ignored.

## Examples

### Invalid cases

In this case, the variable "arg" redeclares the argument.

```js example-bad
'use strict';

function f(arg) {
  var arg = 'foo';
}
```

### Valid cases

To fix this warning, the
[`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
statement can just be omitted, because the variable exists already. In other cases, you
might to rename either the function parameter or the variable name.

```js example-good
'use strict';

function f(arg) {
  arg = 'foo';
}
```

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
