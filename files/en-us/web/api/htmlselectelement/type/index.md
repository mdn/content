---
title: HTMLSelectElement.type
slug: Web/API/HTMLSelectElement/type
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLSelectElement.type
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.type`**
read-only property returns the form control's `type`.

## Value

One of the following:

- `"select-multiple"` if multiple values can be selected.
- `"select-one"` if only one value can be selected.

## Examples

```js
switch (select.type) {
  case 'select-multiple':
    // Multiple values may be selected
    break;
  case 'select-one':
    // Only one value may be selected
    break;
  default:
    // Non-standard value (or this isn't a SELECT element)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} HTML element, implementing this interface.
