---
title: Gecko Plugin API Reference
slug: Plugins/Guide
tags:
  - Add-ons
  - Gecko
  - NeedsContent
  - Plugins
---
<h2 id="Npapi-pagePlug-in_Basics">Plug-in Basics</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Plug-in_Basics">Plug-in Basics</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_are_used">How Plug-ins Are Used</a>

  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-ins_and_helper_applications">Plug-ins and Helper Applications</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work">How Plug-ins Work</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#understanding_the_runtime_model">Understanding the Runtime Model</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_detection">Plug-in Detection</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#how_gecko_finds_plug-ins">How Gecko Finds Plug-ins</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#checking_plug-ins_by_mime_type">Checking Plug-ins by MIME Type</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure">Overview of Plug-in Structure</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#understanding_the_plug-in_api">Understanding the Plug-in API</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-ins_and_platform_independence">Plug-ins and Platform Independence</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#windowed_and_windowless_plug-ins">Windowed and Windowless Plug-ins</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#the_default_plug-in">The Default Plug-in</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#using_html_to_display_plug-ins">Using HTML to Display Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_display_modes">Plug-in Display Modes</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_object_element_for_plug-in_display">Using the object Element for Plug-in Display</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#nesting_rules_for_html_elements">Nesting Rules for HTML Elements</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_appropriate_attributes">Using the Appropriate Attributes</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_embed_element_for_plug-in_display">Using the embed Element for Plug-in Display</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#using_custom_embed_attributes">Using Custom embed Attributes</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_references">Plug-in References</a></li>
</ul>

<h3 id="Npapi-pagePlug-in_Development_Overview">Plug-in Development Overview</h3>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview">Plug-in Development Overview</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#writing_plug-ins">Writing Plug-ins</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#registering_plug-ins">Registering Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#ms_windows">MS Windows</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#unix">Unix</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#mac_os_x">Mac OS X</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#drawing_a_plug-in_instance">Drawing a Plug-in Instance</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#handling_memory">Handling Memory</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#sending_and_receiving_streams">Sending and Receiving Streams</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#working_with_urls">Working with URLs</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#getting_version_and_ui_information">Getting Version and UI Information</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#displaying_messages_on_the_status_line">Displaying Messages on the Status Line</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#making_plug-ins_scriptable">Making Plug-ins Scriptable</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building_plug-ins">Building Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building,_platforms,_and_compilers">Building, Platforms, and Compilers</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building_carbonized_plug-ins_for_mac_os_x">Building Carbonized Plug-ins for Mac OS X</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#type_libraries">Type Libraries</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#installing_plug-ins">Installing Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#native_installers">Native Installers</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#xpi_plug-ins_installations">XPI Plug-ins Installations</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#plug-in_installation_and_the_windows_registry">Plug-in Installation and the Windows Registry</a></li>
</ul>

<h2 id="Npapi-pageInitialization_and_Destruction">Initialization and Destruction</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction">Initialization and Destruction</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction#initialization">Initialization</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction#instance_creation">Instance Creation</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction#instance_destruction">Instance Destruction</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction#shutdown">Shutdown</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Initialization_and_Destruction#initialize_and_shutdown_example">Initialize and Shutdown Example</a></li>
</ul>

<h2 id="Npapi-pageDrawing_and_Event_Handling">Drawing and Event Handling</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling">Drawing and Event Handling</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#the_npwindow_structure">The NPWindow Structure</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#drawing_plug-ins">Drawing Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#printing_the_plug-in">Printing the Plug-in</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#setting_the_window">Setting the Window</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#getting_information">Getting Information</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windowed_plug-ins">Windowed Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#mac_os">Mac OS</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windows">Windows</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#unix">Unix</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#event_handling_for_windowed_plug-ins">Event Handling for Windowed Plug-ins</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windowless_plug-ins">Windowless Plug-ins</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#specifying_that_a_plug-in_is_windowless">Specifying That a Plug-in Is Windowless</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#invalidating_the_drawing_area">Invalidating the Drawing Area</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#forcing_a_paint_message">Forcing a Paint Message</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#making_a_plug-in_opaque">Making a Plug-in Opaque</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#making_a_plug-in_transparent">Making a Plug-in Transparent</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#creating_pop-up_menus_and_dialog_boxes">Creating Pop-up Menus and Dialog Boxes</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#event_handling_for_windowless_plug-ins">Event Handling for Windowless Plug-ins</a></li>
  </ul>
 </li>
</ul>

