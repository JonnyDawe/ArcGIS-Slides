import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView.js'
import Point from '@arcgis/core/geometry/Point'
import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import {
    generateCapacitySymbol,
    generateCIMParkingSymbol,
} from './commonsymbols'

const mockData: {
    location: number[]
    maxCapacity: number
    availableCapacity: number
}[] = [
    { location: [-2.5991, 51.4561], maxCapacity: 100, availableCapacity: 0 },
    { location: [-2.5896, 51.4502], maxCapacity: 100, availableCapacity: 40 },
    { location: [-2.5863, 51.4582], maxCapacity: 100, availableCapacity: 80 },
]

const initialGraphics = mockData.map((element) => {
    let graphic = new Graphic({
        geometry: new Point({
            longitude: element.location[0],
            latitude: element.location[1],
        }),
        attributes: {
            maxCapacity: element.maxCapacity,
            availableCapacity: element.availableCapacity,
        },
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

    graphic.popupTemplate = new PopupTemplate({
        title: 'Parking Site Details',
        content: `
        Available Capacity: {availableCapacity} <br> 
        Max Capacity: {maxCapacity}
        `,
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
    center: [-2.5896, 51.4534],
    zoom: 14,
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
                graphic.symbol = generateCIMParkingSymbol()
            })
            break

        case 'complex':
            graphicsLayer.graphics.map((graphic) => {
                graphic.symbol = generateCapacitySymbol({
                    maxCapacity: graphic.attributes['maxCapacity'],
                    availableCapacity: graphic.attributes['availableCapacity'],
                })
            })
        default:
            break
    }
}
