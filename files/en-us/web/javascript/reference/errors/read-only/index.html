---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict
    mode</a>-only exception "is read-only" occurs when a global variable or object
  property that was assigned to is a read-only property.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #&lt;Object&gt; (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The global variable or object property that was assigned to is a read-only property.
  (Technically, it is a <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute">non-writable
    data property</a>.)</p>

<p>This error happens only in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode code</a>. In
  non-strict code, the assignment is silently ignored.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<p>Read-only properties are not super common, but they can be created using
  {{jsxref("Object.defineProperty()")}} or {{jsxref("Object.freeze()")}}.</p>

<pre class="brush: js example-bad">'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
obj.score = 0;  // TypeError

'use strict';
Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
LUNG_COUNT = 3;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
</pre>

<p>There are also a few read-only properties built into JavaScript. Maybe you tried to
  redefine a mathematical constant.</p>

<pre class="brush: js example-bad">'use strict';
Math.PI = 4;  // TypeError
</pre>

<p>Sorry, you can't do that.</p>

<p>The global variable <code>undefined</code> is also read-only, so you can't silence the
  infamous "undefined is not a function" error by doing this:</p>

<pre class="brush: js example-bad">'use strict';
undefined = function() {};  // TypeError: "undefined" is read-only
</pre>

<h3 id="Valid_cases">Valid cases</h3>

<pre class="brush: js example-good">'use strict';
var obj = Object.freeze({name: 'Score', points: 157});
obj = {name: obj.name, points: 0};   // replacing it with a new object works

'use strict';
var LUNG_COUNT = 2;  // a `var` works, because it's not read-only
LUNG_COUNT = 3;  // ok (anatomically unlikely, though)
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.freeze()")}}</li>
</ul>
