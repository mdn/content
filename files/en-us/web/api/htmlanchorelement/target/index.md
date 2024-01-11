---
title: "HTMLAnchorElement: target property"
short-title: target
slug: Web/API/HTMLAnchorElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.target
---

{{ApiRef("HTML DOM")}}

The **`target`** property of the {{domxref("HTMLAnchorElement")}} interface is a string that indicates where to display the linked resource.

It reflects the `target` attribute of the {{HTMLElement("a")}} element.

## Value

A string that indicates where to display the linked resource, or the empty string (`""`) if there is no `target` attribute.

## Example

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```html
<a href="www.example2.com" class="link2" target="_parent">example2</a>
```

```js
const link = document.querySelector(".link1");
console.log(link); // output:- "_blank"
```

## Result

{{EmbedLiveSample("Example",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLBaseElement.target")}} property
- {{domxref("HTMLFormElement.target")}} property
- {{domxref("HTMLAreaElement.target")}} property
