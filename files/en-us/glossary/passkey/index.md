---
title: Passkey
slug: Glossary/Passkey
page-type: glossary-definition
sidebar: glossarysidebar
---

A **passkey** is a discoverable {{glossary("public-key cryptography", "public-key credential")}} used to authenticate a user to a website without requiring the user to enter a password.
Each passkey is bound to a specific user account and website.

When a passkey is created, an {{glossary("authenticator")}} generates a public/private key pair.
The website stores the public key, while the authenticator protects the private key.
To sign in, the authenticator uses the private key to sign a challenge from the website after the user authorizes the operation, often with a PIN or biometric.
Because the private key is not shared with the website and a passkey can only be used within its website scope, passkeys are resistant to phishing and credential-stuffing attacks.

Passkeys may be stored on a device, on a hardware security key, or by a credential manager that can synchronize them between a user's devices.

## See also

- [Passkeys](/en-US/docs/Web/Security/Authentication/Passkeys)
- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- {{glossary("Multi-factor authentication")}}
