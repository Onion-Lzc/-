// 发送请求:


class Ajax {
    xhr = null
    method = 'GET'
    url = ''
    constructor() {}
    do() {
        this.xhr.open(this.method, this.url);
        // this.xhr.responseType  = 'json'
        this.xhr.send();
    }
    get(url,opt) {
        this.method = "GET"
        this.url = url 
        if(opt){
            this.url += '?'
        }
        for(let i in opt){
            this.url += i + '=' + opt[i] + '&'
        }
        if(opt){
            this.url = this.url.substring(0,this.url.length-1)
        }
        this.xhr = new XMLHttpRequest();
        this.do()
        return new Promise((success, fail) => {
            this.xhr.onreadystatechange = () => { // 状态发生变化时，函数被回调
                if (this.xhr.readyState === 4) { // 成功完成
                    // 判断响应结果:

                    if (this.xhr.status === 200) {
                        // 成功，通过responseText拿到响应的文本:
                         success({body:JSON.parse(this.xhr.responseText)});

                    } else {
                        // 失败，根据响应码判断失败原因:
                         fail(this.xhr.status);
                    }
                } else {
                    // HTTP请求还在继续...
                }
            }
        })
    }

}

export default Ajax