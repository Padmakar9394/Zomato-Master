import React, {useState} from "react";
import ImageViewer from 'react-simple-image-viewer';

//component
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
  "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/9/18335309/bae607c914ecf46d8381813f323928b1.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/9/18335309/76e3828065954885b05fdeaf2289dea0.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/9/18335309/4996a0c158e64c7ddeb598336782db6c.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <>
    {isMenuOpen && (
      <ImageViewer
        src={photos}
        currentIndex={currentImg}
        disableScroll={false}
        onClose={closeViewer}
      />
    )}
    <div className="flex flex-wrap gap-2">
    {
      photos.map((photo) => {
      <PhotoCollection image={photo} openViewer={openViewer} />
    })
  }
    </div>
    </>
  );
};


export default Photos;
