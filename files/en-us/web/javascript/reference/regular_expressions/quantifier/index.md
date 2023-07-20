---
title: "Quantifier: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.quantifier
---

{{JsSidebar}}

A **quantifier** repeats an [atom](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#atoms) a certain number of times. The quantifier is placed after the atom it applies to.

## Syntax

```regex
// Greedy
atom?
atom*
atom+
atom{count}
atom{min,}
atom{min,max}

// Non-greedy
atom??
atom*?
atom+?
atom{count}?
atom{min,}?
atom{min,max}?
```

### Parameters

- `atom`
  - : A single [atom](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#atoms).
- `count`
  - : A non-negative integer. The number of times the atom should be repeated.
- `min`
  - : A non-negative integer. The minimum number of times the atom can be repeated.
- `max` {{optional_inline}}
  - : A non-negative integer. The maximum number of times the atom can be repeated. If omitted, the atom can be repeated as many times as needed.

## Description

A quantifier is placed after an [atom](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#atoms) to repeat it a certain number of times. It cannot appear on its own. Each quantifier is able to specify a minimum and maximum number that a pattern must be repeated for.

| Quantifier  | Minimum | Maximum  |
| ----------- | ------- | -------- |
| `?`         | 0       | 1        |
| `*`         | 0       | Infinity |
| `+`         | 1       | Infinity |
| `{count}`   | `count` | `count`  |
| `{min,}`    | `min`   | Infinity |
| `{min,max}` | `min`   | `max`    |

For the `{count}`, `{min,}`, and `{min,max}` syntaxes, there cannot be white spaces around the numbers — otherwise, it becomes a [literal](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pattern.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

This behavior is fixed in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), where braces cannot appear literally without [escaping](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). The ability to use `{` and `}` literally without escaping is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

It is a syntax error if the minimum is greater than the maximum.

```js
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantifiers can cause [capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) to match multiple times. See the capturing groups page for more information on the behavior in this case.

Each repeated match doesn't have to be the same string.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantifiers are _greedy_ by default, which means they try to match as many times as possible until the maximum is reached, or until it's not possible to match further. You can make a quantifier _non-greedy_ by adding a `?` after it. In this case, the quantifier will try to match as few times as possible, only matching more times if it's impossible to match the rest of the pattern with this many repetitions.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

However, as soon as the regex successfully matches the string at some index, it will not try subsequent indices, although that may result in fewer characters being consumed.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Greedy quantifiers may try fewer repetitions if it's otherwise impossible to match the rest of the pattern.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In this example, `[ab]+` first greedily matches `"abb"`, but `[abc]c` is not able to match the rest of the pattern (`"c"`), so the quantifier is reduced to match only `"ab"`.

Greedy quantifiers avoid matching infinitely many empty strings. If the minimum number of matches is reached and no more characters are being consumed by the atom at this position, the quantifier stops matching. This is why `/(a*)*/.exec("b")` does not result in an infinite loop.

Greedy quantifiers try to match as many _times_ as possible; it does not maximize the _length_ of the match. For example, `/(aa|aabaac|ba)*/.exec("aabaac")` matches `"aa"` and then `"ba"` instead of `"aabaac"`.

Quantifiers apply to a single atom. If you want to quantify a longer pattern or a disjunction, you must [group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group) it. Quantifiers cannot be applied to [assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#assertions).

```js
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

In [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), [lookahead assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) can be quantified. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Examples

### Removing HTML tags

The following example removes HTML tags enclosed in angle brackets. Note the use of `?` to avoid consuming too many characters at once.

```js
function stripTags(str) {
  return str.replace(/<.+?>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

The same effect can be achieved with a greedy match, but not allowing the repeated pattern to match `>`.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> **Warning:** This is for demonstration only — it doesn't handle `>` in attribute values. Use a proper HTML sanitizer like the [HTML sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) instead.

### Locating Markdown paragraphs

In Markdown, paragraphs are separated by one or more blank lines. The following example counts all paragraphs in a string by matching two or more line breaks.

```js
function countParagraphs(str) {
  return str.match(/(?:\r?\n){2,}/g).length + 1;
}

countParagraphs(`
Paragraph 1

Paragraph 2
Containing some line breaks, but still the same paragraph

Another paragraph
`); // 3
```

> **Warning:** This is for demonstration only — it doesn't handle line breaks in code blocks or other Markdown block elements like headings. Use a proper Markdown parser instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
