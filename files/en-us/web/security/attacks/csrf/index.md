---
title: Cross-site request forgery (CSRF)
slug: Web/Security/Attacks/CSRF
page-type: guide
---

In a cross-site request forgery (CSRF) attack, an attacker tricks the user or the browser into making an HTTP request to the target site. The request includes the user's credentials and causes the server to carry out some harmful action, thinking that the user intended it.

## Overview

A website typically performs special actions on a user's behalf — buying a product or making an appointment, for example — by receiving an HTTP request from the user's browser, often with URL parameters detailing the action to perform. To ensure that the request really comes from the user in question, the browser expects the request to include {{glossary("Credential", "credentials")}} for the user: for example, a cookie containing the user's session ID.

In the example below, the user has previously signed into their bank, and the browser has stored a session cookie for the user. The page contains a {{htmlelement("form")}} element, which enables the user to transfer funds to another person. When the user submits the form, the browser sends a {{httpmethod("POST")}} request to the server, including the form data. If the user is signed in, the request includes the user's cookie. The server validates the cookie and performs the special action — in this case, transferring money:

![Diagram showing a user submitting a browser form, the browser then making a POST request to the server, and the server validating the request.](form-post.svg)

In this guide, we'll call a request like this, that carries out some special action, a _state-changing request_.

In a CSRF attack, the attacker creates a website containing a form. The form's [`action` attribute](/en-US/docs/Web/HTML/Element/form#action) is set to the bank's website, and the form contains hidden input fields mimicking the bank's fields:

```html
<form action="https://my-bank.example.org/transfer" method="POST">
  <input type="hidden" name="recipient" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
```

The page also contains JavaScript that submits the form on page load:

```js
const form = document.querySelector("form");
form.submit();
```

When the user visits the page, the browser submits the form to the bank's website. Because the user is signed into their bank, the request includes the user's real cookie, so the bank's server successfully validates the request, and transfers the funds:

