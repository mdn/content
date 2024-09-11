---
title: "Navigator: createAuctionNonce() method"
short-title: createAuctionNonce()
slug: Web/API/Navigator/createAuctionNonce
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.createAuctionNonce
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`createAuctionNonce()`** method of the {{domxref("Navigator")}} interface generates an auction nonce, which is included in the configuration object of a {{domxref("Navigator.runAdAuction()")}} call to prevent unintended replaying of additional bids.

The returned nonce is a [version 4 Universally Unique IDentifier (UUID)](https://www.ietf.org/rfc/rfc4122.txt#version-4-uuid).

For more information on ad auctions, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
createAuctionNonce()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a string representing a [version 4 UUID](https://www.ietf.org/rfc/rfc4122.txt#version-4-uuid).

## Examples

```js
const nonce = await navigator.createAuctionNonce();

const auctionConfig = {
  // ...

  auctionNonce: result,
};

const selectedAd = navigator.runAdAuction(auctionConfig);
const fencedFrame = document.getElementById("protected-audience-fenced-frame");
fencedFrame.config = selectedAd;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group)
