---
title: "HTML attribute: colorspace"
short-title: colorspace
slug: Web/HTML/Reference/Attributes/colorspace
page-type: html-attribute
browser-compat: html.elements.input.colorspace
sidebar: htmlsidebar
---

The **`colorspace`** attribute, valid only on the [`type="color"`](/en-US/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}} element, specifies which [color space](/en-US/docs/Glossary/Color_space) the element uses.

These attributes are [enumerated](/en-US/docs/Glossary/Enumerated), and have the following possible values:

- `"limited-srgb"`: The color is in the {{glossary("RGB", "sRGB")}} color space. This includes [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), and {{cssxref("hex-color")}} values. The color value is limited to 8-bits per `r`, `g`, and `b` component. This is the default.
- `"display-p3"`: The [Display P3 color space](/en-US/docs/Glossary/Color_space#display-p3), e.g., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

{{InteractiveExample("HTML Demo: colorspace", "tabbed-standard")}}

```html interactive-example
<label for="rgb">Color input using RGB:</label>

<input 
  type="color" 
  id="rgb" 
  name="rgb" 
  colorspace="limited-srgb" 
  value="#ff0000" />

<label for="p3">Color input using p3:</label>

<input
  type="color"
  id="p3"
  name="p3"
  colorspace="display-p3" 
  value="oklab(50% 0.1 0.1 / 0.5)" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('HTMLInputElement.colorspace')}}
