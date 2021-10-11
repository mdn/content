---
title: Streams
slug: Plugins/Guide/Streams
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
This chapter describes using plug-in API functions to receive and send streams.

Streams are objects that represent URLs and the data they contain, or data sent by a plug-in without an associated URL. Although a single stream is associated with one specific instance of a plug-in, a plug-in can have more than one stream object per instance. Streams can be produced by the browser and consumed by a plug-in instance, or produced by an instance and consumed by the browser. Each stream has an associated MIME type identifying the format of the data in the stream.

Streams produced by the browser can be automatically sent to or requested by the plug-in instance. The browser calls the plug-in methods [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady), [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write), and [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream) to, respectively, create a stream, find out how much data the plug-in can handle, push data into the stream, and delete it.

The plug-in instance selects a transmission mode for streams produced by the browser. Stream data can be pushed by the browser, pulled by the plug-in, or saved to a local file and passed to the plug-in.

- Normal mode: The browser uses the [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) method to "push" stream data to the instance incrementally as it is available.
- Random-access mode: The plug-in calls the [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) method to "pull" stream data. In general, this mode is more expensive, because the entire stream must be downloaded to a temporary file before use unless the stream comes from a local file or an HTTP server that supports the byte-range extension to HTTP.
- File mode: The browser saves the entire stream to a local file and passes the file path to the plug-in instance through the [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile) method. Use this feature only as a last resort; plug-ins should implement an incremental stream-based interface wherever possible.

Streams sent by the plug-in to the browser are like normal-mode streams produced by the browser, but in reverse. In normal-mode streams, the browser calls the plug-in to tell it when a stream is created and to push more data. In contrast, for streams produced by the plug-in, the plug-in calls the Plug-in API methods [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write), and [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream) to create a stream, push data into it, and delete it.

- Receiving a Stream
- Sending a Stream

### Receiving a Stream

When the browser sends a data stream to the plug-in, it has several tasks to perform:

- Telling the Plug-in When a Stream Is Created
- Telling the Plug-in When a Stream Is Deleted
- Finding Out How Much Data the Plug-in Can Accept
- Writing the Stream to the Plug-in
- Sending the Stream in Random-Access Mode
- Sending the Stream in File Mode

### Telling the Plug-in When a Stream Is Created

To tell the plug-in instance when a new stream is created, the browser calls the [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream) method. This method also determines which mode it should use to send data to the plug-in. The browser can create a stream for several different types of data:

- for the file specified in the `data` attribute of the `object` element or the `src` attribute of the `embed` element
- for a data file
- for a full-page instance

The [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream) method has the following syntax:

    NPError NPP_NewStream(NPP instance, NPMIMEType type,

    NPStream *stream, NPBool seekable, uint16* stype);

The instance parameter refers to the plug-in instance receiving the stream; the type parameter represents the stream's MIME type.

The stream parameter is a pointer to the new stream, which is valid until the stream is destroyed.

The seekable parameter specifies whether the stream is seekable (true) or not (false). Seekable streams support random access (for example, local files or HTTP servers that support byte-range requests).

The plug-in can set the output parameter type to one of these transmission modes:

- **NP_NORMAL**: (Default): The plug-in can process the data progressively as it arrives from the network or file system through a series of calls to [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write).
- **NP_ASFILEONLY**: This plug-in gets full random access to the data using platform-specific file operations. The browser saves stream data to a local file, and, when the stream is complete, delivers the path of the file through a call to [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile).
- **NP_ASFILE**: This mode is like NP_ASFILEONLY except that data is delivered to the plug-in as it is saved to the file, through a series of calls to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write). You should use NP_ASFILEONLY whenever possible in preference to NP_ASFILE, which is less efficient because it uses successive calls to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) to send the data.
- **NP_SEEK**: The plug-in instance can randomly access stream data as needed, through calls to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead). If the stream is not seekable, these requests are fulfilled only when all the data has been read and stored in the cache.

Once all data in the stream has been written to the plug-in, the stream is destroyed. To do this, either the browser can call [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream) or the plug-in can call [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream). This applies to all plug-in modes except [`NP_SEEK`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_SEEK).

