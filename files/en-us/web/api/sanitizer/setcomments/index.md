---
title: "Sanitizer: setComments() method"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
page-type: web-api-instance-method
browser-compat: api.Sanitizer.setComments
---

{{APIRef("HTML Sanitizer API")}}

The **`setComments()`** method of the {{domxref("Sanitizer")}} interface sets whether comments will be allowed or removed by the sanitizer.

The method sets the [`comments`](/en-US/docs/Web/API/SanitizerConfig#comments) property in this sanitizer's configuration.

## Syntax

```js-nolint
setComments(allow);
```

### Parameters

- `allow`

  - : `true` if comments are allowed, and `false` if they are to be removed.

### Returns

None (`undefined`).

## Examples

### How to sanitize comments

The code below shows the basic usage of the `setComments()` method.

```js
// Create sanitizer (in this case the default)
const sanitizer = new Sanitizer();

// Allow comments
sanitizer.setComments(true);

// Remove comments
sanitizer.setComments(false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
