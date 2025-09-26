---
title: Phishing
slug: Web/Security/Attacks/Phishing
page-type: guide
sidebar: security
---

Phishing is a {{glossary("social engineering")}} attack in which a user is tricked into believing that they are interacting with a site with which they have an account, when in reality they are interacting with the attacker. The attacker convinces the user to enter their credentials on the fake site, and thereby steals the user's credentials.

## Overview

Phishing is a very old but still very common attack, which has gone through many variations, both to evade defenses and to take advantage of new vulnerabilities. In a basic form, though:

1. The attacker registers a domain name that resembles the target site. For example, if the user's banking website is `my-bank.example.com`, the attacker could register `my-bank.examp1e.com`.
2. The attacker creates a site at that address that resembles the real site.
3. The attacker sends the user an email, purporting to be from `my-bank.example.com`, giving some reason to ask the user to visit the site, and containing a link to the fake site `my-bank.examp1e.com`.
4. The user clicks the link and is asked to sign in. They enter their username and password, and the attacker now has their credentials.

Phishing attacks sometimes use different techniques to contact their victims, such as text messages or voice calls, and sometimes don't involve websites at all, convincing users to tell them passwords or PIN codes verbally.

Some phishing attacks are highly indiscriminate, sending out many messages to potential victims, in the hope that some will be tricked. In _spear-phishing_ attacks, on the other hand, attackers research specific victims, gathering personal information about them to make the lure more convincing. For example, the email may purport to come from someone the victim knows, and even include private information.

Phishing attacks are not dependent on naive or inexperienced users: decades of experience has shown that even highly experienced and knowledgeable users can be vulnerable to phishing attacks, especially when they are busy, tired, or distracted.

## Defenses

One thing that makes phishing challenging for a website to defend against is that the target site is not involved at all in the attack. It's entirely dependent on the user being tricked by the attacker. In this section we will discuss some practices that can help, but the only one that is really effective is using [passkeys](#web_authentication_passkeys) instead of passwords.

### DNS configuration

Phishing emails often forge the sender address, to make the victim think that the email really came from the target website. Three {{glossary("DNS")}} records help email servers detect these forgeries, which helps ensure that phishing emails are marked as spam in the victim's email client, or are blocked entirely.

- The [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/) record lists addresses that are allowed to send an email from the domain. A receiving email server extracts the domain name from the email's `Return-Path` header, and looks up the SPF record associated with that domain.
- The [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/) record enables the sender to {{glossary("digital signature", "digitally sign")}} emails. The receiving server extracts the domain name from the signature, and uses it to look up looks up the DKIM record associated with that domain. The DKIM record includes the public key used to verify the signature. The domain name in the signature must also be aligned with the domain name in the email's `From` header (this essentially means that the domain names must match or the value in the `From` header must be a subdomain of the domain in the signature).
- The [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/) tells the recipient how to handle SPF and DKIM failures: whether to quarantine them as spam, reject them, or allow them.

You should set these DNS records for your domains, to help email servers recognize forged messages.

### Password managers

Password managers can provide some degree of protection against phishing attacks. They fulfill three main functions:

- **Password generation**: Creating strong passwords when users sign up.
- **Password storage**: Storing a user's passwords securely, so the user doesn't have to remember them (and can therefore use stronger passwords)
- **Password entry**: Automatically entering the user's password for a site, when the user visits the site's login page.

It's the last of these that can help against phishing. The user might not see the difference between the fake domain `my-bank.examp1e.com` and the real domain `my-bank.example.com`, but the password manager will, and as a result it will not automatically enter the real password on the fake site. With luck, this will be enough of a warning to the user that the login request is not legitimate.

As a web developer, you can't make your users use a password manager. But you can, if you are not careful, make it impossible for password managers to integrate with your site. The article [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) is an excellent summary of practices to follow, and practices to avoid, if you want users to be able to use password managers on your site. It's also important to test your site with password managers, both those built into browsers and popular standalone applications.

Unfortunately, users have been trained to expect tools to fail sometimes, and to work around their failures. So even if a user has a password manager, and it works with your site, and it does not auto-fill the password during a phishing attempt, you still have no guarantee that the user will not just paste the password in manually.

### Multi-factor authentication