<h2 id="Npapi-pageStreams">Streams</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Streams">Streams</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#receiving_a_stream">Receiving a Stream</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#telling_the_plug-in_when_a_stream_is_created">Telling the Plug-in When a Stream Is Created</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#telling_the_plug-in_when_a_stream_is_deleted">Telling the Plug-in When a Stream Is Deleted</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#finding_out_how_much_data_the_plug-in_can_accept">Finding Out How Much Data the Plug-in Can Accept</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#writing_the_stream_to_the_plug-in">Writing the Stream to the Plug-in</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#sending_the_stream_in_random-access_mode">Sending the Stream in Random-Access Mode</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#sending_the_stream_in_file_mode">Sending the Stream in File Mode</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#sending_a_stream">Sending a Stream</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#creating_a_stream">Creating a Stream</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#pushing_data_into_the_stream">Pushing Data into the Stream</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#deleting_the_stream">Deleting the Stream</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Streams#example_of_sending_a_stream">Example of Sending a Stream</a></li>
</ul>

<h2 id="Npapi-pageURLs">URLs</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/URLs">URLs</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/URLs#getting_urls">Getting URLs</a>

  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/URLs#getting_the_url_and_displaying_the_page">Getting the URL and Displaying the Page</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/URLs#posting_urls">Posting URLs</a>
  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/URLs#posting_data_to_an_http_server">Posting Data to an HTTP Server</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/URLs#uploading_files_to_an_ftp_server">Uploading Files to an FTP Server</a></li>
   <li><a href="/en-US/docs/Plugins/Guide/URLs#sending_mail">Sending Mail</a></li>
  </ul>
 </li>
</ul>

<h2 id="Npapi-pageMemory">Memory</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Memory">Memory</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Memory#allocating_and_freeing_memory">Allocating and freeing memory</a>

  <ul>
   <li><a href="/en-US/docs/Plugins/Guide/Memory#mac_os">Mac OS</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Plugins/Guide/Memory#flushing_memory_(mac_os_only)">Flushing memory (Mac OS only)</a></li>
</ul>

<h2 id="Npapi-pageVersion.2C_UI.2C_and_Status_Information">Version, UI, and Status Information</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information">Version, UI, and Status Information</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#displaying_a_status_line_message">Displaying a Status Line Message</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#getting_agent_information">Getting Agent Information</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#getting_the_current_version">Getting the Current Version</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#finding_out_if_a_feature_exists">Finding Out if a Feature Exists</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#reloading_a_plug-in">Reloading a Plug-in</a></li>
</ul>

<h2 id="Npapi-pagePlug-in_Side_Plug-in_API">Plug-in Side Plug-in API</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Plug-in_Side_Plug-in_API">Plug-in Side Plug-in API</a></p>

<p>This chapter describes methods in the plug-in API that are available from the plug-in object. The names of all of these methods begin with <code>NPP_</code> to indicate that they are implemented by the plug-in and called by the browser. For an overview of how these two sides of the plug-in API interact, see the <a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work">How Plug-ins Work</a> and <a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure">Overview of Plug-in Structure</a> sections in the introduction.</p>

<h2 id="Npapi-pageBrowser_Side_Plug-in_API">Browser Side Plug-in API</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Browser_Side_Plug-in_API">Browser Side Plug-in API</a></p>

<p>This chapter describes methods in the plug-in API that are available from the browser. The names of all of these methods begin with <code>NPN_</code> to indicate that they are implemented by the browser and called by the plug-in. For an overview of how these two sides of the plug-in API interact, see the <a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work">How Plug-ins Work</a> and <a href="/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure">Overview of Plug-in Structure</a> sections in the introduction.</p>

<h2 id="Npapi-pageScripting_plugins">Scripting plugins</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Scripting_plugins">Scripting plugins</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#how_the_dom_handles_scripting">How the DOM handles scripting</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#threading_model">Threading model</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#security_model">Security model</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#what's_in_the_plugin_code?">What's in the plugin code?</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#accessing_browser_objects_from_a_plugin">Accessing browser objects from a plugin</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#how_to_call_plugin_native_methods">How to call plugin native methods</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Scripting_plugins#the_api_extensions">The API extensions</a></li>
</ul>

<h2 id="Npapi-pageStructures">Structures</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Structures">Structures</a></p>

<h2 id="Npapi-pageConstants">Constants</h2>

<p>Main page: <a href="/en-US/docs/Plugins/Guide/Constants">Constants</a></p>

<ul>
 <li><a href="/en-US/docs/Plugins/Guide/Constants#error_codes">Error Codes</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Constants#result_codes">Result Codes</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Constants#plug-in_version_constants">Plug-in Version Constants</a></li>
 <li><a href="/en-US/docs/Plugins/Guide/Constants#version_feature_constants">Version Feature Constants</a></li>
</ul>

<h2 id="Original_document_information">Original document information</h2>

<ul>
 <li>Copyright Information: Netscape Communication</li>
</ul>
