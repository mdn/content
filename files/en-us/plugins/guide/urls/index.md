---
title: URLs
slug: Plugins/Guide/URLs
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
This chapter describes retrieving URLs and displaying them on specified target pages, posting data to an HTTP server, uploading files to an FTP server, and sending mail.

Uniform resource locator (URL) protocols provide a means for locating and accessing resources that are available on the Internet and on intranets. Plug-ins can request and receive the data associated with URLs of any type that the browser can handle, including HTTP, FTP, news, mailto, and gopher.

The table below summarizes URLs supported by Gecko. In addition, Gecko may support URLs not listed on this table.

| URL Scheme   | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `about`      | Locates browser information or "fun" pages.                                                                  |
| `file`       | (Host-specific filenames) Locates files on a specific host computer rather than an Internet resource.        |
| `ftp`        | (File Transfer Protocol) Locates files and directories on Internet hosts for file download.                  |
| `http`       | (Hypertext Transfer Protocol) Locates resources on the Internet.                                             |
| `javascript` | Executes JavaScript code that follows the URL. Netscape-specific.                                            |
| `mailto`     | (Electronic mail address) Locates the Internet mailing address of an individual or service.                  |
| `nethelp`    | Displays a NetHelp topic in a NetHelp window. Browser-specific.                                              |
| `news`       | (USENET news) Locates USENET news groups or individual USENET articles.                                      |
| `nntp`       | (USENET news using nntp access) Locates USENET news groups or individual USENET articles; alternate to news. |
| `prospero`   | (Prospero Directory Service) Locates a resource on a Prospero directory server.                              |
| `telnet`     | (Reference to interactive sessions) Locates an interactive service.                                          |
| `wais`       | (Wide Area Information Servers) Locates WAIS databases and their documents.                                  |
| `wysiwyg`    | Placed before another URL; displays a page that JavaScript has updated using document.write.                 |

