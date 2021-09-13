---
title: RTCIceCandidatePairStats.state
slug: Web/API/RTCIceCandidatePairStats/state
tags:
  - API
  - Candidate
  - CandidatePair
  - Check List
  - ICE
  - Pair
  - Property
  - RTCIceCandidatePair
  - RTCIceCandidatePairStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - state
browser-compat: api.RTCIceCandidatePairStats.state
---
{{APIRef("WebRTC")}}

The **`state`** property in an
{{domxref("RTCIceCandidatePairStats")}} object indicates the state of the check list
of which the candidate pair is a member.

## Syntax

```js
state = rtcIceCandidatePairStats.state;
```

### Value

A {{domxref("DOMString")}} whose value is one of those found in the
{{domxref("RTCStatsIceCandidatePairState")}} enumerated type.

## ICE check lists

During ICE negotiation, the ICE layer builds up a **check list**, which is
a list of potential pairings of ICE candidates. Each pair has a state, whose value is
represented by `RTCStatsIceCandidatePairState`.

![A diagram showing how ICE candidate pairs change state as the check list is analyed](ice-check-list-states.svg)

When a candidate pair is added to the check list, it begins in the `frozen`
state. As soon as there are no checks ongoing which block the pair from being analyzed,
it is unfrozen and moves into the `waiting` state. This may happen
immediately upon being added to the check list.

Each time a candidate pair is done being checked, the next-highest priority candidate
pair remaining on the check list moves from the `waiting` state to the
`in-progress` state, and its check begins. If the check fails for any reason,
the pair moves into its final state, `failed`. If the check succeeds, the
pair ends up in the `succeeded` state.

The ICE check list state for any given pair of ICE candidates can be found in the
corresponding the `state` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
