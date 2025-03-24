---
sidebar_position: 4
date: 2025-03-20
---

# Data

## Map viewers

| Product | Description | Application | License |
| ------- | ----------- | ----------- | ------- |
| [SoilGrids](http://soilgrids.org) | global soil information (gridded 250 m; C, N, bulk density, texture ...) from [ISRIC](https://www.isric.org)| map viewer, data downloader | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
|[ESA CCI land cover](https://maps.elie.ucl.ac.be/CCI/viewer)| global land cover (gridded 300 m)| map viewer ||
|[Global Forest Watch (GFW)](https://www.globalforestwatch.org/map)| global forest cover (gridded) | map viewer, analyzer ||
|[Global Surface Water Explorer (GSWE)](https://global-surface-water.appspot.com/map) | global surface water (gridded) | map viewer, analyzer ||
|[Copernicus Browser](https://browser.dataspace.copernicus.eu)| ESA Sentinel EO browser (search, analyze, download satellite products)| map viewer, analyzer, data downloader ||
|[EOX cloudless S2](https://s2maps.eu/)| global cloudless ESA S2 satellite mosaic images | map viewer, data downloader ||
|[USGS National Map](https://apps.nationalmap.gov/viewer-3D-beta)| US national map data viewer | map viewer, analyzer, data downloader ||

## XYZ map tiles 

| Product | Description | Application | License |
| ------- | ----------- | ----------- | ------- |
|[XYZ tile providers](http://leaflet-extras.github.io/leaflet-providers/preview/index.html)| list of XYZ map tiles (e.g., for QGIS or leaflet) | XYZ tiles, map viewer ||


### ESRI World Topo

```txt
https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png
```

### ESRI World Satellite Imagery

```txt
https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png
```

### USGS Topo

```txt
https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}.png
```

### Global Surface Water (GSW)

```txt
https://storage.googleapis.com/global-surface-water/tiles2021/transitions/{z}/{x}/{y}.png
```

## WMS / WMTS tiles 

<!-- refer to other section on how to embed WMS layers in R -->

### USGS Topo

```txt
https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/1.0.0/WMTSCapabilities.xml
```

### GADM

```txt
https://data-gis.unep-wcmc.org/server/rest/services/GADM_EEZ_Layer/MapServer/WMTS/1.0.0/WMTSCapabilities.xml
```

### OSM and SRTM30

```txt
https://ows.terrestris.de/osm/service?VERSION=1.1.1
```

### ArcticDEM

```txt
https://di-pgc.img.arcgis.com/arcgis/services/arcticdem_latest/ImageServer/WMSServer
```


## Data

| Product | Description | Application | License |
| ------- | ----------- | ----------- | ------- |
|[Global Dynamic Land Cover](https://land.copernicus.eu/en/products/global-dynamic-land-cover)| global annual land cover fractions from [CLMS](https://land.copernicus.eu/en) (gridded 100 m) | land cover ||
|[SoilGrids](https://www.isric.org/explore/soilgrids/faq-soilgrids)| global gridded soil information from [ISRIC](https://www.isric.org) (C, N, bulk density, texture ...) | soil properties | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
|[Dai et al. (2025): coastline database](https://doi.org/10.18739/A2610VT7V)|global high resolution coastline database from satellite imagery (2009 - 2023) (gridded 2 m) | ||

## Data repositories and APIs

| Tool | Description | Application | License |
| ------- | ----------- | ----------- | ------- |
|[Zenodo](https://zenodo.org)| open-access repository for research data, software, publications, and other scientific outputs | ||
|[Pangaea](https://www.pangaea.de)||||
|[DataONE](https://www.dataone.org)||||
|[Climate Data Store (CDS)](https://cds.climate.copernicus.eu)||||
|[STAC APIs](https://stacindex.org/catalogs#/)| a list of [STAC](https://stacspec.org/en) APIs and Static Catalogs|||
|[EODAG](https://eodag.readthedocs.io/en/stable/)| Earth Observation Data Access Gateway (EODAG) to simplify searching for and downloading EO data, available as CLI and Python API |||

<!-- <br> -->

## File types
