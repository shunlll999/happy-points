import React from "react";


export default class CSContent extends React.Component {
  render() {

    const email = (this.props.emailWith != undefined)?this.props.emailWith:"Bye";
    console.log(email);

    return (
      <result>
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
              <div id="company-logoBlack"></div>
          </div>
        </nav>
        <div class="container">
          <div class="jumbotron jumboImage">
              <div class="container"><h1><b>Happy +points สะสม ของ </b></h1>
               <div class="col-sm-12 " >
                  <div class="col-sm-4 text-right light-color"><h4>คุณ</h4></div>
                  <div class="col-sm-4 fontCloudbold-non-align"><input type="text" class="form-control text-center" /></div>
                  <div class="col-sm-4 light-color"><button class="btn btn-success bangna_newregular"><b>Find</b></button></div>
              </div>
              <div class="col-sm-12 " >
                  <div class="col-sm-4 text-right light-color"><h4>คือ</h4></div>
                  <div class="col-sm-4 fontCloudbold-non-align"><input type="text" class="form-control text-center" /></div>
                  <div class="col-sm-4 light-color"><h4>คะแนน</h4></div>
              </div>
              <div class="col-sm-12" >
                  <div class="col-sm-4 text-right light-color"><h4>อยากใช้</h4></div>
                  <div class="col-sm-4 fontCloudbold-non-align"><input type="text" class="form-control text-center"/></div>
                  <div class="col-sm-4 light-color"><h4>คะแนน</h4></div>
              </div>
              <div class="col-sm-12" >
                  <div class="col-sm-4 text-right light-color"><h4>คงเหลือ</h4></div>
                  <div class="col-sm-4 fontCloudbold-non-align"><input type="text" class="form-control text-center"/></div>
                  <div class="col-sm-4 light-color"><h4>คะแนน</h4></div>
              </div>
            </div> 
          </div>
        </div>
        <br/>
        <hr/>
        <div class="container">
            <button class="btn-success pull-right btn-xlarge">Redem points</button>
        </div>
        <hr/>
        <br/>
        <div class="container">
            <div class="well my-promo">
              <h1 class="bangna_newregular"><b>+Promotion of this week</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <img src="./images/Shopper_shot01-Snack.jpg" />
            </div>
        </div>
        <br/>
        <hr/>
      </result>
    );
  }
}
