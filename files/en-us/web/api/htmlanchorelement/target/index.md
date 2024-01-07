---
title: "HTMLAnchorElement: target property"
short-title: target
slug: Web/API/HTMLAnchorElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.target
---

{{ApiRef("HTML DOM")}}

The **`target`** property of the {{domxref("HTMLAnchorElement")}} interface is a string that indicates where to display the linked resource.

It reflects the `target` attribute of the {{HTMLElement("a")}} element and is the empty string (`""`) if there is no `hreflang` element.

## Value

A string that indicates where to display the linked resource, or the empty string (`""`) if there is no `hreflang` element.

## Example

```html
<a href="www.example.com" class="link" target="_blank">example</a>
```

```js
const link = document.querySelector('.link');
console.log(link); // output:- "_blank"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("a")}} property
