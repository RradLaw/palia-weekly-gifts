let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

 "Ashura": ["Channel Catfish", "Prism Trout", "Sernuk Noodle Stew", "Ancient Wood Seed"],
  "Auni": ["Brushtail Dragonfly", "Cerulean Cicada", "Spotted Mantis", "Blood Beetle"],
  "Badruu": ["Rosy Bitterling", "Hearty Vegetable Soup", "Loaded Potato Soup", "Cream of Mushroom Soup"],
  "Caleri": ["Crystal Lake Lotus", "Silk", "Crucian Carp", "Elderwood Pie"],
  "Chayne": ["Carrot Seed", "Hearty Vegetable Soup", "Cream of Tomato Soup", "Palian Onion Soup"],
  "Delaila": ["Muujin Meat", "Kilima Catfish", "Lake Shark", "Rockhopper Pumpkin"],
  "Einar": ["Mudminnow", "Yellow Perch", "Ancient Koi", "Cactus Moray"],
  "Elouisa": ["Calico Koi", "Cantankerous Koi", "Beluga Sturgeon", "Elder Shmole Spore"],
  "Eshe": ["Fur", "Samara", "Yellowfin Tuna", "Jewelwing Dragonfly"],
  "Hassian": ["Leather", "Sernuk Noodle Stew", "Azure Chapaa Tail", "Waveback Ogopuu Scale"],
  "Hekla": ["Briar Daisy", "Painted Perch", "Black Sea Bass", "Enchanted Pupfish"],
  "Hodari": ["Fur", "Copper Bar", "Hot Hounds", "Platinum Bar"],
  "Jel": ["Eyeless Minnow", "Sernuk Hide", "Banded Muujin Mane", "Bluebristle Muujin Mane"],
  "Jina": ["Mountain Morel", "Duskwing Butterfly", "Midnight Floatfish", "Celebration Cake"],
  "Kenli": ["Chapaa Meat", "Garden Ladybug", "Soon Tofu", "Elderwood Pie"],
  "Kenyatta": ["Garden Mantis", "Cytthroat Trout", "Pinecone", "Bluebristle Muujin Mane"],
  "Nai'O": ["Muujin Meat", "Heartwood Plank", "Blueberry Bush Seed", "Fruit Smoothie Bowl"],
  "Najuma": ["Sweet Leaf", "Garden Snail", "Stripeshell Snail", "Platinum Ore"],
  "Reth": ["Potato", "Spicy Pepper", "Raspberry Beetle", "Cream of Mushroom Soup"],
  "Sifuu": ["Muujin Meat", "Pickled Carrots", "Whitestone Slab", "Slowdown Arrow"],
  "Subira": ["Fur", "Ancient Fish", "Chili Oil Dumplings", "Enchanted Pupfish"],
  "Tamala": ["Spice Sprouts", "Garden Millipede", "Toadstool Floatfish", "Inyrevn Mermaid"],
  "Tau": ["Fried Catfish Dinner", "Oily Anchovy", "Brighteye Butterfly", "Rainbow-Tipped Butterfly"],
  "Tish": ["Sundrop Lily", "Samara", "Whitestone", "Blueberry Pie"],
  "Zeki": ["Grilled Fish", "Fish Stew", "Pearl", "Platinum Bar"]
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