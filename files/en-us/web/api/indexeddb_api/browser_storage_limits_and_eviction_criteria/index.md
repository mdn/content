---
title: Browser storage limits and eviction criteria
slug: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
page-type: guide
tags:
  - Database
  - IndexedDB
  - LRU
  - Storage
  - client-side
  - eviction
  - limit
---
{{DefaultAPISidebar("IndexedDB")}}

There are a number of web technologies that store data of one kind or another on the client-side (i.e., on your local disk). The process by which the browser works out how much space to allocate to web data storage and what to delete when that limit is reached is not simple, and differs between browsers. This article describes how browsers determine what local content to purge and when in order to free up needed local storage space.

## What technologies use browser data storage?

In Firefox, the following technologies make use of browser data storage to store data when required. We term them "quota clients" in this context:

- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
- [asm.js](http://asmjs.org/) caching
- [Cache API](/en-US/docs/Web/API/Cache)
- Cookies

> **Note:** In Firefox, [Web Storage](/en-US/docs/Web/API/Web_Storage_API) will soon start to use the same storage management tools too, as described in this document.

> **Note:** In private browsing mode, most data storage is not supported. Local storage data and cookies are still stored, but they are ephemeral — the data is deleted when you close the last private browsing window.

The "last access time" of origins is updated when any of these are activated/deactivated — origin eviction will delete data for all these quota clients.

In Chrome/Opera, the Quota Management API handles quota management for [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), WebSQL, and [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API).

## Different types of data storage

Even in the same browser, using the same storage method, there are different classes of data storage to understand. This section discusses the different ones you might find in different browsers.

Storage comes in two types:

- Persistent: This is data that is intended to be kept around for a long time. This will only be evicted if the user chooses to (for example, in Firefox you can choose to delete all stored data or only stored data from selected origins by going to _Preferences_ and using the options under _Privacy & Security > Cookies & Site Data_).
- Temporary: This is data that doesn't need to persist for a very long time. This will be evicted under a least-recently-used ([LRU policy](#lru_policy)) when [Storage limits](#storage_limits) are reached.

In Firefox, when persistent storage is used, the user is given a UI popup to alert them that this data will persist, and asks if they are happy with that. Temporary data storage does not elicit any user prompts.

Storage is temporary by default; developers can choose to use persistent storage for their sites using the {{domxref("StorageManager.persist()")}} method available in the [Storage API](/en-US/docs/Web/API/Storage_API).

## Where is the data stored?

Each storage type represents a separate repository. Here's the actual mapping to directories under a user's Firefox profile (other browsers may differ slightly):

- `<profile>/storage` — the main top-level directory for storages maintained by the quota manager (see below)
- `<profile>/storage/permanent` — persistent data storage repository
- `<profile>/storage/temporary` — temporary data storage repository
- `<profile>/storage/default` — default data storage repository

> **Note:** After introducing [Storage API](/en-US/docs/Web/API/Storage_API), the "permanent" folder can be considered obsolete; the "permanent" folder only stores IndexedDB persistent-type databases. It doesn't matter if box mode is "best-effort" or "persistent" — data is stored under \<profile>/storage/default.

> **Note:** In Firefox, you can find your profile folder by entering `about:support` in the URL bar, and pressing the _Show in…_ button (e.g., _Show in Finder_ on macOS) next to the _Profile Folder_ title.

> **Note:** If you are looking around in your Profile at the data stored, you might see a fourth folder: `persistent`. Basically, the `persistent` folder was renamed to `permanent` a while ago to keep upgrades/migration simpler.

> **Note:** Users shouldn't add their own directories or files under `<profile>/storage`. This will cause storage initialization to fail; for example, {{domxref("IDBFactory.open()", "open()")}} will fire an error event.

## Storage limits

The maximum browser storage space is dynamic — it is based on your hard drive size. The **global limit** is calculated as 50% of free disk space. In Firefox, an internal browser tool called the Quota Manager keeps track of how much disk space each origin is using up, and deletes data if necessary.

So if the free space on your hard drive is 500 GB, then the total storage for a browser is 250 GB. If this is exceeded, a process called **origin eviction** comes into play, deleting an entire origin's worth of data until the storage amount goes under the limit again. There is no trimming effect put in place to delete parts of origins — deleting one database of an origin could cause problems with inconsistency.

There's also another limit called **group limit** — this is defined as 20% of the global limit, but it has a minimum of 10 MB and a maximum of 2 GB. Each origin is part of a group (group of origins). There's one group for each eTLD+1 domain. For example:

- `mozilla.org` — group1, origin1
- `www.mozilla.org` — group1, origin2
- `joe.blogs.mozilla.org` — group1, origin3
- `firefox.com` — group2, origin4

In this group, `mozilla.org`, `www.mozilla.org`, and `joe.blogs.mozilla.org` can aggregately use a maximum of 20% of the global limit. `firefox.com` has a separate maximum of 20%.

The two limits react differently to limits being reached:

- The group limit is also called the "hard limit": it doesn't trigger origin eviction.
- The global limit is a "soft limit" since there's a chance that some space will be freed and the operation can continue.

> **Note:** The group limit can't be more than the global limit, despite the minimum group limit mentioned above. If you had a really low memory situation where the global limit was, say, 8 MB, then the group limit would also be 8 MB.

> **Note:** If the group limit is exceeded, or if origin eviction couldn't free enough space, the browser will throw a `QuotaExceededError`.

> **Note:** In Chrome the soft and hard storage quota limits has changed since **M66**. More information can be found [here.](https://chromium.googlesource.com/chromium/src/+/refs/heads/master/storage/browser/quota/quota_settings.cc#68)

## LRU policy

When the available disk space is filled up, the quota manager will start clearing out data based on an LRU policy — the least recently used origin will be deleted first, then the next one, until the browser is no longer over the limit.

We track the "last access time" for each origin using temporary storage. Once the global limit for temporary storage is reached (more on the limit later), we try to find all currently unused origins (i.e., ones with no tabs/apps open that are keeping open datastores). These are then sorted according to "last access time." The least recently used origins are then deleted until there's enough space to fulfill the request that triggered this origin eviction.

## See also

- [Working with quota on mobile browsers](https://web.dev/storage-for-the-web/), by [Eiji Kitamura](https://blog.agektmr.com). A detailed analysis of client-side storage on mobile browsers.
- [Storage for the web](https://web.dev/storage-for-the-web/)
