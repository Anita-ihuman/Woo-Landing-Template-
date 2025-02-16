import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Profile.module.scss";

const Profile = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: "5QuKI2VyG9qA86O1Fbj4UWIMx0sVy2aedVesZBXfI2F7vu5A3zW97w7S", // Replace with your actual API key
          },
          params: { query: "ecommerce", per_page: 6 },
        });
        setImages(response.data.photos.map((photo: any) => photo.src.medium));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Welcome to Your Profile</h2>
    <p className={styles.description}>This is your profile information.</p>


      {/* Display fetched images */}
      <div className={styles.imageGallery}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="E-commerce template" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
