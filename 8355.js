"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[8355],{88355:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36663);\n/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66591);\n/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58811);\n/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49004);\n/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67134);\n/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68309);\n/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63592);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61681);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78668);\n/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3466);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81977);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7283);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12571);\n/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39835);\n/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14685);\n/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26869);\n/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53110);\n/* harmony import */ var _support_basemapDefinitions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2725);\n/* harmony import */ var _webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40000);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nvar j;let S=0;const v=_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getLogger */ .Z.getLogger("esri.Basemap");let _=j=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupportMixin */ .eC)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+S++,this.baseLayers=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,this.referenceLayers=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&v.error(`Layer \'${e.title}, id:${e.id}\' of type \'${e.type}\' is not supported as a basemap layer and will therefore be ignored.`)},s=e=>{e.parent=null};this.baseLayers.on("after-add",(e=>t(e.item))),this.referenceLayers.on("after-add",(e=>t(e.item))),this.baseLayers.on("after-remove",(e=>s(e.item))),this.referenceLayers.on("after-remove",(e=>s(e.item)))}initialize(){this.when().catch((e=>{v.error("#load()",`Failed to load basemap (title: \'${this.title}\', id: \'${this.id}\')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e;const r=this.baseLayers.removeAll();for(const s of r)s.destroy();const t=this.referenceLayers.removeAll();for(const s of t)s.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .referenceSetter */ .Z)(e,this._get("baseLayers")))}_writeBaseLayers(e,r,t){const s=[];e?(t={...t,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const r=(0,_webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_18__/* .getLayerJSON */ .Nw)(e,t.webmap?t.webmap.getLayerJSONFromResourceInfo(e):null,t);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_19__/* .isSome */ .pC)(r)&&s.push(r)})),this.referenceLayers.forEach((e=>{const r=(0,_webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_18__/* .getLayerJSON */ .Nw)(e,t.webmap?t.webmap.getLayerJSONFromResourceInfo(e):null,t);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_19__/* .isSome */ .pC)(r)&&(r.isReference=!0,s.push(r))})),r.baseMapLayers=s):r.baseMapLayers=s}set referenceLayers(e){this._set("referenceLayers",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .referenceSetter */ .Z)(e,this._get("referenceLayers")))}writeTitle(e,r){r.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_5__/* .loadAll */ .GZ)(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new j({resourceInfo:this.resourceInfo}).set(e)}read(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),super.read(e,r)}write(e,r){return e=e||{},r&&r.origin||(r={origin:"web-map",...r}),super.write(e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const r=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .d9)(e);return r.url&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isProtocolRelative */ .oC)(r.url)&&(r.url=`https:${r.url}`),r.templateUrl&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isProtocolRelative */ .oC)(r.templateUrl)&&(r.templateUrl=`https:${r.templateUrl}`),r}))),e}async _loadFromSource(e){const{resourceInfo:r,portalItem:t}=this;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .k_)(e);const s=[];if(r){const t=r.context?r.context.url:null;if(s.push(this._loadLayersFromJSON(r.data,t,e)),r.data.id&&!r.data.title){const e=r.data.id;s.push((0,_support_basemapDefinitions_js__WEBPACK_IMPORTED_MODULE_17__/* .getBasemapTitle */ .g)(e).then((e=>{e&&this.read({title:e},r.context)})))}}else t&&s.push(this._loadFromItem(t,e));await Promise.all(s)}async _loadLayersFromJSON(e,r,t){const s=this.resourceInfo&&this.resourceInfo.context,o=this.portalItem&&this.portalItem.portal||s&&s.portal||null,a=s&&"web-scene"===s.origin?"web-scene":"web-map",{populateOperationalLayers:i}=await __webpack_require__.e(/* import() */ 7744).then(__webpack_require__.bind(__webpack_require__, 45423)),n=[];if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .k_)(t),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const t={context:{origin:a,url:r,portal:o,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},s=i(this.baseLayers,e.baseMapLayers.filter((e=>!e.isReference)),t);n.push(s);const l=i(this.referenceLayers,e.baseMapLayers.filter((e=>e.isReference)),t);n.push(l)}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .eachAlways */ .as)(n)}async _loadFromItem(e,r){const t=await e.load(r),s=await t.fetchData("json",r),o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .urlToObject */ .mN)(e.itemUrl);return this._set("resourceInfo",{data:s.baseMap,context:{origin:"web-map",portal:e.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getDefault */ .Z.getDefault(),url:o}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:s.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].getDefault */ .Z.getDefault(),url:o}),this._loadLayersFromJSON(this.resourceInfo.data,o,r)}static fromId(e){const r=_support_basemapDefinitions_js__WEBPACK_IMPORTED_MODULE_17__/* .esriBasemapDefinitions */ .s[e];return r?j.fromJSON(r):null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,r,t,s){this._writeBaseLayers(e,r,s)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}},writer(e,r,t,s){this._writeBaseLayers(e,r,s)}}}}}})],_.prototype,"baseLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],_.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_16__["default"]})],_.prototype,"portalItem",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)()],_.prototype,"referenceLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({readOnly:!0})],_.prototype,"resourceInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z})],_.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)()],_.prototype,"thumbnailUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],_.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__/* .writer */ .c)("title")],_.prototype,"writeTitle",null),_=j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_20__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__/* .subclass */ .j)("esri.Basemap")],_);var U=_;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (U);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/Basemap.js?')},63592:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GZ": () => (/* binding */ n),\n/* harmony export */   "wF": () => (/* binding */ i)\n/* harmony export */ });\n/* harmony import */ var _asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67979);\n/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66591);\n/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68309);\n/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nasync function n(o,r){return await o.load(),i(o,r)}async function i(n,i){const f=[],c=(...o)=>{for(const r of o)(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isNone */ .Wi)(r)||(Array.isArray(r)?c(...r):_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isCollection */ .Z.isCollection(r)?r.forEach((o=>c(o))):_Loadable_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].isLoadable */ .Z.isLoadable(r)&&f.push(r))};i(c);let e=null;if(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(f,(async o=>{!1!==(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .q6)(s(o)?o.loadAll():o.load())).ok||e||(e=o)})),e)throw e.loadError;return n}function s(o){return"loadAll"in o&&"function"==typeof o.loadAll}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (n)));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/core/loadAll.js?')},2725:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "s": () => (/* binding */ s),\n/* harmony export */   "g": () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36567);\n/* harmony import */ var _intl_messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60720);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nasync function a(e){if(!e)return;const a=e.indexOf("-vector")>-1?e.slice(0,e.indexOf("-vector")):e,s=await (0,_intl_messages_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchMessageBundle */ .ME)("esri/t9n/basemaps");return s[e]||s[a]}const s={streets:{id:"streets",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets.jpg")},baseMapLayers:[{id:"streets-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Street Map",showLegend:!1,visibility:!0,opacity:1}]},satellite:{id:"satellite",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/hybrid.jpg")},baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Boundaries and Places",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},topo:{id:"topo",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/topo.jpg")},baseMapLayers:[{id:"topo-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Topo Map",showLegend:!1,visibility:!0,opacity:1}]},gray:{id:"gray",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/gray.jpg")},baseMapLayers:[{id:"gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Light Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"dark-gray":{id:"dark-gray",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/dark-gray.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Base",showLegend:!1,visibility:!0,opacity:1},{id:"dark-gray-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Dark Gray Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},"national-geographic":{id:"national-geographic",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/national-geographic.jpg")},baseMapLayers:[{id:"national-geographic-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer",title:"NatGeo World Map",showLegend:!1,layerType:"ArcGISTiledMapServiceLayer",visibility:!0,opacity:1}]},osm:{id:"osm",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"gray-vector":{id:"gray-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},"streets-vector":{id:"streets-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,opacity:1}]},"topo-vector":{id:"topo-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},"streets-night-vector":{id:"streets-night-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},"arcgis-imagery":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-imagery-standard":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/dark-gray.jpg")},title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/streets-relief.jpg")},title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/topo.jpg")},title:"Topographic",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]}};\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/support/basemapDefinitions.js?')},4e4:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Nw": () => (/* binding */ y)\n/* harmony export */ });\n/* unused harmony exports disableRestrictedWriting, enableRestrictedWriting */\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);\n/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67134);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61681);\n/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86745);\n/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64626);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile"]),l=new Set(["csv","feature","geo-rss","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","tile","unknown","unsupported","vector-tile","web-tile","wfs"]);function a(e){o.delete(e),l.delete(e)}function s(e){o.add(e),l.add(e)}function c(e){return"basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?l:null}function p(e){return!("feature"!==e.type||e.url||!e.source||"memory"!==e.source.type)}function u(e,t){if(t.restrictedWebMapWriting){const r=c(t);return!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .isSome */ .pC)(r)||r.has(e.type)&&!p(e)}return!0}function m(e,t){if(p(e)){const n=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_2__/* .getDeepValue */ .hS)("featureCollection.layers",t),i=n&&n[0]&&n[0].layerDefinition;i&&d(e,i)}else if("stream"===e.type){d(e,t.layerDefinition=t.layerDefinition||{})}else"group"!==e.type&&d(e,t)}function d(e,t){"maxScale"in e&&(t.maxScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .k)(e.maxScale)),"minScale"in e&&(t.minScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .k)(e.minScale))}function f(e,t){if(m(e,t),"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .k)(e.opacity),t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type)if(p(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}function y(r,i,o){if(!("write"in r)||!r.write)return o&&o.messages&&o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("layer:unsupported",`Layers (${r.title}, ${r.id}) of type \'${r.declaredClass}\' cannot be persisted`,{layer:r})),null;if(u(r,o)){const e={};return r.write(e,o)?e:null}return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .isSome */ .pC)(i)&&f(r,i=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(i)),i}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/webdoc/support/writeUtils.js?')}}]);