//分页
function testPage(pageId,funName,curPage,datalength,pageSizes){

        // ServiceCommitment_heng(curPage,total,pageSizes,city);
        supage(pageId,funName,'',curPage,datalength,pageSizes);  
  
}
 /** 
 
 * @param {String} divName 分页导航渲染到的dom对象ID 
 * @param {String} funName 点击页码需要执行后台查询数据的JS函数 
 * @param {Object} params 后台查询数据函数的参数，参数顺序就是该对象的顺序，当前页面一定要设置在里面的 
 * @param {String} total 后台返回的总记录数 
 * @param {Boolean} pageSize 每页显示的记录数，默认是10 
 */ 
 function supage(divId, funName, params, curPage, total, pageSizes){
    var output = '';  
    var pageSize = parseInt(pageSizes)>0 ? parseInt(pageSizes) : 15;  
    if(parseInt(total) == 0 || parseInt(total) == 'NaN') return;  
    var totalPage = Math.ceil(total/pageSize);

    var curPage = parseInt(curPage)>0 ? parseInt(curPage) : 1;


    // //从参数对象中解析出来各个参数  
    var param_str = '';
    // if(typeof params == 'object'){  
    //     for(o in params){  
    //         if(typeof params[o] == 'string'){  
    //            param_str += '\'' + params[o] + '\',';  
    //         }  
    //         else{  
    //            param_str += params[o] + ',';  
    //         }  
    //     }  
    //     //alert(111);  
    // }  
    //设置起始页码  

        var start = 1;  
        var end = totalPage;
    //首页控制  
    // if(curPage>1){  
    //     output += '<a href="javascript:'+funName+'(' + param_str + '1);" title="首页"><div class="hy_bmkp_pagesy">首页</div></a>'; 

    // }  
    // else  
    // {  
    //     output += '<a title="首页"><div class="hy_bmkp_pagesy">首页</div></a>';  
    // }  
    //上一页菜单控制  
    if(curPage>1){  
        
        output += '<li><a href="javascript:'+funName+'(' + (curPage-1)+','+total+','+pageSizes+');" title="上一页" >&laquo;</a></li>';  
    }  
    else{  
        output += '<li><a>&laquo;</a></li>';
    } 
    //页码展示 
        if(end > 10){
            if (curPage > 10) {
                if (curPage + 5 < end) {
                   for (i = curPage - 5; i <=curPage + 5; i++) {
                        if (i == curPage) {  
                            output += '<li class="active"><a>' + curPage + '</a></li>'; 
                        }  
                        else {  
                            output += '<li><a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');">' + i + '</a></li>';  
                        }  
                    } 
                }else{
                  for (i = curPage - 5; i <=end; i++) {
                        if (i == curPage) {  
                            output += '<li class="active"><a>' + curPage + '</a></li>'; 
                        }  
                        else {  
                            output += '<li><a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');">' + i + '</a></li>';  
                        }  
                    }   
                }
                
            }else{
               for (i = start; i <= 11; i++) {  
                    if (i == curPage) {  
                        output += '<li class="active"><a>' + curPage + '</a></li>'; 
                    }  
                    else {  
                        output += '<li><a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');">' + i + '</a></li>';  
                    }  
                } 
            }
                
        }else{
            for (i = start; i <= end; i++) {  
                if (i == curPage) {  
                    output += '<li class="active"><a>' + curPage + '</a></li>'; 
                }  
                else {  
                    output += '<li><a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');">' + i + '</a></li>';  
                }  
            }
        }



    // for (i = start; i <= end; i++) {  
    //     if (i == curPage) {  
    //         output += '<a><div class="hy_bmkp_page on">' + curPage + '</div></a>'; 
    //     }  
    //     else {  
    //         output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_bmkp_page">' + i + '</div></a>';  
    //     }  
    // }
    //下一页菜单控制  
    if(totalPage>1 && curPage<totalPage){  
        output += '<li><a title="下一页" href="javascript:'+funName+'('+ (curPage+1)+','+total+','+pageSizes+');">&raquo;</a></li>';  
    }  
    else{  
        output += '<li><a title="下一页">&raquo;</a></li>';  
    }
    //最后页控制  
    // if(curPage<totalPage){  
    //     output += '<a title="尾页" href="javascript:'+funName+'('+param_str +total + totalPage+');" ><div class="hy_bmkp_pagewy">尾页</div></a>';
    // }  
    // else{  
    //     output += '<a><div class="hy_bmkp_pagewy">尾页</div></a>';  
    // }  
      
    //output += '</div>';  
    //渲染到dom中  
    document.getElementById(divId).innerHTML = output;  
};


