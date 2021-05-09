---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
tags:
  - JavaScript
  - Method
  - Promise
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Promise.any
---
<div>{{JSRef}}</div>

<p><code>Promise.any()</code> takes an iterable of {{JSxRef("Promise")}} objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an {{JSxRef("AggregateError")}}, a new subclass of {{JSxRef("Error")}} that groups together individual errors. Essentially, this method is the opposite of {{JSxRef("Promise.all()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-any.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre>Promise.any(<var>iterable</var>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>iterable</var></code></dt>
 <dd>An <a href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol">iterable</a> object, such as an {{JSxRef("Array")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<ul>
 <li>An <strong>already rejected</strong> {{JSxRef("Promise")}} if the <var>iterable</var> passed is empty.</li>
 <li>An <strong>asynchronously resolved</strong> {{JSxRef("Promise")}} if the <var>iterable</var> passed contains no promises.</li>
 <li>A <strong>pending</strong> {{JSxRef("Promise")}} in all other cases. This returned promise is then resolved/rejected <strong>asynchronously</strong> (as soon as the stack is empty) when any of the promises in the given <var>iterable</var> resolve, or if all the promises have rejected.</li>
</ul>

<h2 id="Description">Description</h2>

<p>This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one. Unlike {{JSxRef("Promise.all()")}}, which returns an <em>array</em> of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: This method rejects upon receiving an <em>empty iterable</em>, since, truthfully, the iterable contains no items that fulfill.</p>

<p>Also, unlike {{JSxRef("Promise.race()")}}, which returns the first <em>settled</em> value (either fulfillment or rejection), this method returns the first <em>fulfilled</em> value. This method will ignore all rejected promises up until the first promise that fulfils.</p>

<h3 id="Fulfillment">Fulfillment</h3>

<p>The returned promise is fulfilled with <strong>the first</strong> resolved value (or non-promise value) in the <var>iterable</var> passed as the argument, whether or not the other promises have rejected.</p>

<ul>
 <li>If a nonempty <em>iterable</em> is passed, and <strong>any</strong> of the promises fulfill, or are not promises, then the promise returned by this method is fulfilled asynchronously.</li>
</ul>

<h3 id="Rejection">Rejection</h3>

<p>If all of the passed-in promises reject, <code>Promise.any</code> asynchronously rejects with an {{JSxRef("AggregateError")}} object, which extends {{JSxRef("Error")}}, and contains an <code>errors</code> property with an array of rejection values.</p>

<ul>
 <li>If an empty <var>iterable</var> is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an <code>AggregateError</code> object whose <code>errors</code> property is an empty array.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="First_to_fulfil">First to fulfil</h3>

<p><code>Promise.any()</code> resolves with the first promise to fulfil, even if a promise rejects first. This is in contrast to {{jsxref("Promise.race()")}}, which resolves or rejects with the first promise to settle.</p>

<pre class="brush: js">const pErr = new Promise((resolve, reject) =&gt; {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) =&gt; {
  console.log(value);
  // pFast fulfils first
})
// expected output: "Done quick"
</pre>

<h3 id="Rejections_with_AggregateError">Rejections with AggregateError</h3>

<p><code>Promise.any()</code> rejects with an {{jsxref("AggregateError")}} if no promise fulfils.</p>

<pre class="brush: js">const pErr = new Promise((resolve, reject) =&gt; {
  reject('Always fails');
});

Promise.any([pErr]).catch((err) =&gt; {
  console.log(err);
})
// expected output: "AggregateError: No Promise in Promise.any was resolved"
</pre>

<h3 id="Displaying_the_first_image_loaded">Displaying the first image loaded</h3>

<p>In this example, we have a function that fetches an image and returns a blob. We use <code>Promise.any()</code> to fetch a couple of images and display the first one available (i.e. whose promise has resolved).</p>

<pre class="brush: js">function fetchAndDecode(url) {
  return fetch(url).then(response =&gt; {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
}

let coffee = fetchAndDecode('coffee.jpg');
let tea = fetchAndDecode('tea.jpg');

Promise.any([coffee, tea]).then(value =&gt; {
  let objectURL = URL.createObjectURL(value);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e =&gt; {
  console.log(e.message);
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Promise.any</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-promise"><code>core-js</code></a></li>
 <li>{{JSxRef("Promise")}}</li>
 <li>{{JSxRef("Promise.allSettled()")}}</li>
 <li>{{JSxRef("Promise.all()")}}</li>
 <li>{{JSxRef("Promise.race()")}}</li>
</ul>
