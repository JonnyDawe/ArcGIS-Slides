

# CIM Symbology 
`The Dawn of a New Symbolisation`

<div class="name-title"> ⚡ Jonny Dawe </div>

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


Complex Attribute Driven Symbol
<div class="snippet">

```js [1|1-5]
// Generate a Symbol based on the current available capacity of the carpark
function generateCapacitySymbol({maxCapacity,availableCapacity}){
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
  Build up symbol layers
  <div class="snippet">

```js [0|7-24|25-34|35-44]
const symbol = 
  new CIMSymbol({ data: {
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


One Geometry - complex derived symbology
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


Fun Examples!
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

