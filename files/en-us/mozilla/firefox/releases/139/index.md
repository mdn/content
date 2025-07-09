---
title: Firefox 139 for developers
short-title: Firefox 139
slug: Mozilla/Firefox/Releases/139
page-type: firefox-release-notes
sidebar: firefox
---

This article provides information about the changes in Firefox 139 that affect developers.
Firefox 139 was released on [May 27, 2025](https://whattrainisitnow.com/release/?version=139).

## Changes for web developers

### HTML

- The [`hidden=until-found`](/en-US/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) HTML attribute and the [`beforematch` event](/en-US/docs/Web/API/Element/beforematch_event) are now supported.
  The _hidden until found_ state allows you to hide the contents of an element until it is found by user search (for example, using "Find in page") or by fragment navigation.
  The `beforematch` event fires just before the `hidden` attribute is removed ([Firefox bug 1761043](https://bugzil.la/1761043) and [Firefox bug 1955379](https://bugzil.la/1955379)).

### CSS

No notable changes

### JavaScript

- The Temporal API is now supported, this aims to simplify working with dates and times in various scenarios, with built-in time zone and calendar representations ([Firefox bug 1912511](https://bugzil.la/1912511) and [Firefox bug 1954138](https://bugzil.la/1954138)).
  This includes:
  - A **duration** (difference between two time points): {{jsxref("Temporal.Duration")}}
  - **Points in time**:
    - As a unique instant in history:
      - A timestamp: {{jsxref("Temporal.Instant")}}
      - A date-time with a time zone: {{jsxref("Temporal.ZonedDateTime")}}
    - **Time-zone-unaware date/time ("Plain")**:
      - Date (year, month, day) + time (hour, minute, second, millisecond, nanosecond): {{jsxref("Temporal.PlainDateTime")}}
        - Date (year, month, day): {{jsxref("Temporal.PlainDate")}}
          - Year, month: {{jsxref("Temporal.PlainYearMonth")}}
          - Month, day: {{jsxref("Temporal.PlainMonthDay")}}
        - Time (hour, minute, second, millisecond, nanosecond): {{jsxref("Temporal.PlainTime")}}
  - **Now** (current time) as various class instances, or in a specific format: {{jsxref("Temporal.Now")}}
- Currently the following calendar types are disabled for the `withCalendar()` method for [`PlainDate`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar), [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar), and [`ZonedDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) objects:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### Removals

- The experimental `<discard>` element has been removed, along with its corresponding {{domxref("SVGDiscardElement")}} JavaScript interface.
  These aren't supported in other browsers and are expected to be removed from the specification.
  ([Firefox bug 1958839](https://bugzil.la/1958839)).

### HTTP

No notable changes

### APIs

#### DOM

- The {{domxref("HTMLDialogElement/requestClose", "requestClose()")}} method of the {{domxref("HTMLDialogElement")}} interface is now supported.
  This allows developers to conditionally prevent a dialog from closing by providing a [`cancel` event](/en-US/docs/Web/API/HTMLDialogElement/cancel_event) handler.
  ([Firefox bug 1960556](https://bugzil.la/1960556)).
- The [`largeBlob`](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) and [`credProps`](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) Web Authentication extensions are now supported, while the [`prf`](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) extension is supported on all desktop platforms.
  These respectively provide support for large blob storage associated with a credential, additional information about a credential, and a mechanism for generating a random number associated with a credential and a particular input.
  ([Firefox bug 1795020](https://bugzil.la/1795020), [Firefox bug 1844449](https://bugzil.la/1844449), [Firefox bug 1935280](https://bugzil.la/1935280)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- The priority manager (on macOS, the background QoS manager) in Firefox, which manages IPC message prioritization between the parent and content processes, has been temporarily disabled for all supported Remote Protocols. This change resolves an issue where, under high system load, initial page loads in newly opened background tabs were not being scheduled, resulting in certain commands hanging ([Firefox bug 1960734](https://bugzil.la/1960734)).

#### WebDriver BiDi

- Implemented the `emulation.setGeolocationOverride` command, allowing tests and automation tools to simulate geographic locations across specified browsing contexts or user contexts. This enables consumers to test location-aware features such as geofencing for local recommendations ([Firefox bug 1954992](https://bugzil.la/1954992)).

## Changes for add-on developers

- Localized extensions now cascade through locale subtags to find translations before reverting to the extension's default language. Previously, the extension used the extension default if a translation couldn't be found for a language with subtags. See [Localized string selection](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) in the Internationalization article for more details of the new behavior. ([Firefox bug 1381580](https://bugzil.la/1381580))
- Content scripts and styles are now guaranteed to execute in the order of registration (i.e., their order in the [`content_scripts` manifest key array](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Previously, the order was only guaranteed for scripts within the same `js` array. ([Firefox bug 1792685](https://bugzil.la/1792685))
- The {{WebExtAPIRef("tabGroups")}} API is now available. This API enables extensions to modify and rearrange [tab groups](https://support.mozilla.org/en-US/kb/tab-groups). For more information, see [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/). ([Firefox bug 1940631](https://bugzil.la/1940631))

## Experimental web features

These features shipped in Firefox 139 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Prioritized Task Scheduling API** (Nightly release).
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code, or in third-party libraries and frameworks.
  This adds support for the {{domxref("scheduler.yield()")}} method and re-enables the whole API in the Nightly release.
  ([Firefox bug 1958943](https://bugzil.la/1958943), [Firefox bug 1920115](https://bugzil.la/1920115)).
- **View Transition API** (Nightly release).
  The [View Transition API](/en-US/docs/Web/API/View_Transition_API) has been enabled for [SPAs (single-page applications)](/en-US/docs/Glossary/SPA). It provides a mechanism for easily creating animated transitions between different website views. ([Firefox bug 1950759](https://bugzil.la/1950759)).
- **Support for escaping `<` and `>` in attributes when serializing HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox now replaces the `<` and `>` characters with `&lt;` and `&gt;`, respectively, in attributes when serializing HTML. This helps prevent certain exploits where HTML is serialized and then injected back into the DOM.
  The affected methods and properties are: {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("Element.getHTML()")}}, {{domxref("ShadowRoot.innerHTML")}}, and {{domxref("ShadowRoot.getHTML()")}}. ([Firefox bug 1941347](https://bugzil.la/1941347)).
- **Disable non-standard `beforescriptexecute` and `afterscriptexecute`**: `dom.events.script_execute.enabled`.
  The events have been disabled on Nightly only, allowing browser testing prior to their removal.
  The affected events are: [`beforescriptexecute`](/en-US/docs/Web/API/Document/beforescriptexecute_event) and [`afterscriptexecute`](/en-US/docs/Web/API/Document/afterscriptexecute_event) on the {{domxref("Document")}} interface, and [`afterscriptexecute`](/en-US/docs/Web/API/Element/afterscriptexecute_event) and [`beforescriptexecute`](/en-US/docs/Web/API/Element/beforescriptexecute_event) on the {{domxref("Element")}} interface. ([Firefox bug 1954685](https://bugzil.la/1954685)).

## Older versions

{{Firefox_for_developers}}
