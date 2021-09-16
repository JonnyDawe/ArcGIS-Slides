import CIMSymbol from '@arcgis/core/symbols/CIMSymbol'

/* ##################### Utility Functions ########################### */

/**
 * Generate a circle with a set radius, centre and number of points.
 */
function circleGenerator({
    centre,
    radius,
    numberOfPoints,
}: {
    centre: { x: number; y: number }
    radius: number
    numberOfPoints: number
}):number[][] {
    let points = []
    for (
        let i = 0;
        i <= 2 * Math.PI;
        i += (2 * Math.PI) / numberOfPoints
    ) {
        points.push([
            centre.x + radius * Math.cos(i),
            centre.y + radius * Math.sin(i),
        ])
    }
    return points
}

 /**
   * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
   *
   * @param {String} text The text to be rendered.
   * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
   *
   * @see http://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
   */
  function getTextWidth(text:string, font:string) {
    // re-use canvas object for better performance
    const canvas =
      (getTextWidth as any).canvas ||
      ((getTextWidth as any).canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }



/* ##################### CIM Point Symbols ########################### */

/**
 * Generate a basic Parking symbol.
 *
 * TEXT SYMBOL + TWO CIRCLES
 *
 * @returns CIMSymbol
 */
export function generateCIMParkingSymbol(): __esri.CIMSymbol {
    return new CIMSymbol({
        data: {
            type: 'CIMSymbolReference',
            symbol: {
                type: 'CIMPointSymbol',

                symbolLayers: [
                    {
                        type: 'CIMVectorMarker',
                        enable: true,
                        size: 35,
                        colorLocked: true,
                        anchorPointUnits: 'Relative',
                        frame: { xmin: 0, ymin: 0, xmax: 100, ymax: 100 },
                        markerGraphics: [
                            //*************** PARKING MARKER SYMBOL**************/
                            // TEXT SYMBOL + TWO CIRCLES
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: { x: 50, y: 50 },
                                symbol: {
                                    type: 'CIMTextSymbol',
                                    fontFamilyName: 'Arial',
                                    fontStyleName: 'Bold',
                                    height: 70,
                                    horizontalAlignment: 'Center',
                                    offsetX: 0,
                                    offsetY: 0,
                                    symbol: {
                                        type: 'CIMPolygonSymbol',
                                        symbolLayers: [
                                            {
                                                type: 'CIMSolidFill',
                                                enable: true,
                                                color: [255, 255, 255, 255],
                                            },
                                        ],
                                    },
                                    verticalAlignment: 'Center',
                                },
                                textString: 'P',
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        circleGenerator({
                                            centre: { x: 50, y: 50 },
                                            radius: 50,
                                            numberOfPoints: 36,
                                        }),
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [1, 96, 168, 255],
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        circleGenerator({
                                            centre: { x: 50, y: 50 },
                                            radius: 44,
                                            numberOfPoints: 36,
                                        }),
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidStroke',
                                            width: 5.5,
                                            color: [255, 255, 255, 255],
                                        },
                                    ],
                                },
                            },
                        ],
                        scaleSymbolsProportionally: true,
                        respectFrame: true,
                    },
                ],
            },
        },
    })
}


/**
 * Generate a Parking Symbol with a capacity bar. If there is no capacity 
 * show a red warning icon.
 */
export function generateCapacitySymbol({
    maxCapacity,
    availableCapacity,
}: {
    maxCapacity: number
    availableCapacity: number
}):__esri.CIMSymbol {
    let fractionFilled = (maxCapacity - availableCapacity) / maxCapacity

    return new CIMSymbol({
        data: {
            type: 'CIMSymbolReference',
            minScale: 50000, // only allow the symbol to be shown at certain scales
            symbol: {
                type: 'CIMPointSymbol',
                symbolLayers: [
                    {
                        type: 'CIMVectorMarker',
                        enable: true,
                        offsetY: 0,
                        size: 35,
                        frame: { xmin: 0, ymin: 0, xmax: 100, ymax: 100 },
                        markerGraphics: [
                            //*************** CAPACITY BAR **************/
                            // TWO BOXES
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [0, -20],
                                            [0, -5],
                                            [100 * (1 - fractionFilled), -5],
                                            [100 * (1 - fractionFilled), -20],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [113, 200, 55, 255],
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [100 * (1 - fractionFilled), -20],
                                            [100 * (1 - fractionFilled), -5],
                                            [100, -5],
                                            [100, -20],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [255, 0, 0, 255],
                                        },
                                    ],
                                },
                            },

                            //*************** PARKING MARKER SYMBOL**************/
                            // TEXT SYMBOL + TWO CIRCLES
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: { x: 50, y: 50 },
                                symbol: {
                                    type: 'CIMTextSymbol',
                                    fontFamilyName: 'Arial',
                                    fontStyleName: 'Bold',
                                    height: 70,
                                    horizontalAlignment: 'Center',
                                    offsetX: 0,
                                    offsetY: 0,
                                    symbol: {
                                        type: 'CIMPolygonSymbol',
                                        symbolLayers: [
                                            {
                                                type: 'CIMSolidFill',
                                                enable: true,
                                                color: [255, 255, 255, 255],
                                            },
                                        ],
                                    },
                                    verticalAlignment: 'Center',
                                },
                                textString: 'P',
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        circleGenerator({
                                            centre: { x: 50, y: 50 },
                                            radius: 50,
                                            numberOfPoints: 36,
                                        }),
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [1, 96, 168, 255],
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        circleGenerator({
                                            centre: { x: 50, y: 50 },
                                            radius: 44,
                                            numberOfPoints: 36,
                                        }),
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidStroke',
                                            width: 5.5,
                                            color: [255, 255, 255, 255],
                                        },
                                    ],
                                },
                            },

                            //*************** EXCLAMATION MARKER SYMBOL**************/
                            // TEXT SYMBOL + TWO CIRCLES
                            ...(availableCapacity === 0 ? redExclamation : []),
                        ],
                        scaleSymbolsProportionally: true,
                        respectFrame: true,
                    },
                ],
            },
        },
    })
}

