---
title: FocusEvent
slug: Web/API/FocusEvent
tags:
  - API
  - DOM
  - DOM Events
  - Event
  - Reference
browser-compat: api.FocusEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p>The <strong><code>FocusEvent</code></strong> interface represents focus-related events, including {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, and {{domxref("Element/focusout_event", "focusout")}}.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}</dt>
 <dd>Creates a <code>FocusEvent</code> event with the given parameters.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("FocusEvent.relatedTarget")}}</dt>
 <dd>Is an {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to <code>null</code> for security reasons.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface has no specific methods. It inherits methods from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{domxref("Event")}} base interface</li>
</ul>
