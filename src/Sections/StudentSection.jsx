import React, { useState } from "react";
import StudentLoginImage from "../Assignment Management System/student/Screenshot 2024-05-01 224303.png";
import StudentDashboardImage from "../Assignment Management System/student/Screenshot 2024-05-01 224429.png";
import ActiveAssignmentImage from "../Assignment Management System/student/Screenshot 2024-05-01 224540.png";
import InactiveAssignmentImage from "../Assignment Management System/student/Screenshot 2024-05-01 224552.png";
import SubmitAssignmentImage from "../Assignment Management System/student/Screenshot 2024-05-01 224503.png";
import MySubmissionImage from "../Assignment Management System/student/Screenshot 2024-05-01 224515.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import "../App.css";

const StudentSection = () => {
  const [expandedImage, setExpandedImage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images = [
    { id: 1, src: StudentLoginImage, title: "Student Login" },
    { id: 2, src: StudentDashboardImage, title: "Student Dashboard" },
    { id: 3, src: ActiveAssignmentImage, title: "Active Assignments" },
    { id: 4, src: InactiveAssignmentImage, title: "Inactive Assignments" },
    { id: 5, src: SubmitAssignmentImage, title: "Submit Assignments" },
    { id: 6, src: MySubmissionImage, title: "My Submission" },
  ];

  const handleExpand = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  return (
    <section id="student" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Student Portal
          </h2>
          <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Student Portal allows students to view and manage their
            assignments. Students can log in to see all subjects for their
            semester, view active and inactive assignments, submit their work,
            and check their submission status. The portal also enables students
            to view feedback, marks, and remarks from faculty on their submitted
            assignments, facilitating a clear and structured workflow for their
            academic tasks.ear and structured workflow for their academic tasks.
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
                  onClick={() => {
                    handleExpand(image.src);
                    onOpen();
                  }}
                >
                  View
                </button>
              </div>
              {expandedImage === image.src && (
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                  <ModalOverlay />
                  <ModalContent maxW="90vw" maxH="90vh">
                    <ModalHeader>{image.title}</ModalHeader>
                    <ModalCloseButton />
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

export default StudentSection;
