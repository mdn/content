---
title: "HTMLAreaElement: target property"
short-title: target
slug: Web/API/HTMLAreaElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.target
---

{{ApiRef("HTML DOM")}}

The **`target`** property of the {{domxref("HTMLAreaElement")}} interface is a string that indicates where to display the linked resource.

It reflects the [`target`](/en-US/docs/Web/HTML/Element/area#target) attribute of the {{HTMLElement("area")}} element.

## Value

A string representing the target. Its value can be:

- The name of a {{HTMLElement("frame")}}.
- One of the [keyword with specific values](/en-US/docs/Web/HTML/Element/area#target): `_blank`, `_self`, `_parent`, or `_top`.

## Example

```html
<map name="image-map">
  <area href="www.example.com" target="_top" alt="left" />
</map>
```

```js
const areaElement = document.getElementsByName("image-map")[0].areas[0];
console.log(areaElement.target); // Output: "_top"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLBaseElement.target")}} property
- {{domxref("HTMLFormElement.target")}} property
- {{domxref("HTMLAnchorElement.target")}} property
