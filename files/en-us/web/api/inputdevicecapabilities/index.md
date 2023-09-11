---
title: InputDeviceCapabilities
slug: Web/API/InputDeviceCapabilities
page-type: web-api-interface
status:
  - experimental
browser-compat: api.InputDeviceCapabilities
---

{{APIRef("InputDeviceCapabilities API")}}{{SeeCompatTable}}

The **`InputDeviceCapabilities`** interface of the [Input Device Capabilities API](/en-US/docs/Web/API/InputDeviceCapabilities_API) provides information about the physical device or a group of related devices responsible for generating input events. Events caused by the same physical input device get the same instance of this object, but the converse isn't true. For example, two mice with the same capabilities in a system may appear as a single `InputDeviceCapabilities` instance.

In some instances, `InputDeviceCapabilities` represents the capabilities of logical devices rather than physical devices. This allows, for example, touchscreen keyboards and physical keyboards to be represented the same way when they produce the same input.

## Constructors

- {{domxref("InputDeviceCapabilities.InputDeviceCapabilities", "InputDeviceCapabilities()")}} {{Experimental_Inline}}
  - : Creates an `InputDeviceCapabilities` object.

## Instance properties

- {{DOMxRef("InputDeviceCapabilities.firesTouchEvents")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{JSxRef("Boolean")}} that indicates whether the device dispatches touch events.

## Instance methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
