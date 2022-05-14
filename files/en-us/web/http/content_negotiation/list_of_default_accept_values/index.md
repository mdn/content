---
title: List of default Accept values
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
tags:
  - Accept
  - Content Negotiation
  - HTTP
  - Reference
---
{{HTTPSidebar}}

This article documents the default values for the HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header for specific inputs and browser versions.

## Default values

These are the values sent when the context doesn't give better information. Note that all browsers add the `*/*` MIME Type to cover all cases. This is typically used for requests initiated via the address bar of a browser, or via an HTML {{HTMLElement("a")}} element.

| User Agent                 | Value                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 92 and later [1]   | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                                                 |
| Firefox 72 to 91 [1]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| Firefox 66 to 71 [1]       | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Firefox 65 [1]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| Firefox 64 and earlier [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Safari, Chrome             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                                                 |
| Safari 5 [2]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Internet Explorer 8 [3]    | `image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*` |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                                                      |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`                                     |

\[1] This value can be modified using the [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) parameter.

\[2] This is an improvement over earlier `Accept` headers as it no longer ranks `image/png` above `text/html`.

\[3] See [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header).

## Values for an image

When requesting an image, like through an HTML {{HTMLElement("img")}} element, user-agent often sets a specific list of media types to be welcomed.

| User Agent                                                                                                                     | Value                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Firefox 92 and later [1]                                                                                                       | `image/avif,image/webp,*/*`                                                 |
| Firefox 65 to 91 [1]                                                                                                           | `image/webp,*/*`                                                           |
| Firefox 47 to 63 [1]                                                                                                           | `*/*`                                                                      |
| Firefox prior to 47 [1]                                                                                                        | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (since Mac OS Big Sur)                                                                                                  | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (before Mac OS Big Sur)                                                                                                 | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome                                                                                                                         | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |
| Internet Explorer 9                                                                                                            | `image/png,image/svg+xml,image/*;q=0.8, */*;q=0.5`                         |
| Internet Explorer 8 or earlier _[source](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header)_ | `*/*`                                                                      |

\[1] This value can be modified using the `image.http.accept` parameter (_[source](https://searchfox.org/mozilla-central/search?q=image.http.accept)_).

## Values for a video

When a video is requested, via the {{HTMLElement("video")}} HTML element, most browsers use specific values.

| User Agent                     | Value                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| Firefox 3.6 and later          | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox earlier than 3.6       | _no support for {{HTMLElement("video")}}_                                          |
| Chrome                         | `*/*`                                                                              |
| Internet Explorer 8 or earlier | _no support for {{HTMLElement("video")}}_                                          |

## Values for audio resources

When an audio file is requested, like via the {{HTMLElement("audio")}} HTML element, most browsers use specific values.

| User Agent                     | Value                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 and later [1]      | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome                 | `*/*`                                                                                        |
| Internet Explorer 8 or earlier | _no support for {{HTMLElement("audio")}}_                                            |
| Internet Explorer 9            | ?                                                                                            |

\[1] See [bug 489071](https://bugzilla.mozilla.org/show_bug.cgi?id=489071).

## Values for scripts

When a script is requested, like via the {{HTMLElement("script")}} HTML element, some browsers use specific values.

| User Agent                         | Value                               |
| ---------------------------------- | ----------------------------------- |
| Firefox [1]                        | `*/*`                               |
| Safari, Chrome                     | `*/*`                               |
| Internet Explorer 8 or earlier [2] | `*/*`                               |
| Internet Explorer 9                | `application/javascript, */*;q=0.8` |

\[1] See [bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789).

\[2] See [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header).

## Values for a CSS stylesheet

When a CSS stylesheet is requested, via the `<link rel="stylesheet">` HTML element, most browsers use specific values.

| User Agent                         | Value                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]                      | `text/css,*/*;q=0.1`                                                                                                                |
| Internet Explorer 8 or earlier [2] | `*/*`                                                                                                                               |
| Internet Explorer 9                | `text/css`                                                                                                                          |
| Safari, Chrome                     | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10                        | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6                      | `text/css,*/*;q=0.1`                                                                                                                |

\[1] See [bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789).

\[2] See [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header).
