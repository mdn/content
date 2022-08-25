---
title: DOMException.code
slug: Web/API/DOMException/code
page-type: web-api-instance-property
tags:
  - API
  - Code
  - DOMException
  - Property
  - Reference
  - deprecated
  - Deprecated
browser-compat: api.DOMException.code
---
{{ APIRef("DOM") }} {{deprecated_header}}

The **`code`** read-only property of the {{domxref("DOMException")}} interface returns one of the legacy [error code constants](/en-US/docs/Web/API/DOMException#error_names), or `0` if none match.

This field is used for historical reasons. New DOM exceptions don't use this anymore: they put this info in the {{domxref("DOMException.name")}} attribute.

## Value

One of the [error code constants](/en-US/docs/Web/API/DOMException#error_names), or `0` if none match.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
