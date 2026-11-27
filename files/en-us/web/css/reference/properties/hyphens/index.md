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
  width: 5rem;
}
```

The example text "An extraordinarily long English word!" contains a single hidden `&shy;` (soft hyphen) character separaing "extra" and "ordinarily": `An extra&shy;ordinarily long English word!`. This character is used to indicate a potential place to insert a hyphen when `hyphens: manual;` or `hyphens: auto;` is specified. With `hyphens:auto;`, the browser is permitted to insert additional hyphens where needed, in order to fit the wrapped word within the enclosing paragraph tag (denoted by the dashed outline).

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

### Values

This property is specified as one of the following keyword values:

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

The {{cssxref("hyphenate-character")}} property can be used to specify an alternative hyphenation character to use at the end of the line, instead of the default language-specific hyphenation character.

If you apply [`word-break: break-all`](/en-US/docs/Web/CSS/Reference/Properties/word-break#break-all) then no hyphens are shown, even if the word breaks at a hyphenation point. If you apply {{cssxref("text-wrap-mode","text-wrap-mode: nowrap")}}, no wrapping occurs, so no hyphens will appear.

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
