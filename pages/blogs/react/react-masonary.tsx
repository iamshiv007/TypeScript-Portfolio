import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Theme from "../../../utils/Theme";
import BackTo from "../../../components/buttons/BackTo";

interface Photo {
  id: number;
  src: {
    medium: string;
  };
  url: string;
  photographer: string;
}

const ReactMasonary: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios
      .get("/api/masonary")
      .then((res) => {
        console.log(res.data.photos);
        setPhotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDownload = async (
    imageUrl: string,
    myurl: string
  ): Promise<void> => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${myurl.split("/")[myurl.split("/").length - 2]}.jpeg`;
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>React Masonary</title>
      </Head>
      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="dark:bg-black min-h-[92]">
          <div className="dowBtn" />
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry>
              {photos?.map((photo: Photo) => {
                return (
                  <div key={photo.id} style={{ margin: "10px" }}>
                    <button
                      onClick={() =>
                        handleDownload(photo.src.medium, photo.url)
                      }
                    >
                      Download
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={photo.photographer}
                      className="w-[100%]"
                      src={photo.src.medium}
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ReactMasonary;
