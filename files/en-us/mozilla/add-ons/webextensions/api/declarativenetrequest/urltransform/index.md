---
title: declarativeNetRequest.URLTransform
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/URLTransform
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.URLTransform
---

{{AddonSidebar}}

Details describing a URL transformation to perform for a redirect rule. This object can be specified at {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}.redirect.transform.

## Type

Values of this type are objects. They contain these properties:

- `fragment` {{optional_inline}}
  - : A `string`. The new fragment for the request. Should be either empty, in which case the existing fragment is cleared; or should begin with '#'.
- `host` {{optional_inline}}
  - : A `string`. The new host name for the request.
- `password` {{optional_inline}}
  - : A `string`. The new password for the request.
- `path` {{optional_inline}}
  - : A `string`. The new path for the request. If empty, the existing path is cleared.
- `port` {{optional_inline}}
  - : A `string`. The new port for the request. If empty, the existing port is cleared.
- `query` {{optional_inline}}
  - : A `string`. The new query for the request. Should be either empty, in which case the existing query is cleared; or should begin with '?'.
- `queryTransform` {{optional_inline}}

  - : An object describing how to add, remove, or replace query key-value pairs. Cannot be specified if 'query' is specified.

    - `addOrReplaceParams` {{optional_inline}}

      - : An array of objects describing the list of query key-value pairs to be added or replaced.
        - `key`
          - : A `string`. The key value.
        - `replaceOnly` {{optional_inline}}
          - : A `boolean`. If true, the query key is replaced only if it's already present. Otherwise, the key is also added if it's missing. Defaults to false.
        - `value`
          - : A `string`. The value value.

    - `removeParams` {{optional_inline}}
      - : An array of `string`. The list of query keys to be removed.

- `scheme` {{optional_inline}}
  - : A `string`. The new scheme for the request. Allowed values are `"http"`, `"https"`, and the scheme of the extension, for example, "moz-extension" in Firefox or "chrome-extension" in Chrome. When the extension scheme is used, the `host` must be specified to generate a meaningful redirection target.
- `username` {{optional_inline}}
  - : A `string`. The new username for the request.

## Browser compatibility

{{Compat}}

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
