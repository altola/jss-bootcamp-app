// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'carousel-slide',
    displayName: 'Carousel Slides',
    icon: SitecoreIcon.PhotoPortrait,
    fields: [
        { name: 'image', type: CommonFieldTypes.Image },
        { name: 'caption', type: CommonFieldTypes.SingleLineText }
    ],
  });
}