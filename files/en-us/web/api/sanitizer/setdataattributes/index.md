---
title: "Sanitizer: setDataAttributes() method"
short-title: setDataAttributes()
slug: Web/API/Sanitizer/setDataAttributes
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Sanitizer.setDataAttributes
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`setDataAttributes()`** method of the {{domxref("Sanitizer")}} interface sets whether all [`data-*` attributes](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) will be allowed by the sanitizer, or if they must be individually specified.

If this is set `true`, then data attributes are automatically allowed without needing to add them individually using {{domxref('Sanitizer.allowAttribute()')}} (or {{domxref('Sanitizer.allowElement()')}} for local attributes).

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameters

- `allow`
  - : `true` if all `data-*` attributes are allowed, and `false` if they must be explicitly specified.

### Return value

`true` if the operation changed the configuration, and `false` if the configuration already set [`dataAttributes`](/en-US/docs/Web/API/SanitizerConfig#dataattributes) to the specified value.

## Examples

### How to sanitize data attributes

The code below shows the basic usage of the `setDataAttributes()` method.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow all data-* attributes
sanitizer.setDataAttributes(true);

// Require data-* attributes be added explicitly
sanitizer.setDataAttributes(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
