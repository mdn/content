---
title: RealTimeReporting
slug: Web/API/RealTimeReporting
page-type: web-api-interface
status:
  - experimental
browser-compat: api.RealTimeReporting
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`RealTimeReporting`** interface of the {{domxref("Protected Audience API", "Protected Audience API", "", "nocode")}} defines the {{domxref("RealTimeReporting.contributeToHistogram", "contributeToHistogram()")}} method for real-time summary reporting.

Specifically, this functionality is exposed inside:

- The [`generateBid()`](#) and [`reportWin()`](#) functions defined in the buyer's bidding logic JavaScript available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property passed into a {{domxref("Navigator.joinAdInterestGroup", "joinAdInterestGroup()")}} call.
- The [`scoreAd()`](#) and [`reportResult()`](#) functions defined in the seller's decision logic JavaScript available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property passed into a {{domxref("Navigator.runAdAuction", "runAdAuction()")}} call.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("RealTimeReporting.contributeToHistogram", "contributeToHistogram()")}} {{Experimental_Inline}}
  - : Adds data to a specified bucket as part of a summary report.

## Examples

See the individual method pages for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction)
- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
