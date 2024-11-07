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
    console.log(+result.toFixed(2));
    return +result.toFixed(2);
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
}
