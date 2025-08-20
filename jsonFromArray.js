let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

"Ashura": ["Channel Catfish", "Kilima Catfish", "Fish Stew", "Blueberry Pie"],
  "Auni": ["Common Field Cricket", "Rice Cake Stir Fry", "Piksii Berries", "Blood Beetle"],
  "Badruu": ["Onion Seed", "Spicy Pepper Seed", "Rockhopper Pumpkin Seed", "Cream of Mushroom Soup"],
  "Caleri": ["Briar Daisy", "Silk", "Cream of Tomato Soup", "Inyrevn Mermaid"],
  "Chayne": ["Potato Seed", "Wheat", "Blueberry", "Cream of Mushroom Soup"],
  "Delaila": ["Calico Koi", "Kilima Catfish", "Shepp's Pie", "Rockhopper Pumpkin"],
  "Einar": ["Spotted Bullhead", "Ribbontail Ray", "Palian Betta", "Cloudfish"],
  "Elouisa": ["Common Bark Cicada", "Paddlefish", "Leafstalker Mantis", "Ancient Amber Beetle"],
  "Eshe": ["Grilled Oyster", "Bluefin Tuna", "Yellowfin Tuna", "Black Pearl"],
  "Hassian": ["Flint", "Standard Arrow", "Azure Chapaa Tail", "Piksii Shmole Spore"],
  "Hekla": ["Sundrop Lily", "Acorn", "Chub", "Celebration Cake"],
  "Hodari": ["Copper Ore", "Elder Sernuk Antlers", "Stonefish", "Platinum Bar"],
  "Jel": ["Kilima Night Moth", "Bat Ray", "Oysters Akwinduu", "Midnight Paddlefish"],
  "Jina": ["Mountain Morel", "Glass Pane", "Nightshadow Batterfly", "Eleroo Eel"],
  "Kenli": ["Grilled Oyster", "Creamy Carrot Soup", "Loaded Flowtato", "Palian Onion Soup"],
  "Kenyatta": ["Emerald Carpet Moss", "Inky Dragonfly", "Lake Shark", "Meaty Stir Fry"],
  "Nai'O": ["Muujin Meat", "Pickled Potatoes", "Fried Catfish Dinner", "Veggie Chili"],
  "Najuma": ["Knapweed", "Garden Snail", "Flow-Infused Plank", "Veggie Chili"],
  "Reth": ["Sweet Leaf", "Pickled Onions", "Loaded Potato Soup", "Cream of Mushroom Soup"],
  "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Ogopuu Scale", "Fireworks Arrow"],
  "Subira": ["Copper Ore", "Flow-Infused Plank", "Ancient Wood", "Angelfish"],
  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Shmole Spore", "Leafstalker Mantis"],
  "Tau": ["Common Blue Butterfly", "Duskwing Butterfly", "Ogopuu Meat", "Emerald Ogopuu Scale"],
  "Tish": ["Coral", "Juniper Seed", "Whitestone", "Angelfish"],
  "Zeki": ["Unopened Oyster", "Fish Stew", "Mini Mullet", "Poke Bowl"]
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