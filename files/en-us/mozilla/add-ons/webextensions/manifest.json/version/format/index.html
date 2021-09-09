---
title: Version Format
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
tags:
  - Add-ons
  - Extensions
  - WebExtensions
---
<p>{{AddonSidebar}}</p>

<h1 id="Version_format">Manifest Version Format</h1>

<p>A <strong>version string</strong> consists of one or more <em>version parts</em>, separated with dots.</p>

<p>Each <strong>version part</strong> is itself parsed as a sequence of four parts: <code>&lt;number-a&gt;&lt;string-b&gt;&lt;number-c&gt;&lt;string-d&gt;</code>. Each of the parts is optional. Numbers are integers base 10 (may be negative), strings are non-numeric ASCII characters.</p>

<p>A few examples of valid version parts:</p>

<ul>
 <li><code>0</code> (as in <code>1.0</code>): <code>&lt;number-a&gt;=0</code></li>
 <li><code>5a</code> (as in <code>1.5a</code>): <code>&lt;number-a&gt;=5</code>, <code>&lt;string-b&gt;=a</code></li>
 <li><code>5pre4</code> (as in <code>3.5pre4</code>): <code>&lt;number-a&gt;=5</code>, <code>&lt;string-b&gt;=pre</code>, <code>&lt;number-c&gt;=4</code></li>
 <li><code>*</code> (as in <code>1.0.*</code>): <code>&lt;string-b&gt;=*</code></li>
</ul>

<p>A few special parsing rules are applied for backwards compatibility and readability:</p>

<ul>
 <li>if the version part is a single asterisk, it is interpreted as an infinitely-large number:<br>
  <code>1.5.0.*</code> is the same as <code>1.5.0.<em>(infinity)</em></code></li>
 <li>if string-b is a plus sign, number-a is incremented to be compatible with the Firefox 1.0.x version format:<br>
  <code>1.0+</code> is the same as <code>1.1pre</code></li>
</ul>

<p>The rationale behind splitting a version part into a sequence of strings and numbers is that when comparing version parts, the numeric parts are compared as numbers, e.g. &apos;1.0pre1&apos; &lt; &apos;1.0pre10&apos;, while the strings are compared bytewise. See the next section for details on how versions are compared.</p>

<p>See <a href="https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon">maintenance policy</a> for special rules that mark version as &quot;beta&quot; in the AMO queues.</p>

<h2 id="Comparing_versions">Comparing versions</h2>

<p>When two version strings are compared, their version parts are compared left to right. An empty or missing version part is equivalent to <code>0</code>.</p>

<p>If at some point a version part of one version string is greater than the corresponding version part of another version string, then the first version string is greater than the other one.</p>

<p>Otherwise, the version strings are equal. Note, that since missing version parts are treated as if they were <code>0</code>, the following version strings are equal: <code>1</code>, <code>1.0</code>, <code>1.0.</code>, <code>1.0.0</code>, and even <code>1.0...</code></p>

<h3 id="Comparing_version_parts">Comparing version parts</h3>

<p>Version parts are also compared left to right, parts A and C are compared as numbers, while parts B and D are compared byte-wise. A string-part that exists is always less than a string-part that doesn&apos;t exist (<code>1.6a</code> is less than <code>1.6</code>).</p>

<h2 id="Examples">Examples</h2>

<pre class="eval">1.-1
&lt; 1 == 1. == 1.0 == 1.0.0
&lt; 1.1a &lt; 1.1aa &lt; 1.1ab &lt; 1.1b &lt; 1.1c
&lt; 1.1pre == 1.1pre0 == 1.0+
&lt; 1.1pre1a &lt; 1.1pre1aa &lt; 1.1pre1b &lt; 1.1pre1
&lt; 1.1pre2
&lt; 1.1pre10
&lt; 1.1.-1
&lt; 1.1 == 1.1.0 == 1.1.00
&lt; 1.10
&lt; 1.* &lt; 1.*.1
&lt; 2.0
</pre>
