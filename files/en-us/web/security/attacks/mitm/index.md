---
title: Manipulator in the Middle (MITM)
slug: Web/Security/Attacks/MITM
page-type: guide
sidebar: security
---

In a Manipulator in the Middle (MITM) attack, the attacker inserts themselves between two entities that are trying to communicating with each other.

On the web, an MITM attack generally takes place between the user's browser and the server, and enables the attacker to see and potentially modify any of the traffic exchanged over HTTP.

A common way for an attacker to execute an MITM attack is to set up a wireless access point in a public place, such as a cafe or an airport, and wait for a victim to connect to it. If a victim does connect, then the attacker will be able to read and modify any data exchanged between the user's browser and any sites they connect to.

## Defenses against MITM

The primary defense against MITM is to serve your site over {{glossary("HTTPS")}} (HTTP over {{glossary("TLS")}}). HTTPS prevents an attacker from reading traffic, or from modifying it in a predictable way.

You should serve all pages over HTTPS, not just pages that you consider especially sensitive.

The [TLS guide](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security) describes the main issues to consider here. In particular:

- Use a [secure TLS configuration](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security#configuring_tls).

- Implement [server authentication](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security#server_authentication).

- [Serve all resources over TLS](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security#mixed_content): not only HTML documents but all subresources such as scripts, stylesheets, images, and fonts.

- If you redirect HTTP requests to use HTTPS, implement [strict transport security (HSTS)](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security#upgrading_http_connections).

## See also

- [Let's Encrypt](https://letsencrypt.org/)
- [TLS Recommended Configurations](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
