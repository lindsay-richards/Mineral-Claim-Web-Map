ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3005").setExtent([696149.417106, 284780.520603, 1857029.201919, 1317766.769800]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MineralTenures_1 = new ol.format.GeoJSON();
var features_MineralTenures_1 = format_MineralTenures_1.readFeatures(json_MineralTenures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_MineralTenures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MineralTenures_1.addFeatures(features_MineralTenures_1);
var lyr_MineralTenures_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MineralTenures_1, 
                style: style_MineralTenures_1,
                popuplayertitle: 'Mineral Tenures',
                interactive: true,
    title: 'Mineral Tenures<br />\
    <img src="styles/legend/MineralTenures_1_0.png" /> Pending Claim Applications<br />\
    <img src="styles/legend/MineralTenures_1_1.png" /> Approved Claims<br />' });
var format_PropertyBoundaries_2 = new ol.format.GeoJSON();
var features_PropertyBoundaries_2 = format_PropertyBoundaries_2.readFeatures(json_PropertyBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_PropertyBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropertyBoundaries_2.addFeatures(features_PropertyBoundaries_2);
var lyr_PropertyBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropertyBoundaries_2, 
                style: style_PropertyBoundaries_2,
                popuplayertitle: 'Property Boundaries',
                interactive: true,
                title: '<img src="styles/legend/PropertyBoundaries_2.png" /> Property Boundaries'
            });
var format_PropertyLocations_3 = new ol.format.GeoJSON();
var features_PropertyLocations_3 = format_PropertyLocations_3.readFeatures(json_PropertyLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3005'});
var jsonSource_PropertyLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropertyLocations_3.addFeatures(features_PropertyLocations_3);
cluster_PropertyLocations_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PropertyLocations_3
});
var lyr_PropertyLocations_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PropertyLocations_3, minResolution:280.0446615226196,

                style: style_PropertyLocations_3,
                popuplayertitle: 'Property Locations',
                interactive: true,
                title: '<img src="styles/legend/PropertyLocations_3.png" /> Property Locations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MineralTenures_1.setVisible(true);lyr_PropertyBoundaries_2.setVisible(true);lyr_PropertyLocations_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MineralTenures_1,lyr_PropertyBoundaries_2,lyr_PropertyLocations_3];
lyr_MineralTenures_1.set('fieldAliases', {'fid': 'fid', 'TENURE_NUMBER_ID': 'Tenure Number', 'CLAIM_NAME': 'Claim Name', 'TENURE_TYPE_CODE': 'TENURE_TYPE_CODE', 'TENURE_TYPE_DESCRIPTION': 'Tenure Type', 'TENURE_SUB_TYPE_CODE': 'TENURE_SUB_TYPE_CODE', 'TENURE_SUB_TYPE_DESCRIPTION': 'Tenure Subtype', 'AREA_IN_HECTARES': 'Area (ha)', });
lyr_PropertyBoundaries_2.set('fieldAliases', {'fid': 'fid', 'Property Name': 'Property Name', 'Link': 'Learn More:', });
lyr_PropertyLocations_3.set('fieldAliases', {'fid': 'fid', });
lyr_MineralTenures_1.set('fieldImages', {'fid': 'TextEdit', 'TENURE_NUMBER_ID': 'Range', 'CLAIM_NAME': 'TextEdit', 'TENURE_TYPE_CODE': 'TextEdit', 'TENURE_TYPE_DESCRIPTION': 'TextEdit', 'TENURE_SUB_TYPE_CODE': 'TextEdit', 'TENURE_SUB_TYPE_DESCRIPTION': 'TextEdit', 'AREA_IN_HECTARES': 'TextEdit', });
lyr_PropertyBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'Property Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_PropertyLocations_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_MineralTenures_1.set('fieldLabels', {'fid': 'hidden field', 'TENURE_NUMBER_ID': 'inline label - always visible', 'CLAIM_NAME': 'inline label - always visible', 'TENURE_TYPE_CODE': 'hidden field', 'TENURE_TYPE_DESCRIPTION': 'inline label - always visible', 'TENURE_SUB_TYPE_CODE': 'hidden field', 'TENURE_SUB_TYPE_DESCRIPTION': 'inline label - always visible', 'AREA_IN_HECTARES': 'inline label - always visible', });
lyr_PropertyBoundaries_2.set('fieldLabels', {'fid': 'hidden field', 'Property Name': 'inline label - always visible', 'Link': 'inline label - always visible', });
lyr_PropertyLocations_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_PropertyLocations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});