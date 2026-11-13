---
title: "`emulation.setGeolocationOverride` command"
short-title: setGeolocationOverride
slug: Web/WebDriver/Reference/BiDi/Modules/emulation/setGeolocationOverride
page-type: webdriver-command
browser-compat: webdriver.bidi.emulation.setGeolocationOverride
sidebar: webdriver
---

The `emulation.setGeolocationOverride` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`emulation`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/emulation) module overrides geolocation characteristics exposed through the [Geolocation API](/en-US/docs/Web/API/Geolocation_API) for the specified [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) or [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

## Syntax

```json-nolint
/* With required parameters and `contexts` */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    }
  }
}

/* With required parameters and `userContexts` */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "coordinates": {
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "userContexts": [
      "a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"
    ]
  }
}

/* With required and optional parameters */
{
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": [
      "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
    ],
    "coordinates": {
      "accuracy": 10,
      "altitude": 35,
      "altitudeAccuracy": 5,
      "heading": 90,
      "latitude": 51.5074,
      "longitude": -0.1278,
      "speed": 1.5
    }
  }
}
```

### Parameters

The `params` field contains:

- `contexts` {{optional_inline}}
  - : An array of one or more strings that contains the IDs of the [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to affect.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
    This field cannot be used if [`userContexts`](#usercontexts) is also specified.
- `coordinates`
  - : An object that specifies the simulated geographic position.
    It can be `null` to remove the override at the specified scope.
    This field cannot be used if `error` is also specified, but it is required if `error` is not specified.
    It contains the following fields:
    - `accuracy` {{optional_inline}}
      - : A non-negative number that specifies the accuracy of the `latitude` and `longitude` values in meters.
        The default value is `1`.
    - `altitude` {{optional_inline}}
      - : A number that specifies the altitude in meters, relative to nominal sea level.
        It can be `null` to simulate unavailable altitude data.
        The default value is `null`.
    - `altitudeAccuracy` {{optional_inline}}
      - : A non-negative number that specifies the accuracy of the `altitude` value in meters.
        It can be `null` to simulate unavailable altitude accuracy data.
        Specify `altitude` when specifying this field.
        The default value is `null`.
    - `heading` {{optional_inline}}
      - : A number that specifies the direction of travel in degrees clockwise from true north.
        It can be `null` to simulate unavailable heading data.
        The value must be greater than or equal to `0` and less than `360`.
        The default value is `null`.
    - `latitude`
      - : A number that specifies the latitude in decimal degrees.
        The value must be between `-90` and `90`.
    - `longitude`
      - : A number that specifies the longitude in decimal degrees.
        The value must be between `-180` and `180`.
    - `speed` {{optional_inline}}
      - : A non-negative number that specifies the speed in meters per second.
        It can be `null` to simulate unavailable speed data.
        The default value is `null`.
- `error`
  - : An object that specifies a simulated failure to obtain a position.
    This field cannot be used if `coordinates` is also specified, but it is required if `coordinates` is not specified.
    - `type`
      - : A string that specifies the simulated error.
        The only supported value is `positionUnavailable`.
- `userContexts` {{optional_inline}}
  - : An array of one or more strings that contains the IDs of the [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) to affect.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).
    This field cannot be used if [`contexts`](#contexts) is also specified.

If neither `contexts` nor `userContexts` is specified, the command applies to the entire session.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type or value.
    - Both `contexts` and `userContexts` are specified.
    - `contexts` or `userContexts` is an empty array.
    - A context specified in `contexts` is not a top-level context.
    - Both `coordinates` and `error` are specified.
    - Neither `coordinates` nor `error` is specified.
    - [`altitudeAccuracy`](#altitudeaccuracy) is specified without [`altitude`](#altitude).
- `no such frame`
  - : No context with an ID specified in `contexts` is found.
- `no such user context`
  - : No user context with an ID specified in `userContexts` is found.

## Description

The `emulation.setGeolocationOverride` command allows you to simulate a geographic location for the selected top-level contexts or user contexts; if neither scope is specified, the override applies to the entire session.
The command overrides the position reported by the [Geolocation API](/en-US/docs/Web/API/Geolocation_API), so you can test location-aware features such as geofencing for local recommendations.

The `coordinates` parameter supplies a simulated position, while `error` simulates a failure to obtain one.
You cannot use these fields together, but you must specify one of them.
Setting an individual coordinate field, such as `altitude`, to `null` simulates unavailable data for that field.

An override you set for specific contexts takes precedence over an override you set for their user contexts.
An override you set for a user context takes precedence over an override you set for the entire session.

To remove an override, set `coordinates` to `null` for the affected contexts or user contexts.
For example, if you set Paris for a user context and London for a tab within it, removing the tab's override makes the tab report Paris.

Overriding the position does not automatically grant geolocation permission.
To configure geolocation permission for your test, use the [`permissions.setPermission`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission) command.

## Examples

### Overriding a tab's location with Toronto coordinates

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you have a web page that recommends nearby restaurants based on the user's location, and you want to check that it shows recommendations for Toronto.

First, open a tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returns its context ID.
Then load the page over HTTPS or from localhost, since the [Geolocation API](/en-US/docs/Web/API/Geolocation_API) requires a secure context.
Additionally, grant geolocation permission for the page's origin using [`permissions.setPermission`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission).

Send the following message to override the tab's location with Toronto's coordinates:

```json
{
  "id": 1,
  "method": "emulation.setGeolocationOverride",
  "params": {
    "contexts": ["5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"],
    "coordinates": {
      "latitude": 43.6532,
      "longitude": -79.3832
    }
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "type": "success",
  "id": 1,
  "result": {}
}
```

After the command succeeds, trigger the page's location lookup.
When the page requests the user's position, the browser returns the overridden coordinates.
Check that the page displays restaurant recommendations for Toronto.

To remove the override, send the same command with `coordinates` set to `null` and the same `contexts` array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`permissions.setPermission`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/permissions/setPermission) command
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API)
