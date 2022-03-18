import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { nanoid } from "nanoid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 1,
};

const gallery = [
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
  "https://picsum.photos/1920/1080",
];
function Gallery() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const handleOpen = (src) => {
    setOpen(true);
    setImg(src);
  };
  const handleClose = () => {
    setOpen(false);
    setImg("");
  };
  return (
    <>
      <p className="mt-[100px] text-center text-[36px]">Gallery</p>
      <div className="container px-40 mt-[100px] gap-[40px] grid grid-cols-3">
        {gallery.map((item) => {
          return (
            <img
              key={nanoid()}
              className="rounded-[5px]"
              onClick={() => {
                handleOpen(item);
              }}
              src={item}
              alt={item}
            />
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className="rounded-[5px]" src={img} alt={img} />
        </Box>
      </Modal>
    </>
  );
}

export default Gallery;
