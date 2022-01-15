---
title: Firefox 70 for developers
slug: Mozilla/Firefox/Releases/70
tags:
  - '70'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 70 that will affect developers. Firefox 70 was released on October 22, 2019.

## Changes for web developers

### Developer tools

#### Debugger updates

- In the [Debugger](/en-US/docs/Tools/Debugger) you can now set breakpoints for [DOM Mutation](/en-US/docs/Tools/Debugger/Break_on_DOM_mutation), so execution will pause when a node or its attributes are changed or when a node is removed from the DOM ({{bug(1576219)}}).
- The Debugger now shows an overlay on the page when it is paused, with basic stepping buttons to let you step and continue ({{bug(1574646)}}).
- The Debugger now shows sources that already got discarded by the engine (usually scripts that execute once during page load), so you can properly set breakpoints to debug when they execute next ({{bug(1572280)}}).
- The Debugger's [scopes panel](/en-US/docs/Tools/Debugger/Using_the_Debugger_map_scopes_feature) grouping has been simplified, consolidating additional scopes previously shown above the top level function (e.g. blocks created by [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with), or [`if`/`else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)) ({{bug(1448166)}})
- The Debugger now retains the currently selected and expanded variables in the [scopes panel](/en-US/docs/Tools/Debugger/Using_the_Debugger_map_scopes_feature) while stepping ({{bug(1405402)}}).
- The Debugger now handles stepping over async functions correctly, making [asynchronous function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) debugging easier ({{bug(1570178)}}).
- When debugging in [Container sessions](https://support.mozilla.org/en-US/kb/containers) (useful for testing different logins), the sources in the debugger are now shown correctly ({{bug(1375036)}}).
- [`debugger`](/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statements can be now disabled in the Debugger by setting a breakpoint on them and switching the breakpoints to "Never pause here" ({{bug(925269)}}).
- WebExtensions developers can inspect `browser.storage.local` from the Extension Storage item under the Storage tab ({{bug(1585499)}}).

#### Other updates

- An icon will be displayed next to inactive CSS properties in the [Rules view](/en-US/docs/Tools/Page_Inspector/UI_Tour#rules_view) of the [Page Inspector](/en-US/docs/Tools/Page_Inspector), which you can hover over to get information on why it is inactive ({{bug(1306054)}}).
- In the [CSS Rules view](/en-US/docs/Tools/Page_Inspector/UI_Tour#rules_view), the [color picker](/en-US/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors) on foreground colors now tells you whether its contrast with the background color meets accessibility conformance criteria ({{bug(1478156)}}).
- The [Accessibility inspector](/en-US/docs/Tools/Accessibility_inspector)'s [Check for issues](/en-US/docs/Tools/Accessibility_inspector#check_for_accessibility_issues) dropdown now includes keyboard accessibility checks ({{bug(1564968)}}).

### HTML

- Firefox can now suggest securely-generated passwords to the user in the following situations:

  - An {{HTMLelement("input")}} element has the `autocomplete="new-password"` attribute value.
  - The user opens the context menu on any password input element, even if it is not intended for new passwords.

### CSS

- Opacity values like for {{cssxref("opacity")}} or {{SVGAttr("stop-opacity")}} can now be percentages ({{Bug(1562086)}}).
- {{cssxref("grid-auto-columns")}} and {{cssxref("grid-auto-rows")}} now accept multiple track-size values ({{Bug(1339672)}}).
- A number of text-related CSS properties have been enabled by default ({{bug(1573631)}}):

  - {{cssxref("text-decoration-thickness")}}.
  - {{cssxref("text-underline-offset")}}.
  - {{cssxref("text-decoration-skip-ink")}}. The default value is `auto`, which means that by default underlines and overlines are now interrupted where they would otherwise cross over a {{Glossary("glyph")}}.

- The {{cssxref("display")}} property now accepts two keyword values representing the inner and outer display type ({{Bug(1038294)}}, {{Bug(1105868)}} and {{Bug(1557825)}}).
- The {{cssxref("font-size")}} property now accepts the new keyword value `xxx-large`. ({{Bug(1553545)}}).
- The {{cssxref(":visited")}} pseudo-class no longer matches {{htmlelement("link")}} elements, for logic and performance reasons ({{bug(1572246)}}; see [Intent to ship: Make \<link> elements always unvisited](https://groups.google.com/forum/#!msg/mozilla.dev.platform/1NP6oJzK6zg/ftAz_TajAAAJ) and [\[selectors\] :link and \<link>](https://github.com/w3c/csswg-drafts/issues/3817) for more reasoning as to why).
- We now support an `auto` value for the {{cssxref("quotes")}} property ({{bug(1421938)}}).
- Stylesheets contained in {{htmlelement("style")}} elements are now cached for reuse, to improve performance ({{bug(1480146)}}). Note that this currently doesn't include stylesheets that contain `@import` rules.
- The `<ratio>` type now accepts `<number>/<number>` or a single `<number>` as a value. ({{bug(1565562)}}).

#### Removals

- We have retired support for 3-valued \<position> (excluding background)({{Bug(1559276)}}).
- The `none` value is now invalid in {{cssxref("counter()")}} / {{cssxref("counters()")}} — a change which makes the Level 3 spec match CSS 2.1 {{Bug(1576821)}}).

### SVG

- Cut, copy, and paste events are now dispatched to SVG graphics elements ({{bug(1569474)}}).

### MathML

- The deprecated `mode` attribute on {{MathMLElement("math")}} elements has been removed ({{bug(1573438)}}).
- Non-zero unitless length values, such as `5` for `500%`, are no longer supported.
- Length values ending with a dot, such as `2.` or `34.px`, are also unsupported now.

### JavaScript

- [Numeric separators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) are now supported ({{Bug(1435818)}}).
- The {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.formatToParts()")}} method has been implemented ({{bug(1473229)}}).
- The {{jsxref("BigInt.prototype.toLocaleString()")}} method has been updated to work with the `locales` and `options` parameters per the ECMAScript 402 Intl API. Also, {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.format()")}} and {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.formatToParts()")}} now accept {{jsxref("BigInt")}} values ({{bug(1543677)}}).
- Per the latest ECMAScript specification, a leading zero is now never allowed for [BigInt literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#bigint_literal), making `08n` and `09n` invalid similar to the existing error when legacy octal numbers like `07n` are used. Always use a leading zero with the letter "o" (lowercase or uppercase) for octal `BigInt` numbers (i.e. `0o755n` instead of `0755n`). See {{bug(1568619)}}.
- The Unicode extension key "nu" is now supported for the {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} constructor and the {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.resolvedOptions()")}} method now also returns `numberingSystem` ({{bug(1521819)}}).

### APIs

#### DOM

- The {{domxref("History.back","back()")}}, {{domxref("History.forward","forward()")}}, and {{domxref("History.go","go()")}} methods are now asynchronous. Add a listener to the `{{domxref("Window/popstate_event", "popstate")}}` event to get notification that navigation has completed {{Bug(1563587)}}.
- We've added support {{DOMxRef("DOMMatrix")}}, {{DOMxRef("DOMPoint")}}, etc. in web workers ({{bug(1420580)}}).
- A few more members have been moved from {{domxref("HTMLDocument")}} to {{domxref("Document")}}, including  {{domxref("Document.all")}}, {{domxref("Document.clear")}}, {{domxref("Document.captureEvents")}}, and {{domxref("Document.clearEvents")}} ({{bug(1558570)}}, {{bug(1558571)}}).
- [Notification](/en-US/docs/Web/API/Notifications_API) permission can no longer be requested from inside a cross-origin {{htmlelement("iframe")}} ({{bug(1560741)}}).

#### Media, Web Audio, and WebRTC

- The {{domxref("RTCPeerConnection.restartIce()")}} method has been added. This is one of the four changes needed to implement the new "perfect negotiation" mechanism; the rest will come in future Firefox updates ({{bug(1551316)}}).
- The {{domxref("RTCPeerConnection.setRemoteDescription()")}} method can now be called with no parameters. This is another "perfect negotiation" update ({{bug(1568292)}}).
- {{domxref("MediaTrackSupportedConstraints.groupId")}} is now supported, and returns `true` since the {{domxref("MediaTrackConstraints.groupId")}} property is now supported ({{bug(1561254)}}).
- Several new Web Audio API features have been implemented/updated:

  - {{domxref("AudioContext.getOutputTimestamp()")}} implemented ({{bug(1324545)}}).
  - {{domxref("AudioContext.baseLatency")}} and {{domxref("AudioContext.outputLatency")}} implemented ({{bug(1324552)}}).
  - {{domxref("MediaElementAudioSourceNode.mediaElement")}} and {{domxref("MediaStreamAudioSourceNode.mediaStream")}} implemented ({{bug(1350973)}}).
  - The {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}} constructor now throws errors if you try to set `channelCount` and `channelCountMode` to invalid values ({{bug(1456263)}}).

#### Canvas and WebGL

- We now support {{domxref("CanvasRenderingContext2D.getTransform()")}}, and the newer variant of {{domxref("CanvasRenderingContext2D.setTransform()")}} that accepts a matrix object as a parameter rather than multiple parameters representing the individual components of the matrix ({{bug(928150)}}).

### HTTP

- The default referrer policy for third-party tracking resources is now `strict-origin-when-cross-origin` when [Enhanced Tracking Protection](/en-US/docs/Mozilla/Firefox/Privacy/Tracking_Protection) is turned on ({{bug(1569996)}}).
- The size of the {{httpheader("Referer")}} request header is now limited to 4 KB (4,096 bytes). If an overly long referer exceeds the defined limit, only the origin part will be sent ({{bug(1557346)}}).
- The [HTTP cache](/en-US/docs/Web/HTTP/Caching) is now partitioned per the top-level document's origin ({{bug(1536058)}}).

#### Removals

- The {{HTTPHeader("X-Frame-Options")}} `allow-from uri` directive has been removed. Use the {{HTTPHeader("Content-Security-Policy")}} header with the {{CSP("frame-ancestors")}} directive instead ({{bug(1301529)}}).

### WebDriver conformance (Marionette)

- Updated the `WebDriver:TakeScreenshot` command to be [Fission](https://wiki.mozilla.org/Project_Fission) compatible. It means that content from [cross-origin](/en-US/docs/Web/Security/Same-origin_policy) iframes is now included in a page's screenshot. Or when using it from chrome scope that the active tab's content is visible now inside the browser window. ({{bug(1559592)}}).
- `WebDriver:TakeScreenshot` no longer accepts a list of DOM elements as used for highlighting ({{bug(1575511)}}).
- `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` no longer sets `window.onunload` in ways that are web-exposed ({{bug(1568991)}}).

## Changes for add-on developers

### API changes

- Added a new parameter to the [`topSites.get()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) method that causes the method to return the list of pages that appear when the user opens a new tab ({{bug(1568617)}}).
- The [`privacy.network`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network) property's `WebRTCIPHandlingPolicy` sub-property's permitted values have been amended (in {{bug(1452713)}}) to match the behavior seen in Chrome as follows:

  - `disable_non_proxied_udp` previously prevented the use of WebRTC if no proxy was configured. Now a proxy is always used if one is configured, but otherwise a non-proxied connection is permitted.
  - `proxy_only` can be used to provide the old behavior; this has the effect of only allowing ICE negotiation over TURN on TCP using a proxy; no other connections are allowed.

### Manifest changes

#### Removals

The following [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) key properties, which provided aliases for theme keys used in chromium-based browsers, were removed:

- `images` property `headerURL`, themes should now use `theme_frame`.
- `colors` properties:

  - `accentcolor`, themes should now use `frame`.
  - `textcolor`, themes should now use `tab_background_text`.

## See also

- Hacks release post: [Firefox 70 — a bountiful release for all](https://hacks.mozilla.org/2019/10/firefox-70-a-bountiful-release-for-all/)

## Older versions

{{Firefox_for_developers(69)}}
