# CIM Symbology

`The Dawn of a New Symbolisation`

<div class="name-title"> ⚡ Jonny Dawe </div>

---

## [What is CIM?](https://github.com/Esri/cim-spec)

-   CIM = Cartographic Information Model
-   Cartographic descriptions of GIS datasets represented in JSON.
-   Used for **maps**, **scenes**, **layouts**, **layers**, **symbols**

```json [2 | 10-15 |284-390]
{
    "type": "CIMLayerDocument",
    "version": "2.8.0",
    "build": 29751,
    "layers": ["CIMPATH=map/directional_lines.xml"],
    "layerDefinitions": [
        {
            "type": "CIMFeatureLayer",
            "name": "Directional Lines",
            "uRI": "CIMPATH=map/directional_lines.xml",
            "sourceModifiedTime": {
                "type": "TimeInstant"
            },
            "useSourceMetadata": true,
            "description": "Directional Lines",
            "layerElevation": {
                "type": "CIMLayerElevationSurface",
                "mapElevationID": "{E19830CE-70C1-497C-9383-C361B1493CEB}"
            },
            "expanded": true,
            "layerType": "Operational",
            "showLegends": true,
            "visibility": true,
            "displayCacheType": "Permanent",
            "maxDisplayCacheAge": 5,
            "showPopups": true,
            "serviceLayerID": -1,
            "refreshRate": -1,
            "refreshRateUnit": "esriTimeUnitsSeconds",
            "blendingMode": "Alpha",
            "allowDrapingOnIntegratedMesh": true,
            "autoGenerateFeatureTemplates": true,
            "featureElevationExpression": "0",
            "featureTable": {
                "type": "CIMFeatureTable",
                "displayField": "Shape_Length",
                "editable": true,
                "selectionSetURI": "CIMPATH=SelectionSet/c4210c5f800ba8d0f5e1f60e000ea877.dat",
                "dataConnection": {
                    "type": "CIMStandardDataConnection",
                    "workspaceConnectionString": "DATABASE=..\\..\\Documents\\ArcGIS\\Projects\\testCIM\\testCIM.gdb",
                    "workspaceFactory": "FileGDB",
                    "dataset": "diectionallines",
                    "datasetType": "esriDTFeatureClass"
                },
                "studyAreaSpatialRel": "esriSpatialRelUndefined",
                "searchOrder": "esriSearchOrderSpatial"
            },
            "featureTemplates": [
                {
                    "type": "CIMFeatureTemplate",
                    "name": "Directional Lines",
                    "tags": "Line",
                    "toolProgID": "af2dbf8f-280e-44db-8860-e399d0b30cf1",
                    "toolFilter": [
                        "09c6f589-a3ce-48ab-81bc-46965c58f264",
                        "28c04532-3daf-4d3d-b7be-a589c9c9a03e",
                        "5664cae4-c7de-432a-9933-9586bc15ed39",
                        "6f0ed2cc-c099-4895-bd7e-beec2f78adbf",
                        "e00209dd-05c5-4424-be62-51581f9f811d"
                    ]
                }
            ],
            "htmlPopupEnabled": true,
            "selectable": true,
            "featureCacheType": "Session",
            "displayFiltersType": "ByScale",
            "featureBlendingMode": "Alpha",
            "labelClasses": [
                {
                    "type": "CIMLabelClass",
                    "expressionTitle": "Custom",
                    "expression": "$feature.Shape_Length",
                    "expressionEngine": "Arcade",
                    "featuresToLabel": "AllVisibleFeatures",
                    "maplexLabelPlacementProperties": {
                        "type": "CIMMaplexLabelPlacementProperties",
                        "featureType": "Line",
                        "avoidPolygonHoles": true,
                        "canOverrunFeature": true,
                        "canPlaceLabelOutsidePolygon": true,
                        "canRemoveOverlappingLabel": true,
                        "canStackLabel": true,
                        "connectionType": "MinimizeLabels",
                        "constrainOffset": "AboveLine",
                        "contourAlignmentType": "Page",
                        "contourLadderType": "Straight",
                        "contourMaximumAngle": 90,
                        "enableConnection": true,
                        "featureWeight": 0,
                        "fontHeightReductionLimit": 4,
                        "fontHeightReductionStep": 0.5,
                        "fontWidthReductionLimit": 90,
                        "fontWidthReductionStep": 5,
                        "graticuleAlignmentType": "Straight",
                        "keyNumberGroupName": "Default",
                        "labelBuffer": 15,
                        "labelLargestPolygon": true,
                        "labelPriority": -1,
                        "labelStackingProperties": {
                            "type": "CIMMaplexLabelStackingProperties",
                            "stackAlignment": "ChooseBest",
                            "maximumNumberOfLines": 3,
                            "minimumNumberOfCharsPerLine": 3,
                            "maximumNumberOfCharsPerLine": 24,
                            "separators": [
                                {
                                    "type": "CIMMaplexStackingSeparator",
                                    "separator": " ",
                                    "splitAfter": true
                                },
                                {
                                    "type": "CIMMaplexStackingSeparator",
                                    "separator": ",",
                                    "visible": true,
                                    "splitAfter": true
                                }
                            ],
                            "trimStackingSeparators": true
                        },
                        "lineFeatureType": "General",
                        "linePlacementMethod": "OffsetStraightFromLine",
                        "maximumLabelOverrun": 16,
                        "maximumLabelOverrunUnit": "Point",
                        "minimumFeatureSizeUnit": "Map",
                        "multiPartOption": "OneLabelPerFeature",
                        "offsetAlongLineProperties": {
                            "type": "CIMMaplexOffsetAlongLineProperties",
                            "placementMethod": "BestPositionAlongLine",
                            "labelAnchorPoint": "CenterOfLabel",
                            "distanceUnit": "Map",
                            "useLineDirection": true
                        },
                        "pointExternalZonePriorities": {
                            "type": "CIMMaplexExternalZonePriorities",
                            "aboveLeft": 4,
                            "aboveCenter": 2,
                            "aboveRight": 1,
                            "centerRight": 3,
                            "belowRight": 5,
                            "belowCenter": 7,
                            "belowLeft": 8,
                            "centerLeft": 6
                        },
                        "pointPlacementMethod": "AroundPoint",
                        "polygonAnchorPointType": "GeometricCenter",
                        "polygonBoundaryWeight": 0,
                        "polygonExternalZones": {
                            "type": "CIMMaplexExternalZonePriorities",
                            "aboveLeft": 4,
                            "aboveCenter": 2,
                            "aboveRight": 1,
                            "centerRight": 3,
                            "belowRight": 5,
                            "belowCenter": 7,
                            "belowLeft": 8,
                            "centerLeft": 6
                        },
                        "polygonFeatureType": "General",
                        "polygonInternalZones": {
                            "type": "CIMMaplexInternalZonePriorities",
                            "center": 1
                        },
                        "polygonPlacementMethod": "CurvedInPolygon",
                        "primaryOffset": 1,
                        "primaryOffsetUnit": "Point",
                        "removeExtraWhiteSpace": true,
                        "repetitionIntervalUnit": "Point",
                        "rotationProperties": {
                            "type": "CIMMaplexRotationProperties",
                            "rotationType": "Arithmetic",
                            "alignmentType": "Straight"
                        },
                        "secondaryOffset": 100,
                        "strategyPriorities": {
                            "type": "CIMMaplexStrategyPriorities",
                            "stacking": 1,
                            "overrun": 2,
                            "fontCompression": 3,
                            "fontReduction": 4,
                            "abbreviation": 5
                        },
                        "thinningDistanceUnit": "Point",
                        "truncationMarkerCharacter": ".",
                        "truncationMinimumLength": 1,
                        "truncationPreferredCharacters": "aeiou",
                        "truncationExcludedCharacters": "0123456789",
                        "polygonAnchorPointPerimeterInsetUnit": "Point"
                    },
                    "name": "Class 1",
                    "priority": -1,
                    "standardLabelPlacementProperties": {
                        "type": "CIMStandardLabelPlacementProperties",
                        "featureType": "Line",
                        "featureWeight": "None",
                        "labelWeight": "High",
                        "numLabelsOption": "OneLabelPerName",
                        "lineLabelPosition": {
                            "type": "CIMStandardLineLabelPosition",
                            "above": true,
                            "inLine": true,
                            "parallel": true
                        },
                        "lineLabelPriorities": {
                            "type": "CIMStandardLineLabelPriorities",
                            "aboveStart": 3,
                            "aboveAlong": 3,
                            "aboveEnd": 3,
                            "centerStart": 3,
                            "centerAlong": 3,
                            "centerEnd": 3,
                            "belowStart": 3,
                            "belowAlong": 3,
                            "belowEnd": 3
                        },
                        "pointPlacementMethod": "AroundPoint",
                        "pointPlacementPriorities": {
                            "type": "CIMStandardPointPlacementPriorities",
                            "aboveLeft": 2,
                            "aboveCenter": 2,
                            "aboveRight": 1,
                            "centerLeft": 3,
                            "centerRight": 2,
                            "belowLeft": 3,
                            "belowCenter": 3,
                            "belowRight": 2
                        },
                        "rotationType": "Arithmetic",
                        "polygonPlacementMethod": "AlwaysHorizontal"
                    },
                    "textSymbol": {
                        "type": "CIMSymbolReference",
                        "symbol": {
                            "type": "CIMTextSymbol",
                            "blockProgression": "TTB",
                            "depth3D": 1,
                            "extrapolateBaselines": true,
                            "fontEffects": "Normal",
                            "fontEncoding": "Unicode",
                            "fontFamilyName": "Tahoma",
                            "fontStyleName": "Regular",
                            "fontType": "Unspecified",
                            "haloSize": 1,
                            "height": 10,
                            "hinting": "Default",
                            "horizontalAlignment": "Left",
                            "kerning": true,
                            "letterWidth": 100,
                            "ligatures": true,
                            "lineGapType": "ExtraLeading",
                            "symbol": {
                                "type": "CIMPolygonSymbol",
                                "symbolLayers": [
                                    {
                                        "type": "CIMSolidFill",
                                        "enable": true,
                                        "color": {
                                            "type": "CIMRGBColor",
                                            "values": [0, 0, 0, 100]
                                        }
                                    }
                                ]
                            },
                            "textCase": "Normal",
                            "textDirection": "LTR",
                            "verticalAlignment": "Bottom",
                            "verticalGlyphOrientation": "Right",
                            "wordSpacing": 100,
                            "billboardMode3D": "FaceNearPlane"
                        }
                    },
                    "useCodedValue": true,
                    "visibility": true,
                    "iD": -1
                }
            ],
            "renderer": {
                "type": "CIMSimpleRenderer",
                "patch": "Default",
                "symbol": {
                    "type": "CIMSymbolReference",
                    "symbol": {
                        "type": "CIMLineSymbol",
                        "symbolLayers": [
                            {
                                "type": "CIMVectorMarker",
                                "enable": true,
                                "anchorPointUnits": "Relative",
                                "dominantSizeAxis3D": "Y",
                                "offsetY": 1,
                                "rotation": 30,
                                "size": 6,
                                "billboardMode3D": "FaceNearPlane",
                                "markerPlacement": {
                                    "type": "CIMMarkerPlacementAlongLineSameSize",
                                    "placePerPart": true,
                                    "angleToLine": true,
                                    "controlPointPlacement": "WithMarkers",
                                    "endings": "WithMarkers",
                                    "placementTemplate": [30]
                                },
                                "frame": {
                                    "xmin": -5.7736720554272516,
                                    "ymin": -5,
                                    "xmax": 5.7736720554272516,
                                    "ymax": 5
                                },
                                "markerGraphics": [
                                    {
                                        "type": "CIMMarkerGraphic",
                                        "geometry": {
                                            "rings": [
                                                [
                                                    [0, 5],
                                                    [5.7736720554272516, -5],
                                                    [-5.7736720554272516, -5],
                                                    [0, 5]
                                                ]
                                            ]
                                        },
                                        "symbol": {
                                            "type": "CIMPolygonSymbol",
                                            "symbolLayers": [
                                                {
                                                    "type": "CIMSolidFill",
                                                    "enable": true,
                                                    "color": {
                                                        "type": "CIMRGBColor",
                                                        "values": [0, 0, 0, 100]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "scaleSymbolsProportionally": true,
                                "respectFrame": true
                            },
                            {
                                "type": "CIMSolidStroke",
                                "enable": true,
                                "capStyle": "Round",
                                "joinStyle": "Round",
                                "lineStyle3D": "Strip",
                                "miterLimit": 10,
                                "width": 1,
                                "color": {
                                    "type": "CIMRGBColor",
                                    "values": [0, 0, 0, 100]
                                }
                            }
                        ]
                    }
                }
            },
            "scaleSymbols": true,
            "snappable": true
        }
    ],
    "binaryReferences": [
        {
            "type": "CIMBinaryReference",
            "uRI": "CIMPATH=SelectionSet/c4210c5f800ba8d0f5e1f60e000ea877.dat",
            "data": "CgMxLjAQARoDCgEx"
        }
    ],
    "elevationSurfaces": [
        {
            "type": "CIMMapElevationSurface",
            "elevationMode": "BaseGlobeSurface",
            "name": "Ground",
            "verticalExaggeration": 1,
            "mapElevationID": "{E19830CE-70C1-497C-9383-C361B1493CEB}",
            "color": {
                "type": "CIMRGBColor",
                "values": [255, 255, 255, 100]
            },
            "surfaceTINShadingMode": "Smooth",
            "visibility": true,
            "expanded": true
        }
    ],
    "rGBColorProfile": "sRGB IEC61966-2-1 noBPC",
    "cMYKColorProfile": "U.S. Web Coated (SWOP) v2"
}
```

