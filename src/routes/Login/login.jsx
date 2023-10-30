
export default function Login(){

    //USE-STATE QUE VAI ARMAZENAR OS DADOS DO FORM.
    const [usuario,setUsuario] = UseState({
        email: "",
        senha:""
    })

    //PREENCHENDO DO FORM
    const HandleChange = (e)=>{
        //DESTRUCTURING NOS CAMPOS DO FORM(NAME, INPUT).
        const {name,value} = e.target;
        //PREENCHENDO O USE-STATE COM OS VALORES DA DESESTRUTURAÇÃO, UTILIZANDO O OPERADOR SPREAD.
        setUsuario({...usuario,[name]:value});
    }


    return(
        <div>
            <h1>Login</h1>
       
            <div>
                <form>
                    <fieldset>
                        <legend>User Information:</legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu e-mail." value={usuario.email} onChange={handle}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={HandleChange}/>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}