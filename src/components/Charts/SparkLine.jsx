import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({
  id,
  height,
  width,
  color,
  dataSource,
  type,
  currentColor,
}) => {
  return (
    // <div>sparkline</div>
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={dataSource}
      xName="xval"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${xval} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
