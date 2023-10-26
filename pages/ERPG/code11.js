gdjs._500Code = {};
gdjs._500Code.GDTableObjects1= [];
gdjs._500Code.GDTableObjects2= [];
gdjs._500Code.GDTableObjects3= [];
gdjs._500Code.GDtextObjects1= [];
gdjs._500Code.GDtextObjects2= [];
gdjs._500Code.GDtextObjects3= [];
gdjs._500Code.GDStartTextObjects1= [];
gdjs._500Code.GDStartTextObjects2= [];
gdjs._500Code.GDStartTextObjects3= [];
gdjs._500Code.GDBard4Objects1= [];
gdjs._500Code.GDBard4Objects2= [];
gdjs._500Code.GDBard4Objects3= [];
gdjs._500Code.GDPicObjects1= [];
gdjs._500Code.GDPicObjects2= [];
gdjs._500Code.GDPicObjects3= [];
gdjs._500Code.GDNewTiledSpriteObjects1= [];
gdjs._500Code.GDNewTiledSpriteObjects2= [];
gdjs._500Code.GDNewTiledSpriteObjects3= [];
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects3= [];
gdjs._500Code.GDEnterHouseObjects1= [];
gdjs._500Code.GDEnterHouseObjects2= [];
gdjs._500Code.GDEnterHouseObjects3= [];
gdjs._500Code.GDNewTiledSprite2Objects1= [];
gdjs._500Code.GDNewTiledSprite2Objects2= [];
gdjs._500Code.GDNewTiledSprite2Objects3= [];
gdjs._500Code.GDwatchObjects1= [];
gdjs._500Code.GDwatchObjects2= [];
gdjs._500Code.GDwatchObjects3= [];
gdjs._500Code.GDdoneObjects1= [];
gdjs._500Code.GDdoneObjects2= [];
gdjs._500Code.GDdoneObjects3= [];
gdjs._500Code.GDPathObjects1= [];
gdjs._500Code.GDPathObjects2= [];
gdjs._500Code.GDPathObjects3= [];
gdjs._500Code.GDFloorObjects1= [];
gdjs._500Code.GDFloorObjects2= [];
gdjs._500Code.GDFloorObjects3= [];
gdjs._500Code.GDBard6Objects1= [];
gdjs._500Code.GDBard6Objects2= [];
gdjs._500Code.GDBard6Objects3= [];
gdjs._500Code.GDNPCObjects1= [];
gdjs._500Code.GDNPCObjects2= [];
gdjs._500Code.GDNPCObjects3= [];
gdjs._500Code.GDBarrierObjects1= [];
gdjs._500Code.GDBarrierObjects2= [];
gdjs._500Code.GDBarrierObjects3= [];
gdjs._500Code.GDNPCblockObjects1= [];
gdjs._500Code.GDNPCblockObjects2= [];
gdjs._500Code.GDNPCblockObjects3= [];
gdjs._500Code.GDNewSpriteObjects1= [];
gdjs._500Code.GDNewSpriteObjects2= [];
gdjs._500Code.GDNewSpriteObjects3= [];
gdjs._500Code.GDbushObjects1= [];
gdjs._500Code.GDbushObjects2= [];
gdjs._500Code.GDbushObjects3= [];
gdjs._500Code.GDGrassObjects1= [];
gdjs._500Code.GDGrassObjects2= [];
gdjs._500Code.GDGrassObjects3= [];
gdjs._500Code.GDGrass_9595NightObjects1= [];
gdjs._500Code.GDGrass_9595NightObjects2= [];
gdjs._500Code.GDGrass_9595NightObjects3= [];
gdjs._500Code.GDStoneObjects1= [];
gdjs._500Code.GDStoneObjects2= [];
gdjs._500Code.GDStoneObjects3= [];
gdjs._500Code.GDWhiteObjects1= [];
gdjs._500Code.GDWhiteObjects2= [];
gdjs._500Code.GDWhiteObjects3= [];
gdjs._500Code.GDBlackObjects1= [];
gdjs._500Code.GDBlackObjects2= [];
gdjs._500Code.GDBlackObjects3= [];
gdjs._500Code.GDFence_9595longObjects1= [];
gdjs._500Code.GDFence_9595longObjects2= [];
gdjs._500Code.GDFence_9595longObjects3= [];
gdjs._500Code.GDFence_9595highObjects1= [];
gdjs._500Code.GDFence_9595highObjects2= [];
gdjs._500Code.GDFence_9595highObjects3= [];
gdjs._500Code.GDText_9595BackgroundObjects1= [];
gdjs._500Code.GDText_9595BackgroundObjects2= [];
gdjs._500Code.GDText_9595BackgroundObjects3= [];
gdjs._500Code.GDdoorObjects1= [];
gdjs._500Code.GDdoorObjects2= [];
gdjs._500Code.GDdoorObjects3= [];


gdjs._500Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects2);
{for(var i = 0, len = gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length ;i < len;++i) {
    gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects2[i].SetLabelText("START", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(12), true);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 700, 400, true);
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(12), false);
}}

}


};gdjs._500Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Entanglement (1).mp3", 3, true, 100, 1);
}
{ //Subevents
gdjs._500Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 3, 0, 3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getMusicOnChannelVolume(runtimeScene, 3) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Beginning", true);
}}

}


};

