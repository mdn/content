---
title: RTCIceCandidate()
slug: Web/API/RTCIceCandidate/RTCIceCandidate
tags:
  - API
  - Audio
  - Candidate
  - Constructor
  - ICE
  - Media
  - RTCIceCandidate
  - Video
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCIceCandidate.RTCIceCandidate
---
<div>{{APIRef("WebRTC")}}</div>

<p>The
    <strong><code>RTCIceCandidate()</code></strong>
    constructor creates and returns a new {{domxref("RTCIceCandidate")}} object, which can
    be configured to represent a single {{Glossary("ICE")}} candidate.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new RTCIceCandidate()
new RTCIceCandidate(candidateInfo)</pre>

<h3 id="Parameters">Parameters</h3>

    <dl>
      <dt><code>candidateInfo</code> {{optional_inline}}</dt>
      <dd>
        <p>An optional object that can be provided to configure the candidate.
          The object has the following properties:</p>
        <!-- The spec calls this object an RTCIceCandidateInit -->
          <dl>
            <dt><code>candidate</code> {{optional_inline}}</dt>
            <dd><p>A {{domxref("DOMString")}} describing the properties of the candidate, taken directly from the <a href="/en-US/docs/Web/API/WebRTC_API/Protocols#sdp">SDP</a> attribute <code>"candidate"</code>.
              The candidate string specifies the network connectivity information for the candidate.
              If the <code>candidate</code> is an empty string (<code>""</code>), the end of the candidate list has been reached; this candidate is known as the "end-of-candidates" marker.</p>
                
                <p>The syntax of the candidate string is described in {{RFC(5245, "", 15.1)}}.
                  For an a-line (attribute line) that looks like this:</p>
                
                <pre>a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host</pre>
                
                <p>the corresponding <code>candidate</code> string's value will be
                <code>"candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host"</code>.</p>
                
                <p>The {{Glossary("user agent")}} always prefers candidates with the highest {{domxref("RTCIceCandidate.priority", "priority")}}, all else being equal.
                  In the example above, the priority is <code>2043278322</code>. The attributes are all separated by a single space character, and are in a specific order.
                  The complete list of attributes for this example candidate is:</p>
                
                <ul>
                <li>{{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325</li>
                <li>{{domxref("RTCIceCandidate.component", "component")}} = <code>"rtp"</code> (the number 1 is encoded to this string; 2 becomes <code>"rtcp"</code>)</li>
                <li>{{domxref("RTCIceCandidate.protocol", "protocol")}} = <code>"udp"</code></li>
                <li>{{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322</li>
                <li>{{domxref("RTCIceCandidate/address", "ip")}} = <code>"192.168.0.56"</code></li>
                <li>{{domxref("RTCIceCandidate.port", "port")}} = 44323</li>
                <li>{{domxref("RTCIceCandidate.type", "type")}} = <code>"host"</code></li>
                </ul>
    
                <p>Additional information can be found in {{domxref("RTCIceCandidate.candidate")}}.</p>
    
                <div class="notecard note">
                  <p><strong>Note:</strong> For backward compatibility with older versions of the WebRTC specification, the constructor also accepts this string directly as an argument.</p>
                </div>
            </dd>
            <dt><code>sdpMid</code> {{optional_inline}}</dt>
            <dd>A {{domxref("DOMString")}} containing the identification tag of the media stream with which the candidate is associated, or <code>null</code> if there is no associated media stream. The default is <code>null</code>. 
    
              <p>Additional information can be found in {{domxref("RTCIceCandidate.sdpMid")}}.</p></dd>
            <dt><code>sdpMLineIndex</code> {{optional_inline}}</dt>
            <dd>A number property containing the zero-based index of the m-line with which the candidate is associated, within the <a href="/en-US/docs/Web/API/WebRTC_API/Protocols#sdp">SDP</a> of the media description, or <code>null</code> if no such associated exists. The default is <code>null</code>.
    
              <p>Additional information can be found in {{domxref("RTCIceCandidate.sdpMLineIndex")}}.</p>
            </dd>
            <dt><code>usernameFragment</code> {{optional_inline}}</dt>
            <dd>A {{domxref("DOMString")}} containing the username fragment (usually referred to in shorthand as "ufrag" or "ice-ufrag").
              This fragment, along with the ICE password ("ice-pwd"), uniquely identifies a single ongoing ICE interaction (including for any communication with the {{Glossary("STUN")}} server).
                
                <p>The string is generated by WebRTC at the beginning of the session.
                It  may be up to 256 characters long, and at least 24 bits must contain random data.
                It has no default value and is not present unless set explicitly.</p>
                
              <p>Additional information can be found in {{domxref("RTCIceCandidate.usernameFragment")}}.</p>
            </dd>
             </dl>
    
        <p>The method will throw a <code>TypeError</code> exception if both <code>sdpMid</code> and <code>sdpMLineIndex</code> are <code>null</code>.</p>
      </dd>
    </dl>


<h3 id="Return_value">Return value</h3>

<p>A newly-created {{domxref("RTCIceCandidate")}} object.</p>

<p>If <code>candidateInfo</code> is provided, the new <code>RTCIceCandidate</code> is initialized as follows:</p>

<ul>
  <li>Each member of the <code>RTCIceCandidate</code> object is initialized to the value of the property by the same name from <code>candidateInfo</code>.
    This includes the {{domxref("RTCIceCandidate.candidate", "candidate")}}, {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}}, {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}}, and {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} properties.</li>
  <li>The <code>candidate</code> string (which is SDP text) is parsed; each property found is stored in the corresponding field in the <code>RTCIceCandidate</code>.
    If any of the fields is invalid, parsing of the string silently aborts without throwing an exception.
    The default value of <code>candidate</code> is the empty string, which indicates that the candidate is an "end-of-candidates" message.</li>
  <li>The following fields are initialized to <code>null</code> if they are not included in the {{domxref("RTCIceCandidate.candidate")}} property:
    {{domxref("RTCIceCandidate.foundation", "foundation")}},
    {{domxref("RTCIceCandidate.component", "component")}},
    {{domxref("RTCIceCandidate.priority", "priority")}} , {{domxref("RTCIceCandidate/address","addresss")}}, {{domxref("RTCIceCandidate.protocol", "protocol")}},
    {{domxref("RTCIceCandidate.port", "port")}}, {{domxref("RTCIceCandidate.type", "type")}}, {{domxref("RTCIceCandidate.tcpType", "tcpType")}},
    {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}}, and {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}}.</li>
</ul>

<div class="notecard note">
  <p><strong>Note:</strong> Parsing of the <code>candidate</code> string is performed using the <a href="https://w3c.github.io/webrtc-pc/#candidate-attribute-grammar">candidate-attribute grammar</a> from the WebRTC Specification.</p>
</div>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>TypeError</code></dt>
  <dd>The specified <code>candidateInfo</code> has values of <code>null</code> in <strong>both</strong> the <code>sdpMid</code> and <code>sdpMLineIndex</code> properties.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p>This constructor does not do complete validation of the specified <code>candidateInfo</code> object or string.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Protocols", "ICE")}}</li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Connectivity">WebRTC connectivity</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Session_lifetime">Lifetime of a WebRTC session</a></li>
  <li><a href="/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling">Signaling and video calling</a></li>
</ul>
