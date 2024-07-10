---
title: "HTMLBaseElement: href property"
short-title: href
slug: Web/API/HTMLBaseElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLBaseElement.href
---

{{APIRef("HTML DOM")}}

The **`href`** property of the {{domxref("HTMLBaseElement")}} interface contains a string that is the URL to use as the base for [relative URLs](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls), such as links pointing to a fragment in the document (`<a href="#example">`).

It reflects the `href` attribute of the {{HTMLElement("base")}} element.

## Value

A string that contains a URL, or the empty string (`""`) if the `<base>` element does not include the `href` attribute.

## Examples

```html
<base href="https://developer.mozilla.org/example" />
```

```js
const base = document.getElementsByTagName("base")[0];
console.log(base.href); // 'https://developer.mozilla.org/example'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
