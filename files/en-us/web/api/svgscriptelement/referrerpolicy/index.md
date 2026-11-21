---
title: "SVGScriptElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/SVGScriptElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.SVGScriptElement.referrerPolicy
---

{{APIRef("SVG")}}

The **`referrerPolicy`** property of the {{domxref("SVGScriptElement")}} interface represents the [referrer policy](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) used when fetching the script.
The policy controls how much referrer information is sent in the {{HTTPHeader("Referer")}} header with the request.

It reflects the {{SVGAttr("referrerpolicy")}} attribute of the {{SVGElement("script")}} element.

## Value

A string.
Possible values are [`no-referrer`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer), [`no-referrer-when-downgrade`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#no-referrer-when-downgrade), [`origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin), [`origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#origin-when-cross-origin), [`same-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#same-origin), [`strict-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin), [`strict-origin-when-cross-origin`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#strict-origin-when-cross-origin), and [`unsafe-url`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy#unsafe-url).

The property is an empty string (`""`) if the attribute isn't set, or if its value isn't one of the possible values.
In this case, the request uses the document's referrer policy.

## Examples

### Getting and setting the referrer policy

Given the following SVG:

```html live-sample___svgscriptelement-referrerpolicy
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <script id="svg-script"></script>
</svg>
```

```html hidden live-sample___svgscriptelement-referrerpolicy
<pre id="log"></pre>
```

```css hidden live-sample___svgscriptelement-referrerpolicy
svg {
  width: 200px;
  height: 100px;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgscriptelement-referrerpolicy
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can get and set the referrer policy of the script.
The property is an empty string until the attribute is set, and also when the attribute has a value that isn't a valid policy:

```js live-sample___svgscriptelement-referrerpolicy
const script = document.getElementById("svg-script");
log(`referrerPolicy: "${script.referrerPolicy}"`); // referrerPolicy: ""

script.referrerPolicy = "same-origin";
log(`referrerPolicy: "${script.referrerPolicy}"`); // referrerPolicy: "same-origin"

script.setAttribute("referrerpolicy", "not-a-policy");
log(`referrerPolicy: "${script.referrerPolicy}"`); // referrerPolicy: ""
```

{{EmbedLiveSample("svgscriptelement-referrerpolicy", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAElement.referrerPolicy")}}
- {{domxref("SVGFEImageElement.referrerPolicy")}}
- {{domxref("SVGImageElement.referrerPolicy")}}
- {{domxref("HTMLScriptElement.referrerPolicy")}}
- {{HTTPHeader("Referrer-Policy")}} header
