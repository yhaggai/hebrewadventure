import { map, flow, zip } from 'lodash/fp';

export default function getGalleryImages({ screenshots, thumbnails }) {
  return flow(
    zip,
    map(([screenshot, thumbnail]) => [
      screenshot.fluid.src,
      thumbnail.fluid.src,
    ]),
    map(([screenshotSrc, thumbnailSrc]) => ({
      original: screenshotSrc,
      thumbnail: thumbnailSrc,
    }))
  )(screenshots, thumbnails);
}
