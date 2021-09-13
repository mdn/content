---
title: FormDataEntryValue
slug: Web/API/FormDataEntryValue
tags:
  - FormDataEntryValue
---
<div>{{APIRef("XMLHttpRequest")}}</div>

<p>A <code>string</code> or <code>{{domxref("File")}}</code> that represents a single value from a set of <code>{{domxref("FormData")}}</code> key-value pairs.</p>

<p>This type is returned by the <code>{{domxref("FormData.get()")}}</code> and <code>{{domxref("FormData.getAll()")}}</code> methods. The <code>{{domxref("FormData.get()")}}</code> method returns a single value while <code>{{domxref("FormData.getAll()")}}</code> returns an array of <code>FormDataEntryValue</code>s.</p>

<p>Note that the <code>{{domxref("FormData.append()")}}</code> and <code>{{domxref("FormData.set()")}}</code> methods allow passing a <code>{{domxref("Blob")}}</code> value, which is converted to a <code>File</code> in the process.</p>
