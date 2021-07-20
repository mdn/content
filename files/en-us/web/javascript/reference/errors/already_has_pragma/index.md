---
title: 'Warning: -file- is being assigned a //# sourceMappingURL, but already has one'
slug: Web/JavaScript/Reference/Errors/Already_has_pragma
tags:
  - Error
  - Errors
  - JavaScript
  - Source maps
  - Warning
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript warning "-file- is being assigned a //# sourceMappingURL, but already has one." occurs when a source map has been specified more than once for a given JavaScript source.</p>

<h2 id="Message">Message</h2>

<pre class="brush: html">Warning: -file- is being assigned a //# sourceMappingURL, but already has one.</pre>

<h2 id="Error_type">Error type</h2>

<p>A warning. JavaScript execution won't be halted.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>A source map has been specified more than once for a given JavaScript source.</p>

<p>JavaScript sources are often combined and minified to make delivering them from the server more efficient. With <a href="https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">source maps</a>, the debugger can map the code being executed to the original source files. There are two ways to assign a source map, either by using a comment or by setting a header to the JavaScript file.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Setting_source_maps">Setting source maps</h3>

<p>Setting a source map by using a comment in the file:</p>

<pre class="brush: js example-good">//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map</pre>

<p>Or, alternatively, you can set a header to your JavaScript file:</p>

<pre class="brush: js example-good">X-SourceMap: /path/to/file.js.map</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Debugger/How_to/Use_a_source_map">How to use a source map – Firefox Tools documentation</a></li>
 <li><a href="https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">Introduction to source maps – HTML5 rocks</a></li>
</ul>
