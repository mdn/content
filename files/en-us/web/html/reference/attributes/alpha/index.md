---
title: "HTML attribute: alpha"
short-title: alpha
slug: Web/HTML/Reference/Attributes/alpha
page-type: html-attribute
browser-compat: html.elements.input.alpha
sidebar: htmlsidebar
---

The Boolean **`alpha`** attribute, valid on [`<input type="color"/>`](/en-US/docs/Web/HTML/Reference/Elements/input/color) elements, allows the user to choose the opacity of the color being selected.

{{InteractiveExample("HTML Demo: alpha", "tabbed-standard")}}

```html interactive-example
<label for="no-alpha">Color input not using alpha:</label>

<input type="color" id="no-alpha" name="no-alpha" value="#ff0000" />

<label for="alpha">Color input using alpha:</label>

<input
  type="color"
  id="alpha"
  name="alpha"
  alpha
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

- {{domxref('HTMLInputElement.alpha')}}
