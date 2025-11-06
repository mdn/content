---
title: Private State Token API
slug: Web/API/Private_State_Token_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.fetch.init_privateToken_parameter
spec-urls: https://wicg.github.io/trust-token-api/
---

{{DefaultAPISidebar("Private State Token API")}}{{SeeCompatTable}}

The **Private State Token API** provides a mechanism for conveying trust in a user's authenticity from one browsing context to another, without sharing the user's identity or allowing their activity across websites to be tracked.

## Concepts and usage

To prevent fraud on the web, websites and services need to establish and convey trust signals that prove a user is who they say they are, and is not a bot pretending to be a human or a malicious third-party defrauding a real person or service.

- Trust is established using mechanisms such as [CAPTCHAs](https://en.wikipedia.org/wiki/CAPTCHA), verifying email addresses, or making purchases.
- Trust is traditionally conveyed between different origins using mechanisms such as [third-party cookies](/en-US/docs/Web/Privacy/Guides/Third-party_cookies).

Unfortunately, current cookie-based techniques for conveying such information are not secure and can be used for {{glossary("fingerprinting")}} and tracking users, which is problematic for user privacy.

Private state tokens solve this problem, allowing trust signals to be conveyed across origins without passive tracking using the [Privacy Pass protocol](https://privacypass.github.io/) in the background.

> [!NOTE]
> Private state tokens are not a replacement for CAPTCHAs or other trust establishing mechanisms. Private state tokens provide a way to _convey_ trust in a user, not _establish_ trust in a user.

### How do private state tokens work?

1. When a website has established trust in a user (for example via a CAPTCHA), it can issue a cryptographic token that is stored securely by the user's browser. This website is called an **issuer**.
2. Another website can then verify that the same user is trustworthy by checking if their browser has a token stored that was issued by an issuer that the website trusts. If so, they can redeem that token to get a **redemption record**. This website is called a **redeemer**.
3. The redemption record is then used to give the user access to services as if they were authenticated directly with that site, and can also be forwarded onto other parties to convey trust.

Private state tokens are encrypted, so it isn't possible to identify an individual or connect trusted and untrusted instances to discover user identity.

See [Using the Private State Token API](/en-US/docs/Web/API/Private_State_Token_API/Using) for a guide to using private state tokens.

## Interfaces

The Private State Token API API has no distinct interfaces of its own.

### Extensions to other interfaces

- {{domxref("Document.hasPrivateToken()")}}
  - : Returns a promise that fulfills with a boolean indicating whether the browser has a private state token stored from a particular issuer.
- {{domxref("Document.hasRedemptionRecord()")}}
  - : Returns a promise that fulfills with a boolean indicating whether the browser has a redemption record originating from a particular issuer.
- {{domxref("HTMLIFrameElement.privateToken")}}
  - : Mirrors the value of the `<iframe>` `privateToken` attribute.
- {{domxref("Window.fetch", "fetch()")}} / {{domxref("Request.Request", "Request()")}}, the [`privateToken`](/en-US/docs/Web/API/RequestInit#privatetoken) option
  - : An object representing a private state token operation. Fetch calls with the `privateToken` option specified initiate operations such as issuing or redeeming tokens.
- {{domxref("XMLHttpRequest.setPrivateToken()")}}
  - : Adds private state token information to an `XMLHttpRequest` call, to initiate private state token operations.

## HTML elements

- {{htmlelement("iframe")}}, the [`privateToken`](/en-US/docs/Web/HTML/Reference/Elements/iframe#privatetoken) attribute
  - : Contains a string representation of an options object representing a private state token operation. IFrames containing this attribute can be used to initiate operations such as issuing or redeeming tokens.

## HTTP headers

- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} directive
  - : Controls usage of `token-request` operations.
- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} directive
  - : Controls usage of `token-redemption` and `send-redemption-record` operations.
- {{httpheader("Sec-Redemption-Record")}}
  - : A request header that forwards a redemption record to another party to convey trust when a `send-redemption-record` fetch request is made.
- {{httpheader("Sec-Private-State-Token")}}
  - : Exists both as a request and a response header, used during issuance and redemption requests to transmit request data (such as blinded nonces used to generate tokens) and response data (such as tokens and redemption records).
- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
  - : A request header sent to an issuer server that states which cryptographic protocol version should be used to sign blinded nonces when generating tokens.
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
  - : A reponse header, sent by the redeemer server, to indicate to the browser how long it should cache a particular redemption record for.

## Security considerations

Private state token `token-request` operations are controlled by the {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{httpheader("Permissions-Policy")}} directive, whereas `token-redemption` and `send-redemption-record` operations are controlled by the {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} directive.

Specifically, where a defined policy blocks usage, any attempts to initiate private state token operations via fetch requests will fail.

## Examples

See the [Private State Token Demo Issuer](https://privatetokens.dev/) for an example implementation.

## Specifications

{{specifications}}

## Browser compatibility

{{Compat}}
