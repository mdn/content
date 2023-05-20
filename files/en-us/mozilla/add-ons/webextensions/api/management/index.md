---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
page-type: webextension-api
browser-compat: webextensions.api.management
---

{{AddonSidebar}}

Get information about installed add-ons.

With the `management` API you can:

- get information about installed add-ons
- enable/disable add-ons
- uninstall add-ons
- find out which permission warnings are given for particular add-ons or manifests
- get notifications of add-ons being installed, uninstalled, enabled, or disabled.

Most of these operations require the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Operations that don't provide access to other add-ons don't require this permission.

## Types

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : An object that contains information about an installed add-on.

## Functions

- {{WebExtAPIRef("management.getAll()")}}
  - : Returns information about all installed add-ons.
- {{WebExtAPIRef("management.get()")}}
  - : Returns information about a particular add-on, given its ID.
- {{WebExtAPIRef("management.getSelf()")}}
  - : Returns information about the calling add-on.
- {{WebExtAPIRef("management.install()")}}
  - : Installs a particular theme, given its URL at [addons.mozilla.org](https://addons.mozilla.org).
- {{WebExtAPIRef("management.uninstall()")}}
  - : Uninstalls a particular add-on, given its ID.
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : Uninstalls the calling add-on.
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : Get the set of permission warnings for a particular add-on, given its ID.
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : Get the set of permission warnings that would be displayed for the given manifest string.
- {{WebExtAPIRef("management.setEnabled()")}}
  - : Enable/disable a particular add-on, given its ID.

## Events

- {{WebExtAPIRef("management.onInstalled")}}
  - : Fired when an add-on is installed.
- {{WebExtAPIRef("management.onUninstalled")}}
  - : Fired when an add-on is uninstalled.
- {{WebExtAPIRef("management.onEnabled")}}
  - : Fired when an add-on is enabled.
- {{WebExtAPIRef("management.onDisabled")}}
  - : Fired when an add-on is disabled.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/management/) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.

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
