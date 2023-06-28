---
title: "Word boundary assertion: \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.word_boundary_assertion
---

{{JsSidebar}}

A **word boundary assertion** checks if the current position in the string is a word boundary. A word boundary is where the next character is a word character and the previous character is not a word character, or vice versa.

## Syntax

```regex
\b
\B
```

## Description

`\b` asserts that the current position in the string is a word boundary. `\B` negates the assertion: it asserts that the current position is not a word boundary. Both are _assertions_, so unlike other [character escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) or [character class escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape), `\b` and `\B` don't consume any characters.

A word character includes the following:

- Letters (A–Z, a–z), numbers (0–9), and underscore (\_).
- If the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) and the [`i`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) flag is set, other Unicode characters that get canonicalized to one of the characters above through [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).

Word characters are also matched by the `\w` [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape).

Out-of-bounds input positions are considered non-word characters. For example, the following are successful matches:

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## Examples

### Detecting words

The following example detects if a string contains the word "thanks" or "thank you":

```js
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

> **Warning:** Not all languages have clearly defined word boundaries. If you are working with languages like Chinese or Thai, where there are no whitespace separators, use a more advanced library like {{jsxref("Intl.Segmenter")}} to search for words instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