> **Note:** A plug-in can also use the [`NPN_GetURL`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_GetURL) method to request a stream for an arbitrary URL.

### Telling the Plug-in When a Stream Is Deleted

The browser calls the [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream) method when it completes the stream sent to the plug-in, either successfully or abnormally. Once the plug-in returns from this method, the browser deletes the [`NPStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPStream) object. The plug-in can terminate the stream itself by calling [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream).

You should delete any private data allocated in the plug-in's `stream->pdata` field when you destroy a stream. The plug-in can store private data associated with the stream in `stream->pdata`. The browser stores private data in `stream->ndata`; this value should not be changed by the plug-in.

    NPError NPP_DestroyStream(NPP instance,

    NPStream *stream, NPError reason);

The instance parameter is the current plug-in instance; the stream parameter specifies the stream to be deleted.

The reason parameter specifies why the stream was destroyed. It can have one of these values:

- **NPRES_DONE** (Most common): Normal completion; all data was sent to the instance.
- **NPRES_USER_BREAK**: The user canceled the stream directly by clicking the Stop button or indirectly by some action, such as by deleting the instance or initiating higher-priority network operations.
- **NPRES_NETWORK_ERR**: The stream failed because of problems with the network, disk I/O error, lack of memory, or some other problem.

### Finding Out How Much Data the Plug-in Can Accept

After a call to [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream) and before writing data to the plug-in, the browser calls [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) to determine the maximum number of bytes that the plug-in can consume. This function allows the browser to send only as much data to the instance as it can handle at one time, and it helps both the browser and the plug-in to use their resources efficiently.

After a call to [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), in which the plug-in requested a normal-mode stream, the browser delivers the data in the stream progressively in a series of calls to [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write). The browser calls NPP_WriteReady before each call to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write).

The value returned by [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) indicates how many bytes the plug-in instance can accept for this stream. If the plug-in allocates memory for the entire stream at once, it can return a large number. This number tells the browser that it can pass as much data to the instance as possible in a single call to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write). The browser can write a smaller amount of data if desired or necessary (for example, if only 8K of data is available in a network buffer).

For instance, suppose the plug-in allocates, in [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), an 8K buffer to hold the data written from that stream. In the first call, NPP_WriteReady could return 8192, resulting in a call to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) with a buffer of up to 8K bytes. After this data is copied from the browser's buffer to the plug-in's buffer, the plug-in begins to process the data asynchronously. At the next [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) call, only half of the data has been processed. To avoid allocating additional buffers, the plug-in could return 4096, resulting in a call to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) with a buffer of up to 4K bytes.

The buffer passed to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) may accommodate more bytes than the maximum number returned from [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) . This maximum is only a promise to consume a certain amount of data from the buffer, not an upper limit on the buffer size. In the example above, suppose that the plug-in allocates an 8K buffer and returns 8192 from [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady). If the plug-in gets 10000 bytes from the browser in a subsequent call to NPP_Write, the plug-in should copy the first 8192 bytes from the browser's buffer into its own buffer and return 8192 (the number of bytes actually consumed) from [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write).

    int32 NPP_WriteReady(NPP instance, NPStream *stream);

The instance parameter is the current plug-in instance; the stream parameter specifies the current stream.

### Writing the Stream to the Plug-in

The next step is to write the data to a plug-in from a stream. After a call to [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), in which the plug-in requested a normal-mode stream, the browser delivers the data in the stream progressively in a series of calls to [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write).

The [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) function should return the number of bytes consumed by the instance. If this is a negative number, the browser calls [`NPP_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_DestroyStream) to destroy the stream. If the number returned is smaller than the size of the buffer, the browser sends the remaining data in the buffer to the plug-in through repeated calls to [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write).

    int32 NPP_Write(NPP instance, NPStream *stream,

    int32 offset, int32 len, void *buf);

The instance parameter is the current plug-in instance; the stream parameter specifies the current stream. The offset parameter specifies the offset, in bytes, of buf from the beginning of the data in the stream. The len parameter specifies the length, in bytes, of buf, the buffer of data (delivered by the stream). The buffer allocated by the browser is deleted after returning from the function, so the plug-in must make a copy of the data it needs to keep.

