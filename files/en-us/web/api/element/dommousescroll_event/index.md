---
title: 'Element: DOMMouseScroll event'
slug: Web/API/Element/DOMMouseScroll_event
tags:
  - API
  - DOM
  - DOMMouseScroll
  - Deprecated
  - Element
  - Event
  - Input
  - Non-standard
  - Reference
  - mouse
  - scrolling
browser-compat: api.Element.DOMMouseScroll_event
---
<p>{{APIRef}}</p>

<p>{{Deprecated_Header}}</p>

<p>{{ Non-standard_header() }}</p>

<p>The DOM <code>DOMMouseScroll</code> event is fired asynchronously when mouse wheel or similar device is operated and the accumulated scroll amount is over 1 line or 1 page since last event. It's represented by the {{ domxref("MouseScrollEvent") }} interface. This event was only implemented by Firefox. You should instead use the standard {{domxref("Element.wheel_event", "wheel")}} event.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("MouseScrollEvent")}} {{deprecated_inline}}</td>
  </tr>
 </tbody>
</table>

<p>If you want to prevent the default action of mouse wheel events, it's not enough to handle only this event on Gecko because If scroll amount by a native mouse wheel event is less than 1 line (or less than 1 page when the system setting is by page scroll), other mouse wheel events may be fired without this event.<br>
 <br>
 On Gecko 17 (Firefox 17) or later, you need to call <code>preventDefault()</code> of <code>wheel</code> events which must be fired for every native event.<br>
 <br>
 Use the standardized {{event("wheel")}} event if available.</p>

<h2 id="Properties">Properties</h2>

<p>The event has only one additional property beyond standard events.</p>

<h3 id="detail">detail</h3>

<p>The <code>detail</code> property describes the scroll more precisely, with positive values indicating scrolling downward and negative values indicating scrolling upward.</p>

<p>If the event represents scrolling up by a page, the value of <code>detail</code> is -32768. If the event indicates scrolling down by a page, the value is +32768. Any other value represents the number of lines to scroll, with the direction indicated by the value's sign.</p>

<div class="note">
<p><strong>Note:</strong> Trusted events are never sent with a value of 0 for <code>detail</code>.</p>
</div>

<p>Trusted events are never fired with 0.</p>

<div class="note">
<p><strong>Note:</strong> If the platform's native mouse wheel events only provide scroll distance by pixels, or if the speed can be customized by the user, the value is computed using the line height of the nearest scrollable ancestor element of the event's target. If that element's font size is smaller than {{pref("mousewheel.min_line_scroll_amount")}}, that preference's value is used as the line height.</p>
</div>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ domxref("MouseScrollEvent") }}</li>
 <li>Gecko's legacy pixel scroll event: <code>MozMousePixelScroll</code></li>
 <li>Non-Gecko browsers' legacy mouse wheel event: <code>mousewheel</code></li>
 <li>Standardized wheel event: <code>wheel</code></li>
</ul>
