---
title: Firefox 153 release notes for developers (Nightly)
short-title: Firefox 153 (Nightly)
slug: Mozilla/Firefox/Releases/153
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 153 that affect developers.
Firefox 153 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [July 21, 2026](https://whattrainisitnow.com/release/?version=153).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Extensions now require explicit user permission to access `file://` URLs. Previously, access to local files was covered by the "Access your data for all websites" host permission. This change introduces a separate "Access local files on your computer" option in the extension's permissions settings (desktop only), and file access is turned off by default for all extensions, including existing ones. The {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} method now correctly returns `true` if the user has granted file scheme access; previously, Firefox always returned `false`. Additionally, calling {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} on `file://` URLs now requires this permission. ([Firefox bug 2034168](https://bugzil.la/2034168))
- Supports the {{WebExtAPIRef("userScripts.execute()")}} method, enabling extensions to inject user scripts on demand into a tab or frame. Unlike {{WebExtAPIRef("userScripts.register()")}}, this method supports one-off injection of multiple script sources executed in a defined order. ([Firefox bug 1930776](https://bugzil.la/1930776))
- Adds the {{WebExtAPIRef("publicSuffix")}} API, enabling extensions to determine the registrable domain (eTLD+1) and public suffix of a hostname using the browser's built-in [Public Suffix List](https://publicsuffix.org/). The API provides three synchronous methods: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}}, and {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([Firefox bug 1315558](https://bugzil.la/1315558))
- Extension content scripts can now read and modify constructed stylesheets in {{domxref("document.adoptedStyleSheets")}} and {{domxref("ShadowRoot.adoptedStyleSheets")}}, without `.wrappedJSObject`. ([Firefox bug 1751346](https://bugzil.la/1751346))
- Adds the {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} and {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} methods to retrieve the colors and icons available for contextual identities (containers). ([Firefox bug 2044712](https://bugzil.la/2044712))
- Adds support for `documentId`, a UUID that uniquely identifies a document across its lifetime, to several WebExtension APIs. ([Firefox bug 1891478](https://bugzil.la/1891478)):
  - The new {{WebExtAPIRef("runtime.getDocumentId()")}} method returns the document UUID of a target window or frame element.
  - {{WebExtAPIRef("runtime.getContexts()")}} now returns a `documentId` for each extension context, and the `documentIds` filter property is supported.
  - {{WebExtAPIRef("runtime.connect()")}} and {{WebExtAPIRef("runtime.sendMessage()")}} `options` now support `documentId` to target a specific document.
  - {{WebExtAPIRef("runtime.MessageSender")}} now includes `documentId`, available in {{WebExtAPIRef("runtime.onConnect")}}, {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onMessageExternal")}}, {{WebExtAPIRef("runtime.onConnectExternal")}}, {{WebExtAPIRef("runtime.onUserScriptMessage")}}, and {{WebExtAPIRef("runtime.onUserScriptConnect")}} listeners.
  - {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}} now support `target.documentIds` (see {{WebExtAPIRef("scripting.InjectionTarget")}}) to target specific documents; {{WebExtAPIRef("scripting.executeScript()")}} also returns `documentId` in each `InjectionResult`.
  - {{WebExtAPIRef("userScripts.execute()")}} `target` now supports `documentIds`, and the results include `documentId`.
  - {{WebExtAPIRef("tabs.connect()")}} and {{WebExtAPIRef("tabs.sendMessage()")}} `options` now support `documentId` to target a specific document in a tab.
  - {{WebExtAPIRef("webNavigation.getAllFrames()")}} now returns `documentId` and `parentDocumentId` for each frame.
  - {{WebExtAPIRef("webNavigation.getFrame()")}} now accepts `documentId` as an alternative to `tabId` and `frameId`, and returns `documentId` and `parentDocumentId`.
  - The {{WebExtAPIRef("webNavigation.onCommitted")}}, {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}, {{WebExtAPIRef("webNavigation.onCompleted")}}, {{WebExtAPIRef("webNavigation.onErrorOccurred")}}, {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}, and {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}} events now include `documentId` and `parentDocumentId` in event details; {{WebExtAPIRef("webNavigation.onBeforeNavigate")}} includes `parentDocumentId` only.
  - All `webRequest` events ({{WebExtAPIRef("webRequest.onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived")}}, {{WebExtAPIRef("webRequest.onAuthRequired")}}, {{WebExtAPIRef("webRequest.onBeforeRedirect")}}, {{WebExtAPIRef("webRequest.onResponseStarted")}}, {{WebExtAPIRef("webRequest.onCompleted")}}, and {{WebExtAPIRef("webRequest.onErrorOccurred")}}) now include `documentId` and `parentDocumentId` when applicable.
  - {{WebExtAPIRef("proxy.RequestDetails")}} (passed to {{WebExtAPIRef("proxy.onRequest")}}) now includes `documentId` and `parentDocumentId` when applicable.

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 153 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
