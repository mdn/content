---
title: Security on the web
slug: Web/Security
page-type: landing-page
---

Websites contain several different types of information. Some of it is non-sensitive, for example the copy shown on the public pages. Some of it is sensitive, for example customer usernames, passwords, and banking information, or internal algorithms and private product information.

Sensitive information needs to be protected, and that is the focus of web security. If that information fell into the wrong hands, it could be used to:

- Put companies at a competitive disadvantage by sharing their information with competitors.
- Disable or hijack their services, again causing serious problems with their operation.
- Put their customer's [privacy](/en-US/docs/Web/Privacy) at risk, making them vulnerable to profiling, targetting, loss of data, identity theft, or even financial loss.

Modern browsers already have several features to protect users' security on the web, but developers also need to employ best practices and code carefully to ensure that their websites are secure. Even simple bugs in your code can result in vulnerabilities that bad people can exploit to steal data and gain control over services for which they don't have authorization.

This article provides an introduction to web security, including information that will help you understand the aspects that can make websites vulnerable and how to secure them.

## Relationship between security and privacy

Security and privacy are distinct topics, but they are also closely-related. It is worth knowing the difference between the two and how they relate.

- **Security** is the act of keeping private data and systems protected against unauthorized access. This includes both company (internal) data and user and partner (external) data.

- **Privacy** refers to the act of giving users the right to control how their data is collected, stored, and used, and not using it irresponsibly. For example, you should clearly communicate to users of your sites the data you are collecting, with whom it will be shared, and how it will be used. Users must be given a chance to consent to your privacy policy, have access to their data you have stored, and delete their data if they no longer wish you to have it.

Good security is very essential for good privacy. You could follow all the advice listed in our [Privacy on the web](/en-US/docs/Web/Privacy) guide, but acting with integrity and having a robust privacy policy are futile if your site is not secure and attackers can just steal data anyway.

## Security services provided by browsers

Web browsers have a strict security model that enforces a good level of fundamental content, connection, and transport security. This section looks at the basics.

### Same-origin policy and CORS

[Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) is a fundamental security mechanism of the web that restricts how a document or script loaded from one {{Glossary("origin")}} can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.

In general, documents from one origin cannot make requests to other origins. This makes sense because you don't want sites to be able to interfere with one another and access things they shouldn't. It does make sense to relax this restriction in some circumstances; for example, you might have multiple sites that interact with each other, and you may want these sites to request resources from one another, such as using [`fetch()`](/en-US/docs/Web/API/fetch).

This can be permitted using [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS), an HTTP-header-based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

### HTTP model for communication

[HTTP](/en-US/docs/Web/HTTP) protocol is used by web browsers and servers to communicate with one another, request resources, provide responses (for example, providing the requested resource or detailing why the request failed), and provide security features for that communication.

[Transport Layer Security (TLS)](/en-US/docs/Web/Security/Transport_Layer_Security) provides security and privacy by encrypting data during transport over the network and is the technology behind the [HTTPS](/en-US/docs/Glossary/HTTPS) protocol. TLS is good for privacy because it stops third parties from being able to intercept transmitted data and use it maliciously.

All browsers are moving towards requiring HTTPS by default; this is practically the case already because you can't do much on the web without this protocol.

Related topics:

- [Transport layer security (TLS)](/en-US/docs/Web/Security/Transport_Layer_Security)
  - : The Transport Layer Security ({{Glossary("TLS")}}) protocol is the standard for enabling two networked applications or devices to exchange information privately and robustly. Applications that use TLS can choose their security parameters, which can have a substantial impact on the security and reliability of data. This article provides an overview of TLS and the kinds of decisions you need to make when securing your content.
