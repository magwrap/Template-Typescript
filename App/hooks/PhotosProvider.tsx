import React, { ReactNode, createContext, useContext, useState } from "react";

const PhotosContext = createContext({});
export const usePhotosContext = () => useContext(PhotosContext);

interface Props {
  children: ReactNode;
}

function PhotosProvider({ children }: Props) {
  const [photos, setPhotos] = useState();
  return (
    <PhotosContext.Provider value={{ photos }}>
      {children}
    </PhotosContext.Provider>
  );
}

export default PhotosProvider;
