---
title: Firefox 79 for developers
slug: Mozilla/Firefox/Releases/79
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 79 that will affect developers. Firefox 79 was released on July 28, 2020.

See also [Firefox 79: The safe return of shared memory, new tooling, and platform updates](https://hacks.mozilla.org/2020/07/firefox-79/) on Mozilla hacks.

## Changes for web developers

### Developer Tools

#### Console

- Network messages with response codes in the 400-499 and 500-599 ranges are now considered errors, and are displayed [even if Response or XHR filters are disabled](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#filtering-by-category). ([Firefox bug 1635460](https://bugzil.la/1635460))
- Network messages for requests that are blocked (by the browser or an extension) are now styled with a "prohibited" icon in the [Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html). ([Firefox bug 1629875](https://bugzil.la/1629875))

#### Debugger

- ["Blackbox" a source file](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignore_a_source/index.html) is now called "ignore" a source file. ([Firefox bug 1642811](https://bugzil.la/1642811))
- Inline preview is now available on [exceptions](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/breaking_on_exceptions/index.html). ([Firefox bug 1581708](https://bugzil.la/1581708))
- Items in the Watch Expressions and Scopes sections now have tooltips on hover, showing their values ([Firefox bug 1631545](https://bugzil.la/1631545))
- In the [Call Stack section](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack), there is now a context menu option to **Restart Frame**, to execute the current stack frame from its beginning. ([Firefox bug 1594467](https://bugzil.la/1594467))

#### Other tools

- The new [Application panel](https://firefox-source-docs.mozilla.org/devtools-user/application/index.html) is now available, which initially provides inspection and debugging support for [service workers](/en-US/docs/Web/API/Service_Worker_API) and [web app manifests](/en-US/docs/Web/Manifest).
- The Messages tab of the Network Monitor has been merged with the [Responses tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab). ([Firefox bug 1636421](https://bugzil.la/1636421))
- The Accessibility Inspector is automatically turned on when you access its tab; you no longer need to explicitly enable it. ([Firefox bug 1602075](https://bugzil.la/1602075))
- In [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-responsive-design-mode), when touch simulation is enabled, mouse-drag events are now interpreted as touch-drag or swipe events. ([Firefox bug 1621781](https://bugzil.la/1621781))
- When [remote debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-to-a-remote-device), the URL bar now has **Back** and **Forward** buttons to help with navigation on the remote browser. ([Firefox bug 1639425](https://bugzil.la/1639425))

### HTML

- The [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) element's `sandbox` attribute now supports the `allow-top-navigation-by-user-activation` token ([Firefox bug 1359867](https://bugzil.la/1359867)).
- Setting `target="_blank"` on [`<a>`](/en-US/docs/Web/HTML/Element/a) and [`<area>`](/en-US/docs/Web/HTML/Element/area) elements implicitly provides the same behavior as also setting `rel="noopener"` ([Firefox bug 1522083](https://bugzil.la/1522083)).

### CSS

- External style sheets are now cached per document group ([Firefox bug 1599160](https://bugzil.la/1599160)). Firefox will minimize retrieval and revalidation of cached style sheets when navigating pages on the same origin. A simple reload (for example, `F5`) will not revalidate the cached CSS files. To load current versions of the style sheets, reload the page bypassing the cache (`Cmd`/`Ctrl` + `F5`).

#### Removals

- The [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature's `no-preference` value has been removed from the [media queries spec](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme), and from Firefox ([Firefox bug 1643656](https://bugzil.la/1643656)).

### JavaScript

- {{jsxref("SharedArrayBuffer")}} has been re-enabled in a post-Spectre-safe manner. It is available to cross-origin isolated sites ([Firefox bug 1619649](https://bugzil.la/1619649)).

  - To cross-origin isolate your site, you need to set the new {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) and {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) headers.

- {{jsxref("Promise.any()")}} is now available ([Firefox bug 1599769](https://bugzil.la/1599769)).
- {{jsxref("WeakRef")}} objects have been implemented ([Firefox bug 1639246](https://bugzil.la/1639246)).
- [Logical assignment operators](https://github.com/tc39/proposal-logical-assignment) are now supported ([Firefox bug 1639591](https://bugzil.la/1639591))

  - [Logical nullish assignment (`??=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
  - [Logical AND assignment (`&&=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - [Logical OR assignment (`||=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

- {{jsxref("Atomics")}} objects now also work with non-shared memory ([Firefox bug 1630706](https://bugzil.la/1630706)).
- The [`Intl.DateTimeFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) now supports the `dateStyle` and `timeStyle` options ([Firefox bug 1557718](https://bugzil.la/1557718)).
- The [`Intl.NumberFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) now supports more numbering systems ([Firefox bug 1413504](https://bugzil.la/1413504)).

### HTTP

- Cross-origin isolation has been implemented using the new {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP) and {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP) headers. This allows you to access certain features such as {{jsxref("SharedArrayBuffer")}} objects and unthrottled timers in {{domxref("Performance.now()")}}.

### APIs

#### DOM

- The [`FileReader`](/en-US/docs/Web/API/FileReader) interface's [`loadstart` event](/en-US/docs/Web/API/FileReader/loadstart_event) is now dispatched asynchronously, as per the spec ([Firefox bug 1502403](https://bugzil.la/1502403)).
- {{domxref("CanvasPattern.setTransform()")}} now supports a {{domxref("DOMMatrix")}} object as an input parameter, as well as an `SVGMatrix` object ([Firefox bug 1565997](https://bugzil.la/1565997)).

#### Media, WebRTC, and Web Audio

- Firefox now supports remote timestamps on statistics records whose {{domxref("RTCStatsReport", "RTCStats.type")}} is `remote-outbound-rtp`. The {{domxref("RTCRemoteOutboundRtpStreamStats")}} dictionary which is used to provide these statistics now includes the {{domxref("RTCRemoteOutboundRtpStreamStats.remoteTimestamp", "remoteTimestamp")}} property, which states the timestamp on the remote peer at which the statistics were collected or generated ([Firefox bug 1615191](https://bugzil.la/1615191)).

#### Removals

- A number of internal Gecko events — including `DOMWindowClose` — which were accidentally exposed to the web, are now internal-only as intended ([Firefox bug 1557407](https://bugzil.la/1557407)).

### WebAssembly

- [WebAssembly Bulk memory operations](/en-US/docs/WebAssembly/Understanding_the_text_format#bulk_memory_operations) are now shipped ([Firefox bug 1528294](https://bugzil.la/1528294)).
- [WebAssembly Reference types](/en-US/docs/WebAssembly/Understanding_the_text_format#reference_types) are now shipped ([Firefox bug 1637884](https://bugzil.la/1637884)).
- [WebAssembly Threads](/en-US/docs/WebAssembly/Understanding_the_text_format#webassembly_threads) (Shared memory & Atomics) are now shipped ([Firefox bug 1389458](https://bugzil.la/1389458), [Firefox bug 1648685](https://bugzil.la/1648685)).

## Changes for add-on developers

- New API: [`tabs.warmup()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup) ([bug 1402256](https://bugzil.la/1402256))
- [Storage quotas are now enforced for the `sync` storage area](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data) ([bug 1634615](https://bugzil.la/1634615)) ([addons.mozilla.org blog post](https://blog.mozilla.org/addons/2020/07/09/changes-to-storage-sync-in-firefox-79/))

## Older versions

{{Firefox_for_developers(78)}}
