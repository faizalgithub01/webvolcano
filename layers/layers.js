var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_gunungapi_indonesia_mod_1 = new ol.format.GeoJSON();
var features_gunungapi_indonesia_mod_1 = format_gunungapi_indonesia_mod_1.readFeatures(json_gunungapi_indonesia_mod_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gunungapi_indonesia_mod_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gunungapi_indonesia_mod_1.addFeatures(features_gunungapi_indonesia_mod_1);
var lyr_gunungapi_indonesia_mod_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gunungapi_indonesia_mod_1, 
                style: style_gunungapi_indonesia_mod_1,
                popuplayertitle: "gunungapi_indonesia_mod",
                interactive: true,
                title: '<img src="styles/legend/gunungapi_indonesia_mod_1.png" /> gunungapi_indonesia_mod'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_gunungapi_indonesia_mod_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_gunungapi_indonesia_mod_1];
lyr_gunungapi_indonesia_mod_1.set('fieldAliases', {'Tipe': 'Tipe', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'KODE_GNAPI': 'KODE_GNAPI', });
lyr_gunungapi_indonesia_mod_1.set('fieldImages', {'Tipe': '', 'Name': '', 'X': '', 'Y': '', 'KODE_GNAPI': '', });
lyr_gunungapi_indonesia_mod_1.set('fieldLabels', {'Tipe': 'header label - always visible', 'Name': 'inline label - always visible', 'X': 'header label - always visible', 'Y': 'header label - always visible', 'KODE_GNAPI': 'no label', });
lyr_gunungapi_indonesia_mod_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});