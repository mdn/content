---
title: RTCIceCandidatePairStats.selected
slug: Web/API/RTCIceCandidatePairStats/selected
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.selected
---
{{APIRef("WebRTC")}}{{non-standard_header}}

The _non-standard_, Firefox-specific {{domxref("RTCIceCandidatePairStats")}} property **`selected`** indicates whether or not the candidate pair described by the object is the one currently being used to communicate with the remote peer.

## Syntax

```js
isSelected = icpStats.selected;
```

### Value

A Firefox-specific Boolean value which is `true` if the candidate pair described by this object is the one currently in use.

In any other browser, you can determine the selected candidate pair by looking for a stats object of type `transport`, which is an {{domxref("RTCTransportStats")}} object. That object's {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}} property indicates whether or not the specified transport is the one being used.

## Example

The function shown in this example identifies the currently-selected candidate pair from a statistics report by first iterating over each report, looking for a `transport` report; when one is found, that transport's {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}} is used to get the {{domxref("RTCIceCandidatePair")}} describing the connection.

If that fails, then the second section iterates over the reports, looking for a `candidate-pair` record whose Firefox-specific {{domxref("RTCIceCandidatePairStats.selected", "selected")}} property is `true`. This candidate pair is then returned as the currently-selected one.

```js
function getCurrentCandidatePair(statsResults) {
  statsResults.forEach((report) => {
    if (report.type === "transport") {
      currentPair = statsResults.get(report.selectedCandidatePairId);
    }
  });

  if (!currentPair) {
    statsResults.forEach((report) => {
      if (report.type === "candidate-pair" && report.selected) {
        currentPair = report;
      }
    });
  }

  return currentPair;
}
```

## Specifications

Not part of any specification. This property is unique to Firefox.

## Browser compatibility

{{Compat}}
