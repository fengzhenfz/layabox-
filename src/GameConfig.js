/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Letterfirst from "./start/Letterfirst"
import LetterNum from "./start/LetterNum"
import Lettersecond from "./start/Lettersecond"
import Loading from "./start/Loading"
import peopleList from "./start/peopleList"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("start/Letterfirst.js",Letterfirst);
		reg("start/LetterNum.js",LetterNum);
		reg("start/Lettersecond.js",Lettersecond);
		reg("start/Loading.js",Loading);
		reg("start/peopleList.js",peopleList);
    }
}
GameConfig.width = 640;
GameConfig.height = 1136;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "Loading.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();