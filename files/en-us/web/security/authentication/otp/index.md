---
title: One-time passwords (OTP)
slug: Web/Security/Authentication/OTP
page-type: guide
sidebar: security
---

A _one-time password_ (OTP), also known as _one-time PIN_, or _one-time authorization code_ (OTAC) is a generated code that is specific to a single login attempt. The website either sends the code to the user in a separate channel, such as an email, or the user's device independently generates the code. The user then enters the code on the site to log in. Unlike a password, there's no long-term secret to remember or to store securely.

## Overview

Authentication flows with one-time passwords are based on something the user has (a phone, an email address, an authenticator) rather than something they know (a password) or something they are (biometric information, such as a fingerprint).

One-time passwords can either be used in addition to traditional passwords, or they can replace them. Often they are used to confirm the user's intentions, for example when making a payment.

Many OTPs are 6 digits long with a 1-in-a-million chance to guess correctly. This is much better than 4 digits with just 10,000 possible combinations. The security mechanism that OTPs rely on is the temporal component: OTPs are usually only valid once for a defined timeframe and invalidated after use. That's why OTPs have a short expiration time (ideally ≤5 minutes; 30–120 seconds for stronger protection).

TOTPs (time-based one-time passwords) implement the temporal component and the invalidation by default.

This article discusses three common implementations for one-time passwords: email, SMS, and authenticator apps (TOTP). They are all delivery methods for one-time passwords and TOTP is considered the most secure delivery channel in this comparison.

## Email OTP flows

For email-based OTP, there are two common methods: In the first method, the website sends a personalized one-time link to an authenticated email address. When the user clicks the link, the website authenticates the user. The link expires right after the user clicked it and often it is only valid for a few minutes. This one-click solution can be highly convenient and quick for the user. However, this requires the user to complete the process on the same device and in the same browser, which can be an issue when logging in from an in-app browser or a different device.. Such links in emails are also quite prone to phishing attacks.

In the second method, websites send a personalized one-time authorization code (OTAC) to an authenticated email address. The user is then asked to type the OTAC into the website on their desired device and in their desired browser. This process can be slower and less convenient for the user but it offers greater flexibility as where to login and is considered more secure than using links in emails.

For a great user experience with all email-based OTP methods, it is important to ensure users receive the OTP emails reasonably quick. Otherwise, they will be unable to complete their current action.

To implement email-based OTP, users need to register an email address they would like to use for one-time password authentication. Typically, the user's email address is already part of the account registration process which makes email-based OTP quite common.

## SMS OTP flows

An alternative to email-based OTP is text messaging via Short Message Service (SMS) to the user's phone. However, note that SMS is not considered to be a safe method for a few reasons:

