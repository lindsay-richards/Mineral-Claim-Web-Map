ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3005").setExtent([339342.447909, 296610.446384, 2629600.234627, 1944739.881686]);
var wms_layers = [];


        var lyr_GoogleEarthHybrid_0 = new ol.layer.Tile({
            'title': 'Google Earth Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
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

lyr_GoogleEarthHybrid_0.setVisible(true);lyr_MineralTenures_1.setVisible(true);lyr_PropertyBoundaries_2.setVisible(true);lyr_PropertyLocations_3.setVisible(true);
var layersList = [lyr_GoogleEarthHybrid_0,lyr_MineralTenures_1,lyr_PropertyBoundaries_2,lyr_PropertyLocations_3];
lyr_MineralTenures_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'TENURE_NUMBER_ID': 'Tenure Number', 'CLAIM_NAME': 'Claim Name', 'TENURE_TYPE_CODE': 'TENURE_TYPE_CODE', 'TENURE_TYPE_DESCRIPTION': 'Tenure Type', 'TENURE_SUB_TYPE_CODE': 'TENURE_SUB_TYPE_CODE', 'TENURE_SUB_TYPE_DESCRIPTION': 'Tenure Subtype', 'TITLE_TYPE_CODE': 'TITLE_TYPE_CODE', 'TITLE_TYPE_DESCRIPTION': 'TITLE_TYPE_DESCRIPTION', 'ISSUE_DATE': 'ISSUE_DATE', 'GOOD_TO_DATE': 'GOOD_TO_DATE', 'AREA_IN_HECTARES': 'Area (ha)', 'PROTECTED_IND': 'PROTECTED_IND', 'REVISION_NUMBER': 'REVISION_NUMBER', 'TAG_NUMBER': 'TAG_NUMBER', 'CLIENT_NUMBER_ID': 'CLIENT_NUMBER_ID', 'OWNER_NAME': 'OWNER_NAME', 'PERCENT_OWNERSHIP': 'PERCENT_OWNERSHIP', 'NUMBER_OF_OWNERS': 'NUMBER_OF_OWNERS', 'CASH_IN_LIEU_EVENT_COUNT': 'CASH_IN_LIEU_EVENT_COUNT', 'STATEMENT_OF_WORK_EVENT_COUNT': 'STATEMENT_OF_WORK_EVENT_COUNT', 'COMPLAINTS_EVENT_COUNT': 'COMPLAINTS_EVENT_COUNT', 'OWNERSHIP_TRANSFER_EVENT_COUNT': 'OWNERSHIP_TRANSFER_EVENT_COUNT', 'REDUCTION_EVENT_COUNT': 'REDUCTION_EVENT_COUNT', 'ENTRY_TIMESTAMP': 'ENTRY_TIMESTAMP', 'ENTRY_USERID': 'ENTRY_USERID', 'UPDATE_TIMESTAMP': 'UPDATE_TIMESTAMP', 'UPDATE_USERID': 'UPDATE_USERID', 'TERMINATION_DATE': 'TERMINATION_DATE', 'TERMINATION_TYPE_DESCRIPTION': 'TERMINATION_TYPE_DESCRIPTION', 'FEATURE_CODE': 'FEATURE_CODE', 'OBJECTID': 'OBJECTID', 'SE_ANNO_CAD_DATA': 'SE_ANNO_CAD_DATA', 'FEATURE_AREA_SQM': 'FEATURE_AREA_SQM', 'FEATURE_LENGTH_M': 'FEATURE_LENGTH_M', 'GEOMETRY.AREA': 'GEOMETRY.AREA', 'GEOMETRY.LEN': 'GEOMETRY.LEN', });
lyr_PropertyBoundaries_2.set('fieldAliases', {'fid': 'fid', 'Property Name': 'Property Name', 'Link': 'Learn More:', });
lyr_PropertyLocations_3.set('fieldAliases', {'fid': 'fid', });
lyr_MineralTenures_1.set('fieldImages', {'fid': 'TextEdit', 'id': '', 'TENURE_NUMBER_ID': 'Range', 'CLAIM_NAME': 'TextEdit', 'TENURE_TYPE_CODE': 'TextEdit', 'TENURE_TYPE_DESCRIPTION': 'TextEdit', 'TENURE_SUB_TYPE_CODE': 'TextEdit', 'TENURE_SUB_TYPE_DESCRIPTION': 'TextEdit', 'TITLE_TYPE_CODE': '', 'TITLE_TYPE_DESCRIPTION': '', 'ISSUE_DATE': '', 'GOOD_TO_DATE': '', 'AREA_IN_HECTARES': 'TextEdit', 'PROTECTED_IND': '', 'REVISION_NUMBER': '', 'TAG_NUMBER': '', 'CLIENT_NUMBER_ID': '', 'OWNER_NAME': '', 'PERCENT_OWNERSHIP': '', 'NUMBER_OF_OWNERS': '', 'CASH_IN_LIEU_EVENT_COUNT': '', 'STATEMENT_OF_WORK_EVENT_COUNT': '', 'COMPLAINTS_EVENT_COUNT': '', 'OWNERSHIP_TRANSFER_EVENT_COUNT': '', 'REDUCTION_EVENT_COUNT': '', 'ENTRY_TIMESTAMP': '', 'ENTRY_USERID': '', 'UPDATE_TIMESTAMP': '', 'UPDATE_USERID': '', 'TERMINATION_DATE': '', 'TERMINATION_TYPE_DESCRIPTION': '', 'FEATURE_CODE': '', 'OBJECTID': '', 'SE_ANNO_CAD_DATA': '', 'FEATURE_AREA_SQM': '', 'FEATURE_LENGTH_M': '', 'GEOMETRY.AREA': '', 'GEOMETRY.LEN': '', });
lyr_PropertyBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'Property Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_PropertyLocations_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_MineralTenures_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'no label', 'TENURE_NUMBER_ID': 'inline label - always visible', 'CLAIM_NAME': 'inline label - always visible', 'TENURE_TYPE_CODE': 'hidden field', 'TENURE_TYPE_DESCRIPTION': 'inline label - always visible', 'TENURE_SUB_TYPE_CODE': 'hidden field', 'TENURE_SUB_TYPE_DESCRIPTION': 'inline label - always visible', 'TITLE_TYPE_CODE': 'hidden field', 'TITLE_TYPE_DESCRIPTION': 'hidden field', 'ISSUE_DATE': 'hidden field', 'GOOD_TO_DATE': 'hidden field', 'AREA_IN_HECTARES': 'inline label - always visible', 'PROTECTED_IND': 'hidden field', 'REVISION_NUMBER': 'hidden field', 'TAG_NUMBER': 'hidden field', 'CLIENT_NUMBER_ID': 'hidden field', 'OWNER_NAME': 'hidden field', 'PERCENT_OWNERSHIP': 'hidden field', 'NUMBER_OF_OWNERS': 'hidden field', 'CASH_IN_LIEU_EVENT_COUNT': 'hidden field', 'STATEMENT_OF_WORK_EVENT_COUNT': 'hidden field', 'COMPLAINTS_EVENT_COUNT': 'hidden field', 'OWNERSHIP_TRANSFER_EVENT_COUNT': 'hidden field', 'REDUCTION_EVENT_COUNT': 'hidden field', 'ENTRY_TIMESTAMP': 'hidden field', 'ENTRY_USERID': 'hidden field', 'UPDATE_TIMESTAMP': 'hidden field', 'UPDATE_USERID': 'hidden field', 'TERMINATION_DATE': 'hidden field', 'TERMINATION_TYPE_DESCRIPTION': 'hidden field', 'FEATURE_CODE': 'hidden field', 'OBJECTID': 'hidden field', 'SE_ANNO_CAD_DATA': 'hidden field', 'FEATURE_AREA_SQM': 'hidden field', 'FEATURE_LENGTH_M': 'hidden field', 'GEOMETRY.AREA': 'hidden field', 'GEOMETRY.LEN': 'hidden field', });
lyr_PropertyBoundaries_2.set('fieldLabels', {'fid': 'hidden field', 'Property Name': 'inline label - always visible', 'Link': 'inline label - always visible', });
lyr_PropertyLocations_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_PropertyLocations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});