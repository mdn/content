---
title: WebOTP API
slug: Web/API/WebOTP_API
page-type: web-api-overview
tags:
  - API
  - WebOTP
  - Overview
  - Reference
spec-urls: https://wicg.github.io/web-otp/
---
{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

The **WebOTP API** provides a method for verifying that a phone number belongs to the user, by generating a one-time password on receipt of a specially formatted SMS message.

## Concepts and Usage

Phone numbers are often used as a way to identify the user of an app, and to verify that the number belongs to the user, SMS is frequently deployed. A typical scenario would involve a message being sent to the user with a one-time password. They would then need to copy and paste that password into a form to verify that the user owns the number.

The WebOTP API removes friction from this process by allowing the password to be received by the app and verified automatically, with no need to copy and paste any codes.

## Interfaces

- {{domxref("OTPCredential")}}
  - : Extends {{domxref("Credential")}} and contains the attributes that are returned when a new one-time password is created.

## Examples

In this example, when an SMS message arrives, and the user grants permission, an {{domxref("OTPCredential")}} object is returned with a one-time password. This password is then prefilled into the form field, and the form submitted.

[Try the demo using a phone here](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric">
```

```js
if ('OTPCredential' in window) {
  window.addEventListener('DOMContentLoaded', (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    const ac = new AbortController();
    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        ac.abort();
      });
    }
    navigator.credentials.get({
      otp: { transport:['sms'] },
      signal: ac.signal
    }).then((otp) => {
      input.value = otp.code;
      if (form) form.submit();
    }).catch((err) => {
      console.error(err);
    });
  });
}
```

## Specifications

{{Specifications}}

## See also

- [Verify phone numbers on the web with WebOTP](https://web.dev/web-otp/)
- [Fill OTP forms within cross-origin iframes with WebOTP API](https://web.dev/web-otp-iframe/)
