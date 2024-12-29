---
title: "SVGFEImageElement: href property"
short-title: href
slug: Web/API/SVGFEImageElement/href
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.href
---

{{APIRef("SVG")}}

The **`href`** read-only property of the {{domxref("SVGFEImageElement")}} interface reflects the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} {{deprecated_inline}} attribute of the given {{SVGElement("feImage")}} element.

## Value

An {{domxref("SVGAnimatedString")}} object.

## Examples

### Accessing the `href` property

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="image-filter">
      <!-- feImage element referencing an external image -->
      <feImage
        href="https://via.placeholder.com/150"
        x="0"
        y="0"
        width="150"
        height="150" />
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

// Access the href property
console.log(feImageElement.href.baseVal); // Output: "https://via.placeholder.com/150"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
