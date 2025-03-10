---
title: "RTCIceCandidatePairStats: state property"
short-title: state
slug: Web/API/RTCIceCandidatePairStats/state
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_candidate-pair.state
---

{{APIRef("WebRTC")}}

The **`state`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the state of the [checklist](#ice_check_lists) of which the candidate pair is a member.

## Value

A string whose value is one of the following:

- `failed`
  - : A check for this pair has been performed but failed.
    A failure can occur either because no response was received or because the response indicated that an unrecoverable error occurred.
- `frozen`
  - : No check has been performed yet for this candidate pair, and performing the check is blocked until another check is successful.
    Once that check has succeeded, this pair will unfreeze and move into the `waiting` state.
- `in-progress`
  - : A check has been initiated for this pair, but the check's transaction is still in progress.
- `succeeded`
  - : A check for this pair has been completed successfully.
- `waiting`
  - : This pair has not yet been checked, but the check can be performed as soon as this pair is the highest priority pair remaining in the `waiting` state.

## Description

### ICE check lists

During ICE negotiation, the ICE layer builds up a _checklist_, which is a list of potential pairings of ICE candidates.
Each pair has a state, represented by a string literal.

![A diagram showing how ICE candidate pairs change state as the checklist is analyzed](ice-check-list-states.svg)

When a candidate pair is added to the checklist, it begins in the `frozen` state.
As soon as there are no checks ongoing that block the pair from being analyzed, it is unfrozen and moves into the `waiting` state.
This may happen immediately upon being added to the checklist.

Each time a candidate pair is checked, the next-highest priority candidate pair remaining on the checklist moves from the `waiting` state to the `in-progress` state, and its check begins.
If the check fails for any reason, the pair moves into its final state, `failed`.
If the check succeeds, the pair ends up in the `succeeded` state.
The ICE checklist state for any given pair of ICE candidates can be found in the corresponding `state` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
