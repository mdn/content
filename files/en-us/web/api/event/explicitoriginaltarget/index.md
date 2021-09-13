---
title: Event.explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
tags:
  - API
  - DOM
  - Gecko
  - Non-standard
  - Property
  - Reference
browser-compat: api.Event.explicitOriginalTarget
---
<p>{{APIRef("DOM")}}{{Non-standard_Header}}</p>

<p>The explicit original target of the event. (Mozilla-specific)</p>

<p>If the event was <a href="/en-US/docs/DOM/event_retargeting">retargeted</a> for some reason other than an <a href="/en-US/docs/DOM/anonymous_boundary_crossing">anonymous boundary crossing</a>, this will be set to the target before the retargeting occurs. For example, mouse events are retargeted to their parent node when they happen over text nodes (see {{Bug(185889)}}), and in that case <code><a href="/en-US/docs/Web/API/Event/currentTarget">currentTarget</a></code> will show the parent and <code>explicitOriginalTarget</code> will show the text node.</p>

<p><code>explicitOriginalTarget</code> differs from <code><a href="/en-US/docs/Web/API/Event/originalTarget">originalTarget</a></code> in that it will never contain <a href="/en-US/docs/DOM/anonymous_content">anonymous content</a>.</p>

<h2 id="Example">Example</h2>

<p>This property can be used with <code>&lt;command&gt;</code> to get the event details of the original object calling the command.</p>

<pre class="brush: js;">function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // returns 'menuitem'
}</pre>

<pre class="brush: xml;">&lt;xul:command id="my-cmd-anAction" oncommand="myCommand(event);"/&gt;

&lt;xul:menulist&gt;
  &lt;xul:menupopup&gt;
    &lt;xul:menuitem label="Get my element name!" command="my-cmd-anAction"/&gt;
  &lt;/xul:menupopup&gt;
&lt;/menulist&gt;</pre>

<h2 id="Specifications">Specifications</h2>

<p><em>This is a Mozilla-specific property.</em> Defined in {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}</p>

<p>This event property is <strong>not defined</strong> in the <a href="https://www.w3.org/TR/DOM-Level-2-Events/events.html">W3.org DOM Level 2 Events</a></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Event/Comparison_of_Event_Targets">Comparison of Event Targets</a></li>
</ul>
