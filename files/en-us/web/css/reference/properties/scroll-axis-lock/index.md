---
title: "`scroll-axis-lock` CSS property"
short-title: scroll-axis-lock
slug: Web/CSS/Reference/Properties/scroll-axis-lock
page-type: css-property
browser-compat: css.properties.scroll-axis-lock
sidebar: cssref
---

The **`scroll-axis-lock`** [CSS](/en-US/docs/Web/CSS) property specifies whether the user agent may lock scrolling gestures to one axis of a scrollport.

## Syntax

```css
/* Single keyword */
scroll-axis-lock: auto;
scroll-axis-lock: none;

/* Global values */
scroll-axis-lock: inherit;
scroll-axis-lock: initial;
scroll-axis-lock: revert;
scroll-axis-lock: revert-layer;
scroll-axis-lock: unset;
```

### Value

The `scroll-axis-lock` property value is specified as one of the following values:

- `auto`
  - : The default value. The user agent may lock scrolling gestures to one axis.
- `none`
  - : The default value. The user agent must not lock scrolling gestures to one axis.

## Description

Browsers often lock scrolling gestures to one axis of a scrollport, when the gesture starts with significantly more movement along one axis than the other. This improves the user experience in cases where the user relies on scrolling in one direction only. Examples include cases where the user is manipulating multiple controls along a single line, or wants to trace round the edges of a shape with straight perpendicular lines. However, it is inconvenient in cases where the environment would benefit from always being diagonally scrollable, such as a large scale drawing or mapping app.

The `scroll-axis-lock` property allows the developer to opt out of the browser scroll lock behavior in cases where it is not wanted, by setting its value to `none`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demnonstrates the effect of `scroll-axis-lock`.

#### HTML

We include a {{htmlelement("div")}} element with a large {{htmlelement("img")}} inside it, and a checkbox {{htmlelement("input")}}:

```html live-sample___axis-lock
<label for="axis-lock">Turn off scroll-axis-lock</label>
<input type="checkbox" id="axis-lock" />
<div>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
    alt="" />
</div>
```

#### CSS

We give the `<div>` a fixed {{cssxref("width")}} and {{cssxref("height")}}, and set its {{cssxref("overflow")}} to `scroll` to make it a scrollport.

```css live-sample___axis-lock
div {
  width: 400px;
  height: 300px;
  overflow: auto;
}
```

Next, we include a rule that sets `scroll-axis-lock: none;` on the `<div>` only when the checkbox is checked:

```css live-sample___axis-lock
input:checked ~ div {
  scroll-axis-lock: none;
}
```

```css live-sample___axis-lock
@supports not (scroll-axis-lock: none) {
  body::before {
    content: "Your browser does not support the scroll-axis-lock property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Result

{{EmbedLiveSample("axis-lock","100%","340")}}

Using a device where scroll locking occurs, such as a touchscreen phone, start a scrolling gesture to scroll the `<div>` content horizontally; change from moving horizontally to moving diagonally up or down during the gesture, without removing your finger. You should see that the scrolling is locked horizontally, and no vertical movement will occur.

Now check the checkbox, and try the gesture again. With the `scroll-axis-lock` set to `none`, scroll locking will not occur, and the scrolling should follow the exact path of your finger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
