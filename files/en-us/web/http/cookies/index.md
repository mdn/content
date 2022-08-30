---
title: Using HTTP cookies
slug: Web/HTTP/Cookies
tags:
  - Advertising
  - Browser
  - Cookies
  - Cookies Article
  - Guide
  - HTTP
  - History
  - JavaScript
  - Privacy
  - Protocols
  - Server
  - Storage
  - Web Development
  - data
  - request
  - tracking
---
{{HTTPSidebar}}

An **HTTP cookie** (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser.
The browser may store the cookie and send it back to the same server with later requests.
Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It remembers stateful information for the [stateless](/en-US/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless) HTTP protocol.

Cookies are mainly used for three purposes:

- Session management
  - : Logins, shopping carts, game scores, or anything else the server should remember
- Personalization
  - : User preferences, themes, and other settings
- Tracking
  - : Recording and analyzing user behavior

Cookies were once used for general client-side storage. While this made sense when they were the only way to store data on the client, modern storage APIs are now recommended. Cookies are sent with every request, so they can worsen performance (especially for mobile data connections). Modern APIs for client storage are the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API) (`localStorage` and `sessionStorage`) and [IndexedDB](/en-US/docs/Web/API/IndexedDB_API).

> **Note:** To see stored cookies (and other storage that a web page can use), you can enable the [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in Developer Tools and select Cookies from the storage tree.

## Creating cookies

After receiving an HTTP request, a server can send one or more {{HTTPHeader("Set-Cookie")}} headers with the response. The browser usually stores the cookie and sends it with requests made to the same server inside a {{HTTPHeader("Cookie")}} HTTP header. You can specify an expiration date or time period after which the cookie shouldn't be sent. You can also set additional restrictions to a specific domain and path to limit where the cookie is sent. For details about the header attributes mentioned below, refer to the {{HTTPHeader("Set-Cookie")}} reference article.

### The `Set-Cookie` and `Cookie` headers

The {{HTTPHeader("Set-Cookie")}} HTTP response header sends cookies from the server to the user agent. A simple cookie is set like this:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

This instructs the server sending headers to tell the client to store a pair of cookies:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

Then, with every subsequent request to the server, the browser sends all previously stored cookies back to the server using the {{HTTPHeader("Cookie")}} header.

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

> **Note:** Here's how to use the `Set-Cookie` header in various server-side applications:
>
> - [PHP](https://www.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### Define the lifetime of a cookie

The lifetime of a cookie can be defined in two ways:

- _Session_ cookies are deleted when the current session ends. The browser defines when the "current session" ends, and some browsers use _session restoring_ when restarting. This can cause session cookies to last indefinitely.
- _Permanent_ cookies are deleted at a date specified by the `Expires` attribute, or after a period of time specified by the `Max-Age` attribute.

For example:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

> **Note:** When you set an `Expires` date and time, they're relative to the client the cookie is being set on, not the server.

If your site authenticates users, it should regenerate and resend session cookies, even ones that already exist, whenever a user authenticates. This approach helps prevent [session fixation attacks](/en-US/docs/Web/Security/Types_of_attacks#session_fixation), where a third party can reuse a user's session.

### Restrict access to cookies

You can ensure that cookies are sent securely and aren't accessed by unintended parties or scripts in one of two ways: with the `Secure` attribute and the `HttpOnly` attribute.

A cookie with the `Secure` attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means {{Glossary("MitM", "man-in-the-middle")}} attackers can't access it easily. Insecure sites (with `http:` in the URL) can't set cookies with the `Secure` attribute. However, don't assume that `Secure` prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the `HttpOnly` attribute isn't set) can read and modify the information.

A cookie with the `HttpOnly` attribute is inaccessible to the JavaScript {{domxref("Document.cookie")}} API; it's only sent to the server. For example, cookies that persist in server-side sessions don't need to be available to JavaScript and should have the `HttpOnly` attribute. This precaution helps mitigate cross-site scripting ([XSS](</en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_(xss)>)) attacks.

Here's an example:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

### Define where cookies are sent

The `Domain` and `Path` attributes define the _scope_ of a cookie: what URLs the cookies should be sent to.

#### Domain attribute

The `Domain` attribute specifies which hosts can receive a cookie. If unspecified, the attribute defaults to the same {{Glossary("host")}} that set the cookie, _excluding subdomains_. If `Domain` _is_ specified, then subdomains are always included. Therefore, specifying `Domain` is less restrictive than omitting it. However, it can be helpful when subdomains need to share information about a user.

For example, if you set `Domain=mozilla.org`, cookies are available on subdomains like `developer.mozilla.org`.

#### Path attribute

The `Path` attribute indicates a URL path that must exist in the requested URL in order to send the `Cookie` header.
The `%x2F` ("/") character is considered a directory separator, and subdirectories match as well.

For example, if you set `Path=/docs`, these request paths match:

- `/docs`
- `/docs/`
- `/docs/Web/`
- `/docs/Web/HTTP`

But these request paths don't:

- `/`
- `/docsets`
- `/fr/docs`

#### SameSite attribute

The [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) attribute lets servers specify whether/when cookies are sent with cross-site requests (where {{Glossary("Site")}} is defined by the registrable domain and the _scheme_: http or https).
This provides some protection against cross-site request forgery attacks ({{Glossary("CSRF")}}).
It takes three possible values: `Strict`, `Lax`, and `None`.

With `Strict`, the cookie is only sent to the site where it originated.
`Lax` is similar, except that cookies are sent when the user _navigates_ to the cookie's origin site.
For example, by following a link from an external site. `None` specifies that cookies are sent on both originating and cross-site requests, but *only in secure contexts* (i.e., if `SameSite=None` then the `Secure` attribute must also be set).
If no `SameSite` attribute is set, the cookie is treated as `Lax`.

Here's an example:

```http
Set-Cookie: mykey=myvalue; SameSite=Strict
```

> **Note:** The standard related to `SameSite` recently changed (MDN documents the new behavior above).
> See the cookies [Browser compatibility](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#browser_compatibility) table for information about how the attribute is handled in specific browser versions:
>
> - `SameSite=Lax` is the new default if `SameSite` isn't specified.
>   Previously, cookies were sent for all requests by default.
> - Cookies with `SameSite=None` must now also specify the `Secure` attribute (they require a secure context).
> - Cookies from the same domain are no longer considered to be from the same site if sent using a different scheme (`http:` or `https:`).

#### Cookie prefixes

Because of the design of the cookie mechanism, a server can't confirm that a cookie was set from a secure origin or even tell _where_ a cookie was originally set.

A vulnerable application on a subdomain can set a cookie with the `Domain` attribute, which gives access to that cookie on all other subdomains. This mechanism can be abused in a _session fixation_ attack. See [session fixation](/en-US/docs/Web/Security/Types_of_attacks#session_fixation) for primary mitigation methods.

As a [defense-in-depth measure](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), however, you can use _cookie prefixes_ to assert specific facts about the cookie. Two prefixes are available:

- `__Host-`
  - : If a cookie name has this prefix, it's accepted in a {{HTTPHeader("Set-Cookie")}} header only if it's also marked with the `Secure` attribute, was sent from a secure origin, does _not_ include a `Domain` attribute, and has the `Path` attribute set to `/`. This way, these cookies can be seen as "domain-locked".
- `__Secure-`
  - : If a cookie name has this prefix, it's accepted in a {{HTTPHeader("Set-Cookie")}} header only if it's marked with the `Secure` attribute and was sent from a secure origin. This is weaker than the `__Host-` prefix.

The browser will reject cookies with these prefixes that don't comply with their restrictions. Note that this ensures that subdomain-created cookies with prefixes are either confined to the subdomain or ignored completely. As the application server only checks for a specific cookie name when determining if the user is authenticated or a CSRF token is correct, this effectively acts as a defense measure against session fixation.

> **Note:** On the application server, the web application _must_ check for the full cookie name including the prefix. User agents _do not_ strip the prefix from the cookie before sending it in a request's {{HTTPHeader("Cookie")}} header.

For more information about cookie prefixes and the current state of browser support, see the [Prefixes section of the Set-Cookie reference article](/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

#### JavaScript access using Document.cookie

You can create new cookies via JavaScript using the {{domxref("Document.cookie")}} property. You can access existing cookies from JavaScript as well if the `HttpOnly` flag isn't set.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

Cookies created via JavaScript can't include the `HttpOnly` flag.

Please note the security issues in the [Security](#security) section below. Cookies available to JavaScript can be stolen through XSS.

## Security

> **Note:** When you store information in cookies, keep in mind that all cookie values are visible to, and can be changed by, the end user. Depending on the application, you may want to use an opaque identifier that the server looks up, or investigate alternative authentication/confidentiality mechanisms such as JSON Web Tokens.

Ways to mitigate attacks involving cookies:

- Use the `HttpOnly` attribute to prevent access to cookie values via JavaScript.
- Cookies that are used for sensitive information (such as indicating authentication) should have a short lifetime, with the `SameSite` attribute set to `Strict` or `Lax`. (See [SameSite attribute](#samesite_attribute), above.) In [browsers that support SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie#browser_compatibility), this ensures that the authentication cookie isn't sent with cross-site requests. This would make the request effectively unauthenticated to the application server.

## Tracking and privacy

### Third-party cookies

A cookie is associated with a particular domain and scheme (such as `http` or `https`), and may also be associated with subdomains if the {{HTTPHeader("Set-Cookie")}} `Domain` attribute is set.
If the cookie domain and scheme match the current page, the cookie is considered to be from the same site as the page, and is referred to as a _first-party cookie_.

If the domain and scheme are different, the cookie is not considered to be from the same site, and is referred to as a _third-party cookie_.
While the server hosting a web page sets first-party cookies, the page may contain images or other components stored on servers in other domains (for example, ad banners) that may set third-party cookies.
These are mainly used for advertising and tracking across the web.
For example, the [types of cookies used by Google](https://policies.google.com/technologies/types).

A third-party server can create a profile of a user's browsing history and habits based on cookies sent to it by the same browser when accessing multiple sites.
Firefox, by default, blocks third-party cookies that are known to contain trackers.
Third-party cookies (or just tracking cookies) may also be blocked by other browser settings or extensions.
Cookie blocking can cause some third-party components (such as social media widgets) not to function as intended.

> **Note:** Servers can (and should) set the cookie [SameSite attribute](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) to specify whether or not cookies may be sent to third party sites.

### Cookie-related regulations

Legislation or regulations that cover the use of cookies include:

- The General Data Privacy Regulation (GDPR) in the European Union
- The ePrivacy Directive in the EU
- The California Consumer Privacy Act

These regulations have global reach. They apply to any site on the _World Wide_ Web that users from these jurisdictions access (the EU and California, with the caveat that California's law applies only to entities with gross revenue over 25 million USD, among things).

These regulations include requirements such as:

- Notifying users that your site uses cookies.
- Allowing users to opt out of receiving some or all cookies.
- Allowing users to use the bulk of your service without receiving cookies.

There may be other regulations that govern the use of cookies in your locality. The burden is on you to know and comply with these regulations. There are companies that offer "cookie banner" code that helps you comply with these regulations.

## Other ways to store information in the browser

Another approach to storing data in the browser is the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API). The [window.sessionStorage](/en-US/docs/Web/API/Window/sessionStorage) and [window.localStorage](/en-US/docs/Web/API/Window/localStorage) properties correspond to session and permanent cookies in duration, but have larger storage limits than cookies, and are never sent to a server. More structured and larger amounts of data can be stored using the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API), or a library built on it.

There are some techniques designed to recreate cookies after they're deleted. These are known as "zombie" cookies. These techniques violate the principles of user privacy and user control, may violate data privacy regulations, and could expose a website using them to legal liability.

## See also

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [Inspecting cookies using the Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Cookie specification: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
- [Cookies, the GDPR, and the ePrivacy Directive](https://gdpr.eu/cookies/)
