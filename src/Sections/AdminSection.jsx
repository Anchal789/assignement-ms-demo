import React, { useState } from "react";
import LandingPageImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223354.png";
import SignupImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223427.png";
import LoginImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223512.png";
import DashboardImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223532.png";
import FacultySignupImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223552.png";
import StudentSignupImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223628.png";
import PromoteStudentImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223652.png";
import AddSubjectImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223747.png";
import MapSubjectImage from "../Assignment Management System/admin/Screenshot 2024-05-01 223802.png";
import "../App.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";

const AdminSection = () => {
  const [expandedImage, setExpandedImage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleExpand = (imageSrc) => {
    setExpandedImage(imageSrc);
    // document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const images = [
    { id: 1, src: LandingPageImage, title: "Landing Page" },
    { id: 2, src: SignupImage, title: "Admin Sign Up" },
    { id: 3, src: LoginImage, title: "Admin Login" },
    { id: 4, src: DashboardImage, title: "Admin Dashboard" },
    { id: 5, src: FacultySignupImage, title: "Faculty Sign Up" },
    { id: 6, src: StudentSignupImage, title: "Student Sign Up" },
    { id: 7, src: PromoteStudentImage, title: "Promote Students" },
    { id: 8, src: AddSubjectImage, title: "Add Subjects" },
    { id: 9, src: MapSubjectImage, title: "Map Subjects" },
  ];

  return (
    <section id="admin" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Admin Portal
          </h2>
          <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Admin Portal allows administrators (typically HODs) to manage
            users and assignments. Admins can register faculty and students,
            promote students to the next semester, add subjects to specific
            semesters, and map subjects to faculty members. This portal provides
            comprehensive control over the assignment management process,
            ensuring efficient operation and data organization within the
            system.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-5 scrollbar-custom">
          {images.map((image) => (
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg min-w-[24rem] mb-3 border-slate-500 border"
              key={image.id}
            >
              <img
                src={image.src}
                width="400"
                height="300"
                alt={image.title}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#5C0029] bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                <button
                  className="mt-2 px-4 py-2 bg-white text-[#5C0029] rounded-full"
                  onClick={() => {handleExpand(image.src); onOpen();}}
                >
                  View
                </button>
              </div>
              {expandedImage === image.src && (
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                  <ModalOverlay />
                  <ModalContent maxW="90vw" maxH="90vh">
                    <ModalHeader>{image.title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                      <img
                        src={expandedImage}
                        alt="Expanded view"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "calc(90vh - 7rem)", // Adjust as necessary to account for modal header and footer
                          height: "auto",
                          width: "auto",
                          objectFit: "contain",
                        }}
                        loading="lazy"
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
