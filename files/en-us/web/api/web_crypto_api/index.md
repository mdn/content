---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
page-type: web-api-overview
browser-compat: api.Crypto
---

{{DefaultAPISidebar("Web Crypto API")}}

The **Web Crypto API** is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.

{{AvailableInWorkers}}

{{securecontext_header}}

> **Warning:** The Web Crypto API provides a number of low-level cryptographic primitives. It's very easy to misuse them, and the pitfalls involved can be very subtle.
>
> Even assuming you use the basic cryptographic functions correctly, secure key management and overall security system design are extremely hard to get right, and are generally the domain of specialist security experts.
>
> Errors in security system design and implementation can make the security of the system completely ineffective.
>
> Please learn and experiment, but don't guarantee or imply the security of your work before an individual knowledgeable in this subject matter thoroughly reviews it. The [Crypto 101 Course](https://www.crypto101.io/) can be a great place to start learning about the design and implementation of secure systems.

## Interfaces

Some browsers implemented an interface called {{domxref("Crypto")}} without having it well defined or being cryptographically sound. In order to avoid confusion, methods and properties of this interface have been removed from browsers implementing the Web Crypto API, and all Web Crypto API methods are available on a new interface: {{domxref("SubtleCrypto")}}. The {{domxref("Crypto.subtle")}} property gives access to an object implementing it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
