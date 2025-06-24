var form = document.getElementById("terminal");
var last_command = document.getElementById("last_command")
var output = document.getElementById("output");

var player_name = document.getElementById("name");
var quest_name = document.getElementById("questname");
var quest_completed = document.getElementById("questcompleted");
var quest_total = document.getElementById("questtotal");
var xp = document.getElementById("xp");
var level = document.getElementById("level");
var equipped = document.getElementById("equipped");
var moves = document.getElementById("moves");

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");

class Game {
  constructor() {
    this.day = 1
    this.map = [
      [' ', ' ', ' ', ' ', '++', '  ', ' ', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', '■', '■', '■', '=', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', '■', '~', '~', '~', '||', '][', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', '■', '~', '■', '||', ' ', '||', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', ' ', '■', ' ', '||', ' ', '||', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', ' ', '■', ' ', '||', ' ', '||', ' ', '■', ' ', ' ', ' ', '■', ' '],
      [' ', '■', ' ', '■', '||', ' ', '||', '■', ' ', '■', ' ', ' ', '■', ' '],
      [' ', '■', ' ', '■', '~', ' ', '~', '■', ' ', '■', ' ', ' ', '■', ' '],
      [' ', '■', '■', '■', '||', ' ', '||', '■', '■', '■', ' ', ' ', '■', ' '],
      [' ', ' ', '■', ' ', '||', ' ', '||', '■', ' ', '■', ' ', ' ', '■', ' '],
      [' ', '■', ' ', '■', '||', ' ', '||', '■', '■', '■', ' ', ' ', '■', ' '],
      [' ', '■', ' ', '■', '~', '||', '][', '||', '~', '||', '][', ' ', '■', ' '],
      [' ', '■', '■', '■', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '■', ' '],
      ['■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■'],
      ['■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['■', '■', '++', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '■'],
    ];
    this.map_objects = { "■": "wall", " ": "empty", "++": "exit", "=": "sign", "~": "event", "++": "event", "||": "path", "][": "stop_path" }
    this.commands = {
      "help": () => this.help(),
      "north": () => this.move("north"),
      "south": () => this.move("south"),
      "east": () => this.move("east"),
      "west": () => this.move("west"),
      "up": () => this.up(),
      "down": () => this.down(),
      "inventory": () => this.view_inventory(),
      "equip": () => this.equip(),
      "talk": () => this.talk(),
      "look": () => this.look(),
      "grab": () => this.grab(),
      "memories": () => this.view_memories(),
      "transmit": () => this.transmit(),
      "drop": () => this.drop(),
    };
    this.items = {
      "Gabriel": {
        "amount": 0,
        "health": 100,
        "can_equip": false,
        "can_drop": false,
        "eat": false,
        "onEquip": undefined,
        "onGrab": () => {
          if (this.day == 1) {
            log("You get up out of your chair, and go over to Gabriel.\n\nMother:\nJonas, what are you doing?\n\nIt looks like you'll have to wait until no one is around to escape with him.")
            return false
          }
          else if (this.day == 2) {
            log("You walk to over to Gabriel's crib. He sees you approach, and starts crying louder. You need to find a way to calm him down before taking him.")
            return false
          }
          else {
            return true
          }
        }
      },
      "Fathers Bike": {
        "amount": 0,
        "health": 100,
        "can_equip": true,
        "can_drop": false,
        "eat": false,
        "onEquip": async () => {
          if (this.day == 3) {
            log("You place Gabriel in the bike, and hop on yourself. You exit your house, and move east.")
            log("press 'Enter' to continue.")
            await waitingKeypress()
            log("As you leave your house, the door closes behind you. You hope you will never open that door again.")
            this.map[2][3] = "■"
            this.move("east")
          }
        },
        "onGrab": () => {
          if (this.day == 3) {
            log("Now you just need to place Gabriel in it, and hop on!\n\n<b>enter 'equip' to equip the bike.</b>")
            return true
          }
        }
      },
      "Your Bike": {
        "amount": 0,
        "health": 100,
        "can_equip": true,
        "can_drop": true,
        "eat": false,
        "onEquip": async () => {
          if (this.day == 2) {
            log("You hop on the bike, feeling really bad you left Gabriel behind. You exit your house, and move east.")
            log("press 'Enter' to continue.")
            await waitingKeypress()
            log("As you leave your house, the door closes behind you. You hope you will never open that door again.")
            this.map[2][3] = "■"
            this.move("east")
          }
        },
        "onGrab": () => {
          if (this.day == 2) {
            log("You are now ready to set off on your adventure!\n\n<b>enter 'equip' to equip the bike.</b>")
            return true
          }
          else {
            return false
          }
        }
      },
      "Meat": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 15,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
      "Bread": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 10,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
      "Apple": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 5,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
      "Cuccumber": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 5,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
      "Pie": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 30,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
      "Soup": {
        "amount": 0,
        "can_equip": false,
        "can_drop": true,
        "eat": true,
        "hp_bonus": 20,
        "onGrab": () => {
          if (this.day == 4) {
            this.addQuest("food", 1)
            return true
          }
          return false
        }
      },
    }
    this.inventory = {};
    this.memories = ["Sailing", "Sleding", "Camping", "Painting", "Hiking", "Sunset", "Stars",
      "Falling", "Tripping", "Bleeding", "Burning", "Starving"]
    this.location = [2, 2] // 3, 3 (zero indexed)
    this.talks = 0

    this.questname = ""
    this.questcompleted = 0
    this.questtotal = 0

    this.warp_location = [29, 2].reverse()

    this.quests = {
      "food": () => {
        log("\n\n<b>You completed your quest!</b>\n\nNow that you can collected enough food, you can finally set off on your escape.")
        return 5
      }
    }

    this.signs = {
      "1_4": () => {
        log("You see a sign that says:\n<b>RIVER AHEAD</b>\n\nBeyond the sign is the central plaza, and beyond that is the House of the Old. Next to it is the Annex, where the Giver stays.")
      }
    }

    this.events = {
      "0_4": async () => {
        if (this.day == 4) {
          log("It looks like this is the way out of your community, and it then leads to Elsewhere. You should get some food first, before going on this long journey.")
        }
        else if (this.day == 5) {
          log("You see a long twisting path. You have walked on this path before, but never intending to do what you are doing.\n\n<b>Press 'enter' to continue.</b>")
          await waitingKeypress()
          this.location = this.warp_location
          this.renderMap()
          window.location = "done.html"
        }

      },
      "2_2": () => this.start(),
      "2_3": () => this.exit(),
      "3_2": () => this.room(),
      "2_4": () => {
        if (this.day == 3) {
          log("\n\nYou are now ready to set off on your adventure!\nBut you are going to need some food, for the trip. Both for you, and for Gabriel. Luckily, people leave leftovers on their doorsteps for the Food Collectors. Maybe you can take some?\n\n")
          log("<b>NEW QUEST: collect 7 peices of food.</b>")
          this.newQuest("food", 7)
        }
        else if (this.day == 2) {
          log("\n\nYou are now ready to set off on your adventure!\nBut you are going to need some food, for the trip. Luckily, people leave leftovers on their doorsteps for the Food Collectors. Maybe you can take some?\n\n")
          log("<b>NEW QUEST: collect 5 peices of food.</b>")
          this.newQuest("food", 5)
        }
        if (this.day < 4) {
          this.day = 4
        }
      },
      "7_4": () => {
        log("\n\nYou arive on another doorstep. You see the bin with the leftover food inside, for the Food Collectors to take. It looks like there is some cut of meat, and and a half eaten loaf of bread.\n\n")
      },
      "11_4": () => {
        log("\n\nYou arive on another doorstep. You see the bin with the leftover food inside, for the Food Collectors to take. Inside there is an apple. It reminds you of the time you first saw the color red, when you were playing catch with Asher. But now that your are leaving, there will be no more of those times. You wonder what life will be like in Elsewhere. \n\n")
      },
      "7_6": () => {
        log("\n\nYou arive on another doorstep. You see the bin with the leftover food inside, for the Food Collectors to take. Inside, you find a slice of bread, and slice of pie.\n\n")
      },
      "11_8": () => {
        log("\n\nYou arive on another doorstep. You see the bin with the leftover food inside, for the Food Collectors to take. It looks like there's a cuccumber and a thing of canned soup inside.\n\n")
      },
    }

    this.scene = {
      "7_4": {
        "Items": {
          4: ["Meat", "Bread"]
        }
      },
      "11_4": {
        "Items": {
          4: ["Apple"]
        }
      },
      "7_6": {
        "Items": {
          4: ["Bread", "Pie"]
        }
      },
      "11_8": {
        "Items": {
          4: ["Cuccumber", "Soup"]
        }
      },
      "2_2": {
        "Dialog": {
          1: [
            ["Father", "(glances at Gabriel)\nEnjoy it, little guy. This is your last night as visitor."],
            ["You", "'What do you mean?' you ask."],
            ["Father", "Well, last night we tried letting him sleep at the Nurturing Center"],
            ["Mother", "Did it go well?"],
            ["Father", "Ha ha. It was a disaster. He cried all night long! This afternoon we had a meeting. He will be released tomorrow.", true],
            ["log", "You are devastated by this news, but it just makes you more determained to escape."]
          ],
          2: [
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Gabriel", "Waaaa! Waaaaa!"],
            ["Isaac", "Wow, I can't believe that you listened to all of that! Good job! Because you did so good, here's a hint: give him something good to think about."],
          ]
        },
        "Items": {
          1: ["Gabriel"],
          2: ["Gabriel"],
          3: ["Gabriel"],
        },
        "Transmit": [2] //the days you can transmit to gabriel
      },
      "2_3": {
        "Items": {
          2: ["Your Bike"],
          3: ["Fathers Bike"]
        }
      }
    }
  }

  start() {
    if (this.day == 1) {
      log("You find yourself in your house, sitting at the table with your family unit.")
      log("<i>Lily</i> is chattering away, and a small baby, <i>Gabriel</i>, is playing happily on the floor.")
      log("To the <b>south</b> is your bedroom, and to the <b>east</b> is the exit.")
      log("\n<b>To talk with people, enter 'talk'</b>")
    }
    else if (this.day == 2) {
      log("You exit your bedroom, and go to the main room. <i>Gabriel</i> is in his bed, whimpering. Maybe you should pick him up.")
    }
  }

  async exit() {
    if (this.day == 1) {
      log("You exit the house, ignoring the plan you and the Giver made.\n\nJust as you step out, you spot some Food Collectors in the distance. Unfortuntely, they also see you.\n\nFood Collector:\nWhy are you not inside for your evening meal? Go on!\n\nThe Food Collector sends you back to your house.\n\n<b>'enter' to continue")
      await waitingKeypress()
      gameInstance.move("west")
    }
    else if (this.day == 2) {
      log("You descide to leave Gabriel behind. It feels very wrong, like your story should not be like this, but you do it anyways. Now is your last chance to get him. Once you are out of your house, you won't be able to get back in without waking up everyone. You look around. You see your bike in it's usual spot.")
    }
    else if (this.day == 3) {
      log("Now that you have Gabreil, you can finally begin the escape. But wait! Your bike does not have a place to hold Gabriel! Only your father's bike has a slot for that.")
    }
  }

  async room() {
    if (this.day == 1) {
      log("You find yourself in your room. There is a bed, a table, and a chair. Nothing fancy, all the furnature is made only for it's purpose. It's is all so plain. Ever since you were made Receiver, you have been realizing just how plain your community is.\n\n<b>'enter' to sleep</b>")
      await waitingKeypress()
      this.day++
      log("\n\nIt's midnight. You know it's now or never. You hear Gabriel inside his crib, in the room to the <b>north</b>. But can you pick him up without him waking everyone else up?")
    }
    else if (this.day == 2 || this.day == 3) {
      log("You find yourself in your room. There is a bed, a table, and a chair. Nothing fancy, all the furnature is made only for it's purpose. It's is all so plain. Ever since you were made Receiver, you have been realizing just how plain your community is.\n\nIt's the middle of the night, but you can't sleep now. You must escape. For the good of the community, you have to.")
    }
  }

  gabriel(room, memory) { //The function that transmits to gabriel
    switch (room) {
      case "2_2":
        if (this.day == 2) {
          let good_memories = ["Sailing", "Sleding", "Camping", "Painting", "Music", "Hiking", "Sunset", "Stars"]
          log("You place your hands on Gabriel's back, and think hard about " + memory + ". You start to feel like you are really living in your memories now. And then, there's a tingle in your hands as the memory transmits.")
          if (good_memories.includes(memory)) {
            log("All of a sudden, Gabriel stops crying. He looks up at you, with his big blue eyes you once only saw as pale.")
            this.day++
            this.grab("Gabriel")
            log("\n\nNow that you have Gabriel, you can finally escape the house.")
          }
          else {
            log("As the memory leave your hands, and loud scream comes from Gabriel! He starts shaking violantly, and you know you made a mistake. You qucikly remove your hands and comfort him. That was close!\n\n<b>Gabriel falls asleep again. if you try to take him now, he might start screaming again!</b>")
          }
        }
        break;
    }
  }


  drop() {
    log("Select an item to drop from your inventory:");
    for (let item in this.inventory) {
      log("<a style='color: white' href='javascript:gameInstance.dropItem(\"" + item + "\")' >" + item + "</a>");
    }
  }

  dropItem(item) {
    if (this.inventory[item]["can_drop"] == false) {
      log("You can't drop that item.")
      return false
    }
    if (this.inventory[item]["amount"] > 0) {
      this.inventory[item]["amount"] -= 1;
      log("You have dropped " + item + ".");
      this.scene[room]["Items"][this.day].push(item);
    } else {
      log("You don't have " + item + " in your inventory to drop.");
    }
  }

  view_memories() {
    log("\nYour memories:\n");
    for (var item of this.memories) {
      log(item);
    }
    log("\n")
  }

  transmit() {
    let room = this.location[1].toString() + "_" + this.location[0].toString();
    if (this.scene[room]["Transmit"].includes(this.day)) {
      log("\nWhat memory would you like to transmit? (click)")
      for (var item of this.memories) {
        log("<a style='color: white' href='javascript:gameInstance.gabriel(\"" + room + "\", \"" + item + "\")' >" + item + "</a>");
      }
      log("\n")
    }
    else {
      log("You can't transmit memories right now.")
    }
  }

  

  grab() {
    let room = this.location[1].toString() + "_" + this.location[0].toString();

    if (this.scene[room]["Items"][this.day] == undefined) {
      log("There is nothing to grab in this room.");
      return false;
    }
    if (this.scene[room] === undefined) {
      log("There is nothing to grab in this room.");
      return false;
    }

    let item = this.scene[room]["Items"][this.day].shift();

    let pickup = true

    if (this.items[item]["onGrab"] != undefined) {
      pickup = this.items[item]["onGrab"]();
    }

    if (pickup) {
      if (item in this.inventory) {
        this.inventory[item]["amount"] += 1;
      } else {
        this.inventory[item] = this.items[item]
        this.inventory[item]["amount"] += 1;
      }

      log("You grab " + item);
    } else {
      this.scene[room]["Items"][this.day].push(item) // add the element back
    }
  }

  look() {
    let room = this.location[1].toString() + "_" + this.location[0].toString()
    if (this.scene[room] === undefined) {
      log("There is nothing to look at in this room.")
      return false
    }
    let items = this.scene[room]["Items"][this.day]
    try {
      if (items.length === 0) {
        log("There is nothing in this room that you can see.")
        return false
      }

      let things = "";
      let itemCounts = {};
      for (let item of items) {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
      }

      for (let item in itemCounts) {
        things += item + (itemCounts[item] > 1 ? ` x${itemCounts[item]}, ` : ", ");
      }
      things = things.slice(0, -2); // remove last comma and space

      log("You look around for things you can pick up, and you find <b>" + things + "</b>.");
    } catch (e) {
      log("There is nothing in this room that you can see.")
    }
  }

  talk() {
    let room = this.location[1].toString() + "_" + this.location[0].toString()
    if (this.scene[room] === undefined) {
      log("There is nobody to talk to.")
      return false
    }
    let people = this.scene[room]["Dialog"][this.day]
    if (people === undefined) {
      log("There is nobody to talk to.")
      return false
    }


    if (this.talks >= people.length) {
      log("You have already talked to everyone. But you can get them to repeat themselves, if you want.")
      this.talks = 0
      return false
    }
    let person = people[this.talks][0]


    let message = people[this.talks][1]

    switch (person.toLowerCase()) {
      case "you":
        log("\n" + message + "\n")
        break;
      case "log":
        log("\n<b>" + message + "<b>\n")
        break;
      default:
        log("\n" + person + ":\n" + message + "\n")
        break;
    }

    this.talks += 1

    if (people[this.talks] > 2) {
      this.talk()
    }
  }

  help() {
    log("Available actions:\n" + Object.keys(this.commands).join(", "));
  }

  move(direction) {

    var new_location = [this.location[0], this.location[1]];

    var onPath;

    try {
      onPath = this.map_objects[
        this.map[this.location[1]][this.location[0]]
      ].includes("path")
    } catch (e) {
      onPath = false
    }

    var biking = equipped.innerText.toLowerCase().includes("bike") && onPath

    switch (direction) {
      case "north":
        new_location[1] -= 1
        break;
      case "south":
        new_location[1] += 1
        break;
      case "east":
        new_location[0] += 1
        break;
      case "west":
        new_location[0] -= 1;
        break;
      default:
        log("<span style='color: red'>DEV ERROR:</span>Invalid direction: " + direction);
    }

    if (new_location[0] < 0 || new_location[0] > this.map.length - 1) {
      log("You can't go out of the map!")
      return false
    }
    if (new_location[1] < 0 || new_location[1] > this.map[0].length - 1) {
      log("You can't go out of the map!")
      return false
    }

    switch (this.map_objects[this.map[new_location[1]][new_location[0]]]) {
      case "wall":
        log("You can't go that way!")
        return false
      case "xp":
        log("You found some XP!")
        update("xp", (parseInt(xp.innerHTML) + 1).toString());
        this.map[new_location[1]][new_location[0]] = " ";
      default:
        break;
    }

    if (biking) {
      console.log("Current location: " + this.location)
      let bikes = 0
      while (true) {
        let square = this.map_objects[this.map[new_location[1]][new_location[0]]]
        if (square == "path") {
          if (direction == "north") new_location[1] -= 1;
          if (direction == "south") new_location[1] += 1;
          if (direction == "east") new_location[0] += 1;
          if (direction == "west") new_location[0] -= 1;
          bikes++
        }
        else {
          break;
        }
      }
    }

    this.location = new_location;
    this.talks = 0
    log("You move to the " + direction + ".");
    gameInstance.renderMap()
    update("moves", (parseInt(moves.innerHTML) + 1).toString());
  }

  up() {
    log("Moved Up");
  }

  down() {
    log("Moved Down");
  }

  view_inventory() {
    log("\nYour inventory:\n");
    for (var item in this.inventory) {
      log(item + ": " + this.inventory[item]["amount"]);
    }
    log("\n")
  }

  equip() {
    log("Inventory:");
    for (let item in this.inventory) {
      log("<a style='color: white' href='javascript:gameInstance.equipItem(\"" + item + "\")' >" + item + "</a>");
    }
  }
  equipItem(item) {
    if (this.items[item]["can_equip"]) {
      if (this.items[item]["onEquip"] != undefined) {
        this.items[item]["onEquip"]();
      }
      update("equipped", item)
      log("You have equipped " + item + ".");
    } else {
      log("You can't equip that item.");
    }
  }

  renderMap() {
    let playerX = this.location[0];
    let playerY = this.location[1];

    let startX = playerX - 2 < 0 ? 0 : playerX - 2;
    let startY = playerY - 2 < 0 ? 0 : playerY - 2;
    let endX = playerX + 2 >= this.map[0].length ? this.map[0].length - 1 : playerX + 2;
    let endY = playerY + 2 >= this.map.length ? this.map.length - 1 : playerY + 2;

    let renderedMap = [];
    for (let i = startY; i <= endY; i++) {
      let row = [];
      for (let j = startX; j <= endX; j++) {
        if (i === playerY && j === playerX) {
          row.push('&');
        } else if (this.map[i] && this.map[i][j]) {
          row.push(this.map[i][j]);
        }
      }
      renderedMap.push(row);
    }

    var row1_content = "";
    for (var i in renderedMap[0]) {
      row1_content += "<td>" + renderedMap[0][i] + "</td>";
    }
    row1.innerHTML = row1_content;

    var row2_content = "";
    for (var i in renderedMap[1]) {
      row2_content += "<td>" + renderedMap[1][i] + "</td>";
    }
    row2.innerHTML = row2_content;

    var row3_content = "";
    for (var i in renderedMap[2]) {
      row3_content += "<td>" + renderedMap[2][i] + "</td>";
    }
    row3.innerHTML = row3_content;

    var row4_content = "";
    for (var i in renderedMap[3]) {
      row4_content += "<td>" + renderedMap[3][i] + "</td>";
    }
    row4.innerHTML = row4_content;

    var row5_content = "";
    for (var i in renderedMap[4]) {
      row5_content += "<td>" + renderedMap[4][i] + "</td>";
    }
    row5.innerHTML = row5_content;

    if (this.map_objects[this.map[playerY][playerX]] === "event") {
      try {
        this.events[playerY.toString() + "_" + playerX.toString()]()
      } catch (e) {

      }
    }
    if (this.map[playerY][playerX] === "=") {
      this.signs[playerY.toString() + "_" + playerX.toString()]()
    }

  }

  newQuest(name, total) {
    gameInstance.questname = name
    gameInstance.questtotal = total
    update("quest_name", name)
    update("quest_total", total.toString())
  }


  addQuest(name, amount) {
    gameInstance.questcompleted += amount
    update("quest_completed", gameInstance.questcompleted.toString())
    if (gameInstance.questcompleted >= gameInstance.questtotal) {
      log("QUEST COMPLETED")
      let new_day = gameInstance.quests[name]();
      gameInstance.day = new_day
      gameInstance.questname = ""
      gameInstance.questtotal = 0
      update("quest_name", "")
      update("quest_completed", "")
      update("quest_total", "")
    }
  }

}

const gameInstance = new Game();


window.onload = () => {
  gameInstance.renderMap()
  gameInstance.help()
}


function handleForm(event) {
  event.preventDefault();
  let command = form.getElementsByTagName("input")[0].value
  last_command.innerText = command
  document.getElementById("terminal").reset();

  command = command.toLowerCase().trim().split(" ");

  let cmd = command[0];

  if (command.length != 1 || !(cmd in gameInstance.commands) && cmd != "") {
    incorrectCommand(cmd);
    return false
  }

  gameInstance.commands[cmd]();

}
form.addEventListener('submit', handleForm);

function incorrectCommand(command_name) {
  log("'" + command_name + "' is not a valid action. Type 'help' for a list of actions.")
}

function log(text) {
  text = text.replaceAll("\n", "<br>")
  output.innerHTML += "<br><span>" + text + "</span><br>"
  let items = output.querySelectorAll('span');
  let count = items.length

  try {
    let item = items[count - 1];

    item.scrollIntoView({
      behavior: 'smooth'
    });
  } catch (e) {

  }
}

function update(variable, value) {
  window[variable].innerHTML = value;
}

function shake() {
  document.body.classList.add('shake');
  setTimeout(function() {
    document.body.classList.remove('shake');
  }, 500);
}

function waitingKeypress() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', onKeyHandler);

    function onKeyHandler(e) {
      if (e.keyCode === 13) { // Check if Enter key is pressed
        document.removeEventListener('keydown', onKeyHandler);
        resolve(); // Resolve the Promise
      }
    }
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fib = (l, r = [0, 1]) => { for (i = 2; i < l; i++)r.push(r[i - 1] + r[i - 2]); return r }