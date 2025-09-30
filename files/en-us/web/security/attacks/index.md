---
title: Attacks
slug: Web/Security/Attacks
page-type: guide
sidebar: security
---

In web security, an attack is a specific method an attacker uses to achieve their goal. For example, if their goal is to steal a user's data, a cross-site scripting (XSS) attack is one method they might use. A given attack may be countered by one or more mitigations: for example, XSS might be countered by properly sanitizing data and implementing a [content security policy](/en-US/docs/Web/HTTP/Guides/CSP).

This page links to pages explaining how some common attacks work, and how they can be mitigated.

- [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking)
  - : In a clickjacking attack, an attacker creates a decoy site which embeds the target site inside an {{htmlelement("iframe")}} element. It hides the `<iframe>`, and overlays some decoy elements on top of it. When the user interacts with these decoy elements, they are inadvertently interacting with the target site, and may be tricked into performing actions with the target site which they did not intend.
- [Cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF)
  - : In a cross-site request forgery (CSRF) attack, an attacker tricks the user or the browser into making an HTTP request to the target site from a malicious site. The request includes the user's credentials and causes the server to carry out some harmful action, thinking that the user intended it.
- [Cross-site leaks (XS-Leaks)](/en-US/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-site leaks (XS-Leaks) are a class of attack in which an attacker's site can derive information about the target site, or about the user's relationship with the target site, by using web platform APIs that enable sites to interact with one another.
- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
  - : In a cross-site scripting (XSS) attack, a website accepts some input crafted by the attacker and mistakenly includes this input in the site's own pages in a way that makes the browser execute it as code. The malicious code can then do anything that the site's own front-end code could do.
- [Insecure Direct Object Reference (IDOR)](/en-US/docs/Web/Security/Attacks/IDOR)
  - : In a Insecure Direct Object Reference (IDOR) attack, the attacker takes advantage of insufficient access control and insecure exposure of object identifiers, such as database keys or file paths.
- [Manipulator in the Middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM)
  - : In a Manipulator in the Middle (MITM) attack, the attacker inserts themselves between the user's browser and the server, and can see and potentially modify any of the traffic exchanged over HTTP.
- [Phishing](/en-US/docs/Web/Security/Attacks/Phishing)
  - : Phishing is a {{glossary("social engineering")}} attack in which the attacker steals a user's {{glossary("credential", "credentials")}} by tricking them into believing they are signing into the target site, when in reality they are interacting with a fake site controlled by the attacker.
- [Server Side Request Forgery (SSRF)](/en-US/docs/Web/Security/Attacks/SSRF)
  - : Server‑Side Request Forgery (SSRF) is a vulnerability that allows an attacker to make HTTP (or other network) requests to arbitrary destinations. SSRF makes these requests originate from within a server itself, which typically has broader access than an external client.
- [Subdomain takeover](/en-US/docs/Web/Security/Attacks/Subdomain_takeover)
  - : In a Subdomain takeover attack, the attacker gains control over a subdomain of a target domain.
