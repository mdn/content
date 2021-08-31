---
title: HTTP authentication
slug: Web/HTTP/Authentication
tags:
  - Access Control
  - Authentication
  - Guide
  - HTTP
  - Security
---
{{HTTPSidebar}}

HTTP provides a general framework for access control and authentication. This page is an introduction to the HTTP framework for authentication, and shows how to restrict access to your server using the HTTP "Basic" schema.

## The general HTTP authentication framework

{{RFC("7235")}} defines the HTTP authentication framework, which can be used by a server to {{glossary("challenge")}} a client request, and by a client to provide authentication information.

The challenge and response flow works like this:

1. The server responds to a client with a {{HTTPStatus("401")}} (Unauthorized) response status and provides information on how to authorize with a {{HTTPHeader("WWW-Authenticate")}} response header containing at least one challenge.
2. A client that wants to authenticate itself with the server can then do so by including an {{HTTPHeader("Authorization")}} request header with the credentials.
3. Usually a client will present a password prompt to the user and will then issue the request including the correct `Authorization` header.

![A sequence diagram illustrating HTTP messages between a client and a server lifeline.](http-auth-sequence-diagram.png "Sequence Diagram of Client-server HTTP Authentication")

In the case of a "Basic" authentication like shown in the figure, the exchange **must** happen over an HTTPS (TLS) connection to be secure.

### Proxy authentication

The same challenge and response mechanism can be used for _proxy authentication_. As both resource authentication and proxy authentication can coexist, a different set of headers and status codes is needed. In the case of proxies, the challenging status code is {{HTTPStatus("407")}} (Proxy Authentication Required), the {{HTTPHeader("Proxy-Authenticate")}} response header contains at least one challenge applicable to the proxy, and the {{HTTPHeader("Proxy-Authorization")}} request header is used for providing the credentials to the proxy server.

### Access forbidden

If a (proxy) server receives _invalid_ credentials, it should respond with a {{HTTPStatus("401")}} `Unauthorized` or with a {{HTTPStatus("407")}} `Proxy Authentication Required`, and the user may send a new request or replace the {{HTTPHeader("Authorization")}} header field.

If a (proxy) server receives valid credentials that are _inadequate_ to access a given resource, the server should respond with the {{HTTPStatus("403")}} `Forbidden` status code. Unlike {{HTTPStatus("401")}} `Unauthorized` or {{HTTPStatus("407")}} `Proxy Authentication Required`, authentication is impossible for this user and browsers will not propose a new attempt.

In all cases, the server may prefer returning a {{HTTPStatus("404")}} `Not Found` status code, to hide the existence of the page to a user without adequate privileges or not correctly authenticated.

### Authentication of cross-origin images

A potential security hole recently been fixed by browsers is authentication of cross-site images. From [Firefox 59](/en-US/docs/Mozilla/Firefox/Releases/59) onwards, image resources loaded from different origins to the current document are no longer able to trigger HTTP authentication dialogs ({{bug(1423146)}}), preventing user credentials being stolen if attackers were able to embed an arbitrary image into a third-party page.

### Character encoding of HTTP authentication

Browsers use `utf-8` encoding for usernames and passwords.

Firefox once used `ISO-8859-1`, but changed to `utf-8` for parity with other browsers and to avoid potential problems as described in {{bug(1419658)}}.

### WWW-Authenticate and Proxy-Authenticate headers

The {{HTTPHeader("WWW-Authenticate")}} and {{HTTPHeader("Proxy-Authenticate")}} response headers define the authentication method that should be used to gain access to a resource. They must specify which authentication scheme is used, so that the client that wishes to authorize knows how to provide the credentials.

The syntax for these headers is the following:

```
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Here, `<type>` is the authentication scheme ("Basic" is the most common scheme and [introduced below](#basic_authentication_scheme)). The _realm_ is used to describe the protected area or to indicate the scope of protection. This could be a message like "Access to the staging site" or similar, so that the user knows to which space they are trying to get access to.

### Authorization and Proxy-Authorization headers

The {{HTTPHeader("Authorization")}} and {{HTTPHeader("Proxy-Authorization")}} request headers contain the credentials to authenticate a user agent with a (proxy) server. Here, the `<type>` is needed again followed by the credentials, which can be encoded or encrypted depending on which authentication scheme is used.

```
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Authentication schemes

The general HTTP authentication framework is used by several authentication schemes. Schemes can differ in security strength and in their availability in client or server software.

The most common authentication scheme is the "Basic" authentication scheme, which is introduced in more detail below. IANA maintains a [list of authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), but there are other schemes offered by host services, such as Amazon AWS. Common authentication schemes include:

- **Basic**
  - : See {{rfc(7617)}}, base64-encoded credentials. More information below.
- **Bearer**
  - : See {{rfc(6750)}}, bearer tokens to access OAuth 2.0-protected resources
- **Digest**
  - : See {{rfc(7616)}}, only md5 hashing is supported in Firefox, see {{bug(472823)}} for SHA encryption support
- **HOBA**
  - : See {{rfc(7486)}}, Section 3, **H**TTP **O**rigin-**B**ound **A**uthentication, digital-signature-based
- **Mutual**
  - : See {{rfc(8120)}}
- **AWS4-HMAC-SHA256**
  - : See [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)

## Basic authentication scheme

The "Basic" HTTP authentication scheme is defined in {{rfc(7617)}}, which transmits credentials as user ID/password pairs, encoded using base64.

### Security of basic authentication

As the user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme **is not secure**. HTTPS/TLS should be used with basic authentication. Without these additional security enhancements, basic authentication should not be used to protect sensitive or valuable information.

### Restricting access with Apache and basic authentication

To password-protect a directory on an Apache server, you will need a `.htaccess` and a `.htpasswd` file.

The `.htaccess` file typically looks like this:

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

The `.htaccess` file references a `.htpasswd` file in which each line consists of a username and a password separated by a colon (`:`). You cannot see the actual passwords as they are [hashed](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (using MD5-based hashing, in this case). Note that you can name your `.htpasswd` file differently if you like, but keep in mind this file shouldn't be accessible to anyone. (Apache is usually configured to prevent access to `.ht*` files).

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restricting access with nginx and basic authentication

For nginx, you will need to specify a location that you are going to protect and the `auth_basic` directive that provides the name to the password-protected area. The `auth_basic_user_file` directive then points to a `.htpasswd` file containing the encrypted user credentials, just like in the Apache example above.

```
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Access using credentials in the URL

Many clients also let you avoid the login prompt by using an encoded URL containing the username and the password like this:

```example-bad
https://username:password@www.example.com/
```

**The use of these URLs is deprecated**. In Chrome, the `username:password@` part in URLs is even [stripped out](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7) for security reasons. In Firefox, it is checked if the site actually requires authentication and if not, Firefox will warn the user with a prompt "You are about to log in to the site “www\.example.com” with the username “username”, but the website does not require authentication. This may be an attempt to trick you."

## See also

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
