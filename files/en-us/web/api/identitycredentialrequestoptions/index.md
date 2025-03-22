---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
page-type: web-api-interface
spec-urls: https://w3c-fedid.github.io/FedCM/#dictdef-identitycredentialrequestoptions
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

The **`IdentityCredentialRequestOptions`** dictionary represents the object passed to {{domxref("CredentialsContainer.get()")}} as the value of the `identity` option.

It is used to request an {{domxref("IdentityCredential")}} provided by a {{glossary("identity provider", "federated identity provider")}} that supports the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API).

## Instance properties

- `context` {{optional_inline}}

  - : A string specifying the context in which the user is authenticating with FedCM. The browser uses this value to vary the text in its FedCM UI to better suit the context. Possible values are:

    - `"continue"`

      - : Suitable for situations where the user is choosing an identity to continue to the next page in the flow, which requires a sign-in. Browsers will provide a text string similar to:

        > _Continue to \<page-origin\> with \<IdP\>_

    - `"signin"`

      - : Suitable for general situations where the user is signing in with an IdP account they've already used on this origin. Browsers will provide a text string similar to:

        > _Sign in to \<page-origin\> with \<IdP\>_

    - `"signup"`

      - : An option for situations where the user is signing in to the origin with a new IdP account they've not used here before. Browsers will provide a text string similar to:

        > _Sign up to \<page-origin\> with \<IdP\>_

    - `"use"`

      - : Suitable for situations where a different action, such as validating a payment, is being performed. Browsers will provide a text string similar to:

        > _Use \<page-origin\> with \<IdP\>_

    The default value is `"signin"`.

- `providers`

  - : An array containing a single object specifying details of an IdP to be used to sign in. This object can contain the following properties:

    - `configURL`
      - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) for more information.
    - `clientId`
      - : A string specifying the RP's client identifier. This information is issued by the IdP to the RP in a separate process that is specific to the IdP.
    - `loginHint` {{optional_inline}}
      - : A string providing a hint about the account option(s) the browser should provide for the user to sign in with. This is useful in cases where the user has already signed in and the site asks them to reauthenticate. Otherwise, the reauthentication process can be confusing when a user has multiple accounts and can't remember which one they used to sign in previously. The value for the `loginHint` property can be taken from the user's previous sign-in, and is matched against the `login_hints` values provided by the IdP in the array of user information returned from the IdP's [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `nonce` {{optional_inline}}
      - : A random string that can be included to ensure the response is issued specifically for this request and prevent {{glossary("replay attack", "replay attacks")}}.

    > [!NOTE]
    > Currently FedCM only allows the API to be invoked with a single IdP, i.e. the `providers` array has to have a length of 1. Multiple IdPs must be supported via different `get()` calls.

## Specifications

{{Specifications}}
