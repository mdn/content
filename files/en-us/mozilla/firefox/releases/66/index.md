---
title: Firefox 66 for developers
slug: Mozilla/Firefox/Releases/66
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 66 that will affect developers. Firefox 66 was released on March 19, 2019.

## Changes for web developers

### Developer tools

- JavaScript getters can now be executed from the auto-completion popup in the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ([Firefox bug 1499289](https://bugzil.la/1499289)).
- The Window methods {{domxref("Window.alert()", "alert()")}}, {{domxref("Window.prompt()","prompt()")}}, and {{domxref("Window.confirm()","confirm()")}} now work again in [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), after a period of being broken ([Firefox bug 1273997](https://bugzil.la/1273997)).
- You can copy the output of the console to the clipboard by right-clicking and selecting "**Export visible messages to clipboard**" from the context menu.

### HTML

- UTF-8-encoded HTML (and plain text) files loaded from `file:` URLs are now supported without `<meta charset="utf-8">` or the UTF-8 BOM, making it easier to work on such files locally before uploading them to a server. You still need to make sure that the server sends `charset=utf-8` in the `Content-Type` HTTP header for such files, otherwise the detection mechanism used for local files would break incremental loading in the network case ([Firefox bug 1071816](https://bugzil.la/1071816)).

#### Removals

- The `x-moz-errormessage` attribute has been removed from the {{HTMLElement("input")}} element ([Firefox bug 1513890](https://bugzil.la/1513890)). You should use the [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) API to implement custom validation messages instead.

### CSS

- [Scroll anchoring](https://drafts.csswg.org/css-scroll-anchoring/) has been implemented in Firefox Desktop (but not mobile yet), which includes the {{cssxref("overflow-anchor")}} property ([Firefox bug 1305957](https://bugzil.la/1305957)).
- We've implemented the case-sensitive [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) modifier, `s` ([Firefox bug 1512386](https://bugzil.la/1512386)).
- Several [logical property](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) shorthands have landed, along with the flow-relative border radius properties:

  - {{cssxref("padding-block")}} and {{cssxref("padding-inline")}} ([Firefox bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} and {{cssxref("margin-inline")}} ([Firefox bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}}, and {{cssxref("inset-inline")}} ([Firefox bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}}, and {{cssxref("border-inline-width")}} ([Firefox bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} and {{cssxref("border-inline")}} ([Firefox bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, and {{cssxref("border-end-end-radius")}} ([Firefox bug 1520684](https://bugzil.la/1520684)).

- We implemented the {{cssxref("@media/overflow-inline", "overflow-inline")}} and {{cssxref("@media/overflow-block", "overflow-block")}} media queries ([Firefox bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} are now animatable, as per the rules set out in their specs ([Firefox bug 1348519](https://bugzil.la/1348519)).
- We now support {{cssxref("calc", "calc()")}} with percentages for table cells and column widths ([Firefox bug 957915](https://bugzil.la/957915)).
- The `min-content` and `max-content` keywords are now available unprefixed ([Firefox bug 1322780](https://bugzil.la/1322780)). These can be set on:

  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("flex-basis")}}
  - {{cssxref("min-width")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-height")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}

### SVG

_No additions._

#### Removals

- We removed support for the `xml:base` attribute ([Firefox bug 903372](https://bugzil.la/903372)).

### JavaScript

No changes.

### APIs

#### New APIs/changes

- Autoplaying audio will be blocked by default soon after 66 becomes the release version of Firefox ([Firefox bug 1487844](https://bugzil.la/1487844), see [Firefox bug 1535667](https://bugzil.la/1535667) for rollout details). The feature will be rolled out gradually to users until everyone has it.

#### DOM

- The {{domxref("HTMLSlotElement.assignedElements()")}} method has been implemented ([Firefox bug 1425685](https://bugzil.la/1425685)).
- The {{domxref("TextEncoder.encodeInto()")}} method has been implemented ([Firefox bug 1514664](https://bugzil.la/1514664)).

#### DOM events

- The {{domxref("InputEvent.inputType")}} property has been implemented ([Firefox bug 1447239](https://bugzil.la/1447239)).
- The {{domxref("Window.event")}} and {{domxref("Event.returnValue")}} properties — originally proprietary IE features, then also supported across other browsers for compatibility purposes — have been re-introduced in Firefox 66, after first being added in versions 63 and 64 respectively but then removed again due to compatibility issues.
- From 66 onwards, when the {{domxref("KeyboardEvent.keyCode")}} property of the {{domxref("Element/keypress_event", "keypress")}} event object is 0, the value will be the same as {{domxref("KeyboardEvent.charCode")}}. Conversely, when `charCode` is 0, it will be the same as `keyCode`. This mirroring behavior matches other browsers and is expected to solve most associated compatibility issues, however user agent sniffing might cause further issues in some JavaScript libraries. Note that in spec terms, we've switched from the _split model_ to the _conflated model_ (see [How to determine keyCode for keypress events](https://w3c.github.io/uievents/#determine-keypress-keyCode) in the UI Event spec).

#### Media, Web Audio, and WebRTC

- The new [AV1 video codec](/en-US/docs/Web/Media/Formats/Video_codecs#av1) is now enabled by default on both macOS and Windows (for Intel processors). Linux support will come in Firefox 67 ([Firefox bug 1521181](https://bugzil.la/1521181), [Firefox bug 1452146](https://bugzil.la/1452146), and [Firefox bug 1534814](https://bugzil.la/1534814)).
- The {{domxref("MediaDevices")}} method {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, available as `navigator.mediaDevices.getDisplayMedia()`, has been added and synchronized with the specification. This method lets you capture a screen or part of a screen as a {{domxref("MediaStream")}} for manipulation or sharing ([Firefox bug 1321221](https://bugzil.la/1321221)).
- As a step toward eventually deprecating the Firefox-specific {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}-based method for capturing screen and window contents, the non-standard `mediaSource` constraint now treats the values `screen` and `window` identically. Both now present a list of both screens and windows for the user to choose from ([Firefox bug 1474376](https://bugzil.la/1474376)).
- `RTCOutboundRtpStreamStats.qpSum` has been added. This measures the total of the Quantization Parameter values for every frame sent or received on the video track. The higher this number, the more compressed the stream probably is ([Firefox bug 1347070](https://bugzil.la/1347070)).
- In a step along the road toward implementing support for Feature Policy in a future Firefox update, {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} can no longer be used in situations in which there is no proper origin for the content, such as when called from a sandboxed {{HTMLElement("iframe")}} or from a `data` URL entered into the address bar by the user. For more details, see the [Security](/en-US/docs/Web/API/MediaDevices/getUserMedia#security) section on the MediaDevices.getUserMedia() page ([Firefox bug 1371741](https://bugzil.la/1371741)).

#### Removals

- The legacy WebRTC `PeerConnection.getStats()` method has been removed, along with associated types ([Firefox bug 1328194](https://bugzil.la/1328194)).

### Networking

- The default value of the {{httpheader("Accept")}} header has been changed to `*/*` ([Firefox bug 1417463](https://bugzil.la/1417463)).

### Security

_No changes._

### Plugins

_No changes._

### WebDriver conformance (Marionette)

#### API changes

- `WebDriver:NewWindow` has been added to support opening of a new browsing context, which can be one of either window or tab ([Firefox bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` now raises a `no such element` error if the specified element isn't part of the current browsing context ([Firefox bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` no longer support the non-spec compliant `scriptTimeout` parameter. Instead, use `WebDriver:SetTimeout` or the `timeouts` capability to define this value ([Firefox bug 1510929](https://bugzil.la/1510929)).

  - In addition, indefinite script timeouts are now supported ([Firefox bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` no longer returns the window state in its response ([Firefox bug 1517587](https://bugzil.la/1517587)).

#### Bug fixes

- `WebDriver:TakeScreenshot` now uses the {{domxref("Element.clientWidth")}} and {{domxref("Element.clientHeight")}} properties of the {{domxref("Document.documentElement")}} instead of the viewport dimensions ([Firefox bug 1385706](https://bugzil.la/1385706)).
- Various fixes have been applied to make window manipulation commands more reliable across platforms ([Firefox bug 1522408](https://bugzil.la/1522408), [Firefox bug 1478358](https://bugzil.la/1478358), [Firefox bug 1489955](https://bugzil.la/1489955)).

## Changes for add-on developers

### API changes

#### Menus

- Extension menu items of the "bookmark" {{WebExtAPIRef("menus.ContextType", "type")}} will also appear in the Bookmarks sidebar (`Ctrl` + `B`) and Library window (`Ctrl` + `Shift` + `B`) ([Firefox bug 1419195](https://bugzil.la/1419195)).

### Manifest changes

_No changes._

## See also

- Hacks release post: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)

## Older versions

{{Firefox_for_developers}}
