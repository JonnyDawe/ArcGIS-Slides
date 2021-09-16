import './styles/main.css'

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'

;(Reveal as RevealStatic)
    .initialize({
        center: true,
        transition: 'slide',
        width: '85%',
        height: '85%',
        margin: 0.04,

        plugins: [Markdown, Highlight],
    })
    .then(() => {
        let playButtons = document.querySelectorAll('[data-play-frame]')
        let inputs = document.querySelectorAll("[data-input-frame]")

        for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].addEventListener(
                'click',
                (function (frameName: string, argument:string, classList:DOMTokenList) {
                    return function (event: UIEvent) {
                        event.stopPropagation();
                        event.preventDefault();
                        classList.add("clicked");
                        
                        window.frames[frameName].contentWindow.postMessage(
                            { play: true, argument: argument },
                            '*'
                        )
                    }
                })(
                    playButtons[i].getAttribute('data-play-frame'),
                    playButtons[i].getAttribute('data-play-argument'),
                    playButtons[i].classList
                )
            )

            playButtons[i].addEventListener('mousedown', function (event) {
                event.preventDefault()
                event.stopPropagation()
            })
        }


        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener(
                'change',
                (function (frameName: string, inputType:string) {
                    return function (event: InputEvent) {
                        event.stopPropagation();
                        event.preventDefault();
                        window.frames[frameName].contentWindow.postMessage(
                            { input: true, inputType ,argument: (event.target as HTMLInputElement).value },
                            '*'
                        )
                    }
                })(
                    inputs[i].getAttribute('data-input-frame'),
                    inputs[i].getAttribute('data-input-type')
                )
            )
        }
    })
