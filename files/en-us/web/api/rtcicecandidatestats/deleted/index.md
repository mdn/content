---
title: RTCIceCandidateStats.deleted
slug: Web/API/RTCIceCandidateStats/deleted
tags:
  - API
  - Candidate
  - Property
  - RTCIceCandidateStats
  - Reference
  - WebRTC
  - WebRTC API
  - deleted
browser-compat: api.RTCIceCandidateStats.deleted
---
{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`deleted`** property indicates whether or not the candidate
has been deleted or released.

## Syntax

```js
isDeleted = rtcIceCandidateStats.deleted;
```

### Value

A Boolean value indicating whether or not the candidate has been deleted or released.
If this value is `true`, the candidate described by the
{{domxref("RTCIceCandidateStats")}} object is no longer under consideration. dThe exact
meaning varies depending on the type of candidate:

- Local candidate
  - : A value of `true` means the candidate has been deleted as described by
    {{RFC(5245, "8.3")}}.
- Host candidate
  - : A value of `true` indicates that the candidate's network resources have
    been released. This generally mean sthat any associated socket(s) have been closed and
    released.
- Remote (TURN) candidate
  - : A value of `true` means the candidate's {{Glossary("TURN")}} allocation
    is no longer active.

The net result is the same; the candidate is no longer under consideration if this
value is `true`.

## Example

In this example, {{domxref("setInterval()")}}
is used to set up a function that runs periodically to display the latest statistics for
candidates. Only candidates which have not been deleted are included in the output.

```js
window.setInterval(function() {
  myPeerConnection.getStats(null).then(stats => {
    let statsOutput = "";

    stats.forEach(report => {
      if ((stats.type === "local-candidate" || stats.type === "remote.candidate") && !stats.deleted) {
        statsOutput += `<h2>Report: ${report.type}</h3>\n<strong>ID:</strong> ${report.id}<br>\n` +
                       `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

        // Now the statistics for this report; we intentially drop the ones we
        // sorted to the top above

        Object.keys(report).forEach(statName => {
          if (statName !== "id" && statName !== "timestamp" && statName !== "type") {
            statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
          }
        });
      }
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
