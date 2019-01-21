export default class Letterfirst extends Laya.Scene {
    constructor() {
		super();
		// 引入图片
        let asset = [
            {
                url: [
					"https://img.guoanfamily.com/yuandan19/biejing.m4a"
                ],
                type: Laya.Loader.SOUND
            }
        ];
		Laya.loader.load(asset, laya.utils.Handler.create(this, this.InitializationFn));
    }
    onEnable(){
        
        let onShareComplete = function(){
			(function () {
				var wxshare = new Laya.HttpRequest();
				wxshare.once(Laya.Event.COMPLETE, this, processHandler);
                wxshare.once(Laya.Event.ERROR, this, function () { });
				wxshare.send('https://www.guoanfamily.com/openweixin/jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href), {}, 'post', 'json', ["Content-Type", "application/json;charset=UTF-8"]);
				function processHandler(response){  
					wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: response.appid, // 必填，公众号的唯一标识
						timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
						nonceStr: response.noncestr, // 必填，生成签名的随机串
						signature: response.signature, // 必填，签名，见附录1
						jsApiList: [
							'onMenuShareAppMessage',
							'onMenuShareTimeline'
						] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					wx.ready(function () {
						
						// 2. 分享接口
						// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
						wx.onMenuShareAppMessage({
							title: '连连看互动游戏', //标题
							desc: "迎元旦，连连看", //描述
                            link: "https://mt.guoanfamily.com/xiaoxiaole", //连接地址指打开分享时页面地址                        
							imgUrl: "https://img.guoanfamily.com/yuandan19/firstP.jpg", //图片
							trigger: function (res) {
								// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
							},
							success: function (res) { },
							cancel: function (res) { },
							fail: function (res) { }
						});
						//分享到朋友圈
						wx.onMenuShareTimeline({
							title: '迎元旦，连连看', //标题
							desc: "迎元旦，连连看", //描述
							link: "https://mt.guoanfamily.com/xiaoxiaole", //连接地址指打开分享时页面地址
							imgUrl: "https://img.guoanfamily.com/yuandan19/firstP.jpg", //图片
							trigger: function (res) {
								// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
							},
							success: function (res) { },
							cancel: function (res) { },
							fail: function (res) { }
						});
						wx.error(function (res) { 
                        });
					})
				}
			})();	



		}
		onShareComplete();
        this.first.on(laya.events.Event.MOUSE_UP,this,this.firstCkick)
    }
    firstCkick(){
        // document.querySelector("#music_play_filter").pause();  
        document.querySelector("#bgMusicBtn").classList.add("circle")
        document.querySelector("#bgMusicBtn").classList.add("music")
		let coin = "https://img.guoanfamily.com/yuandan19/biejing.m4a";
		window.SoundManager = laya.media.SoundManager
		window.SoundManager.playMusic(coin);
		
        document.querySelector("#bgMusicBtn").onclick = function(){
			if(this.classList.contains("music")){
				window.SoundManager.stopMusic()	
				this.classList.remove("music")
			}else{
				window.SoundManager.playMusic(coin)
				this.classList.add("music")
			}   
		}
		Laya.Scene.open("Lettersecond.scene");
		this.removeSelf();
	}
	InitializationFn(){

	}
	onComplete(e){
	}
}