- Although SMS messages can be encrypted using [A5/X stream ciphers](https://en.wikipedia.org/wiki/A5/1), various weaknesses in the cipher have been identified and can messages be decrypted within minutes or seconds.
- There are known flaws in SMS routing protocols ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)) which results in attackers being able to redirect text messages to them.
- In [SIM swap scams](https://en.wikipedia.org/wiki/SIM_swap_scam) the attacker abuses the mobile number portability (normally used when switching services, or when a phone is lost or stolen) to impersonate the victim.
- Carriers can also recycle phone numbers to new users after an account got closed.

Because SMS-based OTP is insecure, it is not recommended for use to establish new sessions or for general authentication. Instead, if at all, only use it as a second factor or for confirming intentions (e.g., payments).

### SMS message format

The user experience when using SMS-based OTPs can be quite brittle and users might get tricked into providing the OTP to malicious sites. To help with that, the [standard for origin-bound one-time codes delivered via SMS](https://wicg.github.io/sms-one-time-codes/), defines standard SMS formats that are suitable for programmatic extraction of OTPs and associate OTPs with specific websites (origins). An origin-bound SMS message should be formatted like this:

```plain
Your verification code is 123456.

@www.example.com #123456
```

### HTML markup

In order for a website to find the associated SMS and propose the OTP code for autocompletion, provide an {{HTMLElement("input")}} element with the `autocomplete=one-time-code` attribute value set.

```html
<form action="/verify-otp" method="POST">
  <input
    required
    type="text"
    autocomplete="one-time-code"
    inputmode="numeric"
    maxlength="6"
    pattern="\d{6}" />
  <input type="submit" />
</form>
```

### WebOTP API

In Chromium-based browsers, the [WebOTP API](/en-US/docs/Web/API/WebOTP_API) is available additionally as an extension of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API). Unless you need programmatic access to the {{domxref("OTPCredential")}}, you don't need to use this API. Formatting the SMS in the standardized format and using `autocomplete=one-time-code` should be enough for autocomplete to work across browsers.

## TOTP flows (authenticator app)

The time-based one-time password (TOTP) algorithm is specified in [RFC 6238](https://www.rfc-editor.org/rfc/rfc6238). It creates one-time codes that are 6 digits long and which are only valid for a limited amount of time (usually 30 seconds). It is similar to other OTP systems but implements time-based validity and automatic invalidation by design.

In order for TOTP to work, the following steps will need to happen:

1. The website generates and shares a secret seed (which can be made accessible using a QR code).
2. The user generates a TOTP token based on the secret seed and the current time (authenticator apps can help with this).
3. The user enters the TOTP token on the website to authenticate.

### TOTP secret sharing

To setup TOTP, a website needs to share a secret key with the user. A TOTP secret key is a randomly generated [Base32](https://en.wikipedia.org/wiki/Base32) encoded seed. For example, the following command generates a 32-character Base32 random string::

```plain
LC_ALL=C tr -dc 'A-Z2-7' </dev/urandom | head -c 32; echo
```

This secret can be provided to the user in the form of a QR code, however, if you want to avoid QR codes, all you really need is an URI in the `otpauth` URI format as defined in this [IETF draft](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html).

The URI must be formatted like this:

```plain
otpauth://totp/?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ
```

Usually, users will store multiple TOTP secrets in their TOTP authenticator app, therefore it can be useful to provide a label for the issuer, so that the shared secret is associated with a service. However, labels can also reveal service names to an attacker if they gain access to the authenticator app.

```plain
otpauth://totp/ExampleWebsite?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ
```

The URI is an URL query string and it has a few parameters (support in authenticator applications may vary). The most interesting parameters are:

- `secret`
  - : The shared secret encoded in `base32`.
- `algorithm` {{optional_inline}}
  - : The algorithm used for the TOTP tokens. Possible values: `sha1` (default), `sha256`, `sha512`.
- `digits` {{optional_inline}}
  - : The number of digits that should be outputted for the TOTP token. 6 digits is the default value.
- `period` {{optional_inline}}
  - : The refresh period in seconds for the TOTP tokens.

If you'd like to use QR codes, you can use [`qrencode`](https://fukuchi.org/works/qrencode/) or similar libraries and create an image from the command line, for example:

```plain
qrencode -t PNG -o qr-totp.png 'otpauth://totp/ExampleWebsite?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ'
```

### Generating TOTP codes

With the shared secret key and the current time as inputs, you can now produce a unique, time-based code. This usually gets done using a cryptographic algorithm, typically `HMAC-SHA1` or `HMAC-SHA256`.

Several apps, like [Ente Auth](https://ente.io/auth/), [2FAS](https://2fas.com) or [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app), allow you to store secrets you've received from various websites or services. You don't necessarily need to use an authenticator app, but if you do, choose one that is trustworthy and secure. For example, there are several TOTP token generator tools online, but you might not know what they are doing with your shared secrets. If you use online services to quickly generate TOTP tokens, at least consider to not provide details for which service the shared secret is intended for.

## OTP recommendations

OTP, and in particular TOTP, can be useful as an additional (2FA) authentication method and for confirming user intentions, for example when making a payment. For general authentication purposes, much stronger mechanism, such as [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API), should be considered. If you implement one-time passwords, consider the following recommendations:

- Bind the (T)OTP to a single session or transaction only.
- Use TOTP instead of your own OTP algorithm.
- If you implement your own OTP:
  - Use 6 or more digits.
  - Set short expiry (ideally ≤5 minutes; 30–120 seconds for stronger protection).
  - Invalidate OTPs after use.
- If you use email:
  - Ensure users receive the OTP emails quickly.
  - Prefer one-time authorization codes over providing clickable links.
- If you use SMS:
  - Format messages in origin-bound standard format.
  - Use `autocomplete=one-time-code`.
  - Monitor and mitigate SIM swap and interception risks.
- If you use TOTP (authenticator apps):
  - Use a trustworthy authenticator app to safely store shared secrets.
