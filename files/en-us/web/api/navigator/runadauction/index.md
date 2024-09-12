---
title: "Navigator: runAdAuction() method"
short-title: runAdAuction()
slug: Web/API/Navigator/runAdAuction
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.runAdAuction
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`runAdAuction()`** method of the {{domxref("Navigator")}} interface initiates a real-time auction on the seller/publisher site that determines which ad is to be shown in the associated ad space.

When calling `runAdAuction()`, the calling origin does not need to be same-origin with the seller's origin. For example, a seller may wish to call `runAdAuction()` from a publisher's site context.

For more information on ad auctions, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
runAdAuction(options)
```

### Parameters

- `options`
  - : An options object that can contain the following properties:
    - `XXX`
      - : xx GOT HERE

### Return value

A {{jsxref("Promise")}} that fulfills with xx

### Exceptions

xxx

## Examples

See [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction) for example code snippets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
