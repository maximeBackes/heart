// Le tableau de bord est la structure où l'utilisateur visualise et synchronise ses constantes
import React, { Component } from 'react';
import Const from './InfoConstante';

class TableauDeBord extends Component {

    state = {
        titre: "Mon suivi",
        Infos: [
            { name: "Activité", value: "--" },
            { name: "Fréquence cardiaque", value: "--" },
            { name: "Pression artérielle", value: "--" },
            { name: "Oxygène", value: "--" },
            { name: "Glycémie", value: "--" }
        ]
    }


    render() {
        return (
            // Balise contenant tous les éléments d'infos sur les constantes
            <div >
                <h1>{this.state.titre}</h1>
                {
                    this.state.Infos.map((info, index) => {
                        return (
                            <div key={index}>
                                <Const name={info.name} value={info.value} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TableauDeBord;