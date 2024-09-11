---
title: ProtectedAudience
slug: Web/API/ProtectedAudience
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ProtectedAudience
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`ProtectedAudience`** interface of the {{domxref("Protected Audience API", "Protected Audience API", "", "nocode")}} can be used to determine support for the API itself and specific features.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("ProtectedAudience.queryFeatureSupport", "queryFeatureSupport()")}} {{Experimental_Inline}}
  - : Returns a value indicating support for a specific Protected Audience API feature.

## Examples

The following example queries support for both the Protected Audience API, and the `"permitCrossOriginTrustedSignals"` feature (see [Fetching Real-Time Data from a Trusted Server](#) for more information):

```js
if (
  navigator.protectedAudience &&
  navigator.protectedAudience.queryFeatureSupport(
    "permitCrossOriginTrustedSignals",
  )
) {
  // Use cross-origin trusted signals
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
