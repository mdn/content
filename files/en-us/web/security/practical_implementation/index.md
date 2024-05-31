---
title: Practical implementation guides
slug: Web/Security/Practical_implementation
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

This section provides opinionated guides detailing best practices for implementing security features on websites. It does not cover all possible security eventualities and does not guarantee that your site is 100% secure, but following these guides will make your sites significantly more secure.

## Content security fundamentals

Most of the content in this section has direct links to the [Mozilla Observatory](/en-US/observatory/) tool. The pages detail how to fix the issues highlighted by the Observatory tests, and as such, Observatory will link to appropriate sections in the test results to provide guidance. Mozilla's internal developer teams use this guidance when implementing websites.

The guides are listed in the order that we recommend they are implemented. This order is based on a combination of security impact and ease of implementation from an operational and developmental perspective.

| Guide                                                                                                                  | Impact  | Difficulty | Required | Summary                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ------- | ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [TLS configuration](/en-US/docs/Web/Security/Practical_implementation/TLS#tls_configuration)                           | Medium  | Medium     | Yes      | Use the most secure TLS configuration available for your user base.                                                                    |
| [Resource loading](/en-US/docs/Web/Security/Practical_implementation/TLS#resource_loading)                             | Maximum | Low        | Yes      | Both passive and active resources should be loaded via HTTPS.                                                                          |
| [HTTP redirections](/en-US/docs/Web/Security/Practical_implementation/TLS#http_redirections)                           | Maximum | Low        | Yes      | Websites must redirect to HTTPS; API endpoints should disable HTTP entirely.                                                           |
| [HTTP Strict transport security](/en-US/docs/Web/Security/Practical_implementation/TLS#http_strict_transport_security) | High    | Low        | Yes      | Notify user agents to only connect to sites over HTTPS, even if the scheme chosen was HTTP.                                            |
| [Clickjacking prevention](/en-US/docs/Web/Security/Practical_implementation/Clickjacking)                              | High    | Low        | Yes      | Control how your site may be framed within an {{htmlelement("iframe")}}, to prevent [clickjacking](/en-US/docs/Glossary/Clickjacking). |
| [Cross-site request forgery prevention](/en-US/docs/Web/Security/Practical_implementation/CSRF_prevention)             | High    | Unknown    | Varies   | CSRF can be protected against via `SameSite` cookies and anti-CSRF tokens.                                                             |
| [Secure cookies](/en-US/docs/Web/Security/Practical_implementation/Cookies)                                            | High    | Medium     | Yes      | All cookies should be set as restrictively as possible.                                                                                |
| [Verifying MIME types](/en-US/docs/Web/Security/Practical_implementation/MIME_types)                                   | Low     | Low        | No       | Websites should verify that they are setting the proper MIME types for all resources.                                                  |
| [Content Security Policy (CSP)](/en-US/docs/Web/Security/Practical_implementation/CSP)                                 | High    | High       | Yes      | Provides fine-grained control over where site resources can be loaded from.                                                            |
| [Cross-origin Resource Sharing (CORS)](/en-US/docs/Web/Security/Practical_implementation/CORS)                         | High    | Low        | Yes      | Define which non-same origins are allowed to access the content of pages and have resources loaded from them.                          |
| [Referrer policy](/en-US/docs/Web/Security/Practical_implementation/Referrer_policy)                                   | Low     | Low        | Yes      | Improves privacy for users, prevents the leaking of internal URLs via the {{httpheader("Referer")}} header.                            |
| [robots.txt](/en-US/docs/Web/Security/Practical_implementation/Robots_txt)                                             | Low     | Low        | No       | Tell robots (such as search engine indexers) how to behave, by instructing them not to crawl certain paths on the website.             |
| [Subresource integrity](/en-US/docs/Web/Security/Practical_implementation/SRI)                                         | Low     | Low        | No       | Verify that fetched resources (for example, from a CDN) are delivered without unexpected manipulation.                                 |

## User information security

- [How to turn off form autocompletion](/en-US/docs/Web/Security/Practical_implementation/Turning_off_form_autocompletion)
  - : Form fields support autocompletion; that is, their values can be remembered and automatically filled out next time a user visits your site. For certain types of data, you may wish to disable this feature; this article explains how.

## See also

- [Open Web Application Security Project (OWASP): Cheatsheet series](https://cheatsheetseries.owasp.org/)
  - : A collection of practical guides on specific application security topics.
- [OWASP: Attacks](https://owasp.org/www-community/attacks/)
  - : A collection of pages describing different types of security exploit, and explaining how they work.
