"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[8500],{76480:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39994);\n/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34596);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst s=4294967296,i=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,r=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ff")?12:32;class n{constructor(t,e,s=0,i=(t?t.byteLength:0)){this._tag=0,this._dataType=99,this.init(t,e,s,i)}init(t,e,s,i){this._data=t,this._dataView=e,this._pos=s,this._end=i}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)|0}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getUint32(e+4,!0)*s;return this._skip(8),i}getSFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getInt32(e+4,!0)*s;return this._skip(8),i}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,s=this._toString(this._data,e,e+t);return this._skip(t),s}getBytes(){const t=this._getLength(),e=this._pos,s=this._toBytes(this._data,e,e+t);return this._skip(t),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,s,i){const r=this.getMessage(),n=t(r,e,s,i);return r.release(),n}processMessage(t){const e=this.getMessage(),s=t(e);return e.release(),s}getMessage(){const t=this._getLength(),e=n.pool.acquire();return e.init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){n.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e,s=this._pos,i=0;if(this._end-s>=10)do{if(e=t[s++],i|=127&e,0==(128&e))break;if(e=t[s++],i|=(127&e)<<7,0==(128&e))break;if(e=t[s++],i|=(127&e)<<14,0==(128&e))break;if(e=t[s++],i|=(127&e)<<21,0==(128&e))break;if(e=t[s++],i+=268435456*(127&e),0==(128&e))break;if(e=t[s++],i+=34359738368*(127&e),0==(128&e))break;if(e=t[s++],i+=4398046511104*(127&e),0==(128&e))break;if(e=t[s++],i+=562949953421312*(127&e),0==(128&e))break;if(e=t[s++],i+=72057594037927940*(127&e),0==(128&e))break;if(e=t[s++],i+=0x8000000000000000*(127&e),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;s!==this._end&&(e=t[s],0!=(128&e));)++s,i+=(127&e)*r,r*=128;if(s===this._end)throw new Error("Varint overrun!");++s,i+=e*r}return this._pos=s,i}_decodeSVarint(){const t=this._decodeVarint();return t%2?-(t+1)/2:t/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,s){if((s=Math.min(this._end,s))-e>r&&i){const r=t.subarray(e,s);return i.decode(r)}let n="",a="";for(let i=e;i<s;++i){const e=t[i];128&e?a+="%"+e.toString(16):(n+=decodeURIComponent(a)+String.fromCharCode(e),a="")}return a.length&&(n+=decodeURIComponent(a)),n}_toBytes(t,e,s){return s=Math.min(this._end,s),new Uint8Array(t.buffer,e,s-e)}}n.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(n,null,(t=>{t._data=null,t._dataView=null}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (n);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/core/pbf.js?')},81500:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "K9": () => (/* binding */ D),\n/* harmony export */   "O7": () => (/* binding */ i),\n/* harmony export */   "G$": () => (/* binding */ q)\n/* harmony export */ });\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61681);\n/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76480);\n/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15540);\n/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21425);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst n=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],o=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],c=["upperLeft","lowerLeft"];function i(e){return e>=n.length?null:n[e]}function l(e){return e>=o.length?null:o[e]}function g(e){return e>=c.length?null:c[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function u(e,t,s){const r=1,a=2,n=3,o=t.createPointGeometry(s);for(;e.next();)switch(e.tag()){case n:{const s=e.getUInt32(),r=e.pos()+s;let a=0;for(;e.pos()<r;)t.addCoordinatePoint(o,e.getSInt64(),a++);break}case r:case a:default:e.skip()}return o}function y(e,t,s){const r=1,a=2,n=3,o=t.createGeometry(s),c=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;e.next();)switch(e.tag()){case a:{const s=e.getUInt32(),r=e.pos()+s;let a=0;for(;e.pos()<r;)t.addLength(o,e.getUInt32(),a++);break}case n:{const s=e.getUInt32(),r=e.pos()+s;let a=0;for(t.allocateCoordinates(o);e.pos()<r;)t.addCoordinate(o,e.getSInt64(),a),a++,a===c&&(a=0);break}case r:default:e.skip()}return o}function b(e){const t=1,s=2,n=3,o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;let c="esriGeometryPoint";for(;e.next();)switch(e.tag()){case s:{const t=e.getUInt32(),s=e.pos()+t;for(;e.pos()<s;)o.lengths.push(e.getUInt32());break}case n:{const t=e.getUInt32(),s=e.pos()+t;for(;e.pos()<s;)o.coords.push(e.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* .OPTIMIZED_GEOMETRY_TYPES */ .A[e.getEnum()];break;default:e.skip()}return{queryGeometry:o,queryGeometryType:c}}function f(e){const t=1,s=2,r=3,a=4,n=5,o=6,c=7,i=8,l=9;for(;e.next();)switch(e.tag()){case t:return e.getString();case s:return e.getFloat();case r:return e.getDouble();case a:return e.getSInt32();case n:return e.getUInt32();case o:return e.getInt64();case c:return e.getUInt64();case i:return e.getSInt64();case l:return e.getBool();default:return e.skip(),null}return null}function k(e){const t=1,s=2,r=3,a=4,n=5,o=6,c={type:i(0)};for(;e.next();)switch(e.tag()){case t:c.name=e.getString();break;case s:c.type=i(e.getEnum());break;case r:c.alias=e.getString();break;case a:c.sqlType=l(e.getEnum());break;case n:e.skip();break;case o:c.defaultValue=e.getString();break;default:e.skip()}return c}function d(e){const t=1,s=2,r={};for(;e.next();)switch(e.tag()){case t:r.name=e.getString();break;case s:r.isSystemMaintained=e.getBool();break;default:e.skip()}return r}function m(e,t,s,r){const a=1,n=2,o=4,c=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case a:{const t=r[i++].name;c.attributes[t]=e.processMessage(f);break}case n:c.geometry=e.processMessageWithArgs(y,t,s);break;case o:c.centroid=e.processMessageWithArgs(u,t,s);break;default:e.skip()}return c}function h(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1];for(;e.next();)switch(e.tag()){case t:n[0]=e.getDouble();break;case s:n[1]=e.getDouble();break;case a:n[2]=e.getDouble();break;case r:n[3]=e.getDouble();break;default:e.skip()}return n}function T(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0];for(;e.next();)switch(e.tag()){case t:n[0]=e.getDouble();break;case s:n[1]=e.getDouble();break;case a:n[2]=e.getDouble();break;case r:n[3]=e.getDouble();break;default:e.skip()}return n}function q(e){const t=1,s=2,r=3,a={originPosition:g(0)};for(;e.next();)switch(e.tag()){case t:a.originPosition=g(e.getEnum());break;case s:a.scale=e.processMessage(h);break;case r:a.translate=e.processMessage(T);break;default:e.skip()}return a}function I(e){const t=1,s=2,r=3,a={};for(;e.next();)switch(e.tag()){case t:a.shapeAreaFieldName=e.getString();break;case s:a.shapeLengthFieldName=e.getString();break;case r:a.units=e.getString();break;default:e.skip()}return a}function F(e,t){const s=1,r=2,a=3,n=4,o=5,c=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:c.wkid=e.getUInt32();break;case o:c.wkt=e.getString();break;case r:c.latestWkid=e.getUInt32();break;case a:c.vcsWkid=e.getUInt32();break;case n:c.latestVcsWkid=e.getUInt32();break;default:e.skip()}return c}function w(e,t){const s=1,r=2,a=3,n=4,o=5,c=6,i=7,l=8,g=9,u=10,y=11,b=12,f=13,h=15,T=t.createFeatureResult();T.geometryType=p(t,0);let w=!1;for(;e.next();)switch(e.tag()){case s:T.objectIdFieldName=e.getString();break;case a:T.globalIdFieldName=e.getString();break;case n:T.geohashFieldName=e.getString();break;case o:T.geometryProperties=e.processMessage(I);break;case i:T.geometryType=p(t,e.getEnum());break;case l:T.spatialReference=e.processMessageWithArgs(F,t);break;case u:T.hasZ=e.getBool();break;case y:T.hasM=e.getBool();break;case b:T.transform=e.processMessage(q);break;case g:{const t=e.getBool();T.exceededTransferLimit=t;break}case f:t.addField(T,e.processMessage(k));break;case h:w||(t.prepareFeatures(T),w=!0),t.addFeature(T,e.processMessageWithArgs(m,t,T,T.fields));break;case r:T.uniqueIdField=e.processMessage(d);break;case c:default:e.skip()}return t.finishFeatureResult(T),T}function S(e,s){const r=1,a=2,n=3,o=4,c={};let i=null;for(;e.next();)switch(e.tag()){case o:i=e.processMessageWithArgs(b);break;case r:c.featureResult=e.processMessageWithArgs(w,s);break;case a:case n:default:e.skip()}return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .isSome */ .pC)(i)&&c.featureResult&&s.addQueryGeometry(c,i),c}function D(t,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(new Uint8Array(t),new DataView(t)),n={};for(;a.next();)switch(a.tag()){case e:n.queryResult=a.processMessageWithArgs(S,r);break;default:a.skip()}return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js?')},21425:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "A": () => (/* binding */ i),\n/* harmony export */   "J": () => (/* binding */ n)\n/* harmony export */ });\n/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17321);\n/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35925);\n/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59958);\n/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61619);\n/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15540);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst i=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class n{constructor(e){this.options=e,this.geometryTypes=i,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(r){if(!r||!r.features||!r.hasZ||!this.options.sourceSpatialReference||!r.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS)(r.spatialReference,this.options.sourceSpatialReference)||r.spatialReference.vcsWkid)return;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(this.options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(r.spatialReference);if(1!==o)for(const e of r.features){if(!e.geometry||!e.geometry.coords)continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=o}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js?')},75844:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "C": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81500);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__/* .parseFeatureQuery */ .K9)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js?')},28500:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "executeQuery": () => (/* binding */ y),\n/* harmony export */   "executeQueryForCount": () => (/* binding */ p),\n/* harmony export */   "executeQueryForExtent": () => (/* binding */ S),\n/* harmony export */   "executeQueryForIds": () => (/* binding */ f),\n/* harmony export */   "executeQueryPBF": () => (/* binding */ c),\n/* harmony export */   "executeQueryPBFBuffer": () => (/* binding */ d),\n/* harmony export */   "queryToQueryStringParameters": () => (/* binding */ m),\n/* harmony export */   "runQuery": () => (/* binding */ g)\n/* harmony export */ });\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61681);\n/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3466);\n/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53736);\n/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56247);\n/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75844);\n/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13097);\n/* harmony import */ var _tasks_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18382);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst l="Layer does not support extent calculation.";function m(t,r){const n=t.geometry,o=t.toJSON(),s=o;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(n)&&(s.geometry=JSON.stringify(n),s.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .Ji)(n),s.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),o.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=o.groupByFieldsForStatistics.join(",")),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),!o.outFields||!o.returnDistinctValues&&(null!=r&&r.returnCountOnly||null!=r&&r.returnExtentOnly||null!=r&&r.returnIdsOnly)?delete s.outFields:-1!==o.outFields.indexOf("*")?s.outFields="*":s.outFields=o.outFields.join(","),o.outSR?s.outSR=o.outSR.wkid||JSON.stringify(o.outSR):n&&(o.returnGeometry||o.returnCentroid)&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.outStatistics&&(s.outStatistics=JSON.stringify(o.outStatistics)),o.pixelSize&&(s.pixelSize=JSON.stringify(o.pixelSize)),o.quantizationParameters&&(s.quantizationParameters=JSON.stringify(o.quantizationParameters)),o.parameterValues&&(s.parameterValues=JSON.stringify(o.parameterValues)),o.rangeValues&&(s.rangeValues=JSON.stringify(o.rangeValues)),o.dynamicDataSource&&(s.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete o.timeExtent}return s}async function y(t,r,n,i){const o=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(r.timeExtent)&&r.timeExtent.isEmpty?{data:{features:[]}}:await g(t,r,"json",i);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_5__/* .applyFeatureSetZUnitScaling */ .p)(r,n,o.data),o}async function c(t,r,n,i){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(r.timeExtent)&&r.timeExtent.isEmpty)return Promise.resolve({data:n.createFeatureResult()});const o=await d(t,r,i),u=o;return u.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .parsePBFFeatureQuery */ .C)(o.data,n),u}function d(t,e,r){return g(t,e,"pbf",r)}function f(t,r,n){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(t,r,"json",n,{returnIdsOnly:!0})}function p(t,r,n){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(t,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function S(t,r,n){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):g(t,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(l);if(e.hasOwnProperty("count"))throw new Error(l);return t}))}function g(i,s,u,l={},y={}){const c="string"==typeof i?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .mN)(i):i,d=s.geometry?[s.geometry]:[];return l.responseType="pbf"===u?"array-buffer":"json",(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .aX)(d,null,l).then((n=>{const i=n&&n[0];(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__/* .isSome */ .pC)(i)&&((s=s.clone()).geometry=i);const o=(0,_tasks_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .mapParameters */ .A)({...c.query,f:u,...y,...m(s,y)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .v_)(c.path,"query"),{...l,query:{...o,...l.query}})}))}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/query.js?')},13097:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "p": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var _zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2037);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(t,o,r){if(!r||!r.features||!r.hasZ)return;const f=(0,_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .k)(r.geometryType,o,t.outSpatialReference);if(f)for(const e of r.features)f(e.geometry)}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/queryZScale.js?')},2037:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "k": () => (/* binding */ t),\n/* harmony export */   "P": () => (/* binding */ l)\n/* harmony export */ });\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61681);\n/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17321);\n/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35925);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(t,c,l){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isNone */ .Wi)(c)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isNone */ .Wi)(l)||l.vcsWkid||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS)(c,l))return null;const u=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(c)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(l);if(1===u)return null;switch(t){case"point":case"esriGeometryPoint":return n=>i(n,u);case"polyline":case"esriGeometryPolyline":return n=>s(n,u);case"polygon":case"esriGeometryPolygon":return n=>r(n,u);case"multipoint":case"esriGeometryMultipoint":return n=>f(n,u);default:return null}}function i(n,o){n&&null!=n.z&&(n.z*=o)}function r(n,o){if(n)for(const e of n.rings)for(const n of e)n.length>2&&(n[2]*=o)}function s(n,o){if(n)for(const e of n.paths)for(const n of e)n.length>2&&(n[2]*=o)}function f(n,o){if(n)for(const e of n.points)e.length>2&&(e[2]*=o)}function c(n,o,e){if(null==n.hasM||n.hasZ)for(const t of o)for(const n of t)n.length>2&&(n[2]*=e)}function l(n,e,t){if(!n&&!e||!t)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(t);u(n,t,i),u(e,t,i)}function u(n,o,e){if(n)for(const t of n)a(t.geometry,o,e)}function a(n,t,i){if(!n||!n.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS)(n.spatialReference,t))return;const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(n.spatialReference)/i;if(1!==r)if("x"in n)null!=n.z&&(n.z*=r);else if("rings"in n)c(n,n.rings,r);else if("paths"in n)c(n,n.paths,r);else if("points"in n&&(null==n.hasM||n.hasZ))for(const o of n.points)o.length>2&&(o[2]*=r)}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/zscale.js?')},18382:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "A": () => (/* binding */ t)\n/* harmony export */ });\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/tasks/operations/urlUtils.js?')}}]);