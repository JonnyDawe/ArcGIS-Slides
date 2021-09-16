import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView.js'
import Point from '@arcgis/core/geometry/Point'
import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol'
import { constructCIMArcTextSymbol, constructCIMTextLabel } from './commonsymbols'

const mockData: number[][] = [[-2.5991, 51.4561]]

const initialGraphics = mockData.map((element) => {
    let graphic =  new Graphic({
        geometry: new Point({
            longitude: element[0],
            latitude: element[1],
        }),
        symbol: new SimpleMarkerSymbol({
            style: 'circle',
            color: 'blue',
            size: '20px',
            outline: new SimpleLineSymbol({
                color: 'black',
                width: '2px',
            }),
        }),
    })

    return graphic    
})

const graphicsLayer = new GraphicsLayer({
    graphics: initialGraphics,
    
})

const map = new Map({
    basemap: 'gray-vector',
    layers: [graphicsLayer],
})

const view = new MapView({
    container: 'viewDiv',
    center: [-2.599, 51.4534],
    zoom: 14,
    map: map,
})


let currentSymbol: "label" | "arc" = null
let symbolText = "Example Text"

// Varies between 0 and 1
let symbolAngleFactor = 0.5

window.addEventListener(
    'message',
    function (m) {
        if (m.data && m.data.play) {
            play(m.data.argument)
        }

        if (m.data && m.data.input && currentSymbol) {
            switch(m.data.inputType){
                case "slider":
                    symbolAngleFactor = Number(m.data.argument)
                    break
                case "text":
                    symbolText = m.data.argument
            }
            switch (currentSymbol) {
                case "label":
                    graphicsLayer.graphics.map((graphic) => {
                        graphic.symbol = constructCIMTextLabel({textString:symbolText, angleDegrees:((symbolAngleFactor-0.5)/0.5)*180})
                    })
                    break;

                case "arc":
                    graphicsLayer.graphics.map((graphic) => {
                        graphic.symbol = constructCIMArcTextSymbol({textString: symbolText, proportionOfCircle: symbolAngleFactor})
                    })
                    break;
                default:
                    break;
            }
        }
    },
    false
)

function play(message: string) {
    switch (message) {
        case "simple":
            currentSymbol = "label"
            graphicsLayer.graphics.map((graphic) => {
        graphic.symbol = constructCIMTextLabel({textString:symbolText, angleDegrees:((symbolAngleFactor-0.5)/0.5)*180})
    })
            break;

        case "complex":
            currentSymbol = "arc"
            graphicsLayer.graphics.map((graphic) => {
                graphic.symbol = constructCIMArcTextSymbol({textString: symbolText, proportionOfCircle: symbolAngleFactor})
            })
        default:
            break;
    }
}








