---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Activate-Storage-Access
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Activate-Storage-Access`** {{glossary("response header")}} allows a server to activate a granted permission to access its [unpartitioned cookies](/en-US/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) in a cross-site request.

The server relies on permission state information provided in the request's {{httpheader("Sec-Fetch-Storage-Access")}} header.

The headers are collectively referred to as [storage access headers](/en-US/docs/Web/API/Storage_Access_API#storage_access_headers).
They provide an efficient alternative to first loading the resource without cookies, using the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API#) to activate the permission, and then reloading the resource with cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
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
Activate-Storage-Access: retry; allowed-origin="https://foo.bar"
Activate-Storage-Access: retry; allowed-origin=*
Activate-Storage-Access: load
```

## Directives

- `retry`
  - : Request that the browser activate the storage-access permission for the context and then retry the request with cookies included.
    The `allowed-origin` parameter must be specified to allow the specific origin (specify `*` to allow any origin).
- `load`
  - : Request that the browser activate the store-access permission for the context and then load the resource.

## Description

The [Storage Access API](/en-US/docs/Web/API/Storage_Access_API#) provides a JavaScript mechanism to allow an embedded resource to request `storage-access` permission.
This enables sending third-party cookies in requests, which would otherwise be blocked by default in most browsers.
The resource must first be requested without cookies, so the server returns an uncredentialed version of the resource that will not have access to its own cookies.
After loading, this resource can call {{domxref("Document.requestStorageAccess()")}} with transient activation to request the storage-access permission.
If granted by the user, the permission is stored by the browser in a key associated with the embedder and embedded _site_.
The browser must then reload the resource, which it can now request with cookies because it has the `active` permission state for the current context.

The permission is granted for a particular embedder/embedded site, but only activated for a particular context, such as an `<iframe>` or browser tab.
This means that if you load the same page in a new tab or `<iframe>`, the permission state of that context will be `inactive`; it won't become `active` until the permission is activated.
The normal storage access flow is to again request the resource without cookies, call `Document.requestStorageAccess()` to activate the existing permission, then reload the resource with cookies.

The resource has to be loaded at least once to be granted the storage-access permission.
However, once granted, a server can use `Activate-Storage-Access` to activate the permission for other contexts.
This avoids the need to load the resource just to activate the permission by calling `Document.requestStorageAccess()`.

The way this works is that:

1. The browser adds `Sec-Fetch-Storage-Access: inactive` to requests when the context has permission but it isn't active (along with the `Origin` header indicating the source of the request).
2. If the server gets `Sec-Fetch-Storage-Access: inactive` it can respond with `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` to ask the browser to activate the permission for the context and retry the request.
3. If the browser gets the retry request, it activates the permission and sends the request again, this time with `Sec-Fetch-Storage-Access: active` and including cookies.
4. If the server sees a request with `Sec-Fetch-Storage-Access: active` and cookies, it responds with the credentialed version of the resource.
   Once loaded by the browser, this resource has access to its cookies as though it were a first-party resource.

Responses must also include the {{httpheader("Vary")}} header with `Sec-Fetch-Storage-Access`.

## Examples

These examples show requests with {{httpheader("Sec-Fetch-Storage-Access")}} for contexts that have different storage access permission states, and corresponding responses with `Activate-Storage-Access`.
They use the example of a site, `https://mysite.example`, which includes an {{htmlelement("iframe")}} that embeds a user profile page, `embedded.com/user/profile`.

### Server activating a permission

This example assumes that the user has already granted permission for the context, but it has not yet been activated.
(With the API, we'd activate the permission by reloading the resource so it can call `Document.requestStorageAccess()`.)

The request is for a cross-site `<iframe>` with credentials mode ["include"](/en-US/docs/Web/API/Request/credentials#include).
The browser has added `Sec-Fetch-Storage-Access: inactive` to the request, because the `secure-access` permission has been granted but not activated.
It hasn't added cookies because they are blocked by default.
The `Origin` is also set because the server needs to know the source of the request.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: inactive
Credentials-Mode: include
```

The server responds with `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, indicating that the browser should activate the granted permission and retry the request with cookies.
The server includes the {{httpheader("Vary")}} header, as the response may change with `Sec-Fetch-Storage-Access`.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

The browser activates the permission and makes a new request.
Below you can see that it sets `Sec-Fetch-Storage-Access: active` and this time includes the third-party cookies.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

The server then responds with the credentialed resource that includes `Activate-Storage-Access: load`.
The resource is loaded and has access to its cookies as though it were a first-party embed.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### secure-access permission initially not granted

This example assumes that it is the _first_ time that the user has visited a page that embeds anything from `embedded.com`, so the storage access permission has not been granted.

The headers can only activate a permission for a context that has already been granted — they can't be used to _grant_ the storage-access permission in the first place.
The embedded page must therefore be loaded without cookies and then call {{domxref("Document.requestStorageAccess()")}} with transient activation to request the storage-access permission.
This is the same flow as if the headers were not present.

> [!NOTE]
> The headers are added where appropriate when the permission hasn't been granted, but don't materially affect the message flow or browser behavior.
> Since the example doesn't demonstrate the main purpose of the headers we have presented it after the "already granted" example.

The request is the same as in the previous example except that the browser has added `Sec-Fetch-Storage-Access: none`, because the `secure-access` permission has not been granted.
Again, cookies aren't added because they are blocked by default.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: none
Credentials-Mode: include
```

The server returns a non-credentialed version of the resource.
This includes the {{httpheader("Vary")}} header, as the response may change with `Sec-Fetch-Storage-Access`.
Note that it does not include `Activate-Storage-Access` as the server can't activate a permission if none has been granted.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

The embedded page would then call {{domxref("Document.requestStorageAccess()")}} with transient activation to request the storage-access permission.
If the storage-access permission is granted for the embedded page, it is also activated.

It would then reload itself, resulting in the following request.
This time the browser adds `Sec-Fetch-Storage-Access: active` and includes the third-party cookies, reflecting the permission state of the embedded content.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

The server responds with the credentialed version of the resource, which may be different to the first version that was loaded, and adds the header `Activate-Storage-Access: load`.
The browser loads the page, which will now have access to its own cookie information.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: load

<html>
  ...
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-Fetch-Storage-Access")}}
- [Storage access headers](/en-US/docs/Web/API/Storage_Access_API#storage_access_headers) in _Storage Access API_
- [Storage access header sequences](/en-US/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in _Storage Access API_
