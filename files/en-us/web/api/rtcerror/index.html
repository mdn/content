---
title: RTCError
slug: Web/API/RTCError
tags:
  - API
  - Audio
  - Error
  - Error Handling
  - Interface
  - Media
  - RTCError
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - WebRTC Device API
browser-compat: api.RTCError
---
<p>{{DefaultAPISidebar("WebRTC")}}</p>

<p>The <code><strong>RTCError</strong></code> interface describes an error which has occurred while handling <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> operations. It's based upon the standard {{domxref("DOMException")}} interface that describes general DOM errors.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("RTCError.RTCError", "RTCError()")}}</dt>
 <dd>Creates and returns a new <code>RTCError</code> object initialized with the different parameters and, optionally, a string to use as the value of the error's {{domxref("DOMException.message", "message")}} property.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>In addition to the properties defined by the parent interface, {{domxref("DOMException")}}, <code>RTCError</code> includes the following properties:</em></p>

<dl>
 <dt>{{domxref("RTCError.errorDetail", "errorDetail")}} {{ReadOnlyInline}}</dt>
 <dd>A {{domxref("DOMString")}} specifying the WebRTC-specific error code identifying the type of error that occurred.</dd>
 <dt>{{domxref("RTCError.receivedAlert", "receivedAlert")}} {{ReadOnlyInline}}</dt>
 <dd>An unsigned long integer value indicating the fatal {{Glossary("DTLS")}} error which was received from the network. Only valid if the <code>errorDetail</code> string is <code>dtls-failure</code>. If <code>null</code>, no DTLS error was received.</dd>
 <dt>{{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}} {{ReadOnlyInline}}</dt>
 <dd>If <code>errorDetail</code> is <code>sctp-failure</code>, this property is a long integer specifying the {{Glossary("SCTP")}} cause code indicating the cause of the failed SCTP negotiation. <code>null</code> if the error isn't an SCTP error.</dd>
 <dt>{{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} {{ReadOnlyInline}}</dt>
 <dd>If <code>errorDetail</code> is <code>sdp-syntax-error</code>, this property is a long integer identifying the line number of the {{Glossary("SDP")}} on which the syntax error occurred. <code>null</code> if the error isn't an SDP syntax error.</dd>
 <dt>{{domxref("RTCError.sentAlert", "sentAlert")}} {{ReadOnlyInline}}</dt>
 <dd>If <code>errorDetail</code> is <code>dtls-failure</code>, this property is an unsigned long integer indicating the fatal DTLS error that was sent out by this device. If <code>null</code>, no DTLS error was transmitted.</dd>
</dl>

<div class="notecard note">
<p><strong>Note:</strong> All <code>RTCError</code> objects have their {{domxref("DOMException.name", "name")}} set to <code>OperationError</code>.</p>
</div>

<h2 id="Examples">Examples</h2>

<p>In this example, a handler is established for an {{domxref("RTCDataChannel")}}'s
  {{domxref("RTCDataChannel.error_event", "error")}} event.</p>

<pre class="brush: js">dataChannel.addEventListener("error", (event) =&gt; {
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
</pre>

<p>If the error is an SDP syntax error—indicated by its {{domxref("RTCError.errorDetail",
  "errorDetail")}} property being <code>sdp-syntax-error</code>—, a message string is
  constructed to present the error message and the line number within the SDP at which the
  error occurred. This message is then displayed using a function called
  <code>showMyAlertMessage()</code>, which stands in for whatever output mechanism this
  code might use.</p>

<p>Any other error is treated as terminal, causing a <code>terminateMyConnection()</code>
  function to be called.</p>

<p>The above example uses {{domxref("EventTarget.addEventListener",
  "addEventListener()")}} to add the handler for <code>error</code> events. You can also
  use the <code>RTCDataChannel</code> object's {{domxref("RTCDataChannel.onerror",
  "onerror")}} event handler property, like this:</p>

<pre class="brush: js">dataChannel.onerror = (event) =&gt; {
  let error = event.error;

  /* and so forth */
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
