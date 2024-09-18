---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
page-type: webextension-api
browser-compat: webextensions.api.downloads
---

{{AddonSidebar}}

Enables extensions to interact with the browser's download manager. You can use this API module to download files, cancel, pause, resume downloads, and show downloaded files in the file manager.

To use this API you need to have the "downloads" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) specified in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

## Types

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Defines options for what to do if the name of a downloaded file conflicts with an existing file.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Defines a set of possible reasons why a download was interrupted.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Defines a set of common warnings of possible dangers associated with downloadable files.
- {{WebExtAPIRef("downloads.State")}}
  - : Defines different states that a current download can be in.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Represents a downloaded file.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Represents the difference between two strings.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Represents the difference between two doubles.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Represents the difference between two booleans.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Represents the time a download took to complete.
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : Defines a set of parameters that can be used to search the downloads manager for a specific set of downloads.

## Functions

- {{WebExtAPIRef("downloads.download()")}}
  - : Downloads a file, given its URL and other optional preferences.
- {{WebExtAPIRef("downloads.search()")}}
  - : Queries the {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} available in the browser's downloads manager, and returns those that match the specified search criteria.
- {{WebExtAPIRef("downloads.pause()")}}
  - : Pauses a download.
- {{WebExtAPIRef("downloads.resume()")}}
  - : Resumes a paused download.
- {{WebExtAPIRef("downloads.cancel()")}}
  - : Cancels a download.
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : Retrieves an icon for the specified download.
- {{WebExtAPIRef("downloads.open()")}}
  - : Opens the downloaded file with its associated application.
- {{WebExtAPIRef("downloads.show()")}}
  - : Opens the platform's file manager application to show the downloaded file in its containing folder.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Opens the platform's file manager application to show the default downloads folder.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Erases matching {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} from the browser's download history, without deleting the downloaded files from disk.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Removes a downloaded file from disk, but not from the browser's download history.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Prompts the user to accept or cancel a dangerous download.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Enables or disables the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it.

## Events

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Fires with the {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} object when a download begins.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Fires with the `downloadId` when a download is erased from history.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : When any of a {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}'s properties except `bytesReceived` changes, this event fires with the `downloadId` and an object containing the properties that changed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API.

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
