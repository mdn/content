---
title: "Protected Audience API: Reporting auction results"
slug: Web/API/Protected_Audience_API/Report_auction_results
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

This article explains how report the results of [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) auctions.

## Process summary

When an in-browser [ad auction has been run](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction), and a winning ad has been chosen, the results of the auction can be reported back to the seller and the winning buyer via author-defined functions located inside the seller's decision logic and the buyer's bidding logic.

- The buyer's bidding logic JavaScript, available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) property passed into a `joinAdInterestGroup()` call, can contain a [`ReportWin()`](#) function that serves to report an auction win to the buyer.
- The seller's bidding logic JavaScript, available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator.runAdAuction#decisionLogicURL) property passed into a `runAdAuction()` call, can contain a [`ReportResult()`](#) function that report the auction results to the seller.
