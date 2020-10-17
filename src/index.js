import './style.css'
import './favicon.ico'

import { div, TextInput, CheckBox } from '@easychessanimations/foo'

let app = div().fl().flcol().ai("center").jc("space-around").w(200).h(400).bc("#070")
            .a(TextInput({id: "foo"}),CheckBox({id:"bar"}),[1,2,3,4,5].map(i=>div().pad(10).w(100).h(20).bc("#007").c("#fff").tac().html(`div ${i}`)))

document.body.appendChild(app.e)
