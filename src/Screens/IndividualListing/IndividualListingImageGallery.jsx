import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const IndividualListingImageGallery = () => {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className="mt-5 ms-5">
            <ImageGallery 
                items={images} 
                showBullets={false} 
                showPlayButton={false}
                thumbnailPosition="bottom"
            />
        </div>
    );
};

export default IndividualListingImageGallery;