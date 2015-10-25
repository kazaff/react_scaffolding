import Api from "./api";

const ApiCalls = {

  authenticate ({email, password, verification, key}) {
    return Api.post({
      path: "/authenticate.php",
      body: {email: email, password: password, verification: verification, key: key},
      ignoreAuthFailure: true,
      parse: function(res) {  //这里可以进行请求结果的预处理
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }
        if (res.body.data.session && res.body.data.id) {
          this.done(res.body.data);
        }
      }
    });
  },

  faceChange ({id, face}) {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("face", face);

    return Api.post({
      path: "/faceChange.php",
      body: formData,
      ignoreAuthFailure: true,
      parse: function(res) {  //这里可以进行请求结果的预处理
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }
        if (res.body.data.face) {
          this.done(res.body.data);
        }
      }
    });
  },

  passwordChange ({oldPsw, newPsw}){
    return Api.put({
      path: "/passwordChange.php",
      body: {oldPsw: oldPsw, newPsw: newPsw},
      ignoreAuthFailure: true,
      parse: function(res) {  //这里可以进行请求结果的预处理
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }else{
          this.done();
        }
      }
    });
  },

  verification () {
    return Api.get({
      path: "/verification.php",
      ignoreAuthFailure: true,
      parse: function(res) {
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }

        if (res.body.data.code && res.body.data.key) {
          this.done(res.body.data);
        }
      }
    });
  },

  usersList ({page, size, keyword}) {
    return Api.get({
      path: "/usersList.php",
      query: {page: page, size: size, keyword: keyword},
      parse: function(res) {
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }

        if (res.body.data) {
          this.done({total: res.body.total, usrs: res.body.data});
        }
      }
    });
  },

  userInfo (id) {
    return Api.get({
      path: "/userInfo.php",
      query: {id: id},
      parse: function(res) {
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }

        if (res.body.data) {
          this.done(res.body.data);
        }
      }
    });
  },

  userStatus (id, status){
    return Api.put({
      path: "/userStatus.php",
      body: {id: id, status: status},
      ignoreAuthFailure: true,
      parse: function(res) {  //这里可以进行请求结果的预处理
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }else{
          this.done({id, status});
        }
      }
    });
  },

  userDelete (id) {
    return Api.delete({
      path: "/userStatus.php",
      query: {id: id},
      ignoreAuthFailure: true,
      parse: function(res) {  //这里可以进行请求结果的预处理
        if (!res.body.status) {
          this.fail({errorMessage: res.body.msg});
        }else{
          this.done({id});
        }
      }
    });
  }

}


export default ApiCalls;
