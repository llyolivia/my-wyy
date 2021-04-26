import React  from 'react'; //创建组件,虚拟dom,生命周期
import ReactDom from 'react-dom'; //创建好的组件、虚拟dom放到页面上展示

const htmlData = React.createElement('div',{id:'mydiv', title:'我的div'},'这是一个div');
const appdiv = React.createElement('div', null, '这是一个app',htmlData)

ReactDom.render(appdiv,document.getElementById('app'));