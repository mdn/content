export const AUDIO_EXT = ["mp3", "ogg"];
export const FONT_EXT = ["woff2"];
export const VIDEO_EXT = ["mp4", "webm"];

export const VALID_MIME_TYPES = new Set([
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/webm",
  "font/woff2",
  "image/png",
  "image/jpeg", // this is what you get for .jpeg *and* .jpg file extensions
  "image/gif",
  "image/webp",
  "video/mp4",
  "video/ogg",
  "video/webm",
]);

export const MAX_COMPRESSION_DIFFERENCE_PERCENTAGE = 25;
