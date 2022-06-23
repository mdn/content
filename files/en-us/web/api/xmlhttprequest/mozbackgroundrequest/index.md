---
title: XMLHttpRequest.mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
page-type: web-api-instance-property
tags:
  - API
  - Background Service
  - Mozilla
  - Non-standard
  - Property
  - Reference
  - XHR
  - XMLHttpRequest
  - mozBackgroundRequest
---
{{APIRef('XMLHttpRequest')}}

> **Note:** This method is not available from Web content. It requires elevated privileges to access.

**`XMLHttpRequest.mozBackgroundRequest`** is a Boolean, indicating if the object represents a background service request. If `true`, no load group is associated with the request, with security dialogs prevented from being shown to the user.

In cases in where a security dialog (such as authentication or a bad certificate notification) would normally be shown, this request fails instead.

> **Note:** This property must be set before calling `open()`.
