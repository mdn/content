---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.@@match
---
{{JSRef}}

The **`[@@match]()`** method retrieves the matches when
matching a _string_ against a _regular expression_.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## Syntax

```js
regexp[Symbol.match](str)
```

### Parameters

- `str`
  - : A {{jsxref("String")}} that is a target of the match.

### Return value

An {{jsxref("Array")}} containing the entire match result and any parentheses-captured
matched results, or {{jsxref("null")}} if there were no matches.

## Description

This method is called internally in {{jsxref("String.prototype.match()")}}.

For example, the following two examples return same result.

```js
'abc'.match(/a/);

/a/[Symbol.match]('abc');
```

This method exists for customizing match behavior within `RegExp`
subclasses.

## Examples

### Direct call

This method can be used in _almost_ the same way as
{{jsxref("String.prototype.match()")}}, except the different `this` and the
different arguments order.

```js
let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]
```

### Using `@@match` in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[@@match]()` method to
modify the default behavior.

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    let result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      }
    };
  }
}

let re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
let str = '2016-01-02';
let result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype[@@match]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
