import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
 
  render() {
    return (
      /*
      <div>
        <Title title={this.props.title} />
        <div class="col-lg-12">
          <span>Please enter your email : </span>
          <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
      */
      <div>
        <div class="jumbotron jumboImage">
          <div id="company-logo"></div>
          <div class="container"><h1><b>Happy +points</b></h1>
          <h6><p >HappyFresh is the first and fastest-growing 
          online <br/>grocery platform in Southeast Asia.</p></h6>
        </div>
        
        </div>
      </div>

    );
  }
}
