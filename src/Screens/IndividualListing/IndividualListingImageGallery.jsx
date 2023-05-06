import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import "react-image-gallery/styles/css/image-gallery.css";

const IndividualListingImageGallery = () => {
  const listingInformation = useSelector(
    (state) => state.individualListing.listingInformation
  );

  const listingImages = [];
  listingInformation.images.forEach((image) => {
    listingImages.push({ original: image, thumbnail: "" });
  });

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/"
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/"
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/"
  //   }
  // ];

  return (
    <Box sx={{ mt: 5, ms: 5 }}>
      <ImageGallery
        items={listingImages}
        showBullets={false}
        showPlayButton={false}
        thumbnailPosition="bottom"
      />
    </Box>
  );
};

export default IndividualListingImageGallery;
