// webpack configuration file for development
const path = require("path");

const themeEntries = require('./mapstore2-georchestra/themes.js').themeEntries;
const extractThemesPlugin = require('../mapstore2-georchestra/themes.js').extractThemesPlugin;
const moduleFederationPlugin = require('./MapStore2/build/moduleFederation.js').plugin;
const georchestraFramework = path.join(__dirname, 'mapstore2-georchestra', "js");
const proxyConfig = require('./proxyConfig');
const buildConfig = require('./MapStore2/build/buildConfig');

module.exports = buildConfig(
    {
        'cadastrapp-test-app': path.join(__dirname, "js", "app")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: [path.join(__dirname, "MapStore2", "web", "client"), __dirname, "mapstore2-georchestra", "js"],
        code: path.join(__dirname, "js")
    },
    [extractThemesPlugin, moduleFederationPlugin],
    false,
    "dist/",
    ".GeOrchestra",
    [],
    {
        // this should prevent to load MapStore from sub-module of GeOrchestra, replacing it with the sub-module of
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        // this alias is reserved to GeOrchestra, should not be used in the application
        "@js": georchestraFramework,
        // next libs are added because of this issue https://github.com/geosolutions-it/MapStore2/issues/4569
        jsonix: "@boundlessgeo/jsonix",
        proj4: "@geosolutions/proj4",
        "react-joyride": "@geosolutions/react-joyride"
    },
    proxyConfig
);

