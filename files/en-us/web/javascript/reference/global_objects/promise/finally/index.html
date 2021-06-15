---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
tags:
- JavaScript
- Method
- Promises
- Prototype
- Reference
- finally
- Polyfill
browser-compat: javascript.builtins.Promise.finally
---
<div>{{JSRef}}</div>

<p>The <strong><code>finally()</code></strong> method returns a {{jsxref("Promise")}}.
  When the promise is settled, i.e either fulfilled or rejected, the specified callback
  function is executed. This provides a way for code to be run whether the promise was
  fulfilled successfully or rejected once the <code>Promise</code> has been dealt with.
</p>

<p>This helps to avoid duplicating code in both the promise's {{jsxref("Promise.then",
  "then()")}} and {{jsxref("Promise.catch", "catch()")}} handlers.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-finally.html", "taller")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>p</var>.finally(<var>onFinally</var>);

<var>p</var>.finally(function() {
   // settled (fulfilled or rejected)
});
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>onFinally</var></code></dt>
  <dd>A {{jsxref("Function")}} called when the <code>Promise</code> is settled.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Returns a {{jsxref("Promise")}} whose <code>finally</code> handler is set to the
  specified function, <code>onFinally</code>.</p>

<h2 id="Description">Description</h2>

<p>The <code>finally()</code> method can be useful if you want to do some processing or
  cleanup once the promise is settled, regardless of its outcome.</p>

<p>The <code>finally()</code> method is very similar to calling
  <code>.then(onFinally, onFinally)</code> however there are a couple of differences:</p>

<ul>
  <li>When creating a function inline, you can pass it once, instead of being forced to
    either declare it twice, or create a variable for it</li>
  <li>A <code>finally</code> callback will not receive any argument, since there's no
    reliable means of determining if the promise was fulfilled or rejected. This use case
    is for precisely when you <em>do not care</em> about the rejection reason, or the
    fulfillment value, and so there's no need to provide it. So for example:
    <ul>
      <li>Unlike <code>Promise.resolve(2).then(() =&gt; {}, () =&gt; {})</code> (which
        will be resolved with <code>undefined</code>),
        <code>Promise.resolve(2).finally(() =&gt; {})</code> will be resolved with
        <code>2</code>.</li>
      <li>Similarly, unlike <code>Promise.reject(3).then(() =&gt; {}, () =&gt; {})</code>
        (which will be fulfilled with <code>undefined</code>),
        <code>Promise.reject(3).finally(() =&gt; {})</code> will be rejected with
        <code>3</code>.</li>
    </ul>
  </li>
</ul>

<div class="note">
  <p><strong>Note:</strong> A <code>throw</code> (or returning a rejected promise) in the
    <code>finally</code> callback will reject the new promise with the rejection reason
    specified when calling <code>throw</code>.</p>
</div>

<h2 id="Examples">Examples</h2>

<h3 id="Using_finally">Using finally</h3>

<pre class="brush: js">let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType &amp;&amp; contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
  .finally(function() { isLoading = false; });

</pre>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Promise.prototype.finally</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-promise"><code>core-js</code></a></li>
  <li>{{jsxref("Promise")}}</li>
  <li>{{jsxref("Promise.prototype.then()")}}</li>
  <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
