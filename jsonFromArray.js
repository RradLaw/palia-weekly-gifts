let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    "Ashura": ["Striped Dace", "Golden Salmon", "Sernuk Noodle Stew (♥)", "Blueberry Pie (♥)"],
    "Auni": ["Common Field Cricket", "Proudhorned Stag Beetle", "Petit Fives (♥)", "Celebration Cake (♥)"],
    "Badruu": ["Carrot Seed", "SpeedyGro Fertilizer", "Loaded Potato Soup (♥)", "Azure Stonehopper (♥)"],
    "Caleri": ["Grilled Mushroom", "Kilima Redfin", "Pinecone (♥)", "Dari Cloves (♥)"],
    "Chayne": ["Wild Ginger", "Wheat", "Cream of Tomato Soup (♥)", "Palian Onion Soup (♥)"],
    "Delaila": ["Rainbow Trout", "Kilima Catfish", "Shepp's Pie (♥)", "Gold Bar (♥)"],
    "Einar": ["Bahari Crab", "Prism Trout", "Glow Worm (♥)", "Fisherman's Brew (♥)"],
    "Elouisa": ["Ship Fragments", "Bahari Bee", "Raspberry Beetle (♥)", "Cloudfish (♥)"],
    "Eshe": ["Grilled Oyster", "Bluefin Tuna", "Silver Ore (♥)", "Gold Ore (♥)"],
    "Hassian": ["Spotted Chapaa Tail", "Sernuk Noodle Stew", "Iron Bar (♥)", "Shimmerfin (♥)"],
    "Hekla": ["Grilled Fish", "Painted Perch", "Beluga Sturgeon (♥)", "Enchanted Pupfish (♥)"],
    "Hodari": ["Fur", "Striped Chapaa Tail", "Iron Ore (♥)", "Firebreathing Dragonfly (♥)"],
    "Jel": ["Shell", "Albino Eel", "Pearl (♥)", "Green Pearl (♥)"],
    "Jina": ["Coral", "Duskwing Butterfly", "Dragon's Beard Peat (♥)", "Celebration Cake (♥)"],
    "Kenli": ["Wagon Wheel", "Fish Stew", "Oysters Akwinduu (♥)", "Bouillabaisse (♥)"],
    "Kenyatta": ["Barracuda", "Pickled Onions", "Banded Muujin Mane (♥)", "Crimson Fangtooth (♥)"],
    "Nai'O": ["Spice Sprouts", "QualityUp Fertilizer", "Blueberry Jam (♥)", "Steak Dinner (♥)"],
    "Najuma": ["Clay", "Copper Bar", "Iron Ore (♥)", "Silver Bar (♥)"],
    "Reth": ["Potato", "Sernuk Noodle Stew", "Apple (♥)", "Palian Onion Soup (♥)"],
    "Sifuu": ["Muujin Meat", "Pickled Carrots", "Silver Ore (♥)", "Swordfin Eel (♥)"],
    "Subira": ["Potato", "Steak Dinner", "Ancient Amber Beetle (♥)", "Spicy Rice Cakes (♥)"],
    "Tamala": ["Fur", "Garden Millipede", "Hairy Millipede (♥)", "Long Nosed Unicorn Fish (♥)"],
    "Tau": ["Sapwood Plank", "Unopened Oyster", "Brighteye Butterfly (♥)", "Wagon Wheel (♥)"],
    "Tish": ["Wagon Wheel", "Juniper Seed", "Pinecone (♥)", "Blueberry Pie (♥)"],
    "Zeki": ["Silver Salmon", "Golden Salmon", "Oysters Akwinduu (♥)", "Gold Ore (♥)"]
  }
  ;
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
        array[i] = array[i]?.replaceAll(" (♥)","");

        if(array[i] === "Blueberries") {
            array[i] = "Blueberry";
        } else if (array[i] === "Beluga Sturgeon") {
            array[i] = "Beluga";
        }

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