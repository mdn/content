---
title: Server Side Request Forgery (SSRF)
slug: Web/Security/Attacks/SSRF
page-type: guide
sidebar: security
---

**Server‑Side Request Forgery (SSRF)** is a vulnerability that allows an attacker to make HTTP (or other network) requests to arbitrary destinations. SSRF makes these requests originate from within a server itself, which typically has broader access than an external client.

The attack can cause exposure of internal resources or allow performing actions that would otherwise not be accessible from the outside.

## Example scenario

Suppose your application has an endpoint that fetches images from a provided URL:

```http
GET /fetch-image?url=https://example.com/image.png
```

If the `url` parameter is not properly validated, an attacker could supply malicious targets. For example:

```http
?url=http://localhost:443/admin/internal-files/org-chart.png
?url=http://customer1.app.localhost.my.company.com
?url=file:///etc/passwd
```

In these cases the attacker could get access to sensitive data, but even if the attacker does not receive response content (blind SSRF), and the server still performs the request, the attack might lead to other vulnerabilities such as an {{glossary("Denial of Service", "Denial of Service (DoS)")}} attack that could exhaust (internal) services among other things.

## SSRF variants

SSRF attacks can present themselves in a few different variants:

- Standard SSRF: The attacker receives the full response from the (internal) request.
- Blind SSRF: The attacker does not receive a response but can infer behavior from the status codes, DNS logs, etc.
- Redirection SSRF: The attacker uses redirects or redirect chains to bypass validation and filtering logic to reach internal services.

## Defenses against SSRF

Mitigating SSRF vulnerabilities requires multiple defense strategies combining input validation, careful response handling, and a secure network architecture. Some key approaches include:

### Input validation and allow-listing

Only allow requests to trusted destinations. For example, the `fetch-image` service discussed above could only access allow-listed domains:

```js
const ALLOWED_DOMAINS = ["https://api.example.com", "https://cdn.example.com"];
```

### Blocking protocols and URL schemes

Ensure only specific URL schemes are allowed. Most likely only allowing `https://` is enough.

### Redirect validation

Do not follow redirects automatically and also enforce input validation and/or allow-listing to redirected URLs. Limit redirect chains.

### Least privilege and isolation

Ensure the service making outbound requests does not run with elevated privileges and avoid co-locating request-capable services with sensitive internal services.

## Defense summary checklist

- Review all features that fetch resources and validate or allow-list user inputs.
- Block all protocols except for HTTPS.
- Beware of URL redirections and limit redirect chains.
- Apply a least privilege principle for server network permissions: ideally servers should not have unrestricted access to internal networks unless required.
- Log and monitor requests.

## See also

- [Server-Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
