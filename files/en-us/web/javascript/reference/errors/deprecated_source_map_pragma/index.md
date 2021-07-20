---
title: >-
  SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //#
  instead
slug: Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma
tags:
  - Error
  - Errors
  - JavaScript
  - Source maps
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "Using <code>//@</code> to indicate sourceURL pragmas is deprecated. Use <code>//#</code> instead" occurs when there is a deprecated source map syntax in a JavaScript source.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Warning: SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead

Warning: SyntaxError: Using //@ to indicate sourceMappingURL pragmas is deprecated. Use //# instead
</pre>

<h2 id="Error_type">Error type</h2>

<p>A warning that a {{jsxref("SyntaxError")}} occurred. JavaScript execution won't be halted.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>There is a deprecated source map syntax in a JavaScript source.</p>

<p>JavaScript sources are often combined and minified to make delivering them from the server more efficient. With <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">source maps</a>, the debugger can map the code being executed to the original source files.</p>

<p>The source map specification changed the syntax due to a conflict with IE whenever it was found in the page after <code>//@cc_on</code> was interpreted to turn on conditional compilation in the IE JScript engine. The <a href="https://msdn.microsoft.com/en-us/library/8ka90k2e%28v=vs.94%29.aspx">conditional compilation comment</a> in IE is a little known feature, but it broke source maps with <a href="https://bugs.jquery.com/ticket/13274">jQuery</a> and other libraries.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Deprecated_syntax">Deprecated syntax</h3>

<p>Syntax with the "@" sign is deprecated.</p>

<pre class="brush: js example-bad">//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
</pre>

<h3 id="Standard_syntax">Standard syntax</h3>

<p>Use the "#" sign instead.</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>Or, alternatively, you can set a {{HTTPHeader("SourceMap")}} header to your JavaScript file to avoid having a comment at all:</p>

<pre class="brush: js example-good">SourceMap: /path/to/file.js.map</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">How to use a source map – Firefox Tools documentation</a></li>
 <li><a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to source maps – HTML5 rocks</a></li>
 <li>{{HTTPHeader("SourceMap")}}</li>
</ul>
