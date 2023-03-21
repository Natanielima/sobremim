import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./sobremim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim 😃">
      <h3 className={styles.subtitulo}>Olá, eu sou o Nataniel</h3>

      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto Natanzinho Sorrindo"
      />
      <p className={styles.paragrafo}>
        Salve, tudo bem? Espero que sim, bem sou estudante de Analise e Desenvolvimento de Sistemas na Gran Faculdade, estou buscando estudos para realização da migração de área!
      </p>

      <p className={styles.paragrafo}>
        Iinicialmente me formei em Engenharia Civil e durante o curso vi a necessidade de adicionar mais tecnologias para agilizar os serviços a serem executados
        perante isso inicei estudos em programação na Alura e logo vi o mundo de oportunidades de linguagens que estariam disponíveis, não apenas a parte de Engenharia, mas sim de todas as profissões!
      </p>


      <p className={styles.paragrafo}>
      Com os estudos em na Alura iniciei nos cursos básicos de HTML5 e CSS3, logo fui passando para JavaScript e me dedicando mais! Cada dia busco evoluir um pouco para adquirir mais conhecimentos!

      </p>
      

      <p className={styles.paragrafo}>
      Hoje busco estágio na área e uma realocação de mercado para poder somar mais conhecimentos!
      </p>
      
    </PostModelo>
  );
}
