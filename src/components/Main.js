require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//获取图片数据
var imagesDatas = require('../data/imagesDatas.json');
let yeomanImage = require('../images/yeoman.png');

imagesDatas = (function getImgUrl(imagesDatasArr){

	for(var i = 0, j = imagesDatasArr.length; i < j; i++){
		var singleData = imagesDatasArr[i];
		singleData.imageUrl = require('../images/'+singleData.fileName);
		imagesDatasArr[i] = singleData;

	}

	return imagesDatasArr;
})(imagesDatas);
/*imagesDatas = getImgUrl(imagesDatas);*/
var ImgFigure = React.createClass({
  render: function () {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageUrl}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.desc}</h2>
        </figcaption>
      </figure>
    )
  }
});

var AppComponent = React.createClass({
  render:function () {
    var units = [], imgFigures = [];
    imagesDatas.forEach(function (value,index) {
      imgFigures.push(<ImgFigure data={value} key={index}/>);
    })

    return (
      <section className = "stage">
        <section className="img">
          {imgFigures}
        </section>
        <nav className="control-nav"></nav>
      </section>
    );
  }
});

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

AppComponent.defaultProps = {
};

export default AppComponent;
