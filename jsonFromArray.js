let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Striped Dace", "Striped Sturgeon", "Stalking Catfish", "Celebration Cake"],
  "Auni": ["Brushtail Dragonfly", "Garden Leafhopper", "Cave Piksii", "Will-o-wisp Rockhopper"],
  "Badruu": ["Rainbow Trout", "Wheat", "Flowtato", "Bean Burger"],
  "Caleri": ["Wild Ginger", "Pickled Carrots", "Tinfin", "Chapaa Masala"],
  "Chayne": ["Congee", "Juniper Seed", "Elder Clam Mushroom Meat", "Elderwood Lotus"],
  "Delaila": ["Bahari Crab", "Clay", "Blushing Batterfly", "Rockhopper Pumpkin"],
  "Einar": ["Gillyfin", "Fairy Carp", "Ancient Koi", "Blue Spotted Ray"],
  "Elouisa": ["Calico Koi", "Cantankerous Koi", "Cave Piksii", "Majiri-of-War"],
  "Eshe": ["Fur", "Samara", "Veil Piksii", "Jewelwing Dragonfly"],
  "Hassian": ["Plant Fiber", "Fabric", "Iron Ore", "Giant Kilima Stingray"],
  "Hekla": ["Grilled Meat", "Acorn", "Beluga Sturgeon", "Celebration Cake"],
  "Hodari": ["Leather", "Elder Sernuk Antlers", "Draugr Beetle", "Steak Dinner"],
  "Jel": ["Umbran Carp", "Duskray", "Umbraan Betta", "Eleroo Eel"],
  "Jina": ["Mountain Morel", "Duskwing Butterfly", "Nightshadow Batterfly", "Elderwood Lotus"],
  "Kenli": ["Wagon Wheel", "Garden Ladybug", "Loaded Potato Soup", "Meaty Stir Fry"],
  "Kenyatta": ["Brushtail Dragonfly", "Acorn", "Devilfish", "Majiri-of-War"],
  "Nai'O": ["Muujin Meat", "Channel Catfish", "Blueberry Bush Seed", "Fruit Smoothie Bowl"],
  "Najuma": ["Clay", "Garden Snail", "Pumpkin Curry and Rice", "Blueberry Pie"],
  "Reth": ["Carrot", "Sernuk Noodle Stew", "Elder Clam Mushroom Meat", "Rockhopper Pumpkin"],
  "Sifuu": ["Grilled Meat", "Iron Ore", "Proudhorned Sernuk Antlers", "Bean Burger"],
  "Subira": ["Bok Choy", "Fish Stew", "Pan Fried Dumplings", "Firebreathing Dragonfly"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Azure Stonehopper", "Enchanted Pupfish"],
  "Tau": ["Fried Catfish Dinner", "Steak Dinner", "Prism Trout", "Emerald Ogopuu Scale"],
  "The Gardener": ["Staircase Mushroom", "Elder Clam Mushroom", "Sunburst Batterfly", "Ancient Amber Beetle"],
  "Tish": ["Shell", "Glass Bulb", "Whitestone", "Angelfish"],
  "Zeki": ["Coral", "Silk", "Trout Dinner", "Elder Shmole Spore"]
  
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