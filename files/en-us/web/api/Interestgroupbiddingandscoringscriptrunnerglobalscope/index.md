---
title: InterestGroupBiddingAndScoringScriptRunnerGlobalScope
slug: Web/API/InterestGroupBiddingAndScoringScriptRunnerGlobalScope
page-type: web-api-interface
status:
  - experimental
browser-compat: api.InterestGroupBiddingAndScoringScriptRunnerGlobalScope
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`InterestGroupBiddingAndScoringScriptRunnerGlobalScope`** interface of the {{domxref("Protected Audience API", "Protected Audience API", "", "nocode")}} exposes interfaces that define debugging reporting functionality and summary reporting functionality exposed inside the user-defined functions included within buyer and seller script runners.

{{InheritanceDiagram}}

## Instance properties

- `InterestGroupBiddingAndScoringScriptRunnerGlobalScope.forDebuggingOnly` {{Experimental_Inline}}
  - : Returns a {{domxref("ForDebuggingOnly")}} object instance containing debugging reporting functionality.
- `InterestGroupBiddingAndScoringScriptRunnerGlobalScope.realTimeReporting` {{Experimental_Inline}}
  - : Returns a {{domxref("RealTimeReporting")}} object instance containing realtime summary reporting functionality.

## Examples

See the individual interface pages for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction)
- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