gdjs._500Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._500Code.GDTableObjects1.length = 0;
gdjs._500Code.GDTableObjects2.length = 0;
gdjs._500Code.GDTableObjects3.length = 0;
gdjs._500Code.GDtextObjects1.length = 0;
gdjs._500Code.GDtextObjects2.length = 0;
gdjs._500Code.GDtextObjects3.length = 0;
gdjs._500Code.GDStartTextObjects1.length = 0;
gdjs._500Code.GDStartTextObjects2.length = 0;
gdjs._500Code.GDStartTextObjects3.length = 0;
gdjs._500Code.GDBard4Objects1.length = 0;
gdjs._500Code.GDBard4Objects2.length = 0;
gdjs._500Code.GDBard4Objects3.length = 0;
gdjs._500Code.GDPicObjects1.length = 0;
gdjs._500Code.GDPicObjects2.length = 0;
gdjs._500Code.GDPicObjects3.length = 0;
gdjs._500Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._500Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._500Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs._500Code.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;
gdjs._500Code.GDEnterHouseObjects1.length = 0;
gdjs._500Code.GDEnterHouseObjects2.length = 0;
gdjs._500Code.GDEnterHouseObjects3.length = 0;
gdjs._500Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._500Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._500Code.GDNewTiledSprite2Objects3.length = 0;
gdjs._500Code.GDwatchObjects1.length = 0;
gdjs._500Code.GDwatchObjects2.length = 0;
gdjs._500Code.GDwatchObjects3.length = 0;
gdjs._500Code.GDdoneObjects1.length = 0;
gdjs._500Code.GDdoneObjects2.length = 0;
gdjs._500Code.GDdoneObjects3.length = 0;
gdjs._500Code.GDPathObjects1.length = 0;
gdjs._500Code.GDPathObjects2.length = 0;
gdjs._500Code.GDPathObjects3.length = 0;
gdjs._500Code.GDFloorObjects1.length = 0;
gdjs._500Code.GDFloorObjects2.length = 0;
gdjs._500Code.GDFloorObjects3.length = 0;
gdjs._500Code.GDBard6Objects1.length = 0;
gdjs._500Code.GDBard6Objects2.length = 0;
gdjs._500Code.GDBard6Objects3.length = 0;
gdjs._500Code.GDNPCObjects1.length = 0;
gdjs._500Code.GDNPCObjects2.length = 0;
gdjs._500Code.GDNPCObjects3.length = 0;
gdjs._500Code.GDBarrierObjects1.length = 0;
gdjs._500Code.GDBarrierObjects2.length = 0;
gdjs._500Code.GDBarrierObjects3.length = 0;
gdjs._500Code.GDNPCblockObjects1.length = 0;
gdjs._500Code.GDNPCblockObjects2.length = 0;
gdjs._500Code.GDNPCblockObjects3.length = 0;
gdjs._500Code.GDNewSpriteObjects1.length = 0;
gdjs._500Code.GDNewSpriteObjects2.length = 0;
gdjs._500Code.GDNewSpriteObjects3.length = 0;
gdjs._500Code.GDbushObjects1.length = 0;
gdjs._500Code.GDbushObjects2.length = 0;
gdjs._500Code.GDbushObjects3.length = 0;
gdjs._500Code.GDGrassObjects1.length = 0;
gdjs._500Code.GDGrassObjects2.length = 0;
gdjs._500Code.GDGrassObjects3.length = 0;
gdjs._500Code.GDGrass_9595NightObjects1.length = 0;
gdjs._500Code.GDGrass_9595NightObjects2.length = 0;
gdjs._500Code.GDGrass_9595NightObjects3.length = 0;
gdjs._500Code.GDStoneObjects1.length = 0;
gdjs._500Code.GDStoneObjects2.length = 0;
gdjs._500Code.GDStoneObjects3.length = 0;
gdjs._500Code.GDWhiteObjects1.length = 0;
gdjs._500Code.GDWhiteObjects2.length = 0;
gdjs._500Code.GDWhiteObjects3.length = 0;
gdjs._500Code.GDBlackObjects1.length = 0;
gdjs._500Code.GDBlackObjects2.length = 0;
gdjs._500Code.GDBlackObjects3.length = 0;
gdjs._500Code.GDFence_9595longObjects1.length = 0;
gdjs._500Code.GDFence_9595longObjects2.length = 0;
gdjs._500Code.GDFence_9595longObjects3.length = 0;
gdjs._500Code.GDFence_9595highObjects1.length = 0;
gdjs._500Code.GDFence_9595highObjects2.length = 0;
gdjs._500Code.GDFence_9595highObjects3.length = 0;
gdjs._500Code.GDText_9595BackgroundObjects1.length = 0;
gdjs._500Code.GDText_9595BackgroundObjects2.length = 0;
gdjs._500Code.GDText_9595BackgroundObjects3.length = 0;
gdjs._500Code.GDdoorObjects1.length = 0;
gdjs._500Code.GDdoorObjects2.length = 0;
gdjs._500Code.GDdoorObjects3.length = 0;

gdjs._500Code.eventsList1(runtimeScene);

return;

}

gdjs['_500Code'] = gdjs._500Code;
