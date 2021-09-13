---
title: HTMLImageElement.referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
tags:
- API
- Experimental
- HTMLImageElement
- Property
- Referrer Policy
browser-compat: api.HTMLImageElement.referrerPolicy
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The
  <strong><code>HTMLImageElement.referrerPolicy</code></strong>
  property reflects the HTML {{htmlattrxref("referrerpolicy","img")}} attribute of the
  {{HTMLElement("img")}} element defining which referrer is sent when fetching the
  resource.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>refStr</var> = <var>imgElt</var>.referrerPolicy;
<var>imgElt</var>.referrerPolicy = <var>refStr</var>;</pre>

<h3 id="Values">Values</h3>

<p>A {{domxref("DOMString")}}; one of the following:</p>

<dl>
  <dt>no-referrer</dt>
  <dd>The {{HTTPHeader("Referer")}} header will be omitted entirely. No referrer
    information is sent along with requests.</dd>
  <dt>no-referrer-when-downgrade</dt>
  <dd>The URL is sent
    as a referrer when the protocol security level stays the same (e.g.HTTP→HTTP,
    HTTPS→HTTPS), but isn't sent to a less secure destination (e.g. HTTPS→HTTP).</dd>
  <dt>origin</dt>
  <dd>Only send the origin of the document as the referrer in all cases.<br>
    The document <code>https://example.com/page.html</code> will send the referrer
    <code>https://example.com/</code>.</dd>
  <dt>origin-when-cross-origin</dt>
  <dd>Send a full URL when performing a same-origin request, but only send the origin of
    the document for other cases.</dd>
  <dt>same-origin</dt>
  <dd>A referrer will be sent for <a
      href="/en-US/docs/Web/Security/Same-origin_policy">same-site origins</a>, but
    cross-origin requests will contain no referrer information.</dd>
  <dt>strict-origin</dt>
  <dd>Only send the origin of the document as the referrer when the protocol security
    level stays the same (e.g. HTTPS→HTTPS), but don't send it to a less secure
    destination (e.g. HTTPS→HTTP).</dd>
  <dt>strict-origin-when-cross-origin (default)</dt>
  <dd>This is the user agent's default behavior if no policy is specified. Send a full URL when performing a same-origin request, only send the origin when the
    protocol security level stays the same (e.g. HTTPS→HTTPS), and send no header to a
    less secure destination (e.g. HTTPS→HTTP).</dd>
  <dt>unsafe-url</dt>
  <dd>Send a full URL when performing a same-origin or cross-origin request. This policy
    will leak origins and paths from TLS-protected resources to insecure origins.
    Carefully consider the impact of this setting.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js;">var img = new Image();
img.src = 'img/logo.png';
img.referrerPolicy = 'origin';

var div = document.getElementById('divAround');
div.appendChild(img); // Fetch the image using the origin as the referrer
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("HTMLAnchorElement.referrerPolicy")}},
    {{domxref("HTMLAreaElement.referrerPolicy")}}, and
    {{domxref("HTMLIFrameElement.referrerPolicy")}}.</li>
</ul>
