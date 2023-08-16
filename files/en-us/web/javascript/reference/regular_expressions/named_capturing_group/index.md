---
title: "Named capturing group: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.named_capturing_group
---

{{JsSidebar}}

A **named capturing group** is a particular kind of [capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) that allows to give a name to the group. The group's matching result can later be identified by this name instead of by its index in the pattern.

## Syntax

```regex
(?<name>pattern)
```

### Parameters

- `pattern`
  - : A pattern consisting of anything you may use in a regex literal, including a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : The name of the group. Must be a valid [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).

## Description

Named capturing groups can be used just like capturing groups — they also have their match index in the result array, and they can be referenced through `\1`, `\2`, etc. The only difference is that they can be _additionally_ referenced by their name. The information of the capturing group's match can be accessed through:

- The `groups` property of the return value of {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}}, and {{jsxref("String.prototype.matchAll()")}}
- The `groups` parameter of the {{jsxref("String.prototype.replace()")}} and {{jsxref("String.prototype.replaceAll()")}} methods' `replacement` callback function
- [Named backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) within the same pattern

All names must be unique within the same pattern. Multiple named capturing groups with the same name result in a syntax error.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

This restriction is relaxed if the duplicate named capturing groups are not in the same [disjunction alternative](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), so for any string input, only one named capturing group can actually be matched. This is a much newer feature, so check [browser compatibility](#browser_compatibility) before using it.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Named capturing groups will all be present in the result. If a named capturing group is not matched (for example, it belongs to an unmatched alternative in a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), the corresponding property on the `groups` object has value `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

You can get the start and end indices of each named capturing group in the input string by using the [`d`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) flag. In addition to accessing them on the `indices` property on the array returned by `exec()`, you can also access them by their names on `indices.groups`.

Compared to unnamed capturing groups, named capturing groups have the following advantages:

- They allow you to provide a descriptive name for each submatch result.
- They allow you to access submatch results without having to remember the order in which they appear in the pattern.
- When refactoring code, you can change the order of capturing groups without worrying about breaking other references.

## Examples

### Using named capturing groups

The following example parses a timestamp and an author name from a Git log entry (output with `git log --format=%ct,%an -- filename`):

```js
function parseLog(entry) {
  const { author, timestamp } = /^(?<timestamp>\d+),(?<author>.+)$/.exec(
    entry,
  ).groups;
  return `${author} committed on ${new Date(
    parseInt(timestamp) * 1000,
  ).toLocaleString()}`;
}

parseLog("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint rule: `prefer-named-capture-group`](https://eslint.org/docs/rules/prefer-named-capture-group)
