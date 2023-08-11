---
title: "Navigator: javaEnabled() method"
short-title: javaEnabled()
slug: Web/API/Navigator/javaEnabled
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Navigator.javaEnabled
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

This method always returns false.

## Syntax

```js-nolint
javaEnabled()
```

### Parameters

None.

### Return value

The boolean value `false`.

## Examples

```js
if (window.navigator.javaEnabled()) {
  // code will never be executed; the condition is always false
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
