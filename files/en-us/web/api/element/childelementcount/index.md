---
title: Element.childElementCount
slug: Web/API/Element/childElementCount
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Element.childElementCount
---
{{ APIRef("DOM") }}

The **`Element.childElementCount`** read-only property
returns the number of child elements of this element.

## Syntax

```js
element.childElementCount;
```

## Example

```js
let sidebar = document.getElementById('sidebar');
if (sidebar.childElementCount > 0) {
  // Do something
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
