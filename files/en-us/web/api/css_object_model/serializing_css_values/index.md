---
title: Serializing CSS values
short-title: Serializing CSS values
slug: Web/API/CSS_Object_Model/Serializing_CSS_values
page-type: guide
spec-urls:
  - https://drafts.csswg.org/cssom/#serialize-a-css-value
  - https://drafts.csswg.org/css-color-4/#serialization
---

{{APIRef("CSSOM")}}

When working with CSS through JavaScript APIs, property values are **serialized** into standardized string representations. For example, you might set a color using `hsl(240, 100%, 50%)`, but when accessed through JavaScript, the value may be returned as the equivalent `rgb(0, 0, 255)`.

## Why does serialization happen?

Serialization ensures that CSS values are exposed to JavaScript in a consistent format across browsers. Without this, equivalent values could be returned in different syntaxes (for example, `#f00` vs. `rgb(255, 0, 0)`), breaking code that relies on string comparisons.
The CSSOM specification defines canonical formats for each CSS type to guarantee predictable, interoperable behavior.

## When does serialization occur?

Serialization happens whenever CSS values are read through JavaScript APIs, such as:

- `element.style.getPropertyValue()`
- `getComputedStyle(element).getPropertyValue()`
- Reading `style.cssText`
- Inspecting inline `style` attributes
- Accessing values via `CSSStyleDeclaration` methods

## Color value serialization

Colors are one of the most common cases affected by serialization. Regardless of whether you define a color using `hsl()`, `hwb()`, a keyword, or a modern color space, JavaScript usually returns it in `rgb()` or `rgba()` format.

### Example: color serialization

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

> [!NOTE]
> When a color includes transparency, the serialized result always uses `rgba()`.
> Example:
>
> ```js
> element.style.backgroundColor = "hsla(120, 50%, 50%, 0.3)";
> console.log(getComputedStyle(element).getPropertyValue("background-color"));
> // "rgba(64, 159, 64, 0.3)"
> ```

Even when using modern color syntaxes like `hwb()` or `color(display-p3 0.4 0.6 0.8)`, most current browsers will serialize the value to `rgb()` or `rgba()` when accessed through JavaScript.

## Length value serialization

Lengths are another common case. Relative units (like `em`, `%`) are often resolved to absolute pixels when serialized through JavaScript APIs.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

This normalization allows scripts to compare or calculate lengths consistently.

## How specifications define serialization

The [`CSSOM specification`](https://drafts.csswg.org/cssom/#serialize-a-css-value) defines algorithms for serializing CSS values. The process converts the internal representation of a value into a canonical string format.

- Colors typically serialize to `rgb()` or `rgba()`.
- Lengths resolve to pixels.
- The keyword `transparent` serializes as `rgba(0, 0, 0, 0)`.
- The concept of resolved values exists to preserve compatibility with legacy code that expects specific formats.

This ensures that, regardless of how a property was originally written (for example, `#ff0000`, `hsl(0,100%,50%)`, or `hwb(0 0% 0%)`), the value returned to JavaScript is consistent across implementations.

## Specifications

{{Specifications}}

## See also

- [`CSSStyleDeclaration.getPropertyValue()`](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/en-US/docs/Web/API/Window/getComputedStyle)
- [CSS Color Module Level 4: Serialization](https://drafts.csswg.org/css-color-4/#serialization)
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors)
- [CSS Color Data Type](/en-US/docs/Web/CSS/color_value)
