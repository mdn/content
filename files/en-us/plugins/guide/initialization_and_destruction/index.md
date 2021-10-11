---
title: Initialization and Destruction
slug: Plugins/Guide/Initialization_and_Destruction
tags:
  - Gecko Plugin API Reference
  - Guide
  - NPAPI
  - Plugins
---
<p>{{ PreviousNext("Gecko Plugin API Reference:Plug-in Development Overview", "Gecko Plugin API Reference:Drawing and Event Handling") }}</p>

<p>This chapter describes the methods that provide the basic processes of initialization, instance creation and destruction, and shutdown.</p>

<ul>
 <li><a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialization">Initialization</a>: The browser calls the Plug-in API function<code> <a href="/en-US/NP_Initialize">NP_Initialize</a></code> when the plug-in code is first loaded.</li>
 <li><a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#instance_creation">Instance Creation</a>: The browser calls the Plug-in API function <code><a href="/en-US/NPP_New">NPP_New</a></code> when the instance is created.</li>
 <li><a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#instance_destruction">Instance Destruction</a>: The plug-in instance is deleted when the user leaves the instance page or closes the instance window; the browser calls the function <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code> to tell the plug-in that the instance is being deleted.</li>
 <li><a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#shutdown">Shutdown</a>: When the last instance of a plug-in is deleted, the plug-in code is unloaded from memory and the browser calls the function <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code>. Plug-ins consume no resources, other than disk space, if not referenced.</li>
</ul>

<p>This chapter ends with <a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example">Initialize and Shutdown Example</a>, which includes the <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> and <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code> methods.</p>

<h3 id="Initialization">Initialization</h3>

<p>The browser calls <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> when a plug-in is loaded and before the first instance is created. Use this function to allocate the memory and resources shared by all instances of your plug-in.</p>

<pre class="eval">NPError NP_Initialize(void) {

};
</pre>

<p>After the last plug-in instance is deleted, the browser calls <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code>, which releases the memory or resources allocated by <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code>. For an example that shows the use of both the <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> and <code>NP_Shutdown</code> methods, see <a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example">Initialize and Shutdown Example.</a></p>

