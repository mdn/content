---
title: Cookies Having Independent Partitioned State (CHIPS)
slug: Web/Privacy/Privacy_sandbox/Partitioned_cookies
page-type: guide
browser-compat: http.headers.Set-Cookie.Partitioned
---

**Cookies Having Independent Partitioned State** (**CHIPS**, also known as **Partitioned cookies**) allows developers to opt a cookie into partitioned storage, with a separate cookie jar per top-level site.

Without cookie partitioning, third-party cookies can enable services to track users and associate their information across unrelated top-level sites. Cookies marked `Partitioned` are double-keyed: by the origin that sets them _and_ the origin of the top-level page.

This means they can only be read within the context of the top-level site they were set on. This allows cross-site tracking to be blocked, while still enabling legitimate uses of third-party cookies such as persisting state of embedded maps or chat widgets across a domain and its subdomains, and persisting config information for subresource CDN load balancing and Headless CMS providers.

## How does CHIPS work?

To understand how CHIPS works, let's look at a brief example. Historically when a site embeds content via an {{htmlelement("iframe")}}, the embedded content has been able to set a cookie on the user's device in response to the cross-site request. If the user visits other sites that embed the same content, the embedded content can access the same cookie originally set by the first instance of the embedded content. This enables the content owner to track user activity across these sites, and any other sites that embed the same content.

For example:

1. A user visits `https://site-a.example`, which embeds content from `https://3rd-party.example`. `https://3rd-party.example` sets a cookie on the user's device.
2. The user visits `https://site-b.example`, which also embeds `https://3rd-party.example`. This new instance of `https://3rd-party.example` is still able to access the cookie set when the user was on the previous page.

This works because historically cookies have been stored with a key based on the host or domain name of the site that set them, aka the **host key**. In the above case the cookie would be stored with a key of `("3rd-party.example")`.

Browsers with CHIPS support provide a new attribute for the {{httpheader("Set-Cookie")}} HTTP header — `Partitioned` — which when set allows site owners to opt-in to using CHIPS:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitioned cookies must be set with `Secure`. In addition, you can use the `__Host` prefix when setting partitioned cookies to bind them only to the current domain or subdomain, and this is recommended if you don't need to share cookies between subdomains.

With `Partitioned` set, third-party cookies are stored using two keys, the host key and a new **partition key**. The partition key is based on the scheme and {{Glossary("eTLD", "eTLD+1")}} of the top-level URL the browser was visiting when the request was made to the URL endpoint that set the cookie.

Revisiting our example:

1. A user visits `https://site-a.example`, which embeds content from `https://3rd-party.example`. `https://3rd-party.example` sets a cookie on the user's device using `Partitioned`, meaning that the site owner opts in to CHIPS.
2. The storage key for the cookie would now be `{("https://site-a.example"), ("3rd-party.example")}`.
3. When the user visits `https://site-b.example`, which also embeds `https://3rd-party.example`, this new embedded instance is no longer able to access the cookie because the partition key doesn't match.

> [!NOTE]
> CHIPS is similar to the [state partitioning mechanism](/en-US/docs/Web/Privacy/State_Partitioning) implemented by Firefox. The difference is that state partitioning partitions cookie storage and retrieval into separate cookie jars for each top-level site, without a mechanism to allow opt-in to third-party cookies if desired. As browsers start to phase out third-party cookie usage, there are still valid, non-tracking uses of third-party cookies that need to be permitted while developers begin to handle this change.

## CHIPS and subdomains

CHIPS still allows third-party content embedded across different subdomains of a site to access third-party cookies set by that content. Let's look at a retail site example that uses a third-party chat service:

1. A user visits `https://shoppy.example`, which embeds a third-party chat service from `https://3rd-party.example/chat` to provide support for users that need help. `https://3rd-party.example/chat` sets a cookie on the user's device using `Partitioned`, to persist the state of the chat across different site subdomains.
2. The storage key for the cookie would be `{("https://shoppy.example"), ("3rd-party.example/chat")}`.
3. The user visits various subdomains that also embed `https://3rd-party.example/chat`, including `https://support.shoppy.example` and `https://checkout.shoppy.example`. The new embedded instances are able to access the cookie because the partition key still matches.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cookies Having Independent Partitioned State (CHIPS)](https://developers.google.com/privacy-sandbox/cookies/chips) on developers.google.com
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Privacy", "2", "0", "0")}}
</section>
