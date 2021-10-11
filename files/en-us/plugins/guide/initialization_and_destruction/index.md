---
title: Initialization and Destruction
slug: Plugins/Guide/Initialization_and_Destruction
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
{{ PreviousNext("Gecko Plugin API Reference:Plug-in Development Overview", "Gecko Plugin API Reference:Drawing and Event Handling") }}

This chapter describes the methods that provide the basic processes of initialization, instance creation and destruction, and shutdown.

- [Initialization](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialization): The browser calls the Plug-in API function` NP_Initialize` when the plug-in code is first loaded.
- [Instance Creation](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#instance_creation): The browser calls the Plug-in API function [`NPP_New`](/en-US/NPP_New) when the instance is created.
- [Instance Destruction](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#instance_destruction): The plug-in instance is deleted when the user leaves the instance page or closes the instance window; the browser calls the function [`NPP_Destroy`](/en-US/NPP_Destroy) to tell the plug-in that the instance is being deleted.
- [Shutdown](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#shutdown): When the last instance of a plug-in is deleted, the plug-in code is unloaded from memory and the browser calls the function [`NP_Shutdown`](/en-US/NP_Shutdown). Plug-ins consume no resources, other than disk space, if not referenced.

This chapter ends with [Initialize and Shutdown Example](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example), which includes the [`NP_Initialize`](/en-US/NP_Initialize) and [`NP_Shutdown`](/en-US/NP_Shutdown) methods.

### Initialization

The browser calls [`NP_Initialize`](/en-US/NP_Initialize) when a plug-in is loaded and before the first instance is created. Use this function to allocate the memory and resources shared by all instances of your plug-in.

    NPError NP_Initialize(void) {

    };

After the last plug-in instance is deleted, the browser calls [`NP_Shutdown`](/en-US/NP_Shutdown), which releases the memory or resources allocated by [`NP_Initialize`](/en-US/NP_Initialize). For an example that shows the use of both the [`NP_Initialize`](/en-US/NP_Initialize) and `NP_Shutdown` methods, see [Initialize and Shutdown Example.](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example)

During initialization, when the browser encounters data of a MIME type registered for a plug-in (either embedded in an HTML page or in a separate file), it loads the plug-in code into memory (if it hasn't been loaded already) and creates a new instance of the plug-in. For more information, see [Registering Plug-ins.](/en-US/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#registering_plug-ins)

Plug-ins are native code libraries: .dll files on Windows, .so or .dso files on Unix, and PowerPC Shared Library files or 68K code resources on Mac OS. To reduce memory overhead, plug-ins are usually loaded only when needed and released as soon as possible.

In the initialization process, the browser passes the plug-in two tables of function pointers for all API calls:

- One table lists all API calls from the plug-in to the browser. This table is filled out by the browser before the initialization call.
- The other table lists all API calls from the browser to the plug-in. This table is filled out by the plug-in during the initialization call.

The function tables also contain version information that the plug-in checks to verify that it is compatible with the API capabilities provided by the application. To check this information, use [`NPN_Version`](/en-US/NPN_Version).

No plug-in API calls can take place in either direction until the initialization completes successfully, with the exception of the functions [`NP_Initialize`](/en-US/NP_Initialize) and [`NP_Shutdown`](/en-US/NP_Shutdown), which are not in the function tables. However, because [`NP_Initialize`](/en-US/NP_Initialize) is called at the end of the initialization process, you can call other methods, such as [`NPN_MemAlloc`](/en-US/NPN_MemAlloc) and [`NPN_Status`](/en-US/NPN_Status), from [`NP_Initialize`](/en-US/NP_Initialize).

### Instance Creation

After initialization, the plug-in instance is created. More than one instance of the same plug-in can exist if a single page contains multiple embedded plug-ins, or if several browser windows are open and display the same data type. At this point, a plug-in can call the [`NPN_SetValue`](/en-US/NPN_SetValue) function to specify whether it is windowed (the default) or windowless.

Plug-in instances are created with [`NPP_New`](/en-US/NPP_New) and destroyed with [`NPP_Destroy`](/en-US/NPP_Destroy). [`NPP_New`](/en-US/NPP_New) informs the plug-in of the creation of a new instance with the specified MIME type. You can allocate instance-specific private data at this time.

    NPError NPP_New(NPMIMEType pluginType,
                    NPP instance, uint16 mode,
                    int16 argc, char *argn[],
                    char *argv[], NPSavedData *saved);

The `pluginType` parameter represents the MIME type of this instance of the plug-in. You can assign more than one MIME type to a plug-in, which could potentially allow the plug-in to respond to data streams of different types with different interfaces and behavior.

The `instance` parameter represents an [`NPP`](/en-US/NPP) object, created by the browser. You can store the instance-specific private data in its pdata field (instance->pdata).

The `mode` parameter identifies the display mode in which the plug-in was invoked, either `NP_EMBED` or `NP_FULL`.

- `NP_EMBED` means that the instance was created by an `EMBED` and shares the browser window with other content.
- `NP_FULL` means that the instance was created by a separate file and is the primary content in the window.

The next three parameters pass parameters from the `embed` element that called the plug-in. The argc parameter is the number of HTML arguments in the element. It determines the number of attributes in the arrays specified by the argn and argv parameters.

The arguments in the `embed` element are name-value pairs made up of the attribute name (for example, `align`) and its value (for example, top). The argn array contains the attribute names; the argv array contains the attribute values.

The browser ignores any nonstandard attributes in an `embed` element, so the web page author can use the arg parameters to specify private attributes defined for a particular plug-in. For example, the following `embed` element has the standard attributes `src`, `height`, and `width` and the private attribute `loop`:

    <embed src="movie.avi" height="100" width="100" loop="true">

With the `embed` element in the example, the browser passes the values in argv to the plug-in instance:

    argc = 4
    argn = { "src", "height", "width", "loop" }
    argv = { "movie.avi", "100", "100", "true" }

The saved parameter allows an instance of a plug-in to save its data and, when the instance is destroyed, pass the data to the next instance of the plug-in at the same URL. The data is saved in the History list. As long as the plug-in still appears in this list, that saved data is associated with the page; any new instances receive this data.

### Instance Destruction

Plug-in instances are created with [`NPP_New`](/en-US/NPP_New) and destroyed with [`NPP_Destroy`](/en-US/NPP_Destroy). The browser calls `NPP_Destroy` when a plug-in instance is deleted, usually because the user has left the page containing the instance, closed the window, or quit the application. If this is the last instance created by a plug-in, [`NP_Shutdown`](/en-US/NP_Shutdown) is called.

You should not perform any graphics operations in `NPP_Destroy` because the instance window is no longer guaranteed to be valid. Also, be sure to delete any private instance-specific information stored in the plug-in's `instance->pdata`.

    NPError NPP_Destroy(NPP instance, NPSavedData **save);

The `instance` parameter represents the plug-in instance to delete.

The plug-in can use the optional `save` parameter to save data for reuse by a new instance with the same URL. The data is passed to [`NPP_New`](/en-US/NPP_New) through its saved parameter. For example, a video player could save the last frame number to be displayed. When the user returns to the page, the previous frame number is passed to the new instance of the plug-in, so it can initially display the same frame.

Note that you cannot count on data being saved this way; the data may be lost if the browser restarts or purges memory. Ownership of the buf field of the [`NPSavedData`](/en-US/NPSavedData) structure passes from the plug-in to the browser when [`NPP_Destroy`](/en-US/NPP_Destroy) returns.

The example in this section sets up a buffer and allocates memory for it. You can use this type of buffer to handle data saved from one instance of a plug-in to another. The example shows the use of the optional save parameter of [`NPP_Destroy`](/en-US/NPP_Destroy) and saved parameter of [`NPP_New`](/en-US/NPP_New).

- In [`NPP_New`](/en-US/NPP_New), the saved parameter contains previously saved data for this instance of the plug-in (saved by [`NPP_Destroy`](/en-US/NPP_Destroy)). The plug-in must free the memory for [`NPSavedData`](/en-US/NPSavedData) and the buffer it contains.
- In [`NPP_Destroy`](/en-US/NPP_Destroy), the save parameter specifies state or other information to save for reuse by a new instance with the same URL.

To ensure that the browser does not crash or leak memory when the saved data is discarded, the buf field should be a flat structure (a simple structure with no allocated substructures) allocated with [`NPN_MemAlloc`](/en-US/NPN_MemAlloc), as in this example:

    char* myData = "Here is some saved data.\n";

    int32 myLength = strlen(myData) + 1;

    *save = (NPSavedData*) NPN_MemAlloc(sizeof(NPSavedData));

    (*save)->len = myLength;

    (*save)->buf = (void*) NPN_MemAlloc(myLength);

    strcpy((*save)->buf, myData);

If you allocate saved instance data in [`NPP_Destroy`](/en-US/NPP_Destroy), be sure to allocate memory with this function, since the browser can delete the saved data with the equivalent of [`NPN_MemAlloc`](/en-US/NPN_MemAlloc) at any time.

### Shutdown

When the application no longer needs the plug-in, it is shut down and released. [`NP_Shutdown`](/en-US/NP_Shutdown) gives you an opportunity to delete data allocated in [`NP_Initialize`](/en-US/NP_Initialize) to be shared by all instances of a plug-in. The browser calls the plug-in's `NP_Shutdown` function, which informs the plug-in that its library is about to be unloaded, and gives it a chance to cancel any outstanding I/O requests, delete threads it created, free any memory it allocated, and perform any other closing tasks.

The [`NP_Shutdown`](/en-US/NP_Shutdown) function releases memory or resources shared across all instances of a plug-in. It is called once after the last instance of the plug-in is destroyed, before releasing the plug-in library itself.

    void NP_Shutdown(void);

For an example that shows both the [`NP_Initialize`](/en-US/NP_Initialize) and [`NP_Shutdown`](/en-US/NP_Shutdown) methods, see [Initialize and Shutdown Example](/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example).

### Initialize and Shutdown Example

This example demonstrates the use of the [`NP_Initialize`](/en-US/NP_Initialize) and [`NP_Shutdown`](/en-US/NP_Shutdown) methods.

    /* Define global variable to hold the user agent string. */
    static char* userAgent = NULL;

    /* Initialize function. */
    NPError NP_Initialize(void)
    {
      /* Get the user agent from the browser. */
      char* result = NPN_UserAgent();
      if (result == NULL) return NPERR_OUT_OF_MEMORY_ERROR;

      /* Allocate some memory so that you can keep a copy of it. */
      userAgent = (char*) NPN_MemAlloc(strlen(result) + 1);
      if (userAgent == NULL) return NPERR_OUT_OF_MEMORY_ERROR;

      /* Copy the string to your memory. */
      strcpy(userAgent, result);

      return NPERR_NO_ERROR;
    }

    /* Shutdown function */
    NPError NP_Shutdown(void)
    {
      /* Delete the memory you allocated. */
      if (userAgent != NULL)
        NPN_MemFree(userAgent);

      return NPERR_NO_ERROR;
    }

{{ PreviousNext("Gecko Plugin API Reference:Plug-in Development Overview", "Gecko Plugin API Reference:Drawing and Event Handling") }}