const redExclamation: __esri.CIM.CIMMarkerGraphic[] = [
    {
        type: 'CIMMarkerGraphic',
        geometry: { x: 77, y: 18 },
        symbol: {
            type: 'CIMTextSymbol',
            fontFamilyName: 'Arial',
            fontStyleName: 'Bold',
            height: 35,
            horizontalAlignment: 'Center',
            offsetX: 0,
            offsetY: 0,
            symbol: {
                type: 'CIMPolygonSymbol',
                symbolLayers: [
                    {
                        type: 'CIMSolidFill',
                        enable: true,
                        color: [255, 255, 255, 255],
                    },
                ],
            },
            verticalAlignment: 'Center',
        },
        textString: '!',
    },
    {
        type: 'CIMMarkerGraphic',
        geometry: {
            rings: [
                circleGenerator({
                    centre: { x: 77, y: 18 },
                    radius: 20,
                    numberOfPoints: 36,
                }),
            ],
        },
        symbol: {
            type: 'CIMPolygonSymbol',
            symbolLayers: [
                {
                    type: 'CIMSolidFill',
                    enable: true,
                    color: [255, 0, 0, 255],
                },
            ],
        },
    },
]

/* ##################### CIM Line Symbols ########################### */

export function simpleDashedCIM(): __esri.CIMSymbol{
    return new CIMSymbol({
        data: {
            type: 'CIMSymbolReference',
            symbol: {
                type: 'CIMLineSymbol',
                symbolLayers: [
                    {
                        // white dashed layer at center of the line
                        type: 'CIMSolidStroke',
                        effects: [
                            {
                                type: 'CIMGeometricEffectDashes',
                                dashTemplate: [2, 2, 2, 2], // width of dashes and spacing between the dashes
                                lineDashEnding: 'NoConstraint',
                                controlPointEnding: 'NoConstraint',
                            },
                        ],
                        enable: true, // must be set to true in order for the symbol layer to be visible
                        capStyle: 'Butt',
                        joinStyle: 'Round',
                        width: 1,
                        color: [255, 255, 255, 255],
                    },
                    {
                        // lighter green line layer that surrounds the dashes
                        type: 'CIMSolidStroke',
                        enable: true,
                        capStyle: 'Butt',
                        joinStyle: 'Round',
                        width: 3,
                        color: [56, 168, 0, 255],
                    },
                    {
                        // darker green outline around the line symbol
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
}



/**
 * Generate a plane with contrails and a start marker. 
 * 
 * The position indicates where on the line to put the plane marker icon.
 * (0 = start <---> 1 = end )
 */
export function generatePlane(position: number): __esri.CIMSymbol {
    return new CIMSymbol({
        data: {
            type: 'CIMSymbolReference',
            symbol: {
                type: 'CIMLineSymbol',
                symbolLayers: [
                    {
                        type: 'CIMVectorMarker',
                        enable: true,
                        anchorPointUnits: 'Relative',
                        dominantSizeAxis3D: 'Y',
                        size: 42,
                        billboardMode3D: 'FaceNearPlane',
                        markerPlacement: {
                            type: 'CIMMarkerPlacementAtRatioPositions',
                            angleToLine: false,
                            flipFirst: false,
                            positionArray: [0],
                        },
                        frame: {
                            xmin: 0,
                            ymin: 0,
                            xmax: 200,
                            ymax: 200,
                        },
                        markerGraphics: [
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [
                                                100.339129021289509,
                                                101.498350230392461,
                                            ],
                                            [
                                                101.038672047242528,
                                                102.52631822924873,
                                            ],
                                            [
                                                101.612899089292014,
                                                103.370143273883556,
                                            ],
                                            [
                                                102.771793135937912,
                                                105.0731263009787,
                                            ],
                                            [
                                                104.2621482373938,
                                                107.263189384248321,
                                            ],
                                            [
                                                106.391941366543918,
                                                110.39289755531874,
                                            ],
                                            [
                                                109.32153742556477,
                                                114.697906846205015,
                                            ],
                                            [
                                                111.923635572560244,
                                                118.521670958630409,
                                            ],
                                            [
                                                116.184454574170772,
                                                124.782899043622933,
                                            ],
                                            [
                                                120.045580786715263,
                                                130.456781267663246,
                                            ],
                                            [
                                                123.189145965340941,
                                                135.076220568941892,
                                            ],
                                            [
                                                127.127981140429256,
                                                140.864297667333517,
                                            ],
                                            [
                                                129.461108251220537,
                                                144.292802861177563,
                                            ],
                                            [
                                                131.28254639481483,
                                                148.456425041682252,
                                            ],
                                            [
                                                132.648371444342018,
                                                153.683727315520372,
                                            ],
                                            [
                                                132.988652452095607,
                                                156.224727421034913,
                                            ],
                                            [
                                                133.134062462645772,
                                                159.335262446079724,
                                            ],
                                            [
                                                132.907922092739966,
                                                163.222535637761524,
                                            ],
                                            [
                                                131.79798247520381,
                                                168.666227099083983,
                                            ],
                                            [
                                                128.671147486539752,
                                                175.93451884973598,
                                            ],
                                            [
                                                126.025273362170168,
                                                179.8252741747007,
                                            ],
                                            [
                                                123.761952352979762,
                                                182.409310146686948,
                                            ],
                                            [
                                                120.698666408487952,
                                                185.195617587876029,
                                            ],
                                            [
                                                116.335674909045224,
                                                188.160186792762261,
                                            ],
                                            [
                                                112.184616553673422,
                                                190.153451543939639,
                                            ],
                                            [
                                                106.6746981305961,
                                                191.798830196335985,
                                            ],
                                            [
                                                101.992702560146441,
                                                192.415168949705844,
                                            ],
                                            [
                                                93.5451142709775638,
                                                191.843573020689888,
                                            ],
                                            [
                                                89.2417407700249044,
                                                190.682710768993786,
                                            ],
                                            [
                                                82.007123260769788,
                                                187.1547789441978,
                                            ],
                                            [
                                                77.9999114227261146,
                                                184.100532402058889,
                                            ],
                                            [
                                                76.1554123603978184,
                                                182.329612236675729,
                                            ],
                                            [
                                                74.35932735144911,
                                                180.310768151217189,
                                            ],
                                            [
                                                72.3455113352017065,
                                                177.581954220083389,
                                            ],
                                            [
                                                70.398541334573423,
                                                174.231631845727236,
                                            ],
                                            [
                                                68.5067892577853854,
                                                169.667205368698319,
                                            ],
                                            [
                                                67.7243112530445615,
                                                166.879626202759795,
                                            ],
                                            [
                                                67.0421112124294751,
                                                162.839391006065028,
                                            ],
                                            [
                                                66.8583312058050723,
                                                159.3365310415852,
                                            ],
                                            [
                                                67.4810172282368654,
                                                152.951486461696106,
                                            ],
                                            [
                                                69.37613529865304,
                                                146.722217434776951,
                                            ],
                                            [
                                                71.4252972878331178,
                                                143.041694375674979,
                                            ],
                                            [
                                                75.7876303943445464,
                                                136.623440470636012,
                                            ],
                                            [
                                                78.5683935304744239,
                                                132.532130290303428,
                                            ],
                                            [
                                                81.190501672740055,
                                                128.674250266046528,
                                            ],
                                            [
                                                83.9666177921673977,
                                                124.58977113589367,
                                            ],
                                            [
                                                85.9637207845915157,
                                                121.651453963335186,
                                            ],
                                            [
                                                88.7429418292929455,
                                                117.562423660752245,
                                            ],
                                            [
                                                91.4316679994027339,
                                                113.606518549214115,
                                            ],
                                            [
                                                94.924673169958055,
                                                108.467308248226473,
                                            ],
                                            [
                                                97.0689563080151174,
                                                105.312436306474154,
                                            ],
                                            [
                                                98.8940063144066386,
                                                102.627256195631261,
                                            ],
                                            [100, 100.999996223449557],
                                            [
                                                100.339129021289509,
                                                101.498350230392461,
                                            ],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [255, 0, 0, 255],
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [100, 100.999996223449557],
                                            [
                                                100.339129021289509,
                                                101.498350230392461,
                                            ],
                                            [
                                                101.038672047242528,
                                                102.52631822924873,
                                            ],
                                            [
                                                101.612899089292014,
                                                103.370143273883556,
                                            ],
                                            [
                                                102.771793135937912,
                                                105.0731263009787,
                                            ],
                                            [
                                                104.2621482373938,
                                                107.263189384248321,
                                            ],
                                            [
                                                106.391941366543918,
                                                110.39289755531874,
                                            ],
                                            [
                                                109.32153742556477,
                                                114.697906846205015,
                                            ],
                                            [
                                                111.923635572560244,
                                                118.521670958630409,
                                            ],
                                            [
                                                116.184454574170772,
                                                124.782899043622933,
                                            ],
                                            [
                                                120.045580786715263,
                                                130.456781267663246,
                                            ],
                                            [
                                                123.189145965340941,
                                                135.076220568941892,
                                            ],
                                            [
                                                127.127981140429256,
                                                140.864297667333517,
                                            ],
                                            [
                                                129.461108251220537,
                                                144.292802861177563,
                                            ],
                                            [
                                                131.28254639481483,
                                                148.456425041682252,
                                            ],
                                            [
                                                132.648371444342018,
                                                153.683727315520372,
                                            ],
                                            [
                                                132.988652452095607,
                                                156.224727421034913,
                                            ],
                                            [
                                                133.134062462645772,
                                                159.335262446079724,
                                            ],
                                            [
                                                132.907922092739966,
                                                163.222535637761524,
                                            ],
                                            [
                                                131.79798247520381,
                                                168.666227099083983,
                                            ],
                                            [
                                                128.671147486539752,
                                                175.93451884973598,
                                            ],
                                            [
                                                126.025273362170168,
                                                179.8252741747007,
                                            ],
                                            [
                                                123.761952352979762,
                                                182.409310146686948,
                                            ],
                                            [
                                                120.698666408487952,
                                                185.195617587876029,
                                            ],
                                            [
                                                116.335674909045224,
                                                188.160186792762261,
                                            ],
                                            [
                                                112.184616553673422,
                                                190.153451543939639,
                                            ],
                                            [
                                                106.6746981305961,
                                                191.798830196335985,
                                            ],
                                            [
                                                101.992702560146441,
                                                192.415168949705844,
                                            ],
                                            [
                                                93.5451142709775638,
                                                191.843573020689888,
                                            ],
                                            [
                                                89.2417407700249044,
                                                190.682710768993786,
                                            ],
                                            [
                                                82.007123260769788,
                                                187.1547789441978,
                                            ],
                                            [
                                                77.9999114227261146,
                                                184.100532402058889,
                                            ],
                                            [
                                                76.1554123603978184,
                                                182.329612236675729,
                                            ],
                                            [
                                                74.35932735144911,
                                                180.310768151217189,
                                            ],
                                            [
                                                72.3455113352017065,
                                                177.581954220083389,
                                            ],
                                            [
                                                70.398541334573423,
                                                174.231631845727236,
                                            ],
                                            [
                                                68.5067892577853854,
                                                169.667205368698319,
                                            ],
                                            [
                                                67.7243112530445615,
                                                166.879626202759795,
                                            ],
                                            [
                                                67.0421112124294751,
                                                162.839391006065028,
                                            ],
                                            [
                                                66.8583312058050723,
                                                159.3365310415852,
                                            ],
                                            [
                                                67.4810172282368654,
                                                152.951486461696106,
                                            ],
                                            [
                                                69.37613529865304,
                                                146.722217434776951,
                                            ],
                                            [
                                                71.4252972878331178,
                                                143.041694375674979,
                                            ],
                                            [
                                                75.7876303943445464,
                                                136.623440470636012,
                                            ],
                                            [
                                                78.5683935304744239,
                                                132.532130290303428,
                                            ],
                                            [
                                                81.190501672740055,
                                                128.674250266046528,
                                            ],
                                            [
                                                83.9666177921673977,
                                                124.58977113589367,
                                            ],
                                            [
                                                85.9637207845915157,
                                                121.651453963335186,
                                            ],
                                            [
                                                88.7429418292929455,
                                                117.562423660752245,
                                            ],
                                            [
                                                91.4316679994027339,
                                                113.606518549214115,
                                            ],
                                            [
                                                94.924673169958055,
                                                108.467308248226473,
                                            ],
                                            [
                                                97.0689563080151174,
                                                105.312436306474154,
                                            ],
                                            [
                                                98.8940063144066386,
                                                102.627256195631261,
                                            ],
                                            [100, 100.999996223449557],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidStroke',
                                            enable: true,
                                            capStyle: 'Butt',
                                            joinStyle: 'Miter',
                                            lineStyle3D: 'Strip',
                                            miterLimit: 4,
                                            width: 7.215240515336629,
                                            color: [255, 0, 0, 255],
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [
                                                102.882764486668663,
                                                141.51541170894285,
                                            ],
                                            [
                                                104.715252102480022,
                                                142.015102081874915,
                                            ],
                                            [
                                                107.409105225910395,
                                                143.150974101819,
                                            ],
                                            [
                                                109.56378335480818,
                                                144.495583145449956,
                                            ],
                                            [
                                                111.094020491848781,
                                                145.769254195232548,
                                            ],
                                            [
                                                113.14813848822169,
                                                148.103362279304974,
                                            ],
                                            [
                                                114.654684566199677,
                                                150.613600307268143,
                                            ],
                                            [
                                                115.8600216001519,
                                                153.851893601728193,
                                            ],
                                            [
                                                116.357727630075559,
                                                156.440725721243894,
                                            ],
                                            [
                                                116.503497637792748,
                                                158.87103785142088,
                                            ],
                                            [
                                                116.0178038031694,
                                                163.252207307899766,
                                            ],
                                            [
                                                114.540062505342974,
                                                167.358991331443463,
                                            ],
                                            [
                                                112.47674989611626,
                                                170.50348169340063,
                                            ],
                                            [
                                                109.998096847461582,
                                                172.917035023385438,
                                            ],
                                            [
                                                107.893505397548893,
                                                174.3282747012434,
                                            ],
                                            [
                                                105.1588022292634,
                                                175.576364539198465,
                                            ],
                                            [
                                                102.6938706471966,
                                                176.2685390002647,
                                            ],
                                            [
                                                99.9978713988445946,
                                                176.645086828044384,
                                            ],
                                            [
                                                97.9536142760701978,
                                                176.393545814864012,
                                            ],
                                            [
                                                93.38863419107949,
                                                174.986830755565848,
                                            ],
                                            [
                                                89.7648648887582823,
                                                172.731300133349407,
                                            ],
                                            [
                                                86.9064857733339693,
                                                169.721973798994014,
                                            ],
                                            [
                                                85.4460857621130287,
                                                167.343282750231083,
                                            ],
                                            [
                                                84.727660743934095,
                                                165.72321074085562,
                                            ],
                                            [
                                                83.8854106924928971,
                                                162.83262955921191,
                                            ],
                                            [
                                                83.4907906761232681,
                                                158.872473325036935,
                                            ],
                                            [
                                                83.7106006860604595,
                                                155.897985132021347,
                                            ],
                                            [
                                                84.4786307031705235,
                                                152.711649089184732,
                                            ],
                                            [
                                                85.7559767370715917,
                                                149.816990949682832,
                                            ],
                                            [
                                                87.2364287648388483,
                                                147.588437807953369,
                                            ],
                                            [
                                                89.0306988122849106,
                                                145.64931881222509,
                                            ],
                                            [
                                                92.164081967473777,
                                                143.380202800829977,
                                            ],
                                            [
                                                94.3971680426113409,
                                                142.330583741758687,
                                            ],
                                            [
                                                97.6513192726281005,
                                                141.405128702478549,
                                            ],
                                            [
                                                99.99785331628479,
                                                141.098381701288474,
                                            ],
                                            [
                                                102.882764486668663,
                                                141.51541170894285,
                                            ],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [255, 255, 255, 255],
                                        },
                                    ],
                                },
                            },
                        ],
                        scaleSymbolsProportionally: true,
                        respectFrame: true,
                        clippingPath: {
                            type: 'CIMClippingPath',
                            clippingType: 'Intersect',
                            path: {
                                rings: [
                                    [
                                        [0, 0],
                                        [200, 0],
                                        [200, 200],
                                        [0, 200],
                                        [0, 0],
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        type: 'CIMVectorMarker',
                        enable: true,
                        anchorPointUnits: 'Relative',
                        dominantSizeAxis3D: 'Y',
                        size: 36,
                        billboardMode3D: 'FaceNearPlane',
                        markerPlacement: {
                            type: 'CIMMarkerPlacementAtRatioPositions',
                            angleToLine: true,
                            flipFirst: false,
                            positionArray: [position],
                        },
                        frame: {
                            xmin: 0,
                            ymin: 0,
                            xmax: 81.0370101928710938,
                            ymax: 79.5699996948242188,
                        },
                        markerGraphics: [
                            {
                                type: 'CIMMarkerGraphic',
                                geometry: {
                                    rings: [
                                        [
                                            [
                                                28.3020103648304939,
                                                4.2449682950973511e-6,
                                            ],
                                            [
                                                28.9380103424191475,
                                                4.2449682950973511e-6,
                                            ],
                                            [
                                                29.71301031857729,
                                                0.53000421635806561,
                                            ],
                                            [
                                                30.4890103414654732,
                                                1.0500041972845793,
                                            ],
                                            [
                                                30.8400103524327278,
                                                1.4000041913241148,
                                            ],
                                            [
                                                31.5640103295445442,
                                                1.840004188939929,
                                            ],
                                            [
                                                32.2880103066563606,
                                                2.2900041770190001,
                                            ],
                                            [
                                                35.1910104230046272,
                                                6.9100040625780821,
                                            ],
                                            [
                                                38.7960104420781136,
                                                12.670004291459918,
                                            ],
                                            [
                                                40.4120104983448982,
                                                15.26000420562923,
                                            ],
                                            [
                                                43.2500105574727058,
                                                19.7700044345110655,
                                            ],
                                            [
                                                46.4240105822682381,
                                                24.8400046061724424,
                                            ],
                                            [
                                                47.6890105679631233,
                                                26.8700045775622129,
                                            ],
                                            [
                                                47.9740105643868446,
                                                26.630004582926631,
                                            ],
                                            [
                                                48.2670105770230293,
                                                26.390004588291049,
                                            ],
                                            [
                                                50.6800106838345528,
                                                26.270004590973258,
                                            ],
                                            [
                                                53.10101068764925,
                                                26.14000459574163,
                                            ],
                                            [
                                                53.6130107119679451,
                                                26.4200045969337225,
                                            ],
                                            [
                                                54.12501073628664,
                                                26.6900046076625586,
                                            ],
                                            [
                                                54.12501073628664,
                                                28.31000461243093,
                                            ],
                                            [
                                                54.12501073628664,
                                                29.9300046171993017,
                                            ],
                                            [
                                                53.8320107236504555,
                                                30.1200046148151159,
                                            ],
                                            [
                                                53.54001072794199,
                                                30.31000461243093,
                                            ],
                                            [
                                                51.7330106869339943,
                                                30.4200046118348837,
                                            ],
                                            [
                                                49.9340106621384621,
                                                30.5400046091526747,
                                            ],
                                            [
                                                51.4410106316208839,
                                                33.0000046472996473,
                                            ],
                                            [
                                                52.9470106735825539,
                                                35.4500046949833632,
                                            ],
                                            [
                                                53.5910106673836708,
                                                35.7400046866387129,
                                            ],
                                            [
                                                54.2420106902718544,
                                                36.0200046878308058,
                                            ],
                                            [
                                                61.1450105682015419,
                                                36.0300046876072884,
                                            ],
                                            [
                                                68.0490103736519814,
                                                36.0400046873837709,
                                            ],
                                            [
                                                70.7180102840065956,
                                                36.2900046873837709,
                                            ],
                                            [
                                                73.38701019436121,
                                                36.5400046873837709,
                                            ],
                                            [
                                                75.5380102172493935,
                                                37.0800047088414431,
                                            ],
                                            [
                                                77.6880081668496132,
                                                37.630004720762372,
                                            ],
                                            [
                                                78.8800081983208656,
                                                38.2400047350674868,
                                            ],
                                            [
                                                80.5620082393288612,
                                                39.3600047398358583,
                                            ],
                                            [
                                                81.0370082333683968,
                                                39.8700047302991152,
                                            ],
                                            [
                                                81.0370082333683968,
                                                40.2500047255307436,
                                            ],
                                            [
                                                81.0370082333683968,
                                                40.6400047112256289,
                                            ],
                                            [
                                                80.5110082104802132,
                                                41.130004720762372,
                                            ],
                                            [
                                                78.4340083077549934,
                                                42.3500047493726015,
                                            ],
                                            [
                                                76.89000827819109,
                                                43.070004777982831,
                                            ],
                                            [
                                                74.5720103457570076,
                                                43.5600047875195742,
                                            ],
                                            [
                                                72.2610102370381355,
                                                44.0500047970563173,
                                            ],
                                            [
                                                63.368010587990284,
                                                44.1500047985464334,
                                            ],
                                            [
                                                54.4760103896260262,
                                                44.2400048021227121,
                                            ],
                                            [
                                                53.65701038390398,
                                                44.6100048068910837,
                                            ],
                                            [
                                                52.8380103781819344,
                                                44.9700048211961985,
                                            ],
                                            [
                                                51.2800104096531868,
                                                47.4700048211961985,
                                            ],
                                            [
                                                49.7150103524327278,
                                                49.9600048307329416,
                                            ],
                                            [
                                                51.6310103610157967,
                                                50.0800048280507326,
                                            ],
                                            [
                                                53.5400104001164436,
                                                50.2000048253685236,
                                            ],
                                            [
                                                53.8320103958249092,
                                                50.3900048229843378,
                                            ],
                                            [
                                                54.1250104084610939,
                                                50.580004820600152,
                                            ],
                                            [
                                                54.1250104084610939,
                                                52.1900048349052668,
                                            ],
                                            [
                                                54.1250104084610939,
                                                53.8000048492103815,
                                            ],
                                            [
                                                53.8320103958249092,
                                                53.9900048468261957,
                                            ],
                                            [
                                                53.5400104001164436,
                                                54.18000484444201,
                                            ],
                                            [
                                                50.9870104268193245,
                                                54.1200048457831144,
                                            ],
                                            [
                                                48.4420103505253792,
                                                54.0700048450380564,
                                            ],
                                            [
                                                48.0250103548169136,
                                                53.690004849806428,
                                            ],
                                            [
                                                47.6090103462338448,
                                                53.3200048450380564,
                                            ],
                                            [
                                                47.25801033526659,
                                                53.8600048664957285,
                                            ],
                                            [
                                                43.8790103867650032,
                                                59.3200049046427011,
                                            ],
                                            [
                                                37.7430102303624153,
                                                69.1500048283487558,
                                            ],
                                            [
                                                33.7060100510716438,
                                                75.5900048855692148,
                                            ],
                                            [
                                                32.41201002150774,
                                                77.5200048331171274,
                                            ],
                                            [
                                                30.5910100415349007,
                                                78.7500048521906137,
                                            ],
                                            [
                                                29.128009982407093,
                                                79.5700048450380564,
                                            ],
                                            [
                                                28.5140099599957466,
                                                79.5700048450380564,
                                            ],
                                            [
                                                27.9000099375844,
                                                79.5700048450380564,
                                            ],
                                            [
                                                27.7680099382996559,
                                                79.2300048414617777,
                                            ],
                                            [
                                                27.6440099403262138,
                                                78.890004837885499,
                                            ],
                                            [
                                                28.4550099298357964,
                                                77.0700047854334116,
                                            ],
                                            [
                                                30.6640100404620171,
                                                71.9600046519190073,
                                            ],
                                            [
                                                32.5510100051760674,
                                                67.350004518404603,
                                            ],
                                            [
                                                33.0480100139975548,
                                                66.0200044754892588,
                                            ],
                                            [
                                                32.5730100199580193,
                                                65.8700044695287943,
                                            ],
                                            [
                                                32.0970100089907646,
                                                65.72000446356833,
                                            ],
                                            [
                                                32.1710100099444389,
                                                65.3300044778734446,
                                            ],
                                            [
                                                32.2440100088715553,
                                                64.9400044921785593,
                                            ],
                                            [
                                                32.8580100312829018,
                                                64.8700044918805361,
                                            ],
                                            [
                                                33.4650100246071815,
                                                64.8000044915825129,
                                            ],
                                            [
                                                33.7360100224614143,
                                                64.2200045082718134,
                                            ],
                                            [
                                                33.9990100339055061,
                                                63.3200045321136713,
                                            ],
                                            [
                                                33.9990100339055061,
                                                63.0000045392662287,
                                            ],
                                            [
                                                33.5310100391507149,
                                                62.8900045398622751,
                                            ],
                                            [
                                                33.0630100443959236,
                                                62.7600045446306467,
                                            ],
                                            [
                                                33.0630100443959236,
                                                62.3700045589357615,
                                            ],
                                            [
                                                33.0630100443959236,
                                                61.990004563704133,
                                            ],
                                            [
                                                33.5890100672841072,
                                                62.0700045619159937,
                                            ],
                                            [
                                                34.0222600772976875,
                                                62.1656045634299517,
                                            ],
                                            [
                                                34.2226970717310905,
                                                62.2009045649319887,
                                            ],
                                            [
                                                34.407322071492672,
                                                62.1112045664340258,
                                            ],
                                            [
                                                34.72888507694006,
                                                61.4202645439654589,
                                            ],
                                            [
                                                35.0150100812315941,
                                                60.7899545449763536,
                                            ],
                                            [
                                                35.6370100602507591,
                                                59.079954506829381,
                                            ],
                                            [
                                                35.0520100817084312,
                                                58.7399545032531023,
                                            ],
                                            [
                                                34.4670101031661034,
                                                58.5199545044451952,
                                            ],
                                            [
                                                34.4670101031661034,
                                                58.1799545008689165,
                                            ],
                                            [
                                                34.4670101031661034,
                                                57.8499544877558947,
                                            ],
                                            [
                                                34.8400100991129875,
                                                57.7099544871598482,
                                            ],
                                            [
                                                35.732010118663311,
                                                57.5699544865638018,
                                            ],
                                            [
                                                36.2510101124644279,
                                                57.5699544865638018,
                                            ],
                                            [
                                                36.646010123193264,
                                                56.3199544865638018,
                                            ],
                                            [
                                                37.0410101339221,
                                                54.9099545199424028,
                                            ],
                                            [
                                                36.4560101553797722,
                                                54.5299545247107744,
                                            ],
                                            [
                                                35.8710101768374443,
                                                54.3099545259028673,
                                            ],
                                            [
                                                35.8710101768374443,
                                                53.9499545115977526,
                                            ],
                                            [
                                                35.8710101768374443,
                                                53.5899544972926378,
                                            ],
                                            [
                                                36.3610101863741875,
                                                53.5899544972926378,
                                            ],
                                            [
                                                36.8580101951956749,
                                                53.5899544972926378,
                                            ],
                                            [
                                                37.5530101880431175,
                                                53.4699544999748468,
                                            ],
                                            [
                                                38.1890101656317711,
                                                51.9499545190483332,
                                            ],
                                            [
                                                38.6790101751685143,
                                                50.4899544809013605,
                                            ],
                                            [
                                                38.6790101751685143,
                                                50.3099544737488031,
                                            ],
                                            [
                                                38.1530101522803307,
                                                50.3099544737488031,
                                            ],
                                            [
                                                37.2970101460814476,
                                                50.0999544803053141,
                                            ],
                                            [
                                                36.9750101491808891,
                                                49.889954486861825,
                                            ],
                                            [
                                                37.1140101477503777,
                                                49.5199544820934534,
                                            ],
                                            [
                                                37.2610101476311684,
                                                49.139954486861825,
                                            ],
                                            [
                                                37.9770101681351662,
                                                49.139954486861825,
                                            ],
                                            [
                                                38.687010146677494,
                                                49.139954486861825,
                                            ],
                                            [
                                                38.8840101435780525,
                                                48.6199545059353113,
                                            ],
                                            [
                                                39.2130101397633553,
                                                46.30995456315577,
                                            ],
                                            [
                                                39.3370101377367973,
                                                44.519954601302743,
                                            ],
                                            [
                                                38.3650101348757744,
                                                44.3699545953422785,
                                            ],
                                            [
                                                33.29701029509306,
                                                44.1099546048790216,
                                            ],
                                            [
                                                24.7550104781985283,
                                                43.8899546060711145,
                                            ],
                                            [
                                                20.3090103790163994,
                                                43.779954606667161,
                                            ],
                                            [
                                                17.2660103961825371,
                                                43.4299546126276255,
                                            ],
                                            [
                                                12.5130106136202812,
                                                42.799954617395997,
                                            ],
                                            [
                                                10.8020106479525566,
                                                42.529954606667161,
                                            ],
                                            [
                                                10.5530106499791145,
                                                42.769954601302743,
                                            ],
                                            [
                                                7.3351106122136116,
                                                47.4299544487148523,
                                            ],
                                            [
                                                4.3733105137944221,
                                                51.8399542961269617,
                                            ],
                                            [
                                                3.7590105012059212,
                                                52.1399543080478907,
                                            ],
                                            [
                                                3.1447104886174202,
                                                52.42995429970324,
                                            ],
                                            [
                                                2.0769104436039925,
                                                52.4799543004482985,
                                            ],
                                            [
                                                1.0092104151844978,
                                                52.5199542995542288,
                                            ],
                                            [
                                                0.76058041304349899,
                                                52.2699542995542288,
                                            ],
                                            [
                                                0.51193041354417801,
                                                52.0199542995542288,
                                            ],
                                            [
                                                1.2067104056477547,
                                                49.7099543567746878,
                                            ],
                                            [
                                                2.8448104336857796,
                                                44.3499542232602835,
                                            ],
                                            [
                                                3.7370104268193245,
                                                41.2799542900174856,
                                            ],
                                            [
                                                1.967210479080677,
                                                40.7599543090909719,
                                            ],
                                            [
                                                0.11701042205095291,
                                                40.1499542947858572,
                                            ],
                                            [
                                                4.246830940246582e-7,
                                                40.0299542974680662,
                                            ],
                                            [
                                                0.26327041536569595,
                                                39.7099543046206236,
                                            ],
                                            [
                                                0.5266004279255867,
                                                39.389954311773181,
                                            ],
                                            [
                                                2.1720004752278328,
                                                39.0999543201178312,
                                            ],
                                            [
                                                3.8102005198597908,
                                                38.68995432369411,
                                            ],
                                            [
                                                2.2817005589604378,
                                                33.5199542474001646,
                                            ],
                                            [
                                                0.74590057879686356,
                                                28.4599543046206236,
                                            ],
                                            [
                                                0.81903057545423508,
                                                27.97995431534946,
                                            ],
                                            [
                                                0.8848605751991272,
                                                27.4999543260782957,
                                            ],
                                            [
                                                2.0549605488777161,
                                                27.5599543247371912,
                                            ],
                                            [
                                                3.76626056432724,
                                                27.7499543223530054,
                                            ],
                                            [
                                                4.3000605702400208,
                                                27.859954321756959,
                                            ],
                                            [
                                                7.4520605206489563,
                                                32.6499542836099863,
                                            ],
                                            [
                                                10.5969606041908264,
                                                37.4399542454630136,
                                            ],
                                            [
                                                10.9549606144428253,
                                                37.4399542454630136,
                                            ],
                                            [
                                                15.8109605610370636,
                                                36.8399542216211557,
                                            ],
                                            [
                                                20.30896070599556,
                                                36.229954207316041,
                                            ],
                                            [
                                                29.5519607365131378,
                                                36.06995421089232,
                                            ],
                                            [
                                                38.7959611713886261,
                                                35.89995420910418,
                                            ],
                                            [
                                                40.2359612286090851,
                                                35.8899542093276978,
                                            ],
                                            [
                                                39.8899612426757812,
                                                34.7499542236328125,
                                            ],
                                            [
                                                39.8900104984641075,
                                                34.7500040885061026,
                                            ],
                                            [
                                                38.9157604798674583,
                                                31.2400040980428457,
                                            ],
                                            [
                                                37.27501042932272,
                                                31.0800041016191244,
                                            ],
                                            [
                                                37.27501042932272,
                                                30.6300041135400534,
                                            ],
                                            [
                                                37.27501042932272,
                                                30.1700041051954031,
                                            ],
                                            [
                                                37.9850104078650475,
                                                30.0400041099637747,
                                            ],
                                            [
                                                38.6940103992819786,
                                                29.9000041093677282,
                                            ],
                                            [
                                                38.5840103998780251,
                                                29.6300040986388922,
                                            ],
                                            [
                                                38.07201037555933,
                                                28.1600040700286627,
                                            ],
                                            [
                                                37.6630103662610054,
                                                26.9400040414184332,
                                            ],
                                            [
                                                36.7710103467106819,
                                                26.7900040354579687,
                                            ],
                                            [
                                                35.87101037055254,
                                                26.6300040390342474,
                                            ],
                                            [
                                                35.87101037055254,
                                                26.3000040259212255,
                                            ],
                                            [
                                                35.87101037055254,
                                                25.95000403188169,
                                            ],
                                            [
                                                36.5440103486180305,
                                                25.7200040277093649,
                                            ],
                                            [
                                                37.2170103266835213,
                                                25.4800040330737829,
                                            ],
                                            [
                                                36.7120103314518929,
                                                24.0300039853900671,
                                            ],
                                            [
                                                36.0250103548169136,
                                                22.2900039758533239,
                                            ],
                                            [
                                                35.3862243369221687,
                                                22.242603974416852,
                                            ],
                                            [
                                                34.7010103538632393,
                                                22.2800039742141962,
                                            ],
                                            [
                                                34.7010103538632393,
                                                21.8200039658695459,
                                            ],
                                            [
                                                34.7010103538632393,
                                                21.3500039670616388,
                                            ],
                                            [
                                                35.1690103486180305,
                                                21.2300039697438478,
                                            ],
                                            [
                                                35.6300103440880775,
                                                21.1100039724260569,
                                            ],
                                            [
                                                35.0740103498101234,
                                                19.6200039628893137,
                                            ],
                                            [
                                                34.5180103555321693,
                                                18.1400039438158274,
                                            ],
                                            [
                                                34.0210103467106819,
                                                18.0600039456039667,
                                            ],
                                            [
                                                33.5310103371739388,
                                                17.9900039453059435,
                                            ],
                                            [
                                                33.5310103371739388,
                                                17.5400039572268724,
                                            ],
                                            [
                                                33.5310103371739388,
                                                17.0800039488822222,
                                            ],
                                            [
                                                33.7790103331208229,
                                                17.0800039488822222,
                                            ],
                                            [
                                                34.028010331094265,
                                                17.0800039488822222,
                                            ],
                                            [
                                                34.1010103300213814,
                                                17.0300039481371641,
                                            ],
                                            [
                                                33.6110103204846382,
                                                15.8500040005892515,
                                            ],
                                            [
                                                33.2820103242993355,
                                                15.2100040148943663,
                                            ],
                                            [
                                                32.8140103295445442,
                                                15.2100040148943663,
                                            ],
                                            [
                                                32.346010334789753,
                                                15.2100040148943663,
                                            ],
                                            [
                                                32.20001033693552,
                                                14.820004029199481,
                                            ],
                                            [
                                                32.0540103390812874,
                                                14.4400040339678526,
                                            ],
                                            [
                                                32.4700103476643562,
                                                14.1400040220469236,
                                            ],
                                            [
                                                32.8950103595852852,
                                                13.820004029199481,
                                            ],
                                            [
                                                31.7030103281140327,
                                                10.8300040196627378,
                                            ],
                                            [
                                                28.9750104025006294,
                                                4.2100041341036558,
                                            ],
                                            [
                                                27.439010389149189,
                                                0.59000424854457378,
                                            ],
                                            [
                                                27.5560103878378868,
                                                0.29000423662364483,
                                            ],
                                            [
                                                27.66601038724184,
                                                4.2449682950973511e-6,
                                            ],
                                            [
                                                28.3020103648304939,
                                                4.2449682950973511e-6,
                                            ],
                                        ],
                                    ],
                                },
                                symbol: {
                                    type: 'CIMPolygonSymbol',
                                    symbolLayers: [
                                        {
                                            type: 'CIMSolidFill',
                                            enable: true,
                                            color: [0, 0, 0, 255],
                                        },
                                    ],
                                },
                            },
                        ],
                        scaleSymbolsProportionally: true,
                        respectFrame: true,
                        clippingPath: {
                            type: 'CIMClippingPath',
                            clippingType: 'Intersect',
                            path: {
                                rings: [
                                    [
                                        [0, 0],
                                        [81.0370101928710938, 0],
                                        [
                                            81.0370101928710938,
                                            79.5699996948242188,
                                        ],
                                        [0, 79.5699996948242188],
                                        [0, 0],
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        type: 'CIMSolidStroke',
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
                        ],
                        enable: true,
                        capStyle: 'Round',
                        joinStyle: 'Round',
                        lineStyle3D: 'Strip',
                        miterLimit: 10,
                        width: 2,
                        color: [178, 178, 178, 255],
                    },
                    {
                        type: 'CIMSolidStroke',
                        effects: [
                            {
                                type: 'CIMGeometricEffectOffset',
                                method: 'Rounded',
                                offset: 2,
                                option: 'Fast',
                            },
                            {
                                type: 'CIMGeometricEffectWave',
                                amplitude: 2,
                                period: 7,
                                seed: 2,
                                waveform: 'Random',
                            },
                        ],
                        enable: true,
                        capStyle: 'Round',
                        joinStyle: 'Round',
                        lineStyle3D: 'Strip',
                        miterLimit: 10,
                        width: 2,
                        color: [178, 178, 178, 255],
                    },
                ],
            },
        },
    })
}


/* ##################### CIM Text Symbols ########################### */

/**
   * Constructs a CIM Text Label with a rectangle background which grows with the text input.
   * @param textString 
   * @param angleDegrees 
   */
 export function constructCIMTextLabel({textString, angleDegrees}:{textString: string, angleDegrees: number}): __esri.CIMSymbol {
    // Get the ratio of the text string width in pts (1pt = 0.75px) to the height of the 
    // text. Use this to scale the background polygon wrapper. 
    let ratio = (getTextWidth(textString, "1pt arial") * 0.75)

    let xmax = (ratio / 2) * 200
    let xmin = 0 - xmax

    // Padding on the start and end of the string
    let padding = 35

    //Return CIM Symbol data
    return new CIMSymbol({
      data: {
        type: "CIMSymbolReference",
        symbol: {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 20,
              rotation: angleDegrees,
              rotateClockwise: true,
              respectFrame: true,
              colorLocked: true,
              anchorPointUnits: "Relative",
              frame: { xmin: -100, ymin: -100, xmax: 100, ymax: 100 },
              markerGraphics: [
                // ******* Text Symbol *********
                {
                  type: "CIMMarkerGraphic",
                  geometry: { x: 0, y: 0 },
                  symbol: {
                    type: "CIMTextSymbol",
                    fontFamilyName: "arial",
                    // fontStyleName: "Bold",
                    angle: angleDegrees,
                    height: 200,
                    horizontalAlignment: "Center",
                    offsetX: 0,
                    offsetY: 0,
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        {
                          type: "CIMSolidFill",
                          enable: true,
                          // Text Color
                          color: [255, 255, 255, 255]
                        }
                      ]
                    },
                    verticalAlignment: "Center"
                  },
                  textString: textString
                },
                // ******* Polygon Background Symbol *********
                {
                  type: "CIMMarkerGraphic",
                  geometry: {
                    rings: [
                      [
                        [xmin - padding, -120],
                        [xmin - (50 + padding), -30],
                        [xmin - (50 + padding), 30],
                        [xmin - padding, 120],
                        [xmax + padding, 120],
                        [xmax + (50 + padding), 30],
                        [xmax + (50 + padding), -30],
                        [xmax + padding, -120]
                      ]
                    ]
                  },
                  symbol: {
                    type: "CIMPolygonSymbol",
                    symbolLayers: [{
                      type: "CIMSolidStroke",
                      width: 10,
                      enable: true,
                      joinStyle:'Round',
                      capStyle:"Square",
                      color: [255, 255, 255, 255]
                    },
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [39, 129, 153, 255]
                    }

                    ]
                  }
                }
              ],
              scaleSymbolsProportionally: true
            }
          ]
        }
      }

    })
}

/**
 * Constructs and arc text label.
 * @param 
 * @returns 
 */
 export function constructCIMArcTextSymbol({textString, proportionOfCircle}:{textString: string, proportionOfCircle:number}) {

    if(proportionOfCircle>=0.95 && textString[textString.length -1 ] != " "){
        textString += " "
    }

    let textSymbols: __esri.CIM.CIMMarkerGraphic[] = []
    let ratio = (getTextWidth(textString, "1pt arial") * 0.75)
    let radius = ((ratio / 2) * 200)/(2*proportionOfCircle)

    let angleDivisions = (proportionOfCircle*2*Math.PI)/(textString.length + 1)
    let counter = 1

    let startingAngle = (Math.PI * ( 0.5 - proportionOfCircle))

    for(let i = textString.length - 1; i >= 0; i--){
        textSymbols.push({
            type: "CIMMarkerGraphic",
            geometry: { x: (radius)*Math.cos(counter*angleDivisions + startingAngle), y: (radius)*Math.sin(counter*angleDivisions + startingAngle) },
            symbol: {
              type: "CIMTextSymbol",
              fontFamilyName: "arial",
              // fontStyleName: "Bold",
              angle: (90 - (((counter*angleDivisions + startingAngle)/(Math.PI))*180)),
              height: 200,
              horizontalAlignment: "Center",
              offsetX: 0,
              offsetY: 0,
              symbol: {
                type: "CIMPolygonSymbol",
                symbolLayers: [
                  {
                    type: "CIMSolidFill",
                    enable: true,
                    // Text Color
                    color: [1, 1, 1, 255]
                  }
                ]
              },
              verticalAlignment: "Center"
            },
            textString: textString[i]
          })
          counter++
    }

    
    //Return CIM Symbol data
    return new CIMSymbol({
      data: {
        type: "CIMSymbolReference",
        symbol: {
          type: "CIMPointSymbol",
          symbolLayers: [
            {
              type: "CIMVectorMarker",
              enable: true,
              size: 20,
              rotation: 0,
              rotateClockwise: true,
              respectFrame: true,
              colorLocked: true,
              anchorPointUnits: "Relative",
              frame: { xmin: -100, ymin: -100, xmax: 100, ymax: 100 },
              markerGraphics: [...textSymbols,
            // ******* Polygon Background Symbol *********
            {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [25 , 25],
                      [-25, 25],
                      [-25 , -25],
                      [25 , -25]
                    ]
                  ]
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [{
                    type: "CIMSolidStroke",
                    width: 10,
                    enable: true,
                    color: [255, 255, 255, 255]
                  },
                  {
                    type: "CIMSolidFill",
                    enable: true,
                    color: [39, 129, 153, 255]
                  }

                  ]
                }
              }],
              scaleSymbolsProportionally: true
            }
          ]
        }
      }

    })
}