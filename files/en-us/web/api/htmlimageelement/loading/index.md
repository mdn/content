---
title: "HTMLImageElement: loading property"
short-title: loading
slug: Web/API/HTMLImageElement/loading
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.loading
---

{{APIRef("HTML DOM")}}

The **`loading`** property of the {{domxref("HTMLImageElement")}} interface provides a hint to the {{Glossary("user agent")}} on how to handle the loading of the image which is currently outside the window's {{Glossary("visual viewport")}}. This helps to optimize the loading of the document's contents by postponing loading the image until it's expected to be needed, rather than immediately during the initial page load. It reflects the `<img>` element's [`loading`](/en-US/docs/Web/HTML/Reference/Elements/img#loading) content attribute.

## Value

A string whose value is one of `eager` or `lazy`. For their meanings, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#loading) reference.

## Examples

The `addImageToList()` function shown below adds a photo thumbnail to a list of items, using lazy-loading to avoid loading the image from the network until it's actually needed.

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  const newItem = document.createElement("div");
  newItem.className = "photo-item";

  const newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("img")}} element
- [Web performance](/en-US/docs/Learn_web_development/Extensions/Performance) in the MDN Learning Area
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading) in the MDN web performance guide
