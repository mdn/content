---
title: Firefox 57 (Quantum) for developers
slug: Mozilla/Firefox/Releases/57
tags:
  - '57'
  - Firefox
  - Firefox Quantum
  - Release Notes
  - Stylo
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 57 (a.k.a. Firefox Quantum) that will affect developers. Firefox 57 was released on November 14, 2017.

## Firefox 57 === Firefox Quantum

Firefox 57 has been given the release name **Quantum**, after the [Firefox Quantum](https://wiki.mozilla.org/Quantum) engineering project that has aimed to rebuild Firefox from the ground up, bringing with it major performance, stability, and visual improvements. This is the first version of Firefox to ship some of these improvements, so we wanted to mark the occasion.

> **Note:** To read more about the Quantum features in this release, see [Firefox Quantum Developer Edition: the fastest Firefox ever with Photon UI and better tooling](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) by Dan Callahan.

[Firefox's new parallel CSS engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — also known as **Quantum CSS** or **Stylo** — is enabled by default in Firefox 57 for desktop, with Mobile versions of Firefox to follow later on. Developers shouldn't notice anything significantly different, aside from a whole host of performance improvements. There are however a number of minor functional differences in Stylo, implemented to fix non-standard Gecko behavior that should be eliminated. We will report on such differences on reference pages and in the release notes as appropriate (see {{anch("Quantum CSS notes")}}).

## Changes for Web developers

### Developer Tools

_No changes._

### HTML

- The [date](/en-US/docs/Web/HTML/Element/input/date) and [time](/en-US/docs/Web/HTML/Element/input/time) {{htmlelement("input")}} types are now enabled in all builds ({{bug("1399036")}}).

### CSS

- The `minimal-ui` and `standalone` values of the [`display-mode`](/en-US/docs/Web/CSS/@media/display-mode) media query are now supported ({{bug(1369815)}}). See also the [Web app manifest `display` field](/en-US/docs/Web/Manifest#display).
- The `grid-row-gap` and `grid-column-gap` properties are no longer reset by the {{CSSxRef("grid")}} shorthand ({{bug(1387410)}}).
- The `layout.css.clip-path-shapes.enabled` preference has been removed ({{bug(1399767)}}).  This preference allowed disabling the {{CSSxRef("&lt;basic-shape&gt;")}} support in {{CSSxRef("clip-path")}}.  This support was shipped in Firefox 54 and can no longer be disabled.

#### Quantum CSS notes

Following bugs have been fixed in Quantum:

- Radial gradient values like `radial-gradient(circle gold,red)` will work in the old Gecko style system, even though they shouldn't because of the missing comma between `circle` and `gold` ({{bug(1383323)}}).
- When you animate an offscreen element onscreen but specify a delay, Gecko does not repaint on some platforms, e.g. Windows ({{bug(1383239)}}).
- In Gecko, {{htmlelement("details")}} elements can't be made open by default using the `open` attribute if they have an {{CSSxRef("animation")}} active on them ({{bug(1382124)}}).
- In Gecko, {{CSSxRef("transition", "transitions")}} will not work when transitioning from a {{CSSxRef("text-shadow")}} with a color specified to a `text-shadow` without a color specified  ({{bug(726550)}}).
- In Gecko, cancelling a filling animation (e.g. with `animation-fill-mode: forwards` set) can trigger a transition set on the same element, although only once (see {{bug(1192592)}} and [these test cases](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) for more information). In general declarative animations should not trigger transitions.
- Animations using em units are not affected by changes to the {{CSSxRef("font-size")}} on the animated element's parent in Gecko, whereas they should be ({{bug(1254424)}}).
- Gecko also deals with `font-size` inheritance differently from Quantum CSS, meaning that for some language settings inherited font sizes end up being smaller than expected (see {{bug(1391341)}}).
- Gecko reuses the same mechanism used when parsing a url-token when parsing the `domain()` or `url-prefix()` URL matching functions for a {{CSSxRef("@document", "@-moz-document")}} rule. Quantum CSS does not use the same mechanism and it does not consider tokens invalid when they contain brackets or quotes ({{bug(1362333)}}).
- In Gecko, when you set a system font as the value of a canvas 2D context's {{DOMxRef("CanvasRenderingContext2D.font", "font")}} (e.g. `menu`), getting the font value fails to return the expected font (it returns nothing). This has been fixed in Quantum. ({{bug(1374885)}}).
- In Gecko, when you create a detached subtree (e.g. a {{htmlelement("div")}} created using {{DOMxRef("Document.createElement","createElement()")}} that is not yet inserted into the DOM), the subtree's root element is set as a block-level element. In Quantum CSS this is set as inline, as per spec ({{bug(1374994)}}).
- In Gecko, {{CSSxRef("calc()")}} expressions are rejected — causing the value to be invalid — when used as the radius component of a {{CSSxRef("radial-gradient()")}} function ({{bug(1376019)}}).
- In Gecko, `calc(1*2*3)` is not parsed successfully; Quantum CSS fixes this ({{bug(1379467)}}).
- In Quantum CSS, [`calc()` is supported everywhere that the spec explains it should be](https://drafts.csswg.org/css-values-3/#calc-notation) ({{bug(1350857)}}). In Gecko it is not.
- Gecko has a bug whereby the {{CSSxRef("::before")}} and {{CSSxRef("::after")}} pseudo-elements are still generated even if the {{CSSxRef("content")}} property value is set to `normal` or `none`. As per spec, they shouldn't be ({{bug(1387931)}}).
- Another Gecko bug means that the {{CSSxRef("background-position")}} property can't be transitioned between two values containing different numbers of {{CSSxRef("&lt;position&gt;")}} values, for example `background-position: 10px 10px;` and `background-position: 20px 20px, 30px 30px;` (see {{bug(1390446)}}).

### SVG

_No changes._

### JavaScript

- The non-standard {{JSxRef("Statements/for_each...in", "for each...in")}} (E4X) loop has been removed. Please use {{JSxRef("Statements/for...of", "for...of")}} instead and see [Warning: JavaScript 1.6's for-each-in loops are deprecated](/en-US/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) for migration help. ({{bug(1083470)}}).
- The {{JSxRef("Object.prototype.watch()")}} and {{JSxRef("Object.unwatch", "unwatch()")}} methods are deprecated, will now throw a warning when used, and will be removed soon ({{bug(934669)}}).
- The non-standard {{JSxRef("Iterator")}} and {{JSxRef("StopIteration")}} objects as well as the legacy iteration protocol have been removed ({{bug(1098412)}}).
- Async generator is now enabled ({{bug(1352312)}}).
- for await (... of ...) syntax is now enabled ({{bug(1352312)}}).

### APIs

#### New APIs

- The {{DOMxRef("PerformanceObserver")}} API is now enabled by default ({{bug(1386021)}}).
- The {{DOMxRef("AbortController")}} and {{DOMxRef("AbortSignal")}} interfaces (known as the Abort API) have been added, allowing DOM requests (such as [fetch requests](/en-US/docs/Web/API/fetch)) to be aborted if desired ({{bug(1378342)}}).
- \[2] The [Storage API](/en-US/docs/Web/API/Storage_API) is implemented and enabled by default ({{bug(1399038)}}).

#### DOM

- The {{DOMxRef("Selection.type")}} property of the [Selection API](/en-US/docs/Web/API/Selection) is now implemented ({{bug(1359157)}}).
- {{DOMxRef("Document.createEvent", "Document.createEvent('FocusEvent')")}} is now supported ({{bug(1388069)}}).
- The `files` property of the {{DOMxRef("HTMLInputElement")}} interface is now settable ({{bug(1384030)}}).
- The `HTMLDocument.getSelection()` method has been moved to the {{DOMxRef("Document/getSelection","Document")}} interface so it is available to XML documents ({{bug(718711)}}).
- The {{Event("messageerror")}} event is now implemented, and can have code run in response to it firing via event handlers implemented on message targets — see {{DOMxRef("MessagePort.onmessageerror")}}, {{DOMxRef("DedicatedWorkerGlobalScope.onmessageerror")}}, {{DOMxRef("Worker.onmessageerror")}}, {{DOMxRef("BroadcastChannel.onmessageerror")}}, and {{DOMxRef("Window.onmessageerror")}} ({{bug(1359017)}}).
- When {{DOMxRef("Headers")}} values are iterated over, they are automatically sorted in lexicographical order, and values from duplicate header names are combined ({{bug(1396848)}}).

#### DOM events

_No changes._

#### Media and WebRTC

- Support for messages of arbitrary size (up to 1GiB, although 256kiB is more interoperable) is now supported on {{DOMxRef("RTCDataChannel")}} through use of the end-of-record (EOR) flag on SCTP messages. See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels", "Understanding message size limits")}} for more information ({{bug(979417)}}).

  > **Note:** Because Firefox doesn't yet support the SCTP ndata protocol that provides the ability to interleave SCTP messages from multiple sources, sending large data objects can cause significant delays on all other SCTP traffic. See {{bug(1381145)}} to track progress on implementing and deploying ndata support in Firefox.

- The {{DOMxRef("RTCDataChannel.send()")}} method can now throw a `TypeError` exception if the size of the message you're trying to send is not compatible with the receiving {{Glossary("user agent")}} (this is implemented as part of {{bug(979417)}}).
- The [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API) has been updated so that {{event("error")}} events sent to report problems that occur while recording are now of type {{DOMxRef("MediaRecorderErrorEvent")}} rather than being generic events.
- Updated the documentation around {{DOMxRef("OfflineAudioContext")}} since its constructor's inputs can now be specified in an object rather than as a list of parameters ({{bug(1388591)}}).
- The Web Audio API now properly supports multi-channel output ({{bug(1378070)}}).

### Security

- `resource://` URLs no longer leak information ({{bug(863246)}})
- Data URIs are now treated as unique opaque origins, rather than inheriting the origin of the settings object responsible for the navigation ({{bug(1324406)}}).

### Plugins

_No changes._

### Other

- Firefox [headless mode](/en-US/docs/Mozilla/Firefox/Headless_mode) now includes a `-screenshot` flag that allows you to take website screenshots directly from the command line ({{bug(1378010)}}).

## Removals from the web platform

### HTML

- `<link rel="preload">` (see [Preloading content with rel="preload"](/en-US/docs/Web/HTML/Preloading_content)) has been disabled in Firefox 57 because of various web compatibility issues (e.g. {{bug(1405761)}}). An improved version that works for non-cacheable resources is expected to land in Firefox 58.

### APIs

- Mozilla's proprietary [Social API](/en-US/docs/Archive/Social_API) has been completely removed ({{bug(1388902)}}).

### SVG

_No changes._

## Changes for add-on and Mozilla developers

> **Note:** Starting in Firefox 57, all support for XPCOM-based add-ons has been removed. All extensions must be converted into the new [browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions) (also known as WebExtensions) or they will not work.

### WebExtensions

The following APIs have been added or extended:

- [`bookmarks`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - support for separators through [`bookmarks.BookmarkTreeNodeType`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - `theme_icons` property for light/dark theme icons

- [`browserAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - [`browserAction.openPopup()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [`allowPopupsForUserEvents`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [`browsingData.removeLocalStorage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)

  - [`setImageData()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

  - [`onCreated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - `colorCode` and `iconUrl` in [`contextualIdentities.ContextualIdentity`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity)

- [`devtools.panels`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)

- [`downloads`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

  - `incognito` option in [`downloads.download()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - `estimatedEndTime` property in [`downloads.DownloadItem`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

- [`find`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find)

  - [`find()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

  - [`websites.trackingProtectionMode`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

  - `FindProxyForURL()` can now return an object

- [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime)

  - [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) support on Android

- [`sessions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions)

  - [`setTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)

  - [`sidebarAction.open()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)

  - [`storage.managed`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

  - `loadReplace` option in [`tabs.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - `discarded` property in [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated), and [`tabs.query()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) can open "view-source:" URLs
  - `openerTabId` property in [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), and [`tabs.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - `windowId` option to [`theme.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo` property in [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) events

- [`windows`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - `allowScriptsToClose` option in [`windows.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Older versions

{{Firefox_for_developers(56)}}
