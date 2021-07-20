---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.@@split
---
{{JSRef}}

The **`[@@split]()`** method splits a {{jsxref("String")}}
object into an array of strings by separating the string into substrings.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntax

```js
regexp[Symbol.split](str[, limit])
```

### Parameters

- `str`
  - : The target of the split operation.
- `limit` {{optional_inline}}
  - : Integer specifying a limit on the number of splits to be found. The
    `[@@split]()` method still splits on every match of `this`
    RegExp pattern (or, in the Syntax above, `regexp`), until the
    number of split items match the `limit` or the string falls
    short of `this` pattern.

### Return value

An {{jsxref("Array")}} containing substrings as its elements.

## Description

This method is called internally in {{jsxref("String.prototype.split()")}} if its
`separator` argument is an object that has a `@@split` method,
such as a {{jsxref("RegExp")}}. For example, the following two examples return the same
result.

```js
'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');
```

This method exists for customizing the behavior of `split()` in
`RegExp` subclass.

## Examples

### Direct call

This method can be used in almost the same way as
{{jsxref("String.prototype.split()")}}, except the different `this` and the
different order of arguments.

```js
let re = /-/g;
let str = '2016-01-02';
let result = re[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]
```

### Using @@split in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[@@split]()` method to
modify the default behavior.

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    let result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x => "(" + x + ")");
  }
}

let re = new MyRegExp('-');
let str = '2016-01-02';
let result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `RegExp.prototype[@@split]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
