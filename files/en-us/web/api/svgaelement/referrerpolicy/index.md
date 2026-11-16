---
title: "SVGAElement: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/SVGAElement/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.SVGAElement.referrerPolicy
---

{{APIRef("SVG")}}

The **`referrerPolicy`** property of the {{domxref("SVGAElement")}} interface represents the [referrer policy](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) used when following the link.
The policy controls how much referrer information is sent in the {{HTTPHeader("Referer")}} header with the request.

It reflects the {{SVGAttr("referrerpolicy")}} attribute of the {{SVGElement("a")}} element.

## Value

A string.
Possible values are `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `same-origin`, `strict-origin`, `strict-origin-when-cross-origin`, and `unsafe-url`.
For their meanings, see the SVG {{SVGAttr("referrerpolicy")}} attribute.

The property is an empty string (`""`) if the attribute isn't set, or if its value isn't one of the possible values.
In this case, the request uses the document's referrer policy instead.

## Examples

### Getting and setting the referrer policy

Given the following SVG:

```html live-sample___svgaelement-referrerpolicy
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-referrerpolicy
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-referrerpolicy
svg {
  width: 200px;
  height: 30px;
}
svg a text {
  fill: blue;
  text-decoration: underline;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgaelement-referrerpolicy
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can get and set the referrer policy of the link.
The property is an empty string until the attribute is set, and also when the attribute has a value that isn't a valid policy:

```js live-sample___svgaelement-referrerpolicy
const link = document.getElementById("link");
log(`referrerPolicy: "${link.referrerPolicy}"`); // referrerPolicy: ""

link.referrerPolicy = "no-referrer";
log(`referrerPolicy: "${link.referrerPolicy}"`); // referrerPolicy: "no-referrer"

link.setAttribute("referrerpolicy", "not-a-policy");
log(`referrerPolicy: "${link.referrerPolicy}"`); // referrerPolicy: ""
```

{{EmbedLiveSample("svgaelement-referrerpolicy", "100%", "160")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEImageElement.referrerPolicy")}}
- {{domxref("SVGImageElement.referrerPolicy")}}
- {{domxref("SVGScriptElement.referrerPolicy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{HTTPHeader("Referrer-Policy")}} header
