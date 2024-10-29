import { Heading } from "./components/Heading"
import { ArrowBack } from "./components/Icons/ArrowBack"
import Image from "next/image"
import Link from "next/link"

import style from './error/error.module.css'
import banner from './error/404.png'


export default function NotFound() {
  

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