---
title: Challenge-response authentication
slug: Glossary/Challenge
page-type: glossary-definition
---

{{GlossarySidebar}}

In security protocols, a _challenge_ is some data sent to the client by the server in order to generate a different response each time. Challenge-response protocols are one way to fight against {{glossary("replay attack", "replay attacks")}} where an attacker listens to the previous messages and resends them at a later time to get the same credentials as the original message.

The [HTTP authentication protocol](/en-US/docs/Web/HTTP/Authentication) is challenge-response based, though the "Basic" protocol isn't using a real challenge (the realm is always the same).

## See also

- [Challenge-response authentication](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) on Wikipedia.
