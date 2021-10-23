---
title: Constants
slug: Plugins/Guide/Constants
tags:
  - Gecko Plugin API Reference
  - NPAPI
  - Plugins
---
This section is a reference to the program definitions used by the Plug-in API. All program definitions are found in [npapi.h](https://dxr.mozilla.org/mozilla-central/source/modules/plugin/base/public/npapi.h).

## Error Codes

| Code                               | Value | Description                                        |
| ---------------------------------- | ----- | -------------------------------------------------- |
| `NPERR_NO_ERROR`                   | 0     | No errors occurred.                                |
| `NPERR_GENERIC_ERROR`              | 1     | Error with no specific error code occurred.        |
| `NPERR_INVALID_INSTANCE_ERROR`     | 2     | Invalid instance passed to the plug-in.            |
| `NPERR_INVALID_FUNCTABLE_ERROR`    | 3     | Function table invalid.                            |
| `NPERR_MODULE_LOAD_FAILED_ERROR`   | 4     | Loading of plug-in failed.                         |
| `NPERR_OUT_OF_MEMORY_ERROR`        | 5     | Memory allocation failed.                          |
| `NPERR_INVALID_PLUGIN_ERROR`       | 6     | Plug-in missing or invalid.                        |
| `NPERR_INVALID_PLUGIN_DIR_ERROR`   | 7     | Plug-in directory missing or invalid.              |
| `NPERR_INCOMPATIBLE_VERSION_ERROR` | 8     | Versions of plug-in and Communicator do not match. |
| `NPERR_INVALID_PARAM`              | 9     | Parameter missing or invalid.                      |
| `NPERR_INVALID_URL`                | 10    | URL missing or invalid.                            |
| `NPERR_FILE_NOT_FOUND`             | 11    | File missing or invalid.                           |
| `NPERR_NO_DATA`                    | 12    | Stream contains no data.                           |
| `NPERR_STREAM_NOT_SEEKABLE`        | 13    | Seekable stream expected.                          |

## Result Codes

| Constant            | Value | Description                                                                                                                                                            |
| ------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NPRES_DONE`        | 0     | (Most common): Completed normally; all data was sent to the instance.                                                                                                  |
| `NPRES_NETWORK_ERR` | 1     | Stream failed due to problems with network, disk I/O, lack of memory, or other problems.                                                                               |
| `NPRES_USER_BREAK`  | 2     | User canceled stream directly by clicking the Stop button or indirectly by some action such as deleting the instance or initiating higher-priority network operations. |

## Plug-in Version Constants

| Constant           | Value | Description                                                   |
| ------------------ | ----- | ------------------------------------------------------------- |
| `NP_VERSION_MAJOR` | 0     | Major version number; changes with major code release number. |
| `NP_VERSION_MINOR` | 22    | Minor version number; changes with point release number.      |

## Version Feature Constants

| NPVERS Constant: Version Feature Information | Value | Description                                                                                                                                                                                                                                    |
| -------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NPVERS_HAS_STREAMOUTPUT`                    | 8     | Streaming data.                                                                                                                                                                                                                                |
| `NPVERS_HAS_NOTIFICATION`                    | 9     | Notification of completion.                                                                                                                                                                                                                    |
| `NPVERS_HAS_LIVECONNECT`                     | 9     | LiveConnect.                                                                                                                                                                                                                                   |
| `NPVERS_WIN16_HAS_LIVECONNECT`               | 9     | LiveConnect (Win16).                                                                                                                                                                                                                           |
| `NPVERS_68K_HAS_LIVECONNECT`                 | 11    | LiveConnect (68K).                                                                                                                                                                                                                             |
| `NPVERS_HAS_WINDOWLESS`                      | 11    | Windowless plug-in.                                                                                                                                                                                                                            |
| `NPVERS_HAS_XPCONNECT_SCRIPTING`             | 13    | Plug-in is scriptable using XPConnect.                                                                                                                                                                                                         |
| `NPVERS_HAS_NPRUNTIME_SCRIPTING`             | 14    | Plug-in is scriptable using NPRuntime.                                                                                                                                                                                                         |
| `NPVERS_HAS_FORM_VALUES`                     | 15    | `NPPVformValue` `NPPVariable`s are supported.                                                                                                                                                                                                  |
| `NPVERS_HAS_POPUPS_ENABLED_STATE`            | 16    | The `NPN_PushPopupsEnabledState()` and `NPN_PopPopupsEnabledState()` functions are supported.                                                                                                                                                  |
| `NPVERS_HAS_RESPONSE_HEADERS`                | 17    | NPStreams have response headers for HTTP streams.                                                                                                                                                                                              |
| `NPVERS_HAS_NPOBJECT_ENUM`                   | 18    | The [`NPClass`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPClass) in question has an `enumerate` field, which lets you enumerate the properties of an [`NPObject`](/en-US/docs/Mozilla/Add-ons/Plugins/Reference/NPObject) of that class. |
