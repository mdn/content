---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
page-type: webextension-api
browser-compat: webextensions.api.commands
---

{{AddonSidebar}}

Listens for the user executing commands registered using the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

Also provides features to update the shortcut key settings. See [Updating shortcuts](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#updating_shortcuts) in the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) guide for more information.

## Types

- {{WebExtAPIRef("commands.Command")}}
  - : Object containing a command's settings.

## Functions

- {{WebExtAPIRef("commands.getAll")}}
  - : Gets all registered commands for the extension.
- {{WebExtAPIRef("commands.openShortcutSettings")}}
  - : Opens the Manage Extension Shortcuts page, highlighting the extension's shortcut options, if it has any.
- {{WebExtAPIRef("commands.reset")}}
  - : Resets a command's description and shortcut to the values given in the manifest key.
- {{WebExtAPIRef("commands.update")}}
  - : Changes the description or shortcut for a command.

## Events

- {{WebExtAPIRef("commands.onChanged")}}
  - : Fired when the keyboard shortcut for a command is changed.
- {{WebExtAPIRef("commands.onCommand")}}
  - : Fired when a command is executed using its associated keyboard shortcut.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.

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
