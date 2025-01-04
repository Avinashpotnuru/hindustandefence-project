/* eslint-disable react/prop-types */
import Slider from "react-slick";
import CourseCard from "../CourseCard";

const CustomSlider = ({ contentData, settings, content }) => {
  return (
    <Slider className="h-auto mt-2 lg:mt-4" {...settings}>
      
      {content === "images" &&
        contentData.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
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
};

export default CustomSlider;
