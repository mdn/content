---
title: "HTMLAreaElement: hostname property"
short-title: hostname
slug: Web/API/HTMLAreaElement/hostname
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.hostname
---

{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.hostname`** property is a string containing the domain of the URL.

## Value

A string containing the domain of the URL associated with the `area` element.
It can be used as both a setter and getter.

## Examples

```html
<textarea id="log" rows="4" cols="100"></textarea>
<map name="infographic">
  <area
    id="area1"
    shape="rect"
    coords="184,6,253,27"
    href="/en-US/docs/HTMLAreaElement"
    target="_blank"
    alt="Mozilla" />
  <area
    id="area2"
    shape="circle"
    coords="130,136,60"
    href="https://coolexample.com/"
    target="_blank"
    alt="MDN" />
</map>
```

```js
// An element is in the document
const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

const log = document.getElementById("log");
log.textContent = `area1 hostname: ${area1.hostname} \n`; // 'developer.mozilla.org'
log.textContent += `area2 hostname: ${area2.hostname}`; // 'coolexample.com'
```

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
