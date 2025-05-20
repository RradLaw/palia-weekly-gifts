let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
  "Ashura": ["Channel Catfish", "Acorn", "Turn Pike", "Sushi"],
  "Auni": ["Common Field Cricket", "Garden Snail", "Firebreathing Dragonfly", "Apple Pie"],
  "Badruu": ["Tomato", "Corn Seed", "Pumpkin Pie", "Azure Stonehopper"],
  "Caleri": ["Sweet Leaf", "Glass Bulb", "Floatfish Mushroom", "Elderwood Pie"],
  "Chayne": ["Carrot Seed", "Pickled Tomatoes", "Pearl", "Cream of Mushroom Soup"],
  "Delaila": ["Calico Koi", "Garden Ladybug", "Sunburst Batterfly", "Giant Goldfish"],
  "Einar": ["Spotted Bullhead", "Spineshell Crab", "Mini Mullet", "Long Nosed Unicorn Fish"],
  "Elouisa": ["Calico Koi", "Inky Dragonfly", "Spitfire Cicada", "Fairy Mantis"],
  "Eshe": ["Leather", "Samara", "Proudhorned Sernuk Antlers", "Jewelwing Dragonfly"],
  "Hassian": ["Mountain Morel", "Elder Sernuk Antlers", "Staircase Mushroom", "Fireworks Arrow"],
  "Hekla": ["Briar Daisy", "Largemouth Bass", "Chub", "Green Pearl"],
  "Hodari": ["Stone Brick", "Flow-Infused Wood", "Iron Bar", "Emerald Ogopuu Scale"],
  "Jel": ["Fur", "Bat Ray", "Gossamer Veil Moth", "Midnight Paddlefish"],
  "Jina": ["Coral", "Cotton", "Nightshadow Batterfly", "Eleroo Eel"],
  "Kenli": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Fried Catfish Dinner", "Palian Onion Soup"],
  "Kenyatta": ["Sernuk Antlers", "Creamy Carrot Soup", "Firebreathing Dragonfly", "Meaty Stir Fry"],
  "Nai'O": ["Spice Sprouts", "HydratePro Fertilizer", "Bronze Bluegill", "Fruit Smoothie Bowl"],
  "Najuma": ["Clay", "Garden Snail", "Rice Cake Stir Fry", "Blueberry Pie"],
  "Reth": ["Chapaa Meat", "Heat Root", "Apple Jam", "Palian Onion Soup"],
  "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Dispel Arrow"],
  "Subira": ["Potato", "Silver Bar", "Energized Piranha", ""],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Azure Stonehopper", "Flametongue Ray"],
  "Tau": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Azure Chapaa Tail", "Emerald Ogopuu Scale"],
  "Tish": ["Crystal Lake Lotus", "Dawnray", "Flow-Infused Plank", "Will-o-wisp Rockhopper"],
  "Zeki": ["Grilled Fish", "Fish Stew", "Golden Glory Bee", "Dari Cloves"]
      
      
      
      
      

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