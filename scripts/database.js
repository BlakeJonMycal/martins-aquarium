
const database = {
    fish: [
        {
          name: "Goldie",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg", 
          species: "Goldfish",
          location: "Pacific Ocean",
          length: 15,
          diet: "Herbivore"
        },
        {
          name: "Nemo",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Clownfish",
          location: "Indian Ocean",
          length: 7,
          diet: "Omnivore"
        },
        {
          name: "Bubbles",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Angelfish",
          location: "Atlantic Ocean",
          length: 12,
          diet: "Carnivore"
        },
        {
          name: "Dory",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Tetra",
          location: "Mediterranean Sea",
          length: 5,
          diet: "Herbivore"
        },
        {
          name: "Finley",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Guppy",
          location: "Arctic Ocean",
          length: 3,
          diet: "Omnivore"
        },
        {
          name: "Splash",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Discus",
          location: "Amazon River",
          length: 20,
          diet: "Omnivore"
        },
        {
          name: "Marlin",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Blue Marlin",
          location: "Gulf of Mexico",
          length: 300,
          diet: "Carnivore"
        },
        {
          name: "Spike",
          image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
          species: "Porcupinefish",
          location: "Red Sea",
          length: 30,
          diet: "Carnivore"
        },
        
        ],
    harvest: [
          {
            location: "Pacific Ocean",
          },
          {
            location: "Indian Ocean",
          },
          {
            location: "Atlantic Ocean",
          },
          {
            location: "Mediterranean Sea",
          },
          {
            location: "Arctic Ocean",
          },
        ],
    tips: [
          {
            advice: "Regular water changes are crucial for maintaining a healthy environment for your fish. Aim to change about 10-20% of the tank water every 1-2 weeks, or as needed based on water quality tests.",
          },
          {
            advice: "Keep an eye on important water parameters such as temperature, pH, ammonia, nitrite, and nitrate levels. Invest in a good quality water testing kit to regularly check these parameters.",
          },
          {
            advice: "Overfeeding is a common mistake in fish keeping that can lead to water quality issues. Feed your fish a balanced diet suitable for their species, and avoid giving them more food than they can consume in a few minutes.",
          },
        ],   
    quote: [
          {
            inspo: "Fishing is not an escape from life, but often a deeper immersion into it.",
          },
          {
            inspo: "Fishermen are the people who harvest the bounty of the sea.",
          },
          {
            inspo: "The charm of fishing is that it is the pursuit of what is elusive but attainable.",
          },
        ],   
    } 
    export const getFish = () => {
        return database.fish.map(fish => ({...fish}))
    }
    export const getHarvest = () => {
      return database.harvest.map(harvest => ({...harvest}))
   
    }
    export const getTips = () => {
       return database.tips.map(tips => ({...tips}))
  
    }
    export const getQuotes = () => {
      return database.quote.map(quote => ({...quote}))
    }