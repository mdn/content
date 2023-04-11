---
title: "SVGClipPathElement: transform property"
short-title: transform
slug: Web/API/SVGClipPathElement/transform
page-type: web-api-instance-property
browser-compat: api.SVGClipPathElement.transform
---

{{APIRef("SVG")}}

The read-only **`transform`** property of the {{domxref("SVGClipPathElement")}} interface reflects the {{SVGAttr("transform")}} attribute of a {{SVGElement("clipPath")}} element, that is a list of transformations applied to the element.

## Value

A {{domxref("SVGTransformList")}}.

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<div>
  <svg viewBox="0 0 100 100" width="200" height="200">
    <clipPath
      id="clip1"
      clipPathUnits="objectBoundingBox"
      transform="skewX(40) scale(1 0.5)">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <rect id="r1" x="0" y="0" width="100" height="100" />

    <use clip-path="url(#clip1)" xlink:href="#r1" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const translateType = [
  "unknown",
  "matrix()",
  "translate()",
  "scale()",
  "rotate()",
  "skewx()",
  "skewy()",
];

const clipPath1 = document.getElementById("clip1");

const log = document.getElementById("log");

let result = "The following transformation have been applied:\n";
for (const transform of clipPath1.transform.baseVal) {
  result += `- A transform of type '${translateType[transform.type]}' found.\n`;
}

log.textContent = result;
```

{{EmbedLiveSample("Examples", "280", "280")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
