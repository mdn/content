---
title: Insecure certificate
slug: Web/WebDriver/Errors/InsecureCertificate
tags:
  - Error
  - Reference
  - WebDriver
  - insecure certificate
---
<p>The <strong>insecure certificate</strong> error is a <a href="/en-US/docs/Web/WebDriver/Errors">WebDriver error</a> that occurs when the remotely controlled browser hits a certificate warning of any kind. This is usually the result of <a href="/en-US/docs/Web/WebDriver/Commands/NavigateTo">navigating</a> to a website with an expired or invalid <a href="/en-US/docs/Glossary/TLS">TLS certificate</a>. Examples of invalid certificates include self-signed, revoked, and cryptographically insecure certificates.</p>

<p>Web browsers prevent and block traffic to domains with broken certificates since the communication with the server would be compromised. It is strongly recommended to fix the certificate situation instead of disabling certificate checks, even in test environments.</p>

<p>WebDriver does offer an <a href="/en-US/docs/Web/WebDriver/Capabilities/acceptInsecureCerts"><code>acceptInsecureCerts</code> capability</a> for disabling certificate checks for the length of the session’s duration, but it is important to emphasize that its use is highly discouraged and that using it is widely considered a weakness of the test environment.</p>

<h2 id="Example">Example</h2>

<p>This is what will happen when navigating to a domain that has a self-signed TLS certificate using the Python client:</p>

<pre>from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.get("https://self-signed.badssl.com/")
except exceptions.InsecureCertificateException as e:
    print("Hit insecure cert on {}".format(session.current_url)
</pre>

<p>Output:</p>

<pre>Hit an insecure cert on https://self-signed.badssl.com/</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/WebDriver/Commands/NavigateTo">Navigate To</a> command</li>
 <li><a href="/en-US/docs/Web/WebDriver/Capabilities">Capabilities</a></li>
 <li><a href="https://badssl.com/">badssl.com</a></li>
</ul>
