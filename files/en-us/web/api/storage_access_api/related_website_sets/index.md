---
title: Related Website Sets
slug: Web/API/Storage_Access_API/Related_website_sets
page-type: guide
status:
  - non-standard
browser-compat: api.document.requestStorageAccessFor
spec-urls: https://wicg.github.io/first-party-sets/
---

{{DefaultAPISidebar("Storage Access API")}}

> **Warning:** One or more browser vendors oppose this feature — in its current state, it will never be implemented across all browsers. See [Standards positions](#standards_positions) for details of opposition.

Related website sets is a mechanism for defining a set of related sites that share trusted content. As a result, browsers will grant default access for these sites to [third-party cookies](/en-US/docs/Web/HTTP/Cookies#third-party_cookies) in situations where they have content embedded in other members of the set.

## Concepts and usage

Let's consider situations where you have a series of related websites with different domain names, and you want to give site content access to third-party cookies when loaded in a third-party context inside other related sites (i.e. embedded in an {{htmlelement("iframe")}}). Typical use cases are:

- App domains: A single application may be deployed over multiple domains, and the aim is to allow users to seamlessly navigate between them in a single session.
- Brand domains: A set of brand assets may be contained in a single domain, but then deployed over multiple domains, including session data relating to user preferences, customization, etc.

Third-party cookie access is increasingly commonly blocked by browser cookie blocking policies, but you can work around it using the Storage Access API — see [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for details.

Related website sets can be considered a progressive enhancement mechanism that works alongside the Storage Access API. Supporting browsers grant third-party cookie access between websites in the same set **without** having to go through the usual user permission prompt workflow, once {{domxref("Document.requestStorageAccess()")}} (or {{domxref("Document.requestStorageAccessFor()")}}) is called. This results in a more user-friendly experience for users of sites in the set.

You should bear in mind that:

- The Chrome-only {{domxref("Document.requestStorageAccessFor()")}} method — which allows top-level sites to request storage access on behalf of embedded origin content — is only supported on domains within a related website set. See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an example.
- When Chrome first supported the standard Storage Access API (i.e. {{domxref("Document.hasStorageAccess()")}} and {{domxref("Document.requestStorageAccess()")}}), it required calling sites to be part of a related website set, however this is no longer the case.

## How does RWS work?

A related website set consists of one primary domain and up to five associated domains, which are represented in a JSON structure. A hypothetical example is as follows:

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
        "https://serviceSiteA.com": "Explanation of service functionality support."
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

> **Note:** The affiliation explanations must include a clear description of how the affiliation to the primary site is presented to users of those sites.

To use a set, it must be added to the `related_website_sets.JSON` file available on the [Related Website Sets GitHub repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON), which Chrome then consumes to get the list of sets to apply RWS behavior to.

For full details of the process, JSON syntax, and other requirements for submitting sets, see the [submission guidelines](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Only domain administrators can create a set containing that domain.

Once a set is active:

- Requests from sites in the set (via {{domxref("Document.requestStorageAccess()")}}) to access third party cookies that belong to sites in the set are automatically granted, and no user permission step is required.
- {{domxref("Document.requestStorageAccessFor()")}} calls can be made from top-level sites in the set to request third party cookie access for other sites in the set.

## Examples

- The [Related Website Sets demo](https://related-website-sets.glitch.me/) demonstrates how RWS is used.
- Also see [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using).

## Specifications

{{Specifications}}

### Standards positions

One or more vendors oppose this specification. Known positions are as follows:

- Mozilla (Firefox): [Negative](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negative](https://webkit.org/standards-positions/#position-93)

## See also

- [Storage Access API](/en-US/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developer.chrome.com/docs/privacy-sandbox/related-website-sets/) on developer.chrome.com (2023)
- [Related Website Sets: developer guide](https://developer.chrome.com/docs/privacy-sandbox/related-website-sets-integration/) on developer.chrome.com (2023)
