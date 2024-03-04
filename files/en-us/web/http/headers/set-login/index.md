---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Set-Login
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`Set-Login`** {{Glossary("Response header", "response header")}} is sent by a federated identity provider (IdP) to set its login status — by this, we mean "whether any users are logged into the IdP on the current browser or not". This is stored by the browser and used by the [FedCM API](/en-US/docs/Web/API/FedCM_API) to reduce the number of requests it makes to the IdP (because it does not need to waste time requesting accounts when there are no users logged in to the IdP). It also mitigates [potential timing attacks](https://github.com/fedidcg/FedCM/issues/447).

The header may be set on any response resulting from a top-level navigation or a same-origin subresource request on the IdP's origin site — basically, any interaction with the IdP site may result in this header being set, and the login status being stored by the browser.

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

  - : A string representing the login status to set for the IdP. Possible values are:

    - `"logged-in"`: The IdP has at least one user account signed in.
    - `"logged-out"`: All IdP user accounts are currently signed out.

    > **Note:** Browsers should ignore this header if it contains any other value.

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
