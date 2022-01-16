---
title: text-decoration
slug: Web/CSS/text-decoration
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.text-decoration
---
{{CSSRef}}

The **`text-decoration`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the appearance of decorative lines on text. It is a shorthand for {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, and {{cssxref("text-decoration-style")}} properties.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

Text decorations are drawn across descendant text elements. This means that if an element specifies a text decoration, then a child element can't remove the decoration. For example, in the markup `<p>This text has <em>some emphasized words</em> in it.</p>`, the style rule `p { text-decoration: underline; }` would cause the entire paragraph to be underlined. The style rule `em { text-decoration: none; }` would not cause any change; the entire paragraph would still be underlined. However, the rule `em { text-decoration: overline; }` would cause a second decoration to appear on "some emphasized words".

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`text-decoration-color`](/en-US/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/en-US/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/en-US/docs/Web/CSS/text-decoration-style)

## Syntax

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Global values */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: unset;
```

The `text-decoration` property is specified as one or more space-separated values representing the various longhand text-decoration properties.

### Values

- {{cssxref("text-decoration-line")}}
  - : Sets the kind of decoration used, such as `underline` or `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Sets the color of the decoration.
- {{cssxref("text-decoration-style")}}
  - : Sets the style of the line used for the decoration, such as `solid`, `wavy`, or `dashed`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

> **Note:** {{cssxref("text-decoration-thickness")}} was implemented as part of the shorthand `text-decoration` property in some browsers, but not all. Including it will cause the entire declaration to fail in non-supporting browsers.

## Examples

### Demonstration of text-decoration values

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}
```

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>This <a class="plain" href="#">link will not be underlined</a>,
    as links generally are by default. Be careful when removing
    the text decoration on anchors since users often depend on
    the underline to denote hyperlinks.</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The individual text-decoration properties are {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, and {{cssxref("text-decoration-style")}}
- The {{cssxref("text-decoration-thickness")}}, {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, and {{cssxref("text-underline-position")}} properties also affect text-decoration, but are not included in the shorthand.
- The {{cssxref("list-style")}} attribute controls the appearance of items in HTML {{HTMLElement("ol")}} and {{HTMLElement("ul")}} lists.
