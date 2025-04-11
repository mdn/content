---
title: Firefox 138 for developers
slug: Mozilla/Firefox/Releases/138
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 138 that affect developers.
Firefox 138 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 29, 2025](https://whattrainisitnow.com/release/?version=138).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The {{jsxref("Error.captureStackTrace()")}} static method is now supported. This installs stack trace information on a provided object as the {{jsxref("Error.stack")}} property. Its main use case is to install a stack trace on a custom error object that does not derive from the {{jsxref("Error")}} interface. ([Firefox bug 1950508](https://bugzil.la/1950508)).
- The {{jsxref("Error.isError()")}} static method can now be used to check whether or not an object is an instance of an {{jsxref("Error")}} or a {{domxref("DOMException")}}. This is more reliable than using `instanceof` for the same purpose. ([Firefox bug 1952249](https://bugzil.la/1952249)).

#### Removals

### SVG

#### Removals

### HTTP

- The [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data) header can be used with the [`cache`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) (and `*`) directive to clear the browser network cache. This gives websites more control over data stored for their users, allowing them to, for example, mitigate the risk of privacy leaks by clearing the cache during logout. ([Firefox bug 1942272](https://bugzil.la/1930500)).
- The HTTP {{httpheader("Origin-Agent-Cluster")}} response header can now be used by a site to hint that the associated document should be placed in an origin-keyed [agent cluster](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing).
  When in such a cluster, the operating system process and/or other OS resources used by the document are only shared with other documents from the same [origin](/en-US/docs/Glossary/Origin).
  This makes it less likely that a resource-intensive document will degrade the performance of documents from other origins.
  Developers can test whether the browser has put the document in an origin-keyed agent cluster using the {{domxref("window.originAgentCluster")}} property.
  ([Firefox bug 1665474](https://bugzil.la/1665474))

#### Removals

### Security

#### Removals

### APIs

- The [Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) is now supported when using the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API). It can be used to set and check whether a browser user is logged in to an identity provider.
  This includes support for the {{domxref("NavigatorLogin")}} interface, the {{domxref("navigator.login")}} property, and the {{httpheader("Set-Login")}} HTTP response header.
  ([Firefox bug 1945576](https://bugzil.la/1945576) and [Firefox bug 1945573](https://bugzil.la/1945573)).

#### DOM

#### Media, WebRTC, and Web Audio

- WebRTC applications can now set a preference for prioritizing framerate or resolution when both cannot be maintained at the configured levels due to network degradation.
  The value is set using the [`degradationPreference`](/en-US/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) property in the parameter object passed to the [`setParameters()`](/en-US/docs/Web/API/RTCRtpSender/setParameters#degradationpreference) method of the `RTCRtpSender` interface.
  It can also be read from the object returned by the [`getParameters()`](/en-US/docs/Web/API/RTCRtpSender/getParameters#degradationpreference) method.
  ([Firefox bug 1329847](https://bugzil.la/1329847)).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Support provided for `page_action` as a {{WebExtAPIRef("menus.ContextType")}} in the {{WebExtAPIRef("menus")}} API for Manifest V3 extensions. This provides Manifest V3 extensions the same ability as Manifest V2 extensions to add menu items to `page_action`. ([Firefox bug 1951166](https://bugzil.la/1951166))
- The {{WebExtAPIRef("contextualIdentities")}} API is no longer defined in Firefox for Android. Previously, it was defined but defective. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The `contextualIdentities` permission is now not recognized on Firefox for Android. Previously, it enabled a broken version of the "containers" feature. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The new Manifest V3 version of the {{WebExtAPIRef("userScripts")}} API is now available on Firefox for Android. ([Firefox bug 1949955](https://bugzil.la/1949955))
- The {{WebExtAPIRef("alarms.create")}} API now returns a Promise instead of undefined. ([Firefox bug 1869171](https://bugzil.la/1869171))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 138 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **::details-content CSS pseudo-element:** `layout.css.details-content.enabled`.
  The CSS {{cssxref("::details-content")}} pseudo-element enables you to style the content of the {{htmlElement("details")}} element ([Firefox bug 1901037](https://bugzil.la/1901037)).
- **`MutationEvent` on path to removal**: {{domxref("MutationEvent")}} and its associated events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`,`DOMAttrModified`) are now disabled on Firefox Nightly by default. ([Firefox bug 1951772](https://bugzil.la/1951772)).
- **`Notification.actions`:** (Nightly release): The {{domxref("Notification.actions")}} property can get the actions associated with a `Notification`, as set using {{domxref("ServiceWorkerRegistration.showNotification()")}}. ([Firefox bug 1225110](https://bugzil.la/1225110)).

## Older versions

{{Firefox_for_developers}}
