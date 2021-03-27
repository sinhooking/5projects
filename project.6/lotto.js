const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');
const path = require('path');

// crawling
let lastLotto = 951;
const lottoInfomation = {};

for (let i = 600; i <= lastLotto; i++) {
    axios.get("...url", {
        params: {}
    }).then(({ data }) => {
        const $ = cheerio.load(data);

        const lottoWrap = $("#_lotto");
        const children = lottoWrap.find('.num_box').find('.num').toArray();

        lottoInfomation[i] = children.map((el) => $(el).text());
        
        if (Object.keys(lottoInfomation).length > lastLotto - 600) {
            fs.writeFileSync(`${path.resolve('lottos')}/lotto.json`, JSON.stringify(lottoInfomation));
        }
    })
}
