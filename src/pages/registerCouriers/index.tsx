import React, { FormEvent, useCallback, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { MdKeyboardArrowLeft, MdImage, MdDone } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import 'react-toastify/dist/ReactToastify.css'
import Header from '../../components/Header'

import {
  Container,
  Content,
  Right,
  Left,
  Top,
  DropZone,
  Image,
  ButtonSubmit
} from './styles'
import api from '../../services/api'

interface Image {
  image: File
  preview: string
}

const RegisterCouriers: React.FC = () => {
  const [file, setFile] = useState<Image>(Object)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()

  const onDrop = useCallback(acceptedFile => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setFile({
        image: acceptedFile[acceptedFile.length - 1],
        preview: reader.result as string
      })
    }
    reader.readAsDataURL(acceptedFile[acceptedFile.length - 1])
    console.log(acceptedFile[0])
  }, [])

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDropAccepted: onDrop,
    accept: 'image/*'
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('image', file.image)

    if (name.length !== 0 && email.length !== 0 && file.preview.length !== 0) {
      try {
        const response = await api.post('/couriers', data)

        if (response.status === 200) {
          history.push('/couriers')
        } else {
          toast.error('Erro ao cadastrar, tente novamente')
        }
      } catch (erro) {
        toast.error(erro)
      }
    } else {
      toast.error('Entrada de dados inválida')
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <Top>
          <Left>
            <span>Cadastro de Entregadores</span>
          </Left>
          <Right>
            <Link to="/couriers">
              <MdKeyboardArrowLeft size={24} color="#FFFFFF" />
              <span>VOLTAR</span>
            </Link>
          </Right>
        </Top>
        <Content>
          <form onSubmit={handleSubmit}>
            <DropZone {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Solte seus arquivos aqui</p>
              ) : (
                <div>
                  {file.preview ? (
                    <Image src={file.preview} />
                  ) : (
                    <>
                      <MdImage size={48} color="#DDDDDD" />
                      <p>Adicionar imagem</p>
                      <p>Arraste suas imagens aqui</p>
                    </>
                  )}
                </div>
              )}
            </DropZone>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome"
              onChange={e => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email"
              onChange={e => setEmail(e.target.value)}
            />
            <ButtonSubmit type="submit">
              <MdDone size={20} color="#FFFFFF" />
              <span>SALVAR</span>
            </ButtonSubmit>
          </form>
        </Content>
      </Container>
    </>
  )
}

export default RegisterCouriers
