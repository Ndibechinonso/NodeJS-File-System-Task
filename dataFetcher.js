var http = require('http')

var fs = require('fs')


fs.mkdir('/Users/NDIBE CHINONSO/Desktop/Zuri-server/result', { recursive: true }, (err) => {
    if (err) throw err;
})

http.get("http://jsonplaceholder.typicode.com/posts", function (res) {

    let data = '';

    res.on('data', function (chunk) {
        data += chunk
    });

    res.on('end', () => {
        fs.writeFile('./result/posts.json', data, (err) => {
            if (err) throw err;
        })
    });
    console.log('File created')
});



