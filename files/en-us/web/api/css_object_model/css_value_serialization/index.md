---
title: CSS value serialization
slug: Web/API/CSS_Object_Model/CSS_value_serialization
page-type: guide
spec-urls:
  - https://drafts.csswg.org/cssom/#serialize-a-css-value
  - https://drafts.csswg.org/css-color-4/#serialization
---

{{APIRef("CSSOM")}}

Some CSSOM APIs _serialize_ property values into standardized string representations based on the value's [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types). For example, you might set a color using the `hsl(240 100% 50%)` syntax, but when accessed through JavaScript, the value will be returned in the equivalent `"rgb(0, 0, 255)"` syntax.

CSS data types can often be expressed in multiple syntaxes. For example, the {{cssxref("&lt;color&gt;")}} data type can be represented using named colors (`red`), hexadecimal notation (`#ff0000`), functional notation (`rgb(255 0 0)`), and more. These different syntaxes are exactly equivalent at every stage of [CSS value processing](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing), similar to how in JavaScript, the same string can be written with single quotes or double quotes, or the same number can be written in different formats (like `16`, `16.0`, or `0x10`).

Because CSS converts all these surface representations to the same underlying value during value processing, it is often impossible to recover the original syntax from the already-parsed CSSOM. Furthermore, a _canonical_ representation is often more useful for scripts, because it allows comparisons and calculations based on how the content is presented to the user, rather than how it was originally authored.

## When and how values are serialized

Serialization happens whenever CSS property values are read as strings through JavaScript APIs, such as:

- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
- Accessing properties directly on {{domxref("CSSStyleDeclaration")}} objects (e.g., `element.style.backgroundColor`)

