---
title: TTL
slug: Glossary/TTL
tags:
  - Caching
  - Domain Name System
  - Glossary
  - Infrastructure
  - Networking
  - Performance
---
<p>Time To Live (TTL) can refer to either the lifetime of a packet in a network, or the expiry time of cached data.</p>

<h2 id="Networking">Networking</h2>

<p>In networking, the TTL, embedded in the packet, is a usually defined as a number of hops or as an expiration timestamp after which the packet is dropped. It provides a way to avoids network congestion, but releasing packets after they roamed the network too long.</p>

<h2 id="Caching">Caching</h2>

<p>In the context of caching, TTL (as an unsigned 32-bit integer) being a part of the {{Glossary("Response header", "HTTP response header")}} or the {{Glossary("DNS")}} query, indicates the amount of time in seconds during which the resource can be cached by the requester. </p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "Time to live", "TTL")}} on Wikipedia</li>
 <li><a href="https://datatracker.ietf.org/doc/html/rfc2181#section-8">RFC 2181</a> on IETF</li>
 <li><a href="https://datatracker.ietf.org/doc/html/rfc1035">RFC1035</a> on IETF</li>
</ul>
