---
title: "InterestGroupReportingScriptRunnerGlobalScope: sendReportTo() method"
short-title: sendReportTo()
slug: Web/API/InterestGroupReportingScriptRunnerGlobalScope/sendReportTo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InterestGroupReportingScriptRunnerGlobalScope.sendReportTo
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`sendReportTo()`** method of the
{{domxref("InterestGroupReportingScriptRunnerGlobalScope")}} interface sends a request to a reporting server with report data included as URL parameters.

## Syntax

```js-nolint
sendReportTo(url)
```

### Parameters

- `url`

  - : The URL to send the request to. The URL must use the HTTPS scheme, and `sendReportTo()` can only be called once per script runner. The browser makes a [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request to the `url` when the method is invoked.

    > [!NOTE]
    > This URL needs to be [enrolled](/en-US/docs/Web/API/Protected_Audience_API#enrollment_and_local_testing) before it can be used in reporting.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the URL scheme is not HTTPS, or if `sendReportTo()` has already been called inside the same script runner context.

## Examples

### Buyer result reporting

When the buyer runs {{domxref("Navigator.joinAdInterestGroup()")}} to request that the user's browser join an interest group, it passes in a [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property containing the URL of the buyer's bidding logic, which can define a [`reportWin()`](#) function that serves to report an auction win to the buyer.

Let's look at a `reportWin()` example:

```js
function reportWin(
  auctionSignals,
  perBuyerSignals,
  sellerSignals,
  browserSignals,
) {
  sendReportTo(
    `${browserSignals.interestGroupOwner}/reporting?bid=${browserSignals.bid}`,
  );
}
```

Inside the function, we call `sendReportTo()`. The URL is composed of the `interestGroupOwner` URL, plus a `/reporting` slug, plus a `bid` parameter equal to the winning bid value.

The browser makes a `GET` request to the reporting URL when it starts to render the ad.

### Seller result reporting

When the seller runs {{domxref("Navigator.RunAdAuction()")}} to start off the auction process, it passes in a [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property containing the URL of the seller's scoring logic, which can define a [`reportResult()`](#) function that serves to report the auction results to the seller.

The following shows a minimal `reportResult()` example:

```js
function reportResult(auctionConfig, browserSignals) {
  sendReportTo(`${auctionConfig.seller}/reporting?bid=${browserSignals.bid}`);
}
```

We call the same `sendReportTo()` method to report results to the seller as we do when reporting auction success to the winning buyer, and it works in exactly the same way in this context. The only differences are the available arguments passed in that can be used to assemble the parameters in the reporting URL, and the time that the function is run — the `reportResult()` function's `sendReportTo()` call is run as soon as the winning bid is calculated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
