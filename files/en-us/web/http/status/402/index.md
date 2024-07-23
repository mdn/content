---
title: 402 Payment Required
slug: Web/HTTP/Status/402
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.402
---

{{HTTPSidebar}}

The HTTP **`402 Payment Required`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code is a **nonstandard** response status code reserved for future use.

This status code was created to enable digital cash or (micro) payment systems and would indicate that requested content is not available until the client makes a payment.
No standard use convention exists and different systems use it in different contexts.

## Status

```http
402 Payment Required
```

## Examples

### Payment API failure

Some payment APIs use the 402 response as a generic catch-all for failed payment requests.
The following example tries to make a call to a payment API using a POST request to initiate a transaction:

```http
POST /merchant/transfers/payment HTTP/1.1
Host: payments.example.com
Content-Type: application/json
Content-Length: 402

{
  "payment_transfer": {
    "reference": "PAYMENT123456",
    "amount": "1337",
    "currency": "EUR",
    "sender_account_uri": "pan:5299920000000149;exp=2020-08;cvc=123",
    "sender": {
      "first_name": "Brian",
      "middle_name": "Smith",
      "email": "test123@sender.example.com"
    },
    "recipient": {
      "first_name": "John",
      "middle_name": "Tyler",
      "email": "test123@example.com",
      "merchant_id": "123"
    },
    "authentication_value": "ucaf:jJJLtQa+Iws8AREAEbjsA1MAAAA",
  }
}
```

The server responds to the request with a 402 if there is a problem with the transaction, in this case, the card is expired:

```http
HTTP/1.1 402 Payment Required
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 175

{
  "error": {
    "code": "expired_card",
    "doc_url": "https://example.com/error-codes#expired-card",
    "message": "The card has expired. Verify expiration or use a different card.",
  }
}
```

## Specifications

{{Specifications}}

## Compatibility notes

This status code is _reserved_ but not defined.
Actual implementations vary in the format and contents of the response.
No browser supports a 402, and an error will be displayed as a generic `4xx` status code.

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
