import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import BN from "./BN.png"

const ProfileAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  marginBottom: "1rem",
  border: "4px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ContactCard = styled(Box)({
  maxWidth: 400,
  margin: "2rem auto",
  padding: "2rem",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: 20,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  textAlign: "center",
});

const SocialIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "1.2rem",
  marginTop: "1.5rem",
  flexWrap: "wrap",
});

function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/your-kit-id.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    if (navigator.share) {
      navigator
        .share({
          title: "Senthilnayagan - Web Developer",
          text: "Check out my professional profile and connect with me!",
          url: shareUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    }
  };

  return (
    <Container maxWidth="sm">
          <ContactCard sx={{ backgroundColor: "#555555" }}>
            <Box display="flex" justifyContent="center">
                  <ProfileAvatar src={BN} alt="Profile Picture" />
              </Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            background: "#e3edf7",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Senthilnayagan S
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1.5rem" }}
        >
          Web Developer | Java | Python |<br /> Database Engineer
        </Typography>
        <SocialIcons>
          <IconButton
            href="https://wa.me/9345222105"
            target="_blank"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/p/CYbGIrHsJky/?utm_source=qr&igsh=MWFzdzNlbWZrM2l2YQ%3D%3D"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/profile.php?id=100093197073366&mibextid=ZbWKwL"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/senthil-nayagan-976b58277/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://github.com/SenthilL13"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://x.com/SSenthilNa18305?t=8YdG052AzDx1qwCqithnDg&s=08"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            href="https://senthil-port.netlify.app/"
            target="_blank"
            aria-label="Portfolio"
          >
            <WorkIcon sx={{ color: "white" }} />
          </IconButton>
        </SocialIcons>
        <Button
          onClick={handleShare}
          variant="contained"
          sx={{
            background: "#212121",
            color: "white",
            marginTop: "1.5rem",
          }}
        >
          Share My Contact
        </Button>
      </ContactCard>
      <Snackbar
        open={showToast}
        message="🔗 Link copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
      />
    </Container>
  );
}

export default App;
