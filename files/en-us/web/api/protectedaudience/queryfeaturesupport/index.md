---
title: "ProtectedAudience: queryFeatureSupport() method"
short-title: queryFeatureSupport()
slug: Web/API/ProtectedAudience/queryFeatureSupport
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ProtectedAudience.queryFeatureSupport
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`queryFeatureSupport()`** method of the {{domxref("ProtectedAudience")}} interface returns a value indicating support for a specific Protected Audience API feature.

## Syntax

```js-nolint
queryFeatureSupport(feature)
```

### Parameters

- `feature`
  - : A string representing the feature to return support information for. Support-detectable features are indicated in the table below, along with return values.

| `feature`                         | Description                                                                                                                                                                                                                                                                                                                   | Return value                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `adComponentsLimit`               | The maximum number of ad components that can specified in a `joinAdInterestGroup()` method call's [`adComponents`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#adcomponents) option, which can later used to create an ad composed of multiple pieces at bid time (see the `adComponents` option of [`generateBid`](#)) | A number. Current implementations all return `40`, although this may vary in the future. |
| `deprecatedRenderURLReplacements` | Whether the [`deprecatedRenderURLReplacements`](/en-US/docs/Web/API/Navigator/runAdAuction#deprecatedrenderurlreplacements) option can be specified in `runAdAuction()` calls.                                                                                                                                                | A boolean.                                                                               |
| `permitCrossOriginTrustedSignals` | Whether cross-origin trusted signals are permitted (see [Fetching Real-Time Data from a Trusted Server](#) for more information).                                                                                                                                                                                             | A boolean.                                                                               |
| `realTimeReporting`               | Whether {{domxref("RealTimeReporting")}} features are available.                                                                                                                                                                                                                                                              | A boolean.                                                                               |
| `reportingTimeout`                | Whether the [`reportingTimeout`](/en-US/docs/Web/API/Navigator/runAdAuction#reportingtimeout) option can be specified in `runAdAuction()` calls.                                                                                                                                                                              | A boolean.                                                                               |

### Return value

The return value type varies depending on the specified feature (see table above).

## Examples

The following example queries support for both the Protected Audience API, and the `"permitCrossOriginTrustedSignals"` feature:

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