- [HTTP Strict-Transport-Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : The `Strict-Transport-Security:` [HTTP](/en-US/docs/Web/HTTP) header lets a website specify that it may only be accessed using HTTPS.
- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
  - : **Certificate Transparency** is an open framework designed to protect against and monitor for certificate misissuances. Newly issued certificates are 'logged' to publicly run, often independent CT logs which maintain an append-only, cryptographically assured record of issued TLS certificates.
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
  - : An HTTPS page that includes content fetched using cleartext HTTP is called a **mixed content** page. Pages like this are only partially encrypted, leaving the unencrypted content accessible to sniffers and man-in-the-middle attackers.
- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : If your website delivers HTTPS pages, all [active mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_active_content) delivered via HTTP on these pages will be blocked by default. Consequently, your website may appear broken to users (if iframes or plugins don't load, etc.). [Passive mixed content](/en-US/docs/Web/Security/Mixed_content#mixed_passivedisplay_content) is displayed by default, but users can set a preference to block this type of content, as well. This page explains what you should be aware of as a web developer.
- [Weak signature algorithms](/en-US/docs/Web/Security/Weak_Signature_Algorithm)
  - : The strength of the hash algorithm used in {{Glossary("Signature/Security", "signing")}} a {{Glossary("digital certificate")}} is a critical element of the security of the certificate. This article provides some information about signature algorithms known to be weak, so you can avoid them when appropriate.

### Secure contexts and feature permissions

Browsers control usage of several "powerful features" in a few different ways. By "powerful features", we mean things like a site generating system notifications, using a user's web cam to get access to a media stream, manipulating the system GPU, and using web payments. If a site could just use the APIs that control such features without restriction, malicious developers could for example:

- Annoy users with unneeded notifications and other UI features.
- Clog up their browser/system to create {{glossary("denial of service", "Denial of Service")}} (DoS) attacks.
- Steal data or money.

Such browser features are controlled as follows:

First, usage of such features is permitted only in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts). A secure context is a {{domxref("Window", "window")}} or a {{domxref("WorkerGlobalScope", "worker")}} for which there is reasonable confidence that the content has been delivered securely (via HTTPS/TLS). In a secure context, the potential for communication with contexts that are **not** secure is limited. Secure contexts also help to prevent [man-in-the-middle attackers](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) from accessing the powerful APIs of the browser.

> **Note:** See also [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts). This reference lists web platform features available only in secure contexts.

Second, the usage of these features is gated behind a system of user permissions — users have to explicitly opt-in to providing access to such features, meaning that these featured can't be used automatically. The user permission requests happen automatically, but you can query the state of an API permission by using the [Permissions API](/en-US/docs/Web/API/Permissions_API).

Third, many other browser features can be used only in response to a user action such as clicking a button, meaning that they need to be invoked from inside an appropriate event handler. This is often called **transient activation**. See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for more information.

## Security considerations for client-side developers

There are many aspects of web security that need to be thought about on the server- and client-side. The sections below focus mainly on client-side security considerations. You can find a useful summary of security from a server-side perspective, which also includes descriptions of common attacks to watch out for, at [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security) (part of our [Server-side website programming](/en-US/docs/Learn/Server-side) learning module).

## Store client-side data responsibly

Handling data responsibly is largely concerned with cutting down on [cookie usage](/en-US/docs/Web/HTTP/Cookies) and being careful about the data you store in them. Traditionally, web developers have used cookies to store all kinds of data, for all kinds of purposes, and it has been easy for attackers to exploit this tendency. As a result, browsers have started to limit what you can do with cross-site cookies, with the aim of removing access to them altogether in the future.

You should prepare for the removal of cross-site cookies by limiting the amount of tracking activities you rely on and/or by implementing desired information persistence in other ways.

For example:

- Use an alternative client-side storage mechanism such as the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API) to persist data. Web storage does have the downside that the data is stored per-origin, so it can't be shared. Note that web storage has two variants — `sessionStorage` and `localStorage`. We would recommend using `sessionStorage` for extra security, as data only persists for the lifetime of the window or tab it exists in. `localStorage` data persists even after the window or tab is closed and reopened. This means that there is a higher chance of it falling into the wrong hands, for example on a shared workstation.
- Use a technology such as [IFrame credentialless](/en-US/docs/Web/Security/IFrame_credentialless), [First-party sets](https://developer.chrome.com/docs/privacy-sandbox/first-party-sets/) and/or the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) to allow your sites to opt-in to using cross-site cookies in a safe and controlled way or block them altogether. These technologies currently have limited browser support.
- Use a server-side solution for data persistence.

See our [privacy guide](/en-US/docs/Web/Privacy) and particularly [Cut down on tracking cookies](/en-US/docs/Web/Privacy#cut_down_on_tracking_cookies) for more context around this.

## Protect user identity and manage logins

When implementing a secure solution that involves data collection, particularly if the data is sensitive such as log-in credentials, it makes sense to use a reputable solution from a well-respected provider. For example, any respectable server-side framework will have built-in features to protect against common vulnerabilities. You could also consider using a specialized product for your purpose, for example an identity provider solution or a secure online survey provider.

If you want to roll your own solution for collecting user data, make sure you understand all aspects and requirements. Hire an experienced server-side developer and/or security engineer to implement the system, and ensure it is tested thoroughly. Use multi-factor authentication (MFA) to provide better protection. Consider using a dedicated API such as [Web Authentication](/en-US/docs/Web/API/Web_Authentication_API) or [Federated Credential Management](/en-US/docs/Web/API/FedCM_API) to streamline the client-side of the app.

Here are some other tips for providing secure logins:

- When collecting user login information, enforce strong passwords so that your user's account details cannot be easily guessed. Weak passwords are one of the main causes of security breaches. In addition, encourage your users to use a password manager so that they can use more complex passwords, don't need to worry about remembering them, and won't create a security risk by writing them down. See also our article on [Insecure passwords](/en-US/docs/Web/Security/Insecure_passwords).
- You should also educate your users about **phishing**. Phishing is the act of sending a message to a user (for example, an email or an SMS) containing a link to a site that looks like a site they use every day but isn't. The link is accompanied by a message designed to trick users into entering their username and password on the site so it can be stolen and then used by an attacker for malicious purposes.

  > **Note:** Some phishing sites can be very sophisticated and hard to distinguish from a real website. You should therefore educate your users to not trust random links in emails and SMS messages. If they receive a message along the lines of "Urgent, you need to log in now to resolve an issue", they should go to the site directly in a new tab and try logging in directly rather than clicking the link in the message. Or they could phone or email you to discuss the message they received.

- Protect against brute force attacks on login pages with [rate limiting](https://www.cloudflare.com/en-gb/learning/bots/what-is-rate-limiting/), account lockouts after a certain number of unsuccessful attempts, and [CAPTCHA challenges](https://en.wikipedia.org/wiki/CAPTCHA).
- Manage user login sessions with unique [session IDs](https://en.wikipedia.org/wiki/Session_ID), and automatically log out users after periods of inactivity.

## Don't include sensitive data in URL query strings

As a general rule you shouldn't [include sensitive data in URL query strings](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url): if a third party intercepts the URL (for example via the {{httpheader("Referer")}} HTTP header), they could steal that information. Even more serious is that these URLs can indexed by public web crawlers, HTTP proxies, and archiving tools such as the [internet archive](https://web.archive.org/), meaning that your sensitive data can be persisted on publicly accessible resources.

Use `POST` requests rather than `GET` requests to avoid these issues. Our article [Referer header policy: Privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) describes in more detail the privacy and security risks associated with the `Referer` header, and offers advice on mitigating those risks.

> **Note:** Steering away from transmitting sensitive data in URLs via `GET` requests can also help protect against {{glossary("CSRF", "cross-site request forgery")}} and [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).

## Enforce usage policies

Consider using tools like [Content Security Policy](/en-US/docs/Web/HTTP/CSP) (CSP) and [Permissions policy](/en-US/docs/Web/HTTP/Permissions_Policy) to enforce a set of feature and resource usage on your site that makes it harder to introduce vulnerabilities.

CSP allows you to add a layer of security by, for example, allowing images or scripts to be loaded only from specific trusted origins. This helps to detect and mitigate certain types of attacks, including Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) and data injection attacks. These attacks involve a range of malicious activities, including data theft, site defacement, and distribution of malware.

Permissions policy works in a similar way, except that it is more concerned with allowing or blocking access to specific "powerful features" ([as mentioned earlier](#secure_contexts_and_feature_permissions)).

> **Note:** Such policies are very useful to help keep sites secure, especially when you are using a lot of third party code on your site. However, keep in mind that if you block usage of a feature that a third-party script relies on to work, you may end up breaking your site's functionality.

## Maintain data integrity

Following on from the previous section, when you do allow feature and resource usage on your site, you should try to ensure that resources have not been tampered with.

Related topics:

- [Subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
  - : **Subresource Integrity** (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a {{Glossary("CDN")}}) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match.
- [HTTP Access-Control-Allow-Origin](/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : The **`Access-Control-Allow-Origin`** response header indicates whether the response can be shared with requesting code from the given {{glossary("origin")}}.
- [HTTP X-Content-Type-Options](/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : The **`X-Content-Type-Options`** response HTTP header is a marker used by the server to indicate that the [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) advertised in the {{HTTPHeader("Content-Type")}} headers should not be changed and be followed. This is a way to opt out of [MIME type sniffing](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing), or, in other words, to say that the MIME types are deliberately configured.

## Sanitize form input

As a general rule, don't trust anything that users enter into forms. Filling out forms online is complicated and tedious, and it is easy for users to enter wrong data or data in the wrong format. In addition, malicious folks are well-versed in the art of entering specific strings of executable code into form fields (for example, SQL or JavaScript). If you're not careful about handling these types of inputs, it could either execute harmful code on your site or delete your databases. See [SQL injection](/en-US/docs/Learn/Server-side/First_steps/Website_security#sql_injection) for a good example of how this could happen.

To protect against this, you should thoroughly sanitize data entered into your forms:

- You should implement client-side validation to inform users when they have entered data in the wrong format. You can do this using built-in HTML form validation features, or you can write your own validation code. See [Client-side form validation](/en-US/docs/Learn/Forms/Form_validation) for more information.
- You should use output encoding when displaying user input in an application UI to safely display data exactly as a user typed it in, to avoid it being executed as code. See [Output encoding](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding) for more information.

However, you can't rely on client-side validation alone for security. It is a useful user experience enhancement for your users because it gives them instant validation feedback without having to wait for a round trip to the server. At the same time, client-side validation is too easy for a malicious party to bypass (for example, by turning off JavaScript in the browser to bypass JavaScript-based validation), so it should be combined with server-side validation.

Any reputable server-side framework will provide functionality for validating form submissions. In addition, a common best practice is to escape any special characters that form part of executable syntax, thereby making any entered code no longer executable and treated as plain text.

## Protect against clickjacking

In [clickjacking](/en-US/docs/Glossary/Clickjacking), a user is fooled into clicking on a UI element that performs an action different from what the user expects. This can be a risk inherent in embedded third-party content (make sure you trust what is being embedded into your site), and it can also be combined with phishing.

The following features can help guard against clickjacking:

- [HTTP X-Frame-Options](/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  - : The **`X-Frame-Options`** [HTTP](/en-US/docs/Web/HTTP) response header can be used to indicate whether a browser should be allowed to render a page in a [`<frame>`](/en-US/docs/Web/HTML/Element/frame), [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), [`<embed>`](/en-US/docs/Web/HTML/Element/embed) or [`<object>`](/en-US/docs/Web/HTML/Element/object). Sites can use this to avoid [clickjacking](/en-US/docs/Glossary/Clickjacking) attacks, by ensuring that their content is not embedded into other sites.
- [CSP: frame-ancestors](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** directive specifies valid parents that may embed a page using {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}}.

## See also

- [Privacy on the web](/en-US/docs/Web/Privacy)
- [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security)
- [Mozilla security blog](https://blog.mozilla.org/security/)
- [Mozilla observatory](https://observatory.mozilla.org/)
- [OWASP Cheat Sheet series](https://cheatsheetseries.owasp.org/index.html) — a series of detailed documents on different security topics, including how to protect against different types of vulnerability.
- [Mozilla web security cheat sheet](https://infosec.mozilla.org/guidelines/web_security.html#web-security-cheat-sheet)

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Security", "1", "0", "1")}}
</section>
