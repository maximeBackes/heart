// info constante est la structure qui contient une constante comme 'Activité' ou 'Pression artérielle'
import React, { Children, Component } from 'react';


const Const = (props, Children) => {

    // check l'existence de données à afficher, sinon valeur par défaut
    if (props) {
        return (
            <div className="info_const" style={{ backgroundColor: 'blueviolet', width: '400px', padding: '5px', margin: '5px auto' }}>
                <p><label>{props.name} : </label><span class="value">{props.value}</span></p>
            </div>
        )
    } else {
        return (
            null
        )
    }
}

export default Const;