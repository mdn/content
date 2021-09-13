---
title: EffectTiming.iterations
slug: Web/API/EffectTiming/iterations
tags:
  - API
  - Animation
  - EffectTiming
  - Experimental
  - KeyframeEffect
  - Property
  - Reference
  - Web Animations
  - animate
  - iterations
  - waapi
  - web animations api
browser-compat: api.EffectTiming.iterations
---
<div>{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}</div>

<p>The <a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a> dictionary
  {{domxref("EffectTiming")}}'s <strong><code>iterations</code></strong> property
  specifies the number of times the animation should repeat. The default value is 1,
  indicating that it should only play once, but you can set it to any floating-point value
  (including positive {{jsxref("Infinity")}} defaults to <code>1</code>, and can also take
  a value of <code>Infinity</code> to make it loop infinitely.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>timingProperties</em> = {
  iterations: <em>numberOfIterations</em>
};

<em>timingProperties</em>.iterations = <em>numberOfIterations</em>;
</pre>

<h3 id="Value">Value</h3>

<p>A floating-point value specifying the number of times the animation sequence will play
  through. Any value from 0 (don't play the animation at all) to positive
  {{jsxref("Infinity")}} (run the animation indefinitely) is supported. Defaults to 1,
  meaning the animation sequence plays through once then stops automatically.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>TypeError</code></dt>
  <dd>An attempt was made to set the value of this property to a negative number or
    {{jsxref("NaN")}}. The property's value is left unchanged.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the <a href="https://codepen.io/rachelnabors/pen/bEPdQr?editors=0010">Forgotten
    Key</a> example, Alice waves her arm up and down the entire time the page is open by
  passing <code>Infinity</code> as the value for her <code>iterations</code> property:</p>

<pre class="brush: js">// Get Alice's arm, and wave it up and down
document.getElementById("alice_arm").animate([
  { transform: 'rotate(10deg)' },
  { transform: 'rotate(-40deg)' }
], {
  easing: 'steps(2, end)',
  iterations: <strong>Infinity,</strong>
  direction: 'alternate',
  duration: 600
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
  <li>{{domxref("Element.animate()")}},
    and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
    both accept an object of timing properties including this one.
  </li>
  <li>CSS's {{cssxref("animation-iteration-count")}}</li>
</ul>
