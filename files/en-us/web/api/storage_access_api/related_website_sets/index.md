---
title: Related Website Sets
slug: Web/API/Storage_Access_API/Related_website_sets
page-type: guide
status:
  - non-standard
spec-urls: https://wicg.github.io/first-party-sets/
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> This feature is currently opposed by two browser vendors. See the [Standards positions](#standards_positions) section below for details of opposition.

Related website sets are a mechanism for defining a set of related sites that share trusted content. As a result, browsers can grant default access for these sites to [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and [unpartitioned state](/en-US/docs/Web/Privacy/State_Partitioning#state_partitioning) when they have content embedded in other set members, without requiring users to grant access to the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) via a permission prompt.

## Concepts and usage

Let's consider situations where you have a series of related websites with different domain names, and you want to give site content access to third-party cookies and unpartitioned state when loaded in a third-party context inside other related sites (i.e., embedded in an {{htmlelement("iframe")}}). Typical use cases are:

- App sites: A single application may be deployed over multiple sites, aiming to allow users to navigate between them seamlessly in a single session.
- Brand sites: A set of brand assets may be contained in a single site but then deployed over multiple domains, including session data relating to user preferences, customization, etc.

Third-party cookie and unpartitioned state access is commonly blocked by browser policies. Still, you can work around it using the Storage Access API — see [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for details.

Related website are a progressive enhancement mechanism that works alongside the Storage Access API. Supporting browsers grant third-party cookie and unpartitioned state access between websites in the same set _without_ having to go through the usual user permission prompt workflow, once {{domxref("Document.requestStorageAccess()")}} (or {{domxref("Document.requestStorageAccessFor()")}}) is called. This results in a more user-friendly experience for users of sites in the set.

You should bear in mind that:

- The Chrome-only {{domxref("Document.requestStorageAccessFor()")}} method — which allows top-level sites to request storage access on behalf of embedded origin content — is only supported on domains within a related website set. See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an example.
- When Chrome first supported the standard Storage Access API (that is, the {{domxref("Document.hasStorageAccess()")}} and {{domxref("Document.requestStorageAccess()")}} methods), it required calling sites to be part of a related website set. This is no longer the case.

## How does RWS work?

A related website set consists of one primary site and up to five associated sites.

### JSON structure

A set is represented by a JSON structure. A hypothetical example is as follows:

```json
{
  "sets": [
    {
      "contact": "email address or group alias if available",
      "primary": "https://primary1.com",
      "associatedSites": [
        "https://associateA.com",
        "https://associateB.com",
        "https://associateC.com"
      ],
      "serviceSites": ["https://servicesiteA.com"],
      "rationaleBySite": {
        "https://associateA.com": "Explanation of affiliation with primary site",
        "https://associateB.com": "Explanation of affiliation with primary site",
        "https://associateC.com": "Explanation of affiliation with primary site",
        "https://serviceSiteA.com": "Explanation of service functionality support"
      },
      "ccTLDs": {
        "https://associateA.com": [
          "https://associateA.ca",
          "https://associateA.co.uk"
        ],
        "https://associateB.com": [
          "https://associateB.ru",
          "https://associateB.co.kr"
        ],
        "https://primary1.com": ["https://primary1.co.uk"]
      }
    }
  ]
}
```

> [!NOTE]
> The affiliation explanations must include a clear description of how the affiliation to the primary site is presented to users of those sites.

To use a set, its JSON must be added to the `related_website_sets.JSON` file available on the [Related Website Sets GitHub repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON), which Chrome then consumes to get the list of sets to apply RWS behavior to.

### `.well-known` files

Each site in the set must also serve a [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) file at `/.well-known/related-website-set.json`, which serves to verify the set structure and the relationship between the sites in the set.

The primary site's `.well-known` file must explicitly list out the full set structure. `https://primary1.com` in the above example would need a `https://primary1.com/.well-known/related-website-set.json` file similar to the following:

```json
{
  "primary": "https://primary1.com",
  "associatedSites": [
    "https://associateA.com",
    "https://associateB.com",
    "https://associateC.com"
  ],
  "serviceSites": ["https://servicesiteA.com"],
  "rationaleBySite": {
    "https://associateA.com": "Explanation of affiliation with primary site",
    "https://associateB.com": "Explanation of affiliation with primary site",
    "https://associateC.com": "Explanation of affiliation with primary site",
    "https://serviceSiteA.com": "Explanation of service functionality support"
  },
  "ccTLDs": {
    "https://associateA.com": [
      "https://associateA.ca",
      "https://associateA.co.uk"
    ],
    "https://associateB.com": [
      "https://associateB.ru",
      "https://associateB.co.kr"
    ],
    "https://primary1.com": ["https://primary1.co.uk"]
  }
}
```

Each associate and service site needs to specify its primary site in a `.well-known` file. Each non-primary site in the above example (e.g. `https://associateA.com`) would need a `/.well-known/related-website-set.json` file like this:

```json
{
  "primary": "https://primary1.com"
}
```

For full details of the process, JSON syntax, and other requirements for submitting sets, see the [submission guidelines](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Only domain administrators can create a set containing their sites.

Bear in mind that the `.well-known` files are also verified as part of the submission process, so they need to be put in place before the associated set is submitted.

### Active set benefits

Once a set is active:

- Requests from sites in the set (via {{domxref("Document.requestStorageAccess()")}}) to access third-party cookies and unpartitioned state that belong to sites in the set are automatically granted, and no user permission step is required.
- {{domxref("Document.requestStorageAccessFor()")}} calls can be made from top-level sites in the set to request third-party cookie access for other sites in the set.

## RWS security

RWS has been designed with security in mind. It would be disastrous if a bad actor site were able to claim to be part of a set and gain the privileges that entails. Lets consider a theoretical bad actor site, `evilsite.example.com`, and look at some examples of attacks it could try to make, all of which would fail:

- **`evilsite.example.com` claims to be an associated site in another set**: If a site claiming to be in a set (`i.e.` by listing a primary in a `.well-known` file) is not included in the set submission and/or primary's `.well-known` file, it won't get the benefits of being in the set.
- **`evilsite.example.com` claims to be a primary site, and submits a set that includes some would-be victim sites**: The submission process requires that `.well-known` files hosted by non-primary sites explicitly list out their primary. If this primary doesn't match the set submission (i.e. if the associated/service sites expect to have a different primary, or don't expect to be in a set at all), the submission will be rejected.
- **`site1.example.com` and `site2.example.com` are intentionally in the same set, but `site1.example.com` gets hijacked by `evilsite.example.com`**: The impact of a site hijacking attack within a set isn't any worse than it would usually be, once the other sites are updated accordingly:
  - The regular [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) requires an active opt-in by the embedded site, so `site2.example.com` can stop calling `document.requestStorageAccess()` when it's embedded in `site1.example.com`, avoiding a {{glossary("CSRF")}} attack.
  - Use of `requestStorageAccessFor()` requires [CORS](/en-US/docs/Web/HTTP/CORS), so `site2.example.com` could choose not to respond with the appropriate CORS headers when network requests are coming from `site1.example.com`, thereby avoiding a CSRF attack.

## Examples

- The [Related Website Sets demo](https://related-website-sets.glitch.me/) demonstrates how RWS is used.
- Also see [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using).

## Specifications

{{Specifications}}

### Standards positions

Two browser vendors [oppose](/en-US/docs/Glossary/Web_standards#opposing_standards) this specification. Known positions are as follows:

- Mozilla (Firefox): [Negative](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negative](https://webkit.org/standards-positions/#position-93)

## See also

- [Storage Access API](/en-US/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) on developers.google.com (2023)
- [Related Website Sets: developer guide](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) on developers.google.com (2023)
