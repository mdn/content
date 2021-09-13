---
title: Window.pkcs11
slug: Web/API/Window/pkcs11
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Deprecated
  - Property
  - Reference
  - Window
browser-compat: api.Window.pkcs11
---
{{APIRef()}}{{deprecated_header}}

## Summary

Returns the `pkcs11` object, which is used to install drivers and other software associated with the [pkcs11 protocol](/en-US/docs/Pkcs11_protocol). If `pkcs11` isn't supported, this property returns `null`.

> **Note:** This property has been returned `null` since Gecko 1.9.0.14 (Firefox 3.0.14) and **removed** in Gecko 29.0 {{geckoRelease(29)}}) for security reasons. For more information on installing PKCS11 modules, see [installing PKCS11 modules](/en-US/docs/PKCS11_Module_Installation). See {{ Bug(326628) }} for details on why the property was removed.

## Syntax

    objRef = window.pkcs11

## Example

     window.pkcs11.addModule(sMod, secPath, 0, 0);

## Notes

See {{interface("nsIDOMPkcs11")}} for more information about how to manipulate `pkcs11` objects.

## Specifications

Not part of specification.

## Browser compatibility

{{Compat}}
