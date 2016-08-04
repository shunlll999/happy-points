import React from "react";

import Footer from "./Footer";
import HomeContent from "./HomeContent";
import ResultContent from "./ResultContent";
import CSContent from "./CSContent";
import ForgetPassContent from "./ForgetPassContent";

export default class Layout extends React.Component {
  constructor() {
    super();

    const cs = document.getElementById("csDI");
    var csValue = (cs)?"OK":null;
    this.state = {
      title: "Welcome to Haapy points Waranya Pimsri",
      page:(csValue == null)?"home":cs.value,
    };
    
  }


  changePage(page, email) {
    this.setState({page:page, email:email});
  }

  render() {

  var page = this.state.page; 
  console.log(page);
  var element = <div></div>;  
  if( page == "home" ){
    element = <HomeContent changePage={this.changePage.bind(this)} emailWith={ this.state.email } />
  }else if( page == "result" ){
    element = <ResultContent emailWith={ this.state.email }/>
  }else if( page == "CS-Maneger" ){
    element = <CSContent emailWith={ 'นาย สมมติ' }/>
  }
  else if( page == "forget" ){
    element = <ForgetPassContent changePage={this.changePage.bind(this)} />
  }


    return (
      <div>
      {element}
      <Footer />
      </div>
    );
  }
}
