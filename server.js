var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: "Article One | Shubham Nagar",
        heading: "Article One",
        date: "Feb 18, 2018",
        content: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis vehicula risus in vulputate. Integer bibendum tellus in pretium pellentesque. Phasellus imperdiet quam tortor, sit amet viverra eros consectetur eget. Quisque consectetur et urna ut efficitur. Curabitur finibus magna ut nunc iaculis ultricies quis sed libero. Mauris lobortis ac sem id elementum. Praesent finibus neque nec dapibus dictum. Nullam luctus quis nibh et mollis. In hac habitasse platea dictumst. Donec luctus lacus vel risus lacinia gravida.
            </p>
            <p>
                Nullam venenatis sit amet nibh at rutrum. Nam elementum ac nisi vulputate lobortis. Curabitur ut ultrices ligula, non tempor lectus. Praesent mollis nibh nisi, in posuere tortor pharetra sit amet. Quisque at faucibus velit. Pellentesque consectetur tempus est in elementum. Duis ultricies ante id sapien pulvinar, vitae posuere leo dictum.
            </p>
            <p>
                In pulvinar sollicitudin felis, at vestibulum erat accumsan vel. Nam elit orci, maximus faucibus urna quis, dapibus consectetur libero. Mauris sodales tempus dui ac scelerisque. Maecenas sed gravida dui. Donec ornare odio velit, non maximus mauris bibendum ac. Proin sit amet condimentum ligula, vitae posuere massa. Etiam vestibulum urna dui, eu iaculis felis placerat vitae. Vivamus et tempus magna, ac dictum tellus.
            </p>`
    },
    'article-two': {
        title: "Article Two | Shubham Nagar",
        heading: "Article Two",
        date: "Feb 18, 2018",
        content: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis vehicula risus in vulputate. Integer bibendum tellus in pretium pellentesque. Phasellus imperdiet quam tortor, sit amet viverra eros consectetur eget. Quisque consectetur et urna ut efficitur. Curabitur finibus magna ut nunc iaculis ultricies quis sed libero. Mauris lobortis ac sem id elementum. Praesent finibus neque nec dapibus dictum. Nullam luctus quis nibh et mollis. In hac habitasse platea dictumst. Donec luctus lacus vel risus lacinia gravida.
            </p>
            <p>
                Nullam venenatis sit amet nibh at rutrum. Nam elementum ac nisi vulputate lobortis. Curabitur ut ultrices ligula, non tempor lectus. Praesent mollis nibh nisi, in posuere tortor pharetra sit amet. Quisque at faucibus velit. Pellentesque consectetur tempus est in elementum. Duis ultricies ante id sapien pulvinar, vitae posuere leo dictum.
            </p>
            <p>
                In pulvinar sollicitudin felis, at vestibulum erat accumsan vel. Nam elit orci, maximus faucibus urna quis, dapibus consectetur libero. Mauris sodales tempus dui ac scelerisque. Maecenas sed gravida dui. Donec ornare odio velit, non maximus mauris bibendum ac. Proin sit amet condimentum ligula, vitae posuere massa. Etiam vestibulum urna dui, eu iaculis felis placerat vitae. Vivamus et tempus magna, ac dictum tellus.
            </p>`
    },
    'article-three': {
        title: "Article Three | Shubham Nagar",
        heading: "Article Three",
        date: "Feb 18, 2018",
        content: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis vehicula risus in vulputate. Integer bibendum tellus in pretium pellentesque. Phasellus imperdiet quam tortor, sit amet viverra eros consectetur eget. Quisque consectetur et urna ut efficitur. Curabitur finibus magna ut nunc iaculis ultricies quis sed libero. Mauris lobortis ac sem id elementum. Praesent finibus neque nec dapibus dictum. Nullam luctus quis nibh et mollis. In hac habitasse platea dictumst. Donec luctus lacus vel risus lacinia gravida.
            </p>
            <p>
                Nullam venenatis sit amet nibh at rutrum. Nam elementum ac nisi vulputate lobortis. Curabitur ut ultrices ligula, non tempor lectus. Praesent mollis nibh nisi, in posuere tortor pharetra sit amet. Quisque at faucibus velit. Pellentesque consectetur tempus est in elementum. Duis ultricies ante id sapien pulvinar, vitae posuere leo dictum.
            </p>
            <p>
                In pulvinar sollicitudin felis, at vestibulum erat accumsan vel. Nam elit orci, maximus faucibus urna quis, dapibus consectetur libero. Mauris sodales tempus dui ac scelerisque. Maecenas sed gravida dui. Donec ornare odio velit, non maximus mauris bibendum ac. Proin sit amet condimentum ligula, vitae posuere massa. Etiam vestibulum urna dui, eu iaculis felis placerat vitae. Vivamus et tempus magna, ac dictum tellus.
            </p>`
    }
};

function createTemplate(data) {

    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article-number
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
