---
title: Work with documentId
slug: Mozilla/Add-ons/WebExtensions/Work_with_documentId
page-type: guide
sidebar: addonsidebar
---

A `documentId` is a UUID string that identifies a unique document loaded in a tab or frame. This guide explains what `documentId` is, why it is useful, and how to use it in the WebExtension APIs.

## Tabs, frames, and documents

A browser tab, identified by a `tabId`, is the top-level container for web content. Within a tab, content can be structured into multiple frames: the main (outermost) frame, which has a `frameId` of `0`, and any nested [`<iframe>`](/en-US/docs/Web/HTML/Reference/Elements/iframe) elements, each with a `frameId`. As the top `frameId` is `0`, `frameId` cannot be used to uniquely identify all frames across all tabs.

Each frame holds a document, the HTML page loaded at a URL. The relationship between these three concepts is:

- A **tab** contains one or more **frames**.
- A **frame** contains a **document**.
- Navigating a frame to a new URL replaces its document but keeps the same frame and, therefore, the same `frameId`.

This means that the combination of `tabId` and `frameId` identifies a frame (a stable browsing context), but not the document loaded in that frame.

Documents and frames are also present in non-tab contexts, including but not limited to:

- [Sidebars](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Popups attached to extension buttons](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Devtools panels](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)
- [Background pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)

## Operations using tab and frame IDs

Many WebExtension APIs use `tabId` and `frameId` to identify where to perform an operation:

- **Script and CSS injection**: {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}} accept a `tabId` and optional `frameIds` in their {{WebExtAPIRef("scripting.InjectionTarget")}} to specify where to inject into.
- **User script injection**: {{WebExtAPIRef("userScripts.execute()")}} takes `tabId` and `frameIds` in its `target`.
- **Messaging**: {{WebExtAPIRef("tabs.sendMessage()")}} and {{WebExtAPIRef("tabs.connect()")}} accept a `tabId` and optional `frameId` to direct a message to its recipient.
- **Frame information**: {{WebExtAPIRef("webNavigation.getFrame()")}} and {{WebExtAPIRef("webNavigation.getAllFrames()")}} use `tabId` and `frameId` to look up or enumerate frame details.
- **Events**: Navigation events ({{WebExtAPIRef("webNavigation.onCommitted")}}, {{WebExtAPIRef("webNavigation.onCompleted")}}, and others), request events ({{WebExtAPIRef("webRequest.onBeforeRequest")}} and others), and {{WebExtAPIRef("proxy.onRequest")}} all include `tabId` and `frameId` to identify where an event occurred.

Because `frameId` identifies the frame rather than its content, there is a potential race condition. After your extension has obtained the `tabId` and `frameId`, the loaded document may change, so the extension's subsequent operation no longer targets the intended document. `documentId` was introduced to address this problem.

## What is a documentId?

A `documentId` is assigned to each document when it loads and remains constant throughout the document's lifetime. When a frame navigates to a new URL, it retains its `frameId` but receives a new `documentId`. This distinguishes `documentId` from `frameId`: a `frameId` identifies the browsing context (the frame element itself), whereas a `documentId` identifies the document loaded within it.

The `documentId` also correctly handles edge cases that `frameId` cannot distinguish:

- **Navigations**: Each new document load, including cross-origin navigations, receives a new `documentId` even though the `frameId` is unchanged.
- **Reloads**: A page reload creates a new `documentId`, indicating a fresh document.
- **{{DOMxRef("history.pushState()")}} and fragment updates**: These don't create a new document, so the `documentId` is unchanged.

As it changes with each document load, the ID your extension obtained for a document remains valid only for that document. If the frame has navigated away, the `documentId` no longer matches. So, if your extension injects a script or sends a message using the documented ID after the navigation, the operation fails rather than silently targeting the wrong document.

When a document is restored from the [back/forward cache (bfcache)](/en-US/docs/Glossary/bfcache), its original `documentId` is also restored.

## Get a documentId

There are several ways to obtain a `documentId`:

