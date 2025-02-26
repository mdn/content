---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
page-type: webextension-api-type
browser-compat: webextensions.api.proxy.RequestDetails
---

{{AddonSidebar}}

Contains information about a web request. An instance of this object is passed into the {{WebExtAPIRef("proxy.onRequest")}} listener.

## Type

Values of this type are objects. They contain the following properties:

- `cookieStoreId`
  - : `string`. The cookie store ID of the current context. See [Work with contextual identities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) for more information.
- `documentUrl`
  - : `string`. URL of the page into which the requested resource will be loaded.
- `frameId`
  - : `integer`. Zero if the request happens in the main frame; a positive value is the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
- `fromCache`
  - : `boolean`. Indicates if this response will be fetched from disk cache.
- `incognito`
  - : `boolean`. `true` for private browsing requests.
- `method`
  - : `string`. Standard HTTP method: for example, "GET" or "POST".
- `originUrl`
  - : `string`. URL of the resource that triggered the request. Note that this may not be the same as the URL of the page into which the requested resource will be loaded. For example, if a document triggers a load in a different window through the [target attribute of a link](/en-US/docs/Web/HTML/Element/a#target), or a CSS document includes an image using the [`url()` functional notation](/en-US/docs/Web/CSS/url_function), then this is the URL of the original document or of the CSS document, respectively.
- `parentFrameId`
  - : `integer`. ID of the frame that contains the frame that sent the request. Set to -1 if no parent frame exists.
- `requestId`
  - : `string`. The ID of the request. Request IDs are unique within a browser session, so you can use an ID to identify different events associated with the same request.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. The HTTP request headers that will be sent with this request. Note that this is only included if the `"requestHeaders"` option was passed into `addListener()`.
- `tabId`
  - : `integer`. ID of the tab in which the request takes place. Set to -1 if the request is not related to a tab.
- `thirdParty`
  - : `boolean`. Indicates whether the request and its content window hierarchy is third party.
- `timeStamp`
  - : `number`. The time when this event fired, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. The type of resource being requested: for example, "image", "script", or "stylesheet".
- `url`
  - : `string`. Target of the request.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}
