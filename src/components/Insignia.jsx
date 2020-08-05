import React from 'react';
import './styles/Insignia.css'
import Logo from '../images/I.E.SantosAngelesCustodios.png'

class Insignia extends React.Component{
    render(){
        /*const firstName='David'
        const lastName= 'Diosa'
        const ocupacion= 'Estudiante'
        const usuarioGit= 'daviddiosa'*/

        return(
            <div className='Insignia'>
                <div className='Insignia_header'>
                    <img src= {Logo} alt='Logo'/>
                </div>
                <div className='Insignia__section_name'>
                    <img className="Insignia__avatar" src = {this.props.URLAvatar} alt="Foto de perfil"/>
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>
                <div className='Insignia__section_info'>
                    <h3>{this.props.ocupacion}</h3>
                    <div>{this.props.usuarioGit}</div>
                </div>
                <div className='Insignia__footer'>
                    Derechos reservados
                </div>
            </div>
        )
    }
}

export default Insignia;