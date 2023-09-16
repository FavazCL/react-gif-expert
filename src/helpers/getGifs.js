export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YdmLdw7v7ljmS2sxNSr02rAoc8eamL52&limit=10&q=${category}`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs;
  };
