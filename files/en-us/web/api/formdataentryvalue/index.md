---
title: FormDataEntryValue
slug: Web/API/FormDataEntryValue
tags:
  - FormDataEntryValue
---
{{APIRef("XMLHttpRequest")}}

A `string` or `{{domxref("File")}}` that represents a single value from a set of `{{domxref("FormData")}}` key-value pairs.

This type is returned by the `{{domxref("FormData.get()")}}` and `{{domxref("FormData.getAll()")}}` methods. The `{{domxref("FormData.get()")}}` method returns a single value while `{{domxref("FormData.getAll()")}}` returns an array of `FormDataEntryValue`s.

Note that the `{{domxref("FormData.append()")}}` and `{{domxref("FormData.set()")}}` methods allow passing a `{{domxref("Blob")}}` value, which is converted to a `File` in the process.
