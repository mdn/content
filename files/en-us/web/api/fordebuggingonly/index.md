---
title: ForDebuggingOnly
slug: Web/API/ForDebuggingOnly
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ForDebuggingOnly
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`ForDebuggingOnly`** interface of the {{domxref("Protected Audience API", "Protected Audience API", "", "nocode")}} defines methods for reporting auction wins and losses for debugging purposes.

Specifically, this functionality is exposed inside:

- The [`generateBid()`](#) function defined in the buyer's bidding logic JavaScript available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property passed into a {{domxref("Navigator.joinAdInterestGroup", "joinAdInterestGroup()")}} call.
- The [`scoreAd()`](#) function defined in the seller's decision logic JavaScript available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property passed into a {{domxref("Navigator.runAdAuction", "runAdAuction()")}} call.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("ForDebuggingOnly.reportAdAuctionLoss", "reportAdAuctionLoss()")}} {{Experimental_Inline}}
  - : Reports an ad auction loss to a reporting server.
- {{domxref("ForDebuggingOnly.reportAdAuctionWin", "reportAdAuctionWin()")}} {{Experimental_Inline}}
  - : Reports an ad auction win to a reporting server.

## Examples

See the individual method pages for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction)
- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
