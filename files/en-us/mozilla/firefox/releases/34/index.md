---
title: Firefox 34 for developers
slug: Mozilla/Firefox/Releases/34
tags:
  - Firefox
  - Releases
---
{{FirefoxSidebar}}

Firefox 34 was released on December 1st, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Storage Inspector: a new tool enabling you to view data stored by web pages](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Performance tool: revamped Profiler UI and frame rate timeline](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Frame switching: point the developer tools at a specific iframe in the page](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [console.table support](/en-US/docs/Web/API/console/table)
- [jQuery events are visible in the Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[All devtools bugs fixed between Firefox 33 and Firefox 34](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Our experimental implementation of CSS Fonts Level 3 progresses. Newly implemented features are:

  - the fallback algorithm of {{cssxref("font-variant-position")}}, creating synthetic alternates for missing glyphs, based on the subscript and superscript metrics supplied by the font ({{bug(1024804)}}).
  - The `layout.css.font-features.enabled` preference has been removed, meaning the following properties have been activated by default:

    - The CSS Font Level 3 version of {{cssxref("font-variant")}} which is now a shorthand property.
    - The longhand properties {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, and {{cssxref("font-variant-alternates")}}.
    - The properties {{cssxref("font-kerning")}} and {{cssxref("font-synthesis")}}
    - The properties {{cssxref("font-feature-settings")}} and {{cssxref("font-language-override")}} are unprefixed. The prefixed version are still available for some time to ease transition.

- The value `auto` has been added to {{cssxref("min-width")}} and {{cssxref("min-height")}} with a different behavior than the last time ({{bug(984711)}} and {{bug(1015474)}}).
- An experimental implementation, disabled by default, of the filter functional values of the {{cssxref("filter")}} property have been implemented. It is controlled by the `layout.css.filters.enabled` pref ({{bug(948265)}}).
- Fixed starting of CSS transitions that start together with changes to {{cssxref("display")}}, {{cssxref("position")}}, {{cssxref("overflow")}}, and similar properties ({{bug(625289)}})

### HTML

_No change._

### JavaScript

- The ES2015 syntax for [computed property names on object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) has been implemented ({{bug(924688)}}).

  - This includes [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) method names as well ({{bug(1048384)}}) and can also be used with [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#computed_object_property_names_and_destructuring).

- The ES2015 [shorthand syntax for defining methods](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) on objects has been implemented ({{bug(924672)}}).
- The ES2015 `Object` method {{jsxref("Object.assign", "Object.assign()")}} has been implemented ({{bug(937855)}}).
- ES2015 [template strings](/en-US/docs/Web/JavaScript/Reference/Template_literals) and the {{jsxref("String.raw()")}} method are now supported ({{bug(1038259)}}, {{bug(1039774)}}).
- A new ES2015 object {{jsxref("WeakSet")}} has been added ({{bug(792439)}}).
- ES2015 [Symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (only available in the Nightly channel) have been updated to conform with recent specification changes ({{bug(1042602)}}):

  - When trying to convert a symbol to a number, a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) will be thrown now.
  - When using loose equality, `Object(sym) == sym` returns `true` now.

- The experimental {{jsxref("TypedArray.prototype.move()")}} method (only available in former Nightly and Aurora channels) has been replaced with the now implemented standard ES2015 {{jsxref("TypedArray.prototype.copyWithin()")}} method ({{bug(1021379)}}).
- In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), setting a [duplicate property name in object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) will no longer throw a `SyntaxError` as per ES2015 specification ({{bug(1041128)}}).
- In regular expressions (including `String.replace`), the matched text for a capturing group is now `undefined` instead of the empty string when that capturing group didn't get consulted because quantifiers prevented its exercise (see {{bug(369778)}} and [this example code](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gecko_specific_notes)). Note that due to web compatibility, RegExp.$N will still return an empty string ({{bug(1053944)}}).
- The ES2015 [spread operator](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is now supported in [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ({{bug(933276)}}).
- [Destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) now uses iterator protocol instead of array-like protocol ({{bug(933276)}}).
- {{jsxref("Proxy.revocable()")}} has been implemented ({{bug(978279)}}).

### Interfaces/APIs/DOM

- The {{domxref("Element.matches()")}} method has been added; it does what the non-standard `mozMatchesSelector()` was doing ({{bug(886308)}}).
- The {{domxref("Performance.now()")}} method is now available to Web workers ({{bug(908390)}}).
- The non-standard interface `MozNamedAttrMap` has been renamed to the standard {{domxref("NamedNodeMap")}} and {{domxref("Element.attributes")}} has been adapted to use it ({{bug(1055467)}}).
- The {{domxref("Path2D.addPath()")}} method has been added ({{bug(985801)}}).
- The non-standard [Device Storage API](/en-US/docs/Web/API/Device_Storage_API) is now also enabled for privileged apps installed on Android ({{bug(886627)}}).
- Web Crypto API has been enabled by default ({{bug(1074001)}}).
- The {{domxref("MediaStreamTrack.stop()")}} method has been added ({{bug(1057955)}}).
- Our experimental implementation of EME continues. The {{domxref("MediaKeySession.getUsableKeyIds()")}} method has been added ({{bug(1057171)}}).
- Regarding [WebRTC](/en-US/docs/Web/API/WebRTC_API):

  - an experiment implementation of {{domxref("RTPSender")}} and {{domxref("RTPReceiver")}} working with {{domxref("RTCPeerConnection")}} has landed ({{bug(1032835)}}).
  - application window sharing has been added to {{domxref("Navigation.getUserMedia()")}} ({{bug(1036653)}}) and {{domxref("MediaTrackConstraintSet")}} now supports `browserWindow` and `scrollWithPage` allowing to chose the tab of a window that has to be shared without showing the tab chooser dialog ({{bug(1041700)}}).
  - `"browser"` is now an accepted value of MediaSourceEnum, used to define constraints ({{bug(1041493)}}).

- For Web Components, event retargeting is now implemented ({{bug(887541)}}).
- The {{domxref("Headers")}} interface has been implemented ({{bug(1029620)}}). It is controlled by the `dom.fetch.enabled` preference which is set to `false` by default.
- Regarding our experimental implementation of Web Animations, the {{domxref("AnimationEffect")}} interface has been added, with the single {{domxref("AnimationEffect.name")}} property ({{bug(1045993)}}). Web Animations is not activated by default and is controlled by the `dom.animations-api.core.enabled` preference.
- CSSOM View smooth scrolling methods have been added: {{domxref("Window.scroll()")}}, {{domxref("Window.scrollTo()")}}, and {{domxref("Window.scrollBy()")}} ({{bug(1022818)}}).
- The non-standard `MozSmsSegmentInfo` is no more visible on the global object {{bug(916607)}}.

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## Security and Networking

- SSLv3 is now disabled by default ({{bug(1030963)}}).
- A warning is sent to the console when a Web site use the CSS `reflected-xss` directive ({{bug(1045902)}}).

## Changes for add-on and Mozilla developers

- localstore.rdf has been removed ({{bug(559505)}}).

### Add-on SDK

#### Highlights

- New API: [dev/panel](/en-US/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/dev_panel) enables you to extend the Firefox Developer Tools.
- [jpm](/en-US/docs/Mozilla/Add-ons/SDK/Tools/jpm) beta released.
- `"./my-file"` introduced everywhere as an alias for `require("sdk/self").data.url("my-file")`
- Added the ability to [attach stylesheets to individual tabs](/en-US/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#attaching_stylesheets).

#### Details

[GitHub commits made between Firefox 33 and Firefox 34](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). This will not include any uplifts made after this release entered Aurora.

[Bugs fixed between Firefox 33 and Firefox 34](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). This will not include any uplifts made after this release entered Aurora.

## Older versions

{{Firefox_for_developers('33')}}
