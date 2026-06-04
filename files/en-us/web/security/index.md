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

The attacks described include, among others:

- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
- [Cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF)
- [Phishing](/en-US/docs/Web/Security/Attacks/phishing)
- [Supply chain attacks](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks)

## Defenses

The [Defenses](/en-US/docs/Web/Security/Defenses) section includes guides to features or practices that you can use to protect yourself against various attacks. In general, there's a many-to-many relationship between attack and defenses. That is, a single defense can protect against multiple attacks, and defending against a single attack may require multiple defenses, so as to provide defense in depth.

Defenses include features that browsers provide, such as:

- [Transport Layer Security (TLS)](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security)
- [The same-origin policy](/en-US/docs/Web/Security/Defenses/Same-origin_policy)
- [Subresource Integrity](/docs/Web/Security/Defenses/Subresource_Integrity)

Defense also include practices you can follow, such as:

- [Operational security](/en-US/docs/Web/Security/Defenses/Operational_security)
- [Input validation](/en-US/docs/Web/Security/Defenses/Input_validation)

Note that not all defenses are described in this section: some, such as [CSP](2/en-US/docs/Web/HTTP/Guides/CSP) or [trusted types](/en-US/docs/Web/API/Trusted_Types_API), are described inside the technology area of which they are a part.

## Threat modeling

The [Threat modeling](/en-US/docs/Web/Security/Threat_modeling) section introduces a process that web developers can follow to develop a structured representation of the potential threats that their site faces, based on the features it provides and the way these features are implemented.

That is, threat modeling helps you understand which attacks you need to defend against.

## Authentication

Authentication is the process of verifying that an entity — such as a user of a website — is who they claim to be. You'll most likely need to think about authentication if you want users to sign into your website.

If users can log into your website, there are typically things logged-in users can do, or data they can access, that you don't want to make generally available. This makes user account access one of the most valuable targets for attackers.

In this set of guides we'll look at the main techniques available for authenticating users on the web, and good practices for them. We describe four methods:

- [Passwords](/en-US/docs/Web/Security/Authentication/Passwords)
  - : Passwords are the most well-known authentication method. They have many well-known security weaknesses, and in this article we'll explain the best practices to minimize the risks of using them: however, some threats don't have effective defenses.
- [One-time passwords (OTP)](/en-US/docs/Web/Security/Authentication/OTP)
  - : A one-time password is a generated code that is specific to a single login attempt. These are often used in combination with another method such as a password.
- [Federated identity](/en-US/docs/Web/Security/Authentication/Federated_identity)
  - : In a federated identity system, a website delegates authentication to a third party, which is called an _identity provider_. When the user tries to sign into the website, the website asks the identity provider to identify the user, and if the identification is successful, logs the user in.
- [Passkeys](/en-US/docs/Web/Security/Authentication/Passkeys)
  - : Passkeys enable websites to authenticate users without the user having to enter any passwords or other secret codes on the site itself. They rely on a module called an _authenticator_, that's in, or attached to, the user's device.

In this section we also outline good practices for [session management](/en-US/docs/Web/Security/Authentication/Session_management), which is how a website remembers the signed-in status of a user.

## HTTP Observatory

The [HTTP Observatory](https://developer.mozilla.org/en-US/observatory) tool enables you to scan your website to check whether it's following certain good security practices. Our [Practical security implementation guides](/en-US/docs/Web/Security/Practical_implementation_guides) provide explanations of how to implement these practices, and the threats they defend against.

## See also

- [Privacy on the web](/en-US/docs/Web/Privacy)
- [Learn: Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [OWASP Cheat Sheet series](https://cheatsheetseries.owasp.org/index.html)
