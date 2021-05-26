---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/Stack
tags:
  - JavaScript
  - Non-standard
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Error.stack
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>The non-standard <strong><code>stack</code></strong> property of {{jsxref("Error")}} objects offer a trace of which functions were called, in what order, from which line and file, and with what arguments. The stack string proceeds from the most recent calls to earlier ones, leading back to the original global scope call.</p>

<h2 id="Description">Description</h2>

<p>Each step will be separated by a newline, with the first part of the line being the function name (if not a call from the global scope), then by an at (@) sign, the file location (except when the function is the error constructor as the error is being thrown), a colon, and, if there is a file location, the line number. (Note that the {{jsxref("Error")}} object also possesses the <code>fileName</code>, <code>lineNumber</code> and <code>columnNumber</code> properties for retrieving these from the error thrown (but only the error, and not its trace).)</p>

<p>Note that this is the format used by Firefox. There is no standard formatting. However, Safari 6+ and Opera 12- use a very similar format. Browsers using the V8 JavaScript engine (such as Chrome, Opera 15+, Android Browser) and IE10+, on the other hand, uses a different format (see <a href="https://web.archive.org/web/20140210004225/https://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">the archived MSDN error.stack docs</a>).</p>

<p><strong>Argument values in the stack</strong>: Prior to Firefox 14, the function name would be followed by the argument values converted to string in parentheses immediately before the at (<code>@</code>) sign. While an object (or array, etc.) would appear in the converted form <code>"[object Object]"</code>, and as such could not be evaluated back into the actual objects, scalar values could be retrieved (though it may be — it is still possible in Firefox 14 — easier to use <code>arguments.callee.caller.arguments</code>, as could the function name be retrieved by <code>arguments.callee.caller.name</code>). <code>"undefined"</code> is listed as <code>"(void 0)"</code>. Note that if string arguments were passed in with values such as <code>"@"</code>, <code>"("</code>, <code>")"</code> (or if in file names), you could not easily rely on these for breaking the line into its component parts. Thus, in Firefox 14 and later this is less of an issue.</p>

<p>Different browsers set this value at different times. For example, Firefox sets it when creating an {{jsxref("Error")}} object, while PhantomJS sets it only when throwing the {{jsxref("Error")}}, and <a href="https://web.archive.org/web/20140210004225/https://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">archived MSDN docs</a> also seem to match the PhantomJS implementation.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_stack_property">Using the stack property</h3>

<p>The following HTML markup demonstrates the use of <code>stack</code> property.</p>

<pre class="brush: html">&lt;!DOCTYPE HTML&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Stack Trace Example&lt;/title&gt;
&lt;body&gt;
&lt;script&gt;
function trace() {
  try {
    throw new Error('myError');
  }
  catch(e) {
    alert(e.stack);
  }
}
function b() {
  trace();
}
function a() {
  b(3, 4, '\n\n', undefined, {});
}
a('first call, firstarg');
&lt;/script&gt;
</pre>

<p>Assuming the above markup is saved as <code>C:\example.html</code> on a Windows file system it produces an alert message box with the following text:</p>

<p>Starting with Firefox 30 and later containing the column number:</p>

<pre class="brush: plain">trace@file:///C:/example.html:9:17
b@file:///C:/example.html:16:13
a@file:///C:/example.html:19:13
@file:///C:/example.html:21:9</pre>

<p>Firefox 14 to Firefox 29:</p>

<pre class="brush: plain">trace@file:///C:/example.html:9
b@file:///C:/example.html:16
a@file:///C:/example.html:19
@file:///C:/example.html:21</pre>

<p>Firefox 13 and earlier would instead produce the following text:</p>

<pre class="brush: plain">Error("myError")@:0
trace()@file:///C:/example.html:9
b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
a("first call, firstarg")@file:///C:/example.html:19
@file:///C:/example.html:21</pre>

<h3 id="Stack_of_evaled_code">Stack of eval'ed code</h3>

<p>Starting with Firefox 30, the error stack of code in <code>Function()</code> and <code>eval()</code> calls, now produces stacks with more detailed information about the line and column numbers inside these calls. Function calls are indicated with <code>"&gt; Function"</code> and eval calls with <code>"&gt; eval"</code>.</p>

<pre class="brush: js">try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 &gt; Function:1:1
// @file:///C:/example.html:7:6

try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 &gt; eval line 1 &gt; eval:1:1
// @file:///C:/example.html line 7 &gt; eval:1:1
// @file:///C:/example.html:7:6
</pre>

<p>You can also use the <code>//# sourceURL</code> directive to name an eval source. See also <a href="/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources">Debug eval sources</a> in the <a href="/en-US/docs/Tools/Debugger">Debugger</a> docs and this <a href="http://fitzgeraldnick.com/weblog/59/">blog post</a>.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Components.stack">Components.stack</a></li>
 <li>External projects: <a class="link-https" href="https://github.com/csnover/TraceKit/">TraceKit</a> and <a class="link-https" href="https://github.com/eriwen/javascript-stacktrace">javascript-stacktrace</a></li>
 <li>MSDN: <a href="https://web.archive.org/web/20140210004225/https://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx">archived error.stack docs</a></li>
 <li><a href="https://github.com/v8/v8/wiki/Stack%20Trace%20API">Overview of the V8 JavaScript stack trace API</a></li>
</ul>
