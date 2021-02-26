require(["esri/config", 
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/widgets/Legend", "esri/layers/FeatureLayer"], function (esriConfig, WebScene, SceneView, Legend, FeatureLayer) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

const webscene = new WebScene({
        portalItem: {
          id: "579f97b2f3b94d4a8e48a5f140a6639b"
        }
      });

  const view = new SceneView({
        container: "viewDiv",
        map: webscene
      });
  
  const legend = new Legend ({
        view:view
      });

      view.ui.add(legend, "top-right");
  
  //Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
  });
  
  webscene.add(trailheadsLayer);
  
  //Trails feature layer (lines)
  const trailsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
  });
  
  webscene.add(trailsLayer, 0);
  
  // Parks and open spaces (polygons)
  const parksLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
  });
  
  webscene.add(parksLayer, 0);
  
 });
