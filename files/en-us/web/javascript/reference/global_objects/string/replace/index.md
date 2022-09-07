---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
  - Expressions
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular
  - String
  - Polyfill
browser-compat: javascript.builtins.String.replace
---
{{JSRef}}

The **`replace()`** method returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a {{jsxref("RegExp")}}, and the `replacement` can be a string or a function called for each match. If `pattern` is a string, only the first occurrence will be replaced. The original string is left unchanged.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntax

```js
replace(pattern, replacement)
```

### Parameters

- `pattern`
  - : Can be a string or an object with a [`Symbol.replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method — the typical example being a [regular expression](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Any value that doesn't have the `Symbol.replace` method will be coerced to a string.
- `replacement`
  - : Can be a string or a function.
    - If it's a string, it will replace the substring matched by `pattern`. A number of special replacement patterns are supported; see the [Specifying a string as the replacement](#specifying_a_string_as_the_replacement) section below.
    - If it's a function, it will be invoked for every match and its return value is used as the replacement text. The arguments supplied to this function are described in the [Specifying a function as the replacement](#specifying_a_function_as_the_replacement) section below.

### Return value

A new string, with one, some, or all matches of the pattern replaced by the specified replacement.

## Description

This method does not mutate the string value it's called on. It returns a new string.

A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the `g` flag, or use [`replaceAll()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) instead.

If `pattern` is an object with a [`Symbol.replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) method (including `RegExp` objects), that method is called with the target string and `replacement` as arguments. Its return value becomes the return value of `replace()`. In this case the behavior of `replace()` is entirely encoded by the `@@replace` method — for example, any mention of "capturing groups" in the description below is actually functionality provided by [`RegExp.prototype[@@replace]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace).

If the `pattern` is an empty string, the replacement is prepended to the start of the string.

```js
"xxx".replace("", "_"); // "_xxx"
```

A regexp with the `g` flag is the only case where `replace()` replaces more than once. For more information about how regex properties (especially the [sticky](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) flag) interact with `replace()`, see [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace).

### Specifying a string as the replacement

The replacement string can include the following special replacement patterns:

| Pattern   | Inserts                                                                                        |
| --------- | -----------------------------------------------------------------------------------------------|
| `$$`      | Inserts a `"$"`.                                                                               |
| `$&`      | Inserts the matched substring.                                                                 |
| `` $` ``  | Inserts the portion of the string that precedes the matched substring.                         |
| `$'`      | Inserts the portion of the string that follows the matched substring.                          |
| `$n`      | Inserts the `n`th (`1`-indexed) capturing group where `n` is a positive integer less than 100. |
| `$<Name>` | Inserts the named capturing group where `Name` is the group name.                              |

`$n` and `$<Name>` are only available if the `pattern` argument is a {{jsxref("RegExp")}} object. If the `pattern` is a string, or if the corresponding capturing group isn't present in the regex, then the pattern will be replaced as a literal. If the group is present but isn't matched (because it's part of a disjunction), it will be replaced with an empty string.

```js
"foo".replace(/(f)/, "$2"); // "$2oo"; the regex doesn't have the second group
"foo".replace("f", "$1"); // "$1oo"; the pattern is a string, so it doesn't have any groups
"foo".replace(/(f)|(g)/, "$2"); // "oo"; the second group exists but isn't matched
```

### Specifying a function as the replacement

You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string.

> **Note:** The above-mentioned special replacement patterns do _not_ apply for strings returned from the replacer function.

The function has the following signature:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

The arguments to the function are as follows:

- `match`
  - : The matched substring. (Corresponds to `$&` above.)
- `p1, p2, …, pN`
  - : The `n`th string found by a capture group (including named capturing groups), provided the first argument to `replace()` is a {{jsxref("RegExp")}} object. (Corresponds to `$1`, `$2`, etc. above.) For example, if the `pattern` is `/(\a+)(\b+)/`, then `p1` is the match for `\a+`, and `p2` is the match for `\b+`. If the group is part of a disjunction (e.g. `"abc".replace(/(a)|(b)/, replacer)`), the unmatched alternative will be `undefined`.
- `offset`
  - : The offset of the matched substring within the whole string being examined. For example, if the whole string was `'abcd'`, and the matched substring was `'bc'`, then this argument will be `1`.
- `string`
  - : The whole string being examined.
- `groups`
  - : An object whose keys are the used group names, and whose values are the matched portions (`undefined` if not matched). Only present if the `pattern` contains at least one named capturing group.

The exact number of arguments depends on whether the first argument is a {{jsxref("RegExp")}} object — and, if so, how many capture groups it has.

The following example will set `newString` to `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
const newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```

The function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

## Examples

### Defining the regular expression in replace()

In the following example, the regular expression is defined in `replace()` and includes the ignore case flag.

```js
const str = 'Twas the night before Xmas...';
const newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```

This logs `'Twas the night before Christmas...'`.

> **Note:** See [the regular expression guide](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) for more explanations about regular expressions.

### Using the global and ignoreCase flags with replace()

Global replace can only be done with a regular expression. In the following example, the regular expression includes the [global and ignore case flags](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) which permits `replace()` to replace each occurrence of `'apples'` in the string with `'oranges'`.

```js
const re = /apples/gi;
const str = 'Apples are round, and apples are juicy.';
const newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

This logs `'oranges are round, and oranges are juicy'`.

### Switching words in a string

The following script switches the words in the string. For the replacement text, the script uses [capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences) and the `$1` and `$2` replacement patterns.

```js
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
const newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
```

This logs `'Smith, John'`.

### Using an inline function that modifies the matched characters

In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Given `styleHyphenFormat('borderTop')`, this returns `'border-top'`.

Because we want to further transform the _result_ of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the [`toLowerCase()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) method. If we had tried to do this using the match without a function, the {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} would have no effect.

```js example-bad
const newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  // won't work
```

This is because `'$&'.toLowerCase()` would first be evaluated as a string literal (resulting in the same `'$&'`) before using the characters as a pattern.

### Replacing a Fahrenheit degree with its Celsius equivalent

The following example replaces a Fahrenheit degree with its equivalent Celsius degree. The Fahrenheit degree should be a number ending with `"F"`. The function returns the Celsius number ending with `"C"`. For example, if the input number is `"212F"`, the function returns `"100C"`. If the number is `"0F"`, the function returns `"-17.77777777777778C"`.

The regular expression `test` checks for any number that ends with `F`. The number of Fahrenheit degrees is accessible to the function through its second parameter, `p1`. The function sets the Celsius number based on the number of Fahrenheit degrees passed in a string to the `f2c()` function. `f2c()` then returns the Celsius number. This function approximates Perl's `s///e` flag.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${(p1 - 32) * 5 / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Making a generic replacer

Suppose we want to create a replacer that appends the offset data to every matched string. Because the replacer function already receives the `offset` parameter, it will be trivial if the regex is statically known.

```js
console.log("abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `)); // "abc (1) d"
```

However, this replacer would be hard to generalize if we want it to work with any regex pattern. The replacer is _variadic_ — the number of arguments it receives depends on the number of capturing groups present. We can use [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), but it would also collect `offset`, `string`, etc. into the array. The fact that `groups` may or may not be passed depending on the identity of the regex would also make it hard to generically know which argument corresponds to the `offset`.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

The `addOffset` example above doesn't work when the regex contains a named group, because in this case `args.at(-2)` would be the `string` instead of the `offset`.

Instead, you need to extract the last few arguments based on type, because `groups` is an object while `string` is a string.

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.replace` in `core-js` with fixes and implementation of modern behavior like `Symbol.replace` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
- [`Symbol.replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[@@replace]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
