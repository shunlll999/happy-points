import React from "react";



export default class ForgetPassContent extends React.Component {

    

    render() {

        return (
        <home>
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-success">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-off" aria-hidden="true"></span> Please Enter your email
                    </div>
                    <div class="panel-body">
                        <from role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input id="email" class="form-control" placeholder="Email" name='username' type="text" autofocus/>
                                </div>
                                <a id="loginBtn" class="btn btn-sx btn-success btn-block" onClick={this.handleResetPass.bind(this)} >Reset password</a>
                                <br/>
                            </fieldset>
                        </from>
                    </div>
                </div>
            </div>
             <div class="col-md-4 col-md-offset-4">
                <div class="well text-center">
                      password ใหม่จะส่งไปที่ email ของลูกค้านะคะ
                </div>
             </div>
        </home>
        );
    }

    handleResetPass(e){

        var email = $("#email").val();
        var changePage = this.props.changePage;
        $.ajax({
            type:"POST",
            url:"https://api.happyfresh.com/api/password/reset",
            data:{ email:email },
        }).done(function(data){
            console.log(data);
            changePage("home", email);
        }).fail(function(failData){
            console.log(failData);
           changePage("home", email);
        });

    }

}
