---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.@@split
---

{{JSRef}}

The **`[@@split]()`** method of {{jsxref("RegExp")}} instances specifies how [`String.prototype.split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) should behave when the regular expression is passed in as the separator.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Syntax

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### Parameters

- `str`
  - : The target of the split operation.
- `limit` {{optional_inline}}
  - : Integer specifying a limit on the number of splits to be found. The `[@@split]()` method still splits on every match of `this` RegExp pattern (or, in the Syntax above, `regexp`), until the number of split items match the `limit` or the string falls short of `this` pattern.

### Return value

An {{jsxref("Array")}} containing substrings as its elements. Capturing groups are included.

## Description

This method is called internally in {{jsxref("String.prototype.split()")}} when a `RegExp` is passed as the separator. For example, the following two examples return the same result.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

This method exists for customizing the behavior of `split()` in `RegExp` subclasses.

The `RegExp.prototype[@@split]()` base method exhibits the following behaviors:

- It starts by using [`@@species`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species) to construct a new regexp, thus avoiding mutating the original regexp in any way.
- The regexp's `g` ("global") flag is ignored, and the `y` ("sticky") flag is always applied even when it was not originally present.
- If the target string is empty, and the regexp can match empty strings (for example, `/a?/`), an empty array is returned. Otherwise, if the regexp can't match an empty string, `[""]` is returned.
- The matching proceeds by continuously calling `this.exec()`. Since the regexp is always sticky, this will move along the string, each time yielding a matching string, index, and any capturing groups.
- For each match, the substring between the last matched string's end and the current matched string's beginning is first appended to the result array. Then, the capturing groups' values are appended one-by-one.
- If the current match is an empty string, or if the regexp doesn't match at the current position (since it's sticky), the `lastIndex` would still be advanced — if the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), it would advance by one Unicode code point; otherwise, it advances by one UTF-16 code unit.
- If the regexp doesn't match the target string, the target string is returned as-is, wrapped in an array.
- The returned array's length will never exceed the `limit` parameter, if provided, while trying to be as close as possible. Therefore, the last match and its capturing groups may not all be present in the returned array if the array is already filled.

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

### Using @@split in subclasses

Subclasses of {{jsxref("RegExp")}} can override the `[@@split]()` method to
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
const result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.prototype[@@split]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[@@match]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)
- [`RegExp.prototype[@@matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
- [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
- [`RegExp.prototype[@@search]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