Using {{glossary("multi-factor authentication", "multi-factor authentication (MFA)")}} to authenticate users makes phishing more difficult but, depending on the specific method used, does not prevent it.

In particular, in the most common MFA implementations, the user has to enter their password and another code, called a _one-time password_ (OTP), which is unique to this login attempt. Two common variants are:

- SMS-based OTP:
  - The user provides their cellphone number when they register.
  - After the user has supplied their username and password, the website sends an SMS to the user which contains an OTP.
  - The user enters the OTP.
  - If the OTP values match, the user is signed in.

- Time-based OTP (TOTP):
  - The user has an authenticator app installed.
  - After the user has supplied their username and password, the website calculates an OTP using the current time as input.
  - The user's authenticator does the same calculation, and the user enters the OTP that the app generated.
  - If the OTP values match, the user is signed in.

TOTP is considered more secure than SMS-based OTP, because it is possible for attackers to intercept SMS messages. However, from the point of view of phishing, both methods are vulnerable.

To phish a user who uses OTP as a second factor, the attacker's fake site is an active manipulator in the middle, between the user and the real site:

1. The attacker sends the user the email, containing the link to the fake site.
2. The user clicks the link in the email, and enters their username and password in the fake site.
3. The fake site relays the username and password to the real site.
4. The real site generates a TOTP.
5. The fake site asks the user to enter their TOTP.
6. The user's authenticator app generates the same TOTP, and the user enters it on the fake site.
7. The fake site relays the TOTP to the real site, and the attacker is given access.

![Diagram showing how a phishing attack can work against 2-factor TOTP authentication](totp-phish.svg)

This is much more difficult than just phishing a password, because the attacker must operate in real time. However, phishing toolkits greatly reduce the complexity of accomplishing it.

### Web Authentication (passkeys)

The strongest technical defense against phishing is to authenticate users using _passkeys_, which are based on the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API).

A passkey is created when the user registers on the site, and is specific to the {{glossary("origin")}} for which it was originally created. The passkey is generated by, and stored in, a module called an _authenticator_, which is built into or attached to the user's device.

Unlike passwords or OTP codes, a user never manually enters a passkey on a site: in fact, the passkey is never transmitted to the site at all. When a website asks the user to authenticate using Web Authentication, the browser asks the authenticator for a passkey that matches the site's origin. If it can find one, the authenticator generates a token which the browser sends to the website. The website verifies the token and signs the user in.

Because the passkey is specific to the site's origin, if a passkey was created for the user's account at `my-bank.example.com`, the user will not be able to use it on `my-bank.examp1e.com`. The browser just won't consider it applicable to the fake site.

This makes passkeys an effective defense against phishing. Passkeys are a much newer authentication method than passwords or OTP, and the tooling surrounding them is less mature. However, this is changing, and passkeys may eventually displace passwords as the most common authentication method on the web.

### Personalized security indicator

Another phishing defense, which isn't often used any more, is for the website to display a secret message or image to the user on its login page.

1. After the user signs up, the user is asked to choose a secret message or image to be associated with their account.
2. When the user signs in, they first enter their username.
3. The login page then shows the secret associated with the account.
4. If the secret is not what the user expected, then the user should not enter their password.

The idea is that the attacker doesn't know what the secret is, so can't display it on the fake login page.

In a variation of this technique, the website uses a persistent cookie to decide which secret to display, instead of the username.

In practice there are a few difficulties with this technique:

- It relies on the user paying attention to the security indicator: that is, it relies on user education. Experience has shown that as a general principle (that is, out of a controlled context such as a securely managed corporation) user education is not very effective in preventing phishing attacks.
- Depending on the mechanism used to decide which secret to display, it may be vulnerable to the same manipulator in the middle attack as MFA.
- The mechanism the server uses to decide which secret to display may be vulnerable: for example, it may be easier for an attacker to discover a username than to discover a password. With a username, an attacker could determine the secret and build a convincing fake site.

As a result of these weaknesses, this defense is rarely used: both MFA and passkeys are considered to be stronger defenses.

### Defense summary checklist

- Set `SPF`, `DKIM`, and `DMARC` DNS records for your domains.
- Consider using passkeys to authenticate users.
- If you use passwords, consider using MFA, and ensure that password managers can work with your site.
