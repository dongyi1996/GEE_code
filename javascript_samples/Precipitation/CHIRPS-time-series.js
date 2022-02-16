/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[34.07081398120226, 37.574141481489484],
          [34.07081398120226, 31.572869253887717],
          [42.90382179370226, 31.572869253887717],
          [42.90382179370226, 37.574141481489484]]], null, false),
    imageVisParam = {"opacity":1,"bands":["precipitation"],"max":5.067398548126221,"palette":["ffffff","0e70ff"]},
    geometry2 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[38.47009878292139, 35.76445251865154],
          [39.09631948604639, 35.74662132333978],
          [39.75549917354639, 35.451830402232225],
          [40.88709097042139, 34.26186758539059],
          [40.98596792354639, 34.26186758539059],
          [41.23865347042139, 34.45232928166215],
          [41.33753042354639, 35.28161035485441],
          [41.48035268917139, 35.621691133896284],
          [41.31555776729639, 36.17346541077579],
          [41.45838003292139, 36.41254967900143],
          [42.44714956417139, 37.03774694659974],
          [42.31531362667139, 37.37899463289118],
          [41.98572378292139, 37.37899463289118],
          [41.59021597042139, 37.21293853328899],
          [40.92004995479639, 37.17793266179597],
          [40.00818472042139, 36.96755683007515],
          [38.86560659542139, 36.79179823236304],
          [38.47009878292139, 36.96755683007515],
          [38.05261831417139, 36.949999177477586],
          [37.88782339229639, 36.879728094681084],
          [37.97571401729639, 36.571531745357866],
          [38.10754995479639, 36.48324866152814],
          [37.98670034542139, 36.26210055718292],
          [37.88782339229639, 36.04032452836996],
          [38.05261831417139, 35.82683022708122]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var start_date = ee.Date('2021-01-01')
var end_date = ee.Date('2021-10-27')

var CHIRPS = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY").filterDate(start_date, end_date)
                .map(function(image) {
                return image.clip(geometry)
                })

var chart = ui.Chart.image.seriesByRegion({
  imageCollection: CHIRPS,
  regions: geometry2,
  reducer: ee.Reducer.mean()
  })

print(chart)