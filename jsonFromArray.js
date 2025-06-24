let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

 "Ashura": ["Sweet Leaf", "Golden Salmon", "Flow-Infused Plank", "Sashimi"],
  "Auni": ["Brushtail Dragonfly", "Garden Millipede", "Stripeshell Snail", "Apple Pie"],
  "Badruu": ["Carrot Seed", "Rice Seed", "Rockhopper Pumpkin Seed", "Meaty Stir Fry"],
  "Caleri": ["Paper Lantern Bug", "Silk", "Pinecone", "Elderwood Pie"],
  "Chayne": ["Crystal Lake Lotus", "Rice Seed", "Dragon's Beard Peat", "Dari Cloves"],
  "Delaila": ["Muujin Meat", "HydratePro Fertilizer", "Blueberry Bush Seed", "Rockhopper Pumpkin"],
  "Einar": ["Eyeless Minnow", "Ribbontail Ray", "Mini Mullet", "Long Nosed Unicorn Fish"],
  "Elouisa": ["Calico Koi", "Cantankerous Koi", "Brighteye Butterfly", "Fairy Mantis"],
  "Eshe": ["Fur", "Samara", "Silk Thread", "Jewelwing Dragonfly"],
  "Hassian": ["Congee", "Sernuk Hide", "Sabertoothed Anchovy", "Shimmerfin"],
  "Hekla": ["Oyster Meat", "Bahari Bream", "Pearl", "Celebration Cake"],
  "Hodari": ["Sernuk Antlers", "Flow-Infused Wood", "Loaded Potato Soup", "Spitfire Cicada"],
  "Jel": ["Barracuda", "Albino Eel", "Scintillating Centipede", "Willow Lamprey"],
  "Jina": ["Mountain Morel", "Heat Root", "Mutated Angler", "Elderwood Lotus"],
  "Kenli": ["Wagon Wheel", "Garden Ladybug", "Sashimi", "Akwinduu Chapaa"],
  "Kenyatta": ["Sundrop Lily", "Inky Dragonfly", "Proudhorned Sernuk Antlers", "Fairy Mantis"],
  "Nai'O": ["Muujin Meat", "Heartwood Plank", "Apple Tree Seed", "Fruit Smoothie Bowl"],
  "Najuma": ["Knapweed", "Garden Snail", "Honey Loach", "Veggie Chili"],
  "Reth": ["Sernuk Meat", "Wheat", "Cream of Tomato Soup", "Fruit Smoothie Bowl"],
  "Sifuu": ["Sernuk Meat", "Elder Sernuk Antlers", "Tinfin", "Gold Ore"],
  "Subira": ["Flow-Infused Wood", "Gold Bar", "Standard Arrow", "Rice Cake Stir Fry"],
  "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Hairy Millipede", "Leafstalker Mantis"],
  "Tau": ["Fried Catfish Dinner", "Grilled Fish", "Ancient Wood", "Grilled Meat"],
  "Tish": ["Clay", "Heartwood Plank", "Whitestone", "Green Pearl"],
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