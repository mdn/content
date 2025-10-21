---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
page-type: http-header
browser-compat: http.headers.Sec-Fetch-Storage-Access
sidebar: http
---

The HTTP **`Sec-Fetch-Storage-Access`** {{Glossary("fetch metadata request header")}} provides the "storage access status" for the current fetch context.

The status indicates that permission to access third party cookies is not granted, has been granted but not activated for the current request context, or that the context has access to the cookies and they have been sent with the request.

Supporting browsers must include this header on cross-site requests when the request credential mode is [`include`](/en-US/docs/Web/API/Request/credentials#include).
The header should not be sent with same-site requests (since those requests cannot involve cross-site cookies), or if the request's [credentials mode](/en-US/docs/Web/API/Request/credentials) is "omit".
The requested resource must also have a [potentially trustworthy origin](/en-US/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins).

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
Sec-Fetch-Storage-Access: <access-status>
```

## Directives

- `<access-status>`
  - : A value indicating the access status for the current fetch context.
    The following values are allowed (servers should ignore the header with other values):
    - `none`
      - : The context does not have the [`storage-access` permission](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/storage-access) or access to unpartitioned cookies.
    - `inactive`
      - : The context has the `storage-access` permission, but has not opted into using it (and does not have unpartitioned cookie access through other means).
        If this value is set, then the {{httpheader("Origin")}} request header must also be set.
    - `active`
      - : The context has unpartitioned cookie access.

## Description

The `Sec-Fetch-Storage-Access` and {{httpheader("Activate-Storage-Access")}} HTTP headers together provide a mechanism for a server to activate an already granted [`storage-access` permission](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/storage-access) for a particular context.

This allows an optional enhancement of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) workflow that removes the need for the uncredentialed resource to be loaded.
It also allows third party credentials to be sent for embedded resources such as images, rather than just embedded documents.

### Storage Access API workflow

The [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) provides a JavaScript Web API that allows a third party resource embedded in an {{htmlelement("iframe")}} to access their cookies as though they were same-site or [unpartitioned cookies](/en-US/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies).

As covered in [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using), the first request for an embedded page is sent without its (third party) cookies.
Once loaded the embedded page calls {{domxref("Document.requestStorageAccess()")}}, which prompts the user for the [`storage-access` permission](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/storage-access).
If granted, this permission is associated with the top level sites of both the embedder and embedded pages and stored.
Calling `Document.requestStorageAccess()` also "activates" a granted permission in the current context.
The embedded page then refreshes itself.
Because the permission has been granted and activated in the current context, the new request is sent with credentials.

If the user navigates to the same page in a different browser session, or opens it the page another tab, the flow above is almost exactly the same.
Even though permission has already been granted, the embedded page is again requested without credentials, and `Document.requestStorageAccess()` still needs to be called to opt-in/activate the permission for this context.
Once that happens, the embedded page refreshes itself again.

This is inefficient, because permission has already been granted, and we shouldn't need to send and load the uncredentialed resource just so that we can call `Document.requestStorageAccess()` to activate the permission.

### Storage Access header workflow

The **`Sec-Fetch-Storage-Access`** and {{httpheader("Activate-Storage-Access")}} provide an HTTP-based mechanism for activating an already granted permission for a particular context.
This removes the need for the uncredentialed document to be returned and loaded, just so that `Document.requestStorageAccess()` can be called to activate the permission.

### The workflow

<!-- ![Sequence diagram showing flow of the two headers](mermaid_iframe.svg) -->

<!-- note, from explainer. -->

[![Mermaid diagram showing sequence flow for embedded resource using the two HTTP headers](https://mermaid.ink/img/pako:eNqVUsFOwzAM_ZXI53XqaMtYgEnTgCOX3aAcstTrorVJSdLBmPbvuM2GELuwSpXjZ79XPzd7kKZA4ODwvUUt8UGJ0or6NteMnkZYr6RqhPZsXinU_hxfoN2iDXjoiabTAHIqyugJvVxHC2-sKDGaSYnOcaa0kF5tMRBDf0TMIMHZrKsKj2dEi97u7pZ2-roSVbUUcsOk0Z5Ib0Hr2XhkhuTYSStEJo6Sjvk1MnfUFb0ua9DWyjll9MVWgpFupLkxG4WctQ6tKu5HV8nF9iojit7dP011_Y59qKJET8Gv2WI2--WGndYMAyhpKODetjiAmjpEl8K--0IOtJMac-B0LHAl2srnkOsD0eg3vxhTn5jWtOUaOG3fUdY2Bdk4Xps_6GOhyN0PaFEXaOem1R54kl73ysD38ElpEg-zUZrFE3rHk4yKO-BZMpwk43Q8IiDN0jg5DOCrHyUe3oyzwzcLf-2D?type=png)](https://mermaid.live/edit#pako:eNqVUsFOwzAM_ZXI53XqaMtYgEnTgCOX3aAcstTrorVJSdLBmPbvuM2GELuwSpXjZ79XPzd7kKZA4ODwvUUt8UGJ0or6NteMnkZYr6RqhPZsXinU_hxfoN2iDXjoiabTAHIqyugJvVxHC2-sKDGaSYnOcaa0kF5tMRBDf0TMIMHZrKsKj2dEi97u7pZ2-roSVbUUcsOk0Z5Ib0Hr2XhkhuTYSStEJo6Sjvk1MnfUFb0ua9DWyjll9MVWgpFupLkxG4WctQ6tKu5HV8nF9iojit7dP011_Y59qKJET8Gv2WI2--WGndYMAyhpKODetjiAmjpEl8K--0IOtJMac-B0LHAl2srnkOsD0eg3vxhTn5jWtOUaOG3fUdY2Bdk4Xps_6GOhyN0PaFEXaOem1R54kl73ysD38ElpEg-zUZrFE3rHk4yKO-BZMpwk43Q8IiDN0jg5DOCrHyUe3oyzwzcLf-2D)

The `Sec-Fetch-Storage-Access` is first sent with the storage access status.

<!--
Todo. Go through spec again. I know we need `Vary` to be specified here. Probably more too.

-->

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Activate-Storage-Access")}}
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
