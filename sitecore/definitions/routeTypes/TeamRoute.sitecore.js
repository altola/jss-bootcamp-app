// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest, FieldStorage } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addRouteType({
    name: 'team',
    displayName: 'Team',
    insertOptions: [],
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'members', type: CommonFieldTypes.SingleLineText }
    ],
  });
}
