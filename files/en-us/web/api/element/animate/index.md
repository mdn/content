---
title: Element.animate()
slug: Web/API/Element/animate
tags:
- API
- Animation
- Element
- Method
- Reference
- Web Animations
browser-compat: api.Element.animate
---
<div>{{APIRef('Web Animations')}}</div>

<p>The {{domxref("Element")}} interface's <strong><code>animate()</code></strong> method
  is a shortcut method which creates a new {{domxref("Animation")}}, applies it to the
  element, then plays the animation. It returns the created {{domxref("Animation")}}
  object instance.</p>

<div class="note">
  <p><strong>Note:</strong> Elements can have multiple animations applied to them. You can get a list of the
    animations that affect an element by calling {{domxref("Element.getAnimations()")}}.
  </p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">animate(keyframes, options)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>keyframes</code></dt>
  <dd>
    <p>Either an array of keyframe objects, <strong>or</strong> a keyframe object whose
      properties are arrays of values to iterate over. See <a
        href="/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats">Keyframe Formats </a>for more details.</p>
  </dd>
  <dt><code>options</code></dt>
  <dd><p>Either an <strong>integer representing the animation's duration</strong> (in
    milliseconds), <strong>or</strong> an Object containing one or more timing
    properties:</p>
    <dl>
      <dt><code>id {{optional_inline}}</code></dt>
      <dd>A property unique to <code>animate()</code>: a <a
          href="/en-US/docs/Web/API/DOMString"
          title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a>
        with which to reference the animation.</dd>
    </dl>

    <dl>
      <dt>{{domxref("EffectTiming.delay", "delay")}} {{optional_inline}}</dt>
      <dd>The number of milliseconds to delay the start of the animation. Defaults to 0.</dd>
      <dt>{{domxref("EffectTiming.direction", "direction")}} {{optional_inline}}</dt>
      <dd>Whether the animation runs forwards (<code>normal</code>), backwards (<code>reverse</code>), switches direction after each iteration (<code>alternate</code>), or runs backwards and switches direction after each iteration (<code>alternate-reverse</code>). Defaults to <code>"normal"</code>.</dd>
      <dt>{{domxref("EffectTiming.duration", "duration")}} {{optional_inline}}</dt>
      <dd>The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.</dd>
      <dt>{{domxref("EffectTiming.easing", "easing")}} {{optional_inline}}</dt>
      <dd>The rate of the animation's change over time. Accepts the pre-defined values <code>"linear"</code>, <code>"ease"</code>, <code>"ease-in"</code>, <code>"ease-out"</code>, and <code>"ease-in-out"</code>, or a custom <code>"cubic-bezier"</code> value like <code>"cubic-bezier(0.42, 0, 0.58, 1)"</code>. Defaults to <code>"linear"</code>.</dd>
      <dt>{{domxref("EffectTiming.endDelay", "endDelay")}} {{optional_inline}}</dt>
      <dd>The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0. </dd>
      <dt>{{domxref("EffectTiming.fill", "fill")}} {{optional_inline}}</dt>
      <dd>Dictates whether the animation's effects should be reflected by the element(s) prior to playing (<code>"backwards"</code>), retained after the animation has completed playing (<code>"forwards"</code>), or <code>both</code>. Defaults to <code>"none"</code>.</dd>
      <dt>{{domxref("EffectTiming.iterationStart", "iterationStart")}} {{optional_inline}}</dt>
      <dd>Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.</dd>
      <dt>{{domxref("EffectTiming.iterations", "iterations")}} {{optional_inline}}</dt>
      <dd>The number of times the animation should repeat. Defaults to <code>1</code>, and can also take a value of {{jsxref("Infinity")}} to make it repeat for as long as the element exists.</dd>
     </dl>

  </dd>
</dl>

<p>You can also include a composite operation or iteration composite operation in your
  options list:</p>

<dl>
  <dt>
    <code><a href="/en-US/docs/Web/API/KeyframeEffect/composite">composite</a> {{optional_inline}}</code>
  </dt>
  <dd>Determines how values are combined between this animation and other, separate
    animations that do not specify their own specific composite operation. Defaults to
    <code>replace</code>.
    <ul>
      <li><code>add</code> dictates an additive effect, where each successive iteration
        builds on the last. For instance with <code>transform</code>, a
        <code>translateX(-200px)</code> would not override an earlier
        <code>rotate(20deg)</code> value but result in
        <code>translateX(-200px) rotate(20deg)</code>.</li>
      <li><code>accumulate</code> is similar but a little smarter: <code>blur(2)</code>
        and <code>blur(5)</code> become <code>blur(7)</code>, not
        <code>blur(2) blur(5)</code>.</li>
      <li><code>replace</code> overwrites the previous value with the new one. </li>
    </ul>
  </dd>
  <dt>
    <code><a href="/en-US/docs/Web/API/KeyframeEffect/iterationComposite">iterationComposite</a> {{optional_inline}}</code>
  </dt>
  <dd>Determines how values build from iteration to iteration in this animation. Can be
    set to <code>accumulate</code> or <code>replace</code> (see above). Defaults
    to <code>replace</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Returns an {{domxref("Animation")}}.</p>

<h2 id="Examples">Examples</h2>

<p>In the demo <a href="https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010">Down the
    Rabbit Hole (with the Web Animation API)</a>, we use the convenient
  <code>animate()</code> method to immediately create and play an animation on the
  <code>#tunnel</code> element to make it flow upwards, infinitely. Notice the array of
  objects passed as keyframes and also the timing options block.</p>

<pre class="brush: js">document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
</pre>

<h3 id="Implicit_tofrom_keyframes">Implicit to/from keyframes</h3>

<p>In newer browser versions, you are able to set a beginning or end state for an
  animation only (i.e. a single keyframe), and the browser will infer the other end of the
  animation if it is able to. For example, consider <a
    href="https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html">this
    simple animation</a> — the Keyframe object looks like so:</p>

<pre class="brush: js">let rotate360 = [
  { transform: 'rotate(360deg)' }
];</pre>

<p>We have only specified the end state of the animation, and the beginning state is
  implied.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
  <li>{{domxref("Element.getAnimations()")}}</li>
  <li>{{domxref("Animation")}}</li>
</ul>
