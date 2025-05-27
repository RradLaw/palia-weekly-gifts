let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
  "Ashura": ["Congee", "Juniper Seed", "Reth's Century Egg", "Sushi"],
  "Auni": ["Ship Fragments", "Garden Mantis", "Scintillating Centipede", "Apple Pie"],
  "Badruu": ["Carrot", "Spicy Pepper Seed", "Rockhopper Pumpkin Seed", "Azure Stonehopper"],
  "Caleri": ["Shell", "Heat Root", "Oysters Akwinduu", "Dari Cloves"],
  "Chayne": ["Knapweed", "Rice", "Apple", "Dari Cloves"],
  "Delaila": ["Rosy Bitterling", "Garden Ladybug", "Vampire Crab", "Rockhopper Pumpkin"],
  "Einar": ["Silvery Minnow", "Fairy Carp", "Flow-Infused Plank", "Blue Spotted Ray"],
  "Elouisa": ["Oyster Meat", "Albino Eel", "Pearl", "Flametongue Ray"],
  "Eshe": ["Fur", "Fish Stew", "Proudhorned Sernuk Antlers", "Emerald Ogopuu Scale"],
  "Hassian": ["Sernuk Antlers", "Elder Sernuk Antlers", "Sabertoothed Anchovy", "Dispel Arrow"],
  "Hekla": ["Crystal Lake Lotus", "Acorn", "Trout Dinner", "Celebration Cake"],
  "Hodari": ["Muujin Meat", "Sernuk Noodle Stew", "Loaded Potato Soup", "Spitfire Cicada"],
  "Jel": ["Leather", "Muujin Mane", "Gossamer Veil Moth", "Green Pearl"],
  "Jina": ["Mountain Morel", "Cotton Seed", "Umbraan Betta", "Cream of Mushroom Soup"],
  "Kenli": ["Grilled Fish", "Fish Stew", "Oysters Akwinduu", "Bouillabaisse"],
  "Kenyatta": ["Garden Mantis", "Inky Dragonfly", "Toadstool Floatfish", "Bluebristle Muujin Mane"],
  "Nai'O": ["Muujin Meat", "QualityUp Fertilizer", "Mossyfin", "Steak Dinner"],
  "Najuma": ["Tomato Plant Seed", "Garden Snail", "Apple", "Silver Bar"],
  "Reth": ["Yellow Perch", "Heat Root", "Batterfly Beans", "Palian Onion Soup"],
  "Sifuu": ["Chapaa Meat", "Standard Arrow", "Cream of Tomato Soup", "Slowdown Arrow"],
  "Subira": ["Spice Sprouts", "Grilled Oyster", "Veil Piksii", "Angelfish"],
  "Tamala": ["Kilima Night Moth", "Brightshroom", "Azure Stonehopper", "Ancient Amber Beetle"],
  "Tau": ["Sapwood Plank", "Sernuk Antlers", "Golden Salmon", "Will-o-wisp Rockhopper"],
  "Tish": ["Coral", "Heartwood Plank", "Whitestone", "Will-o-wisp Rockhopper"],
  "Zeki": ["Unopened Oyster", "Golden Salmon", "Golden Glory Bee", "Gold Bar"]
      
      
      
      
      

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