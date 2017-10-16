'use strict'
import { default as printMe} from './print';
//require('./style.scss');
class app{
    static component() {
        var _ = require('lodash');
        var element = document.createElement('div');
        var btn = document.createElement('button');
        element.innerHTML =
 `<div class="row">
    <div class="col grid-example s12"><p>s12</p></div>
    <div class="col grid-example s12 m4 l2 blue lighten-1"><p>s12 m4</p></div>
    <div class="col grid-example s12 m4 l8 red lighten-1"><p>s12 m4</p></div>
    <div class="col grid-example s12 m4 l2 blue lighten-1"><p>s12 m4</p></div>
    <div class="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
    <div class="col grid-example s12 m6 l3"><p>s12 m6 l3</p></div>
  </div>
  <div class="row">
    <div class="col s12">
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    </div>
  </div>
  <div class="row">
    <div class="col s12">
        <div class="fixed-action-btn horizontal">
          <a class="btn-floating btn-large red">
            <i class="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
            <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
          </ul>
        </div>
    </div>
  </div>
`

        //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        //element.setAttribute('class','hello');
        //btn.innerHTML = 'Click me and check the console!';
        //btn.onclick = printMe;

        //element.appendChild(btn);

        return element;
    }
}

document.body.appendChild(app.component());