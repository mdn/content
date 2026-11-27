---
title: List of default Accept values
short-title: Default Accept values
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
page-type: guide
sidebar: http
---

This article documents the default values for the HTTP [`Accept`](/en-US/docs/Web/HTTP/Reference/Headers/Accept) header for specific inputs and browser versions.

## Default values

These are the values sent when the context doesn't give better information.
Note that all browsers add the `*/*` MIME Type to cover all cases.
This is typically used for requests initiated via the address bar of a browser, or via an HTML {{HTMLElement("a")}} element.

| User Agent                 | Value                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 132 and later [1]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                   |
| Firefox 128 to 131         | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                                     |
| Firefox 93 to 127          | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                             |
| Firefox 72 to 92 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                        |
| Firefox 66 to 71 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                   |
| Firefox 65 [2]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                        |
| Firefox 64 and earlier [2] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                   |
| Safari 13.1 to 18.1+ [4]   | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                   |
| Chrome 155 and later       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Chrome 131 to 154 [4]      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`           |
| Safari, Chrome [4]         | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                             |
| Safari 5 [3]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                   |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                                  |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`                 |

\[1] The value can be set to an arbitrary string using the `network.http.accept` preference (`about:config`).

\[2] The value can be set to an arbitrary string using the [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) preference (`about:config`).

\[3] This is an improvement over earlier `Accept` headers as it no longer ranks `image/png` above `text/html`.

\[4] Rechecked and added values for Safari 13.1 to 18.1 and Chrome 131. Values may have changed before specified versions.

## Values for an image

When requesting an image, like through an HTML {{HTMLElement("img")}} element, user-agent often sets a specific list of media types to be welcomed.

| User Agent                | Value                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Firefox 158 and later [1] | `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`                                              |
| Firefox 128 to 157 [1]    | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`                                                        |
| Firefox 93 to 127 [1]     | `image/avif,image/webp,*/*`                                                                                                    |
| Firefox 65 to 92 [1]      | `image/webp,*/*`                                                                                                               |
| Firefox 47 to 64 [1]      | `*/*`                                                                                                                          |
| Firefox prior to 47 [1]   | `image/png,image/*;q=0.8,*/*;q=0.5`                                                                                            |
| Safari 17 and later [2]   | `image/webp,image/avif,image/jxl,image/heic,image/heic-sequence,video/*;q=0.8,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` |
| Safari 16 [2]             | `image/webp,image/avif,video/*;q=0.8,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`                                          |
| Safari 14 and 15 [2]      | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`                                                     |
| Safari 11.1 to 13         | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`                                                                |
| Chrome 155 and later      | `image/jxl,image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8`                                                   |
| Chrome 88 to 154 [3]      | `image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8`                                                             |
| Chrome 85 to 87 [3]       | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                                                                           |
| Chrome 84 and earlier     | `image/webp,image/apng,image/*,*/*;q=0.8`                                                                                      |

\[1] The value can be set to an arbitrary string using the `image.http.accept` parameter (_[source](https://searchfox.org/firefox-main/search?q=image.http.accept)_).

\[2] Some tokens depend on the operating system:

- `image/webp` needs macOS 11 or iOS 14.
- `image/avif` needs macOS 13 or iOS 16, or Safari 16.4 on macOS 11 and 12.
- `image/jxl` needs macOS 14 or iOS 17.

Without them, Safari sends the same string with those tokens left out. In Lockdown Mode, Safari 26 and later send only `image/webp,video/*;q=0.8,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` to HTTPS sites. Chrome on iOS uses WebKit, so it sends the Safari values.

\[3] Chrome on Android has sent `image/avif` since Chrome 89. Chrome 85 to 88 on Android sends the string without `image/avif`.

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

## See also

- [Content negotiation](/en-US/docs/Web/HTTP/Guides/Content_negotiation)
