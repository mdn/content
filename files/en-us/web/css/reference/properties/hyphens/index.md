---
title: "`hyphens` CSS property"
short-title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
page-type: css-property
browser-compat: css.properties.hyphens
sidebar: cssref
---

The **`hyphens`** [CSS](/en-US/docs/Web/CSS) property specifies how words should be hyphenated when text wraps across multiple lines.

{{InteractiveExample("CSS Demo: hyphens")}}

```css interactive-example-choice
hyphens: none;
```

```css interactive-example-choice
hyphens: manual;
```

```css interactive-example-choice
hyphens: auto;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">An extra­ordinarily long English word!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
}
```

The example text "An extraordinarily long English word!" contains the hidden `&shy;` (soft hyphen) character: `An extra&shy;ordinarily long English word!`. This character is used to indicate a potential place to insert a hyphen when `hyphens: manual;` is specified.

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

## Description

The `hyphens` property can be used to define how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

Hyphenation rules are language-specific. In HTML, the language is determined by the [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute. Browsers will only hyphenate if this attribute is present and the appropriate hyphenation dictionary is available. The `auto` setting's behavior depends on the language being properly tagged to select the appropriate hyphenation rules.

In XML, the [`xml:lang`](/en-US/docs/Web/SVG/Reference/Attribute/xml:lang) attribute must be used. The specification does not define rules for hyphenation in XML content, so the exact hyphenation may vary from browser to browser.

The {{cssxref("hyphenate-character")}} property can be used to specify an alternative hyphenation character to use at the end of the line being broken. If you apply [`word-break: break-all`](/en-US/docs/Web/CSS/Reference/Properties/word-break#break-all) then no hyphens are shown, even if the word breaks at a hyphenation point. If you apply {{cssxref("text-wrap-mode","text-wrap-mode: nowrap")}}, no wrapping occurs so no hyphens will appear.

### Suggesting line break opportunities

There are two Unicode characters used to manually specify potential line break points within text:

- U+2010 (HYPHEN)
  - : The "hard" hyphen character indicates a visible line break opportunity. Even if the line is not actually broken at that point, the hyphen is still rendered.
- U+00AD (SHY)
  - : An invisible, "**s**oft" **hy**phen. This character is not rendered visibly; instead, it marks a place where the browser should break the word if hyphenation is necessary. In HTML, use `&shy;` to insert a soft hyphen.

> [!NOTE]
> When the HTML [`<wbr>`](/en-US/docs/Web/HTML/Reference/Elements/wbr) element leads to a line break, no hyphen is added.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

This example demonstrates the three values of the `hyphens` property.

#### HTML

We include three {{htmlelement("dd")}} elements containing the same text but with three different classes.

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

Each of the three classes is set to a different `hyphens` value.

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

{{EmbedLiveSample("Basic example", "100%", 490)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("content")}}
- {{cssxref("overflow-wrap")}} (formerly `word-wrap`)
- {{cssxref("word-break")}}
- [Guide to wrapping and breaking text](/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS text](/en-US/docs/Web/CSS/Guides/Text) module
