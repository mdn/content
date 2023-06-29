---
title: Web Storage API
slug: Web/API/Web_Storage_API
page-type: web-api-overview
browser-compat:
  - api.Window.localStorage
  - api.Window.sessionStorage
---

{{DefaultAPISidebar("Web Storage API")}}

The **Web Storage API** provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using {{glossary("cookie", "cookies")}}.

## Web Storage concepts and usage

The two mechanisms within Web Storage are as follows:

- `sessionStorage` maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).

  - Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
  - Data is never transferred to the server.
  - Storage limit is larger than a cookie (at most 5MB).

- `localStorage` does the same thing, but persists even when the browser is closed and reopened.

  - Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
  - Storage limit is the maximum amongst the two.

These mechanisms are available via the {{domxref("Window.sessionStorage")}} and {{domxref("Window.localStorage")}} properties (to be more precise, the `Window` object implements the `WindowLocalStorage` and `WindowSessionStorage` objects, which the `localStorage` and `sessionStorage` properties hang off) — invoking one of these will create an instance of the {{domxref("Storage")}} object, through which data items can be set, retrieved and removed. A different Storage object is used for the `sessionStorage` and `localStorage` for each origin — they function and are controlled separately.

> **Note:** In Firefox, when the browser crashes/restarts, to avoid memory issues caused by excessive usage of web storage, the amount of data saved per origin is limited to 10MB. See [storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox) for more information.

> **Note:** Access to Web Storage from third-party IFrames is denied if the user has [disabled third-party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection).

## Web Storage interfaces

- {{domxref("Storage")}}
  - : Allows you to set, retrieve and remove data for a specific domain and storage type (session or local).
- {{domxref("Window")}}
  - : The Web Storage API extends the {{domxref("Window")}} object with two new properties — {{domxref("Window.sessionStorage")}} and {{domxref("Window.localStorage")}} — which provide access to the current domain's session and local {{domxref("Storage")}} objects respectively, and a {{domxref("Window/storage_event", "storage")}} event handler that fires when a storage area changes (e.g., a new item is stored).
- {{domxref("StorageEvent")}}
  - : The `storage` event is fired on a document's `Window` object when a storage area changes.

## Examples

To illustrate some typical web storage usage, we have created a simple example, imaginatively called [Web Storage Demo](https://github.com/mdn/dom-examples/tree/main/web-storage). The [landing page](https://mdn.github.io/dom-examples/web-storage/) provides controls that can be used to customize the color, font and decorative image. When you choose different options, the page is instantly updated; in addition your choices are stored in `localStorage`, so that when you leave the page then load it again later on your choices are remembered.

In addition, we have provided an [event output page](https://mdn.github.io/dom-examples/web-storage/event.html) — if you load this page in another tab, then make changes to your choices in the landing page, you'll see the updated storage information outputted as the {{domxref("StorageEvent")}} is fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Private Browsing / Incognito modes

Private windows, incognito mode, and similarly named privacy browsing options, don't store data like history and cookies. In private mode, `localStorage` is treated like `sessionStorage`. The storage APIs are still available and fully functional, but all data stored in the private window is deleted when the browser or browser tab is closed.

## See also

- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Browser storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
