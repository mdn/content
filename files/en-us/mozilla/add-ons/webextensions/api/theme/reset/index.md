---
title: theme.reset()
slug: Mozilla/Add-ons/WebExtensions/API/theme/reset
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Theme
  - WebExtensions
  - reset
browser-compat: webextensions.api.theme.reset
---
<div>{{AddonSidebar()}}</div>

<p>Resets any theme that was applied using the {{WebExtAPIRef("theme.update()")}} method.</p>

<p>Note that this will always reset the theme back to the original default theme, even if the user had selected a different theme before this extension's theme was applied (see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1415267">bug 1415267</a>).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">browser.theme.reset(
  windowId     // integer
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>windowId</code> {{optional_inline}}</dt>
 <dd><code>integer</code>. The ID of a window. If this is provided, the theme applied to that window will be reset. If it is omitted the theme will be reset on all windows.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This code applies a theme, then removes it when the user clicks a browser action:</p>

<pre class="brush: js">browser.theme.update(themes.night);

browser.browserAction.onClicked.addListener(() =&gt; {
  browser.theme.reset();
});</pre>

<p>{{WebExtExamples}}</p>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