- Call {{WebExtAPIRef("runtime.getDocumentId()")}} with a `window` or frame element from within a content script.
- Read the `documentId` or `parentDocumentId` property in the results of {{WebExtAPIRef("webNavigation.getFrame()")}} or {{WebExtAPIRef("webNavigation.getAllFrames()")}}.
- Read the `documentId` or `parentDocumentId` from event details in {{WebExtAPIRef("webNavigation")}} events (for events where the document of the navigation target is known when the event fires).
- Read the `documentId` from {{WebExtAPIRef("webRequest")}} event details.
- Read the `documentId` from {{WebExtAPIRef("runtime.MessageSender")}} when receiving messages using {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onConnect")}}, and related listeners.
- Read the `documentId` from the results of {{WebExtAPIRef("runtime.getContexts()")}}.

## Using documentId to target documents

When you have a `documentId`, you can use it to target that document:

- **Script and CSS injection**: Use `documentIds` in {{WebExtAPIRef("scripting.InjectionTarget")}} with {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}} to inject into specific documents.
- **User script injection**: Set `documentIds` in the `target` parameter of {{WebExtAPIRef("userScripts.execute()")}}.
- **Messaging**: Pass `documentId` in the `options` parameter of {{WebExtAPIRef("tabs.connect()")}} or {{WebExtAPIRef("tabs.sendMessage()")}} to send to a document in a tab.
- **Frame lookup**: Pass `documentId` to {{WebExtAPIRef("webNavigation.getFrame()")}} as an alternative to `tabId` and `frameId`. If you also provide `tabId` and `frameId`, the frame is only returned when all three match.

## APIs supporting documentId

These APIs include `documentId` support.

### Obtain a documentId

- {{WebExtAPIRef("runtime.getDocumentId()")}} returns the document UUID of a target window or frame element.

### documentId in return values and event details

- {{WebExtAPIRef("runtime.getContexts()")}} returns a `documentId` for each extension context and supports a `documentIds` filter property.
- {{WebExtAPIRef("runtime.MessageSender")}} includes `documentId`, available in {{WebExtAPIRef("runtime.onConnect")}}, {{WebExtAPIRef("runtime.onMessage")}}, {{WebExtAPIRef("runtime.onMessageExternal")}}, {{WebExtAPIRef("runtime.onConnectExternal")}}, {{WebExtAPIRef("runtime.onUserScriptMessage")}}, and {{WebExtAPIRef("runtime.onUserScriptConnect")}} listeners.
- {{WebExtAPIRef("scripting.executeScript()")}} returns `documentId` in each `InjectionResult`.
- {{WebExtAPIRef("userScripts.execute()")}} results include `documentId`.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}} returns `documentId` and `parentDocumentId` for each frame.
- {{WebExtAPIRef("webNavigation.getFrame()")}} returns `documentId` and `parentDocumentId`.
- {{WebExtAPIRef("webNavigation.onCommitted")}}, {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}, {{WebExtAPIRef("webNavigation.onCompleted")}}, {{WebExtAPIRef("webNavigation.onErrorOccurred")}}, {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}, and {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}} include `documentId` and `parentDocumentId` in event details. {{WebExtAPIRef("webNavigation.onBeforeNavigate")}} may have a `parentDocumentId` when a frame navigates, but doesn't have `documentId` because the event fires before a document is loaded.
- All `webRequest` events — {{WebExtAPIRef("webRequest.onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived")}}, {{WebExtAPIRef("webRequest.onAuthRequired")}}, {{WebExtAPIRef("webRequest.onBeforeRedirect")}}, {{WebExtAPIRef("webRequest.onResponseStarted")}}, {{WebExtAPIRef("webRequest.onCompleted")}}, and {{WebExtAPIRef("webRequest.onErrorOccurred")}} — include `documentId` and `parentDocumentId` when applicable.
- {{WebExtAPIRef("proxy.RequestDetails")}} includes `documentId` and `parentDocumentId` when applicable.
- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} includes `documentId` when applicable.

### documentId for targeting

- {{WebExtAPIRef("scripting.InjectionTarget")}} supports `documentIds` to target specific documents in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}}.
- {{WebExtAPIRef("userScripts.execute()")}} `target` supports `documentIds`.
- {{WebExtAPIRef("tabs.connect()")}} `options` supports `documentId` to target a specific document.
- {{WebExtAPIRef("tabs.sendMessage()")}} `options` supports `documentId` to target a specific document.
- {{WebExtAPIRef("webNavigation.getFrame()")}} accepts `documentId` as an alternative to `tabId` and `frameId`.

## Future developments

The [WebExtensions Community Group (WECG)](https://github.com/w3c/webextensions) is discussing relaxing the requirement to provide `tabId` alongside `documentId` when targeting documents. See [WECG issue #91](https://github.com/w3c/webextensions/issues/91) for the discussion.
