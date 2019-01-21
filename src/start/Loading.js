export default class Loading extends Laya.Scene {
    constructor() {
        super();
        let asset =[
            {
                url: [
                    "comp/001.png",
                    "comp/002.png",
                    "comp/003.png",
                    "comp/004.png",
                    "comp/005.png",
                    "comp/006.png",
                    "comp/007.png",
                    "comp/008.png",
                    "comp/009.png",
                    "comp/sandian.png",
                    "comp/p0.png",
                    "comp/p1.png",
                    "comp/p2.png",
                    "comp/p3.png",
                    "comp/p4.png",
                    "comp/p5.png",
                    "comp/success.png",
                    "comp/failed.png"
                ],
                type: Laya.Loader.IMAGE
            },
            {
               
                url: [
                    "comp/lining.mp3",
                    'https://img.guoanfamily.com/yuandan19/success.mp3',
                    "https://img.guoanfamily.com/yuandan19/fail.mp3",
                    "https://img.guoanfamily.com/yuandan19/biejing.m4a"
                ],
                type: Laya.Loader.SOUND
            }
        ];
         // 加载图片。
        Laya.loader.load(asset, laya.utils.Handler.create(this, this.InitializationFn),laya.utils.Handler.create(this, this.onLoading, null, false),Laya.Loader);
       // 侦听加载失败
		Laya.loader.on(Event.ERROR, this, this.onError);
    }
    InitializationFn(){

    }
    // 加载进度侦听器
	onLoading(progress){
        
        let num =  Math.floor(progress*100)
        this.Ltext.text = `${num}%`;
        
        this.Lbar.value =progress
        if(progress==1){
           let timer01 = setTimeout(()=>{
               clearTimeout(timer01)
            Laya.Scene.open("Letterfirst.scene")
            
           },50)
        }
    }
    // 加载失败
    onError(err){
        console.log("加载失败: " + err);
    }

   
}