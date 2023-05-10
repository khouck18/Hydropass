import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import "react-image-gallery/styles/css/image-gallery.css";

const IndividualListingImageGallery = () => {
  const listingInformation = useSelector(
    (state) => state.individualListing.listingInformation
  );

  const listingImages = listingInformation.images.map((image) => ({
    original: image,
    thumbnail: "",
  }));

  return (
    <Box sx={{ height: "60vh", width: "100%" }}>
      <ImageGallery
        items={listingImages}
        showBullets={false}
        showPlayButton={false}
        thumbnailPosition="bottom"
        renderCustomControls={() => null} // Hide the default navigation controls
        renderItem={(item) => (
          <div className="image-gallery-image">
            <Box
              sx={{ height: "100%", width: "100%" }}
              className="image-wrapper"
            >
              <img
                src={item.original}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "650px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </div>
        )}
      />
    </Box>
  );
};

export default IndividualListingImageGallery;
