---
title: Cipher suite
slug: Glossary/Cipher_suite
tags:
  - Cryptography
  - Glossary
  - Security
---
<p>A cipher suite is a combination of a key exchange algorithm, authentication method, bulk encryption {{Glossary("cipher")}}, and message authentication code.</p>

<p>In a {{Glossary("cryptosystem")}} like {{Glossary("TLS")}}, the client and server must agree on a cipher suite before they can begin communicating securely.  A typical cipher suite looks like ECDHE_RSA_WITH_AES_128_GCM_SHA256 or ECDHE-RSA-AES128-GCM-SHA256, indicating:</p>

<ul>
 <li>ECDHE (elliptic curve Diffie-Hellman ephemeral) for key exchange</li>
 <li>RSA for authentication</li>
 <li>AES-128 as the cipher, with Galois/Counter Mode (GCM) as the block cipher mode of operation</li>
 <li>SHA-256 as the hash-based message authentication code (HMAC)</li>
</ul>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="https://wiki.mozilla.org/Security/Server_Side_TLS">Mozilla recommended cipher suite choices for TLS</a></li>
</ul>
