---
title: "HTMLStyleElement: disabled property"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLStyleElement.disabled
---

{{APIRef("HTML DOM")}}

The **`HTMLStyleElement.disabled`** property can be used to get and set whether the stylesheet is disabled (`true`) or not (`false`).

Note that there is no corresponding `disabled` attribute on the [HTML `<style>` element](/en-US/docs/Web/HTML/Reference/Elements/style).

## Value

Returns `true` if the stylesheet is disabled, or there is no associated stylesheet; otherwise `false`.
The value is `false` by default (if there is an associated stylesheet).

The property can be used to enable or disable an associated stylesheet.
Setting the property to `true` when there is no associated stylesheet has no effect.

## Examples

### Disabling an inline style

This example demonstrates programmatically setting the disabled property on a style that was defined in the HTML using the [HTML `<style>` element](/en-US/docs/Web/HTML/Reference/Elements/style).
Note that you can also access any/all stylesheets in the document using [`Document.styleSheets`](/en-US/docs/Web/API/Document/styleSheets).

#### HTML

The HTML contains an HTML [`<style>`](/en-US/docs/Web/HTML/Reference/Elements/style) element that makes paragraph elements blue, a paragraph element, and a button that will be used to enabled and disable the style.

```html
<button>Enable</button>
<style id="InlineStyle">
  p {
    color: blue;
  }
</style>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

The code below gets the `style` element using its id, and then sets it as disabled.
As the style already exists, as it is defined in the SVG, this should succeed.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

We then add an event handler for the button that toggles the `disabled` value and button text.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Result

The result is shown below.
Press the button to toggle the `disabled` property value on the style used for the paragraph text.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Disabling a programmatically defined style

This example is very similar to the one above, except that the style is defined programmatically.

#### HTML

The HTML is similar to the previous case, but the definition does not include any default styling.

```html
<button>Enable</button>
<p>Text is black when style is disabled; blue when enabled.</p>
<p></p>
```

#### JavaScript

First we create the new style element on the HTML.
This is done by first creating a style element using [`Document.createElement()`](/en-US/docs/Web/API/Document/createElement), creating and appending a text node with the style definition, and then appending the style element to the document body.

```js
// Create the `style` element
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

We can then disable the style as shown below.
Note that this is the earliest point at which setting the property to `true` will succeed.
Before this point the document did not have an associated style, and so the value defaults to `false`.

```js
// Disable the style
style.disabled = true;
```

Last of all we add an event handler for the button that toggles the disabled state and button text (this is the same as in the previous example).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Enable" : "Disable";
  button.innerText = buttonText;
});
```

#### Result

The result is shown below.
Press the button to toggle the `disabled` state on the style used for the text.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGStyleElement.disabled")}}
