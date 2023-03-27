---
title: text-transform
slug: Web/CSS/text-transform
page-type: css-property
browser-compat: css.properties.text-transform
---

{{CSSRef}}

The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

The `text-transform` property takes into account language-specific case mapping rules such as the following:

- In Turkic languages, like Turkish (`tr`), Azerbaijani (`az`), Crimean Tatar (`crh`), Volga Tatar (`tt`), and Bashkir (`ba`), there are two kinds of `i`, with and without the dot, and two case pairings: `i`/`İ` and `ı`/`I`.
- In German (`de`), the `ß` becomes `SS` in uppercase.
- In Dutch (`nl`), the `ij` digraph becomes `IJ`, even with `text-transform: capitalize`, which only puts the first letter of a word in uppercase.
- In Greek (`el`), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diaeresis on the second vowel (`άι`/`ΑΪ`).
- In Greek (`el`), the lowercase sigma character has two forms: `σ` and `ς`. `ς` is used only when sigma terminates a word. When applying `text-transform: lowercase` to an uppercase sigma (`Σ`), the browser needs to choose the right lowercase form based on context.
- in Irish (`ga`), certain prefixed letters remain in lowercase when the base initial is capitalized, so for example `text-transform: uppercase` will change `ar aon tslí` to `AR AON tSLÍ` and not, as one might expect, `AR AON TSLÍ` (Firefox only). In some cases, a hyphen is also removed upon uppercasing: `an t-uisce` transforms to `AN tUISCE` (and the hyphen is correctly reinserted by `text-transform: lowercase`).

The language is defined by the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) HTML attribute or the [`xml:lang`](/en-US/docs/Web/SVG/Attribute/xml:lang) XML attribute.

> **Note:** Support for language-specific cases varies between browsers, so check the [browser compatibility table](#browser_compatibility).

## Syntax

```css
/* Keyword values */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`

  - : Is a keyword that converts the first _letter_ of each word to uppercase. Other characters remain unchanged (they retain their original case as written in the element's text). A letter is defined as a character that is part of Unicode's Letter or Number general categories {{experimental_inline}}; thus, any punctuation marks or symbols at the beginning of a word are ignored.

    > **Note:** Authors should not expect `capitalize` to follow language-specific title casing conventions (such as skipping articles in English).

    > **Note:** The `capitalize` keyword was under-specified in CSS 1 and CSS 2.1. This resulted in differences between browsers in the way the first letter was calculated (Firefox considered `-` and `_` as letters, but other browsers did not. Both Webkit and Gecko incorrectly considered letter-based symbols like `ⓐ` to be real letters.) By precisely defining the correct behavior, CSS Text Level 3 cleans this mess up. The `capitalize` line in the browser compatibility table contains the version the different engines started to support this now precisely-defined behavior.

- `uppercase`
  - : Is a keyword that converts all characters to uppercase.
- `lowercase`
  - : Is a keyword that converts all characters to lowercase.
- `none`
  - : Is a keyword that prevents the case of all characters from being changed.
- `full-width`
  - : Is a keyword that forces the writing of a character — mainly ideograms and Latin scripts — inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese).
- `full-size-kana`
  - : Generally used for {{htmlelement("ruby")}} annotation text, the keyword converts all small Kana characters to the equivalent full-size Kana, to compensate for legibility issues at the small font sizes typically used in ruby.

## Accessibility concerns

Large sections of text set with a `text-transform` value of `uppercase` may be difficult for people with cognitive concerns such as Dyslexia to read.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Example using "none"

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

This demonstrates no text transformation.

{{ EmbedLiveSample('Example using "none"', '100%', '100px') }}

### Example using "capitalize" (general)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates text capitalization.

{{ EmbedLiveSample('Example using "capitalize" (general)', '100%', '100px') }}

### Example using "capitalize" (punctuation)

```html
<p>
  Initial String
  <strong
    >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates how initial punctuations of a word are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('Example using "capitalize" (punctuation)', '100%', '100px') }}

### Example using "capitalize" (Symbols)

```html
<p>
  Initial String
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates how initial symbols are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('Example using "capitalize" (symbols)', '100%', '100px') }}

### Example using "capitalize" (Dutch ij digraph)

```html
<p>
  Initial String
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

This demonstrates how the Dutch _ij_ digraph must be handled like one single letter.

{{ EmbedLiveSample('Example using "capitalize" (Dutch ij digraph)', '100%', '100px') }}

### Example using "uppercase" (general)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

This demonstrates transforming the text to uppercase.

{{ EmbedLiveSample('Example using "uppercase" (general)', '100%', '100px') }}

### Example using "uppercase" (Greek vowels)

```html
<p>
  Initial String
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

This demonstrates how Greek vowels except disjunctive _eta_ should have no accent, and the accent on the first vowel of a vowel pair becomes a diaeresis on the second vowel.

{{ EmbedLiveSample('Example using "uppercase" (Greek vowels)', '100%', '100px') }}

### Example using "lowercase" (general)

```html
<p>
  Initial String
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

This demonstrates transforming the text to lowercase.

{{ EmbedLiveSample('Example using "lowercase" (general)', '100%', '100px') }}

### Example using "lowercase" (Greek Σ)

```html
<p>
  Initial String
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

This demonstrates how the Greek character sigma (`Σ`) is transformed into the regular lowercase sigma (`σ`) or the word-final variant (`ς`), according the context.

{{ EmbedLiveSample('Example using "lowercase" (Greek Σ)', '100%', '100px') }}

### Example using "lowercase" (Lithuanian)

```html
<p>
  Initial String
  <strong>Ĩ is a Lithuanian LETTER as is J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span lang="lt">Ĩ is a Lithuanian LETTER as is J́</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

This demonstrates how the Lithuanian letters `Ĩ` and `J́` retain their dot when transformed to lowercase.

{{ EmbedLiveSample('Example using "lowercase" (Lithuanian)', '100%', '100px') }}

### Example using "full-width" (general)

```html
<p>
  Initial String
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Some characters exist in two formats: normal width and a full-width, with different Unicode code points. The full-width version is used to mix them smoothly with Asian ideographic characters.

{{ EmbedLiveSample('Example using "full-width" (general)', '100%', '175px') }}

### Example using "full-width" (Japanese half-width katakana)

```html
<p>
  Initial String
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

The Japanese half-width katakana was used to represent katakana in 8-bit character codes. Unlike regular (full-width) katakana characters, a letter with dakuten (voiced sound mark) is represented as two code points, the body of letter and dakuten. The `full-width` combines these into a single code point when converting these characters into full-width.

{{ EmbedLiveSample('Example using "full-width" (Japanese half-width katakana)', '100%', '175px') }}

### Example using "full-size-kana"

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{ EmbedLiveSample('Example using "full-size-kana"', '100%', '175px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-variant")}}
