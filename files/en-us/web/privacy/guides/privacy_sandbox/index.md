---
title: Privacy sandbox
slug: Web/Privacy/Guides/Privacy_sandbox
page-type: guide
sidebar: privacy
---

Google's **privacy sandbox** project is a series of proposals to satisfy cross-site use cases without requiring third-party cookies or other tracking mechanisms, preparing for a future web in which third-party cookies have been removed. Themes include identity and tracking protection, more privacy-respecting ad solutions, preventing covert tracking, and safely sharing data across browsing contexts.

> [!WARNING]
> Some of these features are currently opposed by one or more browser vendors.
> See specific API entry points for more details.

> [!NOTE]
> Google Chrome deprecated some of Privacy Sandbox features and suspended enrollment of new organizations into Privacy Sandbox console. Some Privacy Sandbox features require enrollment. See [enrollment](#enrollment) section for details.

## Privacy sandbox features

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
  - : Enables developers to measure conversions — for example when a user clicks an ad embedded on one site and then proceeds to purchase the item over on the vendor's site — and then access reports on those conversions. It does this without relying on third-party tracking cookies.
- [Bounce tracking mitigations](/en-US/docs/Web/Privacy/Guides/Bounce_tracking_mitigations)
  - : Bounce tracking mitigations protect users against bounce tracking by identifying tracker sites via a heuristic and periodically deleting cookies and other state data associated with them.
- [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies)
  - : Also known as **partitioned cookies**, CHIPS allows developers to opt a cookie into partitioned storage, with a separate cookie jar per top-level site.
- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
  - : Provides functionality for controlling content embedded in {{htmlelement("fencedframe")}} elements, which enable content to be embedded while solving the privacy issues of {{htmlelement("iframe")}}s.
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
  - : Provides a mechanism for conveying trust in a user's authenticity from one browsing context to another, without sharing the user's identity or allowing their activity across websites to be tracked.
- [Related website sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) {{deprecated_inline}}
  - : A mechanism for a company to declare relationships between different sites. Supporting browsers will then allow limited third-party cookie access across those sites for specific purposes, via the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
  - : A client-side storage mechanism that enables unpartitioned, cross-site data access while preserving privacy (i.e., without relying on tracking cookies).
- [Topics API](/en-US/docs/Web/API/Topics_API) {{deprecated_inline}}
  - : Provides a mechanism for developers to implement use cases such as **interest-based advertising (IBA)** based on topics collected by the browser as the user navigates different pages, rather than collected by the developer by tracking the user's journey around different sites with third-party cookies.

## Enrollment

Google deprecated some Privacy Sandbox features and suspended enrollment of new websites and organizations into Privacy Sandbox Console.

### Features requiring enrollment

The following features require enrollment to be usable:

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- Protected Audience API {{deprecated_inline}}
- Private Aggregation API {{deprecated_inline}}
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [Topics API](/en-US/docs/Web/API/Topics_API) {{deprecated_inline}}

The documentation of each feature includes more details on exactly which sub-features will fail if enrollment is not completed, and how.

## See also

- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com
