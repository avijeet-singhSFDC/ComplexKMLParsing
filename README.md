# ComplexKMLParsing
This is a simple node js based script which allows to convert KML files into Salesforce importable csv for Polygon Object to be used within Salesforce Field Service

## Steps to Execute
```
1) Create a Polygon using Google Maps (mymaps.google.com) or google earth
2) Export the Polygon as KML file
3) Place the KML file in the main directory
4) Change the env file to "KML_FILE_NAME=<SampleKML.kml>"
5) Run node index.js
6) A CSV is generated which can be populated with ServiceTerritoryId and uplaoded to Salesforce Polygon object to be used with Salesforce Field Service
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
NA
