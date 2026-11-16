---
title: "RTCPeerConnection: getStats() method"
short-title: getStats()
slug: Web/API/RTCPeerConnection/getStats
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.getStats
---

{{APIRef("WebRTC")}}

The **`getStats()`** method of the {{domxref("RTCPeerConnection")}} interface returns a promise which resolves with data providing statistics about either the overall connection or about the specified {{domxref("MediaStreamTrack")}}.

## Syntax

```js-nolint
getStats()
getStats(selector)

getStats(selector, successCallback, failureCallback) // deprecated
```

### Parameters

- `selector` {{optional_inline}}
  - : A {{domxref("MediaStreamTrack")}} for which to gather statistics.
    If this is `null` (the default value), statistics will be gathered for the entire {{domxref("RTCPeerConnection")}}.

### Deprecated parameters

In older code and documentation, you may see a callback-based version of this function.
This has been deprecated and its use is **strongly** discouraged.
You should update any existing code to use the {{jsxref("Promise")}}-based version of `getStats()` instead.
The parameters for the older form of `getStats()` are described below, to aid in updating existing code.

- `successCallback` {{deprecated_inline}}
  - : A [callback function](/en-US/docs/Glossary/Callback_function) called once the report has been successfully generated.
- `failureCallback` {{deprecated_inline}}
  - : A [callback function](/en-US/docs/Glossary/Callback_function) called once the report has failed to be generated.

### Return value

A {{jsxref("Promise")}} which resolves with an {{domxref("RTCStatsReport")}} object providing connection statistics.
The report's contents depend on the `selector` and other details of the connection.

### Exceptions

This method does not throw exceptions; instead, it rejects the returned promise with one of the following errors:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown when there is no {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}} whose `track` matches the specified `selector`, or
    `selector` matches more than one sender or receiver.

## Examples

This example creates a periodic function using
{{domxref("Window.setInterval", "setInterval()")}} that collects
statistics for an {{domxref("RTCPeerConnection")}} every second, generating an
HTML-formatted report and inserting it into a specific element in the DOM.

```js
setInterval(() => {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      statsOutput +=
        `<h2>Report: ${report.type}</h2>\n<strong>ID:</strong> ${report.id}<br>\n` +
        `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

      // Now the statistics for this report; we intentionally drop the ones we
      // sorted to the top above

      Object.keys(report).forEach((statName) => {
        if (
          statName !== "id" &&
          statName !== "timestamp" &&
          statName !== "type"
        ) {
          statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
        }
      });
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

This works by calling `getStats()`, then, when the promise is resolved, iterates over the {{domxref("RTCStatsReport")}} objects on the returned {{domxref("RTCStatsReport")}}.
A section is created for each report with a header and all of the statistics below, with the type, ID, and timestamp handled specially to place them at the top of the list.

Once the [HTML](/en-US/docs/Web/HTML) for the report is generated, it is injected into the element whose class is `"stats-box"` by setting its {{domxref("Element.innerHTML", "innerHTML")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
