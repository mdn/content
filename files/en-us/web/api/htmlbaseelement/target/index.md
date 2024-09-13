---
title: "HTMLBaseElement: target property"
short-title: target
slug: Web/API/HTMLBaseElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLBaseElement.target
---

{{ApiRef("HTML DOM")}}

The `target` property of the {{domxref("HTMLBaseElement")}} interface is a string that represents the default target tab to show the resulting output for hyperlinks and form elements.

It reflects the [`target`](/en-US/docs/Web/HTML/Element/base#target) attribute of the {{HTMLElement("base")}} element.

## Value

A string representing the target. Its value can be:

- The name of a {{HTMLElement("frame")}}.
- One of the [keyword with specific values](/en-US/docs/Web/HTML/Element/base#target): `_blank`, `_self`, `_parent`, or `_top`.

## Example

```html
<head>
  <base target="_top" />
</head>
```

```js
const baseElement = document.getElementsByTagName("base")[0];
console.log(baseElement.target); // Output: '_top'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.target")}} property
- {{domxref("HTMLAreaElement.target")}} property
- {{domxref("HTMLFormElement.target")}} property
