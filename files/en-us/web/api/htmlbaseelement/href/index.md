---
title: "HTMLBaseElement: href property"
short-title: href
slug: Web/API/HTMLBaseElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLBaseElement.href
---

{{APIRef("HTML DOM")}}

The **`href`** property of the {{domxref("HTMLBaseElement")}} interface contains a string that is the URL to use as the base for relative URLs, like links pointing to a fragment in the document (`<a href="#example">`).

It reflects the `href` attribute of the {{HTMLElement("base")}} element and is the empty string (`""`) if there are none.

## Value

A string that contains a URL, or the empty string (`""`) if the `<base>` element does not include the `href` attribute.

## Examples

```html
<base href="https://developer.mozilla.org/example" />
```

```js
const base = document.getElementsByTag("base")[0];
console.log(base.href); // 'https://developer.mozilla.org/example'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
