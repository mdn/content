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

| Guide       | Impact      | Difficulty | Required  | Summary                                                                    |
| ----------- | ----------- | ---------- | --------- | -------------------------------------------------------------------------- |
| [TLS configuration](/en-US/docs/Web/Security/Practical_implementation/TLS#tls_configuration)       | Medium     | Medium     | Yes       | Use the most secure TLS configuration available for your user base. |
| [Resource loading](/en-US/docs/Web/Security/Practical_implementation/TLS#resource_loading)       | Maximum     | Low     | Yes       | Both passive and active resources should be loaded via HTTPS. |
| [HTTP redirections](/en-US/docs/Web/Security/Practical_implementation/TLS#http_redirections)    | Maximum     | Low     | Yes       | Websites must redirect to HTTPS; API endpoints should disable HTTP entirely. |
| [HTTP Strict transport security](/en-US/docs/Web/Security/Practical_implementation/TLS#http_strict_transport_security)       | High     | Low     | Yes       | Notify user agents to only connect to sites over HTTPS, even if the scheme chosen was HTTP. |
| [Clickjacking prevention](/en-US/docs/Web/Security/Practical_implementation/Clickjacking)     | High     | Low     | Yes       | Control how your site may be framed within an {{htmlelement("iframe")}}, to prevent [clickjacking](/en-US/docs/Glossary/Clickjacking). |
| [Cross-site request forgery prevention](/en-US/docs/Web/Security/Practical_implementation/CSRF_prevention)       | High     | Unknown     | Varies       | CSRF can be protected against via `SameSite` cookies and anti-CSRF tokens.  |
| [Secure cookies](/en-US/docs/Web/Security/Practical_implementation/Cookies)       | High    | Medium     | Yes     | All cookies should be set as restrictively as possible. |
| [Verifying MIME types](/en-US/docs/Web/Security/Practical_implementation/MIME_types)       | Low     | Low     | No       | Websites should verify that they are setting the proper MIME types for all resources. |
| [Content Security Policy (CSP)](/en-US/docs/Web/Security/Practical_implementation/CSP)       | High     | High     | Yes        | Provides fine-grained control over where site resources can be loaded from. |
| [Cross-origin Resource Sharing (CORS)](/en-US/docs/Web/Security/Practical_implementation/CORS)       | High     | Low     | Yes       | Define which non-same origins are allowed to access the content of pages and have resources loaded from them.  |
| [Referrer policy](/en-US/docs/Web/Security/Practical_implementation/Referrer_policy)       | Low     | Low     | Yes       | Improves privacy for users, prevents the leaking of internal URLs via the {{httpheader("Referer")}} header. |
| [robots.txt](/en-US/docs/Web/Security/Practical_implementation/Robots_txt)       | Low     | Low     | No       | Tell robots (such as search engine indexers) how to behave, by instructing them not to crawl certain paths on the website. |
| [Subresource integrity](/en-US/docs/Web/Security/Practical_implementation/SRI)       | Low     | Low     | No       | Verify that fetched resources (for example, from a CDN) are delivered without unexpected manipulation. |






- [Properly configuring server MIME types](/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : There are several ways incorrect MIME types can cause potential security problems with your site. This article explains some of those and shows how to configure your server to serve files with the correct MIME types.
- [HTTP Strict Transport Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : The `Strict-Transport-Security:` [HTTP](/en-US/docs/Web/HTTP) header lets a website specify that it may only be accessed using HTTPS.
- [HTTP access control](/en-US/docs/Web/HTTP/CORS)
  - : The Cross-Origin Resource Sharing standard provides a way to specify what content may be loaded from other domains. You can use this to prevent your site from being used improperly; in addition, you can use it to establish resources that other sites are expressly permitted to use.
- [Content Security Policy](/en-US/docs/Web/HTTP/CSP)
  - : An added layer of security that helps to detect and mitigate certain types of attacks, including {{Glossary("Cross-site_scripting", "Cross Site Scripting (XSS)")}} and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. Code is executed by the victims and lets the attackers bypass access controls and impersonate users.
- [The X-Frame-Options response header](/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
  - : The `X-Frame-Options:` [HTTP](/en-US/docs/Web/HTTP) response header can be used to indicate whether a browser should be allowed to render a page in a {{ HTMLElement("frame") }}. Sites can use this to avoid [clickjacking](/en-US/docs/Glossary/Clickjacking) attacks, by ensuring that their content is not embedded into other sites.
- Access control by configuring a website
  - : It is the best way to secure your site. You can ignore specific IPs, restrict access to certain areas of website, protect different files, protect against image hotlinking, and a lot more. For example, .htaccess file is used for websites hosted on [Apache HTTP Server](https://httpd.apache.org/).

## User information security

- [How to turn off form autocompletion](/en-US/docs/Web/Security/Practical_implementation/Turning_off_form_autocompletion)
  - : Form fields support autocompletion in Gecko; that is, their values can be remembered and automatically brought back the next time the user visits your site. For certain types of data, you may wish to disable this feature.
- [Privacy and the :visited selector](/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : This article discusses changes made to the `getComputedStyle()` method that eliminates the ability for malicious sites to figure out the user's browsing history.
- [Hash passwords using a secure algorithm](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) (OWASP)
  - : Storing passwords in plain text can lead to attackers knowing and leaking the exact password of your site's users, potentially putting the users at risk. The same issues can arise if you use an old or insecure algorithm for hashing (such as md5). You should use a password-specific hashing algorithm (such as Argon2, PBKDF2, scrypt or bcrypt) instead of message digest algorithms (such as md5 and sha). This article showcases best practices to use when storing passwords.

## See also

- [Open Web Application Security Project (OWASP)](https://owasp.org/)
- [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
