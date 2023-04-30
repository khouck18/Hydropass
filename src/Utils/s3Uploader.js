import { S3 } from "aws-sdk";

const s3 = new S3({
  region: "us-west-2",
  accessKeyId: "AKIARSMTKF43VYLR4JVG",
  secretAccessKey: "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"
});

const region = "us-west-2";
const bucketName = "hydropass-listing-images";

export const uploadImages = async (images, listingId) => {
  // Generate a presigned URL for each image
  const uploadPromises = images.map((image) => {
    return s3
      .upload({
        Bucket: bucketName,
        Key: `${listingId}/${image.name}`,
        Body: image,
        ContentType: image.type,
        ACL: "public-read"
      })
      .promise();
  });
  await Promise.all(uploadPromises);

  console.log("Images uploaded successfully");

  // Return the URLs of all images
  return images.map((image) => {
    return `https://${bucketName}.s3.${region}.amazonaws.com/${listingId}/${image.name}`;
  });
};
