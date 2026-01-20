let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

 "Ashura": ["Congee", "Stickleback", "Reth's Century Egg", "Ancient Wood Seed"],

  "Auni": ["Brushtail Dragonfly", "Garden Snail", "Stripeshell Snail", "Celebration Cake"],

  "Badruu": ["Onion", "Corn Seed", "Ramen", "Azure Stonehopper"],

  "Caleri": ["Coral", "Glass Bulb", "Blushing Batterfly", "Bouillabaisse"],

  "Chayne": ["Crystal Lake Lotus", "Apple Jam", "Honey", "Green Pearl"],

  "Delaila": ["Clay", "QualityUp Fertilizer", "Vampire Crab", "Rockhopper Pumpkin"],

  "Einar": ["Worm", "Garden Snail", "Ancient Koi", "Enchanted Pupfish"],

  "Elouisa": ["Calico Koi", "Cantankerous Koi", "Flowtato", "Inyrevn Mermaid"],

  "Eshe": ["Leather", "Samara", "Pumpkin Stew", "Jewelwing Dragonfly"],

  "Hassian": ["Grilled Meat", "Standard Arrow", "Ogopuu Meat", "Fireworks Arrow"],

  "Hekla": ["Mountain Morel", "Largemouth Bass", "Pinecone", "Enchanted Pupfish"],

  "Hodari": ["Copper Ore", "Flow-Infused Wood", "Proudhorned Sernuk Antlers", "Firebreathing Dragonfly"],

  "Jel": ["Waterlogged Boot", "Muujin Mane", "Silk Thread", "Willow Lamprey"],

  "Jina": ["Mountain Morel", "Brightshroom", "Floatfish Mushroom", "Celebration Cake"],

  "Kenli": ["Chapaa Meat", "Garden Ladybug", "Elder Clam Mushroom Meat", "Akwinduu Chapaa"],

  "Kenyatta": ["Leather", "Cytthroat Trout", "Toadstool Floatfish", "Crimson Fangtooth"],

  "Nai'O": ["Waterlogged Boot", "Channel Catfish", "Bahari Pike", "Steak Dinner"],

  "Najuma": ["Tomato", "Garden Snail", "Cream of Tomato Soup", "Silver Bar"],

  "Reth": ["Wild Garlic", "Ramen", "Loaded Potato Soup", "Palian Onion Soup"],

  "Sifuu": ["Copper Ore", "Copper Bar", "Whitestone Slab", "Steak Dinner"],

  "Subira": ["Rainbow Trout", "Flow-Infused Plank", "Elderwood Orchid", "Elderflower"],

  "Tamala": ["Fur", "Garden Millipede", "Hairy Millipede", "Ancient Amber Beetle"],

  "Tau": ["Fried Catfish Dinner", "Duskwing Butterfly", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers"],

  "The Gardener": ["Glass Pane", "Elder Clam Mushroom", "Ancient Wood Seed", "Will-o-wisp Rockhopper"],

  "Tish": ["Sapwood Plank", "Heartwood Plank", "Ancient Wood Plank", "Green Pearl"],

  "Zeki": ["Grilled Oyster", "Golden Salmon", "Fish Tacos", "Piksii Shmole Spore"]


  
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