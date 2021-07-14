---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
- ECMAScript 2015
- JavaScript
- Method
- Promise
- Prototype
browser-compat: javascript.builtins.Promise.then
---
<div>{{JSRef}}</div>

<p>The <code><strong>then()</strong></code> method returns a {{jsxref("Promise")}}. It
  takes up to two arguments: callback functions for the success and failure cases of the
  <code>Promise</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-then.html")}}</div>


<div class="note">
  <p><strong>Note:</strong> If one or both arguments are omitted or are provided non-functions, then
    <code>then</code> will be missing the handler(s), but will not generate any errors. If
    the <code>Promise</code> that <code>then</code> is called on adopts a state
    (<code>fulfillment</code> or <code>rejection</code>) for which <code>then</code> has
    no handler, the returned promise adopts the final state of the original
    <code>Promise</code> on which <code>then</code> was called.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>p.then(onFulfilled[, onRejected])</var>;

p.then(value =&gt; {
  // fulfillment
}, reason =&gt; {
  // rejection
});
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>onFulfilled</code> {{optional_inline}}</dt>
  <dd>A {{jsxref("Function")}} called if the <code>Promise</code> is fulfilled. This
    function has one argument, the <code>fulfillment value</code>. If it is not a
    function, it is internally replaced with an "Identity" function (it returns the
    received argument).</dd>
  <dt><code>onRejected</code> {{optional_inline}}</dt>
  <dd>A {{jsxref("Function")}} called if the <code>Promise</code> is rejected. This
    function has one argument, the <code>rejection reason</code>. If it is not a function,
    it is internally replaced with a "Thrower" function (it throws an error it received as
    argument).</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Once a {{jsxref("Promise")}} is fulfilled or rejected, the respective handler function
  (<code>onFulfilled</code> or <code>onRejected</code>) will be called
  <strong>asynchronously</strong> (scheduled in the current thread loop). The behavior of
  the handler function follows a specific set of rules. If a handler function:</p>

<ul>
  <li>returns a value, the promise returned by <code>then</code> gets resolved with the
    returned value as its value.</li>
  <li>doesn't return anything, the promise returned by <code>then</code> gets resolved
    with an <code>undefined</code> value.</li>
  <li>throws an error, the promise returned by <code>then</code> gets rejected with the
    thrown error as its value.</li>
  <li>returns an already fulfilled promise, the promise returned by <code>then</code> gets
    fulfilled with that promise's value as its value.</li>
  <li>returns an already rejected promise, the promise returned by <code>then</code> gets
    rejected with that promise's value as its value.</li>
  <li>returns another <strong>pending</strong> promise object, the resolution/rejection of
    the promise returned by <code>then</code> will be subsequent to the
    resolution/rejection of the promise returned by the handler. Also, the resolved value
    of the promise returned by <code>then</code> will be the same as the resolved value of
    the promise returned by the handler.</li>
</ul>

<p>Following, an example to demonstrate the asynchronicity of the <code>then</code>
  method.</p>

<pre class="brush: js">// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value =&gt; {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() =&gt; {
    console.log(thenProm);
});

// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}</pre>

<h2 id="Description">Description</h2>

<p>As the <code>then</code> and {{jsxref("Promise.prototype.catch()")}} methods return
  promises, they <a href="/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining">can be
    chained</a> — an operation called <em>composition</em>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_then_method">Using the <code>then</code> method</h3>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  resolve('Success!');
  // or
  // reject(new Error("Error!"));
});

p1.then(value =&gt; {
  console.log(value); // Success!
}, reason =&gt; {
  console.error(reason); // Error!
});
</pre>

<h3 id="Chaining">Chaining</h3>

<p>The <code>then</code> method returns a <code>Promise</code> which allows for method
  chaining.</p>

<p>If the function passed as handler to <code>then</code> returns a <code>Promise</code>,
  an equivalent <code>Promise</code> will be exposed to the subsequent <code>then</code>
  in the method chain. The below snippet simulates asynchronous code with the
  <code>setTimeout</code> function.</p>

<pre class="brush: js">Promise.resolve('foo')
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string); // foobarbaz
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz</pre>

<p>When a value is returned from within a <code>then</code> handler, it will effectively
  return
  <code>Promise.resolve(&lt;value returned by whichever handler was called&gt;)</code>.
</p>

<pre class="brush: js">var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works'); // 2 - A synchronous value works
});

p2.then(function(value) {
  console.log(value); // 1
});
</pre>

<p>A <code>then</code> call will return a rejected promise if the function throws an error
  or returns a rejected Promise.</p>

<pre class="brush: js">Promise.resolve()
  .then(() =&gt; {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .then(() =&gt; {
    console.log('Not called.');
  }, error =&gt; {
    console.error('onRejected function called: ' + error.message);
  });</pre>

<p>In all other cases, a resolving Promise is returned. In the following example, the
  first <code>then()</code> will return <code>42</code> wrapped in a resolving Promise
  even though the previous Promise in the chain was rejected.</p>

<pre class="brush: js">Promise.reject()
  .then(() =&gt; 99, () =&gt; 42) // onRejected returns 42 which is wrapped in a resolving Promise
  .then(solution =&gt; console.log('Resolved with ' + solution)); // Resolved with 42</pre>

<p>In practice, it is often desirable to catch rejected promises rather than use
  <code>then</code>'s two case syntax, as demonstrated below.</p>

<pre class="brush: js">Promise.resolve()
  .then(() =&gt; {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch(error =&gt; {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() =&gt; {
    console.log("I am always called even if the prior then's promise rejects");
  });</pre>

<p>You can also use chaining to implement one function with a Promise-based API on top of
  another such function.</p>

<pre class="brush: js">function fetch_current_data() {
  // The <a href="/en-US/docs/Web/API/GlobalFetch/fetch">fetch</a>() API returns a Promise.  This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch('current-data.json').then(response =&gt; {
    if (response.headers.get('content-type') != 'application/json') {
      throw new TypeError();
    }
    var j = response.json();
    // maybe do something with j
    return j; // fulfillment value given to user of
              // fetch_current_data().then()
  });
}
</pre>

<p>If <code>onFulfilled</code> returns a promise, the return value of <code>then</code>
  will be resolved/rejected by the promise.</p>

<pre class="brush: js">function resolveLater(resolve, reject) {
  setTimeout(function() {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(function() {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(function(v) {
  console.log('resolved', v);  // "resolved", 10
}, function(e) {
  // not called
  console.error('rejected', e);
});

var p3 = p1.then(function() {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(function(v) {
  // not called
  console.log('resolved', v);
}, function(e) {
  console.error('rejected', e); // "rejected", 'Error'
});
</pre>

<h3 id="window.setImmediate_style_promise-based_polyfill">window.setImmediate style
  promise-based polyfill</h3>

<p>Using a {{jsxref("Function.prototype.bind()")}} <code>Reflect.apply</code>
  ({{jsxref("Reflect.apply()")}}) method to create a (non-cancellable)
  {{domxref("window.setImmediate")}}-style function.</p>

<pre class="brush: js">const nextTick = (() =&gt; {
  const noop = () =&gt; {}; // literally
  const nextTickPromise = () =&gt; Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) =&gt; (
    fn !== undefined
    ? Promise.resolve(args).then(rfab(null, fn, null))
    : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Promise")}}</li>
  <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
