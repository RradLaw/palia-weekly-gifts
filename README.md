# Palia Weekly Gifts

The file `index.json` is used to give users of the [Palia Guide by A J Lake app](https://paliaguide.websitesbyastrea.com.au/) their weekly gifts.

There are three variables needed for each gift:
- "name" is the name of the item.
- "type" is the collection the item appears in. Possible options are "Dish", "Bug", "Cooking Product", "Crop", "Equipment", "Fish", "Gatherable", "Material", and "Unknown".
- "updated" is the Unix epoch time in milliseconds of when the item was last updated. [This Site](https://www.epochconverter.com/) can be used to generate it (be sure to add 3 zeros to the end so it's not in seconds!)

## Pull Requests
The Palia Guide development team aims to have this updated around Monday Evening Australian time each week, but we are very open to Pull Requests to have it updated sooner!

To help update this, first fork the repository, make changes locally, then submit a pull request.
