import React, { useState } from "react";
import FacultyLoginImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 223830.png";
import SubjectSelectionImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 223906.png";
import FacultyDashboardImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 223915.png";
import CreateAssignmentImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 223931.png";
import CheckAssignmentImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 224001.png";
import EvaluateAssignmentImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 224036.png";
import CloseAssignmentImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 224055.png";
import StudentListImage from "../Assignment Management System/faculty/Screenshot 2024-05-01 224122.png";
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

const FacultySection = () => {
  const [expandedImage, setExpandedImage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images = [
    { id: 1, src: FacultyLoginImage, title: "Faculty Login" },
    { id: 2, src: SubjectSelectionImage, title: "Suject Selection" },
    { id: 3, src: FacultyDashboardImage, title: "Faculty Dashboard" },
    { id: 4, src: CreateAssignmentImage, title: "Create Assignment" },
    { id: 5, src: CheckAssignmentImage, title: "Check Assignment" },
    { id: 6, src: EvaluateAssignmentImage, title: "Evaluate Assignment" },
    { id: 7, src: CloseAssignmentImage, title: "Close Assignment" },
    { id: 8, src: StudentListImage, title: "Student List" },
  ];

  const handleExpand = (imageSrc) => {
    setExpandedImage(imageSrc);
  };
  
  return (
    <>
      <section
        id="faculty"
        className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-[#284B63]"
      >
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Faculty Portal
            </h2>
            <p className="max-w-[80%] mx-auto text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-200">
              The Faculty Portal enables faculty members to manage their
              assigned subjects. They can create assignments, set deadlines, and
              provide detailed descriptions. Faculty can also check student
              submissions, evaluate and grade them, and provide feedback.
              Additionally, the portal offers a student list view to access
              student details, ensuring smooth assignment tracking and
              evaluation.
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
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    {image.title}
                  </h3>
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
      {/* <section
        id="faculty"
        className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-[#284B63]"
      >
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Faculty Portal
            </h2>
            <p className="max-w-[80%] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The Faculty Portal enables faculty members to manage their
              assigned subjects. They can create assignments, set deadlines, and
              provide detailed descriptions. Faculty can also check student
              submissions, evaluate and grade them, and provide feedback.
              Additionally, the portal offers a student list view to access
              student details, ensuring smooth assignment tracking and
              evaluation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={FacultyLoginImage}
                width="400"
                height="300"
                alt="Faculty Assignments"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">Faculty Login</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={SubjectSelectionImage}
                width="400"
                height="300"
                alt="Faculty Grading"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Subject Selection
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={FacultyDashboardImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Faculty Dashboard
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={CreateAssignmentImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Create Assignment
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={CheckAssignmentImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Check Assignment
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={EvaluateAssignmentImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Evaluate Assignment
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={CloseAssignmentImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">
                  Close Assignment
                </h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={StudentListImage}
                width="400"
                height="300"
                alt="Faculty Feedback"
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-black text-2xl font-bold">Student List</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FacultySection;
