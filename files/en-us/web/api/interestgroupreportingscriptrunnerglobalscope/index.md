---
title: InterestGroupReportingScriptRunnerGlobalScope
slug: Web/API/InterestGroupReportingScriptRunnerGlobalScope
page-type: web-api-interface
status:
  - experimental
browser-compat: api.InterestGroupReportingScriptRunnerGlobalScope
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`InterestGroupReportingScriptRunnerGlobalScope`** interface of the {{domxref("Protected Audience API", "Protected Audience API", "", "nocode")}} defines reporting functionality exposed inside the user-defined functions included within buyer and seller script runners.

Specifically, this functionality is exposed inside:

- The [`reportWin()`](#) function that reports an auction win to the buyer. This is defined in the bidding logic JavaScript available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property passed into a {{domxref("Navigator.joinAdInterestGroup", "joinAdInterestGroup()")}} call.
- The [`reportResult()`](#) function that reports the auction results to the seller. This is defined in the decision logic JavaScript available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property passed into a {{domxref("Navigator.runAdAuction", "runAdAuction()")}} call.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("InterestGroupReportingScriptRunnerGlobalScope.sendReportTo", "sendReportTo()")}} {{Experimental_Inline}}
  - : Sends a request to a reporting server with report data included as URL parameters.
- {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} {{Experimental_Inline}}
  - : Registers a specialized ad [beacon](/en-US/docs/Web/API/Beacon_API) to send your reporting data to in response to a custom event occurring.
- {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdMacro", "registerAdMacro()")}} {{Experimental_Inline}}
  - : Registers substitution macro name/value pairs. The macro names can then be included in the [`destinationURL`](/en-US/docs/Web/API/Fence/reportEvent#destinationurl) of the {{domxref("Fence.reportEvent()")}} call that fired the custom event. The names will be substituted with the specified values.

## Examples

See the individual method pages for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
