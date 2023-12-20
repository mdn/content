---
title: Firefox 59 for developers
slug: Mozilla/Firefox/Releases/59
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 59 that will affect developers. Firefox 59 was released on March 13, 2018.

## Changes for web developers

### Developer tools

- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Response tab now shows a [preview of the rendered HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) — if the response is HTML ([Firefox bug 1353319](https://bugzil.la/1353319)).
- Cookie information shown in the Storage Inspector (see [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) now includes a _sameSite_ column showing what the same-site status of each cookie is ([Firefox bug 1298370](https://bugzil.la/1298370)).
- The [Rulers](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) tool now includes a readout showing the current dimensions of the viewport ([Firefox bug 1402633](https://bugzil.la/1402633)).
- In [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), you can now set the screen dimensions using the cursor keys ([Firefox bug 1421663](https://bugzil.la/1421663)). See the [Setting screen size](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) section for more details.
- The _Raw headers_ display in the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) _Headers_ tab now includes the response's status code ([Firefox bug 1419401](https://bugzil.la/1419401)).

### HTML

- The {{HTMLElement("textarea")}} element's [`autocomplete`](/en-US/docs/Web/HTML/Element/textarea#autocomplete) attribute has been implemented. This lets you enable or disable form auto-fill for the element.

### CSS

- The {{cssxref("overscroll-behavior")}} property and its associated longhand properties — {{cssxref("overscroll-behavior-x")}} and {{cssxref("overscroll-behavior-y")}} — have been implemented ([Firefox bug 951793](https://bugzil.la/951793)), and it has been enabled by default on all releases ([Firefox bug 1428879](https://bugzil.la/1428879)).
- The behavior of "unusual elements" (elements that aren't rendered purely by CSS box concepts such as replaced elements) when given a {{cssxref("display")}} value of `contents` has been updated as per spec ([Firefox bug 1427292](https://bugzil.la/1427292)). See [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) for exactly what the specified behaviors are.
- {{cssxref("position")}} `sticky` is now supported on appropriate [HTML table](/en-US/docs/Learn/HTML/Tables) parts (e.g. {{htmlelement("th")}} elements) ([Firefox bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} is now supported in {{cssxref("&lt;color&gt;")}} values — `rgb()`, `rgba()`, `hsl()`, and `hsla()` ([Firefox bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [media query](/en-US/docs/Web/CSS/CSS_media_queries) values is now supported [Firefox bug 1396057](https://bugzil.la/1396057).
- The {{cssxref("@document")}} at-rule has been limited to use only in user and UA sheets ([Firefox bug 1035091](https://bugzil.la/1035091)).
- Implement the {{cssxref("font-optical-sizing")}} property ([Firefox bug 1435692](https://bugzil.la/1435692)).

### SVG

_No changes._

### JavaScript

_No changes._

### APIs

#### New APIs

- {{domxref("PointerEvent","PointerEvents")}} have been enabled in Firefox Desktop ([Firefox bug 1411467](https://bugzil.la/1411467)).

#### DOM

- The {{domxref("EventTarget.EventTarget()","EventTarget()")}} constructor has been implemented ([Firefox bug 1379688](https://bugzil.la/1379688)).
- The {{domxref("Response.Response()","Response()")}} constructor can now accept a `null` value for its `body` parameter, as per spec ([Firefox bug 1303025](https://bugzil.la/1303025)).

#### DOM events

- The {{domxref("Event.composedPath()")}} method has been implemented ([Firefox bug 1412775](https://bugzil.la/1412775)).

#### Service workers

- The service worker [Clients API](/en-US/docs/Web/API/Clients) can now find and communicate with windows in a separate browser process ([Firefox bug 1293277](https://bugzil.la/1293277)) .
- Nested about:blank and about:srcdoc iframes will now inherit their parent's controlling service worker. Fixed in ([Firefox bug 1293277](https://bugzil.la/1293277)) and ([Firefox bug 1426979](https://bugzil.la/1426979)).
- When a service worker provides a {{domxref("Response")}} to {{domxref("FetchEvent.respondWith()")}}, the {{domxref("Response.url")}} value will now be propagated to the intercepted network request as the final resolved URL. In the past the {{domxref("Request.url","FetchEvent.request.url")}} was used for this instead. This means, for example, if a service worker intercepts a stylesheet or worker script, then the provided `Response.url` will be used to resolve any relative {{cssxref("@import")}} or {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} subresource loads ([Firefox bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` will now trigger a network error if the {{domxref("Request.mode","FetchEvent.request.mode")}} is `"same-origin"` and the provided {{domxref("Response.type")}} is `"cors"`. ([Firefox bug 1222008](https://bugzil.la/1222008))

#### Media and WebRTC

- The {{domxref("MediaStreamTrack")}} property {{domxref("MediaStreamTrack.muted")}}, along with the events {{domxref("MediaStreamTrack.mute_event", "mute")}} and {{domxref("MediaStreamTrack.unmute_event", "unmute")}} and the corresponding event handlers, {{domxref("MediaStreamTrack.mute_event", "onmute")}} and {{domxref("MediaStreamTrack.unmute_event", "onunmute")}}, have been implemented. A track's `muted` state indicates that the track is not currently able to provide media data.

  > **Note:** The `muted` state of a track isn't useful for what's typically thought of as muting and unmuting a track. Instead, use the {{domxref("MediaStreamTrack.enabled", "enabled")}} property; setting `enabled` to `false` causes the track to output only empty frames.

- Firefox 59 on Android now supports Apple's HTTPS Live Streaming (HLS) protocol for both audio and video. This non-standard protocol is being supported on mobile to improve compatibility with sites that require it for mobile streaming. There is not currently any plan to implement it on Firefox Desktop.
- The {{domxref("RTCRtpReceiver")}} methods {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} and {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} have been implemented to provide information about the sources of each RTP stream. However, a specification change occurred before release and we have disabled these by default behind the preference `media.peerconnection.rtpsourcesapi.enable` ([Firefox bug 1363667](https://bugzil.la/1363667), [Firefox bug 1430213](https://bugzil.la/1430213), and [Firefox bug 1433236](https://bugzil.la/1433236).
- The {{domxref("RTCRtpTransceiver")}} interface has now been implemented, since the Firefox implementation of WebRTC now supports transceivers, with `RTCPeerConnection` and other interfaces updated to use them per the latest specification.
- The {{domxref("RTCPeerConnection.addTransceiver()")}} method has been added. In addition, the behavior of {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} has been updated to create a transceiver as required.
- Support for [WebVTT](/en-US/docs/Web/API/WebVTT_API) regions was implemented in Firefox 58 but disabled by default. They're now available by default ([Firefox bug 1415805](https://bugzil.la/1415805)).
- Firefox now supports WebVTT `REGION` definition blocks whose settings list has one setting per line instead of all of the settings being on the same line of the WebVTT file ([Firefox bug 1415821](https://bugzil.la/1415821).

#### Canvas and WebGL

_No changes._

### CSSOM

The {{domxref("CSSNamespaceRule")}} interface and its `namespaceURL` and `prefix` properties have been implemented ([Firefox bug 1326514](https://bugzil.la/1326514)).

### HTTP

_No changes._

### Security

- Top-level navigation to `data:` URLs has been blocked [Firefox bug 1401895](https://bugzil.la/1401895). See [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) for more details.
- The `SAMEORIGIN` directive of the {{httpheader("X-Frame-Options")}} header has been changed so that it checks not only the top-level IFrame is in the same origin, but all its ancestors as well ([Firefox bug 725490](https://bugzil.la/725490)).
- Image resources loaded from different origins to the current document are no longer able to trigger HTTP authentication dialogs ([Firefox bug 1423146](https://bugzil.la/1423146)).
- HTTP authentication now uses `utf-8` encoding for usernames and passwords (rather than `ISO-8859-1`) for parity with other browsers, and to avoid potential problems as described in [Firefox bug 1419658](https://bugzil.la/1419658).
- Everyday the [HSTS preload list](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) is updated from Google. Normally this doesn't warrant a note, but in this release new TLDs were included, notably `.app` and `.dev`. While they are new TLDs developers might have used them for local development and be surprised by this change. Note that [reserved TLDs](https://datatracker.ietf.org/doc/html/rfc2606) should be used for local development instead.

### Plugins

_No changes._

### Other

_No changes._

## Removals from the web platform

### HTML

The non-standard `version` parameter of the {{htmlelement("script")}} element's [`type`](/en-US/docs/Web/HTML/Element/script#type) attribute (e.g. `type="application/javascript;version=1.8"`) has been removed ([Firefox bug 1428745](https://bugzil.la/1428745)).

### CSS

- The proprietary `mozmm` {{cssxref("&lt;length&gt;")}} unit has been removed ([Firefox bug 1416564](https://bugzil.la/1416564)).
- The proprietary `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, and `-moz-border-left-colors` properties have been limited to usage in chrome code only ([Firefox bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Non-standard [conditional catch clauses](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) have been removed ([Firefox bug 1228841](https://bugzil.la/1228841)).

### APIs

- The non-standard method `Event.getPreventDefault()` has been removed. You should instead use the {{domxref("Event.defaultPrevented")}} property to determine whether or not {{domxref("Event.preventDefault", "preventDefault()")}} was called on the {{domxref("Event")}}.
- The proprietary [`Navigator.mozNotification`](/en-US/docs/Archive/API/Navigator/mozNotification) property and `DesktopNotification` interface have been removed, in favor of the standard [Notifications API](/en-US/docs/Web/API/Notifications_API) ([Firefox bug 952453](https://bugzil.la/952453)).
- The proprietary `window.external.addSearchEngine()` method has been removed ([Firefox bug 862147](https://bugzil.la/862147)). Also see {{domxref("Window.sidebar")}} for more details.
- The non-standard Firefox-only {{domxref("HTMLMediaElement")}} property `mozAutoplayEnabled` has been removed.

### SVG

Support for SMIL's `accessKey` feature has been removed ([Firefox bug 1423098](https://bugzil.la/1423098)).

### Other

Support for the non-standard `pcast:` and `feed:` protocols has been removed from Firefox ([Firefox bug 1420622](https://bugzil.la/1420622)).

## Changes for add-on and Mozilla developers

### WebExtensions

- [Theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) updates:

  - new properties: `colors.background_tab_text`, `colors.toolbar_field_border`
  - all color properties now support both Chrome-style arrays and CSS color values.

- New [browser settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- New [`tabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- The [`contextMenus`](/en-US/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API now supports a ["bookmark" context](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- New [`contentScripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API enables runtime registration of content scripts.
- New [`pageAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` functions now accept `null` to undo changes.
  - [`browserAction.isEnabled()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) functions.

- New option in [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) to show page actions by default.
- New values for `protocol_handlers`:

  - "ssb" for Secure Scuttlebutt communications
  - "dat" for DATproject
  - "ipfs", "ipns", "dweb" for IPFS

- New [`privacy.websites`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) setting "cookieConfig".
- Support in [`cookies`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API for [first-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- New option `upgradeToSecure` in [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Older versions

{{Firefox_for_developers(58)}}
