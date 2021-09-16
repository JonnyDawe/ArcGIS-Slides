import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView.js'
import Polyline from '@arcgis/core/geometry/Polyline'
import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import CIMSymbol from '@arcgis/core/symbols/CIMSymbol'
import { generatePlane, simpleDashedCIM } from './commonsymbols'

const mockData: number[][][] = [
    [
        [-97.0615, 32.858],
        [-96.06133, 32.836],
        [-95.06124, 32.7],
        [-94.06124, 32.7],
        [-93.06124, 32.5],
    ],
]

const initialGraphics = new Graphic({
    geometry: new Polyline({
        paths: mockData,
        spatialReference: { wkid: 4326 },
    }),
    symbol: new SimpleLineSymbol({
        color: 'red',
        width: '5p',
        style: 'solid',
    }),
})

const graphicsLayer = new GraphicsLayer({
    graphics: [initialGraphics],
})

const map = new Map({
    basemap: 'gray-vector',
    layers: [graphicsLayer],
})

const view = new MapView({
    container: 'viewDiv',
    center: [-95, 32.8],
    zoom: 7,
    map: map,
})

window.addEventListener(
    'message',
    function (m) {
        if (m.data && m.data.play) {
            play(m.data.argument)
        }
    },
    false
)

function play(message: string) {
    switch (message) {
        case 'simple':
            graphicsLayer.graphics.map((graphic) => {
                graphic.symbol = simpleDashedCIM()
            })
            break

        case 'complex':
            graphicsLayer.graphics.map((graphic) => {
                graphic.symbol = generatePlane(1)
            })
        default:
            break
    }
}
