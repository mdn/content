---
title: contain-intrinsic-width
slug: Web/CSS/contain-intrinsic-width
page-type: css-property
tags:
  - CSS
  - CSS Property
  - Reference
  - experimental
  - contain-intrinsic-width
  - Experimental
browser-compat: css.properties.contain-intrinsic-width
---

{{CSSRef}}{{SeeCompatTable}}

The **`contain-intrinsic-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of an element that a browser will use for layout when the element is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

## Syntax

```css
/* Keyword values */
contain-intrinsic-width: none;

/* <length> values */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* Global values */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### Values

The following values may be specified for an element.

- `none`
  - : The element has no intrinsic width.
- `<length>`
  - : The element has the specified width ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : A remembered value of the "normally rendered" element width if one exists and the element is skipping its contents (for example, when it is offscreen); otherwise the specified `<length>`.

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility), and may also be set using the [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties).

Size containment allows a user agent to layout an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-width` property allows authors to specify an appropriate value to be used as the width for layout.

The `auto <length>` value allows the width of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified width when the element is skipping its contents.
This allows offscreen elements with [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility) to benefit from size containment without developers having to be as precise in their estimates of element size.
The remembered value is not used if the child elements are being rendered (if size containment is enabled, the `<length>` will be used).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
