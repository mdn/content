---
title: Function.prototype.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
tags:
  - Function
  - JavaScript
  - Non-standard
  - Property
browser-compat: javascript.builtins.Function.displayName
---
{{JSRef}} {{non-standard_header}}

A {{jsxref("Function")}} object's optional **`displayName`** property returns the display name of the function.

## Examples

### Setting a displayName

If present, it may be preferred by consoles and profilers over the {{jsxref("Function.prototype.name", "name")}} property to be displayed as the name of a function.

By entering the following in a console, it should display as something like `function My Function()`:

```js
const a = function () {};
a.displayName = 'My Function';

a; // "function My Function()"
```

When defined, the `displayName` property returns the display name of a function:

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

const popup = function (content) {
  console.log(content);
};

popup.displayName = 'Show Popup';

console.log(popup.displayName); // "Show Popup"
```

### Defining a displayName in function expressions

You can define a function with a display name in a {{jsxref("Functions", "function expression", "", 1)}}:

```js
const object = {
  someMethod() {}
};

object.someMethod.displayName = 'someMethod';

console.log(object.someMethod.displayName); // logs "someMethod"

try { someMethod } catch (e) { console.log(e); }
// ReferenceError: someMethod is not defined
```

### Changing displayName dynamically

You can dynamically change the `displayName` of a function:

```js
const object = {
  // anonymous
  someMethod: function someMethod(value) {
    someMethod.displayName = `someMethod (${value})`;
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

- {{jsxref("Function.prototype.name")}}
