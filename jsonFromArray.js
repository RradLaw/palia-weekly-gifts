let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Stickleback", "Fish Stew", "Celebration Cake"],
  "Auni": ["Common Blue Butterfly", "Rice Cake Stir Fry", "Firebreathing Dragonfly", "Will-o-wisp Rockhopper"],
  "Badruu": ["Onion", "Orange Bluegill", "Batterfly Beans", "Rockhopper Pumpkin"],
  "Caleri": ["Coral", "Heat Root", "Blushing Batterfly", "Inyrevn Mermaid"],
  "Chayne": ["Tomato Plant Seed", "Creamy Carrot Soup", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
  "Delaila": ["Channel Catfish", "Clay", "Golden Glory Bee", "Giant Goldfish"],
  "Einar": ["Silver Salmon", "Red-bellied Piranha", "Flow-Infused Plank", "Ancient Fish"],
  "Elouisa": ["Oyster Meat", "Cerulean Cicada", "Elder Clam Mushroom", "Rainbow-Tipped Butterfly"],
  "Eshe": ["Grilled Oyster", "Fish Stew", "Veil Piksii", "Emerald Ogopuu Scale"],
  "Hassian": ["Grilled Meat", "Sernuk Hide", "Spicy Honey-Baked Muujin", "Slowdown Arrow"],
  "Hekla": ["Grilled Mushroom", "Fried Catfish Dinner", "Ramen", "Celebration Cake"],
  "Hodari": ["Fur", "Striped Chapaa Tail", "Whitestone", "Spitfire Cicada"],
  "Jel": ["Waterlogged Boot", "Albino Eel", "Piksii Floatfish", "Willow Lamprey"],
  "Jina": ["Shell", "Heat Root", "Umbraan Betta", "Eleroo Eel"],
  "Kenli": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Elder Clam Mushroom Meat", "Chapaa Masala"],
  "Kenyatta": ["Crystal Lake Lotus", "Elder Sernuk Antlers", "Spicy Rice Cakes", "Crimson Fangtooth"],
  "Nai'O": ["Spice Sprouts", "Fish Stew", "Apple Tree Seed", "Steak Dinner"],
  "Najuma": ["Tomato Plant Seed", "Garden Snail", "Rice Cake Stir Fry", "Silver Bar"],
  "Reth": ["Potato", "Sernuk Noodle Stew", "Flowtato Fries with Ketchup", "Dari Cloves"],
  "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Tinfin", "Platinum Ore"],
  "Subira": ["Makeshift Arrow", "Fisherman's Brew", "Ancient Koi", "Elderflower"],
  "Tamala": ["Kilima Night Moth", "Garden Millipede", "Azure Stonehopper", "Ancient Amber Beetle"],
  "Tau": ["Trout Dinner", "Oily Anchovy", "Mossyfin", "Will-o-wisp Rockhopper"],
  "The Gardener": ["Garden Millipede", "Elder Clam Mushroom", "Sunburst Batterfly", "Princess Ladybug"],
  "Tish": ["Sapwood Plank", "Glass Bulb", "Silk Thread", "Angelfish"],
  "Zeki": ["Grilled Oyster", "Fish Stew", "Trout Dinner", "Piksii Shmole Spore"]
  
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