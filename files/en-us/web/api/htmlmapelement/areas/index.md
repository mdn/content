---
title: "HTMLMapElement: areas property"
short-title: areas
slug: Web/API/HTMLMapElement/areas
page-type: web-api-instance-property
browser-compat: api.HTMLMapElement.areas
---

{{ApiRef("HTML DOM")}}

The **`areas`** read-only property of the {{domxref("HTMLMapElement")}} returns a collection of {{HTMLElement("area")}} elements associated with the {{HTMLElement("map")}} element.

## Value

A {{domxref("HTMLCollection")}} object of {{HTMLElement("area")}} elements.

## Example

```html
<map name="image-map">
  <a href="www.link1_example.com">link 1</a>
  <area
    alt="left"
    shape="circle"
    coords="50,50,35"
    href="www.left_example.com"
    target="_top" />
  <a href="www.link2_example.com">link 2</a>
  <area
    alt="right"
    shape="circle"
    coords="150,50,35"
    href="www.right_example.com"
    target="_top" />
</map>
<img
  usemap="#image-map"
  src="left-right-arrow.png"
  alt="left right arrow image" />
```

```js
const mapElement = document.getElementsByName("image-map")[0];
// filter Area elements
console.log(mapElement.areas); // Output: HTMLCollection(2) [area, area]

const mapElementAreas = mapElement.areas;
// Iterate over each area element and update alt for area elements.
[...mapElementAreas].forEach((area) => (area.alt = area.alt + " " + "arrow"));
console.log(mapElementAreas[0].alt); // Output: "left arrow"
```

## Results

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAreaElement")}}
- {{domxref("HTMLImageElement.useMap")}}
