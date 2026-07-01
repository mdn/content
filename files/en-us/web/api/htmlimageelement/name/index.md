---
title: "HTMLImageElement: name property"
short-title: name
slug: Web/API/HTMLImageElement/name
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.name
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ **`name`** property of the {{domxref("HTMLImageElement")}} interface specifies a name for the element. It reflects the `<img>` element's [`name`](/en-US/docs/Web/HTML/Reference/Elements/img#name) content attribute. It has been replaced by the {{domxref("Element.id", "id")}} property available on all elements, and is kept only for compatibility reasons.

## Value

A string providing a name by which the image can be referenced.

## Examples

### Setting the name attribute

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
img.name = "example-img";
```

Instead of doing this, set the `id` property instead:

```js
img.id = "example-img";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
