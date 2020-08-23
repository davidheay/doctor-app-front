import React, { Component } from 'react';
class Info extends Component {
  render() {
    return (
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-info shadow-lg">
        <div className="col-md-8 px-0">
          <h1 className="display-4 font-italic"> Cuidamos de ti. <i className="fa fa-heart"></i></h1>
          <p className="lead my-3">Nuestra labor se centra en el cuidado de tu salud, mediante la tecnologia y la medicina queremos ofrecerte el mejor cuidado que puedas encontrar en la red, te daremos recomendaciones personalizadas, tendras toda tu hisotoria clinica a un solo clic.</p>
        </div>
      </div>
    )
  }
}

export default Info;
