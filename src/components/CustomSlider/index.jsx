/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react";
import Slider from "react-slick";
import CourseCard from "../CourseCard";

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.content === nextProps.content &&
    prevProps.contentData === nextProps.contentData &&
    prevProps.settings === nextProps.settings
  );
};

const CustomSlider = memo(({ contentData, settings, content }) => {
  return (
    <Slider className="h-auto mt-2 lg:mt-4" {...settings}>
      {content === "images" &&
        contentData.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Image slide ${index + 1}`}
              loading="lazy"
              height={"auto"}
              width={"100%"}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}

      {content === "text" &&
        contentData.map((item, index) => (
          <CourseCard key={index} item={item} />
        ))}
    </Slider>
  );
}, areEqual);

export default CustomSlider;
