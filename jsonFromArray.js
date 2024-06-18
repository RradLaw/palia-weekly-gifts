let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Grilled Fish", "Striped Sturgeon", "Fish Stew", "Trout Dinner"],
  "Auni": ["Unopened Oyster", "Garden Snail", "Spotted Mantis", "Celebration Cake"],
  "Badruu": ["Onion", "HydratePro Fertilizer", "Apple Tree Seed", "Meaty Stir Fry"],
  "Caleri": ["Sundrop Lily", "Kilima Redfin", "Oysters Akwinduu", "Hypnotic Moray"],
  "Chayne": ["Tomato Plant Seed", "Hearty Vegetable Soup", "Pearl", "Palian Onion Soup"],
  "Delaila": ["Cantankerous Koi", "Kilima Catfish", "Blueberry Bush Seed", "Gold Bar"],
  "Einar": ["Striped Dace", "Spineshell Crab", "Mottled Gobi", "Stormray"],
  "Elouisa": ["Dawnray", "Albino Eel", "Thundering Eel", "Midnight Paddlefish"],
  "Eshe": ["Leather", "Samara", "Apple Jam", "Palian Onion Soup"],
  "Hassian": ["Congee", "Brightshroom", "Iron Bar", "Giant Kilima Stingray"],
  "Hekla": ["Grilled Meat", "Largemouth Bass", "Trout Dinner", "Celebration Cake"],
  "Hodari": ["Grilled Meat", "Heartwood", "Blue Marlin", "Firebreathing Dragonfly"],
  "Jel": ["Barracuda", "Freshwater Eel", "Pearl", "Bluebristle Muujin Mane"],
  "Jina": ["Coral", "Cotton", "Brighteye Butterfly", "Void Ray"],
  "Kenli": ["Grilled Fish", "Creamy Carrot Soup", "Princess Ladybug", "Meaty Stir Fry"],
  "Kenyatta": ["Brushtail Dragonfly", "Acorn", "Alligator Gar", "Fairy Mantis"],
  "Nai'O": ["Spice Sprouts", "Pickled Potatoes", "Fried Catfish Dinner", "Steak Dinner"],
  "Najuma": ["Wild Garlic", "Copper Bar", "Apple", "Silver Bar"],
  "Reth": ["Congee", "Largemouth Bass", "Raspberry Beetle", "Palian Onion Soup"],
  "Sifuu": ["Sernuk Antlers", "Copper Bar", "Silver Ore", "Fireworks Arrow"],
  "Subira": ["Rainbow Trout", "Flow-Infused Plank", "Steamed Fish", "Spitfire Cicada"],
  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Hairy Millipede", "Ancient Amber Beetle"],
  "Tau": ["Common Blue Butterfly", "Heartwood Plank", "Oyster Meat", "Proudhorned Sernuk Antlers"],
  "Tish": ["Coral", "Juniper Seed", "Pinecone", "Blueberry Pie"],
  "Zeki": ["Grilled Oyster", "Golden Salmon", "Steamed Fish", "Poke Bowl"]







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