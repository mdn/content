---
title: runtime.PlatformNaclArch
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformNaclArch
page-type: webextension-api-type
browser-compat: webextensions.api.runtime.PlatformNaclArch
sidebar: addonsidebar
---

> [!NOTE]
> **This type is deprecated** in favor of {{WebExtAPIRef("runtime.PlatformArch")}}. `PlatformArch` is also available in {{WebExtAPIRef("runtime.PlatformInfo")}}, which you obtain using {{WebExtAPIRef("runtime.getPlatformInfo()")}}.

The enumerated value representing the CPU instruction set architecture of Google Native Client used by the browser. This enum is deprecated, following the removal of Google Native Client from Google Chrome. As of 2026, Chromium intends to remove this enum.

## Type

- `ARM`
  - : The string literal `"arm"`. Represents all versions of the ARM ISA, including all 32-bit and 64-bit variants. Equivalent to [`PlatformArch.arm`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#arm) (32-bit variant) and `PlatformArch.arm64` combined into one value.
- `X86_32`
  - : The string literal `"x86-32"`. Represents the 32-bit variant of the x86 architecture. Equivalent to [`PlatformArch.x86_32`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-32).
- `X86_64`
  - : The string literal `"x86-64"`. Represents the 64-bit variant of the x86 architecture. Equivalent to [`PlatformArch.X86_64`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-64).
- `MIPS`
  - : The string literal `"mips"`. Represents the 32-bit variant of the MIPS ISA, which was never supported by official releases. Equivalent to `PlatformArch.mips`.
- `MIPS64`
  - : The string literal `"mips64"`. Represents the 64-bit variant of the MIPS ISA, which was never supported by official releases. Equivalent to `PlatformArch.mips64`.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformNaclArch) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
