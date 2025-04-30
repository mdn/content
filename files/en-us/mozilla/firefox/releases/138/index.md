---
title: Firefox 138 for developers
slug: Mozilla/Firefox/Releases/138
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 138 that affect developers.
Firefox 138 was released on [April 29, 2025](https://whattrainisitnow.com/release/?version=138).

## Changes for web developers

### HTML

- The [`importmap`](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap) value of the [`type`](/en-US/docs/Web/HTML/Reference/Elements/script/type) attribute of the [`<script>`](/en-US/docs/Web/HTML/Reference/Elements/script) element now supports the [`integrity`](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity) key. This allows the ES module URLs referenced in the import maps to be matched against their integrity metadata. As a result, these modules are now compatible with [CSP](/en-US/docs/Web/HTTP/Guides/CSP) directives that require Subresource Integrity ([SRI](/en-US/docs/Web/Security/Practical_implementation_guides/SRI)). ([Firefox bug 1945540](https://bugzil.la/1945540)).

### CSS

No notable changes

### JavaScript

- The {{jsxref("Error.captureStackTrace()")}} static method is now supported. This installs stack trace information on a provided object as the {{jsxref("Error.stack")}} property. Its main use case is to install a stack trace on a custom error object that does not derive from the {{jsxref("Error")}} interface. ([Firefox bug 1950508](https://bugzil.la/1950508)).
- The {{jsxref("Error.isError()")}} static method can now be used to check whether or not an object is an instance of an {{jsxref("Error")}} or a {{domxref("DOMException")}}. This is more reliable than using `instanceof` for the same purpose. ([Firefox bug 1952249](https://bugzil.la/1952249)).
- The [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declaration now supports importing JSON modules using the [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) attribute.

### HTTP

- The [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) header can be used with the [`cache`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (and `*`) directive to clear the browser network cache. This gives websites more control over data stored for their users, allowing them to, for example, mitigate the risk of privacy leaks by clearing the cache during logout. ([Firefox bug 1942272](https://bugzil.la/1930500)).
- The HTTP {{httpheader("Origin-Agent-Cluster")}} response header can now be used by a site to hint that the associated document should be placed in an origin-keyed [agent cluster](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing).
  When in such a cluster, the operating system process and/or other OS resources used by the document are only shared with other documents from the same [origin](/en-US/docs/Glossary/Origin).
  This makes it less likely that a resource-intensive document will degrade the performance of documents from other origins.
  Developers can test whether the browser has put the document in an origin-keyed agent cluster using the {{domxref("window.originAgentCluster")}} property.
  ([Firefox bug 1665474](https://bugzil.la/1665474))

### APIs

- The [Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) is now supported when using the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API). It can be used to set and check whether a browser user is logged in to an identity provider.
  This includes support for the {{domxref("NavigatorLogin")}} interface, the {{domxref("navigator.login")}} property, and the {{httpheader("Set-Login")}} HTTP response header.
  ([Firefox bug 1945576](https://bugzil.la/1945576) and [Firefox bug 1945573](https://bugzil.la/1945573)).
- The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) now supports bidirectional messaging on an {{domxref("AudioWorklet.port")}} and an {{domxref("AudioWorkletGlobalScope.port")}}.
  This allows for custom, asynchronous communication between code in the main thread and the global scope of an audio worklet, such as receiving control data or global settings. ([Firefox bug 1951240](https://bugzil.la/1951240))
- The {{domxref("RTCCertificate.getFingerprints()","getFingerprints()")}} method of the {{domxref("RTCCertificate")}} interface is now supported.
  An application can use this to get fingerprints for a certificate, which might be shared out-of-band in order to identify a particular user or browser across WebRTC sessions.
  ([Firefox bug 1525241](https://bugzil.la/1525241)).

#### DOM

#### Media, WebRTC, and Web Audio

- WebRTC applications can now set a preference for prioritizing framerate or resolution when both cannot be maintained at the configured levels due to network degradation.
  The value is set using the [`degradationPreference`](/en-US/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) property in the parameter object passed to the [`setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) method of the `RTCRtpSender` interface.
  It can also be read from the object returned by the [`getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) method.
  ([Firefox bug 1329847](https://bugzil.la/1329847)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- All remote protocols now enable the preferences required to properly pipe logs to stdout ([Firefox bug 1947740](https://bugzil.la/1947740)).
- A new Firefox argument, `--remote-enable-system-access`, was added to enable sensitive features, such as interacting with Browsing Contexts in the parent process (e.g., Browser UI) or using privileged APIs in content processes. This will be used for WebDriver BiDi features in the next releases, and can already be used with Marionette (see the Marionette section below) ([Firefox bug 1944565](https://bugzil.la/1944565)).

#### WebDriver BiDi

- The `webExtension.install` command now installs web extensions temporarily by default, allowing it to be used with unsigned extensions - either as an XPI file or as an unpacked folder. A new Firefox-specific parameter, `moz:permanent`, has been added to force installation as a regular extension instead ([Firefox bug 1947678](https://bugzil.la/1947678)).
- The `browsingContext.setViewport` command now supports a `userContexts` parameter, which must be an array of user context (Firefox container) ids. When provided, the viewport configuration will be applied to all Browsing Contexts belonging to those user contexts, as well as any future contexts created within them. This parameter cannot be used together with the existing `context` parameter ([Firefox bug 1940952](https://bugzil.la/1940952)).
- The `browsingContext.Info` type now includes a `clientWindow` property corresponding to the ID of the window owning the Browsing Context. It is typically returned by `browsingContext.getTree` or included in the payload of events such as `browsingContext.contextCreated` ([Firefox bug 1920952](https://bugzil.la/1920952)).

#### Marionette

- Switching to the `chrome` (parent process) context with Marionette now requires using the `--remote-enable-system-access` command-line flag when starting Firefox ([Firefox bug 1710425](https://bugzil.la/1710425)).

## Changes for add-on developers

- Support provided for `page_action` as a {{WebExtAPIRef("menus.ContextType")}} in the {{WebExtAPIRef("menus")}} API for Manifest V3 extensions. This provides Manifest V3 extensions the same ability as Manifest V2 extensions to add menu items to `page_action`. ([Firefox bug 1951166](https://bugzil.la/1951166))
- The {{WebExtAPIRef("contextualIdentities")}} API is no longer defined in Firefox for Android. Previously, it was defined but defective. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The `contextualIdentities` permission is now not recognized on Firefox for Android. Previously, it enabled a broken version of the "containers" feature. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The new Manifest V3 version of the {{WebExtAPIRef("userScripts")}} API is now available on Firefox for Android. ([Firefox bug 1949955](https://bugzil.la/1949955))
- Implements the {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In previous versions this method was exposed but did nothing. ([Firefox bug 1657575](https://bugzil.la/1657575))
- The {{WebExtAPIRef("alarms.create")}} API now returns a Promise instead of undefined. ([Firefox bug 1869171](https://bugzil.la/1869171))
- Support added to enable the manipulation of tabs within tab groups, including the addition of:
  - {{WebExtAPIRef("tabs.group()")}} and {{WebExtAPIRef("tabs.ungroup()")}}. ([Firefox bug 1959714](https://bugzil.la/1959714))
  - `groupId` to {{WebExtAPIRef("tabs.Tab")}}. ([Firefox bug 1959713](https://bugzil.la/1959713))
  - `groupId` to {{WebExtAPIRef("tabs.query")}}. ([Firefox bug 1959715](https://bugzil.la/1959715))
  - `groupId` to {{WebExtAPIRef("tabs.onUpdated")}}. ([Firefox bug 1959716](https://bugzil.la/1959716)

## Experimental web features

These features are newly shipped in Firefox 138 and are considered experimental.
They may be disabled by default or enabled by default but available only in the Nightly build.
For features disabled by default, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **UA styles for `<h1>` nested into sectioning elements:** `layout.css.h1-in-section-ua-styles.enabled`.

  The `<h1>` heading doesn't decrease in font size now when nested within [sectioning elements](/en-US/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, and `<section>`. The UA styles for `<h1>` nested within sectioning elements are no longer relevant since the outline algorithm [has been removed](https://github.com/whatwg/html/pull/7829) from the HTML specification. ([Firefox bug 1883896](https://bugzil.la/1883896)).

  As part of a staged rollout of this removal 5% of users of Firefox 138 and 50% of users of Firefox Beta 138 will have the value of `layout.css.h1-in-section-ua-styles.enabled` set to `false` ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > The preference for this feature works in reverse: it's set to `false` in the Nightly build, which removes the UA styling for headings nested in sectioning elements. It's set to `true` in all other channels, which retains the existing UA styling for the nested headings.

- **::details-content CSS pseudo-element:** `layout.css.details-content.enabled`.

  The CSS {{cssxref("::details-content")}} pseudo-element enables you to style the content of the {{htmlElement("details")}} element ([Firefox bug 1901037](https://bugzil.la/1901037)).

- **Allow pseudo-elements after element-backed pseudo-elements**

  Work has begun on allowing [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) such as {{cssxref("::first-letter")}} and {{cssxref("::before")}} to be appended to [element-backed pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements#element-backed_pseudo-elements) such as {{cssxref("::details-content")}} and {{cssxref("::file-selector-button")}}. ([Firefox bug 1953557](https://bugzil.la/1953557)).

  > [!NOTE]
  > The preference for this feature depends upon the element-backed pseudo-element being targeted, for example: [`::details-content`](/en-US/docs/Mozilla/Firefox/Experimental_features#details-content_pseudo-element).

- **`MutationEvent` on path to removal**: `dom.mutation_events.enabled`

  {{domxref("MutationEvent")}} and its associated events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) are now disabled on Firefox Nightly by default. ([Firefox bug 1951772](https://bugzil.la/1951772)).

- **`Notification.actions`** (Nightly): `dom.webnotifications.actions.enabled`

  The {{domxref("Notification.actions")}} property can get the actions associated with a `Notification`, as set using {{domxref("ServiceWorkerRegistration.showNotification()")}}. ([Firefox bug 1225110](https://bugzil.la/1225110)).

- **`PerformanceEventTiming.interactionId`**: `dom.performance.event_timing.enable_interactionid`

  {{domxref("PerformanceEventTiming.interactionId")}} can be used to measure latency timing for events triggered by a particular user interaction. ([Firefox bug 1934683](https://bugzil.la/1934683)).

- **HTML Sanitizer API**: `dom.security.sanitizer.enabled`

  The {{domxref('HTML Sanitizer API')}} allow developers to take untrusted strings of HTML and sanitize them for safe insertion into a document's DOM. ([Firefox bug 1950605](https://bugzil.la/1950605)), ([Firefox bug 1952250](https://bugzil.la/1952250)).

## Older versions

{{Firefox_for_developers}}
