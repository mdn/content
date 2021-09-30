---
title: PAC
slug: Glossary/PAC
tags:
  - CodingScripting
  - Glossary
---
<p>A Proxy Auto-Configuration file (<strong>PAC file</strong>) is a file which contains a function, <code>FindProxyForURL()</code>, which is used by the browser to determine whether requests (including HTTP, HTTPS, and FTP) should go directly to the destination or if they need to be forwarded through a web proxy server.</p>

<pre class="brush: js">function FindProxyForURL(url, host) {
  /* ... */
}

ret = FindProxyForURL(url, host)</pre>

<p>See <a href="/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file">Proxy Auto-Configuration (PAC) file</a> for details about how these are used and how to create new ones.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/Proxy_auto-config" title="Read about PAC files on Wikipedia">PAC</a> on Wikipedia</li>
 <li><a href="/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file">Proxy Auto-Configuration file</a> on MDN</li>
</ul>
