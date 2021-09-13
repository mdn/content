---
title: Touch.force
slug: Web/API/Touch/force
tags:
- API
- Experimental
- Property
- Read-only
- touch
browser-compat: api.Touch.force
---
<p>{{ APIRef("Touch Events") }}{{SeeCompatTable}}</p>

<p>The <code><strong>Touch.force</strong></code> read-only property returns the amount of
  pressure the user is applying to the touch surface for a {{ domxref("Touch") }} point.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>touchItem</em>.force;</pre>

<h3 id="Return_Value">Return value</h3>

<p>A <code>float</code> that represents the amount of pressure the user is applying to the
  touch surface. This is a value between <code>0.0</code> (no pressure) and
  <code>1.0</code> (the maximum amount of pressure the hardware can recognize). A value of
  <code>0.0</code> is returned if no value is known (for example the touch device does not
  support this property). In environments where force is known, the absolute pressure
  represented by the force attribute, and the sensitivity in levels of pressure, may vary.
</p>

<h2 id="Example">Example</h2>

<p>This example illustrates using the {{domxref("Touch")}} interface's
  {{domxref("Touch.force")}} property. This property is a relative value of pressure
  applied, in the range <code>0.0</code> to <code>1.0</code>, where <code>0.0</code> is no
  pressure, and <code>1.0</code> is the highest level of pressure the touch device is
  capable of sensing.</p>

<p>In following code snippet, the {{event("touchstart")}} event handler iterates through
  the <code>targetTouches</code> list and logs the <code>force</code> value of each touch
  point but the code could invoke different processing depending on the value.</p>

<pre class="brush: js">someElement.addEventListener('touchstart', function(e) {
   // Iterate through the list of touch points and log each touch
   // point's force.
   for (var i=0; i &lt; e.targetTouches.length; i++) {
     // Add code to "switch" based on the force value. For example
     // minimum pressure vs. maximum pressure could result in
     // different handling of the user's input.
     console.log("targetTouches[" + i + "].force = " + e.targetTouches[i].force);
   }
}, false);

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
