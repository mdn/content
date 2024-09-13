---
title: "Element: clientTop property"
short-title: clientTop
slug: Web/API/Element/clientTop
page-type: web-api-instance-property
browser-compat: api.Element.clientTop
---

{{ APIRef("DOM") }}

The width of the top border of an element in pixels. It is a read-only, integer
property of element.

As it happens, all that lies between the two locations (`offsetTop` and
client area top) is the element's border. This is because the `offsetTop`
indicates the location of the top of the border (not the margin) while the client area
starts immediately below the border, (client area includes padding.) Therefore, the
**clientTop** value will always equal the integer portion of the
`.getComputedStyle()` value for "border-top-width". (Actually might be
Math.round(parseFloat()).) For example, if the computed "border-top-width" is zero,
then **`clientTop`** is also zero.

> [!NOTE]
> This property will round the value to an integer. If you
> need a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.

## Value

A number.

## Examples

In the following example, the client area has a white background and a 24px black `border-top`. The `clientTop` value is the distance from where the margin (yellow) area ends and the padding and content areas (white) begin: that is, 24px.

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
  background-color: rgb(255 255 204);
  border: 4px dashed black;
}

#contained {
  margin: 1rem;
  border-top: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### Result

{{EmbedLiveSample("Examples", 400, 350)}}

## Notes

`clientTop` was first introduced in the MS IE DHTML object model.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
