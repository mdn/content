---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
page-type: http-header
browser-compat: http.headers.Set-Login
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Set-Login`** {{Glossary("Response header", "response header")}} sets the login status of a user to a federated identity provider (IdP).
This is stored by the browser and can reduce the number of requests required when authenticating a user to a relying party (RP) using an IdP.

It can be set in a top-level navigation or a same-origin subresource request on the IdP's origin site — basically, any request occuring within the IdP site can be used to set login status.

See [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more information about FedCM login status.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: status
```

## Directives

- `status`
  - : A string representing the login status to set for the IdP. Possible values are `logged-in` and `logged-out`. Browsers should ignore this header if it contains any other value.

## Examples

```http
Set-Login: logged-in

Set-Login: logged-out
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API)
