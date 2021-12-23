---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Error.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified {{jsxref("Error")}} object.

## Syntax

```js
toString()
```

### Return value

A string representing the specified {{jsxref("Error")}} object.

## Description

The {{jsxref("Error")}} object overrides the {{jsxref("Object.prototype.toString()")}}
method inherited by all objects. Its semantics are as follows (assuming
{{jsxref("Object")}} and {{jsxref("String")}} have their original values):

```js
Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
```

## Examples

### Using toString()

```js
var e1 = new Error('fatal error');
console.log(e1.toString()); // 'Error: fatal error'

var e2 = new Error('fatal error');
e2.name = undefined;
console.log(e2.toString()); // 'Error: fatal error'

var e3 = new Error('fatal error');
e3.name = '';
console.log(e3.toString()); // 'fatal error'

var e4 = new Error('fatal error');
e4.name = '';
e4.message = undefined;
console.log(e4.toString()); // ''

var e5 = new Error('fatal error');
e5.name = 'hello';
e5.message = undefined;
console.log(e5.toString()); // 'hello'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Error.prototype.toSource()")}}
