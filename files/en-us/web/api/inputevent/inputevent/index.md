---
title: InputEvent()
slug: Web/API/InputEvent/InputEvent
tags:
- API
- Constructor
- DOM
- DOM Events
- Experimental
- Input
- InputEvent
- Reference
- events
browser-compat: api.InputEvent.InputEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p>The <strong><code>InputEvent()</code></strong> constructor creates a new
  {{domxref("InputEvent")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"> <em>event</em> = new InputEvent(<em>typeArg</em>, <em>inputEventInit</em>);</pre>

<h3 id="Values">Values</h3>

<dl>
  <dt><em>typeArg</em></dt>
  <dd>Is a {{domxref("DOMString")}} representing the name of the event.</dd>
  <dt><em>inputEventInit</em>{{optional_inline}}</dt>
  <dd>
    <p>Is a <code>InputEventInit</code> dictionary, having the following fields:</p>
    <ul>
      <li><code>inputType</code>: (Optional) A string specifying the type of change for
        editable content such as, for example, inserting, deleting, or formatting text.
      </li>
      <li><code>data</code>: (Optional) A string containing characters to insert. This may
        be an empty string if the change doesn't insert text (such as when deleting
        characters, for example).</li>
      <li><code>dataTransfer</code>: (Optional) A {{domxref("DataTransfer")}} object
        containing information about richtext or plaintext data being added to or removed
        from editable content.</li>
      <li><code>isComposing</code>: (Optional) A boolean indicating that the event is part
        of a composition session, meaning it is after a {{event("compositionstart")}}
        event but before a {{event("compositionend")}} event.  The default is
        <code>false</code>.</li>
      <li><code>ranges</code>: (Optional) An array of static ranges that will be affected
        by a change to the DOM if the input event is not canceled. </li>
    </ul>
    <p><em>The <code>InputEventInit</code> dictionary also accepts fields from
        {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event",
        "EventInit")}} dictionaries.</em></p>
  </dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("InputEvent")}}, the interface of the objects it constructs.</li>
</ul>
