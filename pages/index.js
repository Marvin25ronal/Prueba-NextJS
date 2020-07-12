import Estructure from '../components/estructure'
import Container from '../components/container'
import Carta from '../components/carta'
const Index = () => {
    return (
        <div>
            <Estructure />
            <Container>
                <br></br>

                <Carta header="Autor" theme="card text-white bg-primary mb-3" title="Marvin Ronaldo Martinez Marrquin" text="Soy estudiante de la Universidad de San Carlos de Guatemala" />

                <Carta header="Aplicacion" theme="card text-white bg-success mb-3" title="Desarrollo" text="Esta aplicacion esta desarrollada utilizando NextJs para crear una imagen de un contenedor" />

                <Carta header="Info" theme="card text-white bg-dark mb-3" title="Github" text="La aplicacion esta para conectar con un contenedor de Docker Compose y se encuentra en el siguiente enlace  https://github.com/Marvin25ronal/Guia-Docker" />
            </Container>
        </div>
    )
}

export default Index