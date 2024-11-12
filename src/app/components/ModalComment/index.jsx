'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../Icons/Chat"
import { Modal } from "../Modal"

import styles from './modalcomment.module.css'
import { SubHeading } from "../SubHeading"
import { SubmitButton } from "../SubmitButton"
import { Textarea } from "../Textarea"

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null)

  return (
    <>
      <Modal ref={modalRef} >
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <SubHeading>Deixe seu comentario sobre o post:</SubHeading>
          <Textarea required rows={8} name="text" placeholder="Digite aqui..."></Textarea>
          <div className={styles.footer}>
            <SubmitButton>
              Comentar
            </SubmitButton>
          </div>
          
        </form>
      </Modal>

      <IconButton onClick={() => modalRef.current.openModal() }>

        <Chat />
      </IconButton>
    </>
  )
}