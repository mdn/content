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

This example provides a button that can be used to apply and remove `contain-intrinsic-size`, and another button that toggles the `content-visibility` though `visible`, `auto` and `hidden`.

#### CSS

```css
.intrinsic_size_on {
  contain-intrinsic-size: auto 40px auto 130px;
}
.hidden {
  content-visibility: hidden;
}
.visible {
  content-visibility: visible;
}
.auto {
  content-visibility: auto;
}
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

The code below adds and removes classes to the containing element, which in turn set the properties for different `content-visibility` settings and add/remove `contain-intrinsic-size`.

```js
const containedElement = document.querySelector("#contained_element");
const buttonIntrinsic = document.getElementById("intrinsic_size");
const buttonVisibility = document.getElementById("visibility");

buttonIntrinsic.addEventListener("click", () => {
  containedElement.classList.toggle("intrinsic_size_on");
  if (containedElement.classList.contains("intrinsic_size_on")) {
    buttonIntrinsic.innerText = "Intrinsic Size: On";
  } else {
    buttonIntrinsic.innerText = "Intrinsic Size: Off";
  }
});

buttonVisibility.addEventListener("click", () => {
  if (containedElement.classList.contains("hidden")) {
    buttonVisibility.innerText = "Visible";
    containedElement.classList.add("visible");
    containedElement.classList.remove("hidden");
    containedElement.classList.remove("auto");
  } else if (containedElement.classList.contains("visible")) {
    buttonVisibility.innerText = "Auto";
    containedElement.classList.add("auto");
    containedElement.classList.remove("visible");
    containedElement.classList.remove("hidden");
  } else {
    buttonVisibility.innerText = "Hidden";
    containedElement.classList.add("hidden");
    containedElement.classList.remove("visible");
    containedElement.classList.remove("auto");
  }
});
```

#### HTML

The HTML defines two buttons, a container element that is subject to containment via the `content-visibility` property.

```html
<button id="intrinsic_size">Intrinsic size: On</button>
<button id="visibility">Visible</button>
<div id="contained_element" class="visible intrinsic_size_on">
  <div class="child_element"></div>
</div>
```

#### Result

Toggle the buttons to add/remove the `contain-intrinsic-size` property and to cycle through the `content-visibility` values.
Note that when the content is visible or auto changing `contain-intrinsic-size` makes no difference.
However if the content is hidden, removing `contain-intrinsic-size` collapses the parent element as though its child element had no size.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
