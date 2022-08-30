---
title: events.Event
slug: Mozilla/Add-ons/WebExtensions/API/events/Event
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - events
browser-compat: webextensions.api.events.Event
---
{{AddonSidebar()}}

An object which allows the addition and removal of listeners for a browser event.

## Type

Values of this type are objects.

## Methods

- {{WebExtAPIRef("events.Event.addListener","events.Event.addListener()")}}
  - : Registers an event listener callback to an event.
- {{WebExtAPIRef("events.Event.removeListener","events.Event.removeListener()")}}
  - : Deregisters an event listener callback from an event.
- {{WebExtAPIRef("events.Event.hasListener","events.Event.hasListener()")}}
  - : Tests registration status of a listener.
- {{WebExtAPIRef("events.Event.hasListeners","events.Event.hasListeners()")}}
  - : Tests whether any listeners are registered to the event.
- {{WebExtAPIRef("events.Event.addRules","events.Event.addRules()")}}
  - : Registers rules to handle events.
- {{WebExtAPIRef("events.Event.getRules","events.Event.getRules()")}}
  - : Returns currently registered rules.
- {{WebExtAPIRef("events.Event.removeRules","events.Event.removeRules()")}}
  - : Unregisters currently registered rules.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/events/#type-Event) API. This documentation is derived from [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) in the Chromium code.
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
