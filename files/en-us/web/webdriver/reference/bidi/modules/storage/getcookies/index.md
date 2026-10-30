---
title: "`storage.getCookies` command"
short-title: getCookies
slug: Web/WebDriver/Reference/BiDi/Modules/storage/getCookies
page-type: webdriver-command
browser-compat: webdriver.bidi.storage.getCookies
sidebar: webdriver
---

The `storage.getCookies` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`storage`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage) module retrieves zero or more cookies that match a specified filter from a specified [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions).

## Syntax

```json-nolint
/* Without optional parameters */
{
  "method": "storage.getCookies",
  "params": {}
}

/* With optional parameters */
{
  "method": "storage.getCookies",
  "params": {
    "filter": {
      "domain": "example.com",
      "expiry": 1800000000,
      "httpOnly": true,
      "name": "theme",
      "path": "/settings",
      "sameSite": "strict",
      "secure": true,
      "size": 9,
      "value": {
        "type": "string",
        "value": "dark"
      }
    },
    "partition": {
      "sourceOrigin": "https://shop.example",
      "type": "storageKey",
      "userContext": "3c173b12-d357-4f72-9a93-f7dfe55e68a5"
    }
  }
}
```

### Parameters

The `params` field contains:

- `filter` {{optional_inline}}
  - : An object that specifies the cookie attributes to match.
    A cookie matches only if all the supplied attributes match exactly.
    If omitted or empty, the filter matches every cookie in the storage partition specified by the [`partition`](#partition) parameter.
    The object can contain the following fields to specify the filtering criteria:
    - `domain` {{optional_inline}}
      - : A string that specifies the exact cookie domain to match, such as `example.com`.
    - `expiry` {{optional_inline}}
      - : A non-negative integer that specifies the cookie's expiration time to match, as seconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        Only cookies with exactly this expiration timestamp match.
    - `httpOnly` {{optional_inline}}
      - : A boolean that specifies whether to match cookies that prevent page scripts from accessing them.
        - `false`: Matches cookies that are accessible to page scripts.
        - `true`: Matches cookies that are inaccessible to page scripts.
    - `name` {{optional_inline}}
      - : A string that specifies the cookie name to match.
    - `path` {{optional_inline}}
      - : A string that specifies the cookie path to match.
    - `sameSite` {{optional_inline}}
      - : A string that specifies whether to match cookies that can be sent with cross-site requests.
        It can take one of the following values:
        - `default`: Matches cookies with no explicit [SameSite policy](/en-US/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).
        - `lax`: Matches cookies that use the `Lax` policy.
          These cookies can be sent with same-site requests and cross-site top-level navigations that use a safe HTTP method, such as `GET`.
        - `none`: Matches cookies that use the `None` policy.
          These cookies can be sent with both same-site and cross-site requests.
        - `strict`: Matches cookies that use the `Strict` policy.
          These cookies can be sent only with same-site requests.
    - `secure` {{optional_inline}}
      - : A boolean that specifies whether to match cookies that are sent only over secure connections.
        - `false`: Matches cookies that can be sent over both secure and insecure connections.
        - `true`: Matches cookies that are sent only over secure connections.
    - `size` {{optional_inline}}
      - : A non-negative integer that specifies the combined size of the cookie's name and value, in bytes, to match.
    - `value` {{optional_inline}}
      - : An object that specifies the cookie value to match.
        It contains the following fields:
        - `type`
          - : A string that specifies how the cookie value is encoded.
            It can take one of the following values:
            - `base64`: The browser decodes the supplied `value` from [Base64](/en-US/docs/Glossary/Base64) before matching it against cookie values.
            - `string`: The browser encodes the supplied `value` as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes before matching it against cookie values.
        - `value`
          - : A string that contains the cookie value in the encoding specified by `type`.
- `partition` {{optional_inline}}
  - : An object that selects the [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions) from which to retrieve matching cookies.
    If omitted, the browser selects a storage partition using its default settings.
    It contains the following field to specify how to select the storage partition:
    - `type`
      - : A string that specifies how to select the storage partition and determines the other fields available in the `partition` object.
        It can take one of the following values:
        - `context`: Selects a storage partition associated with the specified context.
          For this `type` value, the `partition` object contains the following field:
          - `context`
            - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) associated with the storage partition to use.
              Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
        - `storageKey`: Selects a storage partition by its attributes.
          For this `type` value, the `partition` object can specify the following storage partition attributes:
          - `sourceOrigin` {{optional_inline}}
            - : A string that specifies the origin of resources that can access the storage partition, such as `https://example.com`.
          - `userContext` {{optional_inline}}
            - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) associated with the storage partition.
              User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) and [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

          A browser may support additional storage partition attributes whose names begin with a vendor prefix followed by a colon (`:`).
          The default values of storage partition attributes and the set of required attributes depend on the browser's storage partitioning model.

### Return value

The `result` object in the response contains the following fields:

- `cookies`
  - : An array of objects that represents the matching cookies.
    The array is empty if no cookies match the specified filtering criteria.

    Each object in the array contains the following fields:
    - `domain`
      - : A string that contains the cookie domain.
    - `expiry` {{optional_inline}}
      - : A non-negative integer that indicates the cookie's expiration time, as seconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        This field is omitted for session cookies.
    - `httpOnly`
      - : A boolean that indicates whether page scripts are prevented from accessing the cookie (`true`) or can access it (`false`).
    - `name`
      - : A string that contains the cookie name.
    - `path`
      - : A string that contains the cookie path.
    - `sameSite`
      - : A string that indicates the cookie's SameSite policy.
        It can have one of the following values: `default`, `lax`, `none`, or `strict`.
    - `secure`
      - : A boolean that indicates whether the cookie can be sent only over secure connections (`true`) or over both secure and insecure connections (`false`).
    - `size`
      - : A non-negative integer that indicates the combined size of the cookie's name and value, in bytes.
    - `value`
      - : An object that represents the cookie value.
        It contains the following fields:
        - `type`
          - : A string that indicates how the cookie value is encoded.
            It can have one of the following values: `base64` or `string`.
        - `value`
          - : A string that contains the cookie value in the encoding specified by `type`.

        The browser returns the cookie value as a string if its bytes are valid UTF-8 or as Base64-encoded bytes otherwise.
        This encoding can differ from the encoding used when [setting the cookie](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/setCookie).
- `partitionKey`
  - : An object that represents the [partition key](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#partition_keys) used to identify the [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions) searched.
    It can contain the following partition key attributes:
    - `sourceOrigin` {{optional_inline}}
      - : A string that contains the [`sourceOrigin`](#sourceorigin) attribute of the storage partition searched, identifying the origin of resources that can access that storage partition.
    - `userContext` {{optional_inline}}
      - : A string that contains the [`userContext`](#usercontext) attribute of the storage partition searched, identifying its associated user context.

    The attributes included depend on the browser's storage partitioning model and can include vendor-prefixed extensions.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - The [`expiry`](#expiry) or [`size`](#size) field of the `filter` parameter is outside the range `0` to `9007199254740991`.
    - The [`type`](#type) field of the filter's `value` parameter, the [`type`](#type_2) field of the `partition` parameter, or the [`sameSite`](#samesite) field has an unrecognized value.
- `no such frame`
  - : Thrown if no context with the ID specified in the [`context`](#context) field of the `partition` parameter is found.
- `no such storage partition`
  - : Thrown if the supplied partition information does not identify an existing storage partition.
- `no such user context`
  - : Thrown if no user context with the ID specified in the [`userContext`](#usercontext) field of the `partition` parameter is found.
- `underspecified storage partition`
  - : Thrown if a required storage partition attribute is not supplied.

## Description

The `storage.getCookies` command retrieves cookies from the cookie store of a selected [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions).
The [`partition`](#partition) parameter selects the storage partition, and the [`filter`](#filter) parameter specifies the cookies to retrieve.
Using the `partition` parameter, you can select a storage partition in one of two ways: either by specifying a context to use its associated storage partition or by specifying storage partition attributes, such as `userContext` or `sourceOrigin`.

If `filter` is omitted or is an empty object (`{}`), the command retrieves all cookies in the selected cookie store.
A cookie is returned only if every supplied filter field matches exactly.
For example, a `domain` filter of `example.com` does not match a stored domain of `shop.example.com`, and a `path` filter of `/` does not match `/settings`.
Cookie values are compared after decoding, so equivalent `string` and `base64` values match the same bytes.

On success, the command response contains a [`cookies`](#cookies) array with the matching cookies and a [`partitionKey`](#partitionkey) identifying the storage partition searched.
The command also succeeds if no cookies match, returning an empty `cookies` array.

## Examples

### Retrieving information about two theme cookies

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a user context ID obtained from the [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command.

To retrieve information about the two `theme` cookies created in the [`storage.setCookie` examples](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/setCookie#examples), use the user context ID to select the storage partition.
Send the following message to match the cookies by name and domain and retrieve their information:

```json
{
  "id": 6,
  "method": "storage.getCookies",
  "params": {
    "filter": {
      "domain": "example.com",
      "name": "theme"
    },
    "partition": {
      "type": "storageKey",
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

The browser responds with information about the matching cookies and a partition key containing the ID of the associated user context:

```json
{
  "id": 6,
  "type": "success",
  "result": {
    "cookies": [
      {
        "domain": "example.com",
        "httpOnly": false,
        "name": "theme",
        "path": "/",
        "sameSite": "lax",
        "secure": false,
        "size": 9,
        "value": {
          "type": "string",
          "value": "dark"
        }
      },
      {
        "domain": "example.com",
        "httpOnly": false,
        "name": "theme",
        "path": "/settings",
        "sameSite": "lax",
        "secure": false,
        "size": 10,
        "value": {
          "type": "string",
          "value": "light"
        }
      }
    ],
    "partitionKey": {
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

The returned [`cookies`](#cookies) array contains two objects: one for the `theme` cookie at `/` with value `dark` and the other for the `theme` cookie at `/settings` with value `light`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`storage.deleteCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/deleteCookies) command
- [`storage.setCookie`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/setCookie) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [HTTP cookies](/en-US/docs/Web/HTTP/Guides/Cookies) guide
- [Controlling third-party cookies with SameSite](/en-US/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)
