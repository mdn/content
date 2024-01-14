---
title: "HTMLMapElement: areas property"
short-title: areas
slug: Web/API/HTMLMapElement/areas
page-type: web-api-instance-property
browser-compat: api.HTMLMapElement.areas
---

{{ApiRef("HTML DOM")}}

The **`areas`** property of the {{domxref("HTMLMapElement")}} return {{domxref("HTMLCollection")}} object of {{HTMLElement("area")}} elements present in the {{HTMLElement("map")}} element. This property only apply filter for `area` elements. The `areas` is readonly property so we can not assign a new collection to `areas` property, we can only access or iterate over existing areas collections.

## Value

An array-like object ({{domxref("HTMLCollection")}}) of elements.

## Example

```html
<map name="image-map">
    <a href="www.link1_example.com">link 1</a>
    <area
    alt="left arrow"
    shape="circle"
    coords="50,50,35"
    href="www.left_example.com"
    target="_top" />
  <a href="www.link2_example.com">link 2</a>
  <area
    alt="right arrow"
    shape="circle"
    coords="150,50,35"
    href="www.right_example.com"
    target="_top" />
</map>
<img
    usemap="#image-map"
    src="left-right-arrow.png"
    alt="left right arrow image"
/>
```

```js
const mapElement = document.getElementsByName("image-map")[0];
// Anchor elements are filtered out from HTMLCollection
console.log(mapElement.areas); // output: HTMLCollection(2) [area, area]

const mapElementAreas = mapElement.areas;
// iterate over each area element and change target value to _blank
[...mapElementAreas].forEach((area) => (area.target = "_blank"));
console.log(mapElementAreas[0]);
// click on left and right arrows, it will open new tab.
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