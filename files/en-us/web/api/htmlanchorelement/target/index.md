---
title: "HTMLAnchorElement: target property"
short-title: target
slug: Web/API/HTMLAnchorElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.target
---

{{ApiRef("HTML DOM")}}

The **`target`** property of the {{domxref("HTMLAnchorElement")}} interface is a string that indicates where to display the linked resource.

It reflects the [`target`](/en-US/docs/Web/HTML/Element/a#target) attribute of the {{HTMLElement("a")}} element.

## Value

A string representing the target. Its value can be:

- The name of a {{HTMLElement("frame")}}.
- One of the [keyword with specific values](/en-US/docs/Web/HTML/Element/a#target): `_blank`, `_self`, `_parent`, or `_top`.

## Example

```html
<a href="www.example1.com" class="link1" target="_blank">example1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // output: "_blank"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLBaseElement.target")}} property
- {{domxref("HTMLFormElement.target")}} property
- {{domxref("HTMLAreaElement.target")}} property
