---
title: Firefox 135 for developers
slug: Mozilla/Firefox/Releases/135
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 135 that affect developers. Firefox 135 was released on [February 4, 2025](https://whattrainisitnow.com/release/?version=135).

## Changes for web developers

### HTML

No notable changes

### CSS

#### Removals

- The [`-moz-user-input`](/en-US/docs/Web/CSS/-moz-user-input) CSS property allowed you to disable input fields. The property is now deprecated and has been removed ([Firefox bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- The [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) is now supported, which aims to provide features to mitigate issues around loss of precision when converting values such as large floats and date values between JavaScript values and JSON text ([Firefox bug 1934622](https://bugzil.la/1934622)). Specifically, the following features are now available:
  - The `JSON.parse()` [`reviver` parameter `context` argument](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Provides access to the original JSON source text that was parsed.
  - [`JSON.isRawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Tests whether a value is an object returned by `JSON.rawJSON()`.
  - [`JSON.rawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Creates a "raw JSON" object containing a piece of JSON text, which can then be included in an object to preserve the specified value when that object is stringified.

### Security

- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency) is a standard for ensuring that certificates are publicly disclosed before web browsers will trust them. Firefox now supports this feature on desktop versions (but not Android).
  This only affects servers that use certificates issued by a certificate authority in Mozilla's Root CA Program.
  ([Firefox bug 1938242](https://bugzil.la/1938242)).

### APIs

- The {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}} static method is supported, allowing a web app to check if a browser enables particular [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) without having to resort to user agent sniffing.
  ([Firefox bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCOutboundRtpStreamStats.mid", "mid")}} and {{domxref("RTCOutboundRtpStreamStats.rid", "rid")}} properties of the {{domxref("RTCOutboundRtpStreamStats")}} interface, and the{{domxref("RTCOutboundRtpStreamStats.mid", "mid")}} property of the {{domxref("RTCInboundRtpStreamStats")}} interface are now supported. ([Firefox bug 1643001](https://bugzil.la/1643001)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- To make user events more realistic and better simulate real user interactions in the browser, we have moved the action sequence processing of the `Perform Actions` commands in both Marionette and WebDriver BiDi from the content process to the parent process. While events are still sent synchronously from the content process, they are now triggered asynchronously via IPC calls originating from the parent process ([Firefox bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Due to this significant change, some regressions may still exist. If you encounter any issues, please [file a bug for the Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). If the regressions block test execution, you can temporarily revert to the previous behavior by setting the Firefox preference `remote.events.async.enabled` to `false`.

- With the processing of actions now handled in the parent process the following issues were fixed as well:

  - We now support proper queuing of action sequences without race conditions. This is particularly important for WebDriver BiDi's `input.performActions` command, which can be called multiple times in parallel and must execute the enqueued actions sequentially ([Firefox bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - When dispatching actions, the `input cancel list` is now correctly updated only after the action has been successfully dispatched. Previously, if an action failed to execute, a reverse action could be left in place, leading to unexpected side effects when resetting the state of the `input source` ([Firefox bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - When performing actions, individual actions are now retried during dispatch, particularly in situations where a single action triggers a navigation that replaces the current browsing context ([Firefox bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - When performing actions, a `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` error occurred if an action (not the last one) in the action chain closed the window, and the remaining actions were still being dispatched ([Firefox bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Some Marionette and WebDriver BiDi commands that rely internally on a `requestAnimationFrame` being emitted before returning would hang if the current browsing context was navigated during their execution ([Firefox bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Added support for the `format` field in the `browsingContext.captureScreenshot` command, allowing clients to specify different file formats (`image/png` and `image/jpg` are currently supported) and define the compression quality for screenshots ([Firefox bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Changes for add-on developers

- {{WebExtAPIRef("commands.update")}} can now assign keyboard shortcuts for commands to the `F13` to `F19` keys. However, extensions can't assign these keys from the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands). Users can also assign features to these keys using [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) ([Firefox bug 1924542](https://bugzil.la/1924542))

## Experimental web features

These features are newly shipped in Firefox 135 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Temporal API** (Nightly release): <code>javascript.options.experimental.temporal</code>. The [Temporal object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) aims to simplify working with dates and times in various scenarios, with built-in time zone and calendar representations. ([Firefox bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they defined in a website developer's code, or in third party libraries and frameworks.
  This has temporarily been disabled in Nightly builds in order to avoid [breakage in-the-wild](https://bugzil.la/1937232).
  ([Firefox bug 1938242](https://bugzil.la/1938242)).

## Older versions

{{Firefox_for_developers}}
