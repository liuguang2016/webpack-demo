import _ from 'lodash';
import printMe from './print.js';

function component(){
    let element = document.createElement('div');
    let btn=document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['hello','webpack'],' ');
    btn.innerHTML = '点击这里，然后查看 console.log!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}