![Diagram showing a CSRF attack in which a decoy page submits a POST request to the website for the user's bank.](csrf-form-post.svg)

There are other ways the attacker could issue a cross-site request forgery. For example, if the website uses a {{httpmethod("GET")}} request to carry out the action, then the attacker can avoid having to use a form at all, and can execute the attack by sending the user a link to a page that contains markup like this:

```html
<img
  src="https://my-bank.example.org/transfer?recipient=attacker&amount=1000" />
```

When the user loads the page, the browser tries to fetch the image resource, which is really the transaction request.

In general, a CSRF attack is possible if your website:

- Uses HTTP requests to change some state on the server.
- Uses cookies to validate that the request came from an authenticated user.
- Uses parameters in the request that an attacker can predict.

## Defenses against CSRF

In this section we'll outline two alternative defenses against CSRF and a third practice which can be used to provide defense in depth for either of the other two.

- The first primary defense is to use _CSRF tokens_ embedded in the page. This method is especially appropriate if you're issuing state-changing requests from form elements, as in our example above.

- The alternative defense is to ensure that state-changing requests are not _simple requests_, which enables them to rely on the browser's built-in cross-origin request blocking. This method is appropriate if you're issuing state-changing requests from JavaScript APIs like {{domxref("Window.fetch()", "fetch()")}}.

Finally, we'll discuss the `SameSite` cookie attribute, which can be used to provide defense in depth alongside either of the previous methods.

### CSRF tokens

The most common and widely effective defense against CSRF is the _CSRF token_. In this defense, when the server serves a page, it embeds an unpredictable value in the page, called the CSRF token. Then when the browser sends the state-changing request to the server, it includes the CSRF token in the HTTP request. The browser checks the token value and carries out the request only if it matches. Because an attacker can't guess the token value, they can't issue a successful forgery.

For form submissions, the CSRF token is usually implemented as a hidden form field. For a JavaScript API like `fetch()`, the token might be placed in a cookie or embedded in the page, and the JavaScript extracts the value and sends it as an extra header.

Modern web frameworks usually have built-in support for CSRF tokens: for example, [Django](https://www.djangoproject.com/) enables you to protect forms using the [`csrf_token`](https://docs.djangoproject.com/en/5.1/ref/csrf/) tag. This generates an additional hidden form field containing the token, which the framework then checks on the server.

To take advantage of this protection you must understand all the places in your website where you are using state-changing HTTP requests, and ensure you're using the defense provided by your chosen framework.

### Avoiding simple requests

Web browsers distinguish two sorts of HTTP requests: [_simple_ requests](/en-US/docs/Web/HTTP/CORS#simple_requests) and other requests.

By default, only simple requests can be sent cross-origin. The reason for allowing simple requests cross-origin is that these are the same sorts of requests that could already be made cross-origin using a `<form>`, as in the example above. So it is assumed that websites already must implement CSRF protection against simple requests.

All other requests are by default not allowed cross-origin, so a CSRF attack would not succeed if the request is not simple.

So one CSRF defense is to ensure that state-changing requests are never simple requests. This of course means that a website can't use forms to issue them, so this strategy is usually applicable for a {{glossary("SPA", "single-page app")}} that uses JavaScript APIs like {{domxref("Window.fetch()", "fetch()")}} to retrieve content from the server and then renders this content in the client.

For example, setting the request's {{httpheader("Content-Type")}} to `"application/json"` will prevent it from being treated like a simple request:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

Similarly, setting a custom header on the request will prevent it being treated like a simple request:

```js
fetch("https://my-bank.example.org/transfer", {
  method: "POST",
  headers: {
    "X-MY-BANK-ANTI-CSRF": 1,
  },
  body: JSON.stringify({ recipient: "joe", amount: "100" }),
});
```

The header name can be anything, as long as it doesn't conflict with standard headers.

The server can then check for the existence of the header: if it exists, then the server knows that the request was not treated as a simple request.

#### Non-simple requests and CORS

We've said that non-simple requests are _by default_ not sent cross-origin. The catch is that the [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) protocol allows a website to relax this restriction.

When a site issues a non-simple request cross-origin, the browser sends a {{glossary("Preflight request", "preflight request")}}. This asks the server if it is prepared to accept the request.

- If the server responds with an {{httpheader("Access-Control-Allow-Origin")}} response header which matches the sender's origin, then the request is allowed.
- If the server also sends an {{httpheader("Access-Control-Allow-Credentials")}} response header, then the request is allowed to include the site's credentials.

This means that if your server sends an `Access-Control-Allow-Origin` response header including the sender's origin, and an `Access-Control-Allow-Credentials` response header, then the server is vulnerable to a CSRF attack from that origin.

### Defense in depth: SameSite cookies

The [`SameSite`](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-02#section-5.3.7) cookie attribute provides some protection against CSRF attacks. It's not a complete defense, and is best considered as an addition to one of the other defenses, providing some degree of defense in depth.

This attribute controls when a browser is allowed to include the cookie in a cross-site request. It has three possible values: `None`, `Lax` and `Strict`.

The `Strict` value offers the most protection: if this attribute is set, the browser will not include the cookie in any cross-site request. However, this creates a usability issue: if the user is logged into your site, and follows a link to your site from a different site, then your cookies will not be included, and the user will not be recognized.

The `Lax` value relaxes this restriction: cookies are included in cross-site requests for top-level navigations only. This means that, for example, attempts to make a request using a form submission would not include `Lax` cookies. The problem with this value is that can still pop up new windows or trigger top-level
navigations in order to create request that satisfies the `Lax` constraint.

Another problem with the `SameSite` attribute is that it protects you from requests from a different {{glossary("Site", "site")}}, not a different {{glossary("Origin", "origin")}}. This is a looser protection, because (for example) `https://foo.example.org` and `https://bar.example.org` are considered the same site, although they are different origins. Effectively, if you rely on same-site protection, you have to trust all your site's subdomains.

Even so, it is worth setting the `SameSite` attribute for sensitive cookies to `Strict` if you can, or `Lax` if you have to.

## See also

- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) at [owasp.org](https://owasp.org/)

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Security", "1", "0", "1")}}
</section>
