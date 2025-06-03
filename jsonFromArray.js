let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
  "Ashura": [
    "Silver Salmon",
    "Samara",
    "Fried Catfish Dinner",
    "Sushi"
  ],
  "Auni": [
    "Bristletail Dragonfly",
    "Bahari Bee",
    "Candied Kopaa Nuts",
    "Apple Pie"
  ],
  "Badruu": [
    "Tomato Plant Seed",
    "Wheat",
    "Blueberry Bush Seed",
    "Meaty Stir Fry"
  ],
  "Caleri": [
    "Grilled Mushroom",
    "Glass Bulb",
    "Chapaa Onigiri",
    "Chapaa Masala"
  ],
  "Chayne": [
    "Potato",
    "Juniper Seed",
    "Blueberry",
    "Palian Onion Soup"
  ],
  "Delaila": [
    "Bahari Crab",
    "QualityUp Fertilizer",
    "Apple Tree Seed",
    "Giant Goldfish"
  ],
  "Einar": [
    "Mudminnow",
    "Red-bellied Piranha",
    "Mottled Gobi",
    "Ancient Fish"
  ],
  "Elouisa": [
    "Dawnray",
    "Cytthroat Trout",
    "Willow Lamprey",
    "Majiri-of-War"
  ],
  "Eshe": [
    "Grilled Oyster",
    "Juniper Seed",
    "Proudhorned Sernuk Antlers",
    "Chapaa Masala"
  ],
  "Hassian": [
    "Fur",
    "Fabric",
    "Staircase Mushroom",
    "Dispel Arrow"
  ],
  "Hekla": [
    "Crystal Lake Lotus",
    "Fried Catfish Dinner",
    "Black Sea Bass",
    "Enchanted Pupfish"
  ],
  "Hodari": [
    "Paper Lantern Bug",
    "Elder Sernuk Antlers",
    "Starry Bitterling",
    "Emerald Ogopuu Scale"
  ],
  "Jel": [
    "Coral",
    "Sernuk Hide",
    "Gossamer Veil Moth",
    "Muujin Bahari"
  ],
  "Jina": [
    "Coral",
    "Glass Pane",
    "Midnight Floatfish",
    "Celebration Cake"
  ],
  "Kenli": [
    "Wagon Wheel",
    "Hearty Vegetable Soup",
    "Pumpkin Curry and Rice",
    "Bean Burger"
  ],
  "Kenyatta": [
    "Barracuda",
    "Pickled Onions",
    "Spicy Stir Fry",
    "Blood Beetle"
  ],
  "Nai'O": [
    "Spice Sprouts",
    "SpeedyGro Fertilizer",
    "Stalking Catfish",
    "Steak Dinner"
  ],
  "Najuma": [
    "Wild Garlic",
    "Garden Snail",
    "Iron Ore",
    "Silver Bar"
  ],
  "Reth": [
    "Sweet Leaf",
    "Heat Root",
    "Kopaa Nuts",
    "Palian Onion Soup"
  ],
  "Sifuu": [
    "Muujin Meat",
    "Pickled Carrots",
    "Cream of Tomato Soup",
    "Gold Bar"
  ],
  "Subira": [
    "Rainbow Trout",
    "Rice",
    "Red-bellied Piranha",
    "Rice Cake Stir Fry"
  ],
  "Tamala": [
    "Kilima Night Moth",
    "Garden Millipede",
    "Azure Stonehopper",
    "Ancient Amber Beetle"
  ],
  "Tau": [
    "Muujin Meat",
    "Duskwing Butterfly",
    "Sunburst Batterfly",
    "Will-o-wisp Rockhopper"
  ],
  "Tish": [
    "Wagon Wheel",
    "Heartwood Plank",
    "Flow-Infused Plank",
    "Angelfish"
  ],
  "Zeki": [
    "Silvery Minnow",
    "Silk",
    "Zeki's Flyer",
    "Bouillabaisse"
  ]
      
      
      
      
      

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