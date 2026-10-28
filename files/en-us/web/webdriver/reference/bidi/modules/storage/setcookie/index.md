---
title: "`storage.setCookie` command"
short-title: setCookie
slug: Web/WebDriver/Reference/BiDi/Modules/storage/setCookie
page-type: webdriver-command
browser-compat: webdriver.bidi.storage.setCookie
sidebar: webdriver
---

The `storage.setCookie` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`storage`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage) module creates or replaces a cookie in the cookie store of a specified [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "storage.setCookie",
  "params": {
    "cookie": {
      "domain": "example.com",
      "name": "theme",
      "value": {
        "type": "string",
        "value": "dark"
      }
    }
  }
}

/* With required and optional parameters */
{
  "method": "storage.setCookie",
  "params": {
    "cookie": {
      "domain": "example.com",
      "expiry": 1800000000,
      "httpOnly": true,
      "name": "theme",
      "path": "/settings",
      "sameSite": "strict",
      "secure": true,
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

- `cookie`
  - : An object that specifies the cookie to create or replace.
    It can contain the following fields:
    - `domain`
      - : A string that specifies the cookie domain, such as `example.com`.
    - `expiry` {{optional_inline}}
      - : A non-negative integer that specifies the cookie's expiration time, as seconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
        The browser may limit the cookie's expiration time.
        If omitted, the expiration time is left unset, indicating a session cookie.
    - `httpOnly` {{optional_inline}}
      - : A boolean that indicates whether to prevent page scripts from accessing the cookie.
        - `false`: The cookie can be accessed by page scripts.
          This is the default.
        - `true`: The cookie cannot be accessed by page scripts.
    - `name`
      - : A string that specifies the cookie name.
    - `path` {{optional_inline}}
      - : A string that specifies the cookie path.
        In WebDriver BiDi, the default is `/`.
        Unlike cookies set through the HTTP [`Set-Cookie`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#pathpath-value) header, this default does not depend on a request URL.
    - `sameSite` {{optional_inline}}
      - : A string that specifies whether to send the cookie with cross-site requests.
        It can take one of the following values:
        - `default`: No explicit [SameSite policy](/en-US/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) is set.
          This is the default.
        - `lax`: The cookie uses the `Lax` policy.
          It can be sent with same-site requests and cross-site top-level navigations that use a safe HTTP method, such as `GET`.
        - `none`: The cookie uses the `None` policy.
          It can be sent with both same-site and cross-site requests.
          This value requires the [`secure`](#secure) parameter to be `true`.
        - `strict`: The cookie uses the `Strict` policy.
          It can be sent only with same-site requests.
    - `secure` {{optional_inline}}
      - : A boolean that indicates whether to send the cookie only over secure connections.
        - `false`: The cookie can be sent over both secure and insecure connections.
          This is the default.
        - `true`: The cookie is sent only over secure connections.
    - `value`
      - : An object that specifies the cookie value.
        It contains the following fields:
        - `type`
          - : A string that specifies how the cookie value is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is a string, which the browser encodes as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes.
        - `value`
          - : A string that contains the cookie value in the encoding specified by `type`.
- `partition` {{optional_inline}}
  - : An object that selects the [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions) in which to create or replace the cookie.
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

- `partitionKey`
  - : An object that represents the [partition key](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#partition_keys) for the [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions) where the cookie was created or replaced.
    It can contain the following partition key attributes:
    - `sourceOrigin` {{optional_inline}}
      - : A string that contains the [`sourceOrigin`](#sourceorigin) attribute of the storage partition where the cookie was created or replaced, identifying the origin of resources that can access that storage partition.
    - `userContext` {{optional_inline}}
      - : A string that contains the [`userContext`](#usercontext) attribute of the storage partition where the cookie was created or replaced, identifying its associated user context.

    The attributes included depend on the browser's storage partitioning model and can include vendor-prefixed extensions.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - The [`expiry`](#expiry) field of the `cookie` parameter is outside the range `0` to `9007199254740991`.
    - The [`type`](#type) field of the cookie's `value` parameter, the [`type`](#type_2) field of the `partition` parameter, or the [`sameSite`](#samesite) field has an unrecognized value.
- `no such frame`
  - : Thrown if no context with the ID specified in the [`context`](#context) field of the `partition` parameter is found.
- `no such storage partition`
  - : Thrown if the supplied partition information does not identify an existing storage partition.
- `no such user context`
  - : Thrown if no user context with the ID specified in the [`userContext`](#usercontext) field of the `partition` parameter is found.
- `unable to set cookie`
  - : Thrown if the browser cannot insert the cookie into the cookie store of the selected storage partition.
- `underspecified storage partition`
  - : Thrown if a required storage partition attribute is not supplied.

## Description

The `storage.setCookie` command creates or replaces a cookie in the cookie store of a selected [storage partition](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage#storage_partitions).
The [`cookie`](#cookie) parameter defines the cookie, and the [`partition`](#partition) parameter selects the storage partition.
Using the `partition` parameter, you can select a storage partition in one of two ways: either by specifying a context to use its associated storage partition or by specifying storage partition attributes, such as `userContext` or `sourceOrigin`.

If the selected cookie store already contains a cookie with the same name, domain, and path, this command replaces it.
Otherwise, it creates a new cookie.
Cookies with the same name can coexist when their domains or paths differ.

On success, the command response contains a [`partitionKey`](#partitionkey) that identifies the storage partition where the cookie was created or replaced.
It does not return the cookie's value or attributes.
To retrieve those details, use the [`storage.getCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies) command with the same `partition` parameter supplied to `storage.setCookie` and a filter matching the cookie's name, domain, and path.

## Examples

### Creating a theme cookie in a user context

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a user context ID obtained from the [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command.

Suppose you want to create a `theme` cookie with value `dark` and domain `example.com` at `/` in the storage partition associated with this user context.
The storage partition's cookie store does not already contain a cookie with that name, domain, and path.
The cookie you want to create uses the `Lax` SameSite policy, and its value is supplied as a string.

Send the following message to create the cookie, using the user context ID to select the storage partition:

```json
{
  "id": 3,
  "method": "storage.setCookie",
  "params": {
    "cookie": {
      "domain": "example.com",
      "name": "theme",
      "path": "/",
      "sameSite": "lax",
      "value": {
        "type": "string",
        "value": "dark"
      }
    },
    "partition": {
      "type": "storageKey",
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

The browser responds with a partition key containing the ID of the associated user context:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "partitionKey": {
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

To retrieve details about the cookie you created, you can use the [`storage.getCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies) command with the same `partition` parameter and a `filter` containing `name: "theme"`, `domain: "example.com"`, and `path: "/"`.
The returned [`cookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies#cookies) array will contain one `theme` cookie with the value `dark`.

### Creating another theme cookie at a different path

Using the same connection, session, and user context as in the first example, suppose you want to create another cookie with the same name (`theme`) and domain (`example.com`) but with a different value (`light`) and at a different path (`/settings`), where no cookie with that name and domain already exists.

Keep the same `partition` parameter as in the first example.
In the `cookie` parameter, set `path` to `/settings` and the `value` object's `value` field to `light`.
Send the following message to create the second cookie:

```json
{
  "id": 5,
  "method": "storage.setCookie",
  "params": {
    "cookie": {
      "domain": "example.com",
      "name": "theme",
      "path": "/settings",
      "sameSite": "lax",
      "value": {
        "type": "string",
        "value": "light"
      }
    },
    "partition": {
      "type": "storageKey",
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

The browser returns a success response with the same partition key:

```json
{
  "id": 5,
  "type": "success",
  "result": {
    "partitionKey": {
      "userContext": "89c8263b-c468-4338-b348-a53d77225db0"
    }
  }
}
```

The second cookie does not replace the cookie at `/` because their paths differ.

To retrieve both cookies, use the [`storage.getCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies) command with the same `partition` parameter and a `filter` containing only `name: "theme"` and `domain: "example.com"`.
The returned `cookies` array will contain two objects: one for the cookie at `/` with value `dark` and the other for the cookie at `/settings` with value `light`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`storage.deleteCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/deleteCookies) command
- [`storage.getCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [HTTP cookies](/en-US/docs/Web/HTTP/Guides/Cookies) guide
- [Controlling third-party cookies with SameSite](/en-US/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)
