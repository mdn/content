---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - experimental
  - contain-intrinsic-block-size
page-type: css-property
browser-compat: css.properties.contain-intrinsic-block-size
---

{{CSSRef}} {{SeeCompatTable}}

The **`contain-intrinsic-block-size`** [CSS](/en-US/docs/Web/CSS) [logical property](/en-US/docs/Web/CSS/CSS_Logical_Properties) defines the block-size of an element that will be used for layout when it is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

The block-size is the size of the element in the dimension perpendicular to the flow of text within a line.
In a horizontal [writing mode](/en-US/docs/Web/CSS/writing-mode) like standard English this is the vertical dimension (height); for a vertical writing mode it is the horizontal dimension.

## Syntax

```css
/* Keyword values */
contain-intrinsic-block-size: none;

/* <length> values */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
contain-intrinsic-block-size: auto 300px;

/* Global values */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: unset;
```

### Values

The following values may be specified for an element.

- `none`
  - : The element has no intrinsic block-size.
- `<length>`
  - : The element has the specified block-size ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : A remembered value of the "normally rendered" element block-size if one exists and the element is skipping its contents (for example, when it is offscreen); otherwise the specified `<length>`.

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

Size containment allows a user agent to layout an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-block-size` property allows authors to specify an appropriate value to be used as the block-size for layout.

The `auto <length>` value allows the block-size of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified value when the element is skipping its contents.
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
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
