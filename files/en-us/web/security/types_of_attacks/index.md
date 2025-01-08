---
title: Types of attacks
slug: Web/Security/Types_of_attacks
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

This article describes various types of security attacks and techniques to mitigate them.

## Clickjacking

[Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) is the practice of tricking a user into clicking on a link, button, etc. that is other than what the user thinks it is. This can be used, for example, to steal login credentials or to get the user's unwitting permission to install a piece of malware. (Clickjacking is sometimes called "user interface redressing", though this is a misuse of the term "redress".)

## Cross-site scripting (XSS)

Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the [seventh most common Web app vulnerability](https://owasp.org/www-project-top-ten/2017/Top_10) in 2017.

These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the {{glossary("HTML")}} content.

Cross-site scripting attacks usually occur when 1) data enters a Web app through an untrusted source (most often a Web request) or 2) dynamic content is sent to a Web user without being validated for malicious content.

The malicious content often includes {{glossary("JavaScript")}}, but sometimes HTML, Flash, or any other code the browser can execute. The variety of attacks based on XSS is almost limitless, but they commonly include transmitting private data like cookies or other session information to the attacker, redirecting the victim to a webpage controlled by the attacker, or performing other malicious operations on the user's machine under the guise of the vulnerable site.

XSS attacks can be put into three categories: stored (also called persistent), reflected (also called non-persistent), or DOM-based.

- Stored XSS Attacks
  - : The injected script is stored permanently on the target servers. The victim then retrieves this malicious script from the server when the browser sends a request for data.
- Reflected XSS Attacks
  - : When a user is tricked into clicking a malicious link, submitting a specially crafted form, or browsing to a malicious site, the injected code travels to the vulnerable website. The Web server reflects the injected script back to the user's browser, such as in an error message, search result, or any other response that includes data sent to the server as part of the request. The browser executes the code because it assumes the response is from a "trusted" server which the user has already interacted with.
- DOM-based XSS Attacks
  - : The payload is executed as a result of modifying the DOM environment (in the victim's browser) used by the original client-side script. That is, the page itself does not change, but the client side code contained in the page runs in an unexpected manner because of the malicious modifications to the DOM environment.

## Cross-site request forgery (CSRF)

CSRF (sometimes also called XSRF) is a related class of attack. The attacker causes the user's browser to perform a request to the website's backend without the user's consent or knowledge. An attacker can use an XSS payload to launch a CSRF attack.

Wikipedia mentions a good example for CSRF. In this situation, someone includes an image that isn't really an image (for example in an unfiltered chat or forum), instead it really is a request to your bank's server to withdraw money:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Now, if you are logged into your bank account and your cookies are still valid (and there is no other validation), you will transfer money as soon as you load the HTML that contains this image. For endpoints that require a POST request, it's possible to programmatically trigger a \<form> submit (perhaps in an invisible \<iframe>) when the page is loaded:

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob" />
  <input type="hidden" name="amount" value="1000000" />
  <input type="hidden" name="for" value="mallory" />
</form>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").submit();
  });
</script>
```

There are a few techniques that should be used to prevent this from happening:

- GET endpoints should be idempotent—actions that enact a change and do not retrieve data should require sending a POST (or other HTTP method) request. POST endpoints should not interchangeably accept GET requests with parameters in the query string.
- A session-unique CSRF token should be provided by the server to the browser. This token can then be included whenever a form is posted by the browser (in a hidden input field in the `<form>` element). For all non-GET requests that have the potential to perform an action, the server compares the sent token against its stored value for the session. If there is a mismatch, the request is aborted.
- This method of protection relies on an attacker being unable to predict the user's assigned CSRF token. The token should be regenerated on sign-in.
- Cookies that are used for sensitive actions (such as session cookies) should have a short lifetime with the [`SameSite` attribute](/en-US/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) set to `Strict` or `Lax`. In supporting browsers, this will ensure that the session cookie is not sent along with cross-site requests and that the request is effectively unauthenticated to the application server.
- Both CSRF tokens and `SameSite` cookies should be deployed. This ensures all browsers are protected and provides protection where `SameSite` cookies cannot help (such as attacks from a separate subdomain).

For more prevention tips, see the OWASP CSRF prevention cheat sheet.

## Man-in-the-middle (MitM)

A third party intercepts traffic between a web server and a client (browser), and impersonates the web server in order to capture data (such as login credentials or credit card information). The traffic is passed through, possibly with alterations. Open Wi-Fi networks are typical means of executing this attack.

## Session hijacking

Session hijacking consists of gaining access to and misusing a user's authenticated session. This may happen by stealing a cookie for an existing session, or by fooling the user (or their browser) into setting a cookie with a predetermined session ID.

Exfiltration avenues can be limited by deploying a strict Content-Security-Policy.

### Session fixation

A third party is able to determine a user's session identifier (i.e., by reading it or setting it), and therefore interact with the server as that user. Stealing cookies is one way to do this.

Recall that a subdomain such as application.example.com can set a cookie to be sent with requests to example.com or other subdomains by setting the `Domain` attribute:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

If a vulnerable application is available on a subdomain, this mechanism can be abused in a session fixation attack. When the user visits a page on the parent domain (or another subdomain), the application may trust the existing value sent in the user's cookie. This could allow an attacker to bypass CSRF protection or hijack a session after the user logs in.
Alternatively, if the parent domain does not use [HTTP Strict-Transport-Security](/en-US/docs/Glossary/HSTS) with `includeSubdomains` set, a user subject to an active MitM (perhaps connected to an open Wi-Fi network) could be served a response with a Set-Cookie header from a non-existent subdomain. The end result would be much the same, with the browser storing the illegitimate cookie and sending it to all other pages under example.com.

Session fixation should primarily be mitigated by regenerating session cookie values when the user authenticates (even if a cookie already exists) and by tying any CSRF token to the user.

### Session side-jacking

### Browser hijacking malware
