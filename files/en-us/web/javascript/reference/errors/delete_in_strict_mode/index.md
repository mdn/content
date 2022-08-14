---
title: >-
  SyntaxError: applying the 'delete' operator to an unqualified name is
  deprecated
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "applying the 'delete' operator to an unqualified name is deprecated" occurs when variables are attempted to be deleted using the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator.

## Message

```
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Error type

{{jsxref("SyntaxError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

Normal variables in JavaScript can't be deleted using the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator. In strict mode, an attempt to delete a variable will throw an error and is not allowed.

The `delete` operator can only delete properties on an object. Object properties are "qualified" if they are configurable.

Unlike what common belief suggests, the `delete` operator has **nothing** to do with directly freeing memory. Memory management is done indirectly via breaking references, see the [memory management](/en-US/docs/Web/JavaScript/Memory_Management) page and the [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator page for more details.

This error only happens in [strict mode code](/en-US/docs/Web/JavaScript/Reference/Strict_mode). In non-strict code, the operation just returns `false`.

## Examples

### Freeing the contents of a variable

Attempting to delete a plain variable, doesn't work in JavaScript and it throws an error in strict mode:

```js example-bad
'use strict';

var x;

// …

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

To free the contents of a variable, you can set it to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null):

```js example-good
'use strict';

var x;

// …

x = null;

// x can be garbage collected
```

## See also

- [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [Memory management](/en-US/docs/Web/JavaScript/Memory_Management)
- [TypeError: property "x" is non-configurable and can't be deleted](/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete)
