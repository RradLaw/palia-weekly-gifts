let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Prism Trout", "Loaded Flowtato", "Celebration Cake"],
  "Auni": ["Ship Fragments", "Bahari Bee", "Petit Fives", "Will-o-wisp Rockhopper"],
  "Badruu": ["Rosy Bitterling", "Spicy Pepper Seed", "Grumpy Granite Rockhopper", "Bean Burger"],
  "Caleri": ["Crystal Lake Lotus", "Heat Root", "Crucian Carp", "Dari Cloves"],
  "Chayne": ["Wild Ginger", "Rice", "Honey", "Cream of Mushroom Soup"],
  "Delaila": ["Rosy Bitterling", "HarvestBoost Fertilizer", "Blueberry", "Giant Goldfish"],
  "Einar": ["Silvery Minnow", "Spineshell Crab", "Fathead Minnow", "Long Nosed Unicorn Fish"],
  "Elouisa": ["Duskray", "Cantankerous Koi", "Indigo Lamprey", "Flametongue Ray"],
  "Eshe": ["Leather", "Silk", "Veil Piksii", "Steak Dinner"],
  "Hassian": ["Leather", "Fabric", "Spicy Honey-Baked Muujin", "Giant Kilima Stingray"],
  "Hekla": ["Grilled Fish", "Smallmouth Bass", "Cream of Mushroom Soup", "Green Pearl"],
  "Hodari": ["Copper Ore", "Sernuk Noodle Stew", "Blue Marlin", "Spitfire Cicada"],
  "Jel": ["Eyeless Minnow", "Silk", "Umbraan Betta", "Bluebristle Muujin Mane"],
  "Jina": ["Shell", "Glass Pane", "Ogopuu Skin", "Rainbow-Tipped Butterfly"],
  "Kenli": ["Grilled Fish", "Ramen", "Pumpkin Pie", "Muujin Bahari"],
  "Kenyatta": ["Blueberry Jam", "Creamy Carrot Soup", "Spicy Stir Fry", "Bluebristle Muujin Mane"],
  "Nai'O": ["Spice Sprouts", "Kilima Catfish", "Fried Catfish Dinner", "Fruit Smoothie Bowl"],
  "Najuma": ["Flint", "Garden Snail", "Cream of Tomato Soup", "Blueberry Pie"],
  "Reth": ["Sweet Leaf", "Sernuk Noodle Stew", "Kopaa Nuts", "Rockhopper Pumpkin"],
  "Sifuu": ["Stone Brick", "Oily Anchovy", "Proudhorned Sernuk Antlers", "Bean Burger"],
  "Subira": ["Napa Cabbage", "Rice", "Sashimi", "Enchanted Pupfish"],
  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Dragon's Beard Peat", "Void Ray"],
  "Tau": ["Common Field Cricket", "Duskwing Butterfly", "Ancient Wood", "Emerald Ogopuu Scale"],
  "The Gardener": ["Common Field Cricket", "Elder Clam Mushroom", "Sunburst Batterfly", "Ancient Amber Beetle"],
  "Tish": ["Sundrop Lily", "Glass Bulb", "Silk Thread", "Will-o-wisp Rockhopper"],
  "Zeki": ["Silver Salmon", "Golden Salmon", "Fried Catfish Dinner", "Platinum Bar"]
  
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