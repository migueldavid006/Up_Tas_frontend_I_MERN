import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios";
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";


const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setcuentaConfirmada] = useState(false)

  const params = useParams();
  const {id} = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {

        const url = `/usuarios/confirmar/${id}`
        const {data} = await clienteAxios(url)


        setAlerta({
          msg : data.msg,
          error:false
        })

        setcuentaConfirmada(true)

      } catch (error) {

        setAlerta({
          msg: error.response.data.msg,
          error: true
        })

      }
    }
    confirmarCuenta();
  }, [])
  
  const {msg } = alerta

  return (
    <>

    <h1 className='text-sky-600 font-black text-6xl capitalize'>Confirma Tu Cuenta Y Comienza a Crear Tus Proyectos {''}<span className='text-slate-700'>proyectos</span></h1>
  
    <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">

      {msg && <Alerta alerta={alerta} />}

      {cuentaConfirmada && (
           <Link
           className=' block text-center my-5 text-slate-500 uppercase text-sm'
             to='/'
           > Inicia Secion
           </Link>
      )}

    </div>

    </>
  )
}

export default ConfirmarCuenta