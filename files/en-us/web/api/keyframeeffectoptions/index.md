---
title: KeyframeEffectOptions
slug: Web/API/KeyframeEffectOptions
tags:
  - API
  - Dictionary
  - Draft
  - EffectTiming
  - Experimental
  - KeyframeEffect
  - KeyframeEffectOptions
  - NeedsCompatTable
  - Reference
  - Web Animations
browser-compat: api.KeyframeEffectOptions
---
<p>{{APIRef("Web Animations")}}{{Draft}}{{SeeCompatTable}}</p>

<p>The <strong><code>KeyframeEffectOptions</code></strong> dictionary, part of the {{DOMxRef('Web Animations API', '', '', 'true')}}, is used by {{DOMxRef('Element.animate()')}} and {{DOMxRef('KeyframeEffect.KeyframeEffect', 'KeyframeEffect()')}} to describe timing properties for animation effects. These properties are all optional, although without setting a <code>duration</code> the animation will not play.</p>

<p>In other words, these properties describe how the {{Glossary("user agent")}} should go about making the transition from keyframe to keyframe, and how to behave when the animation begins and ends.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt><code>composite</code> {{Experimental_Inline}} {{Optional_Inline}}</dt>
 <dd>Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to <code>replace</code>.
 <ul>
  <li><code>add</code> dictates an additive effect, where each successive iteration builds on the last. For instance with <code>transform</code>, a <code>translateX(-200px)</code> would not override an earlier <code>rotate(20deg)</code> value but result in <code>translateX(-200px) rotate(20deg)</code>.</li>
  <li><code>accumulate</code> is similar but a little smarter: <code>blur(2)</code> and <code>blur(5)</code> become <code>blur(7)</code>, not <code>blur(2) blur(5)</code>.</li>
  <li><code>replace</code> overwrites the previous value with the new one.</li>
 </ul>
 </dd>
 <dt><code>iterationComposite</code> {{Experimental_Inline}} {{Optional_Inline}}</dt>
 <dd>Determines how values build from iteration to iteration in this animation. Can be set to <code>accumulate</code> or <code>replace</code> (see above). Defaults to <code>replace</code>.</dd>
 <dt><code>pseudoElement</code> {{Experimental_Inline}} {{Optional_Inline}}</dt>
 <dd>The selector of the pseudo-element to be targeted, if any. Defaults to <code>null</code>.</dd>
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

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{DOMxRef("EffectTiming")}}</li>
 <li>{{DOMxRef('Web Animations API', '', '', 'true')}}</li>
 <li>{{DOMxRef('Web Animations API.Using the Web Animations API', 'Using the Web Animations API', '', 'true')}}</li>
 <li>{{DOMxRef('Element.animate()')}}</li>
 <li>{{DOMxRef('KeyframeEffect.KeyframeEffect', 'KeyframeEffect()')}}</li>
</ul>
