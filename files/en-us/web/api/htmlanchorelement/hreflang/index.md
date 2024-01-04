---
title: 'HTMLAnchorElement: hreflang property'
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.hreflang
---

{{ApiRef("HTML DOM")}}

The **`hreflang`** property of the {{domxref("HTMLAnchorElement")}} interface contains a string that is the language of the linked resource.

It reflects the `hreflang` attribute of the {{HTMLElement("a")}} element and is the empty string (`""`) if there are none.

Web browsers and search engines may use this information to better understand the language of the linked content, but they are not required to follow it. The value provided for the `hreflang` attribute must adhere to format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

Despite the presence of the `hreflang` attribute, web browsers are instructed not to rely solely on this when fetching the linked resource. Instead, they should use language information directly associated with the resource (e.g., through HTTP headers) to determine its language.

## Value

A string that contains a language tag, or the empty string (`""`) if there is no `hreflang` element.

## Example

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN">Example Link</a>
```

```js
const anchorElement = document.getElementById('exampleLink');
console.log(anchorElement.hreflang); // Outputs: "en-IN"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.hreflang")}} property
