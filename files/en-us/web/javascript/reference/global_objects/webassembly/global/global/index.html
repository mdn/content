---
title: WebAssembly.Global() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global
tags:
- Constructor
- JavaScript
- Reference
- WebAssembly
browser-compat: javascript.builtins.WebAssembly.Global.Global
---
<div>{{JSRef}}</div>

<p>A <strong><code>WebAssembly.Global()</code></strong> constructor creates a new
  <code>Global</code> object representing a global variable instance, accessible from both
  JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}}
  instances. This allows dynamic linking of multiple modules.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new WebAssembly.Global(descriptor, value)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>descriptor</em></dt>
  <dd>A <code>GlobalDescriptor</code> dictionary object, which contains two properties:
    <ul>
      <li><code>value</code>: A <a
          href="/en-US/docs/Web/API/USVString"><code>USVString</code></a> representing the
        data type of the global. This can be one of <code>i32</code>, <code>i64</code>,
        <code>f32</code>, and <code>f64</code>. USVString corresponds to the set of all
        possible sequences of unicode scalar values. USVString maps to a String when
        returned in JavaScript; it's generally only used for APIs that perform text
        processing and need a string of unicode scalar values to operate on. USVString is
        equivalent to DOMString except for not allowing unpaired surrogate codepoints.
        Unpaired surrogate codepoints present in USVString are converted by the browser to
        Unicode 'replacement character' U+FFFD, (�).</li>
      <li><code>mutable</code>: A boolean value that determines whether the global is
        mutable or not. By default, this is <code>false</code>.</li>
    </ul>
  </dd>
  <dt><em>value</em></dt>
  <dd>The value the variable contains. This can be any value, as long as its type matches
    the variable's data type. If no value is specified, a typed 0 value is used, as
    specified by the <a
      href="https://webassembly.github.io/spec/js-api/#defaultvalue"><code>DefaultValue</code>
      algorithm</a>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_Global_instance">Creating a new Global instance</h3>

<p>The following example shows a new global instance being created using the
  <code>WebAssembly.Global()</code> constructor. It is being defined as a mutable
  <code>i32</code> type, with a value of 0.</p>

<p>The value of the global is then changed, first to <code>42</code> using the
  <code>Global.value</code> property, and then to 43 using the <code>incGlobal()</code>
  function exported out of the <code>global.wasm</code> module (this adds 1 to whatever
  value is given to it and then returns the new value).</p>

<pre class="brush: js">const output = document.getElementById('output');

function assertEq(msg, got, expected) {
  output.innerHTML += `Testing ${msg}: `;
  if (got !== expected)
    output.innerHTML += `FAIL!&lt;br&gt;Got: ${got}&lt;br&gt;Expected: ${expected}&lt;br&gt;`;
  else
    output.innerHTML += `SUCCESS! Got: ${got}&lt;br&gt;`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) =&gt; {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});</pre>

<div class="note">
  <p><strong>Note:</strong> You can see the example <a
      href="https://mdn.github.io/webassembly-examples/js-api-examples/global.html">running
      live on GitHub</a>; see also the <a
      href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html">source
      code</a>.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
  <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
  <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly
      JavaScript API</a></li>
  <li><a
      href="https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md">Import/Export
      mutable globals proposal</a></li>
</ul>
