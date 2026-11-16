---
title: "SVGFEImageElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/SVGFEImageElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.SVGFEImageElement.referrerPolicy
---

{{APIRef("SVG")}}

The **`referrerPolicy`** property of the {{domxref("SVGFEImageElement")}} interface represents the [referrer policy](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) used when fetching the image.
The policy controls how much referrer information is sent in the {{HTTPHeader("Referer")}} header with the request.

It reflects the {{SVGAttr("referrerpolicy")}} attribute of the {{SVGElement("feImage")}} element.

## Value

A string.
Possible values are [`no-referrer`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer), [`no-referrer-when-downgrade`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer-when-downgrade), [`origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin), [`origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin-when-cross-origin), [`same-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#same-origin), [`strict-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin), [`strict-origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin-when-cross-origin), and [`unsafe-url`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#unsafe-url).

The property is an empty string (`""`) if the attribute isn't set, or if its value isn't one of the possible values.
In this case, the request uses the document's referrer policy.

## Examples

### Getting and setting the referrer policy

Given the following SVG:

```html live-sample___svgfeimageelement-referrerpolicy
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <filter id="texture">
    <feImage id="texture-image" />
  </filter>
  <rect width="100" height="100" filter="url(#texture)" />
</svg>
```

```html hidden live-sample___svgfeimageelement-referrerpolicy
<pre id="log"></pre>
```

```css hidden live-sample___svgfeimageelement-referrerpolicy
svg {
  width: 200px;
  height: 100px;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgfeimageelement-referrerpolicy
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can get and set the referrer policy of the filter image.
The property is an empty string until the attribute is set, and also when the attribute has a value that isn't a valid policy:

```js live-sample___svgfeimageelement-referrerpolicy
const feImage = document.getElementById("texture-image");
log(`referrerPolicy: "${feImage.referrerPolicy}"`); // referrerPolicy: ""

feImage.referrerPolicy = "strict-origin";
log(`referrerPolicy: "${feImage.referrerPolicy}"`); // referrerPolicy: "strict-origin"

feImage.setAttribute("referrerpolicy", "not-a-policy");
log(`referrerPolicy: "${feImage.referrerPolicy}"`); // referrerPolicy: ""
```

{{EmbedLiveSample("svgfeimageelement-referrerpolicy", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAElement.referrerPolicy")}}
- {{domxref("SVGImageElement.referrerPolicy")}}
- {{domxref("SVGScriptElement.referrerPolicy")}}
- {{HTTPHeader("Referrer-Policy")}} header
