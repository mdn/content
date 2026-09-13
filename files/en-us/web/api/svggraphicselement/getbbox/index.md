---
title: "SVGGraphicsElement: getBBox() method"
short-title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
page-type: web-api-instance-method
browser-compat: api.SVGGraphicsElement.getBBox
---

{{APIRef("SVG")}}

The **`getBBox()`** method of the {{domxref("SVGGraphicsElement")}} interface returns the smallest rectangle that contains the element. The rectangle is measured in the user coordinate system of the element, with the geometry attributes of the element and its descendants applied.

By default, the rectangle covers only the shape of the element. The `options` parameter lets you include the stroke and the markers as well, and limit the rectangle to the part of the element that its clipping path leaves visible.

> [!NOTE]
> `getBBox()` returns the bounding box as it is at the time of the call, even if the element hasn't been rendered yet. It also doesn't account for any transformation applied to the element or its parents.

> [!NOTE]
> `getBBox()` returns different values than {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}, because the latter returns values relative to the viewport.

## Syntax

```js-nolint
getBBox()
getBBox(options)
```

### Parameters

- `options` {{experimental_inline}} {{optional_inline}}
  - : An object that controls which parts of the element are included in the bounding box. It can have the following properties:
    - `fill` {{optional_inline}}
      - : A boolean value indicating whether the shape of the element is included in the bounding box. Defaults to `true`. The shape is included even when the element has no fill, so an element with {{cssxref("fill")}} set to `none` still contributes to the bounding box.
    - `stroke` {{optional_inline}}
      - : A boolean value indicating whether the stroke of the element is included in the bounding box, together with its line caps and line joins. Defaults to `false`. It has no effect when the {{cssxref("stroke")}} property is `none`.
    - `markers` {{optional_inline}}
      - : A boolean value indicating whether the markers of the element are included in the bounding box. Defaults to `false`. Each marker contributes the whole area it takes up, set by its {{SVGAttr("markerWidth")}} and {{SVGAttr("markerHeight")}} attributes, rather than only the shape drawn inside it.
    - `clipped` {{optional_inline}}
      - : A boolean value indicating whether the bounding box is limited to the part of the element that its {{cssxref("clip-path")}} leaves visible. Defaults to `false`.

### Return value

A {{domxref("DOMRect")}} object describing the bounding box in the user coordinate system of the element, regardless of any transformation applied to the element or its parents.

## Examples

### Comparing bounding boxes

This example outlines the same {{SVGElement("g")}} element twice. The green outline is an SVG {{SVGElement("rect")}} placed with the rectangle returned by `getBBox()`, and the red one is an absolutely positioned {{HTMLElement("div")}} placed with the rectangle returned by {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}. Both outlines cover the same text, but the values below them differ: `getBBox()` reports user units, while `getBoundingClientRect()` reports CSS pixels relative to the viewport.

#### HTML

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <g id="greeting">
    <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
    <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">
      Hello World Again!
    </text>
  </g>
  <rect id="bbox" stroke="green" stroke-width="2" fill="none" />
</svg>

<div id="client-rect"></div>
<ul id="legend"></ul>
```

#### CSS

```css
svg {
  max-width: 400px;
}

#client-rect {
  position: absolute;
  box-sizing: border-box;
  border: 2px dashed red;
}

ul {
  padding-inline-start: 1em;
  font-family: monospace;
  line-height: 1.5;
}
```

#### JavaScript

```js
const greeting = document.querySelector("#greeting");
const legend = document.querySelector("#legend");

const bbox = greeting.getBBox();
const outline = document.querySelector("#bbox");
outline.setAttribute("x", bbox.x);
outline.setAttribute("y", bbox.y);
outline.setAttribute("width", bbox.width);
outline.setAttribute("height", bbox.height);

const clientRect = greeting.getBoundingClientRect();
const overlay = document.querySelector("#client-rect");
overlay.style.left = `${clientRect.x + window.scrollX}px`;
overlay.style.top = `${clientRect.y + window.scrollY}px`;
overlay.style.width = `${clientRect.width}px`;
overlay.style.height = `${clientRect.height}px`;

for (const [label, rect] of [
  ["getBBox()", bbox],
  ["getBoundingClientRect()", clientRect],
]) {
  const item = document.createElement("li");
  item.textContent = `${label} → ${rect.x.toFixed(1)}, ${rect.y.toFixed(1)}, ${rect.width.toFixed(1)}, ${rect.height.toFixed(1)}`;
  legend.append(item);
}
```

#### Result

{{EmbedLiveSample("Comparing_bounding_boxes", "", "220")}}

### Bounding box options

This example draws a path with a thick stroke, a marker at each end, and a clipping path. Each call to `getBBox()` turns on one more option, and each resulting rectangle is outlined in a different color: the shape alone in red, the stroke added in green, the markers added in orange, and the result clipped in black.

#### HTML

```html
<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerUnits="userSpaceOnUse"
      markerWidth="30"
      markerHeight="30">
      <circle cx="5" cy="5" r="5" fill="rebeccapurple" />
    </marker>
    <clipPath id="clip">
      <rect x="40" y="40" width="120" height="80" />
    </clipPath>
  </defs>

  <path
    id="chevron"
    d="M 50 100 L 100 50 L 150 100"
    fill="none"
    stroke="cornflowerblue"
    stroke-width="20"
    marker-start="url(#dot)"
    marker-end="url(#dot)"
    clip-path="url(#clip)" />

  <g fill="none" stroke-width="1">
    <rect id="fill-box" stroke="red" />
    <rect id="stroke-box" stroke="green" />
    <rect id="markers-box" stroke="orange" />
    <rect id="clipped-box" stroke="black" />
  </g>
</svg>

<ul id="legend"></ul>
```

#### CSS

```css
svg {
  max-width: 400px;
}

ul {
  padding-inline-start: 1em;
  font-family: monospace;
  line-height: 1.5;
}
```

#### JavaScript

```js
const chevron = document.querySelector("#chevron");
const legend = document.querySelector("#legend");

const variants = [
  { id: "fill-box", label: "getBBox()", options: {} },
  {
    id: "stroke-box",
    label: "getBBox({ stroke: true })",
    options: { stroke: true },
  },
  {
    id: "markers-box",
    label: "getBBox({ stroke: true, markers: true })",
    options: { stroke: true, markers: true },
  },
  {
    id: "clipped-box",
    label: "getBBox({ stroke: true, markers: true, clipped: true })",
    options: { stroke: true, markers: true, clipped: true },
  },
];

for (const { id, label, options } of variants) {
  const box = chevron.getBBox(options);

  const outline = document.querySelector(`#${id}`);
  outline.setAttribute("x", box.x);
  outline.setAttribute("y", box.y);
  outline.setAttribute("width", box.width);
  outline.setAttribute("height", box.height);

  const item = document.createElement("li");
  item.style.color = outline.getAttribute("stroke");
  item.textContent = `${label} → ${box.x.toFixed(1)}, ${box.y.toFixed(1)}, ${box.width.toFixed(1)}, ${box.height.toFixed(1)}`;
  legend.append(item);
}
```

#### Result

{{EmbedLiveSample("Bounding_box_options", "", "480")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [getBBox in SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
