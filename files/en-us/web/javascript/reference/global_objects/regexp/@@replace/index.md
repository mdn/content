---
title: RegExp.prototype[@@replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.@@replace
---
{{JSRef}}

The **`[@@replace]()`** method replaces some or all matches of
a `this` pattern in a string by a `replacement`, and returns the
result of the replacement as a new string. The `replacement` can be a string
or a function to be called for each match.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## Syntax

```js
regexp[Symbol.replace](str, newSubStr|function)
```

### Parameters

- `str`
  - : A {{jsxref("String")}} that is a target of the replacement.
- `newSubStr` (replacement)
  - : The {{jsxref("String")}} that replaces the substring. A number of special
    replacement patterns are supported; see the {{jsxref("String.prototype.replace",
    "Specifying a string as a parameter", "#Specifying_a_string_as_a_parameter", 1)}}
    section in {{jsxref("String.prototype.replace()")}} page.
- `function` (replacement)
  - : A function to be invoked to create the new substring. The arguments supplied to this
    function are described in the {{jsxref("String.prototype.replace", "Specifying a
    function as a parameter", "#Specifying_a_function_as_a_parameter", 1)}} section in
    {{jsxref("String.prototype.replace()")}} page.

### Return value

A new string with some or all matches of a pattern replaced by a replacement.

## Description

This method is called internally in {{jsxref("String.prototype.replace()")}} if the
`pattern` argument is a {{jsxref("RegExp")}} object.  For example, following
two examples return same result.

```js
'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');
```

This method exists for customizing replace behavior in `RegExp` subclass.

If pattern argument is **not** a {{jsxref("RegExp")}} object,
{{jsxref("String.prototype.replace()")}} doesn't call this method, nor creates a
{{jsxref("RegExp")}} object.

## Examples

### Direct call

This method can be used in almost the same way as
{{jsxref("String.prototype.replace()")}}, except the different `this` and the
different arguments order.

```js
var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
```

### Using @@replace in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[@@replace]()` method
to modify the default behavior.

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `RegExp.prototype[@@replace]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
