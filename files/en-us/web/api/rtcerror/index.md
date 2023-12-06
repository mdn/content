---
title: RTCError
slug: Web/API/RTCError
page-type: web-api-interface
browser-compat: api.RTCError
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCError`** interface describes an error which has occurred while handling [WebRTC](/en-US/docs/Web/API/WebRTC_API) operations. It's based upon the standard {{domxref("DOMException")}} interface that describes general DOM errors.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCError.RTCError", "RTCError()")}}
  - : Creates and returns a new `RTCError` object initialized with the different parameters and, optionally, a string to use as the value of the error's {{domxref("DOMException.message", "message")}} property.

## Instance properties

_In addition to the properties defined by the parent interface, {{domxref("DOMException")}}, `RTCError` includes the following properties:_

- {{domxref("RTCError.errorDetail", "errorDetail")}} {{ReadOnlyInline}}
  - : A string specifying the WebRTC-specific error code identifying the type of error that occurred.
- {{domxref("RTCError.receivedAlert", "receivedAlert")}} {{ReadOnlyInline}}
  - : An unsigned long integer value indicating the fatal {{Glossary("DTLS")}} error which was received from the network. Only valid if the `errorDetail` string is `dtls-failure`. If `null`, no DTLS error was received.
- {{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}} {{ReadOnlyInline}}
  - : If `errorDetail` is `sctp-failure`, this property is a long integer specifying the {{Glossary("SCTP")}} cause code indicating the cause of the failed SCTP negotiation. `null` if the error isn't an SCTP error.
- {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} {{ReadOnlyInline}}
  - : If `errorDetail` is `sdp-syntax-error`, this property is a long integer identifying the line number of the {{Glossary("SDP")}} on which the syntax error occurred. `null` if the error isn't an SDP syntax error.
- {{domxref("RTCError.sentAlert", "sentAlert")}} {{ReadOnlyInline}}
  - : If `errorDetail` is `dtls-failure`, this property is an unsigned long integer indicating the fatal DTLS error that was sent out by this device. If `null`, no DTLS error was transmitted.

> **Note:** All `RTCError` objects have their {{domxref("DOMException.name", "name")}} set to `OperationError`.

## Examples

In this example, a handler is established for an {{domxref("RTCDataChannel")}}'s
{{domxref("RTCDataChannel.error_event", "error")}} event.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error; // event.error is an RTCError

  if (error.errorDetail === "sdp-syntax-error") {
    let errLine = error.sdpLineNumber;
    let errMessage = error.message;

    let alertMessage = `A syntax error occurred interpreting line ${errLine} of the SDP: ${errMessage}`;
    showMyAlertMessage("Data Channel Error", alertMessage);
  } else {
    terminateMyConnection();
  }
});
```

If the error is an SDP syntax error—indicated by its {{domxref("RTCError.errorDetail",
  "errorDetail")}} property being `sdp-syntax-error`—, a message string is
constructed to present the error message and the line number within the SDP at which the
error occurred. This message is then displayed using a function called
`showMyAlertMessage()`, which stands in for whatever output mechanism this
code might use.

Any other error is treated as terminal, causing a `terminateMyConnection()`
function to be called.

The above example uses {{domxref("EventTarget.addEventListener",
  "addEventListener()")}} to add the handler for `error` events. You can also
use the `RTCDataChannel` object's {{domxref("RTCDataChannel.error_event",
  "onerror")}} event handler property, like this:

```js
dataChannel.onerror = (event) => {
  let error = event.error;

  /* and so forth */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