For more information, see [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986), "Uniform Resource Identifier (URI): Generic Syntax", and the [IANA URI scheme registry](https://www.iana.org/assignments/uri-schemes.html).

- [Getting URLs](/en-US/docs/Gecko_Plugin_API_Reference/URLs#Getting_URLs)
- [Posting URLs](/en-US/docs/Gecko_Plugin_API_Reference/URLs#Posting_URLs)

### Getting URLs

To retrieve a URL and display it on a specified target page, use the [`NPN_GetURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURL), [`NPN_GetURLNotify`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURLNotify), and [`NPP_URLNotify`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_URLNotify) functions. This section describes the methods and procedures used for getting the URL and displaying the page.

The plug-in uses the `NPN_GetURL` function to ask the browser to display data retrieved from a URL in a specified target window or frame, or deliver it to the plug-in instance in a new stream. This is the way that plug-ins provide hyperlinks to other documents or retrieve data from the network.

If the browser cannot locate the URL and retrieve the data, it does not create a stream for the instance; in this case, the plug-in receives notification of the result. To request a stream and receive notification of the result in all cases, use `NPN_GetURLNotify`.

For HTTP URLs, the browser resolves `NPN_GetURL` as the HTTP server method GET, which requests URL objects.

Note that `NPN_GetURL` is typically asynchronous: it returns immediately and only later handles the request, such as displaying the URL or creating the stream for the instance and writing the data. For this reason as well, calling `NPN_GetURLNotify` may be more useful than `NPN_GetURL`; the plug-in is notified upon either successful or unsuccessful completion of the request.

    NPError NPN_GetURL(NPP instance, const char *url, const char *target);

The instance parameter represents the current plug-in instance. The url parameter is the URL of the request, which can be of any type, including HTTP, FTP, news, or mailto.

The target parameter represents the destination where the URL will be displayed, a window or frame. If target refers to the window or frame containing the plug-in instance, it is destroyed and the plug-in may be unloaded. If the target parameter is set to null, the application creates a new stream and delivers the data to the plug-in instance, through calls to [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write), and [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream).

In general, if a URL works in the location box of the Navigator, it works as a target for `NPN_GetURL`, except for the `_self` target.

Make sure that the target matches the URL type sent to it. For example, a null target does not make sense for some URL types (such as mailto). For some recommendations to help you with target parameter choice, see the reference entry for [`NPN_GetURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURL).

The `NPN_GetURLNotify` method acts like `NPN_GetURL`. Both request the creation of a new stream with the contents of the specified URL, and, in addition, `NPN_GetURLNotify` notifies the plug-in of the successful or unsuccessful completion of the request. The browser notifies the plug-in by calling the plug-in's `NPP_URLNotify` function and passing it the `notifyData` value, which may be used to track multiple requests.

`NPN_GetURLNotify` handles the URL request asynchronously. It returns immediately and only later handles the request and calls `NPP_URLNotify`. Without this notification, the plug-in cannot tell whether a request with a null target failed or a request with a non-null target was completed.

    NPError NPN_GetURLNotify(NPP instance, const char* url,

                            const char* target, void* notifyData);

The instance, url, and target parameters have the same definitions as those of `NPN_GetURL`. The notifyData parameter contains private plug-in data that can be used to associate the request with the subsequent `NPP_URLNotify` call (which returns this value) and/or to pass a pointer to some request-related payload.

If a request is not completed successfully (for example, because the URL is invalid or an HTTP server is down), the browser should call `NPP_URLNotify` as soon as possible. If a request completes successfully, and the target is non-null, the browser calls `NPP_URLNotify` after it has finished loading the URL. If the target is null, it calls `NPP_URLNotify` after calling `NPP_DestroyStream` to close the stream.

Both the `NPN_GetURLNotify` and `NPN_PostURLNotify` functions call `the NPP_URLNotify` method to notify the plug-in of the result of a request. Both functions pass the `notifyData` value to `NPP_URLNotify`, which tells the plug-in that the URL request was completed and the reason for completion.

    void NPP_URLNotify(NPP instance, const char* url,

                       NPReason reason, void* notifyData);

The instance and url parameters have the same definitions as those of `NPN_GetURL`. The notifyData parameter contains the private plug-in data passed to the corresponding call to `NPN_GetURLNotify` and `NPN_PostURLNotify`.

> **Warning:** In Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1), `NPN_GetURLNotify()` does not notify the plug-in if `notifyData` is `NULL`. See [bug 638367](https://bugzilla.mozilla.org/show_bug.cgi?id=638367 "[Firefox 4] [NPAPI plugins] NPN_GetURLNotify does not call NPP_URLNotify if notifyData is null") for details.

#### Getting the URL and Displaying the Page

To retrieve a URL and display it on a specified target page, you use the `NPN_GetURL` and `NPN_GetURLNotify` functions. The URL can be displayed in the same window or frame, a new window, or a different window or frame, depending on the value of the target parameter. Specify the display target with one of these special target names:

- `_blank` or `_new`: Load the URL in a new blank unnamed window. Safest target, even though, when used with a mailto or news URL, this creates an extra blank browser instance.
- `_self` or `_current`: Load the URL into the same window the plug-in instance occupies. If this target refers to the window or frame containing the instance, the instance is destroyed and the plug-in may be unloaded.
- `_parent`: Load the URL into the immediate `FRAMESET` parent of the plug-in instance document. If the plug-in instance document has no parent, the default is `_self`.
- `_top`: Load the URL into the plug-in instance window. The default is `_self`, if the plug-in instance document is already at the top. Use for breaking out of a deep frame nesting.

Be careful when you assign a target. If the target refers to the window or frame containing the instance or one of its parents/ancestors, the instance is destroyed and the plug-in may be unloaded.

Here's an example of getting a URL: A plug-in instance draws a button that acts like a link to another web page. When the user clicks the button, the plug-in calls `NPN_GetURL` to go to the page.

    err = NPN_GetURL(

      instance, "http://www.example.com/", "_blank");

### Posting URLs

- [Posting Data to an HTTP Server](/en-US/docs/Gecko_Plugin_API_Reference/URLs#Posting_Data_to_an_HTTP_Server)
- [Uploading Files to an FTP Server](/en-US/docs/Gecko_Plugin_API_Reference/URLs#Uploading_Files_to_an_FTP_Server)
- [Sending Mail](/en-US/docs/Gecko_Plugin_API_Reference/URLs#Sending_Mail)

The plug-in calls [`NPN_PostURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_PostURL) to post data from a file or buffer to a URL. This function is the counterpart of [`NPN_GetURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURL).

- `NPN_PostURL` writes data from a file or buffer to the URL and either displays the server response in the target window or delivers it to the plug-in.
- `NPN_GetURL` reads data from the URL and either displays it in the target window or delivers it to the plug-in.

For HTTP URLs only, the browser resolves this method as the HTTP server method `POST`, which transmits data to the server.

You can use `NPN_PostURL` to post data to a URL from a memory buffer or file. The result from the server can also be sent to a particular browser window or frame for display, or delivered to the plug-in instance in a new stream. Plug-ins can use this capability to post form data to CGI scripts using HTTP or upload files to a remote server using FTP.

The browser resolves this method as the HTTP server method POST, which transmits data to the server. The data to post can be contained either in a local temporary file or a new memory buffer. To post a file, set the flag file to true, the buffer buf to the path name string for a file, and len to the length of the path string. The file-type URL prefix "file://" is optional.

`NPN_PostURL` is typically asynchronous: it returns immediately and only later handles the request and calls `NPP_Notify` (which, in turn, calls `NPP_URLNotify`).

    NPError NPN_PostURL(NPP instance, const char *url,

    const char *target, uint32 len,

    const char *buf, NPBool file);

The `instance`, `url`, and `target` parameters have the same definitions as those of `NPN_GetURL`.

The `buf` parameter identifies a local temporary file or data buffer that contains the data to post.

**Windows and Mac**

If a file is posted with any protocol other than FTP, the file must be text with Unix-style line breaks ('\n' separators only).

`NPN_PostURL` works identically with buffers and files. To post data from a memory buffer, set the flag file to false, the buffer buf to the data to post, and len to the length of the buffer.

Possible URL types include http (similar to an HTML form submission), mailto (sending mail), news (posting a news article), and ftp (uploading a file). For protocols in which the headers must be distinguished from the body, such as http, the buffer or file should contain the headers, followed by a blank line, then the body. If no custom headers are required, add a blank line ('\n') to the beginning of the file or buffer.

> **Note:** You cannot use `NPN_PostURL` to specify headers (even a blank line) in a memory buffer. To do this, use `NPN_PostURLNotify` for this purpose. § The `NPN_PostURLNotify` function has all the same capabilities and works like `NPN_PostURL` in most ways except that (1) it supports specifying headers when posting a memory buffer, and (2) it calls `NPP_URLNotify` upon successful or unsuccessful completion of the request. `NPN_PostURLNotify` is typically asynchronous: it returns immediately and only later handles the request and calls `NPP_URLNotify`.

    NPError NPN_PostURLNotify(

      NPP instance, const char *url,

      const char *target, uint32 len,

      const char *buf, NPBool file, void* notifyData

    );

The parameters of this function have the same definitions as those of `NPN_PostURL`. The `notifyData` parameter contains plug-in-private data passed by `NPP_URLNotify` and may be used for tracking multiple posts.

#### Posting Data to an HTTP Server

The following code posts two name-value pairs to a CGI script through HTTP. The response from the server is displayed in a new window.

_char\* pPostData = "Content-Type:\tapplication/x-www-form-urlencoded\nContent-Length:\t17\n\nname=aaashun\@gmail.com\n";_

_uint32 nPostDataLen = (uint32)strlen(pPostData);_

_NPN_PostURL(npInstance, "http\://www\.baidu.com","\_blank", nPostDataLen, pPostData, FALSE);_

#### Uploading Files to an FTP Server

Plug-ins can use `NPN_PostURL` or `NPN_PostURLNotify` to upload files to a remote server using FTP. This example uploads a file from the root of the local file system to an FTP server and displays the response in a frame named response:

    char* myData = "file:///c\/myDirectory/myFileName";

    uint32 myLength = strlen(myData) + 1;

    err = NPN_PostURL(instance, "ftp://fred@ftp.example.com/pub/",

                      "response", myLength, myData, TRUE);

#### Sending Mail

A plug-in can send an email message using `NPN_PostURL` or `NPN_PostURLNotify`. The following code sends a mail message with the default headers from the client machine.

    char* myData = "\nHi Fred, this is a message from my plug-in!";

    uint32 myLength = strlen(myData) + 1;

    err = NPN_PostURLNotify(instance, "mailto:fred@example.com",

    NULL, myLength, myData, FALSE);

The example starts by defining the mail message, `myData`, and its length, `myLength`. It sends `myData` and `myLength` to the mailto URL `mailto:fred@example.com`. The target window for displaying the message is null in the example. Normally, using a null target window causes the response to be delivered from the server to the plug-in instance in a new stream, but no response is expected for a mailto URL.

You cannot use either of these functions to set the body or attachments of an email message.
