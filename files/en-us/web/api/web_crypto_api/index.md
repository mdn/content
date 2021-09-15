---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
tags:
  - API
  - Overview
  - Reference
  - Web Crypto API
---
{{DefaultAPISidebar("Web Crypto API")}}

The **Web Crypto API** is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.

{{AvailableInWorkers}}

> **Warning:** The Web Crypto API provides a number of low-level cryptographic primitives. It's very easy to misuse them, and the pitfalls involved can be very subtle.
>
> Even assuming you use the basic cryptographic functions correctly, secure key management and overall security system design are extremely hard to get right, and are generally the domain of specialist security experts.
>
> Errors in security system design and implementation can make the security of the system completely ineffective.
>
> **If you're not sure you know what you are doing, you probably shouldn't be using this API.**

## Interfaces

Some browsers implemented an interface called {{domxref("Crypto")}} without having it well defined or being cryptographically sound. In order to avoid confusion, methods and properties of this interface have been removed from browsers implementing the Web Crypto API, and all Web Crypto API methods are available on a new interface: {{domxref("SubtleCrypto")}}. The {{domxref("Crypto.subtle")}} property gives access to an object implementing it.

## Specifications

| Specification                                            |
| -------------------------------------------------------- |
| [Web Cryptography API](https://w3c.github.io/webcrypto/) |

## Browser compatibility

### `Crypto`

{{Compat("api.Crypto")}}
