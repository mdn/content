---
title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
tags:
- API
- Constructor
- Experimental
- FormDataEvent
- Forms
- Reference
browser-compat: api.FormDataEvent.FormDataEvent
---
<p>{{APIRef("DOM")}}</p>

<p>The <code><strong>FormDataEvent()</strong></code> constructor creates a new
  {{domxref("FormDataEvent")}} object instance.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">new FormDataEvent(<var>type</var>[, form<var>EventInit</var>]);</pre>

<h3 id="Values">Values</h3>

<dl>
  <dt><code>type</code></dt>
  <dd>A {{domxref("DOMString")}} representing the name of the event.</dd>
  <dt><code>formEventInit</code> {{optional_inline}}</dt>
  <dd>A <code>FormEventInit</code> dictionary, which can take the following optional
    fields:
    <ul>
      <li><code>bubbles</code>: a <code>true</code> or <code>false</code> value indicating whether the event
        bubbles. The default is <code>false</code>.</li>
      <li><code>cancelable</code>: a <code>true</code> or <code>false</code> value indicating whether the event
        can be cancelled. The default is <code>false</code>.</li>
      <li><code>composed</code>: a <code>true</code> or <code>false</code> value indicating whether the event will
        trigger listeners outside of a shadow root (see {{domxref("Event.composed")}} for
        more details). The default is <code>false</code>.</li>
      <li><code>formData</code>: A {{domxref("FormData")}} object to pre-populate the
        FormDataEvent with. This would then be accessed through the
        {{domxref("FormDataEvent.formData")}} property.</li>
    </ul>
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let fd = new FormData();
fd.append('test', 'test');

let fdEv = new FormDataEvent('formdata', { formData: fd });

for (let value of fdEv.formData.values()) {
  console.log(value);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("FormDataEvent")}}</li>
</ul>
