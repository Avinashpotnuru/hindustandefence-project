import { useForm } from "react-hook-form";
import { Grid, Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const EnquiryNowForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2) || data);
    reset();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #FF5722, #FF9800)",
        padding: { xs: "32px 16px", lg: "32px 120px" }, // Responsive padding
        maxWidth: "100%",
        boxShadow: 3,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
          <Grid item xs={isMobile ? 12 : 3}>
            <h1 className="text-white font-bold"> Enquiry Now</h1>
            <h1 className="text-white ">
              {" "}
              For Getting Free Study Material and Test Series
            </h1>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "3px",
                border: errors.name ? "1px solid red" : "1px solid #ccc",
              }}
            />
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.name?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              placeholder="Phone no"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "3px",
                border: errors.phone ? "1px solid red" : "1px solid #ccc",
              }}
            />
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.phone?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="Mail ID"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "3px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
              }}
            />
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.email?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <input
              {...register("class", { required: "Class is required" })}
              placeholder="Enter your Class"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "3px",
                border: errors.class ? "1px solid red" : "1px solid #ccc",
              }}
            />
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.class?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="Enter your City"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "3px",
                border: errors.city ? "1px solid red" : "1px solid #ccc",
              }}
            />
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.city?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <select
              {...register("course", { required: "Please select a course" })}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: errors.course ? "1px solid red" : "1px solid #ccc",
              }}
            >
              <option value="">Select Courses</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
              <option value="Course 3">Course 3</option>
            </select>
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {errors.course?.message}
            </Typography>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #F5961B 0%, #E76420 51%, #F5961B 100%)",
                color: "white",
                width: "100%",
              }}
            >
              SUBMIT NOW
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EnquiryNowForm;
