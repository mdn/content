---
title: SecurePaymentConfirmationRequest
slug: Web/API/SecurePaymentConfirmationRequest
page-type: web-api-interface
spec-urls: https://w3c.github.io/secure-payment-confirmation/#sctn-securepaymentconfirmationrequest-dictionary
---

{{APIRef("Payment Request API")}}

The **`SecurePaymentConfirmationRequest`** dictionary describes input to the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) when used to authenticate a user during an e-commerce transaction [using SPC with Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

An instance of this dictionary must be passed into the {{domxref("PaymentRequest.PaymentRequest()", "PaymentRequest()")}} constructor as the value of the [`data`](/en-US/docs/Web/API/PaymentRequest/PaymentRequest#data) field corresponding to a [`supportedMethods`](/en-US/docs/Web/API/PaymentRequest/PaymentRequest#supportedmethods) value of `"secure-payment-confirmation"`.

## Instance properties

- `challenge`
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} provided by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}. This helps prevent replay attacks.
- `credentialIds`
  - : A list of {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}}. These [Credential IDs](https://www.w3.org/TR/webauthn-2/#credential-id) represent Web Authentication credentials that have been registered with the relying party for authenticating during a payment with the associated `instrument`.
- `extensions` {{optional_inline}}
  - : Any [WebAuthn extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) that should be used for the passed credential(s). The caller does not need to specify the [`payment` extension](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#payment); this is added automatically.
- `instrument`
  - : The description of the instrument name and icon to display during registration and to be signed along with the transaction details. This is an object with the following properties:
    - `displayName`
      - : A string containing the payment instrument's name, which will be displayed to the user.
    - `icon`
      - : A string containing the URL of the payment instrument's icon.
    - `iconMustBeShown` {{optional_inline}}
      - : A boolean value indicating whether the icon must be successfully fetched and shown for the request to succeed. Defaults to `true`.
- `locale` {{optional_inline}}
  - : An optional list of well-formed {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} language tags, in descending order of priority, that identify the local preferences of the website. That is, this represents a language priority list {{RFC(4647, "Matching of Language Tags")}}, which the user agent can use to perform [language negotiation](/en-US/docs/Web/HTTP/Content_negotiation) and locale-affected formatting with the caller.
    > [!NOTE]
    > The locale is distinct from language or direction metadata associated with specific input members, in that it represents the caller's requested localized experience rather than assertion about a specific string value. See [SPC internationalization Considerations](https://w3c.github.io/secure-payment-confirmation/#sctn-i18n-considerations) for more discussion.
- `payeeName` {{optional_inline}}
  - : A string that serves as the display name of the payee that this SPC call is for (e.g., the merchant). Optional, may be provided alongside or instead of `payeeOrigin`.
- `payeeOrigin` {{optional_inline}}
  - : A string that is the origin of the payee that this SPC call is for (e.g., the merchant). Optional, may be provided alongside or instead of `payeeName`.
- `rpId`
  - : A string that specifies the relying party's identifier (for example "login.example.org").
- `showOptOut` {{optional_inline}}
  - : A boolean indicating whether the user should be given a chance to opt-out during the [transaction dialog UX](/en-US/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation#authenticating_a_payment). Defaults to `false`.
- `timeout` {{optional_inline}}
  - : The number of milliseconds before the request to sign the transaction details times out. At most 1 hour.

## Specifications

{{Specifications}}
