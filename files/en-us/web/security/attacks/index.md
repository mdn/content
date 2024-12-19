---
title: Attacks
slug: Web/Security/Attacks
page-type: guide
---

In web security, an attack is a specific method an attacker uses to achieve their goal. For example, if their goal is to steal a user's data, a cross-site scripting (XSS) attack is one method they might use. A given attack may be countered by one or more mitigations: for example, XSS might be countered by properly sanitizing data and implementing a [content security policy](/en-US/docs/Web/HTTP/CSP).

This page links to pages explaining how some common attacks work, and how they can be mitigated.

- [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking)
  - : In a clickjacking attack, an attacker creates a decoy site which embeds the target site inside an {{htmlelement("iframe")}} element. It hides the `<iframe>`, and overlays some decoy elements on top of it. When the user interacts with these decoy elements, they are inadvertently interacting with the target site, and may be tricked into performing actions with the target site which they did not intend.
- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS)
  - : In a cross-site scripting (XSS) attack, a website accepts some input crafted by the attacker and mistakenly includes this input in the site's own pages in a way that makes the browser execute it as code. The malicious code can then do anything that the site's own front-end code could do.
