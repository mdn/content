---
title: "SVGFEImageElement: preserveAspectRatio property"
short-title: preserveAspectRatio
slug: Web/API/SVGFEImageElement/preserveAspectRatio
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.preserveAspectRatio
---

{{APIRef("SVG")}}

The **`preserveAspectRatio`** read-only property of the {{domxref("SVGFEImageElement")}} interface reflects the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("feImage")}} element.

## Value

An {{domxref("SVGAnimatedPreserveAspectRatio")}} object.

## Example

### Accessing the `preserveAspectRatio` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="image-filter">
      <!-- feImage element with preserveAspectRatio attribute -->
      <feImage
        href="https://via.placeholder.com/150"
        x="0"
        y="0"
        width="150"
        height="150"
        preserveAspectRatio="xMidYMid meet" />
    </filter>
  </defs>

  <!-- Rectangle with the filter applied -->
  <rect
    x="50"
    y="50"
    width="200"
    height="100"
    style="fill:blue;"
    filter="url(#image-filter)" />
</svg>
```

```js
// Select the feImage element
const feImageElement = document.querySelector("feImage");

// Access the preserveAspectRatio property
console.dir(feImageElement.preserveAspectRatio); // Output: SVGAnimatedPreserveAspectRatio object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("preserveAspectRatio")}}
