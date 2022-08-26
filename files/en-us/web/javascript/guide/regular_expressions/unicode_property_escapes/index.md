---
title: Unicode property escapes
slug: Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
tags:
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - regex
  - unicode property escapes
---
{{jsSidebar("JavaScript Guide")}}

**Unicode property escapes** [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) allows for matching characters based on their Unicode properties. A character is described by several properties which are either binary ("boolean-like") or non-binary. For instance, unicode property escapes can be used to match emojis, punctuations, letters (even letters from specific languages or scripts), etc.

{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}

> **Note:** For Unicode property escapes to work, a regular expression must use [the `u` flag](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) which indicates a string must be considered as a series of Unicode code points. See also [`RegExp.prototype.unicode`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode).

> **Note:** Some Unicode properties encompasses many more characters than some [character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) (such as `\w` which matches only latin letters, `a` to `z`) but the latter is better supported among browsers (as of January 2020).

## Syntax

```js
// Non-binary values
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Binary and non-binary values
\p{UnicodeBinaryPropertyName}

// Negation: \P is negated \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

- [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) (`gc`)
- [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
- [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

See also [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- `UnicodeBinaryPropertyName`
  - : The name of a [binary property](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). E.g.: [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacritic`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`White_space`](https://unicode.org/reports/tr44/#White_Space), etc. See [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) for more info.
- `UnicodePropertyName`
  - : The name of a [non-binary](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties) property:
- `UnicodePropertyValue`
  - : One of the tokens listed in the Values section, below. Many values have aliases or shorthand (e.g. the value `Decimal_Number` for the `General_Category` property may be written `Nd`, `digit`, or `Decimal_Number`). For most values, the `UnicodePropertyName` part and equals sign may be omitted. If a `UnicodePropertyName` is specified, the value must correspond to the property type given.

> **Note:** As there are many properties and values available, we will not describe them exhaustively here but rather provide various examples.

## Examples

### General categories

General categories are used to classify Unicode characters and subcategories are available to define a more precise categorization. It is possible to use both short or long forms in Unicode property escapes.

They can be used to match letters, numbers, symbols, punctuations, spaces, etc. For a more exhaustive list of general categories, please refer to [the Unicode specification](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// finding all the letters of a text
const story = "It's the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
story.match(/\p{General_Category=Letter}/gu);

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Scripts and script extensions

Some languages use different scripts for their writing system. For instance, English and Spanish are written using the Latin script while Arabic and Russian are written with other scripts (respectively Arabic and Cyrillic). The `Script` and `Script_Extensions` Unicode properties allow regular expression to match characters according to the script they are mainly used with (`Script`) or according to the set of scripts they belong to (`Script_Extensions`).

For example, `A` belongs to the `Latin` script and `ε` to the `Greek` script.

```js
const mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u); // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Sc=Cyrillic}/u); // Л
```

For more details, please refer to [the Unicode specification](https://unicode.org/reports/tr24/#Script) and the [Scripts table in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values).

If a character is used in a limited set of scripts, the `Script` property will only match for the "predominant" used script. If we want to match characters based on a "non-predominant" script, we could use the `Script_Extensions` property (`Scx` for short).

```js
// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Unicode property escapes vs. character classes

With JavaScript regular expressions, it is also possible to use [character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) and especially `\w` or `\d` to match letters or digits. However, such forms only match characters from the _Latin_ script (in other words, `a` to `z` and `A` to `Z` for `\w` and `0` to `9` for `\d`). As shown in [this example](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#looking_for_a_word_from_unicode_characters), it might be a bit clumsy to work with non Latin texts.

Unicode property escapes categories encompass much more characters and `\p{Letter}` or `\p{Number}` will work for any script.

```js
// Trying to use ranges to avoid \w limitations:

const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText.match(regexpUPE));
```

## See also

- [Regular expressions guide](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)

- [The `RegExp()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [`RegExp.prototype.unicode`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
- [Unicode character property — Wikipedia](https://en.wikipedia.org/wiki/Unicode_character_property)
- [A blog post from Axel Rauschmayer about Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)
- [The Unicode document for Unicode properties](https://unicode.org/reports/tr18/#Categories)
- [tc39 Proposal on Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
- [UnicodeMatchProperty in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-runtime-semantics-unicodematchproperty-p)
