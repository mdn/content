---
title: Web security
slug: Web/Security
page-type: landing-page
---

{{QuickLinksWithSubpages}}

Ensuring that your website or open web application is secure is critical. Even simple bugs in your code can result in private information being leaked, and bad people are out there trying to find ways to steal data. The web security-oriented articles listed here provide information that may help you secure your site and its code from attacks and data theft.

## Content security

- [Content security policy (CSP)](/en-US/docs/Web/HTTP/CSP)
  - : **Content Security Policy** ({{Glossary("CSP")}}) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) and data injection attacks. These attacks are used for everything from data theft to site defacement to the distribution of malware.

## Connection security

- [Transport layer security (TLS)](/en-US/docs/Web/Security/Transport_Layer_Security)
  - : The Transport Layer Security ({{Glossary("TLS")}}) protocol is the standard for enabling two networked applications or devices to exchange information privately and robustly. Applications that use TLS can choose their security parameters, which can have a substantial impact on the security and reliability of data. This article provides an overview of TLS and the kinds of decisions you need to make when securing your content.
- HTTPS
  - : **HTTPS** (**_HyperText Transfer Protocol Secure_**) is an encrypted version of the {{Glossary("HTTP")}} protocol. It uses {{Glossary("SSL")}} or {{Glossary("TLS")}} to encrypt all communication between a client and a server. This secure connection allows clients to be sure that they are connected with the intended server, and to exchange sensitive data.
