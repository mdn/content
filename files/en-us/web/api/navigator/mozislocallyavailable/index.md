---
title: Navigator.mozIsLocallyAvailable()
slug: Web/API/Navigator/mozIsLocallyAvailable
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Navigator
  - Non-standard
  - Deprecated
browser-compat: api.Navigator.mozIsLocallyAvailable
---
{{APIRef("HTML DOM")}} {{non-standard_header}}{{deprecated_header}}

The **`Navigator.mozIsLocallyAvailable()`** method allows
add-ons to determine whether or not a given resource is available.

> **Note:** Security exceptions can occur if the requested URI is not from the same origin.

## Syntax

```js
mozIsLocallyAvailable(uri, ifOffline)
```

### Parameters

- `uri`
  - : The URI of the resource whose availability is to be checked, as a string.
- `ifOffline`
  - : Allows you to specify whether or not the offline resources cache should be checked;
    specify `true` to consider the offline resources cache.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const available = navigator.mozIsLocallyAvailable("my-image-file.png", true);
if (available) {
  /* the offline resource is present */
} else {
  console.log("Certain needed resources are not available offline");
}
```

## Specifications

Not part of any specifications.

## Browser compatibility

{{Compat}}
