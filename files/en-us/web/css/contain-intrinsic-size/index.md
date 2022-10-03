---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
page-type: css-shorthand-property
tags:
  - CSS
  - CSS Property
  - Reference
  - experimental
  - contain-intrinsic-size
  - recipe:css-shorthand-property
browser-compat: css.properties.contain-intrinsic-size
---

{{CSSRef}} {{SeeCompatTable}}

The **`contain-intrinsic-size`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the size of an element that a browser will use for layout when the element is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`contain-intrinsic-width`](/en-US/docs/Web/CSS/contain-intrinsic-width)
- [`contain-intrinsic-height`](/en-US/docs/Web/CSS/contain-intrinsic-height)

## Syntax

```css
/* Keyword values */
contain-intrinsic-width: none;

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
If two values are specified, the first value applies to the width, and the second to the height.
If a single value is specified, it applies to both width and height.

- `none`
  - : The element has no intrinsic size in the given dimension(s).
- `<length>`
  - : The element has the specified {{cssxref("&lt;length&gt;")}} in the given dimension(s).
- `auto <length>`
  - : A remembered value of the "normally rendered" element size if one exists and the element is skipping its contents (for example, when it is offscreen); otherwise the specified `<length>`.

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

Size containment allows a user agent to layout an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-size` property allows authors to specify an appropriate value to be used as the size for layout.

The `auto <length>` value allows the size of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified length when the element is skipping its contents.
This allows offscreen elements with [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility) to benefit from size containment without developers having to be as precise in their estimates of element size.
The remembered value is not used if the child elements are being rendered (if size containment is enabled, the `<length>` will be used).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting the intrinsic size

This example ...

```css
.toggle_intrinsic_size {
  contain-intrinsic-size: auto 50px auto 100px;
}
.set_hidden {
  content-visibility: hidden;
}
.set_visible {
  content-visibility: visible;
}
.set_auto {
  content-visibility: auto;
}
#contained_element {
  border: 2px solid green;
}
.child_element {
  border: 1px solid blue;
  height: 100px;
  width: 150px;
}
```

```js
const containedElement = document.querySelector("#contained_element");
const buttonIntrinsic = document.getElementById("intrinsic_size");
const buttonVisibility = document.getElementById("visibility");

buttonIntrinsic.addEventListener("click", () => {
  containedElement.classList.toggle("toggle_intrinsic_size");
  if (containedElement.classList.contains("toggle_intrinsic_size")) {
    buttonIntrinsic.innerText = "Intrinsic Size: On"
  } else {
    buttonIntrinsic.innerText = "Intrinsic Size: Off"
  }
});

buttonVisibility.addEventListener("click", () => {
  if (containedElement.classList.contains("set_hidden")) {
    buttonVisibility.innerText = "Visible"
    containedElement.classList.add("set_visible");
    containedElement.classList.remove("set_hidden");
    containedElement.classList.remove("set_auto");
  } else if (containedElement.classList.contains("set_visible")) {
    buttonVisibility.innerText = "Auto"
    containedElement.classList.add("set_auto");
    containedElement.classList.remove("set_visible");
    containedElement.classList.remove("set_hidden");
  } else {
    buttonVisibility.innerText = "Hidden"
    containedElement.classList.add("set_hidden");
    containedElement.classList.remove("set_visible");
    containedElement.classList.remove("set_auto");
  }
});
```

```html
<button id="intrinsic_size">Intrinsic size</button>
<button id="visibility">Visibility</button>
<div id="contained_element" class=""><div class="child_element"></div></div>
```

{{EmbedLiveSample('Setting the intrinsic size', '100%', 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
