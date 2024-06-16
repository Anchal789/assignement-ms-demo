import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const DialogBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  useEffect(() => {
    setTimeout(() => {
        onOpen(true)
    }, 2000);
  }, [onOpen]);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className="text-3xl font-bold p-3 flex justify-center">
              Important Message
            </h1>
          </ModalHeader>
          <ModalBody>
            Please note that this website is a demonstration only and not the
            original system currently in use by Baba Institute of Technology and
            Science. Due to privacy and security concerns, we cannot provide
            access to the live system, which contains real user data. Instead,
            this site showcases screenshots and descriptions to illustrate the
            functionalities and workflow of the project. Thank you for
            understanding.
          </ModalBody>
          <ModalFooter className="">
            <Button onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DialogBox;
