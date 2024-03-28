---
title: "HTMLAnchorElement: type property"
short-title: type
slug: Web/API/HTMLAnchorElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.type
---

{{ApiRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLAnchorElement")}} interface is a string that indicates the MIME type of the linked resource.

It reflects the `type` attribute of the {{HTMLElement("a")}} element.

## Value

A string.

## Example

```html
<a id="exampleLink" href="https://example.com" type="text/html">Example Link</a>
<p class="type"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".type");
console.log(anchorElement.type); // Output: "text/html"
pTag.textContent = anchorElement.type;
```

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.type")}} property
- {{domxref("HTMLSourceElement.type")}} property
- {{domxref("HTMLEmbedElement.type")}} property
