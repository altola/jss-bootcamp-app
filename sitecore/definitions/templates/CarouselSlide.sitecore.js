// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'carousel-slide',
    displayName: 'Carousel Slides',
    fields: [
        { name: 'src', type: CommonFieldTypes.SingleLineText },
        { name: 'altText', type: CommonFieldTypes.SingleLineText },
        { name: 'caption', type: CommonFieldTypes.SingleLineText }
    ],
  });
}