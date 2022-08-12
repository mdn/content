---
title: RTCPeerConnection.getStats()
slug: Web/API/RTCPeerConnection/getStats
page-type: web-api-instance-method
tags:
  - API
  - Connection
  - Method
  - RTCPeerConnection
  - RTCStats
  - RTCStatsReport
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - WebRTC Stats
  - getStats
  - rtc
browser-compat: api.RTCPeerConnection.getStats
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} method
**`getStats()`** returns a promise which resolves with data
providing statistics about either the overall connection or about the specified
{{domxref("MediaStreamTrack")}}.

## Syntax

```js
getStats()
getStats(selector)
```

### Parameters

- `selector` {{optional_inline}}
  - : A {{domxref("MediaStreamTrack")}} for which to gather statistics. If this is
    `null` (the default value), statistics will be gathered for the entire
    {{domxref("RTCPeerConnection")}}.

### Return value

A {{jsxref("Promise")}} which resolves with an {{domxref("RTCStatsReport")}} object
providing connection statistics. The contents of the report depend on the
`selector` as well as other details of the connection.

### Exceptions

This method does not throw exceptions; instead, it rejects the returned promise with
one of the following errors:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown when there is no {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}} whose
    `track` matches the specified `selector`, or
    `selector` matches more than one sender or receiver.

### Obsolete syntax

Previously, `getStats()` used success and failure callbacks to report the
results to you, instead of using a promise.

This version of `getStats()` is obsolete; in addition, the data it returns
is entirely different from the current specification, and the form of that data was
never documented. This form of `getStats()` has been or will soon be removed
from most browsers; you _should not use it, and should update existing code to use
the new promise-based version_. Check the [Browser compatibility](#browser_compatibility) table
to verify the state of this method.

```js
promise = rtcPeerConnection.getStats(selector, successCallback, failureCallback) // deprecated
```

#### Parameters

- `selector` {{optional_inline}}
  - : A {{domxref("MediaStreamTrack")}} for which to gather statistics. If this is
    `null` (the default value), statistics will be gathered for the entire
    {{domxref("RTCPeerConnection")}}.
- `successCallback`
  - : A callback function to call when the stats have been retrieved. The function
    receives as input a single parameter: an {{domxref("RTCStatsReport")}} with the
    collected statistics. No output is expected from the function.
- `failureCallback`
  - : A function to call when an error occurs while attempting to collect statistics. The
    callback receives as input the exception (a {{domxref("DOMException")}} object
    describing the error which occurred. No return value is expected from the callback.

## Examples

This example creates a periodic function using
{{domxref("setInterval()")}} that collects
statistics for an {{domxref("RTCPeerConnection")}} every second, generating an
HTML-formatted report and inserting it into a specific element in the DOM.

```js
setInterval(() => {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      statsOutput += `<h2>Report: ${report.type}</h2>\n<strong>ID:</strong> ${report.id}<br>\n` +
                     `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

      // Now the statistics for this report; we intentionally drop the ones we
      // sorted to the top above

      Object.keys(report).forEach((statName) => {
        if (statName !== "id" && statName !== "timestamp" && statName !== "type") {
          statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
        }
      });
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

This works by calling `getStats()`, then, when the promise is resolved,
iterates over the {{domxref("RTCStats")}} objects on the returned
{{domxref("RTCStatsReport")}}. A section is created for each report with a header and
all of the statistics below, with the type, ID, and timestamp handled specially to place
them at the top of the list.

Once the [HTML](/en-US/docs/Web/HTML) for the report is generated, it is
injected into the element whose class is `"stats-box"` by setting its
{{domxref("Element.innerHTML", "innerHTML")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
