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

The **`setDataAttributes()`** method of the {{domxref("Sanitizer")}} interface sets whether [data attributes](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) will be allowed or removed by the sanitizer.

The method sets the [`dataAttributes`](/en-US/docs/Web/API/SanitizerConfig#dataattributes) property in this sanitizer's configuration.

## Syntax

```js-nolint
setDataAttributes(allow);
```

### Parameters

- `allow`
  - : `true` if data attributes are allowed, and `false` if they are to be removed.

### Returns

None (`undefined`).

## Examples

### How to sanitize data attributes

The code below shows the basic usage of the `setDataAttributes()` method.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow data attributes
sanitizer.setDataAttributes(true);

// Remove data attributes
sanitizer.setDataAttributes(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
