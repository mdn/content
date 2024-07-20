---
title: "HTMLAnchorElement: hreflang property"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.hreflang
---

{{ApiRef("HTML DOM")}}

The **`hreflang`** property of the {{domxref("HTMLAnchorElement")}} interface is a string that is the language of the linked resource.

It reflects the `hreflang` attribute of the {{HTMLElement("a")}} element and is the empty string (`""`) if there is no `hreflang` element.

Web browsers and search engines may use this information to understand the language of the linked content better, but they are not required to follow it. The value provided for the `hreflang` attribute adheres to the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. If not, it is ignored.

Web browsers do not rely solely on the `hreflang` attribute after fetching the linked resource. Instead, they use language information directly associated with the resource (e.g., through HTTP headers) to determine its language.

## Value

A string that contains a language tag, or the empty string (`""`) if there is no `hreflang` element.

## Example

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN">Example Link</a>
<p class="hreflang"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".hreflang");
console.log(anchorElement.hreflang); // Outputs: "en-IN"
pTag.textContent = anchorElement.hreflang;
```

## Result

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.hreflang")}} property
