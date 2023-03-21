import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Jovens!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Nataniel Lima. Estudante de Analise e desenvolvimento de Sistemas na faculdade Gran Cursos. Aqui compartilho com vocês vários conhecimentos, espero que gostem!
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="Circulo colorido"/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Natanzinho"/>
            </div>
        </div>
    )
}