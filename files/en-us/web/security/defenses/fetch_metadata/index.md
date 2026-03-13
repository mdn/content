---
title: Fetch metadata
slug: Web/Security/Defenses/Fetch_metadata
page-type: guide
sidebar: security
---

**Fetch metadata** is the term for a group of HTTP request headers that give the server information about the context in which the request is being made.

For example, this enables the server to know:

- Whether the request represents a navigation between documents, or a request for a subresource, or was explicitly made from JavaScript, for example using the {{domxref("window.fetch()", "fetch()")}} API.

- The relationship between the requester of the resource and the resource being requested: whether they are same-{{glossary("origin")}}, or same-{{glossary("site")}}, or from completely different sites.

By using the information in these headers to allow or deny specific requests, a server can implement a defense against _cross-origin attacks_: that is, attacks in which a request is made from the attacker's site to a resource belonging to the target site. This includes [cross-site request forgeries (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) and various [cross-site leaks](/en-US/docs/Web/Security/Attacks/XS-Leaks).

> [!NOTE]
> We use the term _cross-origin_ attack in this guide, although many attacks are conventionally called _cross-site_ attacks.
>
> An {{glossary("origin")}} is a more restrictive concept than a {{glossary("site")}}. In particular, a site includes a domain's subdomains, and an origin does not: so `https://example.org` and `https://login.example.org` are the same site, but different origins.
>
> This means that while all cross-site attacks are cross-origin attacks, some cross-origin attacks are _not_ cross-site attacks. For example, if an attacker gains control of a subdomain of a site, then they can attack the site using _cross-origin_, _same-site_ requests. To include these attacks, we use the more restrictive term.

The [Fetch metadata specification](https://w3c.github.io/webappsec-fetch-metadata/) defines four fetch metadata headers:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Like all `Sec-` prefixed headers, these are {{glossary("forbidden request header", "forbidden request headers")}}, which means they can't be set or modified by the website's front-end code.

## Sec-Fetch-Dest

This header indicates the _destination_ of the request. This attribute is defined in the Fetch API, where it is exposed as the {{domxref("Request.destination")}} property.

We could think of it, roughly, as the way the returned resource would be used.

For most {{glossary("replaced elements")}}, the value of the header names the element that this resource will be used for, such as `iframe`, `object`, `audio`, or `video`. A value of `image` indicates that the resource will be used as an image referenced by a replaced element such as an HTML {{htmlelement("img")}} element, a CSS {{cssxref("background-image")}} property, an SVG {{svgelement("image")}}, or any other place in the web platform that use images loaded from subresources.

For the complete set of possible values, see the {{HTTPHeader("Sec-Fetch-Site", "reference page", "", "nocode")}} for this header, but other interesting values include:

- `document`
  - : Yhe request is for a new document that is the target of a top-level navigation (for example, the user clicking a link in the page or submitting a form).

- `script`
  - : The resource will be used as a script loaded from an HTML {{htmlelement("script")}} element or a call to {{domxref("WorkerGlobalScope.importScripts()", "importScripts()")}} in a web worker. Dedicated values are used to indicate other places where the resource is used as a script, such as worklets (`audioworklet` and `paintworklet`) and workers (`sharedworker`, `serviceworker`, and `worker`).

- `empty`
  - : The request does not have a defined destinations: among other possible causes, this is the value given if the request is the result of a {{domxref("Window.fetch()", "fetch()")}} call.

## Sec-Fetch-Mode

This header indicates the _mode_ of the request. Like _destination_, the mode is defined in the Fetch API, where it is exposed as the {{domxref("Request.mode")}} property.

Its most commonly used values are:

- `navigate`
  - : The request represents a navigation between documents (for example, the user clicking a link).

- `no-cors`
  - : The request was made in `no-cors` mode, which means that it is allowed cross-origin without the server sending the appropriate [CORS](/en-US/docs/Web/HTTP/Guides/CORS) headers, but the response is _opaque_, meaning that its headers and bodies can't be accessed by JavaScript running in the client.

    This is the default mode for pages that load subresources such as images, fonts, scripts, and stylesheets, and explains why a different site is by default allowed to use your site's subresources, even if you haven't configured CORS to allow it.

- `cors`
  - : If the request is cross-origin, then the server must respond with the appropriate [CORS](/en-US/docs/Web/HTTP/Guides/CORS) headers, or the request will fail. If the server does respond with the appropriate CORS headers, then the response body and certain headers will be made available to the caller.

    This is most often found for cross-origin requests made from JavaScript using the [Fetch API](/en-US/docs/Web/API/Fetch_API), when the requester needs access to the returned resource (for example, a fetch call to retrieve some JSON from the server).

- `same-origin`
  - : The request is only allowed if the requester is same-origin with the resource being requested.

## Sec-Fetch-Site

This header indicates the relationship between the origin of the resource being requested and the origin of the requester of the resource.

It indicates whether the requester is from:

- The same {{glossary("origin")}} as the requested resource.
- A different origin, but the same {{glossary("site")}}.
- A different site.

For example, if a user clicks a link in a page at `https://books.example.org/authors`, the browser makes a request to fetch the document specified in the link target. The following table shows values of the associated `Sec-Fetch-Site` header for different link target values:

| Link target                        | `Sec-Fetch-Site` value |
| ---------------------------------- | ---------------------- |
| `https://books.example.org/titles` | `same-origin`          |
| `https://login.example.org/`       | `same-site`            |
| `https://books.example.com/titles` | `cross-site`           |

Similar mappings apply for other HTTP requests, such as:

- Form submissions via the [`action`](/en-US/docs/Web/HTML/Reference/Elements/form#action) attribute of a {{htmlelement("form")}} element.
- Requests for subresources such as images, fonts, or scripts.
- Requests made using the {{domxref("window.fetch()", "fetch()")}} API.

The `Sec-Fetch-Site` header may also have the value `none` for requests that don't have a site as the requester, including, for example, requests made when the user types a URL into the browser's address bar or clicks a bookmark. The specification calls these [directly user-initiated requests](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated).

## Sec-Fetch-User

This header is included only if the request was initiated by a user action (such as a click on a link), and if included, always has the value `?1`.

## Cross-origin attacks

Fetch metadata is especially useful as a defense against _cross-origin attacks_. These attacks typically target a user who has an account with a legitimate site, and is signed into this site. The attacker creates a website that makes a _cross-origin request_ to the legitimate site, and then tricks the user into executing that request. Because the user executed the request.

For example, the attacker's site might contain a {{htmlelement("form")}} element that submits to the legitimate site. For some cross-origin attacks, no user interaction is needed at all: the attacker's page can just execute a {{domxref("Window.fetch()", "fetch()")}} request to the legitimate site on page load, and then the user only has to open the attacker's page for the cross-origin request to be executed.

We can distinguish two sorts of cross-origin attack:

- [Cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks: in these attacks, the cross-origin request performs some consequential action in the legitimate server, using parameters supplied by the attacker. For example, the request asks the server to transfer money from the target user's account into the attacker's account.

- [Cross-site leaks](/en-US/docs/Web/Security/Attacks/XS-Leaks): in these attacks, the attacker is using the request to gain information about the user's relationship with the target site, often through side channels such as [error events](/en-US/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events).

Both sorts of attack rely on the attacker making cross-origin requests that include {{glossary("credential", "credentials")}} that identify the user (such as a cookie containing their session ID). Most websites will want to deny some cross-origin requests while allowing others: for example, if you deny all cross-origin requests, noone will be able to navigate to your site!

Using fetch metadata, a server can construct a policy for allowing or denying cross-origin requests based on the details of their context.

## See also
