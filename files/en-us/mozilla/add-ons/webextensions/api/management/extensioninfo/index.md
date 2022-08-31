---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
tags:
  - API
  - Add-ons
  - ExtensionInfo
  - Extensions
  - Reference
  - Type
  - WebExtensions
  - management
browser-compat: webextensions.api.management.ExtensionInfo
---
{{AddonSidebar()}}

An `ExtensionInfo` object contains information about an add-on.

## Type

It is an object with the following properties:

- `description`
  - : `string`. The add-on's description, taken from the manifest.json [description](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) key.
- `disabledReason`
  - : `string`. If the add-on is disabled, the reason it was disabled. One of "unknown" or "permissions_increase".
- `enabled`
  - : `boolean`. Whether or not the add-on is currently enabled.
- `homepageUrl`
  - : `string`. The add-on's homepage URL, taken from the manifest.json [homepage_url](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) key.
- `hostPermissions`
  - : `array` of `string`. The add-on's [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
- `icons`

  - : `array` of `object`. Information about the add-on's icons. An array of objects, one for each icon. Each object contains two properties:

    - `size`: an integer representing the icon's width and height in pixels.
    - `url`: a string containing a relative URL to the icon, starting at the add-on's root.

- `id`
  - : `string`. The add-on's ID.
- `installType`

  - : `string`. String describing how the add-on was installed. One of the following:

    - "admin": the add-on was installed because of an administrative policy.
    - "development": the add-on was installed unpacked from disk.
    - "normal": the add-on was installed normally from an install package.
    - "sideload": the add-on was installed by some other software on the user's computer.
    - "other": the add-on was installed in some other way.

- `mayDisable`
  - : `boolean`. Whether this add-on can be disabled or uninstalled by the user.
- `name`
  - : `string`. The add-on's name, taken from the manifest.json [name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) key.
- `offlineEnabled`
  - : `boolean`. Whether the add-on claims to support offline.
- `optionsUrl`
  - : `string`. URL for the item's [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), if it has one. This is a relative URL, starting at the add-on's root.
- `permissions`
  - : `array` of `string`. The add-on's [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).
- `shortName`
  - : `string`. A short version of the add-on's name, taken from the manifest.json [short_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name) key.
- `type`

  - : `string`. String describing the type of add-on. This is used to distinguish extensions from apps and themes. It may take any of the following values:

    - "extension": most common type of add-on.
    - "hosted_app"
    - "packaged_app"
    - "legacy_packaged_app"
    - "theme"

- `updateUrl`
  - : `string`. URL for updates to this add-on, taken from the manifest.json [applications](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key.
- `version`
  - : `string`. Version of this add-on, taken from the manifest.json [version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) key.
- `versionName`
  - : `string`. Descriptive name for this add-on's version, taken from the manifest.json [version_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) key.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/management/#type-ExtensionInfo) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
