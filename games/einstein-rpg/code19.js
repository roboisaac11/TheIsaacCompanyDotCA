gdjs._51Code = {};
gdjs._51Code.GDText_9595BackgroundObjects1= [];
gdjs._51Code.GDText_9595BackgroundObjects2= [];
gdjs._51Code.GDNewTextObjects1= [];
gdjs._51Code.GDNewTextObjects2= [];
gdjs._51Code.GDHouseObjects1= [];
gdjs._51Code.GDHouseObjects2= [];
gdjs._51Code.GDBard4Objects1= [];
gdjs._51Code.GDBard4Objects2= [];
gdjs._51Code.GDPicObjects1= [];
gdjs._51Code.GDPicObjects2= [];
gdjs._51Code.GDNewTiledSpriteObjects1= [];
gdjs._51Code.GDNewTiledSpriteObjects2= [];
gdjs._51Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs._51Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs._51Code.GDEnterHouseObjects1= [];
gdjs._51Code.GDEnterHouseObjects2= [];
gdjs._51Code.GDNewTiledSprite2Objects1= [];
gdjs._51Code.GDNewTiledSprite2Objects2= [];
gdjs._51Code.GDwatchObjects1= [];
gdjs._51Code.GDwatchObjects2= [];
gdjs._51Code.GDdoneObjects1= [];
gdjs._51Code.GDdoneObjects2= [];
gdjs._51Code.GDPathObjects1= [];
gdjs._51Code.GDPathObjects2= [];
gdjs._51Code.GDFloorObjects1= [];
gdjs._51Code.GDFloorObjects2= [];
gdjs._51Code.GDBard6Objects1= [];
gdjs._51Code.GDBard6Objects2= [];
gdjs._51Code.GDNPCObjects1= [];
gdjs._51Code.GDNPCObjects2= [];
gdjs._51Code.GDBarrierObjects1= [];
gdjs._51Code.GDBarrierObjects2= [];
gdjs._51Code.GDNPCblockObjects1= [];
gdjs._51Code.GDNPCblockObjects2= [];
gdjs._51Code.GDNewSpriteObjects1= [];
gdjs._51Code.GDNewSpriteObjects2= [];
gdjs._51Code.GDbushObjects1= [];
gdjs._51Code.GDbushObjects2= [];
gdjs._51Code.GDGrassObjects1= [];
gdjs._51Code.GDGrassObjects2= [];
gdjs._51Code.GDGrass_9595NightObjects1= [];
gdjs._51Code.GDGrass_9595NightObjects2= [];
gdjs._51Code.GDStoneObjects1= [];
gdjs._51Code.GDStoneObjects2= [];
gdjs._51Code.GDWhiteObjects1= [];
gdjs._51Code.GDWhiteObjects2= [];
gdjs._51Code.GDBlackObjects1= [];
gdjs._51Code.GDBlackObjects2= [];
gdjs._51Code.GDFence_9595longObjects1= [];
gdjs._51Code.GDFence_9595longObjects2= [];
gdjs._51Code.GDFence_9595highObjects1= [];
gdjs._51Code.GDFence_9595highObjects2= [];
gdjs._51Code.GDText_9595BackgroundObjects1= [];
gdjs._51Code.GDText_9595BackgroundObjects2= [];
gdjs._51Code.GDdoorObjects1= [];
gdjs._51Code.GDdoorObjects2= [];


gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDBlackObjects1Objects = Hashtable.newFrom({"Black": gdjs._51Code.GDBlackObjects1});
gdjs._51Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(12), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 700, 400, true);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(12), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Path"), gdjs._51Code.GDPathObjects1);
{for(var i = 0, len = gdjs._51Code.GDPathObjects1.length ;i < len;++i) {
    gdjs._51Code.GDPathObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs._51Code.GDBlackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDBlackObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDBlackObjects1[k] = gdjs._51Code.GDBlackObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDBlackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDBlackObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}{for(var i = 0, len = gdjs._51Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBlackObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDBlackObjects1Objects, 100, 200, "");
}{for(var i = 0, len = gdjs._51Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBlackObjects1[i].getBehavior("Resizable").setHeight(5000);
}
}{for(var i = 0, len = gdjs._51Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBlackObjects1[i].getBehavior("Resizable").setWidth(5000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs._51Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._51Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51Code.GDNewTextObjects1[i].setString("Hermann was forced to move, because his buisness tanked.");
}
}{for(var i = 0, len = gdjs._51Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs._51Code.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (1));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs._51Code.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._51Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._51Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._51Code.GDNewTextObjects1[i].setString("He moved his family to Munich, to start an electrical-enginering buisness with his brother, Jakob");
}
}{for(var i = 0, len = gdjs._51Code.GDBlackObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs._51Code.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.3));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "8", true);
}}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDText_9595BackgroundObjects1.length = 0;
gdjs._51Code.GDText_9595BackgroundObjects2.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDHouseObjects1.length = 0;
gdjs._51Code.GDHouseObjects2.length = 0;
gdjs._51Code.GDBard4Objects1.length = 0;
gdjs._51Code.GDBard4Objects2.length = 0;
gdjs._51Code.GDPicObjects1.length = 0;
gdjs._51Code.GDPicObjects2.length = 0;
gdjs._51Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._51Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._51Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._51Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs._51Code.GDEnterHouseObjects1.length = 0;
gdjs._51Code.GDEnterHouseObjects2.length = 0;
gdjs._51Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._51Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._51Code.GDwatchObjects1.length = 0;
gdjs._51Code.GDwatchObjects2.length = 0;
gdjs._51Code.GDdoneObjects1.length = 0;
gdjs._51Code.GDdoneObjects2.length = 0;
gdjs._51Code.GDPathObjects1.length = 0;
gdjs._51Code.GDPathObjects2.length = 0;
gdjs._51Code.GDFloorObjects1.length = 0;
gdjs._51Code.GDFloorObjects2.length = 0;
gdjs._51Code.GDBard6Objects1.length = 0;
gdjs._51Code.GDBard6Objects2.length = 0;
gdjs._51Code.GDNPCObjects1.length = 0;
gdjs._51Code.GDNPCObjects2.length = 0;
gdjs._51Code.GDBarrierObjects1.length = 0;
gdjs._51Code.GDBarrierObjects2.length = 0;
gdjs._51Code.GDNPCblockObjects1.length = 0;
gdjs._51Code.GDNPCblockObjects2.length = 0;
gdjs._51Code.GDNewSpriteObjects1.length = 0;
gdjs._51Code.GDNewSpriteObjects2.length = 0;
gdjs._51Code.GDbushObjects1.length = 0;
gdjs._51Code.GDbushObjects2.length = 0;
gdjs._51Code.GDGrassObjects1.length = 0;
gdjs._51Code.GDGrassObjects2.length = 0;
gdjs._51Code.GDGrass_9595NightObjects1.length = 0;
gdjs._51Code.GDGrass_9595NightObjects2.length = 0;
gdjs._51Code.GDStoneObjects1.length = 0;
gdjs._51Code.GDStoneObjects2.length = 0;
gdjs._51Code.GDWhiteObjects1.length = 0;
gdjs._51Code.GDWhiteObjects2.length = 0;
gdjs._51Code.GDBlackObjects1.length = 0;
gdjs._51Code.GDBlackObjects2.length = 0;
gdjs._51Code.GDFence_9595longObjects1.length = 0;
gdjs._51Code.GDFence_9595longObjects2.length = 0;
gdjs._51Code.GDFence_9595highObjects1.length = 0;
gdjs._51Code.GDFence_9595highObjects2.length = 0;
gdjs._51Code.GDText_9595BackgroundObjects1.length = 0;
gdjs._51Code.GDText_9595BackgroundObjects2.length = 0;
gdjs._51Code.GDdoorObjects1.length = 0;
gdjs._51Code.GDdoorObjects2.length = 0;

gdjs._51Code.eventsList0(runtimeScene);

return;

}

gdjs['_51Code'] = gdjs._51Code;
