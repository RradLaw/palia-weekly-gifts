let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
        "Ashura": ["Silver Salmon", "Striped Sturgeon", "Stalking Catfish", "Apple Pie"],
        "Auni": ["Common Field Cricket", "Garden Millipede", "Blueberry", "Blueberry Pie"],
        "Badruu": ["Rainbow Trout", "Creamy Carrot Soup", "Loaded Potato Soup", "Cream of Mushroom Soup"],
        "Caleri": ["Briar Daisy", "Silk", "Crucian Carp", "Hypnotic Moray"],
        "Chayne": ["Carrot Seed", "Wheat Seed", "Apple", "Cream of Mushroom Soup"],
        "Delaila": ["Cantankerous Koi", "QualityUp Fertilizer", "Stalking Catfish", "Gold Bar"],
        "Einar": ["Striped Dace", "Red-bellied Piranha", "Vampire Crab", "Radiant Sunfish"],
        "Elouisa": ["Ship Fragments", "Inky Dragonfly", "Beluga", "Flametongue Ray"],
        "Eshe": ["Fur", "Bluefin Tuna", "Sushi", "Gold Ore"],
        "Hassian": ["Leather", "Sernuk Noodle Stew", "Iron Ore", "Giant Kilima Stingray"],
        "Hekla": ["Briar Daisy", "Largemouth Bass", "Trout Dinner", "Enchanted Pupfish"],
        "Hodari": ["Copper Ore", "Heartwood", "Proudhorned Sernuk Antlers", "Steak Dinner"],
        "Jel": ["Eyeless Minnow", "Duskray", "Petit Fives", "Midnight Paddlefish"],
        "Jina": ["Coral", "Glass Pane", "Radiant Sunfish", "Celebration Cake"],
        "Kenli": ["Grilled Oyster", "Striped Chapaa Tail", "Princess Ladybug", "Palian Onion Soup"],
        "Kenyatta": ["Briar Daisy", "Pickled Onions", "Chili Oil Dumplings", "Fairy Mantis"],
        "Nai'O": ["Spice Sprouts", "QualityUp Fertilizer", "Blueberry Jam", "Steak Dinner"],
        "Najuma": ["Flint", "Garden Snail", "Apple Jam", "Blueberry Pie"],
        "Reth": ["Wild Garlic", "Rice", "Loaded Potato Soup", "Dari Cloves"],
        "Sifuu": ["Copper Ore", "Copper Bar", "Silver Ore", "Slowdown Arrow"],
        "Subira": ["Grilled Fish", "Radiant Sunfish", "Hearty Vegetable Soup", "Spitfire Cicada"],
        "Tamala": ["Common Field Cricket", "Lunar Fairy Moth", "Azure Stonehopper", "Ancient Amber Beetle"],
        "Tau": ["Sapwood Plank", "Steak Dinner", "Chapaa Masala", "Shimmerfin"],
        "Tish": ["Shell", "Heartwood Plank", "Pinecone", "Blueberry Pie"],
        "Zeki": ["Grilled Oyster", "Silk", "Proudhorned Sernuk Antlers", "Poke Bowl"]
      
      
      
      

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