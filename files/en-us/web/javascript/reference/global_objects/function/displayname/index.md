---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
tags:
  - Function
  - JavaScript
  - Non-standard
  - Property
browser-compat: javascript.builtins.Function.displayName
---
{{JSRef}} {{non-standard_header}}

The **`function.displayName`** property returns the display name of the function.

## Examples

### Setting a displayName

It is usually preferred by consoles and profilers over {{jsxref("Function.name", "func.name")}} to display the name of a function.

By entering the following in a console, it should display as something like "`function My Function()`":

```js
var a = function() {};
a.displayName = 'My Function';

a; // "function My Function()"
```

When defined, the `displayName` property returns the display name of a function:

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function(content) { console.log(content); };

popup.displayName = 'Show Popup';

console.log(popup.displayName); // "Show Popup"
```

### Defining a displayName in function expressions

You can define a function with a display name in a {{jsxref("Functions", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function() {}
};

object.someMethod.displayName = 'someMethod';

console.log(object.someMethod.displayName); // logs "someMethod"

try { someMethod } catch(e) { console.log(e); }
// ReferenceError: someMethod is not defined
```

### Changing displayName dynamically

You can dynamically change the `displayName` of a function:

```js
var object = {
  // anonymous
  someMethod: function(value) {
    arguments.callee.displayName = 'someMethod (' + value + ')';
  }
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod('123')
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function.name")}}
