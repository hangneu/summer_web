module.exports = function (app,models) {
    var multer = require('multer'); // npm install multer --save
    var  widgets = [
  { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
  { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
    "url": "http://lorempixel.com/400/200/"},
  { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
  { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
  { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
    "url": "https://youtu.be/AM2Ivdi9c4E" },
  { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

    var upload = multer({ dest: __dirname+'/../../public/upload' });

    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.get("/api/widget/:widgetId",findWidgetById);

    function findWidgetById(req,res){
        var widgetId = req.params.widgetId;
        for(var i in widgets){
            if(widgets[i]._id === widgetId){
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).sned("Unable to find widget with id: "+ widgetId);
    }

    function uploadImage(req, res) {

        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;
        
        for(var i in widgets){
            if(widgets[i]._id === widgetId){
                widgets[i].url = "/upload/" + filename;
            }
        }

        res.redirect("/assignment/#/user/:userId/website/:websiteId/page/:pageId/widget/"+widgetId);
    }
}