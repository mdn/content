---
title: Navigator.share()
slug: Web/API/Navigator/share
tags:
- Method
- Navigator
- Reference
- Share
- Web
browser-compat: api.Navigator.share
---
<div>{{APIRef("Web Share API")}}{{securecontext_header}}</div>

<p>The <strong><code>navigator.share()</code></strong> method of the <a href="/en-US/docs/Web/API/Web_Share_API">Web Share API</a> invokes the native sharing mechanism of the device to share data such as text, URLs, or files. The available <em>share targets</em> depend on the device, but might include the clipboard, contacts and email applications, websites, bluetooth, etc.</p>

<p>This method requires that the current document have the <a href="/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share">web-share</a> permission policy and {{Glossary("transient activation")}}. (It must be triggered off a UI event like a button click and cannot be launched at arbitrary points by a script.) Further, the method must specify valid data that is supported for sharing by the native implementation.</p>

<p>The method resolves a {{jsxref("Promise")}} with <code>undefined</code> as soon as the data is successfully passed to the <em>share target</em>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">navigator.share(data)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>data</var></code></dt>
  <dd>
    <p>An object containing data to share.</p>

    <p>Properties that are unknown to the user agent are ignored; share data is only assessed on properties understood by the user agent.
      All properties are optional but at least one known data property must be specified.</p>
  
    <p>Possible values are:</p>

    <ul>
      <li><code>url</code>: A {{domxref("USVString")}} representing a URL to be shared.</li>
      <li><code>text</code>: A {{domxref("USVString")}} representing text to be shared.</li>
      <li><code>title</code>: A {{domxref("USVString")}} representing a title to be shared.</li>
      <li><code>files</code>: An array of {{domxref("File")}} objects representing files to be shared.</li>
    </ul>
  </dd>
</dl>


<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with <code>undefined</code> once the data has been sent to the share target, or rejected with one of the <a href="#exceptions">Exceptions</a> given below.</p>


<h3 id="Exceptions">Exceptions</h3>

<p>The {{jsxref("Promise")}} may be rejected with one of the following <code>DOMException</code> values:</p>

<dl>
  <dt><code>NotAllowedError</code></dt>
  <dd>The <a href="/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share">web-share</a> permission has not been granted, or the window does not have {{Glossary("transient activation")}}, or a file share is being blocked due to security considerations.</dd>
  <dt><code>TypeError</code></dt>
  <dd>The specified share data cannot be validated. Possible reasons include:
    <ul>
      <li>The <code>data</code> parameter was omitted completely or only contains properties with unknown values. Note that any properties that are not recognized by the user agent are ignored.</li>
      <li>A URL is badly formatted.</li>
      <li>Files are specified but the implementation does not support file sharing.</li>
      <li>Sharing the specified data would be considered a "hostile share" by the user-agent.</li>
    </ul>
  </dd>
  <dt><code>AbortError</code></dt>
  <dd>The user canceled the share operation or there are no share targets available.</dd>
  <dt><code>DataError</code></dt>
  <dd>There was a problem starting the share target or transmitting the data.</dd>
</dl>


<h2 id="Examples">Examples</h2>

<p>The example below shows a button click invoking the Web Share API to share MDN's URL.
  This is taken from our <a href="https://mdn.github.io/dom-examples/web-share/">Web share test</a> (<a href="https://github.com/mdn/dom-examples/blob/master/web-share/index.html">see the source code</a>).</p>

<h3 id="HTML">HTML</h3>

<p>The HTML just creates a button to trigger the share, and a paragraph in which to display the result of the test.</p>

<pre class="brush: html">&lt;p&gt;&lt;button&gt;Share MDN!&lt;/button&gt;&lt;/p&gt;
&lt;p class="result"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'MDN shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });
</pre>

<h3 id="Result">Result</h3>

<p>Click the button to launch the share dialog on your platform.
  Text will appear below the button to indicate whether the share was successful or provide an error code.</p>

<p>{{EmbedLiveSample('Examples')}}</p>


<h4 id="Sharing_Files"><strong>Sharing Files</strong></h4>

<p>To share files, first test for and call {{domxref("navigator.canShare()")}}. Then include an array of files in the call to <code>navigator.share()</code>:</p>

<div class="notecard note">
  <p><strong>Note:</strong> This sample feature detects by testing for <code>navigator.canShare()</code> rather than for <code>navigator.share()</code>.
    The data object passed to <code>canShare()</code> only includes the <code>files</code> property. Image, video, audio, and text files can be shared.</p>
</div>

<pre class="brush: js">if (navigator.canShare &amp;&amp; navigator.canShare({ files: filesArray })) {
  navigator.share({
    files: filesArray,
    title: 'Pictures',
    text: 'Our Pictures.',
  })
  .then(() =&gt; console.log('Share was successful.'))
  .catch((error) =&gt; console.log('Sharing failed', error));
} else {
  console.log(`Your system doesn't support sharing files.`);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("navigator.canShare()")}}</li>
  <li><a href="https://wpt.live/web-share/">https://wpt.live/web-share/</a> (web platform tests)</li>
</ul>
