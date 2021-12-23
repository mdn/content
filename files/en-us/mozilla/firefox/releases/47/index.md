---
title: Firefox 47 for developers
slug: Mozilla/Firefox/Releases/47
tags:
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 47 was released on June 6, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- [User-agent spoofing](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) from the [Responsive mode](/en-US/docs/Tools/Responsive_Design_Mode)
- [Retaining paths panel](/en-US/docs/Tools/Memory/Dominators_view#retaining_paths_panel) in memory tool
- [Service workers](/en-US/docs/Web/API/ServiceWorker) and [Push API](/en-US/docs/Web/API/Push_API) debugging

  - [about:debugging](/en-US/docs/Tools/about:debugging) dashboard for workers
  - Cached requests are now shown in [Network Monitor](/en-US/docs/Tools/Network_Monitor)
  - Support for [cache storage](/en-US/docs/Web/API/Cache) in [Storage Inspector](/en-US/docs/Tools/Storage_Inspector)

- Ability to filter [Storage Inspector](/en-US/docs/Tools/Storage_Inspector) entries
- [Console](/en-US/docs/Tools/Web_Console) now detects incomplete input and switches multi-line mode
- Updated breakpoint style in [Debugger](/en-US/docs/Tools/Debugger)
- Prevent panels from hiding automatically using the [Browser Toolbox](/en-US/docs/Tools/Browser_Toolbox), to aid browser and add-on debugging
- [Font inspector](/en-US/docs/Tools/Page_Inspector/UI_Tour#fonts_view) has been disabled by default
- [3D view](/en-US/docs/Tools/3D_View) has been removed
- Developer tools theme refresh
- Disable the Font Panel ({{bug(1247723)}}).

### HTML

_No change._

### CSS

- Support for the {{cssxref("::backdrop")}} pseudo-element has been added ({{bug(1064843)}}).
- The case-insensitive modifier `i` (like in `[foo=bar i]`) for [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) has been implemented ({{bug(888190)}}).
- An experimental implementation of CSS Mask Image properties landed. For the moment, this will only be available on Nightly versions of Firefox.y: shorthand version of {{cssxref("mask")}}, as well as {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} are now available ({{bug(686281)}}).
- The {{cssxref("clip-path")}} property now experimentally supports `polygon()`, `ellipse()`, and `circle()` on HTML elements (does not support [inset()](https://bugzilla.mozilla.org/show_bug.cgi?id=1246762) and [path()](https://bugzilla.mozilla.org/show_bug.cgi?id=1246764)), behind the pref `layout.css.clip-path-shapes.enabled` that defaults to `false` ({{bug(1075457)}}). Interpolation (and therefore animation) of these values is not yet supported.
- Our still experimental grid implementation has been updated:

  - {{cssxref("align-content")}}: `normal` behaves now as `stretch` for grid containers ({{bug(1237754)}}).
  - The order of column/row values for {{cssxref('grid')}}, {{cssxref('grid-template')}}, and `grid-gap` properties has been swapped ({{bug(1251999)}}).

- The {{cssxref("@media/display-mode", "display-mode")}} media feature is now supported ({{bug("1104916")}}).
- The value `true` of {{cssxref("text-align")}} and {{cssxref("text-align-last")}} has been renamed to `unsafe` ({{bug("1250342")}}).

### JavaScript

- The new ES2017 {{jsxref("Object.values()")}} and {{jsxref("Object.entries()")}} methods have been implemented ({{bug(1232639)}}).
- The deprecated [old Proxy API](/en-US/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` and `Proxy.createFunction`) now presents a deprecation warning in the console and will be removed in a future version. Use the standard {{jsxref("Proxy")}} object instead ({{bug(892903)}}).
- Support for the deprecated non-standard `flags` argument of `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} has been dropped in non-release builds ({{bug(1245801)}}).
- As per the new ES2016 specification, the {{jsxref("Proxy")}} [enumerate](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate) trap for [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) statements has been removed ({{bug(1246318)}}).
- The {{jsxref("Array.prototype.indexOf()")}} and {{jsxref("Array.prototype.lastIndexOf()")}} methods (and their {{jsxref("TypedArray")}} equivalents) have been updated to never return `-0` as per the ECMAScript specification ({{bug(1242043)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- The property {{domxref("Document.scrollingElement")}} has been implemented behind the pref `dom.document.scrollingElement.enabled` that defaults to `false` ({{bug(1153322)}}).

#### WebGL

_No change._

#### IndexedDB

- The {{domxref("IDBKeyRange.includes()")}} method has been implemented ({{bug("1251498")}}).

#### Service Worker and related APIs

- The {{domxref("Request.Request()")}} constructor can now accept a referrer option in its init object ({{bug(1251448)}}).
- The {{domxref("Request.referrerPolicy")}} property is now supported ({{bug(1251872)}}).
- [Service workers](/en-US/docs/Web/API/Service_Worker_API) and [Push](/en-US/docs/Web/API/Push_API) have been disabled in the [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR) ({{bug(1232029)}}).

#### WebRTC

- Support for the {{domxref("RTCIceServer")}} dictionary has been updated in keeping with revisions to the WebGL 1.0 specification by adding support for the {{domxref("RTCIceServer.credentialType", "credentialType")}} property. This property is a string which specifies whether the credential is a password or a token. Currently, Firefox only supports `"password"`.

#### New APIs

_No change._

#### Others

- {{domxref("Cache.add()")}} and {{domxref("Cache.addAll()")}} now raises a `TypeError` exception if the response status is not in the `200` range ({{bug(1244764)}}).
- The [App installation and management APIs](/en-US/docs/Mozilla/Firefox_OS/API/App_installation_and_management_APIs) (`navigator.mozApps.*`) are no longer exposed to non-Firefox OS platforms ({{bug("1238576")}}).
- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) methods can now use the RSA-PSS cryptographic algorithm ({{bug (1191936)}}).
- The [Permissions API](/en-US/docs/Web/API/Permissions_API) has had the {{domxref("Permissions.revoke()")}} method added ({{bug("1197461")}}).
- The [Browser API](/en-US/docs/Web/API/Browser_API), which extends the functionality of {{htmlelement("iframe")}}s to allow the creation of frames for displaying web content using HTML — and was previously only available in Firefox OS — is now available to desktop chrome code too ({{bug(1238160)}}).
- The [Notification API](/en-US/docs/Web/API/Notification)'s {{domxref("Notification.requestPermission()","requestPermission()")}} method has been updated from a callback to a promised-based syntax ({{bug(1241278)}}).
- The [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) has been updated to the latest spec and unprefixed. Some methods have been renamed or have seen their capitalization changed ({{bug(743198)}}). Note that this is behind the `full-screen-api.unprefix.enabled` preference, defaulting to false ({{bug(1268749)}}).

### Audio/Video

- Now WAV file with u-law compression encoding can be played({{bug(851530)}}).
- [Widevine](https://www.widevine.com/) Content Decryption Module provided by Google Inc. is available via the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) for use with MP4 (only; see {{bug(1257716)}} for EME-with-WebM support) on Windows Vista and later and on Mac OS X enabling migration off Silverlight ({{bug(1265270)}}).

## HTTP

- The default value of the {{HTTPHeader("Accept")}} header for images is now `*/*` instead of `image/png,image/*;q=0.8,*/*;q=0.5` ({{bug(1249474)}}).

## Networking

_No change._

## Security

- URL with the `view-source:` protocol don't open the [View Source](/en-US/docs/Tools/View_source) tool anymore when used from a Web page ({{bug(1172165)}}).
- The Firefox [click-to-activate plugin whitelist](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) has been removed: only Flash doesn't need to be clicked to be activated ({{bug(1263630)}}).

## Changes for add-on and Mozilla developers

### Interfaces

- The CSS tokenizer is now available in JavaScript for add-ons ({{bug(1152033)}}).

### FUEL

The [FUEL](/en-US/docs/Mozilla/Tech/Toolkit_API/FUEL) JavaScript library, introduced back in Firefox 3, **has been removed**. This library was designed to aid in add-on development and with the introduction of the [Add-on SDK](/en-US/docs/Mozilla/Add-ons/SDK) and, now, by [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions) support, is no longer useful. ({{bug(1090880)}})

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Other

_No change._

## Older versions

{{Firefox_for_developers(46)}}
