---
title: "Unicode character class escape: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.unicode_character_class_escape
---

{{JsSidebar}}

A **unicode character class escape** is a kind of [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) that matches a set of characters specified by a Unicode property. It's only supported in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). When the [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) flag is enabled, it can also be used to match finite-length strings.

{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}

## Syntax

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### Parameters

- `loneProperty`

  - : A lone Unicode property name or value, following the same syntax as `value`. It specifies the value for the `General_Category` property, or a [binary property name](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). In [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) mode, it can also be a [binary Unicode property of strings](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings).

    > **Note:** [ICU](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) syntax allows omitting the `Script` property name as well, but JavaScript does not support this, because most of the time `Script_Extensions` is more useful than `Script`.

- `property`
  - : A Unicode property name. Must be made of ASCII letters (`A–Z`, `a–z`) and underscores (`_`), and must be one of the [non-binary property names](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties).
- `value`
  - : A Unicode property value. Must be made of ASCII letters (`A–Z`, `a–z`), underscores (`_`), and digits (`0–9`), and must be one of the supported values listed in [`PropertyValueAliases.txt`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt).

## Description

`\p` and `\P` are only supported in [Unicode-aware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). In Unicode-unaware mode, they are [identity escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) for the `p` or `P` character.

Every Unicode character has a set of properties that describe it. For example, the character [`a`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) has the `General_Category` property with value `Lowercase_Letter`, and the `Script` property with value `Latn`. The `\p` and `\P` escape sequences allow you to match a character based on its properties. For example, `a` can be matched by `\p{Lowercase_Letter}` (the `General_Category` property name is optional) as well as `\p{Script=Latn}`. `\P` creates a _complement class_ that consists of code points without the specified property.

To compose multiple properties, use the [character set intersection](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) syntax enabled with the `v` flag, or see [pattern subtraction and intersection](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

In `v` mode, `\p` may match a sequence of code points, defined in Unicode as "properties of strings". This is most useful for emojis, which are often composed of multiple code points. However, `\P` can only complement character properties.

> **Note:** There are plans to port the properties of strings feature to `u` mode as well.

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

// Using a short alias (ISO 15924 code) for the script
mixedCharacters.match(/\p{Script=Grek}/u); // ε

// Using the short name sc for the Script property
mixedCharacters.match(/\p{sc=Cyrillic}/u); // Л
```

For more details, refer to [the Unicode specification](https://unicode.org/reports/tr24/#Script), the [Scripts table in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values), and the [ISO 15924 list of script codes](https://unicode.org/iso15924/iso15924-codes.html).

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

With JavaScript regular expressions, it is also possible to use [character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) and especially `\w` or `\d` to match letters or digits. However, such forms only match characters from the _Latin_ script (in other words, `a` to `z` and `A` to `Z` for `\w` and `0` to `9` for `\d`). As shown in [this example](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters), it might be a bit clumsy to work with non Latin texts.

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

### Matching prices

The following example matches prices in a string:

```js
function getPrices(str) {
  // Sc stands for "currency symbol"
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `California rolls $6.99
Crunchy rolls $8.49
Shrimp tempura $10.99`;
console.log(getPrices(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `US store $19.99
Europe store €18.99
Japan store ¥2000`;
console.log(getPrices(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### Matching strings

With the `v` flag, `\p{…}` can match strings that are potentially longer than one character by using a property of strings:

```js
const flag = "🇺🇳";
console.log(flag.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(flag)); // [ '🇺🇳' ]
```

However, you can't use `\P` to match "a string that does not have a property", because it's unclear how many characters should be consumed.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode character property](https://en.wikipedia.org/wiki/Unicode_character_property) on Wikipedia
- [ES2018: RegExp Unicode property escapes](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) by Dr. Axel Rauschmayer (2017)
- [Unicode regular expressions § Properties](https://unicode.org/reports/tr18/#Categories) on unicode.org
- [Unicode Utilities: UnicodeSet](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp v flag with set notation and properties of strings](https://v8.dev/features/regexp-v-flag) on v8.dev (2022)
