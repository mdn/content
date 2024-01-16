---
title: "Referer header: Privacy and security concerns"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

There are privacy and security risks associated with the [Referer HTTP header](/en-US/docs/Web/HTTP/Headers/Referer). This article describes them, and offers advice on mitigating those risks.

## The referrer problem

The {{httpheader("Referer")}} (sic) header contains the address of a request (for example, the address of the previous web page from which a link to the currently requested page was followed, or the address of a page loading an image or other resource). This has many fairly innocent uses, including analytics, logging, or optimized caching. However, there are more problematic uses such as tracking or stealing information, or even just side effects such as inadvertently leaking sensitive information.

For example, consider a "reset password" page with a social media link in a footer. If the link was followed, depending on how information was shared the social media site may receive the reset password URL and may still be able to use the shared information, potentially compromising a user's security.

By the same logic, an image from a third party site embedded in your page could result in sensitive information being leaked to the third party. Even if security is not compromised, the information may not be something the user wants shared.

## How can we fix this?

Much of this risk can be mitigated by sensible design of applications. A sensible application would remove such risks by making single-use password reset URLs, or combining them with a unique user token. The risk can also be reduced by transmitting sensitive data in more secure ways.

You should use {{HTTPMethod("POST")}} rather than {{HTTPMethod("GET")}} wherever possible, to avoid passing sensitive data to other locations via URLs.

You should always use {{glossary("HTTPS")}} for your sites. This has many security advantages, including the fact that HTTPS sites will never transmit referrer information to non-HTTPS sites. This advice is less relevant now that most of the web is using HTTPS, but it is still a worthy consideration.

In addition, you should consider removing any third party content (e.g. social networking widgets embedded in {{htmlelement("iframe")}}) from secure areas of your website, like password reset pages, payment forms, login areas, etc.

You can also mitigate such risks using:

- The {{httpheader("Referrer-Policy")}} header on your server to control what information is sent through the {{httpheader("Referer")}} header. For example, a directive of `no-referrer` would omit the Referer header entirely.
- The `referrerpolicy` attribute on HTML elements that are in danger of leaking such information (such as {{HTMLElement("img")}} and {{HTMLElement("a")}}). This can for example be set to `no-referrer` to stop the `Referer` header being sent altogether.
- The [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute set to [`noreferrer`](/en-US/docs/Web/HTML/Attributes/rel/noreferrer) on HTML elements that are in danger of leaking such information (such as {{HTMLElement("img")}} and {{HTMLElement("a")}}).
- A {{HTMLElement("meta")}} element with a [name](/en-US/docs/Web/HTML/Element/meta#name) of `referrer` and the content set to `no-referrer` to disable the Referer header for the whole document. See [Referrer-Policy Integration with HTML](/en-US/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html).
- The [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect) technique.

Security-conscious server-side frameworks tend to have built in mitigations for such problems, for example:

- [Security in Django](https://docs.djangoproject.com/en/stable/topics/security/) (especially see [Cross site request forgery (CSRF) protection](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — middleware for setting Referrer-Policy in Node.js/Express apps (see also [helmetjs](https://github.com/helmetjs) for more security provisions).

## Policy and requirements

It would make sense to write a set of security and privacy requirements for your project team(s) that specify usage of such features to mitigate the associated risks. You should enlist the help of a web security expert to write these requirements, and consider both user needs and welfare, as well as other issues like policy and regulation enforced by legislation such as the [EU General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN).

## See also

- [Mozilla security team guidelines on Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
