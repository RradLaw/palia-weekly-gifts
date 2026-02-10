let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

 "Ashura": ["Sapwood Plank", "Samara", "Honey", "Elderwood Pie"],

  "Auni": ["Unopened Oyster", "Proudhorned Stag Beetle", "Hairy Millipede", "Celebration Cake"],

  "Badruu": ["Carrot", "Hearty Vegetable Soup", "Batterfly Beans", "Azure Stonehopper"],

  "Caleri": ["Sundrop Lily", "Silk", "Chapaa Onigiri", "Chapaa Masala"],

  "Chayne": ["Carrot", "Glass Pane", "Pearl", "Elderwood Lotus"],

  "Delaila": ["Bahari Crab", "HydratePro Fertilizer", "Princess Ladybug", "Giant Goldfish"],

  "Einar": ["Mudminnow", "Prism Trout", "Ogopuu Scale", "Stormray"],

  "Elouisa": ["Spotted Stinkbug", "Bahari Bee", "Scarlet Koi", "Elder Shmole Spore"],

  "Eshe": ["Leather", "Bluefin Tuna", "Pumpkin Stew", "Elderflower"],

  "Hassian": ["Fur", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers", "Steak Dinner"],

  "Hekla": ["Grilled Fish", "Fried Catfish Dinner", "Black Sea Bass", "Celebration Cake"],

  "Hodari": ["Stone Brick", "Copper Bar", "Iron Ore", "Emerald Ogopuu Scale"],

  "Jel": ["Shell", "Duskray", "Thundering Eel", "Eleroo Eel"],

  "Jina": ["Shell", "Cotton", "Umbraan Betta", "Elderwood Lotus"],

  "Kenli": ["Chapaa Meat", "Hearty Vegetable Soup", "Fried Catfish Dinner", "Celebration Cake"],

  "Kenyatta": ["Sernuk Antlers", "Elder Sernuk Antlers", "Banded Muujin Mane", "Blood Beetle"],

  "Nai'O": ["Spice Sprouts", "Carrot", "Corn", "Veggie Chili"],

  "Najuma": ["Knapweed", "Garden Snail", "Apple", "Platinum Ore"],

  "Reth": ["Chapaa Meat", "Heat Root", "Batterfly Beans", "Fruit Smoothie Bowl"],

  "Sifuu": ["Grilled Meat", "Iron Ore", "Iron Bar", "Blood Beetle"],

  "Subira": ["Flow-Infused Wood", "Loaded Potato Soup", "Starry Bitterling", "Elderflower"],

  "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Hairy Millipede", "Leafstalker Mantis"],

  "Tau": ["Chapaa Meat", "Grilled Fish", "Sernuk Noodle Stew", "Will-o-wisp Rockhopper"],

  "The Gardener": ["Garden Millipede", "Elder Clam Mushroom", "Whitestone Slab", "Ancient Amber Beetle"],

  "Tish": ["Sweet Leaf", "Stuffed Cabbage Rolls", "Silk Thread", "Blueberry Pie"],

  "Zeki": ["Grilled Oyster", "Silk", "Steamed Fish", "Gold Bar"]

  
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