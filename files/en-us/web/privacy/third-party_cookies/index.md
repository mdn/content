---
title: Third-party cookies
slug: Web/Privacy/Third-party_cookies
page-type: guide
---

{{QuicklinksWithSubPages("Web/Privacy")}}

A cookie is associated with a particular domain and scheme (such as `http` or `https`), and may also be associated with subdomains if the {{HTTPHeader("Set-Cookie")}} `Domain` attribute is set.
If the cookie domain and scheme match the current page, the cookie is considered to be from the same site as the page, and is referred to as a _first-party cookie_.

If the domain and scheme are different, the cookie is not considered to be from the same site, and is referred to as a _third-party cookie_.
While the server hosting a web page sets first-party cookies, the page may contain components stored on servers in other domains, such as images or other documents embedded in {{htmlelement("iframe")}}s. These components may set third-party cookies.

> **Note:** Third-party cookies are sometimes referred to as _cross-site cookies_. This is arguably a more accurate name, as _third-party cookies_ imply ownership by a third-party company or organization. However, the behavior and potential issues are the same whether or not you own all the involved sites.

Typical use cases for third-party cookies include sharing user profile information or collecting analytics across different related domains. They are also often used for advertising and tracking users across the web.

> **Note:** Companies should disclose the types of cookies they use on their sites for transparency purposes and to comply with [regulations](#cookie-related_regulations). For example, see [Google's notice on the types of cookies it uses](https://policies.google.com/technologies/types) and Mozilla's [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

A third-party server can create a profile of a user's browsing history and habits based on cookies sent to it by the same browser when accessing multiple sites.
Firefox, by default, blocks third-party cookies that are known to contain trackers.
Third-party cookies (or just tracking cookies) may also be blocked by other browser settings or extensions.
Cookie blocking can cause some third-party components (such as social media widgets) not to function as intended.

There are some useful features available for developers who wish to respect user privacy, and minimize third-party tracking:

- Servers can (and should) set the cookie [SameSite attribute](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) to specify whether or not third-party cookies may be sent.
- [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Partitioned_cookies) enables developers to opt-in their cookies to partitioned storage, with a separate cookie jar per top-level site. This enables valid non-tracking uses of third-party cookies to continue working in browsers that do not allow cookies to be used for third-party tracking.
