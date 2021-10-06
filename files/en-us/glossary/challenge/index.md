---
title: Challenge-response authentication
slug: Glossary/challenge
tags:
  - Security
---
<p>In security protocols, a <em>challenge</em> is some data sent to the client by the server in order to generate a different response each time. Challenge-response protocols are one way to fight against <a href="https://en.wikipedia.org/wiki/Replay_attack">replay attacks</a> where an attacker listens to the previous messages and resends them at a later time to get the same credentials as the original message.</p>

<p>The <a href="/en-US/docs/Web/HTTP/Authentication">HTTP authentication protocol</a> is challenge-response based, though the "Basic" protocol isn't using a real challenge (the realm is always the same).</p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication">Challenge-response authentication</a> on Wikipedia.</li>
</ul>
