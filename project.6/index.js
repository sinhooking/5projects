const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');
const path = require('path');

(async () => {
    const { data } = await axios.get("...url");

    const $ = cheerio.load(data);

    const parentDiv = $(".e3fgkal0").toArray();

    parentDiv.map(el => {
        (async () => {
            const movieTitle = $(el).find('a').attr('title');
            const movieImgSrc = $(el).find('img').attr('src');

            const imageTypes = ['jpg', 'png'];
            imageTypes.map(imgeType => movieImgSrc.indexOf(imgeType))
            let imageType = false;

            for (let i = 0; i < imageTypes.length; i++) {
                if (movieImgSrc.toLowerCase().indexOf(imageTypes[i]) >= 0) {
                    imageType = imageTypes[i];
                    break;
                }
            }

            try {
                const imgResult = await axios.get(movieImgSrc, {
                    responseType: 'arraybuffer'
                });

                fs.writeFileSync(`${path.resolve('imgaes')}/${movieTitle.replace(':', '\-')}.${imageType}`, imgResult.data);

            } catch (error) {
                console.log(error)
            }
        })();
    });
})();
