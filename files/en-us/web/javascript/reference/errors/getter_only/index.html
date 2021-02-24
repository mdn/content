---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
tags:
- Error
- Errors
- JavaScript
- Strict Mode
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict
    mode</a>-only exception "setting getter-only property" occurs when there is an attempt
  to set a new value to a property for which only a <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> is specified.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #&lt;Object&gt; which has only a getter (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}} in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> only.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is an attempt to set a new value to a property for which only a <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a> is specified.
  While this will be silently ignored in non-strict mode, it will throw a
  {{jsxref("TypeError")}} in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Property_with_no_setter">Property with no setter</h3>

<p>The example below shows how to set a getter for a property. It doesn't specify a <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a>, so a
  <code>TypeError</code> will be thrown upon trying to set the <code>temperature</code>
  property to <code>30</code>. For more details see also the
  {{jsxref("Object.defineProperty()")}} page.</p>

<pre class="brush: js example-bad">"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"</pre>

<p>To fix this error, you will either need to remove line 16, where there is an attempt to
  set the temperature property, or you will need to implement a <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a> for it, for
  example like this:</p>

<pre class="brush: js example-good highlight[12]">"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.defineProperties()")}}</li>
</ul>
