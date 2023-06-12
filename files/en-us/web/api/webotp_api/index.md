---
title: WebOTP API
slug: Web/API/WebOTP_API
page-type: web-api-overview
spec-urls: https://wicg.github.io/web-otp/
---

{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

The **WebOTP API** is an extension of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) that enables web apps to verify that a phone number belongs to a user, for example when using it as a sign-in factor. This is done via a two-step process:

1. The app client requests a one-time password (OTP), which is obtained from a specially-formatted SMS message sent by the app server.
2. This is then entered into a validation form on the app client and sent back to the server to verify that it matches what was originally sent in the SMS.

## WebOTP concepts and usage

Phone numbers are often used as a way to identify the user of an app. An SMS is frequently deployed to verify that the number belongs to the user. This typically contains an OTP that the user is required to copy and paste into a form on the app to verify that they own the number; a somewhat clunky user experience.

Use cases include:

- Using a phone number as an account identifier instead of the traditional email address.
- Using a phone number as an extra factor (i.e. multifactor authentication) to improve sign-in security.
- Verification of sensitive actions, for example OK'ing a payment or transferring control of an account.

The WebOTP API allows web apps to expedite this validation process by copying the OTP from the SMS and passing it to the app automatically after the user has provided consent. Most native platforms have an equivalent API.

### How does it work?

The process works like so:

1. At the point where phone number verification is required, an app client will ask a user to enter their phone number into a form, which is then submitted to the app server.
2. The app client then invokes {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with an `otp` option, to request an OTP from the underlying system when a specially-formatted SMS message is received from the app server. This SMS should contain the app's domain to allow the system to identify the correct message, and the OTP code. The `get()` call is {{jsxref("Promise")}}-based, and waits for the SMS message to be sent.
3. Just after Step 2 has occurred, the app server should send the SMS message to the specified phone number.
4. When the SMS is received on the device, provided it contains the app's domain the browser will display a dialog asking the user if they consent to the OTP being retrieved. If they do consent, the `get()` call will fulfill with an {{domxref("OTPCredential")}} object containing the OTP.
5. You can then use the OTP in whatever way you wish. Typical usage would be to set it as the value of the validation form on the app client and then submit the form, making the process as seamless as possible.
6. The app server will then verify that the OTP sent back to it matches what it originally sent in the SMS and, if so, complete the process (for example, sign the user in).

### The SMS message format

A typical SMS message looks like so:

```
Your verification code is 123456.

@www.example.com #123456
```

- The first and second lines are optional, and are for human-readability.
- The last line is mandatory. It must be the line line if there are others present, and must consist of:
  - The domain part of the URL of the website that invoked the API, preceded by a `@`.
  - Followed by a space.
  - Followed by the OTP, preceded by a pound sign (`#`).

> **Note:** The provided domain value must not include a URL schema, port, or other URL features not shown above.

If the `get()` method is being invoked by a 3rd party site embedded in an {{htmlelement("iframe")}}, the SMS should be structured as followed:

```
Your verification code is 123456.

@top-level.example.com #123456 @embedded.com
```

In this case, the last line must consist of:

- The domain part of the top-level domain, preceded by a `@`.
- Followed by a space.
- Followed by the OTP, preceded by a pound sign (`#`).
- Followed by a space.
- Followed by the domain part of the embedded domain, preceded by a `@`.

## Controlling access to the API

The availability of WebOTP can be controlled using a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) specifying a {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} directive. This directive has a default allowlist value of `"self"`, meaning that by default these methods can be used in top-level document contexts.

You could specify a directive allowing use of it in a specific cross-origin domain (i.e.inside an {{htmlelement("iframe")}}) like this:

```http
Permissions-Policy: otp-credentials=(self "https://embedded.com")
```

Or could you specify it directly on the `<iframe>` like this:

```html
<iframe src="https://embedded.com/..." allow="otp-credentials"> ... </iframe>
```

> **Note:** Where a policy forbids use WebOTP `get()`, the {{jsxref("Promise", "promises")}} returned by it will reject with a `SecurityError` {{domxref("DOMException")}}.

## Interfaces

- {{domxref("OTPCredential")}}
  - : Returned when a WebOTP `get()` call fulfills; includes a `code` property that contains the retrieved OTP.

## Extensions to other interfaces

- {{domxref("CredentialsContainer.get()")}}, the `otp` option
  - : Calling `get()` with an `otp` option instructs the user agent to attempt to retrieve an OTP from the underlying system's SMS app.

## Examples

In this example, when an SMS message arrives, and the user grants permission, an {{domxref("OTPCredential")}} object is returned with an OTP. This password is then prefilled into the verification form field, and the form is submitted.

[Try the demo using a phone here](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

The form field includes an [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute with a value of `one-time-code`. This is not needed for the WebOTP API to work, but it is worth including. As a result, Safari will prompt the user to autofill this field with the OTP when a correctly-formatted SMS is received, even thought it doesn't fully support the WebOTP API.

```html
<input type="text" autocomplete="one-time-code" inputmode="numeric" />
```

The JavaScript is as follows:

```js
// Feature detect support via OTPCredential availability
if ("OTPCredential" in window) {
  window.addEventListener("DOMContentLoaded", (e) => {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;
    // Set up an AbortController to use with the OTP request
    const ac = new AbortController();
    const form = input.closest("form");
    if (form) {
      // Abort the OTP request if the user attempts to submit the form manually
      form.addEventListener("submit", (e) => {
        ac.abort();
      });
    }
    // Request the OTP via get()
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        // When the OTP is received by the app client, enter it into the form
        // input and submit the form automatically
        input.value = otp.code;
        if (form) form.submit();
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
```

Another good use for the {{domxref("AbortController")}} is to cancel the `get()` request after a certain amount of time:

```js
setTimeout(() => {
  // abort after 30 seconds
  ac.abort();
}, 30 * 1000);
```

If the user becomes distracted or navigates somewhere else, it is good to cancel the request so that they don't get presented with a permission prompt that is no longer relevant to them.

## Specifications

{{Specifications}}

## See also

- [Verify phone numbers on the web with WebOTP](https://developer.chrome.com/articles/web-otp/)
- [Fill OTP forms within cross-origin iframes with WebOTP API](https://web.dev/web-otp-iframe/)
