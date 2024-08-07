---
title: Privacy sandbox
slug: Web/Privacy/Privacy_sandbox
page-type: guide
---

Google's **privacy sandbox** project is a series of proposals to satisfy cross-site use cases without requiring third-party cookies or other tracking mechanisms, preparing for a future web in which third-party cookies have been removed. Themes include identity and tracking protection, more privacy-respecting ad solutions, preventing covert tracking, and safely sharing data across browsing contexts.

## Privacy sandbox features

- [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API)
  - : Enables developers to measure conversions — for example when a user clicks an ad embedded on one site and then proceeds to purchase the item over on the vendor's site — and then access reports on those conversions. It does this without relying on third-party tracking cookies.
- [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)
  - : Also known as **partitioned cookies**, CHIPs allows developers to opt a cookie into partitioned storage, with a separate cookie jar per top-level site.
- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
  - : Provides functionality for controlling content embedded in {{htmlelement("fencedframe")}} elements, which enable content to be embedded while solving the privacy issues of {{htmlelement("iframe")}}s.
- [Related website sets](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets)
  - : A mechanism for a company to declare relationships between different sites. Supporting browsers will then allow limited third-party cookie access across those sites for specific purposes, via the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
  - : A client-side storage mechanism that enables unpartitioned, cross-site data access while preserving privacy (i.e. without relying on tracking cookies).
- [Topics API](/en-US/docs/Web/API/Topics_API)
  - : Provides a mechanism for developers to implement use cases such as **interest-based advertising (IBA)** based on topics collected by the browser as the user navigates different pages, rather than collected by the developer by tracking the user's journey around different sites with third-party cookies.

## Other topics

- [Privacy sandbox enrollment](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment)
  - : To access certain privacy sandbox features, developers must complete an **enrollment** process.

## See also

- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Privacy", "2", "0", "0")}}
</section>
