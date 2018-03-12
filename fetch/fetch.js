import 'whatwg-fetch';
import 'es6-promise';

export function get(url){
    var result = fetch(url,{
        credentials:"include",
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    });

    return result;
}


function obj2params(obj){
    var result = "";
    var item;
    for(item in obj){
        result += '&'+ item + '=' + encodeURIComponent(obj[item]);
    }

    //因为result第一个参数是 & 所以需要去掉
    if(result){
        result = result.slice(1);
    }

    return result;
}


// 发送  请求
export function post(url,paramsObj){
    var result = fetch(url,{
        method:'POST',
        credentials:'include',
        headers:{
            'Accept':'appliaction/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:obj2params(paramsObj)
    });

    return result;
}
