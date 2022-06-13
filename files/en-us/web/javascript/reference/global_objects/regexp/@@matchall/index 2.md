---
title: RegExp.prototype[@@matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
  - Polyfill
browser-compat: javascript.builtins.RegExp.@@matchAll
---
{{JSRef}}

The **`[@@matchAll]`** method returns all matches of the
regular expression against a string.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}

## Syntax

```js
regexp[Symbol.matchAll](str)
```

### Parameters

- `str`
  - : A {{jsxref("String")}} that is a target of the match.

### Return value

An [iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

## Description

This method is called internally in {{jsxref("String.prototype.matchAll()")}}. For
example, the following two examples return same result.

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

This method exists for customizing the behavior of `matchAll()` in
{{jsxref('RegExp')}} subclasses.

## Examples

### Direct call

This method can be used in almost the same way as
{{jsxref("String.prototype.matchAll()")}}, except for the different value of
`this` and the different order of arguments.

```js
let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.matchAll](str);

console.log(Array.from(result, x => x[0]));
// ["2016", "01", "02"]
```

### Using @@matchAll in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[@@matchAll]()` method
to modify the default behavior.

For example, to return an {{jsxref("Array")}} instead of an [iterator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators):

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

const re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)', 'g');
const str = '2016-01-02|2019-03-07';
const result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `RegExp.prototype[@@matchAll]` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{JSxRef("String.prototype.matchAll()")}}
- {{JSxRef("Symbol.matchAll")}}
