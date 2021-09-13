---
title: MouseEvent.button
slug: Web/API/MouseEvent/button
tags:
- API
- DOM
- DOM Events
- MouseEvent
- Property
- Read-only
- Reference
browser-compat: api.MouseEvent.button
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>MouseEvent.button</code></strong> read-only property indicates which
  button was pressed on the mouse to trigger the event.</p>

<p>This property only guarantees to indicate which buttons are pressed during events
  caused by pressing or releasing one or multiple buttons. As such, it is not reliable for
  events such as {{event("mouseenter")}}, {{event("mouseleave")}}, {{event("mouseover")}},
  {{event("mouseout")}} or {{event("mousemove")}}.</p>

<p>Users may change the configuration of buttons on their pointing device so that if an
  event's button property is zero, it may not have been caused by the button that is
  physically left–most on the pointing device; however, it should behave as if the left
  button was clicked in the standard button layout.</p>

<div class="note">
  <p><strong>Note:</strong> Do not confuse this property with the
    {{domxref("MouseEvent.buttons")}} property, which indicates which buttons are pressed
    for all mouse events types.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>buttonPressed</em> = <em>instanceOfMouseEvent</em>.button
</pre>

<h3 id="Return_value">Return value</h3>

<p>A number representing a given button:</p>

<ul>
  <li><code>0</code>: Main button pressed, usually the left button or the un-initialized
    state</li>
  <li><code>1</code>: Auxiliary button pressed, usually the wheel button or the middle
    button (if present)</li>
  <li><code>2</code>: Secondary button pressed, usually the right button</li>
  <li><code>3</code>: Fourth button, typically the <em>Browser Back</em> button</li>
  <li><code>4</code>: Fifth button, typically the <em>Browser Forward</em> button</li>
</ul>

<p>As noted above, buttons may be configured differently to the standard "left to right"
  layout. A mouse configured for left-handed use may have the button actions reversed.
  Some pointing devices only have one button and use keyboard or other input mechanisms to
  indicate main, secondary, auxilary, etc. Others may have many buttons mapped to
  different functions and button values.</p>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;button id="button" oncontextmenu="event.preventDefault();"&gt;Click here with your mouse...&lt;/button&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let button = document.querySelector('#button');
let log = document.querySelector('#log');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        log.textContent = 'Left button clicked.';
        break;
      case 1:
        log.textContent = 'Middle button clicked.';
        break;
      case 2:
        log.textContent = 'Right button clicked.';
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
    }
  }
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MouseEvent")}}</li>
</ul>
