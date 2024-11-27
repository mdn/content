---
title: Storage quotas and eviction criteria
slug: Web/API/Storage_API/Storage_quotas_and_eviction_criteria
page-type: guide
---

{{DefaultAPISidebar("Storage")}}

Web developers can use a number of technologies to store data in the user's browser (i.e., on the local disk of the device the user is using to view the website).

The amount of data browsers allow websites to store and the mechanisms they use to delete data when that limit is reached differs between browsers.

This article describes the web technologies that can be used to store data, the quotas that browsers have in place to limit websites from storing too much data, and the mechanisms they use to delete data when needed.

## How do browsers separate data from different websites?

Browsers store the data from websites in different places, also called buckets, to reduce the risk of users being tracked across the web. In most cases, browsers manage stored data _per origin_.

The term _{{Glossary("origin")}}_ is therefore important to understand this article. An origin is defined by a scheme (such as HTTPS), a hostname, and a port. For example, `https://example.com` and `https://example.com/app/index.html` belong to the same origin because they have the same scheme (`https`), hostname (`example.com`), and default port.

The quotas and eviction criteria described in this article apply to an entire origin, even if this origin is used to run several websites, such as `https://example.com/site1/` and `https://example.com/site2/`.

In some cases, however, browsers can decide to further separate the data stored by an origin in different partitions, for example in cases where an origin is loaded within an {{HTMLElement('iframe')}} element in multiple different third-party origins. However, for simplicity reasons, this article assumes that data is always stored per origin.

## What technologies store data in the browser?

Web developers can use the following web technologies to store data in the browser:

| Technology                                                                                          | Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Cookies](/en-US/docs/Web/HTTP/Cookies)                                                             | An HTTP cookie is a small piece of data that the web server and browser send each other to remember stateful information across page navigation.                                                                                  |
| [Web Storage](/en-US/docs/Web/API/Web_Storage_API)                                                  | The Web Storage API provides mechanisms for webpages to store string-only key/value pairs, including [`localStorage`](/en-US/docs/Web/API/Window/localStorage) and [`sessionStorage`](/en-US/docs/Web/API/Window/sessionStorage). |
| [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)                                                      | IndexedDB is a Web API for storing large data structures in the browser and indexing them for high-performance searching.                                                                                                         |
| [Cache API](/en-US/docs/Web/API/Cache)                                                              | The Cache API provides a persistent storage mechanism for HTTP request and response object pairs that's used to make webpages load faster.                                                                                        |
| [Origin Private File System (OPFS)](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) | OPFS provides a file system that's private to the origin of the page and can be used to read and write directories and files.                                                                                                     |

Note that, in addition to the above, browsers will store other types of data in the browser for an origin, such as [WebAssembly](/en-US/docs/WebAssembly) code caching.

## Does browser-stored data persist?

Data for an origin can be stored in two ways in a browser, _persistent_ and _best-effort_:

- Best-effort: this is the way that data is stored by default. Best-effort data persists as long as the origin is below its quota, the device has enough storage space, and the user doesn't choose to delete the data via their browser's settings.
- Persistent: an origin can opt-in to store its data in a persistent way. Data stored this way is only evicted, or deleted, if the user chooses to, by using their browser's settings. To learn more, see [When is data evicted](#when_is_data_evicted).

The data stored in the browser by an origin is best-effort by default. When using web technologies such as IndexedDB or Cache, the data is stored transparently without asking for the user's permission. Similarly, when the browser needs to evict best-effort data, it does so without interrupting the user.

