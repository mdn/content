---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CredentialsContainer.get.identity_option
spec-urls: https://w3c-fedid.github.io/FedCM/#dictdef-identitycredentialrequestoptions
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`IdentityCredentialRequestOptions`** dictionary represents the object passed to {{domxref("CredentialsContainer.get()")}} as the value of the `identity` option.

When an `identity` option is provided in a `get()` call made on a {{glossary("Relying party", "relying party")}} (RP) website, the user is offered a list of {{glossary("identity provider", "federated identity providers")}} (IdPs) as sign-in options. Once the user signs in successfully using one of these options, the promise returned by the `get()` call returns an {{domxref("IdentityCredential")}} object.

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

- `mode` {{optional_inline}}
  - : A string specifying the UI mode to use for the sign-in flow. Possible values are:
    - `active`
      - : The sign-in flow must be initiated via a user action such as clicking a button. If `mode` is set to `active`, `providers` can only have a length of `1`, otherwise the `get()` promise will reject.
    - `passive`
      - : The sign-in flow can be initiated without direct user interaction. This is the default value.

    See [Active versus passive mode](/en-US/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) for more details of the difference between the two modes.

- `providers`
  - : An array of objects specifying details of the IdPs that the user should be presented with as options for signing in. These objects can contain the following properties:
    - `configURL`
      - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) for more information.
    - `clientId`
      - : A string specifying the RP client identifier. This information is issued by the IdP to the RP in a separate process that is specific to the IdP.
    - `domainHint` {{optional_inline}}
      - : A string hinting at the domain of accounts that the RP is interested in. If provided, the user agent will only show accounts that match the domain hint value in their [`domain_hints`](/en-US/docs/Web/API/FedCM_API/IDP_integration#domain_hints) array. If `"any"` is specified, the RP will show any account that is associated with at least one domain hint.
    - `fields` {{optional_inline}}
      - : An array of strings specifying user information that the RP wishes to obtain from the IdP for use in the sign-in process. The exact strings will vary by IdP, but tend to be similar to `"name"`, `"email"`, or `"profile-picture-url"`.
    - `loginHint` {{optional_inline}}
      - : A string providing a hint about the account option(s) the browser should provide for the user to sign in with. This is useful in cases where the user has already signed in and the site asks them to reauthenticate. Otherwise, the reauthentication process can be confusing when a user has multiple accounts and can't remember which one they used to sign in previously. The value for the `loginHint` property can be taken from the user's previous sign-in, and is matched against the `login_hints` values provided by the IdP in the array of user information returned from the IdP's [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `nonce` {{optional_inline}}
      - : A random string that can be included to ensure the response is issued specifically for this request and prevent {{glossary("replay attack", "replay attacks")}}.
    - `params` {{optional_inline}}
      - : A custom object used to specify any additional key-value parameters that RP needs to send to the IdP. This will vary by IdP and could include, for example, additional permission requests such as `admin: true`, or `calendar: "readonly"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
