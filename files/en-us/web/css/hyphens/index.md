---
title: hyphens
slug: Web/CSS/hyphens
page-type: css-property
browser-compat: css.properties.hyphens
---

{{CSSRef}}

The **`hyphens`** [CSS](/en-US/docs/Web/CSS) property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

> **Note:** In the above demo, the string "An extraordinarily long English word!" contains the hidden `&shy;` (soft hyphen) character: `An extra&shy;ordinarily long English word!`. This character is used to indicate a potential place to insert a hyphen when `hyphens: manual;` is specified.

Hyphenation rules are language-specific. In HTML, the language is determined by the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute, and browsers will hyphenate only if this attribute is present and the appropriate hyphenation dictionary is available. In XML, the [`xml:lang`](/en-US/docs/Web/SVG/Attribute/xml:lang) attribute must be used.

> **Note:** The rules defining how hyphenation is performed are not explicitly defined by the specification, so the exact hyphenation may vary from browser to browser.

If supported, {{cssxref("hyphenate-character")}} may be used to specify an alternative hyphenation character to use at the end of the line being broken.

## Syntax

```css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: revert;
hyphens: revert-layer;
hyphens: unset;
```

The `hyphens` property is specified as a single keyword value chosen from the list below.

### Values

- `none`
  - : Words are not broken at line breaks, even if characters inside the words suggest line break points. Lines will only wrap at whitespace.
- `manual`
  - : Default value. Words are broken for line-wrapping only where characters inside the word suggest line break opportunities. See [Suggesting line break opportunities](#suggesting_line_break_opportunities) below for details.
- `auto`
  - : The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses. However, suggested line break opportunities (see [Suggesting line break opportunities](#suggesting_line_break_opportunities) below) will override automatic break point selection when present.

> **Note:** The `auto` setting's behavior depends on the language being properly tagged to select the appropriate hyphenation rules. You must specify a language using the `lang` HTML attribute to guarantee that automatic hyphenation is applied in that language.

> **Note:** If you apply [`word-break: break-all`](/en-US/docs/Web/CSS/word-break#break-all) then no hyphens are shown, even if the word breaks at a hyphenation point.

## Suggesting line break opportunities

There are two Unicode characters used to manually specify potential line break points within text:

- U+2010 (HYPHEN)
  - : The "hard" hyphen character indicates a visible line break opportunity. Even if the line is not actually broken at that point, the hyphen is still rendered.
- U+00AD (SHY)
  - : An invisible, "**s**oft" **hy**phen. This character is not rendered visibly; instead, it marks a place where the browser should break the word if hyphenation is necessary. In HTML, use `&shy;` to insert a soft hyphen.

> **Note:** When the HTML [`<wbr>`](/en-US/docs/Web/HTML/Element/wbr) element leads to a line break, no hyphen is added.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying text hyphenation

This example uses three classes, one for each possible configuration of the `hyphens` property.

#### HTML

```html
<dl>
  <dt><code>none</code>: no hyphen; overflow if needed</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt><code>auto</code>: hyphens where the algorithm decides (if needed)</dt>
  <dd lang="en" class="auto">An extreme&shy;ly long English word</dd>
</dl>
```

#### CSS

```css
dd {
  width: 55px;
  border: 1px solid black;
}
dd.none {
  hyphens: none;
}
dd.manual {
  hyphens: manual;
}
dd.auto {
  hyphens: auto;
}
```

#### Result

{{EmbedLiveSample("Specifying_text_hyphenation", "100%", 490)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("content")}}
- {{cssxref("overflow-wrap")}} (formerly `word-wrap`)
- {{cssxref("word-break")}}
- [Guide to wrapping and breaking text](/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