If, for any reason, developers need persistent storage (e.g., when building a web app that relies on critical data that isn't persisted anywhere else), they can do so by using the {{domxref("StorageManager.persist()", "navigator.storage.persist()")}} method of the {{domxref("Storage_API", "Storage API", "", "nocode")}}.

In Firefox, when a site chooses to use persistent storage, the user is notified with a UI popup that their permission is requested.

Safari and most Chromium-based browsers, such as Chrome or Edge, automatically approve or deny the request based on the user's history of interaction with the site and do not show any prompts to the user.

Note that [research from the Chrome team](https://web.dev/articles/persistent-storage) shows that data is very rarely deleted by the browser. If a user visits a website regularly, there is very little chance that its stored data, even in best-effort mode, will get evicted by the browser.

### Private browsing

Note that in private browsing mode (also called _Incognito_ in Chrome, and _InPrivate_ in Edge), browsers may apply different quotas, and stored data is usually deleted when the private browsing mode ends.

## How much data can be stored?

### Cookies

Different browsers have different rules around how many cookies are allowed per origin and how much space these cookies can use on the disk. While cookies are useful for preserving some small shared state between the browser and the web server across page navigation, using cookies for storing data in the browser is not advised. Cookies are sent with each and every HTTP request, so storing data in cookies that could be stored by using another web technology unnecessarily increases the size of requests.

Because cookies should not be used for storing data in the browser, cookie storage browser limits are not covered here.

### Web Storage

Web Storage, which can be accessed by using the {{domxref("Window.localStorage", "localStorage")}} and {{domxref("Window.sessionStorage", "sessionStorage")}} properties of the {{domxref("window")}} object, is limited to 10 MiB of data maximum on all browsers.

Browsers can store up to 5 MiB of local storage, and 5 MiB of session storage per origin.

Once this limit is reached, browsers throw a `QuotaExceededError` exception which should be handled by using a {{jsxref("Statements/try...catch","try...catch")}} block.

### Other web technologies

The data that's stored by using other web technologies, such as IndexedDB, Cache API, or File System API (which defines the Origin Private File System), is managed by a storage management system that's specific to each browser.

This system regulates all of the data that an origin stores using these APIs.

Each browser determines, using whatever mechanism it chooses, the maximum amount of storage a given origin can use.

#### Firefox

In Firefox, the maximum storage space an origin can use in best-effort mode is whichever is the smaller of:

- 10% of the total disk size where the profile of the user is stored.
- Or 10 GiB, which is the _group limit_ that Firefox applies to all origins that are part of the same {{Glossary("eTLD", "eTLD+1 domain")}}.

Origins for which persistent storage has been granted can store up to 50% of the total disk size, capped at 8 TiB, and are not subject to the eTLD+1 group limit.

For example, if the device has a 500 GiB hard drive, Firefox will allow an origin to store up to:

- In best-effort mode: 10 GiB of data, which is the eTLD+1 group limit.
- In persistent mode: 250 GiB, which is 50% of the total disk size.

Note that it might not actually be possible for the origin to reach its quota because it is calculated based on the hard drive **total** size, not the currently available disk space. This is done for security reasons, to avoid {{Glossary("fingerprinting")}}.

#### Chrome and Chromium-based browsers

In browsers based on the [Chromium open-source project](https://www.chromium.org/Home/), including Chrome and Edge, an origin can store up to 60% of the total disk size in both persistent and best-effort modes.

For example, if the device has a 1 TiB hard drive, the browser will allow an origin to use up to 600 GiB.

Like with Firefox, because this quota is calculated based on the hard drive total size to avoid fingerprinting, an origin might not actually be able to reach its quota.

#### Safari

Starting with macOS 14 and iOS 17, Safari allots up to around 20% of the total disk space for each origin. If the user has saved it as a web app on the Home Screen or the Dock, this limit is increased to up to 60% of the disk size. For privacy reasons, {{Glossary("Same-origin policy", "cross-origin")}} frames have a separate quota, amounting to roughly 1/10 of their parents.

For instance, a macOS device with a 1 TiB drive will limit each origin to around 200 GiB. If the user stores a web app on its Dock, that will be allotted a greater limit of around 600 GiB.

Like other browsers, the exact limits enforced by the quota may vary as to avoid fingerprinting. Additionally, Safari also enforces an overall quota that stored data across all origins cannot grow beyond: 80% of disk size for each browser and web app, and 15% of disk size for each non-browser app that displays web content. More info on Safari's storage policies can be found on the [WebKit blog](https://www.webkit.org/blog/14403/updates-to-storage-policy/).

In earlier versions of Safari, an origin is given an initial 1 GiB quota. Once the origin reaches this limit, Safari asks the user for permission to let the origin store more data. This happens whether the origin stores data in best-effort mode or persistent mode.

## How to check the available space?

Web developers can check how much space is available for their origin and how much is being used by the origin with the {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}} method of the {{domxref("Storage_API", "Storage API", "", "nocode")}}.

Note that this method only returns the estimated usage value, not the actual value. Some of the resources that are stored by an origin may be coming from other origins and browsers voluntarily pad the size of the cross-origin data when reporting total usage value.

## What happens when an origin fills its quota?

Attempting to store more than an origin's quota using IndexedDB, Cache, or OPFS, for example, fails with a `QuotaExceededError` exception.

Web developers should wrap JavaScript that writes to browser storage within {{jsxref("Statements/try...catch","try...catch")}} blocks. Freeing up space by deleting data before storing new data is also recommended.

## When is data evicted?

Data eviction is the process by which a browser deletes an origin's stored data.

Data eviction can happen in multiple cases:

- When the device is running low on storage space, also known as _storage pressure_.
- When all of the data stored in the browser (across all origins) exceeds the total amount of space the browser is willing to use on the device.
- Proactively, for origins that aren't used regularly, which happens only in Safari.

### Storage pressure eviction

When a device is running low on storage space, also known as _storage pressure_, there may come a point when the browser has less available space than it needs to store all of the origin's stored data.

Browsers use a Least Recently Used (LRU) policy to deal with this scenario. The data from the least recently used origin is deleted. If storage pressure continues, the browser moves on to the second least recently used origin, and so on, until the problem is resolved.

This eviction mechanism only applies to origins that are not persistent and skips over origins that have been granted data persistence by using {{domxref("StorageManager.persist()", "navigator.storage.persist()")}}.

### Browser maximum storage exceeded eviction

Some browsers define a maximum storage space that they can use on the device's hard disk. For example, Chrome currently uses at most 80% of the total disk size.

This maximum storage size means that there may come a point at which the data stored by all of the combined origins exceeds the maximum size without any one origin being above its individual quota.

When this happens, the browser starts evicting best-effort origins as described in [Storage pressure eviction](#storage_pressure_eviction).

### Proactive eviction

Safari proactively evicts data when cross-site tracking prevention is turned on. If an origin has no user interaction, such as click or tap, in the last seven days of browser use, its data created from script will be deleted. Cookies set by server are exempt from this eviction.

## How is data evicted?

When an origin's data is evicted by the browser, all of its data, not parts of it, is deleted at the same time. If the origin had stored data by using IndexedDB and the Cache API for example, then both types of data are deleted.

Only deleting some of the origin's data could cause inconsistency problems.

## See also

- [Storage for the web on web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistent storage on web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage and Quota Concepts](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
