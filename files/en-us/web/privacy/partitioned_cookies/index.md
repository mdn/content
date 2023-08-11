---
title: Cookies Having Independent Partitioned State (CHIPS)
slug: Web/Privacy/Partitioned_cookies
page-type: guide
status:
  - experimental
browser-compat: http.headers.Set-Cookie.Partitioned
---

{{QuicklinksWithSubPages("Web/Privacy")}}{{SeeCompatTable}}

**Cookies Having Independent Partitioned State** (**CHIPS**, also know as **Partitioned cookies**) allows developers to opt a cookie into partitioned storage, with a separate cookie jar per top-level site.

A partitioned third-party cookie is tied to the top-level site where it's initially set and cannot be accessed from elsewhere. The aim is to allow cookies to be set by third-party services, but only read within the context of the top-level site where they were initially set. This allows cross-site tracking to be blocked, while still enabling non-tracking uses of third-party cookies such as persisting state of embedded maps or chat widgets across different sites, and persisting config information for subresource CDN load balancing and Headless CMS providers.

## Cross-site tracking in a nutshell

Historically, when a site embeds content via an {{htmlelement("iframe")}}, the embedded content can set a cookie on the user's device in response to the cross-site request. If the user visits other sites that embed the same content, the embedded content can access the same cookie originally set by the first instance of the embedded content. This enables the content owner to track user activity across these sites, and any other sites that embed the same content.

For example:

1. A user visits `https://site-a.example`, which embeds content from `https://3rd-party.example`. `https://3rd-party.example` sets a cookie on the user's device.
2. The user visits `https://site-b.example`, which also embeds `https://3rd-party.example`. This new instance of `https://3rd-party.example` is still able to access the cookie set when the user was on the previous page.

This works because cookies are currently stored with a key based on the host or domain name of the site that set them, aka the **host key**. In the above case the cookie would be stored with a key of `("3rd-party.example")`.

User privacy is a foremost concern, so browsers are starting to restrict how this behavior can be used to track users, however there are still valid uses for third-party cookies, as described above. CHIPs enables these uses cases and more, while still allowing browsers to preserve user privacy.

## How does CHIPS work?

Browsers with CHIPs support provide a new attribute for the {{httpheader("Set-Cookie")}} HTTP header — `Partitioned` — which when set allows site owners to opt-in to using CHIPs:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> **Note:** Partitioned cookies must be set with `Secure` and `Path=/`. In addition, it is recommended to use the `__Host` prefix when setting partitioned cookies to make them bound to the hostname and not the registrable domain.

With `Partitioned` set, the cookie is stored using two keys, the host key and a new **partition key**. The partition key is based on the scheme and {{Glossary("eTLD", "eTLD+1")}} of the top-level URL the browser was visiting when the request was made to the URL endpoint that set the cookie.

Revisiting the example we described in the previous section:

1. A user visits `https://site-a.example`, which embeds content from `https://3rd-party.example`. `https://3rd-party.example` sets a cookie on the user's device using `Partitioned`, meaning that the site owner opts in to CHIPS.
2. The storage key for the cookie would now be `{("https://site-a.example"), ("3rd-party.example")}`.
3. When the user visits `https://site-b.example`, which also embeds `https://3rd-party.example`, this new embedded instance is no longer able to access the cookie because the partition key doesn't match.

> **Note:** CHIPS is similar to the older [State partitioning mechanism](/en-US/docs/Web/Privacy/State_Partitioning) implemented by Firefox. The difference is that state partitioning partitions cookie storage and retrieval into separate cookie jars for each top-level site, without a mechanism to allow opt-in to third-party cookies if desired. As browsers start to phase out third-party cookie usage, there are still valid, non-tracking uses of third-party cookies that need to be permitted while developers begin to handle this change.

## A valid third-party embed scenario

Blocking all third-party cookies would currently be problematic, for example in a retail site that uses a third-party chat service, as described below. CHIPs will enable this use case, while third-party tracking cookies are blocked.

1. A user visits `https://shoppy.example`, which embeds a third-party chat service from `https://3rd-party.example/chat` to provide support for users that need help. `https://3rd-party.example/chat` sets a cookie on the user's device using `Partitioned`, to persist the state of the chat across different site subdomains.
2. The storage key for the cookie would be `{("https://shoppy.example"), ("3rd-party.example/chat")}`.
3. The user visits various subdomains in the quest to solve their problem that also embed `https://3rd-party.example/chat`, including `https://support.shoppy.example` and `https://checkout.shoppy.example`. The new embedded instances are able to access the cookie because the partition key still matches.

> **Note:** [First-party sets](https://github.com/WICG/first-party-sets) is a proposal that aims to allow site owners to declare a collection of related domains that will act like they are a single top-level site, for the purposes of cookie access mechanisms like CHIPS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cookies Having Independent Partitioned State (CHIPS) on developer.chrome.com](https://developer.chrome.com/docs/privacy-sandbox/chips/)
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)
