---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
browser-compat: css.properties.contain-intrinsic-size
---

{{CSSRef}}

The **`contain-intrinsic-size`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the size of an element that will be used for layout when it is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

## Constituent properties

This property is a shorthand for the following CSS properties:

- `contain-intrinsic-width`
- `contain-intrinsic-height`

## Syntax

```css
/* <length> values */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* width | height */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;

/* auto width | auto height */
contain-intrinsic-size: auto 300px auto 4rem;

/* Global values */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: unset;
```

### Values

Either one or two of the following values may be specified for an element.
If two values are specified the first value applies to the width, and the second is the height.
If a single value is specified it applies to both width and height.

- `none`
  - : The element has no intrinsic size in the given dimension(s).
- `<length>`
  - : The element has the specified {{cssxref("&lt;length&gt;")}} in the given dimension(s).
- `auto <length>`
  - : A remembered value of the "normally rendered" element size if one exists; otherwise the specified `<length>`.

## Description

Size containment allows a user agent to layout an element as though it had a fixed size, avoiding the computational cost of rendering the child elements to determine the actual size.
By default, size containment assumes that elements have no contents, and hence may collapse the layout to zero inner height and width.
The `contain-intrinsic-size` allows authors to specify an appropriate value to be used as the size for layout.

Determining the size for the element when it is rendered with all its child elements can be difficult, and odd layout effects may result if an incorrect value is used.
This can be mitigated by specifying the `auto <length>` value, which saves the normal "fully rendered" size of the element (if the element is ever outside of size containment) and uses it as the intrinsic size.
In particular this is recommended with [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility) as elements are only in size containment when offscreen, and will hence may have  a remembered value.

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
