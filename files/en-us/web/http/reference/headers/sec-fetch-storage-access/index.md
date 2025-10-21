---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
page-type: http-header
browser-compat: http.headers.Sec-Fetch-Storage-Access
sidebar: http
---

The HTTP **`Sec-Fetch-Storage-Access`** {{Glossary("fetch metadata request header")}} provides the "storage access status" for the current fetch context.

The status indicates that permission to access [unpartitioned](/en-US/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) third party cookies is not granted, has been granted but not activated for the current request context, or that the context has access to the cookies and they have been sent with the request.

Supporting browsers must include this header on cross-site requests when the request credential mode is [`include`](/en-US/docs/Web/API/Request/credentials#include).
The header should not be sent with same-site requests (since those requests cannot involve cross-site cookies), or if the request's [credentials mode](/en-US/docs/Web/API/Request/credentials) is "omit".
The requested resource must also have a [potentially trustworthy origin](/en-US/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins).

If a storage access permission has been granted but not activated, a server can respond with {{httpheader("Activate-Storage-Access")}} to request activation of the permission for the context.
For more information see [Storage access headers](/en-US/docs/Web/API/Storage_Access_API#storage_access_headers) in the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) overview.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
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
Sec-Fetch-Storage-Access: none
Sec-Fetch-Storage-Access: inactive
Sec-Fetch-Storage-Access: active
```

## Directives

A value indicating the storage access status for the current fetch context.
The following values are allowed (servers should ignore other values):

- `none`
  - : The context does not have the `storage-access` permission or access to unpartitioned cookies.
- `inactive`
  - : The context has the `storage-access` permission, but has not opted into using it (and does not have unpartitioned cookie access through other means).
    If this value is set, then the {{httpheader("Origin")}} request header should also be set.
- `active`
  - : The context has unpartitioned cookie access.
    If this value is set, then the {{httpheader("Origin")}} request header should also be set.

## Examples

See [Examples](http://localhost:5042/en-US/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#examples) in {{httpheader("Activate-Storage-Access")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Activate-Storage-Access")}}
- [Storage access headers](/en-US/docs/Web/API/Storage_Access_API#storage_access_headers) in _Storage Access API_
- [Storage access header sequences](/en-US/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in _Storage Access API_
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
