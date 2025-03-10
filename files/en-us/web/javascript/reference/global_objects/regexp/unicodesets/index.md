---
title: RegExp.prototype.unicodeSets
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.RegExp.unicodeSets
---

{{JSRef}}

The **`unicodeSets`** accessor property of {{jsxref("RegExp")}} instances returns whether or not the `v` flag is used with this regular expression.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicodeSets")}}

```js interactive-example
const regex1 = new RegExp("[\\p{Lowercase}&&\\p{Script=Greek}]");
const regex2 = new RegExp("[\\p{Lowercase}&&\\p{Script=Greek}]", "v");

console.log(regex1.unicodeSets);
// Expected output: false

console.log(regex2.unicodeSets);
// Expected output: true
```

## Description

`RegExp.prototype.unicodeSets` has the value `true` if the `v` flag was used; otherwise, `false`. The `v` flag is an "upgrade" to the [`u`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) flag that enables more Unicode-related features. ("v" is the next letter after "u" in the alphabet.) Because `u` and `v` interpret the same regex in incompatible ways, using both flags results in a {{jsxref("SyntaxError")}}. With the `v` flag, you get all features mentioned in the `u` flag description, plus:

- The [`\p`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) escape sequence can be additionally used to match properties of strings, instead of just characters.
- The [character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) syntax is upgraded to allow intersection, union, and subtraction syntaxes, as well as matching multiple Unicode characters.
- The character class complement syntax `[^...]` constructs a complement class instead of negating the match result, avoiding some confusing behaviors with case-insensitive matching. For more information, see [Complement classes and case-insensitive matching](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Some valid `u`-mode regexes become invalid in `v`-mode. Specifically, the character class syntax is different and some characters can no longer appear literally. For more information, see [`v`-mode character class](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

> [!NOTE]
> The `v` mode does not interpret grapheme clusters as single characters; they are still multiple code points. For example, `/[🇺🇳]/v` is still able to match `"🇺"`.

The set accessor of `unicodeSets` is `undefined`. You cannot change this property directly.

## Examples

### Using the unicodeSets property

```js
const regex = /[\p{Script_Extensions=Greek}&&\p{Letter}]/v;

console.log(regex.unicodeSets); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
