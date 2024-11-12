let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
    "Ashura": ["Congee", "Juniper Seed", "Reth's Century Egg", "Blueberry Pie"],
    "Auni": ["Common Blue Butterfly", "Duskwing Butterfly", "Apple", "Blueberry Pie"],
    "Badruu": ["Tomato", "HarvestBoost Fertilizer", "Ramen", "Cream of Mushroom Soup"],
    "Caleri": ["Wild Ginger", "Glass Bulb", "Bahari Glowbug", "Dari Cloves"],
    "Chayne": ["Onion", "Wheat", "Dragon's Beard Peat", "Green Pearl"],
    "Delaila": ["Rainbow Trout", "HydratePro Fertilizer", "Stalking Catfish", "Giant Goldfish"],
    "Einar": ["Bahari Crab", "Ribbontail Ray", "Flow-Infused Plank", "Enchanted Pupfish"],
    "Elouisa": ["Common Bark Cicada", "Cytthroat Trout", "Brighteye Butterfly", "Cloudfish"],
    "Eshe": ["Fur", "Fish Stew", "Sushi", "Jewelwing Dragonfly"],
    "Hassian": ["Mountain Morel", "Brightshroom", "Azure Chapaa Tail", "Slowdown Arrow"],
    "Hekla": ["Unopened Oyster", "Painted Perch", "Pinecone", "Celebration Cake"],
    "Hodari": ["Stone Brick", "Striped Chapaa Tail", "Azure Chapaa Tail", "Firebreathing Dragonfly"],
    "Jel": ["Fur", "Freshwater Eel", "Petit Fives", "Muujin Bahari"],
    "Jina": ["Mountain Morel", "Cotton", "Shimmerfin", "Dari Cloves"],
    "Kenli": ["Grilled Oyster", "Ramen", "Azure Chapaa Tail", "Iron Bar"],
    "Kenyatta": ["Brushtail Dragonfly", "Inky Dragonfly", "Spotted Mantis", "Meaty Stir Fry"],
    "Nai'O": ["Muujin Meat", "Kilima Catfish", "Fried Catfish Dinner", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Garden Snail", "Rice Cake Stir Fry", "Blueberry Pie"],
    "Reth": ["Chapaa Meat", "Rice", "Apple Jam", "Dari Cloves"],
    "Sifuu": ["Grilled Meat", "Iron Ore", "Silver Ore", "Silver Bar"],
    "Subira": ["Congee", "Gold Ore", "Long Nosed Unicorn Fish", "Spitfire Cicada"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Common Field Cricket", "Leather", "Carrot", "Wagon Wheel"],
    "Tish": ["Shell", "Heartwood Plank", "Celebration Cake", "Blueberry Pie"],
    "Zeki": ["Grilled Oyster", "Fish Stew", "Pulsating Triangle", "Dari Cloves"]
  
      
      
      
      
      
      

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