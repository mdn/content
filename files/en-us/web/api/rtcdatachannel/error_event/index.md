---
title: "RTCDataChannel: error event"
short-title: error
slug: Web/API/RTCDataChannel/error_event
page-type: web-api-event
browser-compat: api.RTCDataChannel.error_event
---

{{APIRef("WebRTC")}}

A WebRTC `error` event is sent to an {{domxref("RTCDataChannel")}} object's `onerror` event handler when an error occurs on the data channel.

The {{domxref("RTCErrorEvent")}} object provides details about the error that occurred; see that article for details.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

An {{domxref("RTCErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCErrorEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : An {{domxref("RTCError")}} object specifying the error which occurred; this object includes the type of error that occurred, and information about where the error occurred (such as which line number in the {{Glossary("SDP")}} or what {{Glossary("SCTP")}} cause code was at issue).

## Examples

```js
// Strings for each of the SCTP cause codes found in RFC
// 4960, section 3.3.10:
// https://datatracker.ietf.org/doc/html/rfc4960#section-3.3.10

const sctpCauseCodes = [
  "No SCTP error",
  "Invalid stream identifier",
  "Missing mandatory parameter",
  "Stale cookie error",
  "Sender is out of resource (i.e., memory)",
  "Unable to resolve address",
  "Unrecognized SCTP chunk type received",
  "Invalid mandatory parameter",
  "Unrecognized parameters",
  "No user data (SCTP DATA chunk has no data)",
  "Cookie received while shutting down",
  "Restart of an association with new addresses",
  "User-initiated abort",
  "Protocol violation",
];

dc.addEventListener(
  "error",
  (ev) => {
    const err = ev.error;

    console.error("WebRTC error: ", err.message);

    // Handle specific error detail types

    switch (err.errorDetail) {
      case "sdp-syntax-error":
        console.error("    SDP syntax error in line ", err.sdpLineNumber);
        break;
      case "idp-load-failure":
        console.error(
          "    Identity provider load failure: HTTP error ",
          err.httpRequestStatusCode,
        );
        break;
      case "sctp-failure":
        if (err.sctpCauseCode < sctpCauseCodes.length) {
          console.error("    SCTP failure: ", err.sctpCauseCode);
        } else {
          console.error("    Unknown SCTP error");
        }
        break;
      case "dtls-failure":
        if (err.receivedAlert) {
          console.error("    Received DTLS failure alert: ", err.receivedAlert);
        }
        if (err.sentAlert) {
          console.error("    Sent DTLS failure alert: ", err.receivedAlert);
        }
        break;
    }

    // Add source file name and line information

    console.error(
      "    Error in file ",
      err.filename,
      " at line ",
      err.lineNumber,
      ", column ",
      err.columnNumber,
    );
  },
  false,
);
```

The received event provides details in an {{domxref("RTCError")}} object called {{domxref("RTCErrorEvent.error", "error")}}; `RTCError` is an extension of the {{domxref("DOMException")}} interface. The error's {{domxref("DOMException.name", "name")}} is `RTCError` and the {{domxref("DOMException.message", "message")}} is an error string specified by the WebRTC layer.

Error information is output to the console using {{domxref("console/error_static", "console.error()")}}. The `message` string is always output, as is information about the source file's name, line number, and column number at which the error occurred.

In addition, however, depending on the value of {{domxref("RTCError.errorDetail", "errorDetail")}}, additional information may be output. Each error type has a different set of information output. For example, an SDP syntax error displays the line number of the error within the SDP, and an SCTP error displays a message corresponding to the SCTP cause code. Other error types similarly output appropriate information.

You can also set up an event handler for `error` events using the `RTCDataChannel` interface's `onerror` event handler property:

```js
dc.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Since `RTCError` is not one of the legacy errors, the value of {{domxref("DOMException.code", "RTCError.code")}} is always 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [A simple RTCDataChannel example](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Related events: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.message_event", "message")}}, and {{domxref("RTCDataChannel.close_event", "close")}}
