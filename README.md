# ComplexKMLParsing
This is a simple node js based script which allows to convert KML files into Salesforce importable csv for Polygon Object to be used within Salesforce Field Service

## Steps to Execute

1) Create a Polygon using Google Maps (mymaps.google.com) or google earth
2) Export the Polygon as KML file
3) Place the KML file in the main directory
4) Create a .env file in root folder with the following content :-

```

  KML_FILE_NAME=SampleKMLFileName.kml
  
```
5) Run node index.js
6) A CSV is generated which can be populated with ServiceTerritoryId and uploaded to Salesforce Polygon object to be used with Salesforce Field Service


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Credits
 
Avijeet Singh - Salesforce
 
## License
 
The MIT License (MIT)

Copyright (c) 2021 Avijeet Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
