---
title: 'SyntaxError: "use strict" not allowed in function with non-simple parameters'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "<code>'use strict'</code> not allowed in function" occurs
  when a <code>"use strict"</code> directive is used at the top of a function with
  {{jsxref("Functions/Default_parameters", "default parameters", "", 1)}},
  {{jsxref("Functions/rest_parameters", "rest parameters", "", 1)}}, or
  {{jsxref("Operators/Destructuring_assignment", "destructuring parameters", "", 1)}}.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Edge:
Cannot apply strict mode on functions with non-simple parameter list

Firefox:
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome:
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>A <code>"use strict"</code> directive is written at the top of a function that has one
  of the following parameters:</p>

<ul>
  <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
  <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
  <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
  </li>
</ul>

<p>A <code>"use strict"</code> directive is not allowed at the top of such functions per
  the ECMAScript specification.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Function_statement">Function statement</h3>

<p>In this case, the function <code>sum</code> has default parameters <code>a=1</code> and
  <code>b=2</code>:</p>

<pre class="brush: js example-bad">function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  'use strict';
  return a + b;
}
</pre>

<p>If the function should be in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>, and the
  entire script or enclosing function is also okay to be in strict mode, you can move the
  <code>"use strict"</code> directive outside of the function:</p>

<pre class="brush: js example-good">'use strict';
function sum(a = 1, b = 2) {
  return a + b;
}
</pre>

<h3 id="Function_expression">Function expression</h3>

<p>A function expression can use yet another workaround:</p>

<pre class="brush: js example-bad">var sum = function sum([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  'use strict';
  return a + b;
};
</pre>

<p>This can be converted to the following expression:</p>

<pre class="brush: js example-good">var sum = (function() {
  'use strict';
  return function sum([a, b]) {
    return a + b;
  };
})();
</pre>

<h3 id="Arrow_function">Arrow function</h3>

<p>If an arrow function needs to access the <code>this</code> variable, you can use the
  arrow function as the enclosing function:</p>

<pre class="brush: js example-bad">var callback = (...args) =&gt; {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  'use strict';
  return this.run(args);
};
</pre>

<p>This can be converted to the following expression:</p>

<pre class="brush: js example-good">var callback = (() =&gt; {
  'use strict';
  return (...args) =&gt; {
    return this.run(args);
  };
})();
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Strict_mode", "Strict mode", "", 1)}}</li>
  <li>{{jsxref("Statements/function", "function statement", "", 1)}}</li>
  <li>{{jsxref("Operators/function", "function expression", "", 1)}}</li>
  <li>{{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}</li>
  <li>{{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}</li>
  <li>{{jsxref("Operators/Destructuring_assignment", "Destructuring parameters", "", 1)}}
  </li>
</ul>
