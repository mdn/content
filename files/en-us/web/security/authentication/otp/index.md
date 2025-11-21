---
title: One-time passwords (OTP)
slug: Web/Security/Authentication/OTP
page-type: guide
sidebar: security
---

A _one-time password_ (OTP), also known as _one-time PIN_, or _one-time authorization code_ (OTAC) is a generated code that is specific to a single login attempt. The website either sends the code to the user in a separate channel, such as an email, or the user's device independently generates the code. The user then enters the code on the site to log in.

## Overview

Authentication flows with one-time passwords are based on something the user has (a phone, an email address, a secret stored in an authenticator app) rather than something they know (a password) or something they are (biometric information, such as a fingerprint).

One-time passwords can either be used in addition to traditional passwords, or they can replace them. Often they are used to confirm the user's intentions, for example when making a payment.

Many OTPs are 6 digits long with a 1-in-a-million chance to guess correctly. This is much better than 4 digits with just 10,000 possible combinations. The security mechanism that OTPs rely on is the temporal component: OTPs are usually only valid once for a defined timeframe and invalidated after use. That's why OTPs have a short expiration time (ideally ≤5 minutes; 30–120 seconds for stronger protection).

This article discusses three common implementations for one-time passwords: email, SMS, and time-based one-time passwords (TOTP). TOTP is considered the most secure delivery channel in this comparison.

## Email OTP

In email-based OTP, during registration:

- The user provides their email address to the website.
- The website verifies that they have access to this email address.

When the user asks to sign in:

- The website generates the one-time code and emails it to the user.
- The user enters the code on the website.
- The website signs the user in.

There are two common approaches to delivering the code:

1. The website sends a personalized one-time link to the user's email address. When the user clicks the link, the website authenticates the user. The link is only valid for a few minutes and expires immediately after the user clicks it. This option can be highly convenient for the user. However, it requires the user to complete the process on the same device and in the same browser, which can be an issue when logging in from an in-app browser or a different device. Asking users to click links in emails also makes them more vulnerable to [phishing](/en-US/docs/Web/Security/Attacks/Phishing) attacks.

2. The website sends a personalized one-time code to the user's email address. The user is then asked to type the code into the website on their desired device and in their desired browser. This process can be slower and less convenient for the user but it offers greater flexibility as where to login and is considered more secure than using links in emails.

For a good user experience with all email-based OTP methods, it is important that users receive the OTP emails reasonably quickly.

## SMS OTP

In SMS OTP, the user provides their cellphone number during registration, and at sign-in the website sends the one-time code to the phone in an SMS message.

A weakness of both email and SMS methods is that an attacker could intercept the message that contains the code. However, SMS is considered more vulnerable:

