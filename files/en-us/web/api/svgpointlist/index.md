---
title: SVGPointList
slug: Web/API/SVGPointList
page-type: web-api-interface
browser-compat: api.SVGPointList
---

{{APIRef("SVG")}}

The **`SVGPointList`** interface represents a list of {{domxref("SVGPoint")}} objects.

An `SVGPointList` can be designated as read-only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGPointList.length")}} {{ReadOnlyInline}}
  - : Returns the number of points in the list.
- {{domxref("SVGPointList.numberOfItems")}} {{ReadOnlyInline}}
  - : Returns the number of points in the list.

## Instance methods

- {{domxref("SVGPointList.clear()")}}
  - : Removes all items in the list.
- {{domxref("SVGPointList.initialize()")}}
  - : First removes all items in the list, then adds a single value to the list.
- {{domxref("SVGPointList.getItem()")}}
  - : Gets an item from the list at a specified position.
- {{domxref("SVGPointList.insertItemBefore()")}}
  - : Inserts an element into the list at a specified position.
- {{domxref("SVGPointList.replaceItem()")}}
  - : Replaces an item in the list with a new item.
- {{domxref("SVGPointList.removeItem()")}}
  - : Removes an item from the list.
- {{domxref("SVGPointList.appendItem()")}}
  - : Adds an item to the end of the list.

## Examples

The following example shows an SVG which contains a {{SVGElement("polyline")}} with five coordinate pairs. The `points` property returns an `SVGPointList`.

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
const example = document.getElementById("example");
console.log(example.points); // An SVGPointList
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
