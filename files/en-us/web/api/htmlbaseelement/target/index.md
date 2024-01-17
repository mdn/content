---
title: "HTMLBaseElement: target property"
short-title: target
slug: Web/API/HTMLBaseElement/target
page-type: web-api-instance-property
browser-compat: api.HTMLBaseElement.target
---

{{ApiRef("HTML DOM")}}

The `target` property of the {{domxref("HTMLBaseElement")}} interface is a string that represents default target tab to show resulting output for hyperlinks and form elements. It is a value of [`target`](/en-US/docs/Web/HTML/Element/base#target) attribute of the {{HTMLElement("base")}} element.

## Value

A string that represents target values `_blank`, `_self` (default), `_parent`, `_top`, `framename`.

## Use Case

Knowing the value of the `target` attribute through the `target` property can be useful when we need to dynamically check or modify the default behaviour of hyperlinks and forms based on the `<base>` elements.

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
