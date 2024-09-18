---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
page-type: webextension-api
browser-compat: webextensions.api.tabs
---

{{AddonSidebar}}

Interact with the browser's tab system.

> [!NOTE]
> When using Manifest V3 or higher, the methods to execute scripts, insert CSS, and remove CSS are provided by the {{WebExtAPIRef("scripting")}} API through the {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} and {{WebExtAPIRef("scripting.removeCSS()")}} methods.

You can use this API to get a list of opened tabs, filtered by various criteria, and to open, update, move, reload, and remove tabs. You can't directly access the content hosted by tabs using this API, but you can insert JavaScript and CSS into tabs using the {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}} APIs.

You can use most of this API without any special permission. However:

- To access `Tab.url`, `Tab.title`, and `Tab.favIconUrl` (or to filter by these properties via {{WebExtAPIRef("tabs.query()")}}), you need to have the `"tabs"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), or have [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that match `Tab.url`.

  - Access to these properties by host permissions is supported since Firefox 86 and Chrome 50. In Firefox 85 and earlier, the "tabs" permission was required instead.

- To use {{WebExtAPIRef("tabs.executeScript()")}} or {{WebExtAPIRef("tabs.insertCSS()")}}, you must have the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab

Alternatively, you can get these permissions temporarily, only for the currently active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Many tab operations use a Tab `id`. Tab `id`s are guaranteed to be unique to a single tab only within a browser session. If the browser is restarted, then it can and will reuse tab `id`s. To associate information with a tab across browser restarts, use {{WebExtAPIRef("sessions.setTabValue()")}}.

## Types

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Specifies the reason a tab was muted or unmuted.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : This object contains a boolean indicating whether the tab is muted, and the reason for the last state change.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Used to control how a tab is rendered as a PDF by the [`tabs.saveAsPDF()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) method.
- {{WebExtAPIRef("tabs.Tab")}}
  - : This type contains information about a tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Indicates whether the tab has finished loading.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : The type of window that hosts this tab.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Defines whether zoom changes are handled by the browser, by the extension, or are disabled.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Defines whether zoom changes will persist for the page's origin, or only take effect in this tab.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Defines zoom settings {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, and default zoom factor.

## Properties

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : A special ID value given to tabs that are not browser tabs (for example, tabs in devtools windows).

## Functions

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Creates a data URL encoding an image of the visible area of the given tab.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Creates a data URL encoding an image of the visible area of the currently active tab in the specified window.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Sets up a messaging connection between the extension's background scripts (or other privileged scripts, such as popup scripts or options page scripts) and any [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) running in the specified tab.
- {{WebExtAPIRef("tabs.create()")}}
  - : Creates a new tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Detects the primary language of the content in a tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Discards one or more tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Duplicates a tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (Manifest V2 only)
  - : Injects JavaScript code into a page.
- {{WebExtAPIRef("tabs.get()")}}
  - : Retrieves details about the specified tab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Gets details about all tabs in the specified window.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Gets information about the tab that this script is running in, as a [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Gets the tab that is selected in the specified window. **Deprecated**: use [`tabs.query({active: true})`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) instead.
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Gets the current zoom factor of the specified tab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Gets the current zoom settings for the specified tab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Go forward to the next page, if one is available.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Go back to the previous page, if one is available.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Hides one or more tabs.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Highlights one or more tabs.
- {{WebExtAPIRef("tabs.insertCSS()")}} (Manifest V2 only)
  - : Injects CSS into a page.
- {{WebExtAPIRef("tabs.move()")}}
  - : Moves one or more tabs to a new position in the same window or to a different window.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Modifies the succession relationship for a group of tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Prints the contents of the active tab.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Opens print preview for the active tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Reload a tab, optionally bypassing the local web cache.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Closes one or more tabs.
- {{WebExtAPIRef("tabs.removeCSS()")}} (Manifest V2 only)
  - : Removes from a page CSS which was previously injected by calling {{WebExtAPIRef("tabs.insertCSS()")}}.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Saves the current page as a PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sends a single message to the content script(s) in the specified tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sends a single request to the content script(s) in the specified tab. **Deprecated**: use {{WebExtAPIRef("tabs.sendMessage()")}} instead.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zooms the specified tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Sets the zoom settings for the specified tab.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Shows one or more tabs that have been {{WebExtAPIRef("tabs.hide()", "hidden")}}.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Toggles Reader mode for the specified tab.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigate the tab to a new URL, or modify other properties of the tab.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Prepare the tab to make a potential following switch faster.

## Events

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Fires when the selected tab in a window changes. **Deprecated**: use {{WebExtAPIRef("tabs.onActivated")}} instead.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Fired when a tab is attached to a window, for example because it was moved between windows.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Fired when a tab is detached from a window, for example because it is being moved between windows.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Fired when the highlighted or selected tabs in a window change. **Deprecated**: use {{WebExtAPIRef("tabs.onHighlighted")}} instead.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Fired when the highlighted or selected tabs in a window change.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Fired when a tab is moved within a window.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Fired when a tab is closed.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Fired when a tab is replaced with another tab due to prerendering.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Fires when the selected tab in a window changes. **Deprecated**: use {{WebExtAPIRef("tabs.onActivated")}} instead.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Fired when a tab is updated.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Fired when a tab is zoomed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
