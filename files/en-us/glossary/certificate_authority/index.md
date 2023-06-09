---
title: Certificate authority
slug: Glossary/Certificate_authority
page-type: glossary-definition
---

{{GlossarySidebar}}

A certificate authority (CA) is an organization that {{Glossary("Signature/Security", "signs")}} {{Glossary("Digital certificate", "digital certificates")}} and their associated {{Glossary("Key", "public keys")}}, thereby asserting that the contained information and keys are correct.

For a website digital certificate, this information minimally includes the name of the organization that requested the digital certificate (e.g., Mozilla Corporation), the site that it is for (e.g., mozilla.org), and the certificate authority.

Certificate authorities are the part of the Internet [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) that allows browsers to verify website identity and securely connect over SSL (and HTTPS).

> **Note:** Web browsers come preloaded with a list of "root certificates". The browser can use these to reliably check that the website certificate was signed by a certificate authority that "chains back" to the root certificate (i.e. was trusted by the owner of the root certificate or an intermediate CA). Ultimately this process relies on every CA performing adequate identity checks before signing a certificate!

## See also

- [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) on Wikipedia
- [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) on Wikipedia
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)
