---
title: Gecko Plugin API Reference
slug: Plugins/Guide
tags:
  - Add-ons
  - Gecko
  - NeedsContent
  - Plugins
---
## Plug-in Basics

Main page: [Plug-in Basics](/en-US/docs/Plugins/Guide/Plug-in_Basics)

- [How Plug-ins Are Used](/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_are_used)

  - [Plug-ins and Helper Applications](/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-ins_and_helper_applications)

- [How Plug-ins Work](/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work)
- [Understanding the Runtime Model](/en-US/docs/Plugins/Guide/Plug-in_Basics#understanding_the_runtime_model)
- [Plug-in Detection](/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_detection)

  - [How Gecko Finds Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Basics#how_gecko_finds_plug-ins)
  - [Checking Plug-ins by MIME Type](/en-US/docs/Plugins/Guide/Plug-in_Basics#checking_plug-ins_by_mime_type)

- [Overview of Plug-in Structure](/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure)

  - [Understanding the Plug-in API](/en-US/docs/Plugins/Guide/Plug-in_Basics#understanding_the_plug-in_api)
  - [Plug-ins and Platform Independence](/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-ins_and_platform_independence)

- [Windowed and Windowless Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Basics#windowed_and_windowless_plug-ins)
- [The Default Plug-in](/en-US/docs/Plugins/Guide/Plug-in_Basics#the_default_plug-in)
- [Using HTML to Display Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Basics#using_html_to_display_plug-ins)

  - [Plug-in Display Modes](/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_display_modes)
  - [Using the object Element for Plug-in Display](/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_object_element_for_plug-in_display)
  - [Nesting Rules for HTML Elements](/en-US/docs/Plugins/Guide/Plug-in_Basics#nesting_rules_for_html_elements)
  - [Using the Appropriate Attributes](/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_appropriate_attributes)
  - [Using the embed Element for Plug-in Display](/en-US/docs/Plugins/Guide/Plug-in_Basics#using_the_embed_element_for_plug-in_display)
  - [Using Custom embed Attributes](/en-US/docs/Plugins/Guide/Plug-in_Basics#using_custom_embed_attributes)

- [Plug-in References](/en-US/docs/Plugins/Guide/Plug-in_Basics#plug-in_references)

### Plug-in Development Overview

Main page: [Plug-in Development Overview](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview)

- [Writing Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#writing_plug-ins)
- [Registering Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#registering_plug-ins)

  - [MS Windows](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#ms_windows)
  - [Unix](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#unix)
  - [Mac OS X](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#mac_os_x)

- [Drawing a Plug-in Instance](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#drawing_a_plug-in_instance)
- [Handling Memory](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#handling_memory)
- [Sending and Receiving Streams](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#sending_and_receiving_streams)
- [Working with URLs](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#working_with_urls)
- [Getting Version and UI Information](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#getting_version_and_ui_information)
- [Displaying Messages on the Status Line](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#displaying_messages_on_the_status_line)
- [Making Plug-ins Scriptable](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#making_plug-ins_scriptable)
- [Building Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building_plug-ins)

  - [Building, Platforms, and Compilers](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building,_platforms,_and_compilers)
  - [Building Carbonized Plug-ins for Mac OS X](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#building_carbonized_plug-ins_for_mac_os_x)
  - [Type Libraries](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#type_libraries)

- [Installing Plug-ins](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#installing_plug-ins)

  - [Native Installers](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#native_installers)
  - [XPI Plug-ins Installations](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#xpi_plug-ins_installations)

- [Plug-in Installation and the Windows Registry](/en-US/docs/Plugins/Guide/Plug-in_Development_Overview#plug-in_installation_and_the_windows_registry)

## Initialization and Destruction

Main page: [Initialization and Destruction](/en-US/docs/Plugins/Guide/Initialization_and_Destruction)

- [Initialization](/en-US/docs/Plugins/Guide/Initialization_and_Destruction#initialization)
- [Instance Creation](/en-US/docs/Plugins/Guide/Initialization_and_Destruction#instance_creation)
- [Instance Destruction](/en-US/docs/Plugins/Guide/Initialization_and_Destruction#instance_destruction)
- [Shutdown](/en-US/docs/Plugins/Guide/Initialization_and_Destruction#shutdown)
- [Initialize and Shutdown Example](/en-US/docs/Plugins/Guide/Initialization_and_Destruction#initialize_and_shutdown_example)

## Drawing and Event Handling

Main page: [Drawing and Event Handling](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling)

- [The NPWindow Structure](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#the_npwindow_structure)
- [Drawing Plug-ins](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#drawing_plug-ins)

  - [Printing the Plug-in](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#printing_the_plug-in)
  - [Setting the Window](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#setting_the_window)
  - [Getting Information](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#getting_information)

- [Windowed Plug-ins](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windowed_plug-ins)

  - [Mac OS](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#mac_os)
  - [Windows](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windows)
  - [Unix](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#unix)
  - [Event Handling for Windowed Plug-ins](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#event_handling_for_windowed_plug-ins)

- [Windowless Plug-ins](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#windowless_plug-ins)

  - [Specifying That a Plug-in Is Windowless](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#specifying_that_a_plug-in_is_windowless)
  - [Invalidating the Drawing Area](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#invalidating_the_drawing_area)
  - [Forcing a Paint Message](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#forcing_a_paint_message)
  - [Making a Plug-in Opaque](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#making_a_plug-in_opaque)
  - [Making a Plug-in Transparent](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#making_a_plug-in_transparent)
  - [Creating Pop-up Menus and Dialog Boxes](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#creating_pop-up_menus_and_dialog_boxes)
  - [Event Handling for Windowless Plug-ins](/en-US/docs/Plugins/Guide/Drawing_and_Event_Handling#event_handling_for_windowless_plug-ins)

## Streams

Main page: [Streams](/en-US/docs/Plugins/Guide/Streams)

- [Receiving a Stream](/en-US/docs/Plugins/Guide/Streams#receiving_a_stream)
- [Telling the Plug-in When a Stream Is Created](/en-US/docs/Plugins/Guide/Streams#telling_the_plug-in_when_a_stream_is_created)
- [Telling the Plug-in When a Stream Is Deleted](/en-US/docs/Plugins/Guide/Streams#telling_the_plug-in_when_a_stream_is_deleted)
- [Finding Out How Much Data the Plug-in Can Accept](/en-US/docs/Plugins/Guide/Streams#finding_out_how_much_data_the_plug-in_can_accept)
- [Writing the Stream to the Plug-in](/en-US/docs/Plugins/Guide/Streams#writing_the_stream_to_the_plug-in)
- [Sending the Stream in Random-Access Mode](/en-US/docs/Plugins/Guide/Streams#sending_the_stream_in_random-access_mode)
- [Sending the Stream in File Mode](/en-US/docs/Plugins/Guide/Streams#sending_the_stream_in_file_mode)
- [Sending a Stream](/en-US/docs/Plugins/Guide/Streams#sending_a_stream)
- [Creating a Stream](/en-US/docs/Plugins/Guide/Streams#creating_a_stream)
- [Pushing Data into the Stream](/en-US/docs/Plugins/Guide/Streams#pushing_data_into_the_stream)
- [Deleting the Stream](/en-US/docs/Plugins/Guide/Streams#deleting_the_stream)
- [Example of Sending a Stream](/en-US/docs/Plugins/Guide/Streams#example_of_sending_a_stream)

## URLs

Main page: [URLs](/en-US/docs/Plugins/Guide/URLs)

- [Getting URLs](/en-US/docs/Plugins/Guide/URLs#getting_urls)

  - [Getting the URL and Displaying the Page](/en-US/docs/Plugins/Guide/URLs#getting_the_url_and_displaying_the_page)

- [Posting URLs](/en-US/docs/Plugins/Guide/URLs#posting_urls)

  - [Posting Data to an HTTP Server](/en-US/docs/Plugins/Guide/URLs#posting_data_to_an_http_server)
  - [Uploading Files to an FTP Server](/en-US/docs/Plugins/Guide/URLs#uploading_files_to_an_ftp_server)
  - [Sending Mail](/en-US/docs/Plugins/Guide/URLs#sending_mail)

## Memory

Main page: [Memory](/en-US/docs/Plugins/Guide/Memory)

- [Allocating and freeing memory](/en-US/docs/Plugins/Guide/Memory#allocating_and_freeing_memory)

  - [Mac OS](/en-US/docs/Plugins/Guide/Memory#mac_os)

- [Flushing memory (Mac OS only)](</en-US/docs/Plugins/Guide/Memory#flushing_memory_(mac_os_only)>)

## Version, UI, and Status Information

Main page: [Version, UI, and Status Information](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information)

- [Displaying a Status Line Message](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#displaying_a_status_line_message)
- [Getting Agent Information](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#getting_agent_information)
- [Getting the Current Version](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#getting_the_current_version)
- [Finding Out if a Feature Exists](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#finding_out_if_a_feature_exists)
- [Reloading a Plug-in](/en-US/docs/Plugins/Guide/Version_UI_and_Status_Information#reloading_a_plug-in)

## Plug-in Side Plug-in API

Main page: [Plug-in Side Plug-in API](/en-US/docs/Plugins/Guide/Plug-in_Side_Plug-in_API)

This chapter describes methods in the plug-in API that are available from the plug-in object. The names of all of these methods begin with `NPP_` to indicate that they are implemented by the plug-in and called by the browser. For an overview of how these two sides of the plug-in API interact, see the [How Plug-ins Work](/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work) and [Overview of Plug-in Structure](/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure) sections in the introduction.

## Browser Side Plug-in API

Main page: [Browser Side Plug-in API](/en-US/docs/Plugins/Guide/Browser_Side_Plug-in_API)

This chapter describes methods in the plug-in API that are available from the browser. The names of all of these methods begin with `NPN_` to indicate that they are implemented by the browser and called by the plug-in. For an overview of how these two sides of the plug-in API interact, see the [How Plug-ins Work](/en-US/docs/Plugins/Guide/Plug-in_Basics#how_plug-ins_work) and [Overview of Plug-in Structure](/en-US/docs/Plugins/Guide/Plug-in_Basics#overview_of_plug-in_structure) sections in the introduction.

## Scripting plugins

Main page: [Scripting plugins](/en-US/docs/Plugins/Guide/Scripting_plugins)

- [How the DOM handles scripting](/en-US/docs/Plugins/Guide/Scripting_plugins#how_the_dom_handles_scripting)
- [Threading model](/en-US/docs/Plugins/Guide/Scripting_plugins#threading_model)
- [Security model](/en-US/docs/Plugins/Guide/Scripting_plugins#security_model)
- [What's in the plugin code?](/en-US/docs/Plugins/Guide/Scripting_plugins#what's_in_the_plugin_code?)
- [Accessing browser objects from a plugin](/en-US/docs/Plugins/Guide/Scripting_plugins#accessing_browser_objects_from_a_plugin)
- [How to call plugin native methods](/en-US/docs/Plugins/Guide/Scripting_plugins#how_to_call_plugin_native_methods)
- [The API extensions](/en-US/docs/Plugins/Guide/Scripting_plugins#the_api_extensions)

## Structures

Main page: [Structures](/en-US/docs/Plugins/Guide/Structures)

## Constants

Main page: [Constants](/en-US/docs/Plugins/Guide/Constants)

- [Error Codes](/en-US/docs/Plugins/Guide/Constants#error_codes)
- [Result Codes](/en-US/docs/Plugins/Guide/Constants#result_codes)
- [Plug-in Version Constants](/en-US/docs/Plugins/Guide/Constants#plug-in_version_constants)
- [Version Feature Constants](/en-US/docs/Plugins/Guide/Constants#version_feature_constants)

## Original document information

- Copyright Information: Netscape Communication
