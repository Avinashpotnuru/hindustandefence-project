import { Box, Dialog, Button, Typography } from "@mui/material";
import EnqueryingImage from "/enqueryimg.webp";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const courses = [
  "---Select Courses---",
  "Defence Career",
  "Entrance Exams",
  "Interview Preparation",
];

const EnquiryNowModel = () => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Box className="p-3 flex flex-col lg:flex-row justify-center gap-6 items-center relative">
        <Box className="w-full lg:w-[60%]">
          <img
            src={EnqueryingImage}
            alt="Placeholder"
            className="h-full w-full   object-contain"
          />
        </Box>

        <Box className="w-full lg:w-[40%] mt-2 p-5">
          <Typography variant="h6" align="center" gutterBottom>
            Enquiry Now
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            For Getting Free Study Material and Test Series
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            {/* Name */}
            <Box sx={{ mb: 2 }}>
              <input
                id="name"
                name="name"
                placeholder="Enter your name"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                }}
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
            </Box>

            {/* Phone */}
            <Box sx={{ mb: 2 }}>
              <input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                }}
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits.",
                  },
                })}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone.message}</span>
              )}
            </Box>

            {/* Email */}
            <Box sx={{ mb: 2 }}>
              <input
                id="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                }}
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </Box>

            {/* Class */}
            <Box sx={{ mb: 2 }}>
              <input
                id="class"
                name="class"
                placeholder="Enter your class"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                }}
                {...register("class", { required: "Class is required." })}
              />
              {errors.class && (
                <span style={{ color: "red" }}>{errors.class.message}</span>
              )}
            </Box>

            {/* City */}
            <Box sx={{ mb: 2 }}>
              <input
                id="city"
                name="city"
                placeholder="Enter your city"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                }}
                {...register("city", { required: "City is required." })}
              />
              {errors.city && (
                <span style={{ color: "red" }}>{errors.city.message}</span>
              )}
            </Box>

            {/* Course */}
            <Box sx={{ mb: 3, width: "100%" }}>
              <select
                id="course"
                name="course"
                placeholder="Select a course"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%", // Full width of its container
                  padding: "0 10px", // Adjusts the padding for better alignment
                  boxSizing: "border-box",
                  overflow: "hidden", // Makes sure padding doesn't affect the width
                }}
                {...register("course", {
                  validate: (value) =>
                    value !== courses[0] || "Please select a course.",
                })}
              >
                {courses.map((course, index) => (
                  <option className="" key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course && (
                <span style={{ color: "red" }}>{errors.course.message}</span>
              )}
            </Box>

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: 1,
                backgroundImage:
                  "linear-gradient(to right, #F5961B 0%, #E76420 51%, #F5961B 100%)",
              }}
            >
              Submit Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default EnquiryNowModel;
