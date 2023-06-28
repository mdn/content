---
title: "SVGStyleElement: title property"
short-title: title
slug: Web/API/SVGStyleElement/title
page-type: web-api-instance-property
browser-compat: api.SVGStyleElement.title
---

{{APIRef("SVG")}}

The **`SVGStyleElement.title`** property is a string corresponding to the [`title`](/en-US/docs/Web/SVG/Element/style#title) attribute of the given SVG style element.
It may be used to select between [alternate style sheets](/en-US/docs/Web/CSS/Alternative_style_sheets).

## Value

A string with any value.

The value is initialized with the string specified in the corresponding style's [`title`](/en-US/docs/Web/SVG/Element/style#title) attribute.

## Examples

This example demonstrates programmatically getting and setting the `title` property on a style that was defined in an SVG definition.

### HTML

The HTML contains an SVG definition for a [`<circle>`](/en-US/docs/Web/SVG/Element/circle) with a [`<style>`](/en-US/docs/Web/SVG/Element/style) element that has a `title`.
We also define a text area for logging the current title.

```html
<textarea id="log" rows="3" cols="50"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style title="gold fill style">
    circle {
      fill: gold;
    }
  </style>
  <circle cx="50" cy="40" r="25" />
</svg>
```

### JavaScript

The code below gets the `style` element (an `SVGStyleElement`) using its tag name, logs the title, then changes and logs the title again.

```js
const log = document.getElementById("log");

const svg = document.querySelector("svg");
const style = svg.querySelector("style");
log.value = `Initial title: ${style.title}\n`;
style.title = "Altered Title";
log.value += `New title: ${style.title}`;
```

### Result

The text in the log below shows that the title initially reflects the matching attribute on the `<style>` element, but can then be changed to another value.

{{EmbedLiveSample("Examples")}}

Note that alternate styles are not applied by default; they must be selected as the preferred stylesheet by the user.
To apply the alternate stylesheets on Firefox:

1. Open the Menu Bar (Press `F10` or tap the `Alt` key)
2. Open **View > Page Style** submenu
3. Select the stylesheets based on their names.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
