'use strict'
import { default as printMe} from './print';
//require('./style.scss');

class app{
    static component() {
        var _ = require('lodash');
        var element = document.createElement('div');
        var btn = document.createElement('button');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.setAttribute('class','hello');
        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = printMe;

        element.appendChild(btn);

        return element;
    }
}

document.body.appendChild(app.component());