Different APIs return `CSSStyleDeclaration` objects at different stages of [value processing](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing), which have slightly different serialization behaviors. For example, {{domxref("Window.getComputedStyle()")}} and {{domxref("HTMLElement.style")}} returns the [resolved value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) of properties, while {{domxref("CSSStyleRule.style")}} returns _more or less_ the [declared value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#declared_value).

> [!NOTE]
> The [CSS Typed OM API](/en-US/docs/Web/API/CSS_Typed_OM_API) is able to represent units and other CSS syntaxes; however, style declarations retrieved from an element are still processed and don't preserve the original syntax. For example, `CSS.cm(1).toString()` returns `"1cm"` instead of serializing to pixels, but `element.computedStyleMap().get("margin-left").toString()` returns the resolved pixel value.

Each CSS value type has an associated serialization format defined by the CSS specifications. Some common rules include:

- Keywords (like `auto`, `block`, `none`) serialize to all lowercase.
- {{cssxref("angle")}}: serialized to some angle unit, depending on the context (unspecified). For `element.style` and `getComputedStyle()`, this is `deg`.
- {{cssxref("&lt;color&gt;")}}:
  - For sRGB colors ({{cssxref("named-color")}}, `transparent`, {{cssxref("system-color")}}, {{cssxref("hex-color")}}, `rgb`, `hsl`, `hwb`): serialized as legacy comma-separated syntax `rgb(R, G, B)` or `rgba(R, G, B, A)`, where all arguments are numbers. The `rgb` form is selected if the alpha is exactly `1`.
  - For `lab()`, `lch()`, `oklab()`, `oklch()`, and `color()` colors: the function form is preserved, with numeric arguments.
  - The keyword `currentColor` serializes as `currentcolor`.
- {{cssxref("percentage")}}: preserved as a percentage.
- {{cssxref("ratio")}}: serialized to two numbers separated by `" / "`.
- {{cssxref("url_value", "&lt;url&gt;")}}: serialized as a quoted {{cssxref("url_value", "&lt;url&gt;")}} (`url("...")`), with the URL resolved to an absolute URL.

Note that `<percentage>` values often get computed into absolute dimensions (like `<length>`) during value processing, so they may not appear as percentages when serialized from computed styles. For dimensions with units, such as {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;resolution&gt;")}}, and {{cssxref("&lt;time&gt;")}}, the serialized unit depends on the context and is not well-specified. `getComputedStyle()` and `element.style` serialize them into `Hz`, `px`, `dppx`, and `s` respectively.

When serializing the value for shorthand properties, its constituent longhand properties are serialized and combined according to the rules for that shorthand.

> [!NOTE]
> There are a lot of complex details regarding how CSS properties are serialized, especially for complex properties like `font`. They may be unspecified in the specifications or even inconsistent across browsers. You need to test and verify the behavior for your specific use case.

```html
<div>Example Element</div>
```

```css
div {
  position: absolute; /* keyword */
  rotate: 1rad; /* <angle> */
  color: hsl(240 100% 50%); /* <color> */
  background-color: hsl(120 50% 50% / 0.3); /* <color> with alpha */
  border-color: lab(10 -120 -120); /* <color> in non-sRGB space */
  margin: 2em; /* relative <length> */
  padding: 2cm; /* absolute <length> */
  font-size: calc(1em + 2px); /* complex expression */
  left: 50%; /* <percentage> */
  animation-duration: 500ms; /* <time> */
}
```

```js
const element = document.querySelector("div");
const table = document.createElement("table");
const elemStyle = getComputedStyle(element);
const ruleStyle = document.getElementById("css-output").sheet.cssRules[0].style;
const head = table.createTHead().insertRow();
["Property", "getComputedStyle()", "CSSStyleRule"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  head.appendChild(th);
});
for (const property of [
  "position",
  "rotate",
  "color",
  "background-color",
  "border-color",
  "margin",
  "padding",
  "font-size",
  "left",
  "animation-duration",
]) {
  const row = document.createElement("tr");
  const propCell = document.createElement("td");
  const valueCell = document.createElement("td");
  const ruleCell = document.createElement("td");
  propCell.textContent = property;
  valueCell.textContent = elemStyle.getPropertyValue(property);
  ruleCell.textContent = ruleStyle.getPropertyValue(property);
  row.appendChild(propCell);
  row.appendChild(valueCell);
  row.appendChild(ruleCell);
  table.appendChild(row);
}
document.body.appendChild(table);
```

{{EmbedLiveSample("", "", 400)}}

## Examples

### Color value serialization

Colors are among the most common types affected by serialization. Regardless of whether you define a color using `hsl()`, `hwb()`, a keyword, or a modern color space, JavaScript usually returns it in [legacy `rgb()` or `rgba()` format](/en-US/docs/Web/CSS/Reference/Values/color_value/rgb#syntax).

The following examples demonstrate how different color formats are serialized when accessed through JavaScript.

```html
<div class="example hsl">HSL Color</div>
<div class="example lab">LAB Color</div>
<div class="example named">Named Color</div>
<div class="example alpha">Transparent Color</div>
<pre id="output"></pre>
```

```css
.example {
  padding: 10px;
  margin: 5px;
  color: white;
}

.hsl {
  background-color: hsl(240 100% 50%);
}

.lab {
  background-color: lab(100% 0 0);
}

.named {
  background-color: blue;
}

.alpha {
  background-color: hsl(120 50% 50% / 0.3);
}
```

```js
const examples = document.querySelectorAll(".example");
const output = document.getElementById("output");

examples.forEach((element) => {
  const style = getComputedStyle(element);
  output.textContent += `${element.className}: ${style.getPropertyValue("background-color")}\n`;
});
```

{{EmbedLiveSample("Color value serialization", , 400)}}

### Length value serialization

Lengths are another common case. Relative units (like `em`, `%`) are often resolved to absolute pixels when serialized through JavaScript APIs.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

This normalization allows scripts to compare or calculate lengths consistently.

## Specifications

{{Specifications}}

## See also

- [`CSSStyleDeclaration.getPropertyValue()`](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/en-US/docs/Web/API/Window/getComputedStyle)
- [CSS colors](/en-US/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module
