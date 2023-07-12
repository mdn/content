---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.ignoreCase
---

{{JSRef}}

The **`ignoreCase`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `i` flag is used with this regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## Description

`RegExp.prototype.ignoreCase` has the value `true` if the `i` flag was used; otherwise, `false`. The `i` flag indicates that case should be ignored while attempting a match in a string. Case-insensitive matching is done by mapping both the expected character set and the matched string to the same casing.

If the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), the case mapping happens through _simple case folding_ specified in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt). The mapping always maps to a single code point, so it does not map, for example, `ß` (U+00DF LATIN SMALL LETTER SHARP S) to `ss` (which is _full case folding_, not _simple case folding_). It may however map code points outside the Basic Latin block to code points within it — for example, `ſ` (U+017F LATIN SMALL LETTER LONG S) case-folds to `s` (U+0073 LATIN SMALL LETTER S) and `K` (U+212A KELVIN SIGN) case-folds to `k` (U+006B LATIN SMALL LETTER K). Therefore, `ſ` and `K` can be matched by `/[a-z]/ui`.

If the regex is Unicode-unaware, case mapping uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — the same algorithm used in {{jsxref("String.prototype.toUpperCase()")}}. For example, `Ω` (U+2126 OHM SIGN) and `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) are both mapped by Default Case Conversion to themselves but by simple case folding to `ω` (U+03C9 GREEK SMALL LETTER OMEGA), so `"ω"` is matched by `/[\u2126]/ui` and `/[\u03a9]/ui` but not by `/[\u2126]/i` or `/[\u03a9]/i`. This algorithm prevents code points outside the Basic Latin block to be mapped to code points within it, so `ſ` and `K` mentioned previously are not matched by `/[a-z]/i`.

The set accessor of `ignoreCase` is `undefined`. You cannot change this property directly.

## Examples

### Using ignoreCase

```js
const regex = /foo/i;

console.log(regex.ignoreCase); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
