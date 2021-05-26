---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
tags:
- Iterate
- Iteration
- JavaScript
- Language feature
- Reference
- Statement
- asynchronous
- await
browser-compat: javascript.statements.for_await_of
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>for await...of</code> statement</strong> creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in {{jsxref("String")}}, {{jsxref("Array")}}, <code>Array</code>-like objects (e.g., {{jsxref("Functions/arguments", "arguments")}} or {{DOMxRef("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. This statement can only be used inside an {{jsxref("Statements/async_function", "async function", "", 1)}}.</p>

<div class="notecard note">
  <p><strong>Note:</strong> <code>for await...of</code> doesn't work with async iterators that are not async
    iterables.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">for await (<var>variable</var> of <var>iterable</var>) {
  <var>statement</var>
}
</pre>

<dl>
  <dt><code><var>variable</var></code></dt>
  <dd>On each iteration a value of a different property is assigned to
    <code><var>variable</var></code>. <code><var>variable</var></code> may be declared
    with <code>const</code>, <code>let</code>, or <code>var</code>.</dd>
  <dt><code><var>iterable</var></code></dt>
  <dd>Object whose iterable properties are to be iterated over.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Iterating_over_async_iterables">Iterating over async iterables</h3>

<p>You can also iterate over an object that explicitly implements async iterable protocol:
</p>

<pre class="brush: js">const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
   }
})();

// 0
// 1
// 2
</pre>

<h3 id="Iterating_over_async_generators">Iterating over async generators</h3>

<p>Since the return values of async generators conform to the async iterable protocol,
  they can be looped using <code>for await...of</code>.</p>

<pre class="brush: js">async function* asyncGenerator() {
  let i = 0;
  while (i &lt; 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2</pre>

<p>For a more concrete example of iterating over an async generator using
  <code>for await...of</code>, consider iterating over data from an API.</p>

<p>This example first creates an async iterable for a stream of data, then uses it to find
  the size of the response from the API.</p>

<pre class="brush: js">async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Fetches data from url and calculates response size using the async generator.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // The for-await-of loop. Async iterates over each portion of the response.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // expected output: "Response Size: 1071472"
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');</pre>

<h3 id="Iterating_over_sync_iterables_and_generators">Iterating over sync iterables and
  generators</h3>

<p><code>for await...of</code> loop also consumes sync iterables and generators. In that
  case it internally awaits emitted values before assign them to the loop control
  variable.</p>

<pre class="brush: js">function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async function() {
  for await (let num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// compare with for-of loop:

for (let numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> Be aware of yielding rejected promises from sync generator. In
    such case <code>for await...of</code> throws when consuming rejected promise and
    DOESN'T CALL <code>finally</code> blocks within that generator. This can be
    undesirable if you need to free some allocated resources with
    <code>try/finally</code>.</p>
</div>

<pre class="brush: js">function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log('called finally')
  }
}

(async function() {
  try {
    for await (let num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log('caught', e)
  }
})();
// 0
// 1
// 2
// caught 3

// compare with for-of loop:

try {
  for (let numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log('caught', e)
}
// 0
// 1
// Promise { 2 }
// Promise { &lt;rejected&gt; 3 }
// 4
// caught 5
// called finally
</pre>

<p>To make  <code>finally</code> blocks of a sync generator to be always called use
  appropriate form of the loop, <code>for await...of</code> for the async generator and
  <code>for...of</code> for the sync one and await yielded promises explicitly inside the
  loop.</p>

<pre class="brush: js">(async function() {
  try {
    for (let numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log('caught', e)
  }
})()
// 0
// 1
// 2
// caught 3
// called finally</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Global_Objects/Symbol/asyncIterator", "Symbol.asyncIterator")}}</li>
  <li>{{jsxref("Statements/for...of", "for...of")}}</li>
</ul>
