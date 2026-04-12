---
title: Defenses
slug: Web/Security/Defenses
page-type: guide
sidebar: security
---

These pages describe web platform features that provide defenses against one or more security attacks.

As a rule, there's a many-to-many relationship between attacks and defenses. In each of our [attacks guides](/en-US/docs/Web/Security/Attacks) we describe the specific defenses against that attack. In the defenses pages listed below, we provide a broader overview of these defenses and how they work.

- [Certificate transparency](/en-US/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Provides a publicly visible log of issued {{glossary("TLS")}} certificates, making it easier to detect those which were malicious or incorrectly issued.
- [Mixed content blocking](/en-US/docs/Web/Security/Defenses/Mixed_content)
  - : Prevents a document that was delivered over HTTPS from loading subresources (such as scripts, images, or fonts) over HTTP.
- [Same-origin policy](/en-US/docs/Web/Security/Defenses/Same-origin_policy)
  - : Restricts the ways in which content loaded from one {{glossary("origin")}} can access content loaded from a different origin. It controls the extent to which websites can access each other's state.
- [Secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts)
  - : A secure context is a `Window` or `Worker` for which certain standards of authentication and confidentiality are met. This usually means that it was delivered over {{glossary("HTTPS")}}. Code running in a secure context is able to use powerful web APIs that are not made available in insecure contexts.
- [Subresource integrity](/en-US/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Enables a website to verify that scripts and stylesheets loaded from an external source (such as a {{glossary("CDN")}}) have the expected content, and have not been modified.
- [Transport Layer Security (TLS)](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Enables a client to communicate securely with a server across an untrusted network. Most notably, on the web, it's used to secure HTTP connections: the resulting protocol is called {{glossary("HTTPS")}}. HTTPS is the only real defense against [Manipulator in the Middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM) attacks.
- [User activation](/en-US/docs/Web/Security/Defenses/User_activation)
  - : To protect the user from potentially malicious websites, certain powerful APIs can only be used when the user meaning the user is currently interacting with the web page, or has interacted with the page at least once since it loaded.
