---
title: "Navigator: canLoadAdAuctionFencedFrame() method"
short-title: canLoadAdAuctionFencedFrame()
slug: Web/API/Navigator/canLoadAdAuctionFencedFrame
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.canLoadAdAuctionFencedFrame
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`canLoadAdAuctionFencedFrame()`** method of the {{domxref("Navigator")}} interface returns a boolean value that indicates whether an ad auction-created {{htmlelement("fencedframe")}} (i.e. returned by a {{domxref("Navigator.runAdAuction()")}} call) can be loaded in the current browsing context.

For more information on ad auctions, see [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API).

## Syntax

```js-nolint
canLoadAdAuctionFencedFrame()
```

### Parameters

None.

### Return value

A boolean. Returns `true` if an ad auction-created {{htmlelement("fencedframe")}} can be loaded in the current browsing context, and `false` if not.

The method might return `false` because fenced frames are not supported in the current browser, or because a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is set that disallows frame embedding.

## Examples

In the following example snippet, we test the current context's support for embedding protected audience `<fencedframe>` elements via `canLoadAdAuctionFencedFrame()` and set the auction config options object's `resolveToConfig` property equal to its return value. We then pass the config object into {{domxref("Navigator.runAdAuction()")}} to start an ad auction:

- If `resolveToConfig` is `true`, the `runAdAuction()` promise resolves with a {{domxref("FencedFrameConfig")}} object containing the required information for displaying the winning ad in a `<fencedframe>`.
- If `resolveToConfig` is `false`, the `runAdAuction()`promise resolves with an opaque [URN](/en-US/docs/Web/URI#urns) containing the required information for displaying the winning ad in an `<iframe>`.

```js
const fencedFrameEmbedSupported = navigator.canLoadAdAuctionFencedFrame();

const auctionConfig = {
  // ...

  resolveToConfig: fencedFrameEmbedSupported,
};

navigator.runAdAuction(auctionConfig).then((selectedAd) => {
  if (fencedFrameEmbedSupported) {
    const fencedFrameElem = document.getElementById(
      "protected-audience-fenced-frame",
    );
    fencedFrameElem.config = selectedAd;
  } else {
    const iframeElem = document.getElementById("protected-audience-iframe");
    iframeElem.src = selectedAd;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group)
