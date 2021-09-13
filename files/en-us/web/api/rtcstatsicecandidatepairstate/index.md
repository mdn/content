---
title: RTCStatsIceCandidatePairState
slug: Web/API/RTCStatsIceCandidatePairState
tags:
  - API
  - Candidate
  - CandidatePair
  - Check List
  - Enum
  - ICE
  - RTCIceCandidatePair
  - RTCStatsIceCandidatePairState
  - Reference
  - Type
  - WebRTC
  - WebRTC API
  - state
browser-compat: api.RTCStatsIceCandidatePairState
---
{{APIRef("WebRTC")}}

The **`RTCStatsIceCandidatePairState`** enumerated type represents the set of string values which are possible for the {{domxref("RTCIceCandidatePairStats")}} object's {{domxref("RTCIceCandidatePairStats.state", "state")}} property.

This represents the state of this candidate pair within the {{Glossary("ICE")}} check list for the {{domxref("RTCPeerConnection")}}.

See {{SectionOnPage("/en-US/docs/Web/API/RTCIceCandidatePairStats/state", "ICE check lists", "code")}} for further information about how ICE check lsits work.

## Values

- `failed`
  - : A check for this pair has been performed but failed. A failure can occur either because no response was received or because the response indicated that an unrecoverable error occurred.
- `frozen`
  - : No check has been performed yet for this candidate pair, and performing the check is blocked until another check is successful. Once that check has succeeded, this pair will unfreeze and move into the `waiting` state.
- `in-progress`
  - : A check has been initiated for this pair, but the check's transaction is still in progress.
- `succeeded`
  - : A check for this pair has been completed successfully.
- `waiting`
  - : This pair has not yet been checked, but the check can be performed as soon as this pair is the highest priority pair remaining in the `waiting` state.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
