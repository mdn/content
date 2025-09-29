---
title: Serializing CSS values
slug: Web/API/CSS_Object_Model/Serializing_CSS_values
page-type: guide
spec-urls:
  - https://drafts.csswg.org/cssom/#serialize-a-css-value
  - https://drafts.csswg.org/css-color-4/#serialization
---

{{APIRef("CSSOM")}}
{{SeeCompatTable}}

When working with CSS through JavaScript APIs, property values are **serialized** into standardized string representations. This means that even if you set a CSS property using one syntax (like `hsl()` for colors), reading it back through JavaScript might return a different, but equivalent, representation (like `rgb()`).

## Overview

CSS values are serialized whenever they're accessed through JavaScript APIs like {{domxref("CSSStyleDeclaration.getPropertyValue()")}} or {{domxref("Window.getComputedStyle()")}}. The serialization process follows rules defined in the [CSS Object Model (CSSOM) specification](https://drafts.csswg.org/cssom/#serialize-a-css-value).

## Why does serialization happen?

The CSSOM must expose CSS values as strings to JavaScript. To ensure interoperability, the specification defines canonical formats for each type of value. This conversion process is called **serialization**.

For example:

- Shorthand properties like `margin` might be expanded into longhands
- Invalid or unsupported values may be replaced
- Color functions are often normalized to `rgb()` or `rgba()`
- Relative lengths might be computed to absolute values

## Color value serialization

Colors are commonly affected by serialization. Regardless of how a color is defined in CSS (using `hsl()`, `hwb()`, color keywords, or other syntaxes), accessing it via JavaScript typically returns it in `rgb()` or `rgba()` format.

### Color serialization examples

The following examples demonstrate how different color formats are serialized when accessed through JavaScript.

#### HTML

```html
<div class="example hsl">HSL Color</div>
<div class="example hwb">HWB Color</div>
<div class="example named">Named Color</div>
<div class="example alpha">Transparent Color</div>
```

#### CSS

```css
.example {
  padding: 10px;
  margin: 5px;
  color: white;
}

.hsl {
  background-color: hsl(240, 100%, 50%);
}

.hwb {
  background-color: hwb(0 0% 0%);
}

.named {
  background-color: blue;
}

.alpha {
  background-color: hsla(120, 50%, 50%, 0.3);
}
```

#### JavaScript

```js
const examples = document.querySelectorAll(".example");

examples.forEach((element) => {
  const style = getComputedStyle(element);
  console.log(
    `${element.className}: ${style.getPropertyValue("background-color")}`,
  );
});

// Expected output:
// "example hsl: rgb(0, 0, 255)"
// "example hwb: rgb(255, 0, 0)"
// "example named: rgb(0, 0, 255)"
// "example alpha: rgba(64, 159, 64, 0.3)"
```

{{EmbedLiveSample("Color serialization examples", 600, 200)}}

Even when using modern color syntaxes like `hwb()` or `color(display-p3 0.4 0.6 0.8)`, most current browsers will serialize the value to `rgb()` or `rgba()` when accessed through JavaScript.

### Transparency and rgba()

When a color includes an alpha channel (transparency), the serialized output will use `rgba()`:

```js
element.style.backgroundColor = "hsla(120, 50%, 50%, 0.3)";
console.log(getComputedStyle(element).getPropertyValue("background-color"));
// Output: "rgba(64, 159, 64, 0.3)"
```

## When does serialization occur?

CSS values are serialized whenever they are accessed through JavaScript APIs, including:

- Reading properties with `element.style.getPropertyValue()`
- Getting computed styles via `getComputedStyle(element).getPropertyValue()`
- Accessing `cssText` of a style rule
- Reading `style` attribute values
- Using `CSSStyleDeclaration` methods

## Specification behavior

The exact serialization behavior is defined in the [CSSOM specification](https://drafts.csswg.org/cssom/#serialize-a-css-value). Key aspects include:

- [Serializing color values](https://drafts.csswg.org/cssom/#serialize-a-css-component-value)
- Different handling for _declared_, _computed_, and _resolved_ values
- Special cases for various CSS properties and value types

The concept of a "resolved value" was introduced to maintain compatibility with existing web content that might depend on specific serialization formats.

## Common serialization patterns

| Original Value            | Typical Serialized Output  |
| ------------------------- | -------------------------- |
| `hsl(0, 100%, 50%)`       | `rgb(255, 0, 0)`           |
| `#ff0000`                 | `rgb(255, 0, 0)`           |
| `hwb(0 0% 0%)`            | `rgb(255, 0, 0)`           |
| `color(display-p3 1 0 0)` | `rgb(255, 0, 0)`           |
| `transparent`             | `rgba(0, 0, 0, 0)`         |
| `currentcolor`            | Depends on inherited color |

## Best practices

When working with serialized CSS values:

1. Don't assume the format of returned values will match the format used to set them
2. For color comparison, consider parsing values to a common format
3. Remember that computed values may differ from specified values
4. Test across browsers, as serialization details can vary

## See also

- [`CSSStyleDeclaration.getPropertyValue()`](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/en-US/docs/Web/API/Window/getComputedStyle)
- [CSS Color Module Level 4: Serialization](https://drafts.csswg.org/css-color-4/#serialization)
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors)
- [CSS Color Data Type](/en-US/docs/Web/CSS/color_value)
