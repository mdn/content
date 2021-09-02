---
title: Navigator.canShare()
slug: Web/API/Navigator/canShare
tags:
- API
- Method
- Navigator
- Reference
- Share
browser-compat: api.Navigator.canShare
---
<div>{{APIRef("Web Share API")}}{{securecontext_header}}</div>

<p>The <strong><code>Navigator.canShare()</code></strong> method of the <a href="/en-US/docs/Web/API/Web_Share_API">Web Share API</a> returns <code>true</code> if the equivalent call to {{domxref("navigator.share()")}} would succeed.</p>

<p>The method returns <code>false</code> if the data cannot be <em>validated</em>. Reasons the data might be invalid include:</p>

<ul>
  <li>The <code>data</code> parameter has been omitted or only contains properties with unknown values. Note that any properties that are not recognized by the user agent are ignored.</li>
  <li>A URL is badly formatted.</li>
  <li>Files are specified but the implementation does not support file sharing.</li>
  <li>Sharing the specified data would be considered a "hostile share" by the user-agent.</li>
</ul>

<p>The Web Share API is gated by the <a href="/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share">web-share</a> permission policy.
    The <strong><code>canShare()</code></strong> method will return <code>false</code> if the permission is supported but has not been granted.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">navigator.canShare()
navigator.canShare(data)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>data</code> {{optional_inline}}</dt>
  <dd><p>An object defining the share data to test.
    Typically, an object with the same properties is passed to {{domxref("navigator.share()")}} if this call returns <code>true</code>.</p>

  <p>Properties that are unknown to the user agent are ignored; share data is only assessed on properties understood by the user agent.
    All properties are optional but at least one known data property must be specified or the method will return <code>false</code>.</p>

  <p>Possible values are:</p>
    <ul>
      <li><code>url</code>: A {{domxref("USVString")}} representing a URL to be shared.</li>
      <li><code>text</code>: A {{domxref("USVString")}} representing text to be shared.</li>
      <li><code>title</code>: A {{domxref("USVString")}} representing the title to be shared.</li>
      <li><code>files</code>: An array of {{domxref("File")}} objects representing files to be shared.</li>
    </ul>
  </dd>
</dl>


<h3 id="Return_value">Return value</h3>

<p>Returns <code>true</code> if the specified <code>data</code> can be shared with {{domxref("Navigator.share()")}}, otherwise <code>false</code>.</p>


<h2 id="Examples">Examples</h2>

<h3 id="Sending_the_MDN_URL">Sending the MDN URL</h3>

<p>The example uses <code>navigator.canShare()</code> to check whether <code>navigator.share()</code> can share the specified data.</p>

<h4 id="HTML">HTML</h4>

<p>The HTML just creates a paragraph in which to display the result of the test.</p>

<pre class="brush: html">&lt;p class="result"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">let shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
}

const resultPara = document.querySelector('.result');

if (!navigator.canShare) {
  resultPara.textContent = 'navigator.canShare() not supported.';
}
else if (navigator.canShare(shareData)) {
  resultPara.textContent = 'navigator.canShare() supported. We can use navigator.share() to send the data.';
} else {
  resultPara.textContent = 'Specified data cannot be shared.';
}
</pre>

<h4 id="Result">Result</h4>

<p>The box below should state whether <code>navigator.canShare()</code> is supported on this browser, and if so, whether or not we can use <code>navigator.share()</code> to share the specified data:</p>

<p>{{EmbedLiveSample('Sending_the_MDN_URL')}}</p>


<h3>Feature checking example</h3>

<p>This method feature tests whether a particular data property is valid and shareable.
  If used with a single <code>data</code> property it will return <code>true</code> only if that property is valid and can be shared on the platform.</p>

<p>The code below demonstrates verifying that a data property is supported.</p>

<pre class="brush: js">// Feature that may not be supported
let testShare = { someNewProperty: 'Data to share' }

// Complex data that uses new key
const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
  someNewProperty: 'Data to share'
}

// Test that the key is valid and supported before sharing
if (navigator.canShare(testShare)) {
  // Use navigator.share() to share 'shareData'
} else {
  // Handle case that new data property can't be shared.
}
</pre>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("navigator.share()")}}</li>
</ul>
