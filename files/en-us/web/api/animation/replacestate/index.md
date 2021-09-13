---
title: Animation.replaceState
slug: Web/API/Animation/replaceState
tags:
  - API
  - Animation
  - Experimental
  - Property
  - Reference
  - replaceState
  - web animations api
browser-compat: api.Animation.replaceState
---
<p>{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}</p>

<p>The read-only <strong><code>Animation.replaceState</code></strong> property of the <a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a> returns the <a href="https://drafts.csswg.org/web-animations-1/#animation-replace-state">replace state</a> of the animation. This will be <code>active</code> if the animation has been removed, or <code>persisted</code> if {{domxref("Animation.persist()")}} has been invoked on it.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let <em>myReplaceState</em> = <em>Animation</em>.replaceState;
</pre>

<h3 id="Value">Value</h3>

<p>A string that represents the replace state of the animation. The value can be one of:</p>

<ul>
 <li><code>active</code>: The initial value of the animation's replace state; when the animation has been removed by the browser's <a href="/en-US/docs/Web/API/Animation#automatically_removing_filling_animations">Automatically removing filling animations</a> behavior.</li>
 <li><code>persisted</code>: The animation has been explicitly persisted by invoking {{domxref("Animation.persist()")}} on it.</li>
 <li><code>removed</code>: The animation has been explicitly removed.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>In our simple <a href="https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html">replace indefinite animations demo</a>, you can see the following code:</p>

<pre class="brush: js">const divElem = document.querySelector('div');

document.body.addEventListener('mousemove', evt =&gt; {
  let anim = divElem.animate(
    { transform: `translate(${ evt.clientX}px, ${evt.clientY}px)` },
    { duration: 500, fill: 'forwards' }
  );

  anim.commitStyles();

  //anim.persist()

  anim.onremove = function() {
    console.log('Animation removed');
  }

  console.log(anim.replaceState);
});</pre>

<p>Here we have a <code>&lt;div&gt;</code> element, and an event listener that fires the event handler code whenever the mouse moves. The event handler sets up an animation that animates the &lt;div&gt; element to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove overriding forward filling animations.</p>

<p>You can see the <code>replaceState</code> of the animation being logged at the end of the handler. This will be <code>active</code> for each animation by default, or <code>persisted</code> if the <code>persist()</code> call is uncommented.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></li>
 <li>{{domxref("Animation")}}</li>
</ul>
