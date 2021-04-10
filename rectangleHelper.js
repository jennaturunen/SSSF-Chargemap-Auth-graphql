// this function returns geoJSON polygon (rectangle)
// input parameters are top right and bottom left corners of the desired rectangle (e.g. map view)
const rectangleBounds = (topRight, bottomLeft) => ({
  type: 'Polygon',
  coordinates: [
    [
      [bottomLeft.lng, bottomLeft.lat],
      [bottomLeft.lng, topRight.lat],
      [topRight.lng, topRight.lat],
      [topRight.lng, bottomLeft.lat],
      [bottomLeft.lng, bottomLeft.lat],
    ],
  ],
});

export { rectangleBounds };
