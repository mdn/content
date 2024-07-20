---
title: List of default Accept values
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
page-type: guide
---

{{HTTPSidebar}}

This article documents the default values for the HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header for specific inputs and browser versions.

## Default values

These are the values sent when the context doesn't give better information.
Note that all browsers add the `*/*` MIME Type to cover all cases.
This is typically used for requests initiated via the address bar of a browser, or via an HTML {{HTMLElement("a")}} element.

| User Agent                 | Value                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 128 and later [1]  | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                     |
| Firefox 92 to 127 [1]      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| Firefox 72 to 91 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 66 to 71 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Firefox 65 [2]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 64 and earlier [2] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Safari, Chrome             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| Safari 5 [3]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                  |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |

\[1] The value can be set to an arbitrary string using the `network.http.accept` preference (`about:config`).

\[2] The value can be set to an arbitrary string using the [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) preference (`about:config`).

\[3] This is an improvement over earlier `Accept` headers as it no longer ranks `image/png` above `text/html`.

## Values for an image

When requesting an image, like through an HTML {{HTMLElement("img")}} element, user-agent often sets a specific list of media types to be welcomed.

| User Agent                     | Value                                                                      |
| ------------------------------ | -------------------------------------------------------------------------- |
| Firefox 128 and later [1]      | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`    |
| Firefox 92 to 127 [1]          | `image/avif,image/webp,*/*`                                                |
| Firefox 65 to 91 [1]           | `image/webp,*/*`                                                           |
| Firefox 47 to 63 [1]           | `*/*`                                                                      |
| Firefox prior to 47 [1]        | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (since Mac OS Big Sur)  | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (before Mac OS Big Sur) | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome and Edge 121 and later  | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] The value can be set to an arbitrary string using the `image.http.accept` parameter (_[source](https://searchfox.org/mozilla-central/search?q=image.http.accept)_).

## Values for a video

When a video is requested, via the {{HTMLElement("video")}} HTML element, most browsers use specific values.

| User Agent               | Value                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Firefox 3.6 and later    | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox earlier than 3.6 | _no support for {{HTMLElement("video")}}_                                          |
| Chrome                   | `*/*`                                                                              |

## Values for audio resources

When an audio file is requested, like via the {{HTMLElement("audio")}} HTML element, most browsers use specific values.

| User Agent                | Value                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 and later [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome            | `*/*`                                                                                        |

\[1] See [bug 489071](https://bugzil.la/489071).

## Values for scripts

When a script is requested, like via the {{HTMLElement("script")}} HTML element, some browsers use specific values.

| User Agent     | Value |
| -------------- | ----- |
| Firefox [1]    | `*/*` |
| Safari, Chrome | `*/*` |

\[1] See [bug 170789](https://bugzil.la/170789).

## Values for a CSS stylesheet

When a CSS stylesheet is requested, via the `<link rel="stylesheet">` HTML element, most browsers use specific values.

| User Agent     | Value                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]  | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6  | `text/css,*/*;q=0.1`                                                                                                                |

\[1] See [bug 170789](https://bugzil.la/170789).
