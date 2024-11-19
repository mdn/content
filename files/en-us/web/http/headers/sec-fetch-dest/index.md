---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
page-type: http-header
browser-compat: http.headers.Sec-Fetch-Dest
---

{{HTTPSidebar}}

The HTTP **`Sec-Fetch-Dest`** {{Glossary("fetch metadata request header")}} indicates the request's _destination_.
That is the initiator of the original fetch request, which is where (and how) the fetched data will be used.

This allows servers to determine whether to service a request based on whether it is appropriate for how it is _expected_ to be used. For example, a request with an `audio` destination should request audio data, not some other type of resource (for example, a document that includes sensitive user information).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Dest: audio
Sec-Fetch-Dest: audioworklet
Sec-Fetch-Dest: document
Sec-Fetch-Dest: embed
Sec-Fetch-Dest: empty
Sec-Fetch-Dest: fencedframe
Sec-Fetch-Dest: font
Sec-Fetch-Dest: frame
Sec-Fetch-Dest: iframe
Sec-Fetch-Dest: image
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
Sec-Fetch-Dest: track
Sec-Fetch-Dest: video
Sec-Fetch-Dest: webidentity
Sec-Fetch-Dest: worker
Sec-Fetch-Dest: xslt
```

Servers should ignore this header if it contains any other value.

## Directives

> [!NOTE]
> These directives correspond to the values returned by {{domxref("Request.destination")}}.

- `audio`
  - : The destination is audio data. This might originate from an HTML {{HTMLElement("audio")}} tag.
- `audioworklet`
  - : The destination is data being fetched for use by an audio worklet. This might originate from a call to {{domxref("Worklet.addModule()", "audioWorklet.addModule()")}}.
- `document`
  - : The destination is a document (HTML or XML), and the request is the result of a user-initiated top-level navigation (e.g. resulting from a user clicking a link).
- `embed`
  - : The destination is embedded content. This might originate from an HTML {{HTMLElement("embed")}} tag.
- `empty`
  - : The destination is the empty string. This is used for destinations that do not have their own value. For example: {{domxref("Window/fetch", "fetch()")}}, {{domxref("navigator.sendBeacon()")}}, {{domxref("EventSource")}}, {{domxref("XMLHttpRequest")}}, {{domxref("WebSocket")}}, etc.
- `fencedframe` {{experimental_inline}}
  - : The destination is a [fenced frame](/en-US/docs/Web/API/Fenced_frame_API).
- `font`
  - : The destination is a font. This might originate from CSS {{cssxref("@font-face")}}.
- `frame`
  - : The destination is a frame. This might originate from an HTML {{HTMLElement("frame")}} tag.
- `iframe`
  - : The destination is an iframe. This might originate from an HTML {{HTMLElement("iframe")}} tag.
- `image`
  - : The destination is an image. This might originate from an HTML {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, CSS {{cssxref("background-image")}}, CSS {{cssxref("cursor")}}, CSS {{cssxref("list-style-image")}}, etc.
- `manifest`
  - : The destination is a manifest. This might originate from an HTML [\<link rel=manifest>](/en-US/docs/Web/HTML/Attributes/rel/manifest).
- `object`
  - : The destination is an object. This might originate from an HTML {{HTMLElement("object")}} tag.
- `paintworklet`
  - : The destination is a paint worklet. This might originate from a call to {{domxref('Worklet.addModule', 'CSS.PaintWorklet.addModule()')}}.
- `report`
  - : The destination is a report (for example, a content security policy report).
- `script`
  - : The destination is a script. This might originate from an HTML {{HTMLElement("script")}} tag or a call to {{domxref("WorkerGlobalScope.importScripts()")}}.
- `serviceworker`
  - : The destination is a service worker. This might originate from a call to {{domxref("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}}.
- `sharedworker`
  - : The destination is a shared worker. This might originate from a {{domxref("SharedWorker")}}.
- `style`
  - : The destination is a style. This might originate from an HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} or a CSS {{cssxref("@import")}}.
- `track`
  - : The destination is an HTML text track. This might originate from an HTML {{HTMLElement("track")}} tag.
- `video`
  - : The destination is video data. This might originate from an HTML {{HTMLElement("video")}} tag.
- `webidentity`
  - : The destination is an endpoint associated with verifying user identify. For example, it is used in the [FedCM API](/en-US/docs/Web/API/FedCM_API) to verify the authenticity of identity provider (IdP) endpoints, guarding against {{glossary("CSRF")}} attacks.
- `worker`
  - : The destination is a {{domxref("Worker")}}.
- `xslt`
  - : The destination is an XSLT transform.

## Examples

### Using Sec-Fetch-Dest

A cross-site request generated by an {{HTMLElement("img")}} element would result in a request with the following HTTP request headers (note that the destination is `image`):

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} fetch metadata request headers
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
