---
title: Cross-site request forgery prevention
slug: Web/Security/Practical_implementation/CSRF_prevention
page-type: guide
---

Cross-site request forgeries can be protected against via `SameSite` cookies and anti-CSRF tokens.

## Problem

Cross-site request forgeries are a class of attack where unauthorized commands are transmitted to a website from a trusted user. Because they inherit the user's cookies (and hence session information), they appear to be valid commands. A CSRF attack might look like this:

```html
<!-- Attempt to delete a user's account -->
<img src="https://accounts.example.org/management/delete?confirm=true" />
```

When a user visits a page with containing the above HTML, the browser will attempt to make a [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request to the source URL. If the user is logged in, the browser will provide their session cookies and the account deletion attempt will be successful.

## Solution

There are a variety of CSRF mitigation strategies available. The most common and transparent methods of CSRF mitigation are [`SameSite`](/en-US/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) cookies and anti-CSRF tokens.

### `SameSite` cookies

`SameSite` cookies allow you specify that you want the browser to only send cookies in response to requests originating from the cookie's origin site, for example. This makes the CSRF attack fail because the malicious commands will not have cookies sent with them and therefore cannot authenticate as the user. The available values are:

- `Strict`
  - : Causes the browser to only send the cookie in response to requests originating from the cookie's origin site.
- `Lax`
  - : Similar to `Strict`, except the browser also sends the cookie when the user navigates to the cookie's origin site (even if the user is coming from a different site).
- `None`
  - : Specifies that cookies are sent on both originating and cross-site requests. 

You should set the strongest `SameSite` level that you can for your site to still work. Ideally never set `None` unless you really need to. Bear in mind that `Lax` is the default value if the header is not specified.

### Anti-CSRF tokens

Anti-CSRF tokens prevent CSRF attacks by requiring the existence of a secret, unique, and unpredictable token on all destructive changes. These tokens can be set for an entire user session, rotated on a regular basis, or be created uniquely for each request.

You are advised to use both strategies for websites that allow destructive changes such as account deletion. Anti-CRSF tokens are arguably unnecessary for other sites, although it is still advised to have `SameSite` set to a non-`None` value to help protect the user's [Privacy](/en-US/docs/Web/Privacy).

Most application frameworks have built-in CSRF tokenization to ease implementation.

## Examples

### Implement an anti-CSRF token along with `SameSite=Strict`

Include a secret anti-CSRF token in an account deletion form:

```html
<input type="hidden" name="csrftoken" value="1df93e1eafa42012f9a8aff062eeb1db0380b">
```

On the server-side, set an anti-CSRF cookie (JavaScript must send this an X header; it can't be done cross-origin):

```http
Set-Cookie: CSRFTOKEN=1df93e1eafa42012f9a8aff062eeb1db0380b; Path=/; Secure; SameSite=Strict
```

Back on the client-side, use JavaScript to add the CSRF token as an X header to an XMLHttpRequest:

```js
const token = readCookie(CSRFTOKEN);                 // read the cookie
httpRequest.setRequestHeader('X-CSRF-Token', token); // add it as an X-CSRF-Token header
```

## See also

- [Wikipedia on CRSF Attacks and Prevention](https://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
