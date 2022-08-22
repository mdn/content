---
title: HTMLVideoElement.onMSVideoOptimalLayoutChanged
slug: Web/API/HTMLVideoElement/onMSVideoOptimalLayoutChanged
page-type: web-api-instance-property
tags:
  - onMSVideoOptimalLayoutChanged
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`onMSVideoOptimalLayoutChanged`** is an event which occurs when the [msIsLayoutOptimalForPlayback](/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback) state changes.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

| Value                   | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| Event Property          | object.onMSVideoOptimalLayoutChanged = handler;              |
| attachEvent Method      | object.attachEvent("onMSVideoOptimalLayoutChanged", handler) |
| addEventListener Method | object.addEventListener("", handler, useCapture)             |

<table class="standard-table">
  <tbody>
    <tr>
      <td>Synchronous</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Bubbles</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## See also

- [msIsLayoutOptimalForPlayback](/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback)
- [HTMLVideoElement](/en-US/docs/Web/API/HTMLVideoElement)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
