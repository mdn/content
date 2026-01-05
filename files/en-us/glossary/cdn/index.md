---
title: CDN
slug: Glossary/CDN
page-type: glossary-definition
sidebar: glossarysidebar
---

A **CDN** (Content Delivery Network) is a group of servers spread out over many locations. These servers store duplicate copies of data so that servers can fulfill data requests based on which servers are closest to the respective end-users. CDNs make for fast service less affected by high traffic.

CDNs are used widely for delivering stylesheets and JavaScript files (static assets) of libraries like Bootstrap, jQuery etc. Using CDN for those library files is preferable for a number of reasons:

- Serving libraries' static assets over CDN lowers the request burden on an organization's own servers.
- Most CDNs have servers all over the globe, so CDN servers may be geographically nearer to your users than your own servers. Geographical distance affects latency proportionally.
- CDNs are already configured with proper cache settings. Using a CDN saves further configuration for static assets on your own servers.

In fact, entire websites can be served from CDNs, particularly [static](/en-US/docs/Glossary/SSG) websites comprised entirely of static HTML, CSS, and JavaScript files.

There are also downsides to using CDNs, compared to self-hosting static assets:

- It introduces an additional dependency on a third-party service. If the CDN goes down, is blocked in a region, or is permanently shut down, your website will malfunction.
- It introduces an extra attack vector. Attackers can compromise the CDN and serve malicious content to your users. This necessitates countermeasures like [Subresource Integrity (SRI)](/en-US/docs/Web/Security/Practical_implementation_guides/SRI).
- Contrary to popular belief, CDN may actually _reduce_ performance. By establishing connection with a third-party website, the user's browser has to go through more rounds of DNS lookup, content negotiation, and so on. In addition, modern browsers do not share cache between different origins for the same resource for privacy reasons, so the user has to download the same asset (e.g., jQuery) multiple times on different websites anyway.

## See also

- [Self-host your static assets](https://csswizardry.com/2019/05/self-host-your-static-assets/) by Harry Roberts (2019)
