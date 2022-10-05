---
title: contain-intrinsic-inline-size
slug: Web/CSS/contain-intrinsic-inline-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - experimental
  - contain-intrinsic-inline-size
  - Experimental
page-type: css-property
browser-compat: css.properties.contain-intrinsic-inline-size
---

{{CSSRef}}{{SeeCompatTable}}

The **`contain-intrinsic-inline-size`** [CSS](/en-US/docs/Web/CSS) [logical property](/en-US/docs/Web/CSS/CSS_Logical_Properties) defines the inline-size of an element that a browser can use for layout when the element is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

Inline-size is the size of the element in the dimension parallel to the flow of text within a line.
In a horizontal [writing mode](/en-US/docs/Web/CSS/writing-mode) like standard English, inline size is the horizontal dimension (width); for a vertical writing mode, inline size is the vertical dimension.

## Syntax

```css
/* Keyword values */
contain-intrinsic-inline-size: none;

/* <length> values */
contain-intrinsic-inline-size: 1000px;
contain-intrinsic-inline-size: 10rem;

/* auto <length> */
contain-intrinsic-inline-size: auto 300px;

/* Global values */
contain-intrinsic-inline-size: inherit;
contain-intrinsic-inline-size: initial;
contain-intrinsic-inline-size: revert;
contain-intrinsic-inline-size: revert-layer;
contain-intrinsic-inline-size: unset;
```

### Values

The following values can be specified for the intrinsic inline size of an element:

- `none`
  - : The element has no intrinsic inline-size.
- `<length>`
  - : The element has the specified inline-size ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : When the element is in size containment and skipping its contents (for example, when it is offscreen and `content-visibility: auto` is set) the inline size is remembered from the actual size of the element when it was last able to render its child elements.
    If the element has never rendered its child elements and hence has no remembered value for the normally rendered element size, or if it is not skipping its contents, the inline size is the specified `<length>`.

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

Size containment allows a user agent to lay out an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-inline-size` property allows authors to specify an appropriate value to be used as the inline-size for layout.

The `auto <length>` value allows the inline-size of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified value when the element is skipping its contents.
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
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
