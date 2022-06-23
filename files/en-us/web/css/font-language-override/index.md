---
title: font-language-override
slug: Web/CSS/font-language-override
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - font-language-override
  - l10n
  - recipe:css-property
browser-compat: css.properties.font-language-override
---
{{CSSRef}}

The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.

```css
/* Keyword value */
font-language-override: normal;

/* <string> values */
font-language-override: "ENG";  /* Use English glyphs */
font-language-override: "TRK";  /* Use Turkish glyphs */

/* Global values */
font-language-override: inherit;
font-language-override: initial;
font-language-override: revert;
font-language-override: revert-layer;
font-language-override: unset;
```

By default, HTML's `lang` attribute tells browsers to display glyphs designed specifically for that language. For example, a lot of fonts have a special character for the digraph `fi` that merge the dot on the "i" with the "f." However, if the language is set to Turkish the typeface will likely know not to use the merged glyph; Turkish has two versions of the "i," one with a dot (`i`) and one without (`ı`), and using the ligature would incorrectly transform a dotted "i" into a dotless "i."

The `font-language-override` property lets you override the typeface behavior for a specific language. This is useful, for example, when the typeface you're using lacks proper support for the language. For instance, if a typeface doesn't have proper rules for the Azeri language, you can force the font to use Turkish glyphs, which follow similar rules.

## Syntax

The `font-language-override` property is specified as the keyword `normal` or a `<string>`.

### Values

- `normal`
  - : Tells the browser to use font glyphs that are appropriate for the language specified by the `lang` attribute. This is the default value.
- {{cssxref("string")}}
  - : Tells the browser to use font glyphs that are appropriate for the language specified by the string. The string must match a language tag found in the [OpenType language system](https://docs.microsoft.com/en-us/typography/opentype/spec/languagetags). For example, "ENG" is English, and "KOR" is Korean.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using Danish glyphs

#### HTML

```html
<p class="para1">Default language setting.</p>
<p class="para2">This is a string with the <code>font-language-override</code> set to Danish.</p>
```

#### CSS

```css
p.para1 {
  font-language-override: normal;
}

p.para2 {
  font-language-override: "DAN";
}
```

#### Result

{{ EmbedLiveSample('Using Danish glyphs') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-kerning")}}.
