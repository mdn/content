---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Navigator
  - Property
  - Reference
  - Deprecated
browser-compat: api.Navigator.doNotTrack
---
{{ApiRef("HTML DOM")}}{{Deprecated_header}}

The **`Navigator.doNotTrack`** property returns the user's Do Not Track setting, which indicates whether the user is requesting web sites and advertisers to not track them.

The value of the property reflects that of the {{httpheader("DNT")}} HTTP header, i.e. values of `"1"`, `"0"`, or `"unspecified"`.

## Value

A number.

## Examples

```js
console.log(navigator.doNotTrack);
// prints "1" if DNT is enabled; "0" if the user opted-in for tracking; otherwise this is "unspecified"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("DNT")}} HTTP header
