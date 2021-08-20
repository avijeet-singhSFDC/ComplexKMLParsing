require('dotenv').config();
const fs = require('fs');
const xml2js = require("xml2js");
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const randomColor = require('randomcolor');
const builder = require('xmlbuilder');

let xmlDoc;

  const csvWriter = createCsvWriter({
    header: ['Name', 'FSL__KML__c', 'FSL__Color__c', 'FSL__Service_Territory__c'],
    path: process.env.KML_FILE_NAME.replace('.kml','')+'.csv'
});

fs.readFile('./'+process.env.KML_FILE_NAME, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    xml2js.parseString(data, function (err, result) {
        //console.dir(JSON.stringify(result));
      if (result.kml.Document[0].Folder != undefined) {
        console.log('folder exists');
        let FSLPolygonsList = [];
        result.kml.Document[0].Folder.forEach(folder => {
          if (folder.Placemark != undefined)   {
            console.log(folder.Placemark.length);            
            folder.Placemark.forEach(placemark => {
              let FSLPolygonRow = [];
              let FSL__KML__c ;
                let feedObj = { 
                    'kml': {
                      '@xmlns': 'http://www.opengis.net/kml/2.2',
                      'Style': { '@id': 'myPolygonStyle',
                            'LineStyle': { 
                                'width': 1
                            },
                            'PolyStyle': { 
                                'color': '#ffffff'
                            },
                        },                      
                      'Placemark': { 
                        'name':'myPolygon',
                        'styleUrl':'#myPolygonStyle',
                        'styleUrl':'#myPolygonStyle',
                        'Polygon' : placemark.Polygon ? placemark.Polygon[0] : ''                                          
                      }
                    }
                  }
                let feed = builder.create(feedObj, { encoding: 'utf-8' });
                FSLPolygonRow.push(placemark.name);
                try{
                    FSLPolygonRow.push(feed.end({ pretty: true }));
                }
                catch(err){
                    FSLPolygonRow.push('');
                }
                FSLPolygonRow.push(randomColor());
                FSLPolygonRow.push('ServiceTerritoryId');
                FSLPolygonsList.push(FSLPolygonRow);
            });
          }
        });
        csvWriter.writeRecords(FSLPolygonsList)       // returns a promise
            .then(() => {
                console.log('...Done');
        });
      }
        
      if (result.kml.Document[0].Folder === undefined) {
        if (result.kml.Document[0].Placemark.length > 0)   {
            console.dir(result.kml.Document[0].Placemark.length);
            let FSLPolygonsList = [];
            result.kml.Document[0].Placemark.forEach(element => {
                let FSLPolygonRow = [];

                //console.dir(JSON.stringify(element));
                let FSL__KML__c ;
                let feedObj = { 
                    'kml': {
                      '@xmlns': 'http://www.opengis.net/kml/2.2',
                      'Style': { '@id': 'myPolygonStyle',
                            'LineStyle': { 
                                'width': 1
                            },
                            'PolyStyle': { 
                                'color': '#ffffff'
                            },
                        },                      
                      'Placemark': { 
                        'name':'myPolygon',
                        'styleUrl':'#myPolygonStyle',
                        'styleUrl':'#myPolygonStyle',
                        'Polygon' : element.Polygon ? element.Polygon[0] : ''                                          
                      }
                    }
                  }
                let feed = builder.create(feedObj, { encoding: 'utf-8' })
                //console.log(feed.end({ pretty: true })); 

                FSLPolygonRow.push(element.name);
                try{
                    FSLPolygonRow.push(feed.end({ pretty: true }));
                }
                catch(err){
                    FSLPolygonRow.push('');
                }
                FSLPolygonRow.push(randomColor());
                FSLPolygonRow.push('ServiceTerritoryId');
                FSLPolygonsList.push(FSLPolygonRow);                
            });
            csvWriter.writeRecords(FSLPolygonsList)       // returns a promise
                .then(() => {
                    console.log('...Done');
            });
        }
      }
    });
})