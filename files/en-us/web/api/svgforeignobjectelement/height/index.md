---
title: "SVGForeignObjectElement: height property"
short-title: height
slug: Web/API/SVGForeignObjectElement/height
page-type: web-api-instance-property
browser-compat: api.SVGForeignObjectElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGForeignObjectElement")}} interface describes the height of the `<foreignObject>` element. It reflects the computed value of the {{SVGAttr("height")}} attribute on the {{SVGElement("foreignObject")}} element.

The attribute value is a [`<length>`](/en-US/docs/Web/SVG/Content_type#length), [`<percentage>`](/en-US/docs/Web/SVG/Content_type#percentage), or [`<number>`](/en-US/docs/Web/SVG/Content_type#number). The numeric value of the {{domxref("SVGAnimatedLength.baseVal")}} is the y-coordinate of the `<foreignObject>` element in the user coordinate system.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <foreignObject id="object1" x="50" y="75" width="100" height="50">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>This is a foreign object.</p>
      </div>
    </foreignObject>
    <foreignObject id="object2" x="25%" y="50%" width="10%" height="10%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>This is another foreign object.</p>
      </div>
    </foreignObject>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="lightblue" />
  <rect x="0" y="100" width="200" height="100" fill="lightgreen" />
</svg>
```

We can access the computed values of the `height` attributes:

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const heightObject1 = foreignObjects[0].height;
const heightObject2 = foreignObjects[1].height;

console.dir(heightObject1.baseVal.value); // output: 50
console.dir(heightObject2.baseVal.value); // output: 20 (10% of 200)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGForeignObjectElement.width")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
