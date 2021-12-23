---
title: DOMImplementation.hasFeature()
slug: Web/API/DOMImplementation/hasFeature
tags:
  - API
  - DOM
  - DOMImplementation
  - Deprecated
  - Method
  - Reference
browser-compat: api.DOMImplementation.hasFeature
---
{{ApiRef("DOM")}}

{{Deprecated_Header}}

The
**`DOMImplementation.hasFeature()`** method returns a
boolean flag indicating if a given feature is supported. It is
deprecated and modern browsers return `true` in all cases.

The different implementations fairly diverged in what kind of features were reported.
The latest version of the spec settled to force this method to always return
`true`, where the functionality was accurate and in use.

## Syntax

```js
const flag = document.implementation.hasFeature(feature, version);
```

### Parameters

- `feature`
  - : A {{domxref("DOMString")}} representing the feature name.
- `version`
  - : A {{domxref("DOMString")}} representing the version of the specification defining
    the feature.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
