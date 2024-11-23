"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animatedModal";
import ChatComponent from "../aiCompo/CustomGPT";

export function AnimatedModalDemo() {
 
  return (
    (<div className="   flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Who Am I?
          </span>
          <div
            className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
          Click!
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
          <ChatComponent/>
        
          </ModalContent>
      
        </ModalBody>
      </Modal>
    </div>)
  );
}





