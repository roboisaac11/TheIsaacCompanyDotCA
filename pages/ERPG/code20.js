gdjs.The_32BeginningCode = {};
gdjs.The_32BeginningCode.GDNewTextObjects1= [];
gdjs.The_32BeginningCode.GDNewTextObjects2= [];
gdjs.The_32BeginningCode.GDHouseObjects1= [];
gdjs.The_32BeginningCode.GDHouseObjects2= [];
gdjs.The_32BeginningCode.GDBard4Objects1= [];
gdjs.The_32BeginningCode.GDBard4Objects2= [];
gdjs.The_32BeginningCode.GDPicObjects1= [];
gdjs.The_32BeginningCode.GDPicObjects2= [];
gdjs.The_32BeginningCode.GDNewTiledSpriteObjects1= [];
gdjs.The_32BeginningCode.GDNewTiledSpriteObjects2= [];
gdjs.The_32BeginningCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.The_32BeginningCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.The_32BeginningCode.GDEnterHouseObjects1= [];
gdjs.The_32BeginningCode.GDEnterHouseObjects2= [];
gdjs.The_32BeginningCode.GDNewTiledSprite2Objects1= [];
gdjs.The_32BeginningCode.GDNewTiledSprite2Objects2= [];
gdjs.The_32BeginningCode.GDwatchObjects1= [];
gdjs.The_32BeginningCode.GDwatchObjects2= [];
gdjs.The_32BeginningCode.GDdoneObjects1= [];
gdjs.The_32BeginningCode.GDdoneObjects2= [];
gdjs.The_32BeginningCode.GDPathObjects1= [];
gdjs.The_32BeginningCode.GDPathObjects2= [];
gdjs.The_32BeginningCode.GDFloorObjects1= [];
gdjs.The_32BeginningCode.GDFloorObjects2= [];
gdjs.The_32BeginningCode.GDBard6Objects1= [];
gdjs.The_32BeginningCode.GDBard6Objects2= [];
gdjs.The_32BeginningCode.GDNPCObjects1= [];
gdjs.The_32BeginningCode.GDNPCObjects2= [];
gdjs.The_32BeginningCode.GDBarrierObjects1= [];
gdjs.The_32BeginningCode.GDBarrierObjects2= [];
gdjs.The_32BeginningCode.GDNPCblockObjects1= [];
gdjs.The_32BeginningCode.GDNPCblockObjects2= [];
gdjs.The_32BeginningCode.GDNewSpriteObjects1= [];
gdjs.The_32BeginningCode.GDNewSpriteObjects2= [];
gdjs.The_32BeginningCode.GDbushObjects1= [];
gdjs.The_32BeginningCode.GDbushObjects2= [];
gdjs.The_32BeginningCode.GDGrassObjects1= [];
gdjs.The_32BeginningCode.GDGrassObjects2= [];
gdjs.The_32BeginningCode.GDGrass_9595NightObjects1= [];
gdjs.The_32BeginningCode.GDGrass_9595NightObjects2= [];
gdjs.The_32BeginningCode.GDStoneObjects1= [];
gdjs.The_32BeginningCode.GDStoneObjects2= [];
gdjs.The_32BeginningCode.GDWhiteObjects1= [];
gdjs.The_32BeginningCode.GDWhiteObjects2= [];
gdjs.The_32BeginningCode.GDBlackObjects1= [];
gdjs.The_32BeginningCode.GDBlackObjects2= [];
gdjs.The_32BeginningCode.GDFence_9595longObjects1= [];
gdjs.The_32BeginningCode.GDFence_9595longObjects2= [];
gdjs.The_32BeginningCode.GDFence_9595highObjects1= [];
gdjs.The_32BeginningCode.GDFence_9595highObjects2= [];
gdjs.The_32BeginningCode.GDText_9595BackgroundObjects1= [];
gdjs.The_32BeginningCode.GDText_9595BackgroundObjects2= [];
gdjs.The_32BeginningCode.GDdoorObjects1= [];
gdjs.The_32BeginningCode.GDdoorObjects2= [];


gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDBlackObjects1Objects = Hashtable.newFrom({"Black": gdjs.The_32BeginningCode.GDBlackObjects1});
gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDHouseObjects1Objects = Hashtable.newFrom({"House": gdjs.The_32BeginningCode.GDHouseObjects1});
gdjs.The_32BeginningCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.The_32BeginningCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.The_32BeginningCode.GDNewTextObjects1);
gdjs.The_32BeginningCode.GDHouseObjects1.length = 0;

{for(var i = 0, len = gdjs.The_32BeginningCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDNewTextObjects1[i].setString("DATE: Mar 14, 1897. Ulm, Germany.");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDHouseObjects1Objects, (( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getX()), (( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getY()), "");
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDHouseObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDHouseObjects1[i].getBehavior("Resizable").setSize(175, 150);
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDHouseObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDHouseObjects1[i].setPosition((( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getX()) - ((gdjs.The_32BeginningCode.GDHouseObjects1[i].getWidth()) / 2),(( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getY()) - ((gdjs.The_32BeginningCode.GDHouseObjects1[i].getHeight()) / 2));
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.5));
}
}}

}


};gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDPicObjects1Objects = Hashtable.newFrom({"Pic": gdjs.The_32BeginningCode.GDPicObjects1});
gdjs.The_32BeginningCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.The_32BeginningCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.The_32BeginningCode.GDHouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.The_32BeginningCode.GDNewTextObjects1);
gdjs.The_32BeginningCode.GDPicObjects1.length = 0;

{for(var i = 0, len = gdjs.The_32BeginningCode.GDHouseObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDHouseObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDNewTextObjects1[i].setString("Albert Einstein is born.");
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.5));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDPicObjects1Objects, (( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getX()), (( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getY()), "");
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDPicObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDPicObjects1[i].setPosition((( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getX()) - ((gdjs.The_32BeginningCode.GDPicObjects1[i].getWidth()) / 2),(( gdjs.The_32BeginningCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.The_32BeginningCode.GDFloorObjects1[0].getY()) - ((gdjs.The_32BeginningCode.GDPicObjects1[i].getHeight()) / 2));
}
}}

}


};gdjs.The_32BeginningCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.The_32BeginningCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pic"), gdjs.The_32BeginningCode.GDPicObjects1);
{for(var i = 0, len = gdjs.The_32BeginningCode.GDPicObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDPicObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDNewTextObjects1[i].setString("Parents: Hermann and Pauline Einstein");
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.6));
}
}}

}


};gdjs.The_32BeginningCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Path"), gdjs.The_32BeginningCode.GDPathObjects1);
{for(var i = 0, len = gdjs.The_32BeginningCode.GDPathObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDPathObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "x3 Spook.mp3", 1, true, 100, 1);
}}

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
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(12), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.The_32BeginningCode.GDBlackObjects1.length;i<l;++i) {
    if ( gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.The_32BeginningCode.GDBlackObjects1[k] = gdjs.The_32BeginningCode.GDBlackObjects1[i];
        ++k;
    }
}
gdjs.The_32BeginningCode.GDBlackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.The_32BeginningCode.GDBlackObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.The_32BeginningCode.mapOfGDgdjs_9546The_959532BeginningCode_9546GDBlackObjects1Objects, 100, 280, "");
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Resizable").setHeight(500);
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Resizable").setWidth(5000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.The_32BeginningCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.The_32BeginningCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.The_32BeginningCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.The_32BeginningCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.The_32BeginningCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDNewTextObjects1[i].setString("Hermann was a merchant.");
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.7));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.The_32BeginningCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.The_32BeginningCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.The_32BeginningCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDNewTextObjects1[i].setString("Pauline was a Musician.");
}
}{for(var i = 0, len = gdjs.The_32BeginningCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").setOpacity(gdjs.The_32BeginningCode.GDBlackObjects1[i].getBehavior("Opacity").getOpacity() - (0.7));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", true);
}}

}


};

