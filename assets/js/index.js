var BASE_URL = 'http://' + window.location.host;
var API_URL = BASE_URL + '/nrii/api';

var MANAGER_LEVEL1='1';
var MANAGER_LEVEL2='2';
var MANAGER_LEVEL3='3';
var MANAGER_LEVEL4='4';

var MANAGER = 'manager';
var TOKEN = 'token';

var localStorage = window.localStorage;

var LocalStorage = {

    /**
    * 设置 localStorage
    * @param {string} key 键
    * @param {Object} value 值
    */
    set: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    /**
    * 获取 localStorage
    * @param {string} key 键
    * @return {Object}
    */
    get: function(key) {
        return JSON.parse(localStorage.getItem(key)) || null
    },

    /**
    * 移除 localStorage
    * @param {string} key 键
    */
    remove: function(key) {
        localStorage.removeItem(key)
    }
}


var AuthUtils = {

    login: function(manager,token) {
        LocalStorage.set(MANAGER,manager);
        LocalStorage.set(TOKEN,token);
    },

    logout: function() {
        LocalStorage.remove(MANAGER);
        LocalStorage.remove(TOKEN);
    },

    get: function(){
        return {
          [MANAGER]: LocalStorage.get(MANAGER),
          [TOKEN]: LocalStorage.get(TOKEN)
        }
    },

    getManager: function(){
        return LocalStorage.get(MANAGER);
    },

    getToken: function(){
        return LocalStorage.get(TOKEN);
    },
   /**
    * 获取 Headers
    * @return {Object}
    */
    getHeaders () {
        return {
            'Authorization': 'Basic ' + window.btoa(LocalStorage.get(TOKEN))
        }
    },

    /**
     * 是否已登录
     * @return {boolean}
     */
    loggedIn: function(){
        return !!LocalStorage.get(MANAGER) && !!LocalStorage.get(TOKEN)
    }
}

var CommonUtils = {

    sendAjax: function(type,url,data,success,error){
        $.ajax({
            type: type,
            url: url,
            data:data,
            dataType: 'json',
            headers:AuthUtils.getHeaders(),
            success: success,
            error: error
        });
    },

    GetQueryString: function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        console.log(window.location)
        if(r!=null)return  unescape(r[2]); return null;
    },

    GridManage: function(currTopHtml,currLeftHtml) {
        var data = AuthUtils.get().manager;
        var navTopHtml        = '';
        var navLeftHtml       = '';
        $.each(data.resources,function(index,array){
                var id = array["id"];
                var rsname = array["rsname"];
                var rscode = array["rscode"];
                var rsaddress = array["rsaddress"];
                var children = array["children"];
              
                if(currTopHtml == rscode){
                    navTopHtml +='<li class="active"><a href="'+rsaddress+'" class="waves-effect waves-dark"><i ></i>'+rsname+'</a></li>';
                    if(children.length>0){
                       $.each(children,function(index,array){
                        var id = array["id"];
                        var rsname = array["rsname"];
                        var rscode = array["rscode"];
                        var rsaddress = array["rsaddress"];
                        var rsicon = array["rsicon"];
                        if(currLeftHtml == rscode){
                          navLeftHtml +='<li class="active"><a href="'+rsaddress+'" class="waves-effect waves-dark"><i class="'+rsicon+'" ></i>'+rsname+'</a></li>';
                        }else{
                            navLeftHtml +='<li ><a href="'+rsaddress+'" class="waves-effect waves-dark"><i class="'+rsicon+'"></i>'+rsname+'</a></li>';
                        }
                       })
                    }
                    
                }else{
                    navTopHtml +='<li ><a href="'+rsaddress+'" class="waves-effect waves-dark"><i ></i>'+rsname+'</a></li>';
                }
                
           })

         $("#navTop").append(navTopHtml);
         $("#main-menu").append(navLeftHtml);
    }
}




