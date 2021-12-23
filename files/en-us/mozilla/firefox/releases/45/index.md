---
title: Firefox 45 for developers
slug: Mozilla/Firefox/Releases/45
tags:
  - Firefox
---
{{FirefoxSidebar}}

To test the latest developer features of Firefox, install Firefox Developer Edition Firefox 45 was released on March 8, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Full-text search in the Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#searching)
- [Heap snapshot diffing in the Memory tool](/en-US/docs/Tools/Memory/Basic_operations#comparing_snapshots)
- [DomContentLoaded and load events shown in the Network Monitor](/en-US/docs/Tools/Network_Monitor#timeline)
- [Animation inspector improvements](/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations)

[All devtools bugs fixed between Firefox 43 and Firefox 44.](https://bugzilla.mozilla.org/buglist.cgi?bug_status=RESOLVED&bug_status=VERIFIED&chfield=resolution&chfieldfrom=2015-10-29&chfieldto=2015-12-14&chfieldvalue=FIXED&classification=Client%20Software&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&resolution=FIXED&list_id=12753878)

### HTML

- Content Security Policy can now be set directly on the {{HTMLElement("meta")}} element ({{bug(663570)}}).
- The attribute `referrer` has been renamed `referrerpolicy` on {{HTMLElement("img")}}, {{HTMLElement("area")}}, {{HTMLElement("a")}}, and {{HTMLElement("iframe")}} ({{bug(1187357)}}).
- Changes in the viewport, or a resize, now trigger the reselection of responsive images for `<img srcset>` ({{bug(1166138)}}).

### CSS

- {{cssxref("word-spacing")}} now allows percentage values ({{bug(1038663)}}).
- Our implementation of CSS Grids has been improved and is no more considered experimental; it is now activated by default in nightly and developer edition, but not for beta and release ({{bug(1000592)}}):

  - Gutters, that is the `grid-column-gap`, `grid-row-gap`, and `grid-gap` properties are now supported ({{bug(1176792)}}).
  - The implied minimum size of grid Items, that is the special {{cssxref("min-width")}} and {{cssxref("min-height")}} `auto` behavior has been implemented ({{bug(1176775)}}).
  - {{cssxref("align-self")}} and {{cssxref("justify-self")}} are now supported on grid layouts ({{bug(1151213)}}).
  - {{cssxref("align-content")}} and {{cssxref("justify-content")}} are now supported on grid layouts ({{bug(1151214)}}).
  - Resolved value of grid-template-columns,grid-template-rows in px units ({{bug(978212)}}).
  - The related feature {{cssxref("display")}}: contents has been supported since [Firefox 37](/en-US/docs/Mozilla/Firefox/Releases/37)

- Implement full support for CSS Box Alignment for CSS Grid, support the missing values: `start,` `end,` `self-start,` `self-end,` `left,` `right,last-baseline,space-evenly`({{bug(1176782)}}).  CSS Box Alignment currently applies only to CSS Flexbox and CSS Grid.
- \[css-grid]\[css-flexbox] Implement grid/flex layout for \<fieldset> ({{bug(1230207)}}).
- The `inline-start` and `inline-end` values have been added to {{cssxref("float")}} and {{cssxref("clear")}} ({{bug(1122918)}}). They are enabled by default on Nightly and Aurora (Dev edition), as well as on Firefox OS; to activate it on a release or beta version, you need to flip the `layout.css.float-logical-values.enabled` to `true`.
- The {{cssxref("text-emphasis")}}, {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, and {{cssxref("text-emphasis-position")}} have been implemented; they are disabled by default (set `layout.css.text-emphasis.enabled`  to true to activate them ({{bug(1040668)}}).
- Several `-webkit` prefixed properties and values have been added for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false`:

  - Added `-webkit-backface-visibility`, `-webkit-perspective` and `-webkit-perspective-origin` for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false` ({{bug(1179444)}}).

### JavaScript

- ES2015 [Classes](/en-US/docs/Web/JavaScript/Reference/Classes) are now enabled by default ({{bug(1197932)}}).
- {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}} are deprecated and will now present a warning in the console ({{bug(995610)}}).
- {{jsxref("String.prototype.replace")}} does not restore {{jsxref("Global_Objects/RegExp/n", "RegExp static properties", "", 1)}} after executing function parameter anymore ({{bug(1226936)}}).
- {{jsxref("Math.random()")}} has been updated to the better XorShift128+ algorithm ({{bug(322529)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- For compatibility, the non-standard property [`Node.innerText`](/en-US/docs/Web/API/HTMLElement/innerText) has been implemented ({{bug(264412)}}).
- The {{domxref("HTMLImageElement.srcset")}} attribute now reacts to resize/viewport changes ({{bug(1166138)}}).
- {{domxref("Element.getAttributeNames()")}} has been implemented ({{bug(1228634)}}).

#### WebGL

Our implementation of WebGL 2 has been extended:

- Support of programs and shaders has been added ({{bug(1048743)}}).
- Support for uniforms and attributes has been added ({{bug(1048745)}}).
- Framebuffer objects have been implemented ({{bug(1048732)}}).
- Renderbuffer objects have been implemented ({{bug(1048733)}}).

#### IndexedDB

_No change._

#### Service Workers

- {{domxref("Clients.get()")}} and {{domxref("FetchEvent.clientId")}} have been implemented ({{bug(1222464)}}.)
- {{domxref("Clients.openWindow()")}} has been implemented ({{bug(1172870)}}.)
- The options object that can be passed as a parameter when invoking {{domxref("Clients.matchAll()")}} can now include an `includeUncontrolled` property. This is a boolean value — if set to `true`, the matching operation will return all service worker clients who share the same origin as the current service worker. Otherwise, it returns only the service worker clients controlled by the current service worker. The default is `false`.

#### WebRTC

_No change._

#### New APIs

_No change._

#### Miscellaneous

- [Web Speech Synthesis API](/en-US/docs/Web/API/Web_Speech_API) has been implemented on Firefox Desktop ({{bug(1003439)}}).
- The {{domxref("WindowEventHandlers/onstorage", "Window.onstorage")}} event handler property has been added.
- The interface {{domxref("ComputedTiming")}} have been added to our experimental implementation of [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) ({{bug(1108055)}}).
- The {{domxref("GlobalEventHandlers/onselectionchange", "Document.onselectionchange")}} event handler property has been added ({{bug(1231193)}}).
- After removing a video track from a media stream by calling {{domxref("MediaStream.removeTrack()")}} you can nowadd another video track later using {{domxref("MediaStream.addTrack()")}} and have it played ({{bug(1223696)}}).

### MathML

_No change._

### SVG

- SVG stroke hit-testing is buggy when cairo is the Moz2D backend ({{bug(676001)}}).
- Unable to interact with elements who have large transform / translate values ({{bug(1217012)}}).

### Audio/Video

- Fixed: Regression (since Firefox 41) whereby audio playback was stuttering due to duration time rounding errors ({{bug(1222866)}}.)

## HTTP

- The `jar:` protocol has been disabled by default when accessed from Web content; you may enable this if necessary by setting the {{pref("network.jar.block-remote-files")}} preference to `false` ({{bug(1215235)}}).

## Security

- A {{HTTPHeader("Content-Security-Policy")}} can now be specified using a {{HTMLElement("meta")}} element ({{bug(663570)}}).
- Support of the {{CSP("child-src")}} CSP policy directive has been implemented ({{bug(1045891)}}).
- EV certificates with a validity greater than 27 months are now considered and handled as DV certificates ({{bug(1222903)}}).

## Changes for add-on and Mozilla developers

### Interfaces

_No change._

### XUL

- Tab Groups [have been removed](https://support.mozilla.org/kb/tab-groups-removal).

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Search plugins

Starting in Firefox 45, search plugins located in the user's profile's `searchplugins` directory are no longer automatically loaded on startup. Instead, a list of user-installed plugins is maintained and only those plugins are loaded. In effect, this means that the only ways to install new search plugins are for the user to do so in the Firefox UX (via [OpenSearch discovery](/en-US/docs/Mozilla/Add-ons/Creating_OpenSearch_plugins_for_Firefox), for instance) or for an add-on to install it. Also, when a new search plugin is installed, more information is recorded about where it came from, for future use by profile debugging and cleaning tools.

### Other

- WebIDL constructors could be called without the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator in chrome context.  Now such code will raise a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) as in Web content since Firefox 30. For example, `var req = XMLHttpRequest();` needs to be `var req = new XMLHttpRequest();`.

## Older versions

{{Firefox_for_developers(44)}}
