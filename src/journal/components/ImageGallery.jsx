import { ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = ({ images = [] }) => {

  
 return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
      { 
        images?.map((image) => (
          <ImageListItem key={image}>
            <img
             src={ image }
             alt="imagen de nota"
          />
          </ImageListItem>
      ))}
    </ImageList>
  );
}

