---
title: "RealTimeReporting: contributeToHistogram() method"
short-title: contributeToHistogram()
slug: Web/API/RealTimeReporting/contributeToHistogram
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.RealTimeReporting.contributeToHistogram
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`contributeToHistogram()`** method of the
{{domxref("RealTimeReporting")}} interface adds data to a specified bucket as part of a summary report.

## Syntax

```js-nolint
contributeToHistogram(contribution)
```

### Parameters

- `contribution`

  - : An object representing the realtime reporting contribution to send. Properties can include:

    - `bucket`
      - : An integer representing the bucket the contribution should be added to.
    - `priorityWeight`
      - : A floating point number representing the relative priority of this contribution.
    - `latencyThreshold` {{optional_inline}}
      - : An integer represting the latency threashold of the contribution.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the specified `priorityWeight` is equal to or less than `0`.

## Examples

xx

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
