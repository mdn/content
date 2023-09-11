---
title: Redirect tracking protection
slug: Web/Privacy/Redirect_tracking_protection
page-type: guide
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Firefox 79 includes protection against redirect tracking. This document describes how the protections work.

## Redirect tracking defined

**Redirect tracking** is an abuse of cross-site navigation in which a tracker momentarily redirects a user to their website for the purpose of using first-party storage to track that user across websites.

Cross-site navigations are a core feature of the web; a person might search for "best running shoes" on a search engine, click a search result to read reviews, and finally click a link to buy a pair of shoes from an online store. In the past, each of these websites could embed resources from the same tracker, and the tracker could use its cookies to link all of these page visits to the same person. To protect the privacy of Firefox users, [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP) already blocks trackers from using cookies when they are embedded in a third-party context, but still allows them to use cookies as a first party because blocking first party cookies causes websites to break. Redirect tracking takes advantage of this to circumvent third-party cookie blocking.

Redirect trackers work by forcing you to make an imperceptible and momentary stopover to their website as part of that journey. So instead of navigating directly from the review website to the retailer, you'll end up navigating to the redirect tracker first rather than to the retailer. This means that the tracker is loaded as a first party. The redirect tracker associates tracking data with the identifiers they have stored in their first-party cookies and then forwards you to the retailer.

## Redirect tracking protection explained

To protect against redirect tracking Firefox periodically clears cookies and site data from trackers. We only clear this data from storage if the user is [blocking tracking cookies](/en-US/docs/Web/Privacy/Storage_Access_Policy) (i.e., the `network.cookie.cookieBehavior` pref is set to `4`). Support for other cookie policies is tracked by [Bug 1643045](https://bugzil.la/1643045).

### What origins are cleared?

An origin will be cleared if it fulfills the following conditions:

1. It has stored cookies or accessed other site storage (e.g. [localStorage](/en-US/docs/Web/API/Web_Storage_API), [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), or the [Cache API](/en-US/docs/Web/API/CacheStorage)) within the last 72 hours. Since cookies are per-host, we will clear both the `http` and `https` origin variants of a cookie host.
2. The origin is [classified as a tracker](/en-US/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained) in our Tracking Protection list.
3. No origin with the same base domain ({{Glossary("eTLD", "eTLD+1")}}) has a user-interaction permission.

   - This permission is granted to an origin for 45 days once a user interacts with a top-level document from that origin. "Interacting" includes scrolling.
   - Although this permission is stored on a per-origin level, we will check whether any origin with the same base domain has it, to avoid breaking sites with subdomains and a corresponding cookie setup.

### What data is cleared?

Firefox will clear the [following data](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Network cache and image cache
- Cookies
- AppCache
- DOM Quota Storage (localStorage, IndexedDB, ServiceWorkers, DOM Cache, etc.)
- DOM Push notifications
- Reporting API Reports
- Security Settings (i.e. HSTS)
- EME Media Plugin Data
- Plugin Data (e.g. Flash)
- Media Devices
- Storage Access permissions granted to the origin
- HTTP Authentication Tokens
- HTTP Authentication Cache

> **Note:** Even though we're clearing all of this data, we currently only flag origins for clearing when they use cookies or other site storage.

Storage clearing ignores origin attributes. This means that storage will be cleared across [containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) and isolated storage (i.e. from [First-Party Isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)).

### How frequently is data cleared?

Firefox clears storage based on the firing of an internal event called `idle-daily`, which is defined by the following conditions:

- It will, at the earliest, fire 24h after the last `idle-daily` event fired.
- It will only fire if the user has been idle for at least 3min (for 24-48h after the last `idle-daily`) or 1min (for >48h after the last `idle-daily`).

This means that there are at least 24 hours between each storage clearance, and storage will only be cleared when the browser is idle. When clearing cookies, we sort cookies by creation date and batch them into sets of 100 (controlled by the pref `privacy.purge_trackers.max_purge_count`) for performance reasons.

## Debugging

Redirect tracking protection can be enabled or disabled by flipping the `privacy.purge_trackers.enabled` preference in `about:config`. Furthermore, it will only run if the `network.cookie.cookieBehavior` pref is set to `4` or `5` in Firefox 79+ onwards (`1`, `3`, `4`, or `5` as of Firefox 80).

Different log levels can be set via the `privacy.purge_trackers.logging.level` pref.

For debugging purposes, it's easiest to trigger storage clearing by triggering the service directly via the [Browser Console command line](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line). Note that this is different from the normal [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) you might use to debug a website, and requires the `devtools.chrome.enabled` pref to be set to `true` to use it interactively. Once you've enabled the Browser Console you can trigger storage clearing by running the following command:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

The time until user interaction permissions expire can be set to a lower amount using the `privacy.userInteraction.expiration` pref. Note that you will have to set this pref before visiting the sites you want to test — it will not apply retroactively.

## Other implementations

WebKit first shipped redirect tracking protection in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) (they refer to the same attack as bounce tracking). As of July 2020, there are several significant differences between WebKit's implementation and Firefox's implementation:

- The list of origins to be cleared in Firefox is based on our [tracking protection list](/en-US/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained); WebKit relies on ITP's classification.
- Firefox's definition of "interaction" includes user scrolling when visiting the origin as a first party; WebKit's does not.
- Firefox will not clear data for an origin if it has received interaction as a first party in the last 45 days of calendar time; WebKit's interaction window is 30 days of browser use (e.g. days in which the user has had at least one interaction with Safari).
