---
title: Screen.mozBrightness
slug: Web/API/Screen/mozBrightness
page-type: web-api-instance-property
tags:
  - API
  - API:Mozilla Extensions
  - Deprecated
  - Non-standard
  - Property
browser-compat: api.Screen.mozBrightness
---
{{APIRef("CSSOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

Indicates how bright the screen's backlight is, on a scale from 0 (very dim) to 1 (full
brightness); this value is a double-precision float.

You can read and write this attribute even when the screen is disabled, but the
backlight is off while the screen is disabled. If you write a value of X into this
attribute, the attribute may not have the same value X when you later read it. Most
screens don't support as many different brightness levels as there are doubles between 0
and 1. The value's precision might be reduced before storing it.

## Value

A number.

## Specifications

Not part of specification.

## Browser compatibility

{{Compat}}
