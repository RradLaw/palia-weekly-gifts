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
  "Congee",
  "Heartwood Plank",
  "Fish Stew",
  "Celebration Cake"
],
"Auni": [
  "Common Field Cricket",
  "Proudhorned Stag Beetle",
  "Apple",
  "Apple Pie"
],
"Badruu": [
  "Cotton Seed",
  "Orange Bluegill",
  "Loaded Potato Soup",
  "Meaty Stir Fry"
],
"Caleri": [
  "Knapweed",
  "Silk",
  "Blueberry Jam",
  "Inyrevn Mermaid"
],
"Chayne": [
  "Onion",
  "Creamy Carrot Soup",
  "Elder Clam Mushroom Meat",
  "Dari Cloves"
],
"Delaila": [
  "Channel Catfish",
  "QualityUp Fertilizer",
  "Mini Mullet",
  "Rocker Pumpkin"
],
"Einar": [
  "Silver Salmon",
  "Garden Snail",
  "Palian Betta",
  "Fisherman's Brew"
],
"Elouisa": [
  "Common Bark Cicada",
  "Cytthroat Trout",
  "Loaded Flowtato",
  "Rainbow-Tipped Butterfly"
],
"Eshe": [
  "Leather",
  "Bluefin Tuna",
  "Silk Thread",
  "Black Pearl"
],
"Hassian": [
  "Spotted Chapaa Tail",
  "Fabric",
  "Sabertoothed Anchovy",
  "Steak Dinner"
],
"Hekla": [
  "Unopened Oyster",
  "Painted Perch",
  "Ramen",
  "Enchanted Pupfish"
],
"Hodari": [
  "Spotted Chapaa Tail",
  "Striped Chapaa Tail",
  "Whitestone Slab",
  "Spitfire Cicada"
],
"Jel": [
  "Shell",
  "Silk",
  "Vampire Crab",
  "Bean Burger"
],
"Jina": [
  "Mountain Morel",
  "Brightshroom",
  "Bacon-Stuffed Mushrooms",
  "Void Ray"
],
"Kenli": [
  "Spotted Chapaa Tail",
  "Creamy Carrot Soup",
  "Sushi",
  "Gold Bar"
],
"Kenyatta": [
  "Blueberry Jam",
  "Cytthroat Trout",
  "Alligator Gar",
  "Majiri-of-War"
],
"Nai'O": [
  "Muujin Meat",
  "Pickled Potatoes",
  "Fried Catfish Dinner",
  "Veggie Chili"
],
"Najuma": [
  "Flint",
  "Garden Snail",
  "Flowtato Fries with Ketchup",
  "Veggie Chili"
],
"Reth": [
  "Carrot",
  "Heat Root",
  "Ogopuu Meat",
  "Fruit Smoothie Bowl"
],
"Sifuu": [
  "Chapaa Meat",
  "Oily Anchovy",
  "Proudhorned Sernuk Antlers",
  "Gold Bar"
],
"Subira": [
  "Grilled Mushroom",
  "Fish Stew",
  "Elderwood Orchid",
  "Energised Piranha"
],
"Tamala": [
  "Spice Sprouts",
  "Lunar Fairy Moth",
  "Hairy Millipede",
  "Fairy Mantis"
],
"Tau": [
  "Common Blue Butterfly",
  "Steak Dinner",
  "Chapaa Masala",
  "Rainbow-Tipped Butterfly"
],
"Tish": [
  "Crystal Lake Lotus",
  "Heartwood Plank",
  "Whitestone",
  "Blueberry Pie"
],
"Zeki": [
  "Grilled Fish",
  "Golden Salmon",
  "Crab Gumbo",
  "Gold Ore"
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