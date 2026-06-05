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

## Attacks

The [Attacks](/en-US/docs/Web/Security/Attacks) section includes guides to common attacks on websites. An attack is a specific technique that an attacker can use to harm websites or their users.

In this section, each guide describes an attack, or in some cases a class of related attacks. Each guide explains how the attack works, the conditions in which a website is vulnerable to it, and the methods to defend against it.

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

The [Threat modeling](/en-US/docs/Web/Security/Threat_modeling) section introduces a process that web developers can follow to develop a structured representation of the potential threats that their site faces, based on the features it provides and the way these features are implemented.

That is, threat modeling helps you understand which attacks you need to defend against.

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
