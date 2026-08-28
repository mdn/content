---
title: RTCError
slug: Web/API/RTCError
page-type: web-api-interface
browser-compat: api.RTCError
---

{{APIRef("WebRTC")}}

The **`RTCError`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) describes an error which has occurred while handling RTC operations.
It's based upon the standard {{domxref("DOMException")}} interface that describes general DOM errors.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCError.RTCError", "RTCError()")}}
  - : Creates and returns a new `RTCError` object instance.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("DOMException")}}._

- {{domxref("RTCError.errorDetail", "errorDetail")}} {{ReadOnlyInline}}
  - : A string specifying the WebRTC-specific error code identifying the type of error that occurred.
- {{domxref("RTCError.receivedAlert", "receivedAlert")}} {{ReadOnlyInline}}
  - : A positive integer value indicating the fatal {{Glossary("DTLS")}} error received from the network.
    Only valid if the `errorDetail` string is `dtls-failure`.
    If `null`, no DTLS error was received.
- {{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}} {{ReadOnlyInline}}
  - : An integer specifying the {{Glossary("SCTP")}} cause code indicating the cause of the failed SCTP negotiation.
    Set if `errorDetail` is `sctp-failure`.
    `null` if the error isn't an SCTP error.
- {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} {{ReadOnlyInline}}
  - : An integer identifying the line number of the {{Glossary("SDP")}} on which the syntax error occurred.
    Set if `errorDetail` is `sdp-syntax-error`.
    `null` if the error isn't an SDP syntax error.
- {{domxref("RTCError.sentAlert", "sentAlert")}} {{ReadOnlyInline}}
  - : A positive integer indicating the fatal DTLS error that was sent out by this device.
    Set if `errorDetail` is `dtls-failure`.
    If `null`, no DTLS error was transmitted.

> [!NOTE]
> All `RTCError` objects have their {{domxref("DOMException.name", "name")}} set to `OperationError`.

## Examples

### Basic usage

In this example, a handler is established for an {{domxref("RTCDataChannel")}}'s {{domxref("RTCDataChannel.error_event", "error")}} event.

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

If the error is an SDP syntax error—as indicated by the {{domxref("RTCError.errorDetail", "errorDetail")}} property being set to `sdp-syntax-error`— a message string is constructed to present the error message and line number within the SDP message where the error occurred.
This message is then displayed using a function called `showMyAlertMessage()`, which stands in for whatever output mechanism this code might use.

Any other error is treated as terminal, causing a `terminateMyConnection()` function to be called.

The above example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to add the handler for `error` events.
You can also use the `RTCDataChannel` object's {{domxref("RTCDataChannel.error_event", "onerror")}} event handler property, like this:

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
