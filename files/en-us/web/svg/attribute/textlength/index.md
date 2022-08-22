---
title: textLength
slug: Web/SVG/Attribute/textLength
tags:
  - Attribute
  - CSS
  - HTML
  - JavaScript
  - SVG Attribute
  - Text
  - height
  - length
  - size
  - width
browser-compat: svg.attributes.textLength
---
{{SVGRef}}

The **`textLength`** attribute, available on SVG {{SVGElement("text")}} and {{SVGElement("tspan")}} elements, lets you specify the width of the space into which the text will draw. The {{glossary("user agent")}} will ensure that the text does not extend farther than that distance, using the method or methods specified by the {{SVGAttr("lengthAdjust")}} attribute. By default, only the spacing between characters is adjusted, but the glyph size can also be adjusted if you change `lengthAdjust`.

By using `textLength`, you can ensure that your SVG text displays at the same width regardless of conditions including web fonts failing to load (or not having loaded yet).

You can use this attribute with the following SVG elements:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <text y="20" textLength="6em">Small text length</text>
  <text y="40" textLength="120%">Big text length</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "100")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : This value specifies the width of the space the text will be adjusted to occupy as absolute length or percentage.
- `<number>`
  - : A numeric value outlines a length referring to the units of the current coordinate system.

## Interactive example

Let's create a simple example that presents text you can resize using an {{HTMLElement("input")}} element of type [`"range"`](/en-US/docs/Web/HTML/Element/input/range).

### CSS

```css
.controls {
  font: 16px "Open Sans", "Arial", sans-serif;
}
```

### SVG

Let's start with the SVG. It's pretty basic, with a 1000-by-300 pixel space mapped into a 10 centimeter by 3 centimeter box.

```html
<svg width="10cm" height="3cm" viewBox="0 0 1000 300"
    xmlns="http://www.w3.org/2000/svg">

  <rect x="1" y="1" width="998" height="298"
      fill="none" stroke="green" stroke-width="2"/>

  <text id="hello" x="10" y="150"
      font-family="sans-serif" font-size="60" fill="green">
    Hello world!
  </text>
</svg>
```

First, a {{SVGElement("rect")}} element is used to create and stroke a rectangle to contain the text. Then {{SVGElement("text")}} is used to create the text element itself, with an {{SVGAttr("id")}} of `"hello"`.

### HTML

The HTML is also simple, with only two displayed elements contained inside a grouping {{HTMLElement("div")}}:

```html
<div class="controls">
  <input type="range" id="widthSlider" min="80" max="978">
  <span id="widthDisplay"></span>
</div>
```

The {{HTMLElement("input")}} element, of type `"range"`, is used to create the slider control the user will manipulate to change the width of the text. A {{HTMLElement("span")}} element of ID `"widthDisplay"` is provided to display the current width value.

### JavaScript

Finally, let's have a look at the JavaScript code. It starts by stashing references to the elements it will need to access, using {{domxref("Document.getElementById()")}}:

```js
const widthSlider = document.getElementById("widthSlider");
const widthDisplay = document.getElementById("widthDisplay");
const textElement = document.getElementById("hello");
const baseLength = Math.floor(textElement.textLength.baseVal.value);

widthSlider.value = baseLength;

widthSlider.addEventListener("input", (event) => {
  textElement.textLength.baseVal.newValueSpecifiedUnits(
      SVGLength.SVG_LENGTHTYPE_PX, widthSlider.valueAsNumber);
  widthDisplay.innerText = widthSlider.value;
}, false);

widthSlider.dispatchEvent(new Event("input"));
```

After fetching the element references, an {{domxref("EventListener")}} is established by calling {{domxref("EventTarget.addEventListener", "addEventListener()")}} on the slider control, to receive any {{domxref("HTMLElement/input_event", "input")}} events which occur. These events will be sent any time the slider's value changes, even if the user hasn't stopped moving it, so we can responsively adjust the text width.

When an `"input"` event occurs, we call `newValueSpecifiedUnits()` to set the value of `textLength` to the slider's new value, using the `SVGLength` interface's `SVG_LENGTHTYPE_PX` unit type to indicate that the value represents pixels. Note that we have to dive into `textLength` to get its `baseVal` property; `textLength` is stored as an {{domxref("SVGLength")}} object, so we can't treat it like a plain number.

After updating the text width, the contents of the `widthDisplay` box are updated with the new value as well, and we're finished.

### Result

Here's what the example looks like. Try dragging the slider around to get a feel for what it does.

{{EmbedLiveSample("Interactive_example", 650, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG Tutorial: [Texts](/en-US/docs/Web/SVG/Tutorial/Texts)
- {{domxref("SVGAnimatedLength")}} and {{domxref("SVGLength")}}
- {{SVGElement("text")}}
