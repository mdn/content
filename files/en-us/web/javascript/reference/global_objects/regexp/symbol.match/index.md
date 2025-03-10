---
title: RegExp.prototype[Symbol.match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.@@match
---

{{JSRef}}

The **`[Symbol.match]()`** method of {{jsxref("RegExp")}} instances specifies how [`String.prototype.match()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) should behave. In addition, its presence (or absence) can influence whether an object is regarded as a regular expression.

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.match]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    return "INVALID";
  }
}

console.log("2012-07-02".match(new RegExp1("([0-9]+)-([0-9]+)-([0-9]+)")));
// Expected output: "VALID"
```

## Syntax

```js-nolint
regexp[Symbol.match](str)
```

### Parameters

- `str`
  - : A {{jsxref("String")}} that is a target of the match.

### Return value

An {{jsxref("Array")}} whose contents depend on the presence or absence of the global (`g`) flag, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if no matches are found.

- If the `g` flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
- If the `g` flag is not used, only the first complete match and its related capturing groups are returned. In this case, `match()` will return the same result as {{jsxref("RegExp.prototype.exec()")}} (an array with some extra properties).

## Description

This method is called internally in {{jsxref("String.prototype.match()")}}.

For example, the following two examples return same result.

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

If the regex is global (with the `g` flag), the regex's [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) method will be repeatedly called until `exec()` returns `null`. Otherwise, `exec()` would only be called once and its result becomes the return value of `[Symbol.match]()`.

Because `[Symbol.match]()` would keep calling `exec()` until it returns `null`, and `exec()` would automatically reset the regex's [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) to 0 when the last match fails, `[Symbol.match]()` would typically not have side effects when it exits. However, when the regex is [sticky](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) but not global, `lastIndex` would not be reset. In this case, each call to `match()` may return a different result.

```js
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

When the regex is sticky and global, it would still perform sticky matches — i.e. it would fail to match any occurrences beyond the `lastIndex`.

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

If the current match is an empty string, the `lastIndex` would still be advanced — if the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), it would advance by one Unicode code point; otherwise, it advances by one UTF-16 code unit.

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

This method exists for customizing match behavior within `RegExp` subclasses.

In addition, the `[Symbol.match]` property is used to check [whether an object is a regular expression](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Examples

### Direct call

This method can be used in _almost_ the same way as {{jsxref("String.prototype.match()")}}, except the different `this` and the different arguments order.

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### Using `[Symbol.match]()` in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[Symbol.match]()` method to modify the default behavior.

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
const str = "2016-01-02";
const result = str.match(re); // String.prototype.match calls re[Symbol.match]().
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype[Symbol.match]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
