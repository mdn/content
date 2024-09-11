---
title: "Navigator: protectedAudience property"
short-title: protectedAudience
slug: Web/API/Navigator/protectedAudience
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.protectedAudience
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`protectedAudience`** read-only property of the
{{domxref("Navigator")}} interface returns the current browsing context's {{domxref("ProtectedAudience")}} object, which can be used to determine support for the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) and specific features.

## Value

A {{domxref("ProtectedAudience")}} object instance.

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
