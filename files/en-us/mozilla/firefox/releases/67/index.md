---
title: Firefox 67 for developers
slug: Mozilla/Firefox/Releases/67
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 67 that will affect developers. Firefox 67 was released on May 21, 2019.

## Changes for web developers

### Developer tools

- Debugger updates:

  - [Column breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) allow you to select the specific point (or column) in a line of code where you want the debugger to break ([Firefox bug 1528417](https://bugzil.la/1528417)).
  - [Log points](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) allow you to log specific information to the console during code execution without pausing execution and without the need to change the code.
  - The [map scopes feature](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) allows you to view the variables from the original source.
  - You can [debug worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) threads directly in the debugger.

- [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) updates:

  - Navigate details in the console using the keyboard ([Firefox bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K will now clear the console of its contents on macOS ([Firefox bug 1532939](https://bugzil.la/1532939)).
  - When the user clears the console, the error messages cache is cleared as well ([Firefox bug 717611](https://bugzil.la/717611)).
  - The user can import existing modules into the current page using import ([Firefox bug 1517546](https://bugzil.la/1517546)).
  - A new context menu item allows the user to use the **Copy Link Location** command ([Firefox bug 1457111](https://bugzil.la/1457111)).
  - Clicking a link in the Console causes the same behavior that it would in a content window ([Firefox bug 1466040](https://bugzil.la/1466040)).
  - Clicking the source link for a code file in the Console panel navigates to the Debugger if debugger knows the file ([Firefox bug 1447244](https://bugzil.la/1447244)).
  - When the user has filtered the contents of the console, an icon will be added to the filter text box to clear the filter ([Firefox bug 1525821](https://bugzil.la/1525821)).

- [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enhancements:

  - The [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) panel of the Network monitor will now display a notification for resources belonging to a known tracker ([Firefox bug 1485416](https://bugzil.la/1485416)).
  - In the Network monitor [request columns](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns), you can control the visible columns and column sorting. The context menu now includes a command to restore the list sort parameters to the default ([Firefox bug 1454962](https://bugzil.la/1454962)).
  - You can change the [width of the columns](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) in the Network Monitor to suit your workflow ([Firefox bug 1358414](https://bugzil.la/1358414)).

#### Removals

- The following Developer Tools panels have been removed (see [Deprecated tools](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) for details):

  - Canvas debugger ([Firefox bug 1403938](https://bugzil.la/1403938)).
  - Shader editor ([Firefox bug 1342237](https://bugzil.la/1342237)).
  - WebAudio editor ([Firefox bug 1403944](https://bugzil.la/1403944)).

- The following Developer Tools have been deprecated (see [Deprecated tools](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) for details):

  - WebIDE ([Firefox bug 1539462](https://bugzil.la/1539462)).
  - Connect… page ([Firefox bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}} elements with `autocomplete="new-password"` set on them will no longer have previously saved passwords auto-filled ([Firefox bug 1119063](https://bugzil.la/1119063)).

### CSS

- The {{cssxref("revert")}} keyword has been implemented ([Firefox bug 1215878](https://bugzil.la/1215878)).
- The `break-word` value of the {{cssxref("word-break")}} property is now supported ([Firefox bug 1296042](https://bugzil.la/1296042)).
- The [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature is now supported ([Firefox bug 1494034](https://bugzil.la/1494034)).
- Custom {{cssxref("cursor")}}s of greater than 32px in size are now disallowed, to mitigate potential malware uses of large cursors ([Firefox bug 1445844](https://bugzil.la/1445844)).

#### Removals

- Use of the proprietary `-moz-binding` property is now restricted to chrome and UA-stylesheets ([Firefox bug 1523712](https://bugzil.la/1523712)).

### SVG

_No changes._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} has been implemented and enabled by default ([Firefox bug 1435829](https://bugzil.la/1435829), [Firefox bug 1531830](https://bugzil.la/1531830)).
- Support for the dynamic module {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} proposal is now available by default ([Firefox bug 1517546](https://bugzil.la/1517546)).
- The [hashbang grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) proposal is now implemented ([Firefox bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- The default value for {{domxref("Response.statusText")}} is now `""` ([Firefox bug 1508996](https://bugzil.la/1508996)).
- User gestures are now preserved for rejected calls to {{domxref("Document.requestStorageAccess")}}, as well as fulfilled calls ([Firefox bug 1522912](https://bugzil.la/1522912)).

#### DOM events

- CSS transition ([Firefox bug 1530239](https://bugzil.la/1530239)) and animation ([Firefox bug 1531605](https://bugzil.la/1531605)) events now fire on disabled (e.g. form) elements.
- {{domxref("InputEvent.data")}} and {{domxref("InputEvent.dataTransfer")}} have been implemented ([Firefox bug 998941](https://bugzil.la/998941)).
- The `insertFromPasteAsQuotation` {{domxref("InputEvent.inputType")}} value is now supported ([Firefox bug 1532527](https://bugzil.la/1532527)).

#### Workers/Service workers

- Strict MIME type checks are now enforced on scripts imported by {{domxref("WorkerGlobalScope.importScripts()")}} ([Firefox bug 1514680](https://bugzil.la/1514680)).

#### Media, Web Audio, and WebRTC

- The [AV1 video codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#av1) is now supported on Linux.
- [dav1d](https://code.videolan.org/videolan/dav1d) is now the default media decoder for [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (see for example [Firefox bug 1533742](https://bugzil.la/1533742) and [Firefox bug 1535038](https://bugzil.la/1535038)).
- Calling {{domxref("RTCPeerConnection.addTrack()")}} without specifying any streams to which to add the new track now works as expected: it adds a streamless track to the connection. Each peer is responsible for managing the association between the track and any stream on its end ([Firefox bug 1231414](https://bugzil.la/1231414)).
- The {{domxref("MediaDeviceInfo.groupId")}} property is now implemented ([Firefox bug 1213453](https://bugzil.la/1213453)). While it has existed in Firefox since Firefox 39, it did not actually gather related devices together into the same group IDs.
- The {{domxref("RTCIceCandidate.usernameFragment")}} property is now implemented ([Firefox bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/en-US/docs/Web/API/WebVTT_API) has been revised to correctly use `auto` as the default for the {{domxref("VTTCue")}} object's {{domxref("VTTCue.positionAlign", "positionAlign")}} property, instead of `center`. This causes the cue box's alignment to correspond to the alignment of the text within it ([Firefox bug 1528420](https://bugzil.la/1528420)).

#### Canvas and WebGL

- The [`EXT_float_blend`](/en-US/docs/Web/API/EXT_float_blend) WebGL extension has been enabled by default ([Firefox bug 1535808](https://bugzil.la/1535808)).

#### Removals

- The deprecated `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS`, and `ShadowRoot.getElementsByClassName` properties (part of Shadow DOM v0) have been removed ([Firefox bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/en-US/docs/Web/API/Document/createEvent), {{domxref("document.createTouch()")}}, {{domxref("document.createTouchList()")}}, and the `ontouch*` event handler properties have been disabled on desktop to improve web compatibility on websites where touch support is used for mobile detection ([Firefox bug 1412485](https://bugzil.la/1412485)). In such cases, websites have been seen to behave incorrectly or unexpectedly on touchscreen laptops.

### Security

- [Notifications](/en-US/docs/Web/API/Notifications_API) are now only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts) ([Firefox bug 1429432](https://bugzil.la/1429432)).
- Firefox now blocks the loading of external protocol URLs in {{htmlelement("iframe")}}s ([Firefox bug 1527882](https://bugzil.la/1527882)).

### WebDriver conformance (Marionette)

#### API changes

- Made `WebDriver:SendAlertText` conformant to the [WebDriver specification](https://w3c.github.io/webdriver/) ([Firefox bug 1502360](https://bugzil.la/1502360)).

#### Bug fixes

- `WebDriver:NewWindow` will no longer timeout because inconsistencies across platforms regarding the `focus` event ([Firefox bug 1523234](https://bugzil.la/1523234)).

#### Others

- Both `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` now use `Promises` internally ([Firefox bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` returns Firefox's `BuildID` string as part of the capabilities object ([Firefox bug 1525829](https://bugzil.la/1525829)).

## Changes for add-on developers

### API changes

- Using the `proxy.settings.set()` method to change `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}` values will throw an exception unless the extension was granted private window access by the user ([Firefox bug 1525447](https://bugzil.la/1525447)).

### Manifest changes

- A new manifest key, [incognito](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), defines the behavior of an extension in private browsing windows or tabs ([Firefox bug 1511636](https://bugzil.la/1511636)).
- The `toolbar_field_highlight` setting controls the background color used to indicate the current selection of text in the URL bar ([Firefox bug 1450114](https://bugzil.la/1450114)).
- The `toolbar_field_highlight_text` setting controls the text color used to indicate the current selection of text in the URL bar ([Firefox bug 1450114](https://bugzil.la/1450114)).

## See also

- Hacks release post: [Firefox 67: Dark Mode CSS, WebRender, and more](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Older versions

{{Firefox_for_developers}}
