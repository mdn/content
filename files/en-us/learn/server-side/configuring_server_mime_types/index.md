---
title: Properly configuring server MIME types
slug: Learn/Server-side/Configuring_server_MIME_types
page-type: guide
---

{{LearnSidebar}}

MIME types describe the media type of content, either in email, or served by web servers or web applications. They are intended to help provide a hint as to how the content should be processed and displayed.

Examples of MIME types:

- `text/html` for HTML documents.
- `text/plain` for plain text.
- `text/css` for Cascading Style Sheets.
- `text/javascript` for JavaScript files.
- `text/markdown` for Markdown files.
- `application/octet-stream` for binary files where user action is expected.

Server default configurations vary wildly and set different _default_ MIME-type values for files with no defined content type.

Versions of the Apache Web Server **before 2.2.7** were configured to report a MIME type of `text/plain` or `application/octet-stream` for unknown content types. Modern versions of Apache report `none` for files with unknown content types.

[Nginx](https://nginx.org/) will report `text/plain` if you don't define a default content type.

As new content types are invented or added to web servers, web administrators may fail to add the new MIME types to their web server's configuration. This is a major source of problems for users of browsers that respect the MIME types reported by web servers and applications.

## Why are correct MIME types important?

If a web server or application reports an incorrect MIME type for content (including a "default type" for unknown content), a web browser has no way of knowing the author's intentions. This may cause unexpected behavior.

Some web browsers may try to _guess_ the correct MIME type. This allows misconfigured web servers and applications to continue working for those browsers (but not other browsers that correctly implement the standard). Apart from violating the HTTP spec, this is a bad idea for a couple of other significant reasons:

- Loss of control

  - : If the browser ignores the reported MIME type, web administrators and authors no longer have control over how their content is to be processed.

    For example, a website oriented for web developers might wish to send certain example HTML documents as either `text/html` or `text/plain` in order to have the documents either processed and displayed as HTML or as source code. If the browser guesses the MIME type, this option is no longer available to the author.

- Security

  - : Some content types, such as executable programs, are inherently unsafe. For this reason, these MIME types are usually restricted in terms of what actions a web browser will take when given that type of content. An executable program should not be executed on the user's computer and should at least cause a dialog to appear **asking the user** if they wish to download the file.

    MIME type guessing has led to security exploits in Internet Explorer that were based upon a malicious author incorrectly reporting a MIME type of a dangerous file as a safe type. This bypassed the normal download dialog, resulting in Internet Explorer guessing that the content was an executable program and then running it on the user's computer.

## JavaScript legacy MIME types

When looking for information about JavaScript MIME types, you may see several MIME types that reference JavaScript. Some of these MIME types include:

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript`
- `application/x-javascript`
- `text/ecmascript`
- `text/javascript1.0`
- `text/javascript1.1`
- `text/javascript1.2`
- `text/javascript1.3`
- `text/javascript1.4`
- `text/javascript1.5`
- `text/x-ecmascript`
- `text/x-javascript`

While browsers may support any, some, or all of these alternative MIME types, you should **only** use `text/javascript` to indicate the MIME type of JavaScript files.

> **Note:** See [MIME types (IANA media types)](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) for more information.

## How to determine the MIME type to set

There are several ways to determine the correct MIME type value to be used to serve your content.

- If your content was created using commercial software, read the vendor's documentation to see what MIME types should be reported for the application.
- Look in IANA's [MIME Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml), which contains information on all registered MIME types.
- Search for the file extension in [FILExt](https://filext.com/) or the [File extensions reference](https://www.file-extensions.org/) to see what MIME types are associated with that extension. Pay close attention as the application may have multiple MIME types that differ by only one letter.

## How to check the MIME type of received content

- In Firefox

  - Load the file and go to **Tools > Page Info** to get the content type for the page you accessed.
  - You can also go to **Tools > Web Developer > Network** and reload the page. The request tab gives you a list of all the resources the page loaded. Clicking on any resource will list all the information available, including the page's [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type) header.

- In Chrome

  - Load the file and go to **View > Developer > Developer Tools** and choose the _Network_ tab. Reload the page and select the resource you want to inspect. Under headers look for `Content-Type` and it will report the content type of the resource.

- Look for a `<meta>` element in the page source that gives the MIME type, for example `<meta http-equiv="Content-Type" content="text/html">`.

  - According to the standards, the `<meta>` element that specifies the MIME type should be ignored if there's a Content-Type header available.

[IANA](https://www.iana.org/) keeps a list of registered [MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). The [HTTP specification](https://www.w3.org/Protocols/rfc2616/rfc2616.html) defines a superset of MIME types, which is used to describe the media types used on the web.

## How to set up your server to send the correct MIME types

The goal is to configure your server to send the correct {{HTTPHeader("Content-Type")}} header for each document.

- If you're using the Apache web server, check the **_Media Types and Character Encodings_** section of [Apache Configuration: .htaccess](/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess) for examples of different document types and their corresponding MIME types.
- If you're using Nginx, note that Nginx does not have a `.htaccess` equivalent tool, so all changes will go into the main configuration file.
- If you're using a server-side script or framework to generate content, the way to indicate the content type will depend on the tool you're using. Check the framework or library's documentation.

Regardless of what server system you use, the effect you need to achieve is to set a response header with the name {{httpheader("Content-Type")}}, followed by a colon and space, followed by a MIME type. High-level environments often allow such headers to be set when generating the page. For example, in a PHP environment, you could set the response header for PDF resources like this:

```php
header('Content-Type: application/pdf')
```

Trying to instead set it with just `header('application/pdf')` won't work.

## Related Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME types (IANA media types)](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Apache vs Nginx: Practical Considerations](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Migrate Apache .htaccess to Nginx server block](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block)
