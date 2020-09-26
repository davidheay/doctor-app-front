import React, { Component } from "react";
import "./Recomendaciones.css";
import RelatedItem from "./RelatedItem/RelatedItem";
import Section from "./Section/Section";
import axios from "axios";

class Recomendaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      imageUrl: "",
      sections: [],
      relatedItems: [],
      loading: true
    }
  }
  componentDidMount() {
    this.getData('30544')
  }
  getData = (id) => {
    this.setState({ loading: true });
    axios.get('https://health.gov/myhealthfinder/api/v3/topicsearch.json', {
      params: {
        TopicId: id,
        Lang: 'es'
      }
    }).then(res => {
      let data = res.data.Result.Resources.Resource[0];
      console.log(data.RelatedItems.RelatedItem.slice(0, 4));
      this.setState({
        title: data.Title,
        imageUrl: data.ImageUrl,
        sections: data.Sections.section,
        relatedItems: data.RelatedItems.RelatedItem.slice(0, 4),
        loading: false
      })
    });
  }
  render() {
    return (
      <>
        {this.state.loading ? <div className="loading"></div> : ''}
        <div className="row text-center">
          <div className="col-12 ">
            <h3>{this.state.title}</h3>
          </div>
          <div className="col-12 mt-2">
            <img src={this.state.imageUrl} className="w-75" alt="imagen de contenido" />
          </div>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <h3> Un poco de informacion... </h3>
        </div>
        <div className="row mt-4 no-gutters">
          {this.state.sections.slice(0, 2).map(section => <Section content={section.Content} col={this.state.sections.length === 1 ? '12' : '6'} />)}
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <h3> Talvez te interese </h3>
        </div>
        <div className="row mt-4">
          {this.state.relatedItems.map((related, index) => <RelatedItem col={12 / this.state.relatedItems.length} title={related.Title} index={index} onClick={() => { this.getData(related.Id) }} />)}
        </div>
        <div className="row mt-4">
          {this.state.sections.slice(2, this.state.sections.length).map(section => <Section content={section.Content} col={'6'} />)}
        </div>

      </>
    )
  }
}

export default Recomendaciones;
