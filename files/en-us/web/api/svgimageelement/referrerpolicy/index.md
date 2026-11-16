---
title: "SVGImageElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/SVGImageElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.SVGImageElement.referrerPolicy
---

{{APIRef("SVG")}}

The **`referrerPolicy`** property of the {{domxref("SVGImageElement")}} interface represents the [referrer policy](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) used when fetching the image.
The policy controls how much referrer information is sent in the {{HTTPHeader("Referer")}} header with the request.

It reflects the {{SVGAttr("referrerpolicy")}} attribute of the {{SVGElement("image")}} element.

## Value

A string.
Possible values are [`no-referrer`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer), [`no-referrer-when-downgrade`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer-when-downgrade), [`origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin), [`origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin-when-cross-origin), [`same-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#same-origin), [`strict-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin), [`strict-origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin-when-cross-origin), and [`unsafe-url`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#unsafe-url).

The property is an empty string (`""`) if the attribute isn't set, or if its value isn't one of the possible values.
In this case, the request uses the document's referrer policy.

## Examples

### Getting and setting the referrer policy

Given the following SVG:

```html live-sample___svgimageelement-referrerpolicy
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <image id="logo" width="100" height="100" />
</svg>
```

```html hidden live-sample___svgimageelement-referrerpolicy
<pre id="log"></pre>
```

```css hidden live-sample___svgimageelement-referrerpolicy
svg {
  width: 200px;
  height: 100px;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgimageelement-referrerpolicy
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can get and set the referrer policy of the image.
The property is an empty string until the attribute is set, and also when the attribute has a value that isn't a valid policy:

```js live-sample___svgimageelement-referrerpolicy
const image = document.getElementById("logo");
log(`referrerPolicy: "${image.referrerPolicy}"`); // referrerPolicy: ""

image.referrerPolicy = "no-referrer";
log(`referrerPolicy: "${image.referrerPolicy}"`); // referrerPolicy: "no-referrer"

image.setAttribute("referrerpolicy", "not-a-policy");
log(`referrerPolicy: "${image.referrerPolicy}"`); // referrerPolicy: ""
```

{{EmbedLiveSample("svgimageelement-referrerpolicy", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAElement.referrerPolicy")}}
- {{domxref("SVGFEImageElement.referrerPolicy")}}
- {{domxref("SVGScriptElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
- {{HTTPHeader("Referrer-Policy")}} header
