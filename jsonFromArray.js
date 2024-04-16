let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Congee", "Striped Sturgeon", "Sernuk Noodle Stew", "Sashimi"],
  "Auni": ["Common Blue Butterfly", "Rice Cake Stir Fry", "Apple", "Celebration Cake"],
  "Badruu": ["Onion", "Corn Seed", "Blueberry Bush Seed", "Azure Stonehopper"],
  "Caleri": ["Sundrop Lily", "Silk", "Oysters Akwinduu", "Bouillabaisse"],
  "Chayne": ["Onion", "Pickled Tomatoes", "Blueberry", "Dari Cloves"],
  "Delaila": ["Bahari Crab", "HydratePro Fertilizer", "Apple Tree Seed", "Giant Goldfish"],
  "Einar": ["Mudminnow", "Yellow Perch", "Flow-Infused Plank", "Cactus Moray"],
  "Elouisa": ["Common Bark Cicada", "Cytthroat Trout", "Thundering Eel", "Fairy Mantis"],
  "Eshe": ["Grilled Oyster", "Fish Stew", "Silver Ore", "Jewelwing Dragonfly"],
  "Hassian": ["Congee", "Chapaa Asada Tacos", "Iron Ore", "Dispel Arrow"],
  "Hekla": ["Crystal Lake Lotus", "Fried Catfish Dinner", "Pearl", "Green Pearl"],
  "Hodari": ["Copper Ore", "Elder Sernuk Antlers", "Azure Chapaa Tail", "Steak Dinner"],
  "Jel": ["Barracuda", "Sernuk Hide", "Thundering Eel", "Muujin Bahari"],
  "Jina": ["Congee", "Glass Pane", "Bacon-Stuffed Mushrooms", "Celebration Cake"],
  "Kenli": ["Chapaa Meat", "Ramen", "Iron Bar", "Sushi"],
  "Kenyatta": ["Barracuda", "Oily Anchovy", "Phoenixfire Relleno", "Fairy Mantis"],
  "Nai'o": ["Muujin Meat", "Channel Catfish", "Steak Dinner", "Bahari Pike"],
  "Najuma": ["Tomato Plant Seed", "Copper Bar", "Rice Cake Stir Fry", "Silver Bar"],
  "Reth": ["Spicy Pepper", "Wild Garlic", "Apple", "Cream of Mushroom Soup"],
  "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Iron Bar", "Gold Bar"],
  "Subira": ["Makeshift Arrow", "Radiant Sunfish", "Sashimi", "Spitfire Cicada"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Azure Stonehopper", "Green Pearl"],
  "Tau": ["Common Field Cricket", "Steak Dinner", "Ship Fragments", "Rainbow-Tipped Butterfly"],
  "Tish": ["Sweet Leaf", "Heartwood Plank", "Apple Pie", "Green Pearl"],
  "Zeki": ["Grilled Oyster", "Fish Stew", "Golden Glory Bee", "Poke Bowl"]
      
       
    








};
let outputStr = "{\n";
for (const key in data) {
    outputStr += generateString(key, data[key]) + "\n";
}
outputStr = outputStr.substring(0, outputStr.length - 2)
outputStr += "\n}";
console.log(outputStr);
console.log(errorString);

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "type1",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "type2",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "type3",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "type4",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type1/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type2/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type3/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type4/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}