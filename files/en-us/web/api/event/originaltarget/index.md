---
title: Event.originalTarget
slug: Web/API/Event/originalTarget
tags:
  - API
  - DOM
  - Gecko
  - NeedsExample
  - NeedsHelp
  - Non-standard
  - Property
browser-compat: api.Event.originalTarget
---
<div>{{ ApiRef("DOM") }} {{Non-standard_header}}</div>


<p>The original target of the event before any retargetings. (Mozilla-specific)</p>

<p>In presence of <a href="/en-US/docs/XBL">XBL</a> anonymous content this will be the anonymous node the event originally fired on. See <a href="/en-US/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting">Anonymous Content#Event_Flow_and_Targeting</a> for more details.</p>

<p>Note: <code>originalTarget</code> may also be native anonymous content (see {{Bug("208427")}}), in which case it's useless for non-privileged code.</p>

<p>See also <a href="/en-US/docs/Web/API/Event/Comparison_of_Event_Targets">Comparison of Event Targets</a></p>

<h2 id="Example">Example</h2>

<p><em>Need an example that makes sense here</em></p>

<h2 id="Specifications">Specifications</h2>

<p>This is a Mozilla-specific property. Defined in {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}</p>

<p>This event property is <strong>not defined</strong> in the <a href="https://www.w3.org/TR/DOM-Level-2-Events/events.html">W3.org DOM Level 2 Events</a></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
