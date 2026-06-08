---
title: Security
short-title: Security
slug: Web/Security
page-type: landing-page
sidebar: security
---

Web security is the practice of protecting websites and their users from damage caused by malicious third parties, who are generally called _attackers_.

The kind of damage done can be reputational, financial, or even physical. It can target data that should be kept private to users, or actions that should be only made available to particular users. The motivations of attackers might be financial, political, or personal.

In this part of MDN we've written guides to help web developers understand how to protect their websites, and their users, against these attacks.

The documentation is organized into four main sections:

- [Attacks](/en-US/docs/Web/Security/Attacks)
- [Defenses](/en-US/docs/Web/Security/Defenses)
- [Threat modeling](/en-US/docs/Web/Security/Threat_modeling)
- [Authentication](/en-US/docs/Web/Security/Authentication)

In this page we'll introduce each of these sections and list the guides they contain. 

## Core security practices

Before we cover the separate aspects of website security, this section provides the core security practices that we think all web developers should follow.

- **Use [HTTPS](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security)** to serve all your site's pages and subresources.

- **Set a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP)** for your site.
  - If possible, set a [strict CSP](/en-US/docs/Web/HTTP/Guides/CSP#strict_csp), but if not, at least set a policy that [disallows inline JavaScript](/en-US/docs/Web/HTTP/Guides/CSP#inline_javascript).
  - Set the [`frame-ancestors`](/en-US/docs/Web/HTTP/Guides/CSP#clickjacking_protection) CSP directive, to control whether pages can be embedded in nested browsing contexts.

  - Set the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Guides/CSP#requiring_trusted_types) CSP directive, to help ensure that content has been sanitized before it is passed to potentially dangerous APIs.

- **Control cross-origin requests**: consider whether and in which circumstances you want to allow other {{glossary("origin", "origins")}} to make requests to your site, and use [fetch metadata](/en-US/docs/Web/HTTP/Guides/Fetch_metadata) to control this.

- **Limit access to any cookies your site sets**. In particular:
  - Set the [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesite) attribute to `Strict` if possible, or `Lax` otherwise.
  - Set the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) and [`HttpOnly`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) attributes, if possible.
  - Minimize the lifetime of cookies that are used to represent logged-in users.

- **Handle input securely**: if your site accepts input from the user or another system, [validate it](/en-US/docs/Web/Security/Defenses/Input_validation). Before integrating any input into your site's pages, perform [output encoding](/en-US/docs/Web/Security/Attacks/XSS#output_encoding) or [sanitization](/en-US/docs/Web/Security/Attacks/XSS#sanitization).

- **Use [Subresource Integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity)** for any scripts that you load from external sources (such as {{glossary("CDN", "CDNs")}}).

- **Use strong authentication methods**: if you authenticate users on your site, don't use [passwords](/en-US/docs/Web/Security/Authentication/Passwords) alone. [Passkeys](/en-US/docs/Web/Security/Authentication/Passkeys) are the most secure authentication method, but if you can't use them, then [time-based one-time passwords (TOTP)](/en-US/docs/Web/Security/Authentication/OTP#totp) are more secure than traditional passwords.

- **Follow good [operational security practices](/en-US/docs/Web/Security/Defenses/Operational_security)**: control access to your project's source code, handle secrets securely, and control your dependencies.

See also the [Secure Web Application Guidelines](https://w3c-cg.github.io/swag/docs/swag.html).

## Attacks

The [Attacks](/en-US/docs/Web/Security/Attacks) section includes guides to common attacks on websites. An attack is a specific technique that an attacker can use to harm websites or their users.

Each guide covers a specific attack (or class of related attacks), explaining how it works, the conditions under which a website becomes vulnerable, and how to defend against it.

The attacks described include:

- [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking)
- [Cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF)
- [Cross-site leaks (XS-Leaks)](/en-US/docs/Web/Security/Attacks/XS-Leaks)
- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
- [Insecure Direct Object Reference (IDOR)](/en-US/docs/Web/Security/Attacks/IDOR)
- [Manipulator in the Middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM)
- [Phishing](/en-US/docs/Web/Security/Attacks/Phishing)
- [Prototype pollution](/en-US/docs/Web/Security/Attacks/Prototype_pollution)
- [Server Side Request Forgery (SSRF)](/en-US/docs/Web/Security/Attacks/SSRF)
- [Subdomain takeover](/en-US/docs/Web/Security/Attacks/Subdomain_takeover)
- [Supply chain attacks](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks)

## Defenses

The [Defenses](/en-US/docs/Web/Security/Defenses) section includes guides to features or practices that you can use to protect yourself against various attacks. In general, there's a many-to-many relationship between attack and defenses. That is, a single defense can protect against multiple attacks, and defending against a single attack may require multiple defenses, so as to provide defense in depth.

In this section we document the following defenses:

- [Certificate transparency](/en-US/docs/Web/Security/Defenses/Certificate_Transparency)
- [Mixed content blocking](/en-US/docs/Web/Security/Defenses/Mixed_content)
- [Operational security](/en-US/docs/Web/Security/Defenses/Operational_security)
- [Same-origin policy](/en-US/docs/Web/Security/Defenses/Same-origin_policy)
- [Secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts)
- [Subresource integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity)
- [Transport Layer Security (TLS)](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security)
- [User activation](/en-US/docs/Web/Security/Defenses/User_activation)

Note that not all defenses are described in this section: some, such as [CSP](2/en-US/docs/Web/HTTP/Guides/CSP) or [trusted types](/en-US/docs/Web/API/Trusted_Types_API), are described inside the technology area of which they are a part.

## Threat modeling

Not all websites are vulnerable to all attacks: which attacks a developer needs to worry about depends on the features that the site provides and how they are implemented.

[Threat modeling](/en-US/docs/Web/Security/Threat_modeling) is a process that web developers can follow to develop a structured representation of the potential threats that their site faces, and the corresponding defenses that they should employ.

That is, threat modeling helps you understand which attacks you need to defend against, and how to defend against them.

## Authentication

Authentication is the process of verifying that an entity — such as a user of a website — is who they claim to be. You'll most likely need to think about authentication if you want users to sign into your website.

If users can log into your website, there are typically things logged-in users can do, or data they can access, that you don't want to make generally available. This makes user account access one of the most valuable targets for attackers.

In this set of guides we'll look at the main techniques available for authenticating users on the web, and good practices for them. We describe four methods:

- [Passwords](/en-US/docs/Web/Security/Authentication/Passwords)
- [One-time passwords (OTP)](/en-US/docs/Web/Security/Authentication/OTP)
- [Federated identity](/en-US/docs/Web/Security/Authentication/Federated_identity)
- [Passkeys](/en-US/docs/Web/Security/Authentication/Passkeys)

In this section we also outline good practices for [session management](/en-US/docs/Web/Security/Authentication/Session_management), which is how a website remembers the signed-in status of a user.

## HTTP Observatory

The [HTTP Observatory](/en-US/observatory) tool enables you to scan your website to check whether it's following certain good security practices. Our [Practical security implementation guides](/en-US/docs/Web/Security/Practical_implementation_guides) provide explanations of how to implement these practices, and the threats they defend against.

## See also

- [Privacy on the web](/en-US/docs/Web/Privacy)
- [Learn: Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [OWASP Cheat Sheet series](https://cheatsheetseries.owasp.org/index.html)
