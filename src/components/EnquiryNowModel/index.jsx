import { Box, Dialog, Button, Typography, IconButton } from "@mui/material";
import EnqueryingImage from "/enqueryimg.webp";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

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
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      className="hide-scrollbar"
      sx={{
        "& .MuiDialog-paper": {
          overflow: "auto",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",

          "@media (max-width:600px)": {
            maxHeight: "100vh",
          },
          "@media (max-width:360px)": {
            maxHeight: "85vh",
           
          },
        },
        // "& .MuiDialogContent-root": {
        //   overflowY: "auto",
        // },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 10,
          top: 15,
          zIndex: 1,
          color: "grey",
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box className="p-3 flex flex-col lg:flex-row justify-center gap-1 lg:gap-6 items-center relative  ">
        <Box className="w-full lg:w-[60%]">
          <img
            src={EnqueryingImage}
            alt="Placeholder"
            className="h-full w-full  md:w-[400px] md:h-[400px] lg:h-full lg:w-full   object-contain"
          />
        </Box>

        <Box className="w-full lg:w-[40%] mt-2 px-2">
          <Typography variant="h6" align="left" gutterBottom>
            Enquiry Now
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left"
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

            <Box sx={{ mb: 3, width: "100%" }}>
              <select
                id="course"
                name="course"
                placeholder="Select a course"
                style={{
                  height: "35px",
                  backgroundColor: "#fff5eb",
                  border: "1px solid #f5961b",
                  width: "100%",
                  padding: "0 10px",
                  boxSizing: "border-box",
                  overflow: "hidden",
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
