---
title: Firefox 77 for developers
slug: Mozilla/Firefox/Releases/77
tags:
  - '77'
  - Firefox
  - Mozilla
  - Releases
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 77 that will affect developers. Firefox 77 was released on [June 2, 2020](https://wiki.mozilla.org/RapidRelease/Calendar).

**See also the accompanying hacks post — [New in Firefox 77: DevTool improvements and web platform updates](https://hacks.mozilla.org/2020/06/new-in-firefox-77-devtool-improvements-and-web-platform-updates/).**

## Changes for web developers

### Developer tools

- Firefox Developer Edition offers a [Compatibility panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#compatibility-view) in the Page Inspector, to show the browsers supported by the CSS properties used on the page. ({{bug("1625134")}})
- The Debugger has a [Settings menu in its toolbar](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#toolbar); the only menu option (yet) is **Disable JavaScript**. ({{bug("1630957")}})
- The [Network Monitor toolbar](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html) has an **Actions** menu for managing log data ({{bug("1459175")}}):

  - **Persist Logs**
  - **Import HAR File**
  - **Save All as HAR**
  - **Copy All as HAR**

- The [Request Blocking panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) of the Network Monitor has a context menu for enabling, disabling or removing all request block items. ({{bug("1588076")}})
- If you change the selected source line in the Debugger by clicking a frame in the [Call Stack](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack), and then click **Step over** (`F10`), the debugger executes until reaching the line following the newly-selected line (disregarding whatever line the debugger originally stopped at). ({{bug("1630642")}})
- You can set a watchpoint that pauses execution when a value is [either read or assigned ("get or set")](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint), as well as just read ("get") or just assigned ("set"). ({{bug("1580585")}}

### HTML

- Firefox now displays the [label value](/en-US/docs/Web/HTML/Element/option#browser_compatibility) on an {{HTMLElement("option")}} element when the element's content is empty. ({{bug("40545")}})

### SVG

- Firefox now supports the {{SVGAttr("transform-origin")}} presentation attribute ({{bug(1581691)}}).

### JavaScript

- {{JSxRef("String.prototype.replaceAll()")}} is now supported ({{bug(1608168)}}).

### APIs

#### IndexedDB

- The {{DOMxRef("IDBCursor.request")}} property has been implemented ({{bug(1536540)}}).

### WebDriver conformance (Marionette)

- Certain commands could have caused a hang of Marionette when the currently selected top-level browsing context gets removed (e.g., closing the window by a click) ({{bug(1619481)}}).
- Known issue: Because of changes in Firefox 77 an open user prompt could be closed too early when navigating away from the current page. This problem will be fixed in Firefox 78 ({{bug(1631362)}}).

## Changes for add-on developers

### API changes

- {{WebExtAPIRef("tabs.goBack")}} and {{WebExtAPIRef("tabs.goForward")}} are now supported. ({{bug(1603796)}})
- {{WebExtAPIRef("browsingData.remove")}} with type `serviceWorkers` and `indexedDB` now supports deleting by hostname. ({{bug(1632990)}} and {{bug(1551301)}})
- The {{WebExtAPIRef("tabs.duplicate")}} API now supports `duplicateProperties`, enabling the position and active status of a duplicated tab to be specified. ({{bug(1560218)}})
- The {{WebExtAPIRef("permissions")}} API events {{WebExtAPIRef("permissions.onAdded")}} and {{WebExtAPIRef("permissions.onRemoved")}} are now supported. ({{bug(1444294)}})
- Multiple `Content-Security-Policy` header changes requested in {{WebExtAPIRef("webRequest.onHeadersReceived")}} are merged. ({{bug(1462989 )}})
- {{WebExtAPIRef("webRequest")}} events will no longer be triggered for `data:`-URLs. ({{bug(1631933)}})

### Manifest changes

- The following permissions are now optional, they can be specified in the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest key and requested using the {{WebExtAPIRef("permissions")}} API: `browsingData` ({{bug(1630417)}}), `pkcs11` ({{bug(1630418)}}), `proxy` ({{bug(1548011)}}), and `sessions` ({{bug(1630414)}}).

### Other

- Use of the `unlimitedStorage` permission no longer results in a prompt during extension installation or update. See [Requesting the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) for more information. ({{bug(1630413)}})
- Changes related to [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) mean that when setting [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) to bypass tracking protection for extension pages hosts must be specified as a full domain or with wildcards. However, for Content scripts tracking protection can only be bypassed for hosts specified with a full domain.

## Older versions

{{Firefox_for_developers(76)}}
