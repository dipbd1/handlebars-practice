const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');

// app.set('title', 'GeeksforGeeks');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations
app.engine(
    'hbs',
    handlebars({
        layoutsDir: __dirname + '/views/layouts/',
        defaultLayout: 'planB',
        extname: 'hbs',
        partialsDir: __dirname + '/views/partials/',
    }),
);
app.use(express.static('public'));
fakeApi = () => {
    return [
        {
            name: 'Katarina',
            lane: 'midlaner',
        },
        {
            name: 'Jayce',
            lane: 'toplaner',
        },
        {
            name: 'Heimerdinger',
            lane: 'toplaner',
        },
        {
            name: 'Zed',
            lane: 'midlaner',
        },
        {
            name: 'Azir',
            lane: 'midlaner',
        },
    ];
};
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    // res.render('main', { layout: 'index' });
	res.render('main', { layout: 'index', 
		suggestedChamps: fakeApi(),
		listExists: true});
});

app.listen(port, () => console.log(`App listening to port ${port}`));