---

## CIM Symbols in the Desktop:

<img data-src="./assets/CIM-Pro-Demo.gif" data-preload>

---

# Why is this important?

1.  Increased support coming to the wider ArcGIS platform. <!-- .element: class="fragment" data-fragment-index="1" -->
2.  Powerful new customisations now available. <!-- .element: class="fragment" data-fragment-index="2" -->

---

## [CIM - Point Symbols](https://github.com/Esri/cim-spec/blob/master/docs/v2/CIMSymbols.md#cimpointsymbol)

[`new CIMSymbol()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-CIMSymbol.html#constructors-summary) - create custom multi-vector symbols

<div class="two-col">
  <div class="snippets full-height-blocks">
  
Simple Point CIM Symbol: 
    <div class="snippet">

```js [1|3-15|1-15]
const symbol = new CIMSymbol({
  data:{
    type: "CIMSymbolReference",
    symbol: {
       type: "CIMPointSymbol",
       symbolLayers: [{
          type: 'CIMVectorMarker',
          markerGraphics:[...
            // CIMTextSymbol
            // CIMMarkerSymbols
        ]
      }]
    }
  }
});
```

<svg data-play-frame="frame-cim-points" data-play-argument="simple" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>

Construct Attribute Driven Symbols:

<div class="snippet">

```js [1|1-5]
// Generate a Symbol based on the current available capacity of the carpark
function generateCapacitySymbol({ maxCapacity, availableCapacity }) {
    let fractionFilled = (maxCapacity - availableCapacity) / maxCapacity
    return new CIMSymbol({})
}
```

<svg data-play-frame="frame-cim-points" data-play-argument="complex" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>
</div>
  <div class="snippet-preview">
    <iframe id="frame-cim-points" data-src="./snippet.html?cim-points"></iframe>
  </div>
</div>

---

## [CIM - Line Symbols](https://github.com/Esri/cim-spec/blob/master/docs/v2/CIMSymbols.md#cimlinesymbol)

Use [SymbolLayers](https://pro.arcgis.com/en/pro-app/latest/help/mapping/layer-properties/symbol-layers.htm) and [Geometric Effects](https://pro.arcgis.com/en/pro-app/latest/help/mapping/layer-properties/symbol-effects.htm#ESRI_SECTION1_50CA181FAA664FDAAE4A2DAB62EFD04C) to supercharge🦸‍♀️ your lines!

<div class="two-col">
  <div class="snippets full-height-blocks">
  Build Up Symbol Layers
  <div class="snippet">

```js [0|7-24|25-34|35-44]
const symbol = new CIMSymbol({
    data: {
        type: 'CIMSymbolReference',
        symbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
                {
                    // White dashed layer at center
                    // of the line
                    type: 'CIMSolidStroke',
                    effects: [
                        {
                            type: 'CIMGeometricEffectDashes',
                            dashTemplate: [2, 2, 2, 2],
                            lineDashEnding: 'NoConstraint',
                            controlPointEnding: 'NoConstraint',
                        },
                    ],
                    enable: true,
                    capStyle: 'Butt',
                    joinStyle: 'Round',
                    width: 1,
                    color: [255, 255, 255, 255],
                },
                {
                    // Lighter green line layer that
                    // surrounds the dashes
                    type: 'CIMSolidStroke',
                    enable: true,
                    capStyle: 'Butt',
                    joinStyle: 'Round',
                    width: 3,
                    color: [56, 168, 0, 255],
                },
                {
                    // Darker green outline around
                    // the line symbol
                    type: 'CIMSolidStroke',
                    enable: true,
                    capStyle: 'Butt',
                    joinStyle: 'Round',
                    width: 6,
                    color: [0, 115, 76, 255],
                },
            ],
        },
    },
})
```

<svg data-play-frame="frame-cim-lines" data-play-argument="simple" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>

One Geometry - Complex Derived Symbology

<div class="snippet">

```js
// Combine CIMVectorMarkers and CIMSolidStrokes
// with Geometric effects, to create engaging
// symbols that include both points and line styling.
symbolLayers: [
  {type:"CIMVectorMarkers", ... },
  {type:"CIMSolidStrokes",
   effects: [
    {
        type: 'CIMGeometricEffectOffset',
        method: 'Rounded',
        offset: -2,
        option: 'Fast',
    },
    {
        type: 'CIMGeometricEffectWave',
        amplitude: 2,
        period: 7,
        seed: 5,
        waveform: 'Random',
    },
], ...}

```

<svg data-play-frame="frame-cim-lines" data-play-argument="complex" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>
</div>
  <div class="snippet-preview">
    <iframe id="frame-cim-lines" data-src="./snippet.html?cim-lines"></iframe>
  </div>
</div>

---

## [CIM - Text Symbols](https://github.com/Esri/cim-spec/blob/master/docs/v2/CIMSymbols.md#cimtextsymbol)

<div class="two-col">
  <div class="snippets full-height-blocks">
  
Hand Crafted Labels
    <div class="snippet">

```js
// Dynamically Build Text + Marker Labels
function constructCIMTextLabel(textString: string, angle: number){
    // Get the ratio of the text string width in pts (1pt = 0.75px)
    // to the height of the text. Use this to scale the background
    // polygon wrapper.
    let ratio = (getTextWidth(textString, "1pt arial") * 0.75)

    return  new CIMSymbol({...})
}
```

<svg data-play-frame="frame-cim-text" data-play-argument="simple" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>

Manipulate Text:

<div class="snippet">

```js
//Build a text label arc
function constructCIMArcTextSymbol({textString, proportionOfCircle}){
  return  new CIMSymbol({...})
}

```

<svg data-play-frame="frame-cim-text" data-play-argument="complex" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

  </div>

<div class="input-two-grid">
  <div class="input-col">
    <label>Input text to display</label>
    <input 
      data-input-frame="frame-cim-text"
      data-input-type="text"
      type="text" 
      id="symbol-text" 
      value="Example Text">
  </div>

  <div class="input-col">
    <label>Set Angle</label>
    <input 
      data-input-frame="frame-cim-text"
      data-input-type="slider"
      type="range" 
      id="symbol-angle" 
      min="0" max="1" step=0.01
      value="0.5">
  </div>
</div>
</div>
  <div class="snippet-preview">
    <iframe id="frame-cim-text" data-src="./snippet.html?cim-text"></iframe>
  </div>
</div>

---

## Links:

-   [CIM Symbol Code Snippets](https://github.com/JonnyDawe/ArcGIS-Slides/blob/main/src/snippets/commonsymbols.ts)
-   [Presentation Repo (ArcGIS + RevealJS)](https://github.com/JonnyDawe/ArcGIS-Slides)
-   [Hosted Slides](https://jonnydawe.github.io/ArcGIS-Slides/)
