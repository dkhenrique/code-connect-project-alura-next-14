'use client'

import { useEffect } from "react"
import { ArrowBack } from "./components/Icons/ArrowBack"
import Image from "next/image"
import Link from "next/link"

import style from './error/error.module.css'
import banner from './error/500.png'
import { Heading } from "./components/Heading"

export default function Error({ error }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className={style.container}>
      <Image src={banner} />
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>Não conseguimos carrregar a página, volte para seguir navegando</p>
      <Link href="/">
      <ArrowBack color='#81fe88'/> Voltar ao feed 
      </Link>
    </div>
  )
}