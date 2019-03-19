import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';

function component(){
    let element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['hello','webpack'],' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src=Icon;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());