//分页
function testPageAdmin(pageId,funName,curPage,datalength,pageSizes){

        // ServiceCommitment_heng(curPage,total,pageSizes,city);
        
        supage(pageId,funName,'',curPage,datalength,pageSizes);  
  
}
 /** 
 
 * @param {String} divName 分页导航渲染到的dom对象ID 
 * @param {String} funName 点击页码需要执行后台查询数据的JS函数 
 * @param {Object} params 后台查询数据函数的参数，参数顺序就是该对象的顺序，当前页面一定要设置在里面的 
 * @param {String} total 后台返回的总记录数 
 * @param {Boolean} pageSize 每页显示的记录数，默认是10 
 */ 
 function supageAdmin(divId, funName, params, curPage, total, pageSizes){
    var output = '';  
    var pageSize = parseInt(pageSizes)>0 ? parseInt(pageSizes) : 15;  
    if(parseInt(total) == 0 || parseInt(total) == 'NaN') return;  
    var totalPage = Math.ceil(total/pageSize);

    var curPage = parseInt(curPage)>0 ? parseInt(curPage) : 1;


    // //从参数对象中解析出来各个参数  
    var param_str = '';
    // if(typeof params == 'object'){  
    //     for(o in params){  
    //         if(typeof params[o] == 'string'){  
    //            param_str += '\'' + params[o] + '\',';  
    //         }  
    //         else{  
    //            param_str += params[o] + ',';  
    //         }  
    //     }  
    //     //alert(111);  
    // }  
    //设置起始页码  

        var start = 1;  
        var end = totalPage;
// <a href="#"><div class="hy_content_page">
//                         <
//                     </div></a>
//                     <div class="hy_content_page on">
//                         1
//                     </div>
//                     <a href="#"><div class="hy_content_page">
//                         2
//                     </div></a>
//                     <a href="#"><div class="hy_content_page">
//                         3
//                     </div></a>
//                     <a href="#"><div class="hy_content_page">
//                         4
//                     </div></a>
//                     <a href="#"><div class="hy_content_page">
//                         >
//                     </div></a>
    //首页控制  
    // if(curPage>1){  
    //     output += '<a href="javascript:'+funName+'(' + param_str + '1);" title="首页"><div class="hy_bmkp_pagesy">首页</div></a>'; 

    // }  
    // else  
    // {  
    //     output += '<a title="首页"><div class="hy_bmkp_pagesy">首页</div></a>';  
    // }  
    //上一页菜单控制  
    if(curPage>1){  
        
        output += '<a href="javascript:'+funName+'(' + (curPage-1)+','+total+','+pageSizes+');" title="上一页" ><div class="hy_content_page">  <</div></a>';  
    }  
    else{  
        output += '<a title="上一页" ><div class="hy_content_page">  <</div></a>';
    } 
    //页码展示 
        if(end > 10){
            if (curPage > 10) {
                if (curPage + 5 < end) {
                   for (i = curPage - 5; i <=curPage + 5; i++) {
                        if (i == curPage) {  
                            output += '<a><div class="hy_content_page on">' + curPage + '</div></a>'; 
                        }  
                        else {  
                            output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_content_page">' + i + '</div></a>';  
                        }  
                    } 
                }else{
                  for (i = curPage - 5; i <=end; i++) {
                        if (i == curPage) {  
                            output += '<a><div class="hy_content_page on">' + curPage + '</div></a>'; 
                        }  
                        else {  
                            output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_content_page">' + i + '</div></a>';  
                        }  
                    }   
                }
                
            }else{
               for (i = start; i <= 11; i++) {  
                    if (i == curPage) {  
                        output += '<a><div class="hy_content_page on">' + curPage + '</div></a>'; 
                    }  
                    else {  
                        output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_content_page">' + i + '</div></a>';  
                    }  
                } 
            }
                
        }else{
            for (i = start; i <= end; i++) {  
                if (i == curPage) {  
                    output += '<a><div class="hy_content_page on">' + curPage + '</div></a>'; 
                }  
                else {  
                    output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_content_page">' + i + '</div></a>';  
                }  
            }
        }



    // for (i = start; i <= end; i++) {  
    //     if (i == curPage) {  
    //         output += '<a><div class="hy_bmkp_page on">' + curPage + '</div></a>'; 
    //     }  
    //     else {  
    //         output += '<a href="javascript:'+funName+'(' + i + ','+total+','+pageSizes+');"><div class="hy_bmkp_page">' + i + '</div></a>';  
    //     }  
    // }
    //下一页菜单控制  
    if(totalPage>1 && curPage<totalPage){  
        output += '<a title="下一页" href="javascript:'+funName+'('+ (curPage+1)+','+total+','+pageSizes+');"><div class="hy_content_page""> ></div></a>';  
    }  
    else{  
        output += '<a title="下一页"><div class="hy_content_page"> ></div></a>';  
    }
    //最后页控制  
    // if(curPage<totalPage){  
    //     output += '<a title="尾页" href="javascript:'+funName+'('+param_str +total + totalPage+');" ><div class="hy_bmkp_pagewy">尾页</div></a>';
    // }  
    // else{  
    //     output += '<a><div class="hy_bmkp_pagewy">尾页</div></a>';  
    // }  
      
    //output += '</div>';  
    //渲染到dom中  
    document.getElementById(divId).innerHTML = output;  
};