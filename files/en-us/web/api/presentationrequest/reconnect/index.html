---
title: PresentationRequest.reconnect()
slug: Web/API/PresentationRequest/reconnect
tags:
  - Promise
  - controlled presentations
  - presentation identifier
browser-compat: api.PresentationRequest.reconnect
---
<p>When the <code><dfn>reconnect</dfn>(presentationId)</code> method is called on a <code>PresentationRequest</code> <var>presentationRequest</var>, the <a href="https://www.w3.org/TR/presentation-api/#dfn-user-agents">user agent</a> <em>MUST</em> run the following steps to <dfn>reconnect to a presentation</dfn>:</p>

<h2>Input</h2>

<ul>
 <li><var>presentationRequest</var>, the <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest"><code>PresentationRequest</code></a> object that <code><a href="https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect">reconnect()</a></code> was called on.</li>
 <li><var>presentationId</var>, a valid <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier">presentation identifier</a></li>
</ul>

<h2>Output</h2>
 <p><var>P</var>, a <a href="https://www.w3.org/TR/presentation-api/#dfn-promise">Promise</a>.</p>

<h2>Algorithm</h2>

<ol>
 <li>Using the document's <a href="https://www.w3.org/TR/presentation-api/#dfn-settings-object">settings object</a> run the <a href="https://www.w3.org/TR/presentation-api/#dfn-prohibits-mixed-security-contexts-algorithm">prohibits mixed security contexts algorithm</a>.</li>
 <li>If the result of the algorithm is <code>"Prohibits Mixed Security Contexts"</code> and the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls">presentation request URL</a> of <var>presentationRequest</var> is an <a href="https://www.w3.org/TR/presentation-api/#dfn-a-priori-unauthenticated-url">a priori unauthenticated URL</a>, then return a <a href="https://www.w3.org/TR/presentation-api/#dfn-promise">Promise</a> rejected with a <a href="https://www.w3.org/TR/presentation-api/#dfn-securityerror"><code>SecurityError</code></a> and abort these steps.</li>
 <li>If the document object's <a href="https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set">active sandboxing flag set</a> has the <a href="https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag">sandboxed presentation browsing context flag</a> set, then return a <a href="https://www.w3.org/TR/presentation-api/#dfn-promise">Promise</a> rejected with a <a href="https://www.w3.org/TR/presentation-api/#dfn-securityerror"><code>SecurityError</code></a> and abort these steps.</li>
 <li>Let <var>P</var> be a new <a href="https://www.w3.org/TR/presentation-api/#dfn-promise">Promise</a>.</li>
 <li>Return <var>P</var> but continue running these steps in parallel.</li>
 <li>Search the <a href="https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations">set of controlled presentations</a> for a <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a> that meets the following criteria: its <a href="https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context">controlling browsing context</a> is the current <a href="https://www.w3.org/TR/presentation-api/#dfn-browsing-context">browsing context</a>, its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state">presentation connection state</a> is not <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated"><code>terminated</code></a>, its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-url">presentation URL</a> is equal to one of the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls">presentation request URLs</a> of <var>presentationRequest</var> and its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier">presentation identifier</a> is equal to <var>presentationId</var>.</li>
 <li>If such a <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a> exists, run the following steps:
  <ol>
   <li>Let <var>S</var> be that <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a>.</li>
   <li><a href="https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise">Resolve</a> <var>P</var> with <var>S</var>.</li>
   <li>If the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state">presentation connection state</a> of <var>S</var> is <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting"><code>connecting</code></a> or <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connected"><code>connected</code></a>, then abort all remaining steps.</li>
   <li>Set the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state">presentation connection state</a> of <var>S</var> to <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting"><code>connecting</code></a>.</li>
   <li><a href="https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection">Establish a presentation connection</a> with <var>S</var>.</li>
   <li>Abort all remaining steps.</li>
  </ol>
 </li>
 <li>Search the <a href="https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations">set of controlled presentations</a> for the first <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a> that meets the following criteria: its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state">presentation connection state</a> is not <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-terminated"><code>terminated</code></a>, its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-url">presentation URL</a> is equal to one of the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-request-urls">presentation request URLs</a> of <var>presentationRequest</var>, and its <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier">presentation identifier</a> is equal to <var>presentationId</var>.</li>
 <li>If such a <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a> exists, let <var>E</var> be that <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a>, and run the following steps:
  <ol>
   <li>Create a new <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection"><code>PresentationConnection</code></a> <var>S</var>.</li>
   <li>Set the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-identifier">presentation identifier</a> of <var>S</var> to <var>presentationId</var>.</li>
   <li>Set the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-url">presentation URL</a> of <var>S</var> to the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-url"> presentation URL</a> of <var>E</var>.</li>
   <li>Set the <a href="https://www.w3.org/TR/presentation-api/#dfn-presentation-connection-state">presentation connection state</a> of <var>S</var> to <a href="https://www.w3.org/TR/presentation-api/#dom-presentationconnectionstate-connecting"><code>connecting</code></a>.</li>
   <li>Add <var>S</var> to the <a href="https://www.w3.org/TR/presentation-api/#dfn-set-of-controlled-presentations">set of controlled presentations</a>.</li>
   <li><a href="https://www.w3.org/TR/presentation-api/#dfn-resolving-a-promise">Resolve</a> <var>P</var> with <var>S</var>.</li>
   <li><a href="https://www.w3.org/TR/presentation-api/#dfn-queue-a-task">Queue a task</a> to <a href="https://www.w3.org/TR/presentation-api/#dfn-firing-an-event">fire</a> a <a href="https://www.w3.org/TR/presentation-api/#dfn-trusted-event">trusted event</a> with the name <a href="https://www.w3.org/TR/presentation-api/#dfn-connectionavailable"><code>connectionavailable</code></a>, that uses the <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent"><code>PresentationConnectionAvailableEvent</code></a> interface with the <a href="https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection"><code>connection</code></a> attribute initialized to <var>S</var>, at <var>presentationRequest</var>. The event must not bubble and cancelable and should have no default action.</li>
   <li><a href="https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection">Establish a presentation connection</a> with <var>S</var>.</li>
   <li>Abort all remaining steps.</li>
  </ol>
 </li>
 <li><a href="https://www.w3.org/TR/presentation-api/#dfn-rejecting-a-promise">Reject</a> <var>P</var> with a <a href="https://www.w3.org/TR/presentation-api/#dfn-notfounderror"><code>NotFoundError</code></a> exception.</li>
</ol>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
