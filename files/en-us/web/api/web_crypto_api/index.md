---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
tags:
  - API
  - Overview
  - Reference
  - Web Crypto API
---
<div>{{DefaultAPISidebar("Web Crypto API")}}</div>

<p>The <strong>Web Crypto API</strong> is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.</p>

<p>{{AvailableInWorkers}}</p>

<div class="warning">
<p><strong>Warning:</strong> The Web Crypto API provides a number of low-level cryptographic primitives. It's very easy to misuse them, and the pitfalls involved can be very subtle.</p>

<p>Even assuming you use the basic cryptographic functions correctly, secure key management and overall security system design are extremely hard to get right, and are generally the domain of specialist security experts.</p>

<p>Errors in security system design and implementation can make the security of the system completely ineffective.</p>

<p><strong>If you're not sure you know what you are doing, you probably shouldn't be using this API.</strong></p>
</div>

<h2 id="Interfaces">Interfaces</h2>

<p>Some browsers implemented an interface called {{domxref("Crypto")}} without having it well defined or being cryptographically sound. In order to avoid confusion, methods and properties of this interface have been removed from browsers implementing the Web Crypto API, and all Web Crypto API methods are available on a new interface: {{domxref("SubtleCrypto")}}. The {{domxref("Crypto.subtle")}} property gives access to an object implementing it.</p>

<h2 id="Specifications">Specifications</h2>

<table>
 <thead>
  <tr>
   <th>Specification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://w3c.github.io/webcrypto/">Web Cryptography API</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<h3 id="Crypto"><code>Crypto</code></h3>

<p>{{Compat("api.Crypto")}}</p>
