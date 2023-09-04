import reactLogo from "../assets/react.svg"

export default function Conteudo(){

    let reactLogoAlt = 'React Logo'
    return(
        <section>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias adipisci placeat rem odio illo pariatur aut minima aliquam, odit, optio blanditiis mollitia earum enim autem illum fugiat sapiente voluptates.</p>
                    <p>Voluptatibus a earum recusandae? Eligendi magnam, natus dolorem qui dolores repellat aspernatur porro vitae sint ut? Molestiae deleniti, consectetur eum ab eligendi delectus modi exercitationem. Non voluptas dolorum optio commodi.</p>
                    <p>Est, fugit voluptatum id corporis autem quasi minima, totam quo non ipsam similique minus molestias possimus, libero ullam eaque maxime saepe quas? At, delectus optio sapiente aut aperiam et voluptas!</p>
                    <img src="./assets/react.svg" alt="Logo React" />
                    <img src={reactLogo} alt={reactLogoAlt} />
                    <img src={props.viteLogoProps} alt={props.viteLogoAltProps} />
                </div>
        </section>
    )
}