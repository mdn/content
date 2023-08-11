---
title: Firefox 56 for developers
slug: Mozilla/Firefox/Releases/56
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 56 was released on September 28, 2017. This article lists key changes that are useful for web developers.

## Changes for Web developers

### Developer Tools

- Display Negative Line Numbers in CSS Grid Inspector ([Firefox bug 1369942](https://bugzil.la/1369942)).
- The new CSS Grid Layout Panel is now available, allowing much better CSS Grid debugging facilities ([Firefox bug 1181227](https://bugzil.la/1181227)). See [Powerful New Additions to the CSS Grid Inspector in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/) for more details.

### HTML

- Implemented the `labels` property for labelable form controls, for example {{domxref("HTMLInputElement.labels")}} ([Firefox bug 556743](https://bugzil.la/556743)).
- Implemented `<link rel="preload">`; see [Preloading content with rel="preload"](/en-US/docs/Web/HTML/Attributes/rel/preload) for more details ([Firefox bug 1222633](https://bugzil.la/1222633)). Note that currently Firefox only supports preloading of cacheable resources.

### CSS

- Implemented the proprietary Mozilla-specific {{cssxref("&lt;color&gt;")}} values `-moz-win-accentcolor` and `-moz-win-accentcolortext` (see [Firefox bug 1344910](https://bugzil.la/1344910)), and the proprietary media query [`-moz-windows-accent-color-in-titlebar`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-accent-color-in-titlebar) (see [Firefox bug 1379938](https://bugzil.la/1379938)).

### SVG

_No changes._

### JavaScript

- The [Intl API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) has been enabled on Firefox for Android ([Firefox bug 1344625](https://bugzil.la/1344625)).

### APIs

#### New APIs

_No changes._

#### DOM

- On Mac, {{domxref("Document.hidden")}} is now true when the window is behind another non-translucent application [Firefox bug 1236512](https://bugzil.la/1236512).
- The {{domxref("Gamepad.displayId")}} property has been implemented ([Firefox bug 1375816](https://bugzil.la/1375816)).
- The {{domxref("PerformanceTiming.secureConnectionStart")}} property has been implemented ([Firefox bug 772589](https://bugzil.la/772589)).
- Firefox used to accept `iso-2022-jp-2` sequences silently when an `iso-2022-jp` {{domxref("TextDecoder.TextDecoder","TextDecoder()")}} was instantiated, however this has now been removed to simplify the API, as no other browsers support it and no pages seem to use it. ([Firefox bug 715833](https://bugzil.la/715833)).
- The 4ms clamping behavior of {{domxref("setTimeout()")}} and {{domxref("setInterval()")}} has been updated to be more in line with other browsers, as described in [Timeouts throttled to >=4ms](/en-US/docs/Web/API/setTimeout#timeouts_throttled_to_%3e4ms) ([Firefox bug 1378586](https://bugzil.la/1378586)).
- The [Page Visibility API's](/en-US/docs/Web/API/Page_Visibility_API) {{domxref("Document.visibilitychange_event", "onvisibilitychange")}} handler has been added ([Firefox bug 1333912](https://bugzil.la/1333912)).
- The {{domxref("Window.showModalDialog()")}} method has been removed ([Firefox bug 981796](https://bugzil.la/981796)).
- The implementation of the {{domxref("HTMLFormElement.action")}}, {{domxref("HTMLInputElement.formAction")}}, and {{domxref("HTMLButtonElement.formAction")}} properties has been updated so that they return the correct form submission URL, as per spec ([Firefox bug 1366361](https://bugzil.la/1366361)).

#### DOM events

- `onwheel` is now available on {{domxref("HTMLElement.onwheel", "HTMLElement")}} — it wasn't before ([Firefox bug 1370550](https://bugzil.la/1370550)).

#### Media and WebRTC

- Firefox now supports the {{domxref("RTCPeerConnection")}} properties which let you examine the current and pending configurations of the local and remote ends of the connection, to help manage changes in configuration: {{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}}, {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}}, and {{domxref("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}}.
- Hardware encoding of media is now enabled by default on Android; it was available but disabled by default in Firefox 55 ([Firefox bug 1386974](https://bugzil.la/1386974)). This supports higher-efficiency encoding of VP8 media on devices that provide support for it. This saves battery life and processor power, generally improving the performance of the user's device.

#### Canvas and WebGL

- The {{domxref("CanvasRenderingContext2D.drawImage()")}} method has been updated so that smoothing occurs when downscaling even if `imageSmoothingEnabled` is `false`. This is not mandatory as per spec, but follows Chrome's behavior. See [Firefox bug 1360415](https://bugzil.la/1360415).
- An {{domxref("SVGImageElement")}} can now be used as the image source in a {{domxref("CanvasRenderingContext2D.drawImage","drawImage()")}} call ([Firefox bug 1382027](https://bugzil.la/1382027)).

### Security

_No changes._

### Plugins

- Firefox for Android has removed all support for plugins ([bug 1381916](https://bugzil.la/1381916)).

### Other

- Gecko now encodes URLs internally as [punycode](https://en.wikipedia.org/wiki/Punycode), to avoid URL encoding problems (see [Firefox bug 945240](https://bugzil.la/945240), also see discussion in [Firefox bug 942074](https://bugzil.la/942074)).
- Firefox on Windows and macOS can now be made to run in [headless mode](/en-US/docs/Mozilla/Firefox/Headless_mode) using the `-headless` flag (see [Firefox bug 1355150](https://bugzil.la/1355150) and [Firefox bug 1355147](https://bugzil.la/1355147)).

## Removals from the web platform

### HTML

- The {{htmlelement("isindex")}} element has been removed from the HTML parser, and from form submission ([Firefox bug 1266495](https://bugzil.la/1266495)).
- The `<applet>` element has been removed ([Firefox bug 1279218](https://bugzil.la/1279218)).

### APIs

_No changes._

### SVG

_No changes._

## Changes for add-on and Mozilla developers

### WebExtensions

- [browsingData.RemovalOptions](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions) gets "hostnames" option for cookies
- [browsingData.settings()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/settings) and [browsingData.removeCookies()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies) are now supported on Firefox for Android
- [browserSettings.cacheEnabled](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled)
- [browser_style](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) usage is changed
- [chrome_settings_overrides.search_provider.is_default](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- contextMenus renamed to [menus](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [cookies.set()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set) and [cookies.remove()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove) now work in private browsing mode
- [devtools.panels.elements.onSelectionChanged](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
- [downloads.open()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/open) can now only be called from a user action
- [FindProxyForURL "DIRECT" return type no longer takes an argument](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy#pac_file_environment)
- [history.onVisited](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) now includes the page title if it is known.
- [management.get()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/get) and [management.getAll()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management/getAll)
- [menus](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus) now supports the "tools_menu" context
- [menus.OnClickData](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData) now has "linkText"
- [menus.create()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) now has an ["icons" option](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus#icons)
- [notifications.onShown](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown)
- [pageAction.show()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) and [pageAction.hide()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) are now supported on Firefox for Android
- [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) now supports "unlimitedStorage"
- [privacy.services](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services) now includes passwordSavingEnabled
- [privacy.websites.referrersEnabled](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)
- [protocol_handlers](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) now supports "gopher"
- proxy.registerProxyScript() is renamed to [proxy.register()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register)
- [proxy.unregister()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister)
- [runtime.onInstalled](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) gets `temporary` flag
- [tabs.print()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print), [tabs.PageSettings](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings), [tabs.printPreview()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview), [tabs.saveAsPDF()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF)
- [tabs.Tab.lastAccessed](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)
- [theme.reset()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset)
- [windows.create()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) and [windows.update()](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/update) now support prefacing window title

## Older versions

{{Firefox_for_developers(55)}}