- Although SMS messages can be encrypted using [A5/X stream ciphers](https://en.wikipedia.org/wiki/A5/1), various weaknesses in the cipher have been identified and messages can be decrypted within minutes or seconds.
- There are known flaws in SMS routing protocols ([SS7](https://en.wikipedia.org/wiki/Signalling_System_No._7)) which result in attackers being able to redirect text messages to them.
- In [SIM swap scams](https://en.wikipedia.org/wiki/SIM_swap_scam) the attacker abuses the mobile number portability (normally used when switching services, or when a phone is lost or stolen) to impersonate the victim.
- Carriers can also recycle phone numbers to new users after an account is closed.

Also, users might be using a different SIM card or an eSIM when traveling and might have disabled their usual SIM card or SMS services to save costs, in which case they won't receive any SMS one-time passwords.

Because of this, you should not use SMS OTP on its own to establish new sessions or for general authentication. Instead, if at all, only use it as a second factor or for confirming intentions (e.g., payments).

### Autocompleting SMS codes

To make it easier for users to enter SMS codes into a site, and to reduce the likelihood of phishing attacks, the [standard for origin-bound one-time codes delivered via SMS](https://wicg.github.io/sms-one-time-codes/) enables websites to support autocomplete for one-time code values.

To enable this, you need to format the SMS message like this:

```plain
Your verification code is 123456.

@www.example.com #123456
```

Then in your site's login form, provide an {{HTMLElement("input")}} element with the `autocomplete=one-time-code` attribute value set.

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

The browser will automatically extract the code from the SMS, and if the origin given in the message matches the origin of the login form, it will autofill the `<input>` element with the code.

### WebOTP API

The [WebOTP API](/en-US/docs/Web/API/WebOTP_API) gives websites programmatic access to one-time codes delivered over SMS. However, it doesn't have good cross-browser support, and unless you need programmatic access to the code, you don't need to use this API. Using the standardized format and `autocomplete=one-time-code` should be enough for autocomplete to work across browsers.

## TOTP

With time-based one-time passwords, the website does not send the sign-in code to the user. Instead, the website and the user are able to generate the same code independently of each other, based on the current time and a shared secret. To generate the code, the user must install an app on their device: this is called an _authenticator app_.

At registration time:

1. The user installs an authenticator app, if they don't have one already.
2. The website:
   - Generates the shared secret.
   - Securely stores the secret, associating it with the user's account.
   - Embeds the secret and some related metadata in an [`otpauth`](https://www.rfc-editor.org/rfc/rfc6238) URI.
   - Encodes the URI as a QR code and invites the user to scan it.

3. The authenticator app on the user's device decodes the URI from the QR code and parses the URI, storing the secret and related metadata.

At sign-in time, the user provides the current code value, which the authenticator app calculates based on the secret and the current time. The website is able to perform the same calculation, and if the values match, the user can be signed in.

### TOTP algorithm

The time-based one-time password (TOTP) algorithm is specified in {{rfc("6238")}}. It is an extension of the HMAC-Based One-Time Password Algorithm (HOTP), which is specified in {{rfc("4226")}}.

The algorithm creates one-time codes that are 6 digits long and which are only valid for a limited amount of time (usually 30 seconds). This means that unlike the other OTP systems we've described, TOTP implements time-based validity and automatic invalidation by design.

The secret key is a random value recommended to be at least 160 bits long.

You should use a well-regarded third-party package to implement TOTP, such as [pyotp](https://pyauth.github.io/pyotp/), for Python, or [otpauth](https://www.npmjs.com/package/otpauth), for Node.

### The `otpauth` URI format

The `otpauth` URI format is defined in this [IETF draft](https://www.ietf.org/archive/id/draft-linuxgemini-otpauth-uri-00.html).

For TOTP, the URI is formatted like this:

```plain
otpauth://totp/LABEL?secret=MQCHJLS6FJXT2BGQJ6QMG3WCAVUC2HJZ&issuer=My_Website
```

The `LABEL` component identifies the user: for example, it could be their username.

The URI includes a number of query string parameters, of which the most important are:

- `secret`
  - : The shared secret encoded in [Base32](https://en.wikipedia.org/wiki/Base32).
- `issuer`
  - : The name of the provider or service that this account is associated with. Technically optional, but strongly recommended.

### Authenticator apps

A large number of authenticator apps, both proprietary and open source, support TOTP. For example: [Ente Auth](https://ente.io/auth/), [2FAS](https://2fas.com), and [Microsoft Authenticator](https://www.microsoft.com/en-US/security/mobile-authenticator-app).

### Securing the secret

With TOTP the secret key must be stored securely in both the server and the client.

For the server, the considerations are similar to those for [password storage](/en-US/docs/Web/Security/Authentication/Passwords#storing_passwords): the server must store TOTP secrets in such a way that the attacker cannot access them, even if they get access to the server's database.

For the client, the authenticator app should provide some degree of protection for the secret key.

## Strengths and weaknesses

Compared with [passwords](/en-US/docs/Web/Security/Authentication/Passwords), the biggest strength of OTP is that the user is not involved in creating or remembering secrets, so OTP is not vulnerable to [guessing](/en-US/docs/Web/Security/Authentication/Passwords#guessing) or [credential stuffing](/en-US/docs/Web/Security/Authentication/Passwords#credential_stuffing) attacks.

### Weaknesses

- SMS and email-based OTP have the risk that an attacker could intercept OTP codes sent from the server, and SMS is much weaker than email in this respect.

- TOTP is not vulnerable to interception, but adds the risk that an attacker could get access to the shared secret.

- All forms of OTP are vulnerable to [phishing attacks](/en-US/docs/Web/Security/Attacks/Phishing#multi-factor_authentication).

Security aside, OTP has some usability issues:

- SMS and email-based OTP can be awkward to use, especially if there is significant latency between the server sending the code and the user receiving it.
- For TOTP, the need to install an authenticator app is a significant barrier to sign-up: but of course, if the user has already installed the app for a different site, then they won't need to do it again when they sign up to your site.

## OTP recommendations

OTP, and in particular TOTP, can be useful as an {{glossary("Multi-factor authentication", "additional authentication factor")}} and for confirming user intentions, for example when making a payment. For general authentication purposes, it is better to use [passkeys](/en-US/docs/Web/Security/Authentication/Passwords), which are more resistant to phishing attacks.

If you implement OTP, consider the following recommendations:

- Prefer TOTP to email-based or SMS-based OTP, and especially avoid SMS-based OTP
- If you use TOTP:
  - Use a reputable library to generate secrets and OTP codes
  - Store the secret securely in the server
