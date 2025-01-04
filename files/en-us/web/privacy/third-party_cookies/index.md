---
title: Third-party cookies
slug: Web/Privacy/Third-party_cookies
page-type: guide
---

{{QuicklinksWithSubPages("Web/Privacy")}}

This article explains what third-party cookies are, describes the issues associated with them, and explains how you can work around those issues.

## What are third-party cookies?

A [cookie](/en-US/docs/Web/HTTP/Cookies) is associated with a particular domain and scheme (usually `https`), and may also be associated with subdomains if the {{HTTPHeader("Set-Cookie")}} `Domain` attribute is set.

- If the cookie domain and scheme match the current page the user is looking at (the URL shown in the browser's address bar), the cookie is considered to be from the same site as the page, and is referred to as a _first-party cookie_.
- If the domain and scheme are different, the cookie is not considered to be from the same site, and is referred to as a _third-party cookie_.

> [!NOTE]
> Third-party cookies are sometimes referred to as _cross-site cookies_. This is arguably a more accurate name, as _third-party cookies_ imply ownership by a third-party company or organization. However, the behavior and potential issues are the same whether or not you own all the involved sites. For example, a site might access resources such as images from a different domain that they own.

A first-party cookie may be set when a user first visits a page, follows an internal link to another page on the same site, or requests a resource residing on the same site (for example, an embedded image, web font, or JavaScript file).

Third-party cookies are sent in the following common situations:

- When a link is clicked on one site to navigate to another site.
- When a page embeds components from other sites, such as images or other documents embedded in {{htmlelement("iframe")}}s (often referred to as _third-party content_). As well as the original request for the component, these components may generate further requests that set more third-party cookies.

## What are third-party cookies used for?

Third-party cookies set when clicking on links to other sites are used for a variety of purposes. For example, you might have an affiliate link to a partner site and set a cookie when the user follows the link so that a reward banner can be displayed with a discount if a certain product is purchased or a commission can be paid back to the referrer.

Third-party content that sets cookies also has many different uses. For example, you might have a sign-in widget embedded on multiple different-but-related sites, which shares a cookie across all sites confirming that the user is signed in, so they don't have to sign in again on each site.

Other use cases for third-party cookies include:

- Sharing user preference or theme information across multiple sites.
- Collecting analytics across multiple sites.
- Counting ad impressions, and recording user interests to enable ad-tech platforms to serve more relevant ads.

Let's further illustrate the sign-in widget example mentioned above with a fictional company, which has separate domains for its online shop (`shop.site`), community discussion forums (`forum.site`), and customer service and returns (`service.site`).

Each of the three sites has an embedded sign-in widget, hosted at `auth.site`, to persist sign-in status across sites. A user can sign in to any of those sites, creating a cookie set on the browser for `auth.site` containing a session ID. When the user goes to one of the other sites, the embedded `auth.site` instance will have access to the session ID cookie set when the user signs in on the first site. It can send that to the server, check it is still valid, and sign in to that site immediately.

![visual representation of the above third-party sign-in system description](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## What is the problem with third-party cookies?

The above use cases sound innocent enough. However, third-party cookies can also be used for illegitimate purposes without the user's consent, which are technically undistinguishable from valid use cases.

Following a link to a third-party or interacting with third-party content embedded in an `<iframe>` (for example, filling out a form or clicking a button) could result in cookies being set that put a user's information in the hands of someone they didn't expect. This information could be used to:

- Chase users around the web with targeted ads whenever they search for information on a specific product.
- Target users with spam emails or phone calls.
- Manipulate their behavior to choose certain options that increase affiliate revenue or manipulate statistics.

Individually, such cases are bad enough, but it gets worse. Third-party servers can combine information from multiple third-party cookies set across different sites where the third-party content is embedded to create a detailed profile of a user's browsing history, interests, habits, and personal information. This can be used to create creepy, invasive user experiences, defraud users, or even commit identity theft.

In such cases, third-party cookies are referred to as _tracking cookies_.

> [!NOTE]
> User information gained through illegitimate means is also often sold to other third parties, multiplying the problem further.

Legislation such as the [General Data Privacy Regulation](https://gdpr.eu/) (GDPR) in the European Union and the [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) have helped by making it a legal requirement for companies to be transparent about the cookies they set and the information they collect. Examples include asking customers to opt into such data collection, allowing them to see what data a company holds on them, and delete the data if they wish. However, it is still not always clear to customers how their data is used.

## How do browsers handle third-party cookies?

Browser vendors know that users don't like the behavior described above, and as a result have all started to block third-party cookies by default, while also including exceptions and heuristics in their source code to work around long-standing third-party cookie issues with popular websites.

- Mozilla's [Anti-tracking policy](https://wiki.mozilla.org/Security/Anti_tracking_policy) has led to Firefox blocking third-party cookies from known trackers by default (see [Firefox tracking protection](/en-US/docs/Web/Privacy/Firefox_tracking_protection) and [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Enhanced Tracking Protection can be set to Standard, Strict, or Custom. [Standard mode](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) enables [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), which gives third-party cookies a separate cookie jar per site, thereby preventing cross-site tracking. In [Strict mode](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection), Firefox blocks all third-party cookies.
- Apple also has a similar [Tracking prevention policy](https://webkit.org/tracking-prevention-policy/); following this has led to a similar set of third-party cookie protections that are enabled by default; see [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) for details.
- At the time of writing, Google Chrome only blocks third-party cookies in Incognito mode by default, although users can set it to block third-party cookies all the time if they wish via `chrome://settings`. Google has started to disable third-party cookies for a limited percentage of Chrome users to test the impact that will have, while at the same time developing technologies to enable key use cases without requiring third-party cookies. See [Replacing third-party cookies](#replacing_third-party_cookies) for details.
- Edge blocks trackers from unvisited sites, and blocks known harmful trackers by default. At the time of writing Microsoft are also starting to explore blocking third-party cookies in Edge by default. See [Tracking prevention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) for more information.
- The [Brave browser](https://brave.com/) blocks tracking cookies by default.

It is possible to allow usage of third-party cookies on a case-by-case basis in Firefox via browser settings. In Safari however, control is more limited — you can turn off cross-site tracking prevention, but allowing access to third-party cookies per frame can only be done at the code level, via the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Third-party cookies (or just tracking cookies) may also be blocked by browser extensions.

Cookie blocking can cause some third-party components (such as social media widgets) not to function as intended. As browsers impose further restrictions on third-party cookies, developers should start to look at ways to reduce their reliance on them: see [Replacing third-party cookies](#replacing_third-party_cookies).

## Using third-party cookies

### Enabling third-party cookies with `SameSite`

The [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) attribute lets servers specify whether/when third-party cookies are sent. If you don't specify `SameSite` in your `Set-Cookie` headers, the default value, `Lax`, is used. This instructs the browser to not send third-party cookies except when the user navigates to the cookie's origin site from a different site. This is useful when you want to send cookies straight away as soon as a user navigates to your site from another site, to for example personalize the experience as soon as they get there.

However, it is no good if you want to embed cross-site content across multiple sites inside `<iframe>`s and rely on third-party cookies for functionality, for example in the case of the sign-in example we looked at above. In such cases, you need to explicitly set `SameSite=None` to allow the browser to pass those cookies around:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Note that if `SameSite=None` is set then the `Secure` attribute must also be set — `SameSite=None` requires a _secure context_. In the above example we have also set the `HttpOnly` attribute, to disable JavaScript access to the cookie (e.g. via {{domxref("Document.cookie")}}). Cookies that persist sensitive information should always have the `HttpOnly` attribute set — it would be really insecure to make them available to JavaScript. This precaution helps mitigate cross-site scripting ([XSS](/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) attacks.

> [!NOTE]
> Cookies that are used for sensitive information should also have a short [lifetime](/en-US/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie).

### Transitioning from third-party cookies

There are multiple strategies to help sites minimize breakage in browsers where third-party cookies are blocked:

1. Audit your third-party cookie usage. Cookies must have the `SameSite=None` attribute set to be used in a cross-site context. You can therefore identify third-party cookies by searching for `SameSite=None` in your code, or checking for stored `SameSite=None` cookies in your browser DevTools, for example in the [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chrome's [Issues panel](https://developer.chrome.com/docs/devtools/issues/) also [reports issues with third-party cookie blocking](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) along with a list of affected cookies.
2. Test your functionality with third-party cookies blocked, to see what breaks. You might find that some cookies are no longer needed.
3. Initially, at least, you could make your code more resilient so that it provides a less personalized experience when third-party cookie data is not available rather than breaking it altogether. Follow the principles of [graceful degradation](/en-US/docs/Glossary/Graceful_degradation).
4. Gather data via alternative means such as user surveys or quizzes, or look at data you already have to infer trends (for example, product order histories).
5. Use an alternative client-side storage mechanism such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API) to persist data, or consider a server-side solution.
6. If your third-party cookies are only used across a small number of related, known websites, you could use the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) and/or [Related Website Sets](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) to allow cross-site cookie access only for those specific sites. Storage Access prompts the user to provide permission for a site to use third-party cookies on a per-frame basis.
   - If you've already implemented a solution using the Storage Access API for Firefox or Safari then this is a good time to check your implementation against Chrome's behavior, which was updated to provide full support in version 119.
   - Related Website Sets can be considered a progressive enhancement of the Storage Access API: The API can be used in just the same way, but sites in the set will not prompt users for permission to access third-party cookies.
7. If your third-party cookies are being used on a 1:1 basis with the top-level sites they are generated on, you could use [Cookies Having Independent Partitioned State](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, aka partitioned cookies), to opt your cookies into partitioned storage with a separate cookie jar per top-level site. This only requires adding the `partitioned` attribute to your existing cross-site cookies. They can then be used unrestrictedly, but they can't be shared with other sites. Note that CHIPS is currently Chromium-only.

## Replacing third-party cookies

Several features are available to developers who wish to stop using third-party cookies to respect user privacy and minimize tracking while continuing to implement related use cases. Some of these features are in an early experimental stage, but they are worth considering as you begin to prepare for the future.

You can start to explore the different features available in Google's [Privacy Sandbox](/en-US/docs/Web/Privacy/Privacy_sandbox) project to see if they fit your use case (these are currently experimental, and Chromium-only):

- [Federated Credential Management](/en-US/docs/Web/API/FedCM_API) (FedCM) API: Enables federated identity services allowing users to sign in to multiple sites and services.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Enables anti-fraud and anti-spam by exchanging limited, non-identifying information across sites.
- [Topics API](/en-US/docs/Web/API/Topics_API): Enables interest-based advertising and content personalization.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Use data from one app or site to help select an ad when the user is visiting another app or site.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Enables measurement of ad impressions and conversions.

## See also

- [HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
- [Privacy on the web](/en-US/docs/Web/Privacy)
