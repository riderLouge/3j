import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const stats = [
  { id: 1, name: "Total Trips", value: "25+" },
  { id: 2, name: "Total Clients", value: "750+" },
  { id: 3, name: "Happy Clients", value: "700+" },
];

const StatsSection = () => {
  return (
    <Box className="bg-white py-24 sm:py-32">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          className="text-5xl font-bold"
          sx={{ textAlign: "center" }} // Center align the text
        >
          Our Achivements
        </Typography>
        <Typography
          paragraph
          sx={{ marginBottom: "2rem", textAlign: "center", lineHeight: "2" }}
        >
          <span style={{ fontWeight: "bold" }}>I am Jai Muni</span>, a
          passionate motovlogger hailing from Tamil Nadu. Having completed
          thrilling journeys both in and outside India, I am now venturing into
          <span style={{ fontWeight: "bold" }}>3J Adventure Tours LLP</span>.
          Drawing from my extensive travel experiences, I invite you to join
          this exciting journey. Buckle up for an adventure-filled exploration
          and let <span style={{ fontWeight: "bold" }}>3J Adventure Tours</span>{" "}
          be your gateway to the unforgettable stories that I have lived and
          want to share with you.
        </Typography>

        <Grid container spacing={8} sx={{ marginTop: "20px" }}>
          {stats.map((stat) => (
            <Grid item xs={12} md={4} key={stat.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  {stat.name}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  {stat.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