gdjs.The_32BeginningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32BeginningCode.GDNewTextObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewTextObjects2.length = 0;
gdjs.The_32BeginningCode.GDHouseObjects1.length = 0;
gdjs.The_32BeginningCode.GDHouseObjects2.length = 0;
gdjs.The_32BeginningCode.GDBard4Objects1.length = 0;
gdjs.The_32BeginningCode.GDBard4Objects2.length = 0;
gdjs.The_32BeginningCode.GDPicObjects1.length = 0;
gdjs.The_32BeginningCode.GDPicObjects2.length = 0;
gdjs.The_32BeginningCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.The_32BeginningCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.The_32BeginningCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.The_32BeginningCode.GDEnterHouseObjects1.length = 0;
gdjs.The_32BeginningCode.GDEnterHouseObjects2.length = 0;
gdjs.The_32BeginningCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.The_32BeginningCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.The_32BeginningCode.GDwatchObjects1.length = 0;
gdjs.The_32BeginningCode.GDwatchObjects2.length = 0;
gdjs.The_32BeginningCode.GDdoneObjects1.length = 0;
gdjs.The_32BeginningCode.GDdoneObjects2.length = 0;
gdjs.The_32BeginningCode.GDPathObjects1.length = 0;
gdjs.The_32BeginningCode.GDPathObjects2.length = 0;
gdjs.The_32BeginningCode.GDFloorObjects1.length = 0;
gdjs.The_32BeginningCode.GDFloorObjects2.length = 0;
gdjs.The_32BeginningCode.GDBard6Objects1.length = 0;
gdjs.The_32BeginningCode.GDBard6Objects2.length = 0;
gdjs.The_32BeginningCode.GDNPCObjects1.length = 0;
gdjs.The_32BeginningCode.GDNPCObjects2.length = 0;
gdjs.The_32BeginningCode.GDBarrierObjects1.length = 0;
gdjs.The_32BeginningCode.GDBarrierObjects2.length = 0;
gdjs.The_32BeginningCode.GDNPCblockObjects1.length = 0;
gdjs.The_32BeginningCode.GDNPCblockObjects2.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects1.length = 0;
gdjs.The_32BeginningCode.GDNewSpriteObjects2.length = 0;
gdjs.The_32BeginningCode.GDbushObjects1.length = 0;
gdjs.The_32BeginningCode.GDbushObjects2.length = 0;
gdjs.The_32BeginningCode.GDGrassObjects1.length = 0;
gdjs.The_32BeginningCode.GDGrassObjects2.length = 0;
gdjs.The_32BeginningCode.GDGrass_9595NightObjects1.length = 0;
gdjs.The_32BeginningCode.GDGrass_9595NightObjects2.length = 0;
gdjs.The_32BeginningCode.GDStoneObjects1.length = 0;
gdjs.The_32BeginningCode.GDStoneObjects2.length = 0;
gdjs.The_32BeginningCode.GDWhiteObjects1.length = 0;
gdjs.The_32BeginningCode.GDWhiteObjects2.length = 0;
gdjs.The_32BeginningCode.GDBlackObjects1.length = 0;
gdjs.The_32BeginningCode.GDBlackObjects2.length = 0;
gdjs.The_32BeginningCode.GDFence_9595longObjects1.length = 0;
gdjs.The_32BeginningCode.GDFence_9595longObjects2.length = 0;
gdjs.The_32BeginningCode.GDFence_9595highObjects1.length = 0;
gdjs.The_32BeginningCode.GDFence_9595highObjects2.length = 0;
gdjs.The_32BeginningCode.GDText_9595BackgroundObjects1.length = 0;
gdjs.The_32BeginningCode.GDText_9595BackgroundObjects2.length = 0;
gdjs.The_32BeginningCode.GDdoorObjects1.length = 0;
gdjs.The_32BeginningCode.GDdoorObjects2.length = 0;

gdjs.The_32BeginningCode.eventsList3(runtimeScene);

return;

}

gdjs['The_32BeginningCode'] = gdjs.The_32BeginningCode;
