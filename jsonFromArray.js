let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
    "Ashura": ["Silver Salmon", "Acorn", "Fish Stew", "Blueberry Pie"],
    "Auni": ["Brushtail Dragonfly", "Proudhorned Stag Beetle", "Stripeshell Snail", "Blueberry Pie"],
    "Badruu": ["Wagon Wheel", "Wheat Seed", "Apple Tree Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Emerald Carpet Moss", "Silk", "Chapaa Onigiri", "Chapaa Masala"],
    "Chayne": ["Potato", "Apple Jam", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
    "Delaila": ["Channel Catfish", "QualityUp Fertilizer", "Princess Ladybug", "Gold Bar"],
    "Einar": ["Spotted Bullhead", "Mirror Carp", "Mottled Gobi", "Cactus Moray"],
    "Elouisa": ["Dawnray", "Albino Eel", "Spitfire Cicada", "Green Pearl"],
    "Eshe": ["Leather", "Samara", "Sushi", "Palian Onion Soup"],
    "Hassian": ["Grilled Meat", "Sernuk Noodle Stew", "Iron Ore", "Slowdown Arrow"],
    "Hekla": ["Crystal Lake Lotus", "Acorn", "Ramen", "Green Pearl"],
    "Hodari": ["Fur", "Sernuk Noodle Stew", "Iron Bar", "Steak Dinner"],
    "Jel": ["Waterlogged Boot", "Striped Chapaa Tail", "Petit Fives", "Green Pearl"],
    "Jina": ["Coral", "Heat Root", "Shimmerfin", "Void Ray"],
    "Kenli": ["Grilled Fish", "Creamy Carrot Soup", "Sushi", "Muujin Bahari"],
    "Kenyatta": ["Blueberry Jam", "Acorn", "Spicy Rice Cakes", "Crimson Fangtooth"],
    "Nai'O": ["Spice Sprouts", "Pickled Potatoes", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Garden Snail", "Flow-Infused Plank", "Blueberry Pie"],
    "Reth": ["Tomato", "Rice", "Apple", "Dari Cloves"],
    "Sifuu": ["Stone Brick", "Oily Anchovy", "Silver Ore", "Gold Bar"],
    "Subira": ["Flow-Infused Wood", "Steak Dinner", "Rainbow-Tipped Butterfly", "Enchanted Pupfish"],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Azure Stonehopper", "Fairy Mantis"],
    "Tau": ["Common Blue Butterfly", "Unopened Oyster", "Elder Sernuk Antlers", "Apple"],
    "Tish": ["Sundrop Lily", "Heartwood Plank", "Pinecone", "Green Pearl"],
    "Zeki": ["Coral", "Silk", "Pulsating Triangle", "Green Pearl"]
      
      
      
      
      
      

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