As an example, suppose that a plug-in (and the HTTP server) supports byte-range requests, and that the browser is in the process of pushing data to the plug-in. If the user now requests a specific page of the document, the plug-in calls [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) with a list of byte ranges. The open stream is converted from normal mode to seek mode in an effort to pass the plug-in data that was already on the way, rather than just discarding it. All [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) calls for streaming data eventually stop, and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) calls will be completed only for data requested with [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead).

The browser does not create a new stream for each byte range it requests. Instead, additional NPP_WriteReady and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) calls occur on the same stream. An individual call to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) can request discontiguous ranges, and you can have many outstanding [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) calls. There is no guarantee that [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) will receive requests for ranges in the same order as you requested (although this typically is the case; the server controls the order). So, you'll need to pay attention to the offsets as data is being written.

The stream processes all byte-range requests, and then is placed in seek mode (either explicitly in [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream), or implicitly by a call to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead)). It remains open until the plug-in closes it by calling [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream), or until the instance is destroyed.

NOTE: If you want to be sure that the NPN\_\*Stream functions are called in the order you want and behave the way you expect, combine NPN\_[NewStream](/en-US/NewStream), [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write), and [`NPN_Destroy_Stream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Destroy_Stream) in the same callback.

### Sending the Stream in Random-Access Mode

In random-access mode, the plug-in "pulls" stream data by calling the [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) method. The browser must download the entire stream to a temporary file before it can be used, unless the stream comes from a local file or an HTTP server that supports the byte-range extension to HTTP. This mode consumes more resources than the others.

Random-access mode is determined in [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream) by setting the mode [`NP_SEEK`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NP_SEEK). This mode gives the plug-in instance random access to stream data as needed, through calls to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead). If the stream is not seekable, these requests are fulfilled only when all the data has been read and stored in the cache.

The [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) method requests a range of bytes from a seekable stream. Typically, the only streams that are seekable are from data that is in memory or on the disk, or from HTTP servers that support byte-range requests.

- For streams that are not in NP_SEEK mode: The plug-in can call [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) as long as the stream is inherently seekable; [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) automatically changes the mode to NP_SEEK.
- For streams that are not inherently seekable: The stream must be put in NP_SEEK mode initially, because the browser must cache all the stream data on disk in order to access it randomly.
- For streams that are not inherently seekable and not initially in mode NP_SEEK: [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) returns the error code NPERR_STREAM_NOT_SEEKABLE.

The [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) method has the following syntax:

    NPError NPN_RequestRead(NPStream *stream, NPByteRange *rangeList);

The stream parameter is the stream from which to read bytes; the rangeList parameter specifies the range of bytes in the form of a linked list of NPByteRange objects, which the plug-in must allocate. Because these objects are copied by the browser, the plug-in can delete them as soon as the call to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) returns.

The plug-in can request multiple ranges, either through a list of NPByteRange objects in a single call to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead) or through multiple calls to [`NPN_RequestRead`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_RequestRead). In this case, the browser can write individual ranges in any order, with any number of [`NPP_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_WriteReady) and [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write) calls.

### Sending the Stream in File Mode

If the stream is sent in file mode, the browser saves the entire stream to a local file and passes the full file path to the plug-in instance through the [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile) method. Use this feature only as a last resort; plug-ins should implement an incremental stream-based interface whenever possible.

File mode is determined in [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream) by setting the mode NP_ASFILEONLY. This mode gives the plug-in full random access to the data with platform-specific file operations. The browser saves stream data to a local file, and, when the stream is complete, delivers the path of the file through a call to [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile).

> **Note:** Most plug-ins that need the stream saved to a file should use NP_ASFILEONLY mode rather than the older NP_ASFILE; this mode is less efficient because it uses successive calls to [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write). [`NPP_StreamAsFile`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_StreamAsFile) provides the plug-in with a full path to a local file for the stream. It is a good idea to check that the file exists in the directory at the start of this method. If an error occurs during data retrieval or writing to the file, the browser passes null for the filename. If the file is created from a stream from the network, the file is locked in the browser disk cache until the stream or its instance is destroyed.

    void NPP_StreamAsFile(NPP instance, NPStream *stream,

    const char* fname);