- [HTTP Strict-Transport-Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : The `Strict-Transport-Security:` [HTTP](/en-US/docs/Web/HTTP) header lets a website specify that it may only be accessed using HTTPS.
- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
  - : **Certificate Transparency** is an open framework designed to protect against and monitor for certificate misissuances. Newly issued certificates are 'logged' to publicly run, often independent CT logs which maintain an append-only, cryptographically assured record of issued TLS certificates.
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
  - : An HTTPS page that includes content fetched using cleartext HTTP is called a **mixed content** page. Pages like this are only partially encrypted, leaving the unencrypted content accessible to sniffers and man-in-the-middle attackers.
- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : If your website delivers HTTPS pages, all [active mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_active_content) delivered via HTTP on these pages will be blocked by default. Consequently, your website may appear broken to users (if iframes or plugins don't load, etc.). [Passive mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_passivedisplay_content) is displayed by default, but users can set a preference to block this type of content, as well. This page explains what you should be aware of as a web developer.
- [Secure contexts](/en-US/docs/Web/Security/Secure_Contexts)
  - : A **secure context** is a `Window` or `Worker` for which there is reasonable confidence that the content has been delivered securely (via HTTPS/TLS), and for which the potential for communication with contexts that are **not** secure is limited. Many Web APIs and features are accessible only in a secure context. The primary goal of secure contexts is to prevent [man-in-the-middle attackers](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) from accessing powerful APIs that could further compromise the victim of an attack.
- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
  - : This reference lists the web platform features available only in secure contexts.
- [Weak signature algorithms](/en-US/docs/Web/Security/Weak_Signature_Algorithm)
  - : The strength of the hash algorithm used in {{Glossary("Signature/Security", "signing")}} a {{Glossary("digital certificate")}} is a critical element of the security of the certificate. This article provides some information about signature algorithms known to be weak, so you can avoid them when appropriate.
- Redirection with 301 and 302 response codes
  - : to be written

## Data security

- [Using HTTP Cookies](/en-US/docs/Web/HTTP/Cookies)
  - : An _HTTP cookie_ (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with later requests to the same server. Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for example.
- [Local storage](/en-US/docs/Web/API/Window/localStorage)
  - : The `Window` object's {{domxref("Window.localStorage")}} property is a way for servers to store data on a client that is persistent across sessions.

## Information leakage

- [Referer header policy: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
  - : There are privacy and security risks associated with the [Referer HTTP header](/en-US/docs/Web/HTTP/Headers/Referer). This article describes them and offers advice on mitigating those risks.
- [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless)
  - : Iframe credentialless provides a mechanism for developers to load third-party resources in {{htmlelement("iframe")}}s using a new, ephemeral context. This context doesn't have access to the network, cookies, and storage data associated with its origin. It uses a new context local to the top-level document lifetime. In return, the {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) embedding rules can be lifted, so documents with COEP set can embed third-party documents that do not.

## Integrity

- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
  - : The **same-origin policy** is a critical security mechanism that restricts how a document or script loaded from one {{Glossary("origin")}} can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.
- [Subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a {{Glossary("CDN")}}) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.
- [HTTP Access-Control-Allow-Origin](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : The **`Access-Control-Allow-Origin`** response header indicates whether the response can be shared with requesting code from the given {{glossary("origin")}}.
- [HTTP X-Content-Type-Options](/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : The **`X-Content-Type-Options`** response HTTP header is a marker used by the server to indicate that the [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) advertised in the {{HTTPHeader("Content-Type")}} headers should not be changed and be followed. This is a way to opt out of [MIME type sniffing](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing), or, in other words, to say that the MIME types are deliberately configured.

## Clickjacking protection

In [clickjacking](/en-US/docs/Glossary/Clickjacking), a user is fooled into clicking on a UI element that performs some action other than what the user expects.

- [HTTP X-Frame-Options](/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  - : The **`X-Frame-Options`** [HTTP](/en-US/docs/Web/HTTP) response header can be used to indicate whether a browser should be allowed to render a page in a [`<frame>`](/en-US/docs/Web/HTML/Element/frame), [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), [`<embed>`](/en-US/docs/Web/HTML/Element/embed) or [`<object>`](/en-US/docs/Web/HTML/Element/object). Sites can use this to avoid [clickjacking](/en-US/docs/Glossary/Clickjacking) attacks, by ensuring that their content is not embedded into other sites.
- [CSP: frame-ancestors](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** directive specifies valid parents that may embed a page using {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}}.

## User information security

- [Insecure passwords](/en-US/docs/Web/Security/Insecure_passwords)
  - : Serving login forms over HTTP is especially dangerous because of the wide variety of attacks that can be used against them to extract a user's password. Network eavesdroppers could steal a user's password by sniffing the network, or by modifying the served page in transit.
- [Privacy and the :visited selector](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Before about 2010, the [CSS](/en-US/docs/Web/CSS) {{cssxref(":visited")}} selector allowed websites to uncover a user's browsing history and figure out what sites the user had visited. To mitigate this problem, browsers have limited the amount of information that can be obtained from visited links.

## Security-related glossary terms

- {{Glossary("Block cipher mode of operation")}}
- {{Glossary("Certificate authority")}}
- {{Glossary("challenge", "Challenge-response authentication")}}
- {{Glossary("Cipher")}}
- {{Glossary("Cipher suite")}}
- {{Glossary("Ciphertext")}}
- {{Glossary("Clickjacking")}}
- {{Glossary("CORS")}}
- {{Glossary("CORS-safelisted request header")}}
- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Cross-site scripting")}}
- {{Glossary("Cryptanalysis")}}
- {{Glossary("Cryptographic hash function")}}
- {{Glossary("Cryptography")}}
- {{Glossary("CSP")}}
- {{Glossary("CSRF")}}
- {{Glossary("Decryption")}}
- {{Glossary("Digital certificate")}}
- {{Glossary("DTLS")}}
- {{Glossary("Encryption")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Forbidden response header name")}}
- {{Glossary("Hash")}}
- {{Glossary("HMAC")}}
- {{Glossary("HPKP")}}
- {{Glossary("HSTS")}}
- {{Glossary("HTTPS")}}
- {{Glossary("Key")}}
- {{Glossary("MitM")}}
- {{Glossary("OWASP")}}
- {{Glossary("Preflight request")}}
- {{Glossary("Public-key cryptography")}}
- {{Glossary("Reporting directive")}}
- {{Glossary("Robots.txt")}}
- {{Glossary("Same-origin policy")}}
- {{Glossary("Session hijacking")}}
- {{Glossary("SQL injection")}}
- {{Glossary("Symmetric-key cryptography")}}
- {{Glossary("TOFU")}}
- {{Glossary("TLS")}}

## See also

- [Security Blog](https://blog.mozilla.org/security/)