<p>During initialization, when the browser encounters data of a MIME type registered for a plug-in (either embedded in an HTML page or in a separate file), it loads the plug-in code into memory (if it hasn't been loaded already) and creates a new instance of the plug-in. For more information, see <a href="/en-US/Gecko_Plugin_API_Reference/Plug-in_Development_Overview#registering_plug-ins">Registering Plug-ins.</a></p>

<p>Plug-ins are native code libraries: .dll files on Windows, .so or .dso files on Unix, and PowerPC Shared Library files or 68K code resources on Mac OS. To reduce memory overhead, plug-ins are usually loaded only when needed and released as soon as possible.</p>

<p>In the initialization process, the browser passes the plug-in two tables of function pointers for all API calls:</p>

<ul>
 <li>One table lists all API calls from the plug-in to the browser. This table is filled out by the browser before the initialization call.</li>
 <li>The other table lists all API calls from the browser to the plug-in. This table is filled out by the plug-in during the initialization call.</li>
</ul>

<p>The function tables also contain version information that the plug-in checks to verify that it is compatible with the API capabilities provided by the application. To check this information, use <code><a href="/en-US/NPN_Version">NPN_Version</a></code>.</p>

<p>No plug-in API calls can take place in either direction until the initialization completes successfully, with the exception of the functions <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> and <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code>, which are not in the function tables. However, because <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> is called at the end of the initialization process, you can call other methods, such as <code><a class="internal" href="/en-US/NPN_MemAlloc">NPN_MemAlloc</a></code> and <code><a class="internal" href="/en-US/NPN_Status">NPN_Status</a></code>, from <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code>.</p>

<h3 id="Instance_Creation">Instance Creation</h3>

<p>After initialization, the plug-in instance is created. More than one instance of the same plug-in can exist if a single page contains multiple embedded plug-ins, or if several browser windows are open and display the same data type. At this point, a plug-in can call the <code><a href="/en-US/NPN_SetValue">NPN_SetValue</a></code> function to specify whether it is windowed (the default) or windowless.</p>

<p>Plug-in instances are created with <code><a href="/en-US/NPP_New">NPP_New</a></code> and destroyed with <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code>. <code><a href="/en-US/NPP_New">NPP_New</a></code> informs the plug-in of the creation of a new instance with the specified MIME type. You can allocate instance-specific private data at this time.</p>

<pre class="eval">NPError NPP_New(NPMIMEType pluginType,
                NPP instance, uint16 mode,
                int16 argc, char *argn[],
                char *argv[], NPSavedData *saved);
</pre>

<p>The <code>pluginType</code> parameter represents the MIME type of this instance of the plug-in. You can assign more than one MIME type to a plug-in, which could potentially allow the plug-in to respond to data streams of different types with different interfaces and behavior.</p>

<p>The <code>instance</code> parameter represents an <code><a href="/en-US/NPP">NPP</a></code> object, created by the browser. You can store the instance-specific private data in its pdata field (instance-&gt;pdata).</p>

<p>The <code>mode</code> parameter identifies the display mode in which the plug-in was invoked, either <code>NP_EMBED</code> or <code>NP_FULL</code>.</p>

<ul>
 <li><code>NP_EMBED</code> means that the instance was created by an <code>EMBED</code> and shares the browser window with other content.</li>
 <li><code>NP_FULL</code> means that the instance was created by a separate file and is the primary content in the window.</li>
</ul>

<p>The next three parameters pass parameters from the <code>embed</code> element that called the plug-in. The argc parameter is the number of HTML arguments in the element. It determines the number of attributes in the arrays specified by the argn and argv parameters.</p>

<p>The arguments in the <code>embed</code> element are name-value pairs made up of the attribute name (for example, <code>align</code>) and its value (for example, top). The argn array contains the attribute names; the argv array contains the attribute values.</p>

<p>The browser ignores any nonstandard attributes in an <code>embed</code> element, so the web page author can use the arg parameters to specify private attributes defined for a particular plug-in. For example, the following <code>embed</code> element has the standard attributes <code>src</code>, <code>height</code>, and <code>width</code> and the private attribute <code>loop</code>:</p>

<pre>&lt;embed src="movie.avi" height="100" width="100" loop="true"&gt;</pre>

<p>With the <code>embed</code> element in the example, the browser passes the values in argv to the plug-in instance:</p>

<pre>argc = 4
argn = { "src", "height", "width", "loop" }
argv = { "movie.avi", "100", "100", "true" }
</pre>

<p>The saved parameter allows an instance of a plug-in to save its data and, when the instance is destroyed, pass the data to the next instance of the plug-in at the same URL. The data is saved in the History list. As long as the plug-in still appears in this list, that saved data is associated with the page; any new instances receive this data.</p>

<h3 id="Instance_Destruction">Instance Destruction</h3>

<p>Plug-in instances are created with <code><a href="/en-US/NPP_New">NPP_New</a></code> and destroyed with <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code>. The browser calls <code>NPP_Destroy</code> when a plug-in instance is deleted, usually because the user has left the page containing the instance, closed the window, or quit the application. If this is the last instance created by a plug-in, <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code> is called.</p>

<p>You should not perform any graphics operations in <code>NPP_Destroy</code> because the instance window is no longer guaranteed to be valid. Also, be sure to delete any private instance-specific information stored in the plug-in's <code>instance-&gt;pdata</code>.</p>

<pre class="eval">NPError NPP_Destroy(NPP instance, NPSavedData **save);
</pre>

<p>The <code>instance</code> parameter represents the plug-in instance to delete.</p>

<p>The plug-in can use the optional <code>save</code> parameter to save data for reuse by a new instance with the same URL. The data is passed to <code><a href="/en-US/NPP_New">NPP_New</a></code> through its saved parameter. For example, a video player could save the last frame number to be displayed. When the user returns to the page, the previous frame number is passed to the new instance of the plug-in, so it can initially display the same frame.</p>

<p>Note that you cannot count on data being saved this way; the data may be lost if the browser restarts or purges memory. Ownership of the buf field of the <code><a href="/en-US/NPSavedData">NPSavedData</a></code> structure passes from the plug-in to the browser when <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code> returns.</p>

<p>The example in this section sets up a buffer and allocates memory for it. You can use this type of buffer to handle data saved from one instance of a plug-in to another. The example shows the use of the optional save parameter of <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code> and saved parameter of <code><a href="/en-US/NPP_New">NPP_New</a></code>.</p>

<ul>
 <li>In <code><a href="/en-US/NPP_New">NPP_New</a></code>, the saved parameter contains previously saved data for this instance of the plug-in (saved by <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code>). The plug-in must free the memory for <code><a href="/en-US/NPSavedData">NPSavedData</a></code> and the buffer it contains.</li>
 <li>In <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code>, the save parameter specifies state or other information to save for reuse by a new instance with the same URL.</li>
</ul>

<p>To ensure that the browser does not crash or leak memory when the saved data is discarded, the buf field should be a flat structure (a simple structure with no allocated substructures) allocated with <code><a href="/en-US/NPN_MemAlloc">NPN_MemAlloc</a></code>, as in this example:</p>

<pre>char* myData = "Here is some saved data.\n";

int32 myLength = strlen(myData) + 1;

*save = (NPSavedData*) NPN_MemAlloc(sizeof(NPSavedData));

(*save)-&gt;len = myLength;

(*save)-&gt;buf = (void*) NPN_MemAlloc(myLength);

strcpy((*save)-&gt;buf, myData);
</pre>

<p>If you allocate saved instance data in <code><a href="/en-US/NPP_Destroy">NPP_Destroy</a></code>, be sure to allocate memory with this function, since the browser can delete the saved data with the equivalent of <code><a href="/en-US/NPN_MemAlloc">NPN_MemAlloc</a></code> at any time.</p>

<h3 id="Shutdown">Shutdown</h3>

<p>When the application no longer needs the plug-in, it is shut down and released. <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code> gives you an opportunity to delete data allocated in <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> to be shared by all instances of a plug-in. The browser calls the plug-in's <code>NP_Shutdown</code> function, which informs the plug-in that its library is about to be unloaded, and gives it a chance to cancel any outstanding I/O requests, delete threads it created, free any memory it allocated, and perform any other closing tasks.</p>

<p>The <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code> function releases memory or resources shared across all instances of a plug-in. It is called once after the last instance of the plug-in is destroyed, before releasing the plug-in library itself.</p>

<pre>void NP_Shutdown(void);</pre>

<p>For an example that shows both the <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> and <code><a class="internal" href="/en-US/NP_Shutdown">NP_Shutdown</a></code> methods, see <a href="/en-US/Gecko_Plugin_API_Reference/Initialization_and_Destruction#initialize_and_shutdown_example">Initialize and Shutdown Example</a>.</p>

<h3 id="Initialize_and_Shutdown_Example">Initialize and Shutdown Example</h3>

<p>This example demonstrates the use of the <code><a href="/en-US/NP_Initialize">NP_Initialize</a></code> and <code><a href="/en-US/NP_Shutdown">NP_Shutdown</a></code> methods.</p>

<pre>/* Define global variable to hold the user agent string. */
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
}</pre>

<p><br>
 {{ PreviousNext("Gecko Plugin API Reference:Plug-in Development Overview", "Gecko Plugin API Reference:Drawing and Event Handling") }}</p>
