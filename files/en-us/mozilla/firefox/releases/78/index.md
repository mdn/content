---
title: Firefox 78 for developers
slug: Mozilla/Firefox/Releases/78
tags:
  - '78'
  - Firefox
  - Mozilla
  - Releases
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 78 that will affect developers. Firefox 78 was released on June 30, 2020.

See also [New in Firefox 78: DevTools improvements, new regex engine, and abundant web platform updates](https://hacks.mozilla.org/2020/06/new-in-firefox-78/) on Mozilla hacks.

## Changes for web developers

### Developer Tools

#### Debugger

- You can now change the URL accessed by the remote device from the [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device) panel. ({{bug("1617237")}})
- The **Disable JavaScript** menu item in the [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html) now only affects the current tab, and is reset when the Developer Tools are closed. ({{bug("1640318")}})
- [Logpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) can map variable names in source-mapped code back to their original names, if you enable **Maps** in the [Scopes pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#scopes). ({{bug("1536857")}})

#### Network Monitor

- In the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns), you can now resize the columns of the request list by dragging the column borders anywhere in the table. ({{bug("1618409")}})
- The [request details panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) in the Network Monitor has some UX improvements. ({{bug("1631302")}}, {{bug("1631295")}})
- If a request was blocked, the [request list](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html) now shows the reason, such as an add-on, CSP, CORS, or Enhanced Tracking Protection. ({{bug("1555057")}}, {{bug("1445637")}}, {{bug("1556451")}})

#### Other tools

- The [Accessibility](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) inspector is out of beta. You can use it to check for various accessibility issues on your site. ({{bug("1602075")}})
- Uncaught promise errors now provide all details in the Console, including their name and stack. ({{bug("1636590")}})

### CSS

- The {{CSSxRef(":is", ":is()")}} and {{CSSxRef(":where", ":where()")}} pseudo-classes are now enabled by default ({{bug(1632646)}}).
- The {{CSSxRef(":read-only")}} and {{CSSxRef(":read-write")}} pseudo-classes are now supported without prefixes ({{bug(312971)}}).

  - In addition, `:read-write` styles are no longer applied to disabled [`<input>`](/en-US/docs/Web/HTML/Element/input) and [`<textarea>`](/en-US/docs/Web/HTML/Element/textarea) elements, which was a violation of [the HTML spec](https://html.spec.whatwg.org/#selector-read-write) ({{bug(888884)}}).

### JavaScript

- The [`Intl.ListFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) API is now supported ({{bug(1589095)}}).
- The [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) constructor has been extended to support new options specified in the [Intl.NumberFormat Unified API Proposal](https://github.com/tc39/proposal-unified-intl-numberformat) ({{bug(1633836)}}). This includes among other things:

  - [Support for scientific notations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#scientific_engineering_or_compact_notations)
  - [Unit](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#unit_formatting), [currency](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currency_formatting) and [sign display](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#displaying_signs) formatting

- The {{JSxRef("RegExp")}} engine [has been updated](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) and now supports all new features introduced in ECMAScript 2018:

  - [Lookbehind assertions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) ({{bug(1225665)}})
  - {{JSxRef("RegExp.prototype.dotAll")}} ({{bug(1361856)}})
  - [Unicode property escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) ({{bug(1361876)}})
  - [Named capture groups](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) ({{bug(1362154)}})

- Due to a [WebIDL spec change](https://github.com/whatwg/webidl/pull/357) in mid-2020, we've [added a `Symbol.toStringTag` property to all DOM prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#tostringtag_available_on_all_dom_prototype_objects) ({{bug(1277799)}}).
- The garbage collection of {{jsxref("WeakMap")}} objects has been improved. `WeakMaps` are now marked incrementally ({{bug(1167452)}}).

### APIs

#### DOM

- The {{DOMxRef("ParentNode.replaceChildren()")}} method has been implemented ({{bug(1626015)}}).

#### Service workers

- [Extended Support Releases (ESR)](https://www.mozilla.org/en-US/firefox/enterprise/): Firefox 78 is the first ESR release that supports [Service workers](/en-US/docs/Web/API/Service_Worker_API) (and the [Push API](/en-US/docs/Web/API/Push_API)). Earlier ESR releases had no support ({{bug(1547023)}}).

### WebAssembly

- [Wasm Multi-value](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) is now supported, meaning that WebAssembly functions can now return multiple values, and instruction sequences can consume and produce multiple stack values ({{bug(1628321)}}).
- WebAssembly now supports import and export of 64-bit integer function parameters (i64) using [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) from JavaScript ({{bug(1608770)}}).

### TLS 1.0 and 1.1 removal

- Support for the [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security) (TLS) protocol's version 1.0 and 1.1, is dropped from all browsers. Read [TLS 1.0 and 1.1 Removal Update](https://hacks.mozilla.org/2019/05/tls-1-0-and-1-1-removal-update/) for the previous announcement and what actions to take if you are affected ({{bug(1643229)}}).

## Changes for add-on developers

- {{WebExtAPIRef("browsingData.removeCache")}} and {{WebExtAPIRef("browsingData.removePluginData")}} now support deleting by hostname. ({{bug(1636784)}}).
- When using [`proxy.onRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/onRequest), a filter that limits based on tab id or window id is now correctly applied. This could be useful for add-ons that want to provide proxy functionality just in just one window.
- [Clicking within the context menu](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/onClicked) from the "all tabs" dropdown now passed the appropriate tab object. In the past, the active tab was erroneously passed.
- When using [`downloads.download`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download) with the saveAs option, the recently used directory is now remembered. While this information is not available to developers, it is very convenient to users.

## Older versions

{{Firefox_for_developers(77)}}
