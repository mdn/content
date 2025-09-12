---
title: Server Side Request Forgery (SSRF)
slug: Web/Security/Attacks/SSRF
page-type: guide
sidebar: security
---

**Server‑Side Request Forgery (SSRF)** is a vulnerability that allows an attacker to make network requests to arbitrary destinations. SSRF makes these requests originate from within a server itself, which typically has broader access than an external client.

This can enable an attacker to access sensitive resources or to perform other unauthorized actions.

## Example scenario

Suppose your application has an endpoint that fetches images from a provided URL:

```http
GET /fetch-image?url=https://example.com/image.png
```

The server has access to the company's intranet.

If the server does not validate the URL parameter is is given, then the client can extract sensitive data by passing intranet URLs to the API:

```js
fetch("https://example.org/fetch-image?url=http://localhost:443/admin/internal-files/org-chart.png");
```

Although the client could not access `http://localhost:443/` directly, the server can, and the server relays the response to the client.

The client doesn't have to make HTTP requests: it might be able to use the `file://` protocol:

```js
fetch("https://example.org/fetch-image?url=file:///etc/passwd");
```

In these cases the attacker could get access to sensitive data. Sometimes the attacker does not get the response body, but in this case it can still cause problems:

- By forcing the server to make many requests an attacker can execute a {{glossary("Denial of Service", "Denial of Service (DoS)")}} attack.
- By examining the status code returned by the server or the time taken to execute requests, the attacker may infer sensitive information about the target.

Attackers may use redirects or redirect chains to evade validation.

## Defenses against SSRF

Mitigating SSRF vulnerabilities requires multiple defense strategies combining input validation, careful response handling, and a secure network architecture. Some key approaches include:

### Input validation and allow-listing

Only allow requests to trusted destinations. For example, the `fetch-image` service discussed above could only access allow-listed domains:

```js
const ALLOWED_DOMAINS = ["https://api.example.com", "https://cdn.example.com"];
```

### Blocking protocols and URL schemes

Ensure only specific URL schemes are allowed. Most likely only allowing `https://` is enough for regular web applications.

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
