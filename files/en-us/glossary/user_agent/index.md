---
title: User agent
slug: Glossary/User_agent
tags:
  - Browser
  - Glossary
  - UA
  - User-agent
  - Web Browser
  - WebMechanics
  - agent
  - user agent
  - userAgent
---
<p>A user agent is a computer program representing a person, for example, a {{Glossary("Browser","browser")}} in a {{Glossary("World Wide Web", "Web")}} context.</p>

<p>Besides a browser, a user agent could be a bot scraping webpages, a download manager, or another app accessing the Web. Along with each request they make to the server, browsers include a self-identifying {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} header called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.</p>

<p>Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as <em>user agent spoofing</em>.</p>

<p>The user agent string can be accessed with {{Glossary("JavaScript")}} on the client side using the {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}} property.</p>

<p>A typical user agent string looks like this: <code>"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"</code>.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{interwiki("wikipedia", "User agent")}} on Wikipedia</li>
 <li>{{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent">Browser detection using the user agent</a></li>
 <li>{{RFC(2616, "14.43")}}: The <code>User-Agent</code> header</li>
 <li><a href="/en-US/docs/Glossary">Glossary:</a>
  <ul>
   <li>{{Glossary("Browser")}}</li>
  </ul>
 </li>
 <li>HTTP Headers
  <ul>
   <li>{{HTTPHeader("User-agent")}}</li>
  </ul>
 </li>
</ul>