The instance parameter is the current plug-in; the stream parameter specifies the current stream. The fname parameter specifies the full path to a local file (or null if an error occurs during data retrieval or writing to the file).

### Sending a Stream

When a plug-in sends a data stream to the browser, it performs several tasks. The plug-in calls the methods [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream), [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write), and [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream) to create a stream, push data into it, and delete it. Streams produced by a plug-in have a specific MIME type and can be sent to a particular browser window or frame for display.

- Creating a Stream
- Pushing Data into the Stream
- Deleting the Stream

For an example that demonstrates these processes, see "Example of Sending a Stream."

### Creating a Stream

The plug-in calls [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream) to send a new data stream to the browser. The browser creates a new [`NPStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPStream) object and returns it to the plug-in as an output parameter.

The plug-in can use this stream object in subsequent [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write) calls to the browser. When all the plug-in data is written into the stream, the plug-in must terminate the stream and deallocate the [`NPStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPStream) object by calling the [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream) function.

    NPError NPN_NewStream(NPP instance,
                          NPMIMEType type,
                          const char* target,
                          NPStream** stream);

The instance parameter is the plug-in instance that is creating the stream; the type specifies the MIME type of the stream.

The target parameter specifies the window or frame. For the possible values of named targets, see the reference entry for [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream). The target should not be the same window.

The stream parameter represents the stream that the browser creates.

For an example that demonstrates using this function with [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write) and [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream), see "Example of Sending a Stream."

### Pushing Data into the Stream

After creating a stream with [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream), the plug-in can call [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write) to deliver a buffer of data from the plug-in to the browser. This function returns the number of bytes written or a negative integer in case of an error during processing. NPN_Write should send as much data as is available. Unlike [`NPP_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_Write), [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write) has no corresponding [`NPN_WriteReady`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_WriteReady) function.

    int32 NPN_Write(NPP instance, NPStream *stream,

    int32 len, void *buf);

The plug-in should terminate the stream by calling [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream), when all data has been written to the stream, or in the event of an error.

The instance parameter is the current plug-in; the stream parameter is a pointer to the stream being written to. The len parameter specifies the length, in bytes, of data written to the stream. The buf parameter is a pointer to the buffer holding the data to write to the stream.

For an example that demonstrates using this function with [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream) and [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream), see "Example of Sending a Stream."

### Deleting the Stream

When the stream is complete, the plug-in calls [`NPN_DestroyStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_DestroyStream) to close and delete it. This applies to streams the plug-in creates with [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream) or streams created by the browser with [`NPP_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPP_NewStream).

    NPError NPN_DestroyStream(NPP instance, NPStream* stream,

    NPError reason);

The instance parameter is the current plug-in; the stream parameter specifies the stream, created by either the browser or the plug-in. The reason parameter represents the reason the stream was stopped, as follows:

- NPRES_DONE (most common): The stream completed normally; the plug-in sent all data to the browser.
- NPRES_USER_BREAK: The plug-in terminated the stream because of a user request.
- NPRES_NETWORK_ERR: The stream failed because of network problems.

For the complete list of codes, see "Result Codes."

For an example that demonstrates using this function with [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream) and [`NPN_Write`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_Write), see "Example of Sending a Stream."

### Example of Sending a Stream

The following code creates a new stream of HTML text displayed by the browser in a new window, writes it, and destroys the stream. Error handling has been omitted for simplicity.

    NPStream* stream;
    char* myData = "<html><head><title>This is a message from my plug-in!</title></head><body><p><strong>This is a message from my plug-in!</strong></p></body>/html>";
    int32 myLength = strlen(myData) + 1;

    /* Create the stream. */
    err = NPN_NewStream(instance, "text/html", "_blank", &stream);

    /* Push data into the stream. */
    err = NPN_Write(instance, stream, myLength, myData);

    /* Delete the stream. */
    err = NPN_DestroyStream(instance, stream, NPRES_DONE);

Your plug-in can create another instance of itself by specifying its own MIME type and a new target name in a call to [`NPN_NewStream`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPN_NewStream).
