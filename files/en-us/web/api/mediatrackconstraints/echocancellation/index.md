---
title: "MediaTrackConstraints: echoCancellation property"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.echoCancellation_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`echoCancellation`** property is a
[`ConstrainBooleanOrDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) describing the requested or mandatory constraints placed
upon the value of the {{domxref("MediaTrackSettings.echoCancellation", "echoCancellation")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} as returned
by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A boolean, a string, or a [`ConstrainBooleanOrDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) object.

If the browser supports specific echo cancellation types, the value can be set as one of the following:

- `"all"` {{experimental_inline}}
  - : All user system-generated audio captured by the user's microphone is removed. This is useful for example in situations where you want to avoid capturing privacy-sensitive audio such as screen reader output and system notifications.
- `"remote-only"` {{experimental_inline}}
  - : Only user system-generated audio captured by the user's microphone from remote sources (as represented by {{domxref("MediaStreamTrack")}}s sourced from an {{domxref("RTCPeerConnection")}}) is removed. This is useful when you want to remove echo from communication with remote peers but still share local audio, such as in the case of a music lesson where the teacher wants to hear their student(s) playing along to an audio track but still communicate clearly with them.
- `true`
  - : The browser decides what audio will be removed from the signals recorded by the microphone. It must attempt to cancel at least as much as `remote-only` and should attempt to cancel as much as `all`.
- `false`
  - : No audio is removed; no echo cancellation will take place.

If the browser doesn't support specific echo cancellation types, the value can be `true` or `false`.

If set as one of the above values, the user agent will attempt to obtain media with echo cancellation enabled or disabled as specified, if possible, but will not fail if this can't be done.

If the value is given as an object with an `exact` field, that field's value indicates a required setting for the echo cancellation feature; if it can't be met, then the request will result in an error.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
