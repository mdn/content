---
title: CSRF
slug: Glossary/CSRF
tags:
  - Glossary
  - Security
---
<p><strong>CSRF</strong> (Cross-Site Request Forgery) is an attack that impersonates a trusted user and sends a website unwanted commands.</p>

<p>This can be done, for example, by including malicious parameters in a {{glossary("URL")}} behind a link that purports to go somewhere else:</p>

<pre class="brush: html">&lt;img src="https://www.example.com/index.php?action=delete&amp;id=123"&gt;
</pre>

<p>For users who have modification permissions on <code>https://www.example.com</code>, the <code>&lt;img&gt;</code> element executes action on <code>https://www.example.com</code> without their noticing, even if the element is not at <code>https://www.example.com</code>.</p>

<p>There are many ways to prevent CSRF, such as implementing {{glossary("REST", "RESTful API")}}, adding secure tokens, etc.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "Cross-site request forgery")}} on Wikipedia</li>
 <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">Prevention measures</a></li>
</ul>
