---
title: "RTCErrorEvent: error property"
short-title: error
slug: Web/API/RTCErrorEvent/error
page-type: web-api-instance-property
browser-compat: api.RTCErrorEvent.error
---

{{APIRef("WebRTC")}}

The read-only {{domxref("RTCErrorEvent")}} property **`error`**
contains an {{domxref("RTCError")}} object describing the details of the error which the
event is announcing.

## Value

An {{domxref("RTCError")}} object whose properties provide details about the error
which has occurred in the context of a {{Glossary("WebRTC")}} operation.

## Examples

In this example, a handler is established for an {{domxref("RTCDataChannel")}}'s
{{domxref("RTCDataChannel.error_event", "error")}} event.

```js
dataChannel.addEventListener("error", (event) => {
  let error = event.error;

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

If the error is an SDP syntax error—indicated by its {{domxref("RTCError.errorDetail", "errorDetail")}}
property being `sdp-syntax-error`—, a message string is
constructed to present the error message and the line number within the SDP at which the
error occurred. This message is then displayed using a function called
`showMyAlertMessage()`, which stands in for whatever output mechanism this
code might use.

Any other error is treated as terminal, causing a `terminateMyConnection()`
function to be called.

The above example uses {{domxref("EventTarget.addEventListener", "addEventListener()")}}
to add the handler for `error` events. You can also use the `RTCDataChannel` object's
{{domxref("RTCDataChannel.error_event", "onerror")}} event handler property, like this:

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
