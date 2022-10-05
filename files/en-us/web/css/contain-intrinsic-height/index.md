---
title: contain-intrinsic-height
slug: Web/CSS/contain-intrinsic-height
page-type: css-property
tags:
  - CSS
  - CSS Property
  - Reference
  - experimental
  - contain-intrinsic-height
  - Experimental
browser-compat: css.properties.contain-intrinsic-height
---

{{CSSRef}}{{SeeCompatTable}}

The **`contain-intrinsic-length`** [CSS](/en-US/docs/Web/CSS) property sets the height of an element that a browser can use for layout when the element is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

## Syntax

```css
/* Keyword values */
contain-intrinsic-height: none;

/* <length> values */
contain-intrinsic-height: 1000px;
contain-intrinsic-height: 10rem;

/* auto <length> */
contain-intrinsic-height: auto 300px;

/* Global values */
contain-intrinsic-height: inherit;
contain-intrinsic-height: initial;
contain-intrinsic-height: revert;
contain-intrinsic-height: revert-layer;
contain-intrinsic-height: unset;
```

### Values

The following values may be specified for an element.

- `none`
  - : The element has no intrinsic height.
- `<length>`
  - : The element has the specified height ({{cssxref("&lt;length&gt;")}}).
- `auto <length>`
  - : A remembered value of the "normally rendered" element height if one exists and the element is skipping its contents (for example, when it is offscreen); otherwise the specified `<length>`.

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility), and may also be set using the [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties).

Size containment allows a user agent to layout an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no height (or width).
The `contain-intrinsic-height` property allows authors to specify an appropriate value to be used as the height for layout.

The `auto <length>` value allows the height of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified height when the element is skipping its contents.
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
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
