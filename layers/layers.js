var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_sedes_1 = new ol.format.GeoJSON();
var features_sedes_1 = format_sedes_1.readFeatures(json_sedes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sedes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sedes_1.addFeatures(features_sedes_1);
var lyr_sedes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sedes_1, 
                style: style_sedes_1,
                popuplayertitle: 'sedes',
                interactive: true,
                title: '<img src="styles/legend/sedes_1.png" /> sedes'
            });

lyr_Googlemaps_0.setVisible(true);lyr_sedes_1.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_sedes_1];
lyr_sedes_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'direccion': 'direccion', 'tipo': 'tipo', 'condicion': 'condicion', 'horario': 'horario', 'barrio': 'barrio', 'localidad': 'localidad', 'nombre': 'nombre', });
lyr_sedes_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'direccion': 'TextEdit', 'tipo': 'TextEdit', 'condicion': 'TextEdit', 'horario': 'TextEdit', 'barrio': 'TextEdit', 'localidad': 'TextEdit', 'nombre': 'TextEdit', });
lyr_sedes_1.set('fieldLabels', {'OBJECTID': 'no label', 'direccion': 'no label', 'tipo': 'no label', 'condicion': 'no label', 'horario': 'no label', 'barrio': 'no label', 'localidad': 'no label', 'nombre': 'no label', });
lyr_sedes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});