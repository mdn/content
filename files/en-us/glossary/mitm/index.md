---
title: MitM
slug: Glossary/MitM
tags:
  - Glossary
  - Security
---
A **manipulator-in-the-middle attack** (MitM) intercepts a communication between two systems. For example, a Wi-Fi router can be compromised.

Comparing this to physical mail: If you're writing letters to each other, the mail carrier can intercept each letter you mail. They open it, read it, eventually modify it, and then repackage the letter and only then send it to whom you intended to sent the letter for. The original recipient would then mail you a letter back, and the mail carrier would again open the letter, read it, eventually modify it, repackage it, and give it to you. You wouldn't know there's a manipulator in the middle in your communication channel – the mail carrier is invisible to you and to your recipient.

In physical mail and in online communication, MITM attacks are tough to defend. A few tips:

- Don't just ignore certificate warnings. You could be connecting to a phishing server or an imposter server.
- Sensitive sites without HTTPS encryption on public Wi-Fi networks aren't trustworthy.
- Check for HTTPS in your address bar and ensure encryption is in-place before logging in.

## See also

- OWASP: [Manipulator-in-the-middle attack](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
- PortSwigger: [Latest manipulator-in-the-middle attacks news](https://portswigger.net/daily-swig/mitm)
- Wikipedia: [Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
