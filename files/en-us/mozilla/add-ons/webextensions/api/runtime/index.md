---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
page-type: webextension-api
browser-compat: webextensions.api.runtime
---

{{AddonSidebar}}

This module provides information about your extension and the environment it's running in.

It also provides messaging APIs enabling you to:

- Communicate between different parts of your extension. For advice on choosing between the messaging options, see [Choosing between one-off messages and connection-based messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Communicate with other extensions.
- Communicate with native applications.

## Types

- {{WebExtAPIRef("runtime.Port")}}
  - : Represents one end of a connection between two specific contexts, which can be used to exchange messages.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Contains information about the sender of a message or connection request.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifies the browser's operating system.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifies the browser's processor architecture.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Contains information about the platform the browser is running on.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Result of a call to {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : The reason that the {{WebExtAPIRef("runtime.onInstalled")}} event is being dispatched.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : The category of warning that dispatched the {{WebExtAPIRef("runtime.onPerformanceWarning")}} event.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : The severity of warning that dispatched the {{WebExtAPIRef("runtime.onPerformanceWarning")}} event.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : The reason that the {{WebExtAPIRef("runtime.onRestartRequired")}} event is being dispatched.

## Properties

- {{WebExtAPIRef("runtime.lastError")}}
  - : This value is set when an asynchronous function has an error condition that it needs to report to its caller.
- {{WebExtAPIRef("runtime.id")}}
  - : The ID of the extension.

## Functions

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Retrieves the [Window](/en-US/docs/Web/API/Window) object for the background page running inside the current extension.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Opens your extension's [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages).
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Gets details about the contexts associated with the extension.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Gets the frame ID of any window global or frame element.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Gets the complete [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, serialized as an object.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Given a relative path from the [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) to a resource packaged with the extension, returns a fully-qualified URL.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Sets a URL to be visited when the extension is uninstalled.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Reloads the extension.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Checks for updates to this extension.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Establishes a connection from a content script to the main extension process, or from one extension to a different extension.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Connects the extension to a native application on the user's computer.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sends a single message to event listeners within your extension or a different extension. Similar to {{WebExtAPIRef('runtime.connect')}} but only sends a single message, with an optional response.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sends a single message from an extension to a native application.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Returns information about the current platform.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Returns information about the browser in which this extension is installed.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Returns a DirectoryEntry for the package directory.

## Events

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Fired when the extension is first installed, when the extension is updated to a new version, and when the browser is updated to a new version.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Sent to the event page just before the extension is unloaded. This gives the extension an opportunity to do some cleanup.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Sent after {{WebExtAPIRef("runtime.onSuspend")}} to indicate that the extension won't be unloaded after all.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Fired when an update is available, but isn't installed immediately because the extension is currently running.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Fired when an update for the browser is available, but isn't installed immediately because a browser restart is required.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Fired when a connection is made with either an extension process or a content script.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Fired when a connection is made with another extension.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Fired when a message is sent from either an extension process or a content script.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Fired when a message is sent from another extension. Cannot be used in a content script.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Fired when a runtime performance issue is detected for the extension.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Fired when the device needs to be restarted.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
