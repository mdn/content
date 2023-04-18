---
title: "XMLHttpRequest: upload property"
short-title: upload
slug: Web/API/XMLHttpRequest/upload
page-type: web-api-instance-property
browser-compat: api.XMLHttpRequest.upload
---

{{APIRef('XMLHttpRequest')}}

The {{domxref("XMLHttpRequest")}} `upload` property returns an {{domxref("XMLHttpRequestUpload")}} object that can be observed to monitor an upload's progress.

It is an opaque object, but because it's also an {{domxref("XMLHttpRequestEventTarget")}}, event listeners can be attached to track its process.

> **Note:** Attaching event listeners to this object prevents the request from being a "simple request" and will cause a preflight request to be issued if cross-origin; see [CORS](/en-US/docs/Web/HTTP/CORS). Because of this, event listeners need to be registered before calling {{domxref("XMLHttpRequest.send", "send()")}} or upload events won't be dispatched.

> **Note:** The spec also seems to indicate that event listeners should be attached after {{domxref("XMLHttpRequest.open", "open()")}}. However, browsers are buggy on this matter, and often need the listeners to be registered _before_ {{domxref("XMLHttpRequest.open", "open()")}} to work.

The following events can be triggered on an upload object and used to monitor the upload:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}</td>
      <td>The upload has begun.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/progress_event", "progress")}}</td>
      <td>
        Periodically delivered to indicate the amount of progress made so far.
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/abort_event", "abort")}}</td>
      <td>The upload operation was aborted.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/error_event", "error")}}</td>
      <td>The upload failed due to an error.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/load_event", "load")}}</td>
      <td>The upload completed successfully.</td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}</td>
      <td>
        The upload timed out because a reply did not arrive within the time
        interval specified by the
        {{domxref("XMLHttpRequest.timeout")}}.
      </td>
    </tr>
    <tr>
      <td>{{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}</td>
      <td>
        The upload finished. This event does not differentiate between success
        or failure, and is sent at the end of the upload regardless of the
        outcome. Prior to this event, one of <code>load</code>,
        <code>error</code>, <code>abort</code>, or <code>timeout</code> will
        already have been delivered to indicate why the upload ended.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequestUpload")}}
