
if (typeof gdjs.evtsExt__UntitledExtension__Colliding !== "undefined") {
  gdjs.evtsExt__UntitledExtension__Colliding.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UntitledExtension__Colliding = {};
gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects1= [];
gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects2= [];
gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects1= [];
gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects2= [];


gdjs.evtsExt__UntitledExtension__Colliding.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Colliding_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects1});
gdjs.evtsExt__UntitledExtension__Colliding.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Colliding_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects1});
gdjs.evtsExt__UntitledExtension__Colliding.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__UntitledExtension__Colliding.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Colliding_9546GDPlayerObjects1Objects, gdjs.evtsExt__UntitledExtension__Colliding.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Colliding_9546GDObjectObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__UntitledExtension__Colliding.func = function(runtimeScene, Player, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Object": Object
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects1.length = 0;
gdjs.evtsExt__UntitledExtension__Colliding.GDPlayerObjects2.length = 0;
gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects1.length = 0;
gdjs.evtsExt__UntitledExtension__Colliding.GDObjectObjects2.length = 0;

gdjs.evtsExt__UntitledExtension__Colliding.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__UntitledExtension__Colliding.registeredGdjsCallbacks = [];