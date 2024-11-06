{
  type Areacircle = {
    shape: "circle";
    radius: number;
  };
  type AreaRectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  const calculateShapeArea = (typeArea: AreaRectangle | Areacircle): number => {
    let result: number = 0;
    if (typeArea.shape === "circle") {
      result = Math.PI * typeArea.radius * typeArea.radius;
    } else if (typeArea.shape === "rectangle") {
      result = typeArea.height * typeArea.width;
    }

    return +result.toFixed(2);
  };
  const circleArea = calculateShapeArea({ radius: 5, shape: "circle" });
  const rectangleArea = calculateShapeArea({
    width: 4,
    shape: "rectangle",
    height: 6,
  });
}
