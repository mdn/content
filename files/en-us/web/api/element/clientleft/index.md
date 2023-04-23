---
title: "Element: clientLeft property"
short-title: clientLeft
slug: Web/API/Element/clientLeft
page-type: web-api-instance-property
browser-compat: api.Element.clientLeft
---

{{ APIRef("DOM") }}

The width of the left border of an element in pixels. It includes the width of the
vertical scrollbar if the text direction of the element is right-to-left and if there
is an overflow causing a left vertical scrollbar to be rendered.
`clientLeft` does not include the left margin or the left padding.
`clientLeft` is read-only.

> **Note:** This property will round the value to an integer. If you
> need a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.

> **Note:** When an element has
> `display: inline`, `clientLeft` returns `0`
> regardless of the element's border.

## Value

A number.

## Examples

In the following example, the client area has a white background and a 24px black `border-left`. The `clientLeft` value is the distance from where the margin (yellow) area ends and the padding and content areas (white) begin: that is, 24px.

### HTML

```html
<div id="container">
  <div id="contained">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

### CSS

```css
#container {
  margin: 3rem;
  background-color: rgb(255, 255, 204);
  border: 4px dashed black;
}

#contained {
  margin: 1rem;
  border-left: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### Result

{{EmbedLiveSample("Examples", 400, 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
