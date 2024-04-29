export const data= [
    {
        name:"Taylor Swift",
        imageUrl : "https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg"
    },
    {
        name:"The Weeknd",
        imageUrl : "https://m.media-amazon.com/images/M/MV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        name:"Kanye West",
        imageUrl : "https://media.gq.com/photos/5ad93798ceb93861adb912d8/1:1/w_2687,h_2687,c_limit/kanye-west-0814-GQ-FEKW01.01.jpg"
    },
    {
        name:"Drake",
        imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/800px-Drake_July_2016.jpg"
    },
    {
        name:"Lana Del Rey",
        imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg/640px-Lana_Del_Rey_%40_Grammy_Museum_10_13_2019_%2849311023203%29.jpg"
    },
    {
        name:"Kendrick Lamar",
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzP2hz4RqOmzawPEDVHpfRYTw3zS68ZIybJg&usqp=CAU"
    },
    {
        name:"Taylor Swift",
        imageUrl : "https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg"
    },
]

export const filterImageUrls = (data) => {
    const filteredUrls = {};
    data.forEach(({ name, imageUrl }) => {
      if (!filteredUrls[name]) {
        filteredUrls[name] = imageUrl;
      }
    });
    return filteredUrls;
  };