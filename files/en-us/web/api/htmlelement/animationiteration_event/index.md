---
title: 'HTMLElement: animationiteration event'
slug: Web/API/HTMLElement/animationiteration_event
tags:
  - API
  - Animation
  - AnimationEvent
  - CSS Animations
  - Event
  - HTMLElement
  - Reference
browser-compat: api.HTMLElement.animationiteration_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>animationiteration</code></strong> event is fired when an iteration of a <a href="/en-US/docs/Web/CSS/CSS_Animations">CSS Animation</a> ends, and another one begins. This event does not occur at the same time as the {{domxref("HTMLElement/animationend_event", "animationend")}} event, and therefore does not occur for animations with an <code>animation-iteration-count</code> of one.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{domxref("AnimationEvent")}}</td>
  </tr>
  <tr>
   <th>Event handler property</th>
   <td>{{domxref("GlobalEventHandlers/onanimationiteration","onanimationiteration")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This code uses <code>animationiteration</code> to keep track of the number of iterations an animation has completed:</p>

<pre class="brush: js">const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.addEventListener('animationiteration', () =&gt; {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
});</pre>

<p>The same, but using the <code>onanimationiteration</code> event handler property:</p>

<pre class="brush: js">const animated = document.querySelector('.animated');

let iterationCount = 0;

animated.onanimationiteration = () =&gt; {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
};</pre>

<h3 id="Live_example">Live example</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="animation-example"&gt;
    &lt;div class="container"&gt;
        &lt;p class="animation"&gt;You chose a cold night to visit our planet.&lt;/p&gt;
    &lt;/div&gt;
    &lt;button class="activate" type="button"&gt;Activate animation&lt;/button&gt;
    &lt;div class="event-log"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
</pre>

<h4 id="JS">JS</h4>

<pre class="brush: js">const animation = document.querySelector('p.animation');
const animationEventLog = document.querySelector('.animation-example&gt;.event-log');
const applyAnimation = document.querySelector('.animation-example&gt;button.activate');
let iterationCount = 0;

animation.addEventListener('animationstart', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener('animationiteration', () =&gt; {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener('animationend', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove('active');
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener('animationcancel', () =&gt; {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener('click', () =&gt; {
  animation.classList.toggle('active');
  animationEventLog.textContent = '';
  iterationCount = 0;
  let active = animation.classList.contains('active');
  if (active) {
    applyAnimation.textContent = "Cancel animation";
  } else {
    applyAnimation.textContent = "Activate animation";
  }
});
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Animations">CSS Animations</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">Using CSS Animations</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>Related events: {{domxref("HTMLElement/animationstart_event", "animationstart")}}, {{domxref("HTMLElement/animationend_event", "animationend")}}, {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}</li>
 <li>This event on {{domxref("Document")}} targets: {{domxref("Document/animationiteration_event", "animationiteration")}}</li>
 <li>This event on {{domxref("Window")}} targets: {{domxref("Window/animationiteration_event", "animationiteration")}}</li>
</ul>
