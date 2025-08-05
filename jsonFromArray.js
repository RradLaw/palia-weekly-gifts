let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Samara", "Crab Pot Pie", "Blueberry Pie"],
  "Auni": ["Ship Fragments", "Bahari Bee", "Firebreathing Dragonfly", "Blood Beetle"],
  "Badruu": ["Tomato Plant Seed", "Rice", "Loaded Potato Soup", "Cream of Mushroom Soup"],
  "Caleri": ["Grilled Mushroom", "Silk", "Chapaa Onigiri", "Hypnotic Moray"],
  "Chayne": ["Tomato Plant Seed", "Blueberry Bush Seed", "Pearl", "Cream of Mushroom Soup"],
  "Delaila": ["Cantankerous Koi", "Orange Bluegill", "Scarlet Koi", "Rockhopper Pumpkin"],
  "Einar": ["Striped Dace", "Garden Snail", "Flow-Infused Plank", "Enchanted Pupfish"],
  "Elouisa": ["Oyster Meat", "Albino Eel", "Willow Lamprey", "Midnight Paddlefish"],
  "Eshe": ["Fur", "Fish Stew", "Yellowfin Tuna", "Emerald Ogopuu Scale"],
  "Hassian": ["Fur", "Chapaa Asada Tacos", "Azure Chapaa Tail", "Eleroo Eel"],
  "Hekla": ["Grilled Mushroom", "Bahari Bream", "Cream of Mushroom Soup", "Enchanted Pupfish"],
  "Hodari": ["Stone Brick", "Flow-Infused Wood", "Hot Hounds", "Platinum Ore"],
  "Jel": ["Coral", "Freshwater Eel", "Oysters Akwinduu", "Bluebristle Muujin Mane"],
  "Jina": ["Mountain Morel", "Cotton", "Ogopuu Skin", "Rainbow-Tipped Butterfly"],
  "Kenli": ["Wagon Wheel", "Striped Chapaa Tail", "Azure Chapaa Tail", "Muujin Bahari"],
  "Kenyatta": ["Knapweed", "Cytthroat Trout", "Kimchi Fried Rice", "Blood Beetle"],
  "Nai'O": ["Muujin Meat", "QualityUp Fertilizer", "Mossyfin", "Steak Dinner"],
  "Najuma": ["Sweet Leaf", "Garden Snail", "Floatfish Mushroom", "Silver Bar"],
  "Reth": ["Chapaa Meat", "Rice", "Flowtato Fries with Ketchup", "Dari Cloves"],
  "Sifuu": ["Stone Brick", "Oily Anchovy", "Grumpy Granite Rockhopper", "Platinum Ore"],
  "Subira": ["Copper Bar", "Steak Dinner", "Starry Bitterling", "Rice Cake Stir Fry"],
  "Tamala": ["Spice Sprouts", "Lunar Fairy Moth", "Ogopuu Skin", "Fairy Mantis"],
  "Tau": ["Sapwood Plank", "Striped Chapaa Tail", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers"],
  "Tish": ["Clay", "Juniper Seed", "Whitestone", "Green Pearl"],
  "Zeki": ["Silvery Minnow", "Fish Stew", "Ancient Koi", "Bouillabaisse"]
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