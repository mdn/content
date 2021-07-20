---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.@@search
---
{{JSRef}}

The **`[@@search]()`** method executes a search for a match
between a `this` regular expression and a string.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}

## Syntax

```js
regexp[Symbol.search](str)
```

### Parameters

- `str`
  - : A {{jsxref("String")}} that is a target of the search.

### Return value

- integer
  - : If successful, `[@@search]()` returns the index of the first match of the
    regular expression inside the string. Otherwise, it returns -1.

## Description

This method is called internally in {{jsxref("String.prototype.search()")}}. For
example, the following two examples return the same result.

```js
'abc'.search(/a/);

/a/[Symbol.search]('abc');
```

This method exists for customizing the search behavior in `RegExp`
subclasses.

## Examples

### Direct call

This method can be used in almost the same way as
{{jsxref("String.prototype.search()")}}, except the different `this` and the
different arguments order.

```js
var re = /-/g;
var str = '2016-01-02';
var result = re[Symbol.search](str);
console.log(result);  // 4
```

### Using @@search in subclasses

Subclass of {{jsxref("RegExp")}} can override `[@@search]()` method to
modify the behavior.

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re); // String.prototype.search calls re[@@search].
console.log(result); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `RegExp.prototype[@@search]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.search()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
