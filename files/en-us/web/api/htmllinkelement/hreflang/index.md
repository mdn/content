---
title: "HTMLLinkElement: hreflang property"
short-title: hreflang
slug: Web/API/HTMLLinkElement/hreflang
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.hreflang
---

{{APIRef("HTML DOM")}}

The **`hreflang`** property of the {{domxref("HTMLLinkElement")}} interface is used to indicate the language and the geographical targeting of a page. This hint can be used by browsers to select the more appropriate page or to improve {{Glossary("SEO")}}.

It reflects the `hreflang` attribute of the {{HTMLElement("link")}} element and is the empty string (`""`) if there is no `hreflang` attribute.

## Value

A string that contains a language tag, or the empty string (`""`) if there is no `hreflang` attribute.

## Example

```html
<link
  rel="alternate"
  href="www.example.com/fr/html"
  hreflang="fr"
  type="text/html"
  title="French HTML" />
<p class="tag"></p>
```

```css
.tag {
  margin-left: 20px;
  font: bold;
  font-size: 24px;
}
```

```js
const myLink = document.querySelector("link");
const pTag = document.querySelector(".tag");
pTag.textContent = myLink.hreflang;
```

## Results

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.hreflang")}} property
