---
title: "ForDebuggingOnly: reportAdAuctionLoss() method"
short-title: reportAdAuctionLoss()
slug: Web/API/ForDebuggingOnly/reportAdAuctionLoss
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ForDebuggingOnly.reportAdAuctionLoss
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`reportAdAuctionLoss()`** method of the
{{domxref("ForDebuggingOnly")}} interface reports an ad auction loss to a reporting server.

This method is exposed inside the [`generateBid()`](#) and [`scoreAd()`](#) user-defined functions, and is intended for debugging purposes only.

## Syntax

```js-nolint
reportAdAuctionLoss(url)
```

### Parameters

- `url`

  - : A string representing the URL to send the report to; the browser makes a [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request to the `url` when the method is invoked. The URL should use the HTTPS scheme, otherwise a failure should be reported back to the reporting server. Any data you wish to send with the report can be included as URL parameters with their values set to special placeholders.

    > [!NOTE]
    > This URL needs to be [enrolled](/en-US/docs/Web/API/Protected_Audience_API#enrollment_and_local_testing) before it can be used in reporting.

The placeholders available to use in the `url` are as follows. These will be automatically replaced with the corresponding value from the auction:

- `${winningBid}`

  - : The value of the winning bid.

- `${winningBidCurrency}`

  - : If the auction has a [`sellerCurrency`](/en-US/docs/Web/API/Navigator/runAdAuction#sellercurrency) configured, this will be its currency tag; otherwise it is set to `???`, which denotes that it is in the bidder's original currency.

- `${madeWinningBid}`

  - : A boolean value representing whether the owner of this interest group made the winning bid, either via the current interest group, or another interest group with the same owner.

- `${highestScoringOtherBid}`

  - : The value of the bid that was scored second highest by the seller's `scoreAd()` script. Note that this may not be the second highest bid value, since scores and bids may be independent. This value comes from and is only reported in component auctions but not top-level auctions, and is not reported to losing bidders.

- `${highestScoringOtherBidCurrency}`

  - : The currency of `highestScoringOtherBid`. If the auction has a `sellerCurrency` configured, this will be its currency tag; otherwise it is set to `???`, which denotes that it is in the bidder's original currency.

- `${madeHighestScoringOtherBid}`

  - : A boolean value representing whether the owner of this interest group made the `${highestScoringOtherBid}` bid, either via the current interest group, or another interest group with the same owner. This value comes from and is only reported in component auctions but not top-level auctions, and is not reported to losing bidders. If there is a tie for `${highestScoringOtherBid}` between more than one owner, this value is set to `false` for all of them.

- `${topLevelWinningBid}`

  - : The value of the bid that won the top-level auction. This value is only reported to component sellers.

- `${topLevelWinningBidCurrency}`

  - : The currency of `topLevelWinningBid`. If the top-level auction has a `sellerCurrency` configured, this will be its currency tag; otherwise it is set to `???`, which denotes that it is in the bidder's original currency.

- `${rejectReason}`

  - : The seller can optionally add a `rejectReason` field to its `scoreAd()` return object to convey to the bidder a more detailed reason why the bid was rejected. A component auction's bidders only get reject reasons from its component seller, but not reject reasons from the top-level seller. The reject reason returned by `scoreAd()` must be one of:

    - `"not-available"`
      - : The default value when a bid was not rejected, was rejected but the seller didn't provide a reject reason, or the reason provided wasn't one of the below values.
    - `"invalid-bid"`
      - : xx
    - `"bid-below-auction-floor"`
      - : xx
    - `"pending-approval-by-exchange"`
      - : xx
    - `"disapproved-by-exchange"`
      - : xx
    - `"blocked-by-publisher"`
      - : xx
    - `"language-exclusions"`
      - : xx
    - `"category-exclusions"`
      - : xx

[EDITORIAL: I CAN'T FIND A DEFINITION OF THESE REASONS ANYWHERE]

### Return value

None (`undefined`).

## Examples

```js
generateBid(interestGroup, auctionSignals, perBuyerSignals,
    trustedBiddingSignals, browserSignals, directFromSellerSignals) {
  // …
  forDebuggingOnly.reportAdAuctionLoss("https://buyer.com/debug_loss_report");
  forDebuggingOnly.reportAdAuctionWin("https://buyer.com/debug_win_report?winningBid=${winningBid}");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ForDebuggingOnly.reportAdAuctionWin()")}}
- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
