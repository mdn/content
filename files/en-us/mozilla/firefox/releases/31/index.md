---
title: Firefox 31 for developers
slug: Mozilla/Firefox/Releases/31
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### Developer Tools

Highlights:

- [Eyedropper tool to select colors in web pages](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [full stack traces for console error messages](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [editable Box Model View](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [%c formatting to style console messages](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- ["copy as cURL" command in Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Sublime Text keybindings in the source editor](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option to make Network Monitor logs persistent](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [JavaScript warnings on by default in the Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+click to expand all descendants of a node](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[All devtools bugs fixed between Firefox 30 and Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Changed `var-` prefix of CSS Variables to `--` to reflect the final spec change ([Firefox bug 985838](https://bugzil.la/985838)).
- The {{cssxref("hyphens")}} property now support Polish hyphenation rules ([Firefox bug 987668](https://bugzil.la/987668)).
- Removed an unwanted white space for multiple of 10,000 in Korean counter styles ([Firefox bug 985186](https://bugzil.la/985186)).
- CSS opacity transition broken with parent pseudo :before and overflow auto ([Firefox bug 990340](https://bugzil.la/990340)).
- The `::-moz-math-stretchy` pseudo-element has been removed ([Firefox bug 1000879](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} has been implemented ([Firefox bug 629350](https://bugzil.la/629350)).

### JavaScript

New ECMAScript 2015 features implemented:

- New `Array` built-in: {{jsxref("Array.prototype.fill()")}} ([Firefox bug 911147](https://bugzil.la/911147))
- New `Math` function: {{jsxref("Math.clz32()")}} ([Firefox bug 925123](https://bugzil.la/925123))
- New `String` built-in: {{jsxref("String.prototype.normalize()")}} is available in Firefox Desktop ([Firefox bug 918987](https://bugzil.la/918987)).
- New `Object` method {{jsxref("Object.setPrototypeOf()")}}.
- New `Number` constants: {{jsxref("Number.MAX_SAFE_INTEGER")}} and {{jsxref("Number.MIN_SAFE_INTEGER")}}.
- The ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}} trap have been implemented ([Firefox bug 978235](https://bugzil.la/978235)).

### Interfaces/APIs/DOM

- Constructor of `KeyboardEvent` has been implemented ([Firefox bug 930893](https://bugzil.la/930893)).
- The Resource Timing API has been implemented (see [Firefox bug 822480](https://bugzil.la/822480)).
- `KeyboardEvent.isComposing` attribute has been implemented ([Firefox bug 993234](https://bugzil.la/993234)).
- `InputEvent` interface has been implemented ([Firefox bug 993253](https://bugzil.la/993253)).
- `InputEvent.isComposing` attribute has been implemented ([Firefox bug 993253](https://bugzil.la/993253)).
- {{domxref("CSS.escape_static", "CSS.escape()")}} has been implemented ([Firefox bug 955860](https://bugzil.la/955860)).
- {{domxref("Element/mousemove_event", "mousemove")}} is now cancelable like in other browsers ([Firefox bug 704423](https://bugzil.la/704423)). Calling `preventDefault()` only sets `defaultPrevented` attribute to `true;` any other behaviors are not changed. E.g., it cannot prevent to set `:hover` state.
- The {{domxref("Path2D")}} interface has been implemented.
- The {{domxref("CanvasRenderingContext2D.isPointInPath()")}}, {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}, {{domxref("CanvasRenderingContext2D.clip()")}}, {{domxref("CanvasRenderingContext2D.fill()")}} and {{domxref("CanvasRenderingContext2D.stroke()")}} methods have been updated to optionally accept a {{domxref("Path2D")}} object.
- Implemented {{domxref("HTMLMediaElement.fastSeek()")}}.
- The `Connection` interface has been renamed to {{domxref("NetworkInformation")}} and has been modified to match the new specification ([Firefox bug 960426](https://bugzil.la/960426)).
- The {{domxref("Navigator.sendBeacon()")}} has been implemented; this allows asynchronous transmission of analytics or other data in a manner that doesn't rely on the transmitting page remaining loaded, so that it can be used in an {{domxref("Window/unload_event", "unload")}} or {{domxref("Window.beforeunload_event", "beforeunload")}} handler.

### MathML

- Partial implementation of the [OpenType MATH table](https://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition), section 6.3.6 ([Firefox bug 407059](https://bugzil.la/407059)). For details, try the [MathML torture test](/en-US/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- The `::-moz-math-stretchy` pseudo-element has been removed ([Firefox bug 1000879](https://bugzil.la/1000879)).
- When available, the Unicode Mathematical alphanumeric characters are used for bold, italic and bold-italic math variants ([Firefox bug 930504](https://bugzil.la/930504)).

### SVG

_No change._

### Audio/Video

_No change._

## Security

- [Privileged code now gets Xray vision for `Date` instances](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Changes for add-on and Mozilla developers

- The "`align`" attribute on the `urlbar-wrapper` (formerly on the `urlbar-container`) which was set to "`center`" since time immemorial, has been removed. This is known to affect third-party themes. You should look carefully at what the right fix is for your theme, but for maintaining the equivalent effect, you can add the following CSS rule to your theme:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` and `nsIDOMWindowUtils.sendSelectionSetEvent()` have `aAdditionalFlags` as optional argument. If you called `nsIDOMWindowUtils.sendSelectionSetEvent()` with `true` for `aReverse`, the behavior would be broken by this change. See [explanation of each flag](/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils#constants) (`QUERY_CONTENT_FLAG_*` and `SELECTION_SET_FLAG_*`) for the detail of `aAdditionalFlags`.

### Add-on SDK

Highlights:

- [Add-on Debugger](/en-US/docs/Mozilla/Add-ons/Add-on_Debugger)
- Added the ability to convert [between high-level BrowserWindow objects and DOM windows](/en-US/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#converting_to_dom_windows), and [between high-level Tab objects and XUL tabs](/en-US/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Updated the default theme used for panels on Mac OS X.
- Added [contentStyle and contentStyleFile](/en-US/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#styling_panel_content) options to panel.

[GitHub commits made between Firefox 30 and Firefox 31](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). This will not include any uplifts made after this release entered Aurora.

[Bugs fixed between Firefox 30 and Firefox 31](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). This will not include any uplifts made after this release entered Aurora.

### Older versions

{{Firefox_for_developers}}
