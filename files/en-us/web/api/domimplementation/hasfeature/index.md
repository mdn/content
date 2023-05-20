---
title: "DOMImplementation: hasFeature() method"
short-title: hasFeature()
slug: Web/API/DOMImplementation/hasFeature
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.DOMImplementation.hasFeature
---

{{ApiRef("DOM")}}{{Deprecated_Header}}

The
**`DOMImplementation.hasFeature()`** method returns a
boolean flag indicating if a given feature is supported. It is
deprecated and modern browsers return `true` in all cases.

The different implementations fairly diverged in what kind of features were reported.
The latest version of the spec settled to force this method to always return
`true`, where the functionality was accurate and in use.

## Syntax

```js-nolint
hasFeature(feature, version)
```

### Parameters

- `feature`
  - : A string representing the feature name.
- `version`
  - : A string representing the version of the specification defining
    the feature.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
