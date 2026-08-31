---
title: RegExp.prototype[Symbol.split]()
short-title: "[Symbol.split]()"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.@@split
sidebar: jsref
---

The **`[Symbol.split]()`** method of {{jsxref("RegExp")}} instances specifies how [`String.prototype.split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) should behave when the regular expression is passed in as the separator.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.split]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

console.log("2016-01-02".split(new RegExp1("-")));
// Expected output: Array ["(2016)", "(01)", "(02)"]

console.log("2016-01-02".split(/-/));
// Expected output: Array ["2016", "01", "02"]
```

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameters

- `str`
  - : The target of the split operation.
- `limit` {{optional_inline}}
  - : Integer specifying a limit on the number of splits to be found. The `[Symbol.split]()` method still splits on every match of `this` RegExp pattern (or, in the Syntax above, `regexp`), until the number of split items match the `limit` or the string falls short of `this` pattern.

### Return value

An {{jsxref("Array")}} containing substrings as its elements. Capturing groups are included.

## Description

This method exists for customizing the behavior of `split()` in `RegExp` subclasses. It is called internally in {{jsxref("String.prototype.split()")}} when a `RegExp` is passed as the separator. For example, the following two examples return the same result.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Like [`[Symbol.matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll), `[Symbol.split]()` starts by using [`[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) to construct a new regex, thus avoiding mutating the original regexp in any way. The constructor receives `this` and the original flags, plus the `y` ("sticky") flag if it was not originally present. The `g` ("global") flag is irrelevant for the method's behavior. By default, due to the `RegExp()` constructor's behavior, [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) starts as 0.

If the target string is empty, and the regexp can match empty strings (for example, `/a?/`), an empty array is returned. Otherwise, if the regexp can't match an empty string, `[""]` is returned.

The regex's [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method is repeatedly called, advancing the `lastIndex` each time, until it is at the end of the string. If the current match is an empty string, or if the regexp doesn't match at the current position (since it's sticky), the `lastIndex` would still be advanced — if the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), it would advance by one Unicode code point; otherwise, it advances by one UTF-16 code unit.

```js
console.log("😄".split(/(?:)/g)); // [ '\ud83d', '\ude04' ]
console.log("😄".split(/(?:)/gu)); // [ '😄' ]
```

For each match, the substring between the last matched string's end and the current matched string's beginning is first appended to the result array. Then, the capturing groups' values are appended one-by-one. The returned array's length will never exceed the `limit` parameter, if provided, while trying to be as close as possible. Therefore, the last match and its capturing groups may not all be present in the returned array if the array is already filled.

If there was no successful match anywhere in the string, the target string is returned as-is, wrapped in an array.

## Examples

### Direct call

This method can be used in almost the same way as
{{jsxref("String.prototype.split()")}}, except the different `this` and the
different order of arguments.

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Using `[Symbol.split]()` in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[Symbol.split]()` method to
modify the default behavior.

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

const re = new MyRegExp("-");
const str = "2016-01-02";
const result = str.split(re); // String.prototype.split calls re[Symbol.split]().
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype[Symbol.split]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[Symbol.match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
