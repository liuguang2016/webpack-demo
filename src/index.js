import {cube} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component(){
    let element = document.createElement('pre');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = ['hello webpack','5 cubed is equal to ' + cube(5)].join('\n\n');

    return element; 
}

document.body.appendChild(component());