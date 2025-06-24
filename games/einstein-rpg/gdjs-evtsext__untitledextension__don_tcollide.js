
gdjs.evtsExt__UntitledExtension__Don_tCollide = gdjs.evtsExt__UntitledExtension__Don_tCollide || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide = class Don_tCollide extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.SharedData = class Don_tCollideSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._UntitledExtension_Don_tCollideSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._UntitledExtension_Don_tCollideSharedData = new gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.SharedData(
      initialData
    );
  }
  return instanceContainer._UntitledExtension_Don_tCollideSharedData;
}

// Methods:
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext = {};
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1= [];
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects2= [];
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1= [];
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects2= [];


gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1});
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1});
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1});
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDPlayerObjects1Objects, gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDObjectObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1[i].separateFromObjectsList(gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.mapOfGDgdjs_9546evtsExt_9595_9595UntitledExtension_9595_9595Don_9595tCollide_9546Don_9595tCollide_9546prototype_9546CollidingContext_9546GDObjectObjects1Objects, true);
}
}}

}


};

gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.Colliding = function(Player, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Player": Player
},
  _objectArraysMap: {
"Object": thisObjectList
, "Player": gdjs.objectsListsToArray(Player)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects1.length = 0;
gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.GDPlayerObjects2.length = 0;

gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.CollidingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("UntitledExtension::Don_tCollide", gdjs.evtsExt__UntitledExtension__Don_tCollide.Don_tCollide);
