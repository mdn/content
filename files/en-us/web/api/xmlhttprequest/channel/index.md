---
title: XMLHttpRequest.channel
slug: Web/API/XMLHttpRequest/channel
page-type: web-api-instance-property
tags:
  - API
  - Non-standard
  - Property
  - Reference
  - XHR
  - XMLHttpRequest
  - channel
  - nsIChannel
---
{{APIRef('XMLHttpRequest')}}

XMLHttpRequest.channel is an `nsIChannel` that used by the object when performing the request. This is `null` if the channel hasn't been created yet. In the case of a multi-part request, this is the initial channel, not the different parts in the multi-part request. **Requires elevated privileges to access.**
