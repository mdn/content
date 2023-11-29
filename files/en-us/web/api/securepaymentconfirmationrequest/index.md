---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
page-type: web-api-interface
spec-urls: https://w3c.github.io/secure-payment-confirmation/#sctn-securepaymentconfirmationrequest-dictionary
---

{APIRef("Payment Request API")}}

The **`SecurePaymentConfirmationRequest`** dictionary describes input to the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) when used to authenticate a user during an e-commerce transaction [using SPC with Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_with_Secure_Payment_Confirmation).

## Instance properties

- `challenge`
  - : A random [challenge](/en-US/docs/Web/API/CredentialsContainer/create#challenge) that the relying party generates on the server side to prevent replay attacks.
- `rpId`
  - : The [Relying Party Identifier](/en-US/docs/Web/API/CredentialsContainer/get#rpid) of the credentials.
- `credentialIds`
  - : The list of credential identifiers for the given instrument.
- `instrument`
  - : The description of the instrument name and icon to display during registration and to be signed along with the transaction details.
- `timeout`
  - : The number of milliseconds before the request to sign the transaction details times out. At most 1 hour.
- `payeeName` {{optional_inline}}
  - : The display name of the payee that this SPC call is for (e.g., the merchant). Optional, may be provided alongside or instead of `payeeOrigin`.
- `payeeOrigin`
  - : The origin of the payee that this SPC call is for (e.g., the merchant). Optional, may be provided alongside or instead of `payeeName`.
- `extensions`
  - : Any [WebAuthn extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) that should be used for the passed credential(s). The caller does not need to specify the [`payment` extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment); this is added automatically.
- `locale`
  - : An optional list of well-formed {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} language tags, in descending order of priority, that identify the local preferences of the website. That is, this represents a language priority list {{RFC(4647, "Matching of Language Tags")}}, which the user agent can use to perform [language negotiation](/en-US/docs/Web/HTTP/Content_negotiation) and locale-affected formatting with the caller.
    > **Note:** The locale is distinct from language or direction metadata associated with specific input members, in that it represents the caller's requested localized experience rather than assertion about a specific string value. See [SPC internationalization Considerations](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations) for more discussion.
- `showOptOut`
  - : Whether the user should be given a chance to opt-out during the [transaction confirmation UX](https://w3c.github.io/secure-payment-confirmation/#sctn-transaction-confirmation-ux). Optional, default false.

## Specifications

{{Specifications}}
