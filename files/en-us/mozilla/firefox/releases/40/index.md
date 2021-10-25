---
title: Firefox 40 for developers
slug: Mozilla/Firefox/Releases/40
tags:
  - Firefox
  - Releases
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 40 was released on August 11, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Improvements to the Animations view](/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations#firefox_40)
- [Get help from MDN for CSS property syntax](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#get_help_for_css_properties)
- [Edit filters in the Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters)
- [Web Console now shows messages from workers](/en-US/docs/Tools/Web_Console#console_api_messages)
- [Filter requests by URL in the Network Monitor](/en-US/docs/Tools/Network_Monitor#filtering_by_url)
- [Many new context menu options in the Network Monitor](/en-US/docs/Tools/Network_Monitor#context_menu)
- [Show when network resources are fetched from the browser cache](/en-US/docs/Tools/Network_Monitor#network_request_fields)
- [Filter rules in the Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#filtering_rules)

More:

- [Break at debugger; statements in unnamed eval sources](/en-US/docs/Tools/Debugger/How_to/Debug_eval_sources)
- [Copy URL/Open in New Tab context menu items for Debugger source list pane](/en-US/docs/Tools/Debugger/UI_Tour#source_list_pane)
- [console.dirxml support in the Web Console](/en-US/docs/Tools/Web_Console#log_messages)
- [Style Editor: "Open Link In New Tab" item added to stylesheet list](/en-US/docs/Tools/Style_Editor#the_style_sheet_pane)
- [Inspector selector search now includes class/id results even without css prefix](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#searching)
- [Tooltips in box-model view saying which CSS rule caused the value](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#the_box_model_view)
- [Switch between color unit format in the Inspector using Shift+click](/en-US/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors)
- [Implement "Scroll Into View" menu item for the Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#element_popup_menu)
- [Linkify url/id/resource attributes in the Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#element_popup_menu)
- [IP address tooltip in the Network Monitor](/en-US/docs/Tools/Network_Monitor#network_request_fields)

Everything: [all devtools bugs fixed between Firefox 39 and Firefox 40](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Prefixed rules (`-moz-`) for {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, and {{cssxref("text-decoration-style")}} have been removed ({{bug(1097922)}}).
- The property {{cssxref("text-align")}} now supports the `match-parent` value ({{bug(645642)}}).
- In Quirks Mode, {{cssxref("empty-cells")}} now defaults to `show`, like in standard mode ({{bug(1020400)}}).
- The {{cssxref("-moz-orient")}} non-standard property, used to style {{HTMLElement('meter')}} and {{HTMLElement('progress')}} element has been adapted for vertical writing-modes: the value `auto` has been dropped and the values `inline` and  `block` added, with `inline` being the new default value ({{bug(1028716)}}).
- The property {{cssxref("font-size-adjust")}} has been fixed so that `0` is treated as a multiplier (leading to a `0` height for the font, hence hiding it) instead of the `none` value (leading to no adjustment, or a `1.0` value) ({{bug(1144885)}}).
- Fix text-overflow doesn't work in vertical writing mode ({{bug(1117227)}}).

### HTML

_No change._

### JavaScript

- Unreachable code after {{jsxref("Statements/return", "return")}} statement (including unreachable expression after {{jsxref("Statements/return", "semicolon-less return statements", "#Automatic_semicolon_insertion", 1)}}) will now show a warning in the console ({{bug(1005110)}}, {{bug(1151931)}}).
- {{jsxref("Symbol.match")}} has been added ({{bug(1054755)}}).
- Passing an object which has a property named {{jsxref("Symbol.match")}} with a {{Glossary("truthy")}} value to {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}}, and `String.prototype.contains` now throws a {{jsxref("TypeError")}} ({{bug(1054755)}}).
- {{jsxref("RegExp")}} function returns pattern itself if called without {{jsxref("Operators/new", "new")}} and pattern object has a property named {{jsxref("Symbol.match")}} with a {{Glossary("truthy")}} value, and the pattern object's `constructor` property equals to  {{jsxref("RegExp")}} function. ({{bug(1147817)}}).
- Support for the non-standard JS1.7 destructuring for-in has been dropped ({{bug(1083498)}}).
- [Non-standard initializer expressions](/en-US/docs/Web/JavaScript/Reference/Statements/for...in#firefox-specific_notes) in [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops are now ignored and will present a warning in the console. ({{bug(748550)}} and {{bug(1164741)}}).
- [`\u{xxxxxx}`](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) Unicode code point escapes have been added ({{bug(320500)}}).
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} has been replaced with {{jsxref("String.prototype.includes")}}, `String.prototype.contains` is kept as an alias ({{bug(1102219)}}).
- If the {{jsxref("DataView")}} constructor is called as a function without the {{ jsxref("Operators/new", "new") }} operator, a {{jsxref("TypeError")}} is now thrown as per the ES2015 specification.
- An issue regressed in Firefox 21, where proxyfied arrays without the `get` trap were not working properly, has been fixed. If the `get` trap in a {{jsxref("Proxy")}} was not defined, {{jsxref("Array.length")}} returned `0` and the `set` trap didn't get called. A workaround was to add the `get` trap even if was not necessary in your code. This issue has been fixed now ({{bug(895223)}}).
- `WeakMap.prototype` and `WeakSet.prototype` have been updated to be just ordinary objects, per ES2015 specification ({{bug(1055473)}}).

### Interfaces/APIs/DOM

#### New APIs

- The [Push API](/en-US/docs/Web/API/Push_API) has been experimentally implemented ({{bug(1038811)}}). Controlled by the `services.push.enabled` pref, it is disabled by default.

#### Web Animations API

Improvement in our experimental Web Animations implementation, mostly to match latest spec changes:

- {{domxref("Animation/currentTime", "AnimationPlayer.currentTime")}} now can also be set ({{bug(1072037)}}).
- `Animatable.getAnimationPlayers()`, available on {{domxref("Element")}} has been renamed to {{domxref("Element.getAnimations()")}} ({{bug(1145246)}}).
- `Animation` and `AnimationEffect` have been merged into the newly created `KeyframeEffectReadOnly` ({{bug(1153734)}}).
- `AnimationPlayer` has been renamed to {{domxref("Animation")}} ({{bug(1154615)}}).
- {{domxref("AnimationTimeline")}} is now an abstract class, with {{domxref("DocumentTimeline")}} its only implementation ({{bug(1152171)}}).

#### CSSOM

- The CSS Font Loading API is now enabled by default in Nightly and Developer Edition releases ({{bug(1088437)}}). It is still deactivated by default in Beta and Release browsers.
- The `CSSCharsetRule` interface has been removed and such objects are no longer available in CSSOM ({{bug(1148694)}}). This matches the spec (recently adapted) and Chrome behavior.

#### WebRTC

- WebRTC: the {{event("negotiationneeded")}} event is now also sent for initial negotiations, not only for re-negotiations ({{bug(1149838)}}).

#### DOM & HTML DOM

- When unable to parse the {{htmlattrxref("srcset", "image")}},  the {{domxref("HTMLImageElement.currentSrc")}} method doesn't return `null` anymore but `""`, as requested by the latest specification ({{bug(1139560)}}).
- Like for images, Firefox now throttles {{domxref("Window.requestAnimationFrame()")}} for non-visible {{HTMLElement("iframe")}} ({{bug(1145439)}}).
- {{domxref("NavigatorID/taintEnabled", "Navigator.taintEnabled")}} is no longer available for Web workers ({{bug(1154878)}}).

#### Web Audio API

New extensions to the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API):

- The {{domxref("BaseAudioContext/state", "AudioContext.state")}} and {{domxref("BaseAudioContext/onstatechange", "AudioContext.onstatechange")}} properties as well as the methods {{domxref("AudioContext.suspend()")}}, {{domxref("AudioContext.resume()")}}, and {{domxref("AudioContext.close()")}} have been added ({{bug(1094764)}}).
- {{domxref("AudioBufferSourceNode")}} now implements the {{domxref("AudioBufferSourceNode.detune")}} [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) attribute ({{bug(1153783)}}).

#### Web Workers

- Slight improvement in our [Service Worker API](/en-US/docs/Web/API/Service_Worker_API): the {{domxref("ServiceWorkerRegistration.update()", "update()")}} method has been moved from {{domxref("ServiceWorkerGlobalScope")}} to {{domxref("ServiceWorkerRegistration")}} ({{bug(1131350)}}).
- {{domxref("ServiceWorkerRegistration")}} is now available in Web workers ({{bug("1131327")}}).
- {{domxref("DataStore")}} is now available in Web workers ({{bug(916196)}}).

#### IndexedDB

- {{domxref("IDBTransaction")}} are now non-durable by default ({{bug(1112702)}}). This favors performance over reliability and matches what other browsers are doing. For more information, read our [durability definition](/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#durable).

#### Dev Tools

- The property {{domxref("console.timeStamp")}} has been added ({{bug(922221)}}).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## Networking

_No change._

## Security

- Using an asterisk (`*`) in a {{Glossary("CSP")}} does not include the schemes `data:`, `blob:` or `:filesystem` anymore when matching source expressions. So those schemes now need to be explicitly defined within the related header to match the CSP ({{bug(1086999)}}).

## Changes for add-on and Mozilla developers

### XUL

- It is no longer possible to create transparent top-level windows {{bug(1162649)}}.

### JavaScript code modules

- Dict.jsm has been removed {{bug(1123309)}}. Use {{jsxref("Map")}} instead.

### XPCOM

- The `nsIClassInfo.implementationLanguage` attribute has been removed, along with the `nsClassInfo::GetImplementationLanguage()` function.
- The following XPCOM interfaces have been removed; you should use the standard HTML interfaces instead:

  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Other

- Places Keywords API has been deprecated and will be removed soon ({{bug(1140395)}}).
- The automated testing system now supports skipping individual test functions. See {{SectionOnPage("/en-US/docs/Mozilla/QA/Writing_xpcshell-based_unit_tests", "Conditional test functions")}}.

## Older versions

{{Firefox_for_developers('39')}}
