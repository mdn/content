---
title: Web Share API
slug: Web/API/Web_Share_API
tags:
  - API
  - Apps
  - Web Share
  - Web Share API
  - Landing
  - Overview
  - Reference
---
<div>{{DefaultAPISidebar("Web Share API")}}</div>

<p>The <strong>Web Share API</strong> provides a mechanism for sharing text, links, files, and other content to an arbitrary <em>share target</em> selected by the user.</p>

{{securecontext_header}}

<div class="notecard note">
  <p><strong>Note:</strong> This API is <em>not available</em> in <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a> (not exposed via {{domxref("WorkerNavigator")}}).</p>
</div>

<div class="notecard note">
  <p><strong>Note:</strong> This API should not be confused with the <a href="/en-US/docs/Web/API/Web_Share_Target_API">Web Share Target API</a>, which allows a website to specify itself as a share target.</p>
</div>

<h2 id="concepts_and_usage">Concepts and usage</h2>

<p>The <strong>Web Share API</strong> allows a site to share text, links, files, and other content to user-selected share targets, utilizing the sharing mechanisms of the underlying operating system.
These share targets typically include the system clipboard, email, contacts or messaging applications, and Bluetooth or WiFi channels.</p>

<p>The API has just two methods.
  The {{domxref("navigator.canShare()")}} method may be used to first validate whether some data is "sharable", prior to passing it to {{domxref("navigator.share()")}} for sending.</p>

<p>The {{domxref("navigator.share()")}} method invokes the native sharing mechanism of the underlying operating system and passes the specified data.
    It requires {{Glossary("transient activation")}}, and hence must be triggered off a UI event like a button click.
    Further, the method must specify valid data that is supported for sharing by the native implementation.</p>

<p>The Web Share API is gated by the <a href="/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share">web-share</a> permission policy.
  If the policy is supported but has not been granted, both methods will indicate that the data is not sharable.</p>

<h2 id="interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("navigator.canShare()")}}</dt>
 <dd>Returns a boolean indicating whether the specified data is sharable.</dd>
 <dt>{{domxref("navigator.share()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves if the passed data was successfully sent to a share target.
   This method must be called on a button click or other user activation (requires {{Glossary("transient activation")}}).</dd>
</dl>

<h2 id="Example">Example</h2>

<p>The code below shows how you can share a link using {{domxref("navigator.share()")}}, triggered off a button click.</p>

<pre class="brush: js;">const shareData = {
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

<p>The above example is taken from our <a href="https://mdn.github.io/dom-examples/web-share/">Web share test</a> (<a href="https://github.com/mdn/dom-examples/blob/master/web-share/index.html">see the source code</a>). You can also see this as a live example in {{domxref("navigator.share()")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications("api.Navigator.share")}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.Navigator.share")}}

{{Compat("api.Navigator.canShare")}}

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://web.dev/web-share-target/">Receiving shared data with the Web Share Target API</a> (https://web.dev/)</li>
</ul>