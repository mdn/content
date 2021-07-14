---
title: WebAssembly.Global
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Global
---
<div>{{JSRef}}</div>

<p>A <strong><code>WebAssembly.Global</code></strong> object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}} instances. This allows dynamic linking of multiple modules.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global"><code>WebAssembly.Global()</code></a></dt>
 <dd>Creates a new <code>Global</code> object.</dd>
</dl>

<h2 id="Global_instances">Global instances</h2>

<p>All <code>Global</code> instances inherit from the <code>Global()</code> constructor's prototype object — this can be modified to affect all <code>Global</code> instances.</p>

<h3 id="Instance_properties">Instance properties</h3>

<dl>
 <dt><code>Global.prototype.constructor</code></dt>
 <dd>Returns the function that created this object's instance. By default this is the {{jsxref("WebAssembly.Global()")}} constructor.</dd>
 <dt><code>Global.prototype[@@toStringTag]</code></dt>
 <dd>The initial value of the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag">@@toStringTag</a> property is the String value "WebAssembly.Global".</dd>
 <dt><code>Global.prototype.value</code></dt>
 <dd>The value contained inside the global variable — this can be used to directly set and get the global's value.</dd>
</dl>

<h3 id="Instance_methods">Instance methods</h3>

<dl>
 <dt><code>Global.prototype.valueOf()</code></dt>
 <dd>Old-style method that returns the value contained inside the global variable.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_Global_instance">Creating a new Global instance</h3>

<p>The following example shows a new global instance being created using the <code>WebAssembly.Global()</code> constructor. It is being defined as a mutable <code>i32</code> type, with a value of 0.</p>

<p>The value of the global is then changed, first to <code>42</code> using the <code>Global.value</code> property, and then to 43 using the <code>incGlobal()</code> function exported out of the <code>global.wasm</code> module (this adds 1 to whatever value is given to it and then returns the new value).</p>

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
<p><strong>Note:</strong> You can see the example <a href="https://mdn.github.io/webassembly-examples/js-api-examples/global.html">running live on GitHub</a>; see also the <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html">source code</a>.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebAssembly">WebAssembly</a> overview page</li>
 <li><a href="/en-US/docs/WebAssembly/Concepts">WebAssembly concepts</a></li>
 <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a></li>
 <li><a href="https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md">Import/Export mutable globals proposal</a></li>
</ul>
