import "./FeatureLoaderTemplate.css";

export default function FeatureLoader(props) {
  return (
    <>
      <div className="background" />
      <div
        style={{
          position: "absolute",
          gridRow: "auto",
          width: "100%",
          maxWidth: "100%",
          height: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowX: "hidden"
        }}
      >
        <div
          style={{
            height: "60%",
            maxWidth: "25%",
            width: "20%",
            transform: "translateX(-60%) translateY(40%)",
            borderRadius: "25px"
          }}
        >
          <div class="card__skeleton card__image"></div>
        </div>

        <div
          style={{
            height: "100%",
            width: "50%"
          }}
        >
          <div class="card__skeleton card__image"></div>
        </div>

        <div
          style={{
            height: "60%",
            width: "20%",
            transform: "translateX(70%) translateY(40%)",
            borderRadius: "25px"
          }}
        >
          <div class="card__skeleton card__image"></div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          position: "absolute",
          width: "50%",
          height: "10%",
          top: "90%",
          left: "25%",
          borderRadius: "25px"
        }}
      >
        <div class="card__skeleton card__description"></div>
      </div>
    </>
  );
}

/*

<div>
        <div
          //className={`${temp.innerallListingInformation}`}
          style={{
            position: "absolute",
            gridRow: "auto",
            width: "100%",
            maxWidth: "100%",
            height: "80%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            overflowX: "hidden"
          }}
        >
          <div
            style={{
              height: "60%",
              maxWidth: "25%",
              width: "20%",
              backgroundImage: `url(${
                featureListingInformation[getPreviousIndex(currentIndex)]
                  .images[0]
              })`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transform: "translateX(-60%) translateY(40%)",
              borderRadius: "25px",
              transitionDuration: "1000ms"
            }}
            className={`${temp.brightness}`}
          />
          <div
            style={{
              height: "100%",
              width: "50%",
              backgroundImage: `url(${featureListingInformation[currentIndex].images[0]})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "25px",
              transitionDuration: "1000ms"
            }}
          />
          <div
            style={{
              height: "60%",
              width: "20%",
              backgroundImage: `url(${
                featureListingInformation[getNextIndex(currentIndex)].images[0]
              })`,

              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transform: "translateX(70%) translateY(40%)",
              borderRadius: "25px",
              transitionDuration: "1000ms"
            }}
            className={`${temp.brightness}`}
          />
        </div>
        <div
          style={{
            justifyContent: "center",
            position: "absolute",
            gridRow: "auto",
            width: "50%",
            height: "10%",
            top: "90%",
            left: "25%",
            borderRadius: "25px"
          }}
        >
          <div style={{}}>
            <HorizontalListing
              name={featureListingInformation[currentIndex].name}
              location={featureListingInformation[currentIndex].location}
              rating={featureListingInformation[currentIndex].rating}
              dailyRate={featureListingInformation[currentIndex].dailyRate}
            />
          </div>
        </div>
*/
